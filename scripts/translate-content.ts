/**
 * PSAM — Génération des traductions EN/ES du contenu des articles.
 * ---------------------------------------------------------------------------
 * Lit la source FR (lib/content.ts) et écrit lib/content.en.ts + lib/content.es.ts
 * en conservant STRICTEMENT la même structure (mêmes clés, IDs, slugs, champs).
 * Seuls les champs textuels sont traduits. Aucun contenu n'est inventé ni résumé.
 *
 * La sortie est un BROUILLON : chaque article traduit porte `reviewed: false`
 * et doit être relu/validé par l'équipe médicale avant publication.
 *
 * ── Exécution (Node >= 22, type-stripping natif) ───────────────────────────
 *   TRANSLATE_PROVIDER=deepl DEEPL_API_KEY=xxx node scripts/translate-content.ts
 *   TRANSLATE_PROVIDER=google GOOGLE_TRANSLATE_API_KEY=xxx node scripts/translate-content.ts
 *   TRANSLATE_PROVIDER=anthropic ANTHROPIC_API_KEY=xxx node scripts/translate-content.ts
 *   TRANSLATE_PROVIDER=none node scripts/translate-content.ts   # passthrough (scaffold)
 *
 * Le moteur est à CONFIRMER par l'équipe. La clé reste en variable d'env,
 * jamais committée. Sans provider configuré → 'none' (copie FR verbatim,
 * fichiers marqués "TRADUCTION NON FAITE" pour ne rien publier par erreur).
 *
 * ── Glossaire médical ──────────────────────────────────────────────────────
 * lib/medical-glossary.json impose une terminologie. Les termes sont protégés
 * avant l'appel au moteur puis restitués après → cohérence garantie.
 * L'équipe peut compléter ce fichier librement.
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

import {
  teamMembers,
  experts,
  poles,
  articles,
  partners,
  medicalDisclaimer,
  type TeamMember,
  type Expert,
  type Pole,
  type Article,
  type Partner,
} from '../lib/content.ts';

import glossaryFile from '../lib/medical-glossary.json' with { type: 'json' };

type Target = 'en' | 'es';

const __dirname = dirname(fileURLToPath(import.meta.url));
const LIB_DIR = join(__dirname, '..', 'lib');

const PROVIDER = (process.env.TRANSLATE_PROVIDER ?? 'none').toLowerCase();

// ───────────────────────────────────────────────────────────────────────────
// Glossaire — protection / restitution
// ───────────────────────────────────────────────────────────────────────────

const GLOSSARY: Record<string, { en?: string; es?: string }> = glossaryFile.terms ?? {};

function escapeRegExp(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Remplace les termes du glossaire par des sentinelles avant traduction. */
function protect(text: string, target: Target): { masked: string; map: [string, string][] } {
  const entries = Object.entries(GLOSSARY)
    .filter(([, v]) => v && v[target])
    .sort((a, b) => b[0].length - a[0].length); // plus longs d'abord

  const map: [string, string][] = [];
  let masked = text;
  let i = 0;
  for (const [fr, v] of entries) {
    const re = new RegExp(escapeRegExp(fr), 'gi');
    if (!re.test(masked)) continue;
    const token = `⟦G${i}⟧`; // ⟦G0⟧ — improbable à traduire
    masked = masked.replace(re, token);
    map.push([token, v[target]!]);
    i++;
  }
  return { masked, map };
}

function restore(text: string, map: [string, string][]): string {
  let out = text;
  for (const [token, term] of map) out = out.split(token).join(term);
  return out;
}

// ───────────────────────────────────────────────────────────────────────────
// Moteurs de traduction (clé via env, à confirmer par l'équipe)
// ───────────────────────────────────────────────────────────────────────────

async function deepl(text: string, target: Target): Promise<string> {
  const key = process.env.DEEPL_API_KEY;
  if (!key) throw new Error('DEEPL_API_KEY manquante');
  const url = process.env.DEEPL_API_URL ?? 'https://api-free.deepl.com/v2/translate';
  const body = new URLSearchParams({
    text,
    source_lang: 'FR',
    target_lang: target.toUpperCase(),
    preserve_formatting: '1',
  });
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `DeepL-Auth-Key ${key}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body,
  });
  if (!res.ok) throw new Error(`DeepL ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { translations: { text: string }[] };
  return data.translations[0].text;
}

async function google(text: string, target: Target): Promise<string> {
  const key = process.env.GOOGLE_TRANSLATE_API_KEY;
  if (!key) throw new Error('GOOGLE_TRANSLATE_API_KEY manquante');
  const res = await fetch(`https://translation.googleapis.com/language/translate/v2?key=${key}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ q: text, source: 'fr', target, format: 'text' }),
  });
  if (!res.ok) throw new Error(`Google ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { data: { translations: { translatedText: string }[] } };
  return data.data.translations[0].translatedText;
}

let anthropicClient: any = null;
async function anthropic(text: string, target: Target): Promise<string> {
  if (!process.env.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY manquante');
  if (!anthropicClient) {
    const { default: Anthropic } = await import('@anthropic-ai/sdk');
    anthropicClient = new Anthropic();
  }
  const langName = target === 'en' ? 'English' : 'Spanish';
  const model = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';
  const msg = await anthropicClient.messages.create({
    model,
    max_tokens: 4096,
    system:
      `You are a professional medical translator. Translate the user's French text into ${langName}. ` +
      `Rules: translate faithfully, do NOT summarize, do NOT add or remove information, ` +
      `preserve Markdown formatting exactly (##, ###, "- " bullets, line breaks, **bold**), ` +
      `keep placeholder tokens of the form ⟦G<number>⟧ untouched and in place. ` +
      `Output ONLY the translation, no preamble.`,
    messages: [{ role: 'user', content: text }],
  });
  return msg.content.map((b: any) => (b.type === 'text' ? b.text : '')).join('');
}

type Engine = (text: string, target: Target) => Promise<string>;
const ENGINES: Record<string, Engine> = {
  deepl,
  google,
  anthropic,
  none: async (text) => text, // passthrough — scaffold offline, NON traduit
};

const engine: Engine = ENGINES[PROVIDER];
if (!engine) {
  console.error(`Provider inconnu : "${PROVIDER}". Choix : deepl | google | anthropic | none`);
  process.exit(1);
}

// ───────────────────────────────────────────────────────────────────────────
// Traduction d'un champ (avec glossaire + cache)
// ───────────────────────────────────────────────────────────────────────────

const cache = new Map<string, string>();

async function tr(text: string | undefined | null, target: Target): Promise<string | undefined | null> {
  if (text == null) return text;
  if (text.trim() === '') return text;
  const key = `${target}::${text}`;
  if (cache.has(key)) return cache.get(key)!;

  const { masked, map } = protect(text, target);
  const translated = await engine(masked, target);
  const result = restore(translated, map);

  cache.set(key, result);
  return result;
}

// ───────────────────────────────────────────────────────────────────────────
// Traduction des collections (structure identique, IDs/slugs/URLs inchangés)
// ───────────────────────────────────────────────────────────────────────────

async function translateTeam(target: Target): Promise<TeamMember[]> {
  const out: TeamMember[] = [];
  for (const m of teamMembers) {
    out.push({
      ...m,
      role: (await tr(m.role, target)) as string,
      bio: (await tr(m.bio, target)) as string,
      description: (await tr(m.description, target)) as string | undefined,
      quote: (await tr(m.quote, target)) as string | undefined,
    });
  }
  return out;
}

async function translateExperts(target: Target): Promise<Expert[]> {
  const out: Expert[] = [];
  for (const e of experts) {
    out.push({
      ...e,
      role: (await tr(e.role, target)) as string,
      description: (await tr(e.description, target)) as string | undefined,
    });
  }
  return out;
}

async function translatePoles(target: Target): Promise<Pole[]> {
  const out: Pole[] = [];
  for (const p of poles) {
    out.push({
      ...p,
      title: (await tr(p.title, target)) as string,
      shortTitle: (await tr(p.shortTitle, target)) as string,
      description: (await tr(p.description, target)) as string,
    });
  }
  return out;
}

async function translateArticles(target: Target): Promise<Article[]> {
  const out: Article[] = [];
  let n = 0;
  for (const a of articles) {
    n++;
    process.stderr.write(`  [${target}] article ${n}/${articles.length} — ${a.slug}\n`);
    let videos = a.videos;
    if (videos) {
      videos = [];
      for (const v of a.videos!) {
        videos.push({ ...v, title: (await tr(v.title, target)) as string });
      }
    }
    out.push({
      ...a,
      title: (await tr(a.title, target)) as string,
      description: (await tr(a.description, target)) as string,
      content: (await tr(a.content, target)) as string | null,
      videos,
      reviewed: false, // ← brouillon, à valider par l'équipe médicale
    });
  }
  return out;
}

// ───────────────────────────────────────────────────────────────────────────
// Sérialisation TS (objet -> littéral valide, structure préservée)
// ───────────────────────────────────────────────────────────────────────────

function serialize(value: unknown): string {
  return JSON.stringify(value, null, 2);
}

function fileHeader(target: Target): string {
  const lang = target === 'en' ? 'ANGLAISE' : 'ESPAGNOLE';
  const warn =
    PROVIDER === 'none'
      ? `// ⚠️  TRADUCTION NON FAITE (provider="none", copie FR verbatim).\n` +
        `//     Régénérer avec un vrai moteur : TRANSLATE_PROVIDER=deepl DEEPL_API_KEY=... node scripts/translate-content.ts\n`
      : `// Moteur : ${PROVIDER}.\n`;
  return (
    `// ⚠️  FICHIER AUTO-GÉNÉRÉ — NE PAS ÉDITER À LA MAIN.\n` +
    `// Traduction ${lang} générée par scripts/translate-content.ts à partir de lib/content.ts.\n` +
    warn +
    `// BROUILLON : chaque article porte reviewed:false jusqu'à validation par l'équipe médicale.\n` +
    `// Généré le ${new Date().toISOString()}.\n\n` +
    `import type { TeamMember, Expert, Pole, Article, Partner } from './content';\n\n`
  );
}

function emit(
  target: Target,
  data: {
    teamMembers: TeamMember[];
    experts: Expert[];
    poles: Pole[];
    articles: Article[];
    partners: Partner[];
    medicalDisclaimer: string;
  },
): void {
  const body =
    fileHeader(target) +
    `export const teamMembers: TeamMember[] = ${serialize(data.teamMembers)};\n\n` +
    `export const experts: Expert[] = ${serialize(data.experts)};\n\n` +
    `export const poles: Pole[] = ${serialize(data.poles)};\n\n` +
    `export const partners: Partner[] = ${serialize(data.partners)};\n\n` +
    `export const articles: Article[] = ${serialize(data.articles)};\n\n` +
    `export const medicalDisclaimer = ${serialize(data.medicalDisclaimer)};\n`;

  const path = join(LIB_DIR, `content.${target}.ts`);
  writeFileSync(path, body, 'utf8');
  process.stderr.write(`✓ écrit ${path}\n`);
}

// ───────────────────────────────────────────────────────────────────────────
// Main
// ───────────────────────────────────────────────────────────────────────────

async function run(): Promise<void> {
  process.stderr.write(`Provider de traduction : ${PROVIDER}\n`);
  if (PROVIDER === 'none') {
    process.stderr.write('⚠️  Mode passthrough : sortie = copie FR verbatim (non traduite).\n');
  }

  for (const target of ['en', 'es'] as Target[]) {
    process.stderr.write(`\n── Génération ${target.toUpperCase()} ──\n`);
    const data = {
      teamMembers: await translateTeam(target),
      experts: await translateExperts(target),
      poles: await translatePoles(target),
      articles: await translateArticles(target),
      partners, // noms de marques — conservés verbatim
      medicalDisclaimer: (await tr(medicalDisclaimer, target)) as string,
    };
    emit(target, data);
  }
  process.stderr.write('\nTerminé. Relecture médicale requise avant publication.\n');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

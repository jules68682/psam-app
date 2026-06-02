// Sélecteur de contenu par langue.
// FR = source de vérité (lib/content.ts). EN/ES = brouillons auto-générés
// (lib/content.{en,es}.ts) — voir scripts/translate-content.ts.
// Structure identique aux 3 langues : l'app consomme toujours les mêmes clés.

import type { Lang } from './translations';
import * as fr from './content';
import * as en from './content.en';
import * as es from './content.es';

export function getContent(lang: Lang) {
  const m = lang === 'en' ? en : lang === 'es' ? es : fr;
  return {
    teamMembers: m.teamMembers,
    experts: m.experts,
    poles: m.poles,
    articles: m.articles,
    partners: m.partners,
    medicalDisclaimer: m.medicalDisclaimer,
  };
}

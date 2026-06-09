// Sources médicales des articles — conformité Apple App Store (guideline 1.4.1).
// Chaque contenu de santé doit citer des références crédibles, accessibles à
// l'utilisateur. Les sources sont indexées par slug d'article (identique dans
// les 3 langues) avec un repli par pôle, donc valables en FR/EN/ES.

export interface Source {
  /** Nom de la source (organisme, recommandation, publication). */
  label: string;
  /** Lien direct — ouvert via WebBrowser.openBrowserAsync. */
  url?: string;
}

// --- Sources de référence générales, par pôle ------------------------------
// Repli affiché quand un article n'a pas (encore) de sources spécifiques.
export const poleSources: Record<string, Source[]> = {
  "ergotherapie-ortheses": [
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
    { label: "Association Nationale Française des Ergothérapeutes (ANFE)", url: "https://www.anfe.fr" },
    { label: "Assurance Maladie — Arthrose", url: "https://www.ameli.fr/assure/sante/themes/arthrose" },
  ],
  hypnose: [
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
    { label: "INSERM — Évaluation de l'efficacité de l'hypnose", url: "https://www.inserm.fr" },
  ],
  chirurgie: [
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
    { label: "Société Française de Rhumatologie (SFR)", url: "https://sfr.larhumatologie.fr" },
    { label: "Société Française de Chirurgie de la Main (GEM)", url: "https://www.gem-sfcm.org" },
  ],
  nutrition: [
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
    { label: "ANSES — Recommandations nutritionnelles", url: "https://www.anses.fr" },
    { label: "Assurance Maladie — Arthrose", url: "https://www.ameli.fr/assure/sante/themes/arthrose" },
  ],
  beaute: [
    { label: "Société Française de Dermatologie (SFD)", url: "https://dermato-info.fr" },
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
  ],
  kinesitherapie: [
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
    { label: "Société Française de Rhumatologie (SFR)", url: "https://sfr.larhumatologie.fr" },
    { label: "Ordre des Masseurs-Kinésithérapeutes", url: "https://www.ordremk.fr" },
  ],
};

// --- Sources spécifiques, par article (slug) -------------------------------
// Priment sur le repli de pôle et le complètent.
export const articleSources: Record<string, Source[]> = {
  "arthrose-pouce-causes-evolution": [
    { label: "HAS — Prise en charge de l'arthrose", url: "https://www.has-sante.fr" },
    { label: "Société Française de Rhumatologie — Arthrose digitale", url: "https://sfr.larhumatologie.fr" },
    { label: "AFLAR — Association Française de Lutte Anti-Rhumatismale", url: "https://www.aflar.org" },
    { label: "Recommandations EULAR (arthrose de la main)", url: "https://www.eular.org" },
    { label: "Assurance Maladie — Arthrose", url: "https://www.ameli.fr/assure/sante/themes/arthrose" },
  ],
  "la-rhizarthrose": [
    { label: "Société Française de Rhumatologie — Rhizarthrose", url: "https://sfr.larhumatologie.fr" },
    { label: "AFLAR — Association Française de Lutte Anti-Rhumatismale", url: "https://www.aflar.org" },
    { label: "Société Française de Chirurgie de la Main (GEM)", url: "https://www.gem-sfcm.org" },
    { label: "Recommandations EULAR (arthrose de la main)", url: "https://www.eular.org" },
  ],
  "la-nutrition-anti-inflammatoire": [
    { label: "ANSES — Recommandations nutritionnelles", url: "https://www.anses.fr" },
    { label: "Société Française de Rhumatologie — Arthrose et mode de vie", url: "https://sfr.larhumatologie.fr" },
    { label: "Assurance Maladie — Arthrose", url: "https://www.ameli.fr/assure/sante/themes/arthrose" },
  ],
  "les-aliments-anti-inflammatoires": [
    { label: "ANSES — Recommandations nutritionnelles", url: "https://www.anses.fr" },
    { label: "Haute Autorité de Santé (HAS)", url: "https://www.has-sante.fr" },
  ],
};

/** Sources d'un article : spécifiques + repli de pôle, dédoublonnées par label. */
export function getArticleSources(slug: string, poleSlug: string): Source[] {
  const specific = articleSources[slug] ?? [];
  const fallback = poleSources[poleSlug] ?? [];
  const seen = new Set(specific.map(s => s.label));
  return [...specific, ...fallback.filter(s => !seen.has(s.label))];
}

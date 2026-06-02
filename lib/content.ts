// PSAM - Prévention Santé Arthrose Main
// Source de vérité : psam-contenu-complet.md

export interface TeamMember {
  id: string;
  name: string;
  initials: string;
  role: string;
  bio: string;
  description?: string; // alias for bio, kept for backward compat
  image?: string;
  quote?: string;
  website?: string;
  isFounder?: boolean;
}

export interface Expert {
  id: string;
  name: string;
  initials: string;
  role: string;
  description?: string; // kept for backward compat
  image?: string;       // kept for backward compat (no real photos — use initials avatar)
  website?: string;
}

export interface Pole {
  id: string;   // same as slug — kept for backward compat
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  image: string;
}

export interface Video {
  embedUrl: string;
  title: string;
}

export interface Article {
  slug: string;
  poleSlug: string;
  title: string;
  description: string;
  image: string;
  date?: string;
  author?: string;
  readingTime?: string; // kept for backward compat
  content: string | null; // null = à récupérer manuellement
  videos?: Video[];
  images?: string[];
  published: boolean;
  /** false = traduction auto non encore validée par l'équipe médicale.
   *  undefined sur la source FR (contenu d'origine). */
  reviewed?: boolean;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

// ---------------------------------------------------------------------------
// ÉQUIPE DIRIGEANTE
// ---------------------------------------------------------------------------

export const teamMembers: TeamMember[] = [
  {
    id: "joel-rezzouk",
    name: "Dr Joël REZZOUK",
    initials: "JR",
    role: "Président du comité scientifique, Chirurgien de la Main",
    bio: "Chirurgien de la main et du poignet depuis plus de 20 ans. Fondateur de l'Unité Santé Main Aquitaine et spécialisé dans l'arthrose et la rhizarthrose.",
    image: "/images/equipe/joel-rezzouk.JPG",
    quote:
      "Parce que trop de patients se sentent démunis face à l'arthrose de la main. PSAM, c'est un engagement : informer, expliquer et donner à chacun des solutions pour ralentir la maladie. Parce que mieux comprendre, c'est déjà mieux vivre !",
    website: "https://usma-sante.fr",
    isFounder: true,
  },
  {
    id: "corinne-moulet",
    name: "Corinne MOULET",
    initials: "CM",
    role: "Vice-Présidente, Nutritionniste & Hypnothérapeute",
    bio: "Nutritionniste spécialisée en nutrition anti-arthrose et hypnothérapeute. Elle anime des ateliers Nutri Arthrose pour aider chacun à adapter son alimentation et mieux vivre avec l'arthrose.",
    image: "/images/equipe/corinne-moulet.JPG",
    quote:
      "Ce que vous mettez dans votre assiette joue un rôle clé ! Certains aliments favorisent l'inflammation, d'autres la réduisent. Mieux manger, c'est aider vos articulations à mieux vieillir.",
    isFounder: true,
  },
  {
    id: "stephanie-lasserre",
    name: "Stéphanie LASSERRE",
    initials: "SL",
    role: "Directrice de Projet & Directrice administrative",
    bio: "Au sein de PSAM, Stéphanie est le point de contact central pour tous nos partenaires. En tant que responsable des partenariats, directrice de projet, chargée de communication et gestionnaire administrative, elle assure la liaison entre l'association et ses partenaires, institutions et interlocuteurs clés.",
    image: "/images/equipe/stephanie-lassere.jpg",
    isFounder: true,
  },
];

// ---------------------------------------------------------------------------
// EXPERTS
// ---------------------------------------------------------------------------

export const experts: Expert[] = [
  {
    id: "joel-rezzouk",
    name: "Dr Joël REZZOUK",
    initials: "JR",
    role: "Chirurgien de la Main",
    website: "https://usma-sante.fr",
  },
  {
    id: "valerie-madert",
    name: "Valérie MADERT",
    initials: "VM",
    role: "Ergothérapeute, Orthésiste",
    website: "https://orthese-main.com",
  },
  {
    id: "corinne-moulet",
    name: "Corinne MOULET",
    initials: "CM",
    role: "Nutritionniste, Hypnothérapeute",
  },
  {
    id: "rosario-baladron",
    name: "Rosario BALADRON",
    initials: "RB",
    role: "Kinésithérapeute de la Main",
  },
  {
    id: "michel-boutan",
    name: "Michel BOUTAN",
    initials: "MB",
    role: "Kinésithérapeute de la Main",
  },
];

// ---------------------------------------------------------------------------
// PARTENAIRES
// ---------------------------------------------------------------------------

export const partners: Partner[] = [
  {
    id: "arthrose-pouce",
    name: "Arthrose du Pouce",
    logo: "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/logo_AP_orange_site_internet.png",
    url: "https://www.arthrose-pouce.com",
  },
  {
    id: "credit-agricole",
    name: "Fondation Crédit Agricole",
    logo: "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.15.58.png",
    url: "https://www.fondation-ca-solidaritedeveloppement.org",
  },
  {
    id: "sogeca",
    name: "SOGECA",
    logo: "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.17.11.png",
    url: "https://www.sogeca.com",
  },
];

// ---------------------------------------------------------------------------
// PÔLES
// ---------------------------------------------------------------------------

export const poles: Pole[] = [
  {
    id: "ergotherapie-ortheses",
    slug: "ergotherapie-ortheses",
    title: "Ergothérapie, Orthèses, Matériels et soins apaisants",
    shortTitle: "Ergothérapie & Orthèses",
    description:
      "Orthèses sur mesure, exercices protecteurs, matériels adaptés et gestes du quotidien pour soulager l'arthrose de la main.",
    icon: "Hand",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
  },
  {
    id: "hypnose",
    slug: "hypnose",
    title: "Hypnose préparatoire et anti-douleur",
    shortTitle: "Hypnose",
    description:
      "Préparation mentale à la chirurgie, gestion de la douleur chronique et auto-hypnose pour mieux vivre avec l'arthrose.",
    icon: "Brain",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    id: "chirurgie",
    slug: "chirurgie",
    title: "Chirurgie, rhizarthrose",
    shortTitle: "Chirurgie",
    description:
      "Comprendre la rhizarthrose, les options chirurgicales, les prothèses et la prise en charge post-opératoire.",
    icon: "Stethoscope",
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80",
  },
  {
    id: "nutrition",
    slug: "nutrition",
    title: "Nutrition anti-inflammatoire / Micronutrition",
    shortTitle: "Nutrition",
    description:
      "L'alimentation, première des médecines. Aliments protecteurs, menus anti-inflammatoires et micronutrition ciblée.",
    icon: "Apple",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80",
  },
  {
    id: "beaute",
    slug: "beaute",
    title: "Beauté et médecine esthétique des mains",
    shortTitle: "Beauté",
    description:
      "Rajeunissement, soins hydratants, médecine esthétique et routines pour prendre soin de ses mains à tout âge.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80",
  },
  {
    id: "kinesitherapie",
    slug: "kinesitherapie",
    title: "Kinésithérapie",
    shortTitle: "Kinésithérapie",
    description:
      "Rééducation spécialisée, protocoles post-chirurgie, renforcement musculaire et conseils pour les musiciens.",
    icon: "Dumbbell",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
  },
];

// ---------------------------------------------------------------------------
// ARTICLES
// ---------------------------------------------------------------------------

export const articles: Article[] = [
  // ── PÔLE ERGOTHÉRAPIE / ORTHÈSES ─────────────────────────────────────────

  {
    slug: "ortheses-post-operatoires",
    poleSlug: "ergotherapie-ortheses",
    title: "Orthèses (post-opératoires)",
    description: "Le rôle et l'importance de l'orthèse dans la récupération après chirurgie.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-12_a_14.01.04_45af858a-200a-445e-882a-cd2769310b14.png",
    videos: [
      { embedUrl: "https://www.youtube.com/embed/gkmW4clboy4", title: "Orthèses — vidéo 1" },
      { embedUrl: "https://www.youtube.com/embed/J3vyX6kWxlA", title: "Orthèses — vidéo 2" },
    ],
    content: `## Qu'est-ce qu'une orthèse ?

Une orthèse est un dispositif médical externe, conçu pour soutenir, immobiliser ou corriger une articulation ou une partie du corps. Dans le cas de l'arthrose de la main, l'orthèse vise à soulager la douleur, limiter les mouvements douloureux et protéger les articulations fragilisées.

## Types d'orthèses pour l'arthrose de la main

Privilégier les orthèses réalisées sur mesure : elles sont adaptées à la morphologie de la main, offrent un ajustement précis et un confort optimal, permettant une meilleure efficacité et un port prolongé.

- **Orthèse de repos longue** : portée principalement la nuit ou lors de phases douloureuses, elle immobilise le poignet et le pouce pour réduire l'inflammation. À porter également lors de moments de repos dans la journée.
- **Orthèse de jour** : plus courte, elle permet de maintenir une bonne posture articulaire tout en laissant la main fonctionnelle. Elle stabilise la base du pouce pour limiter la douleur lors des mouvements de préhension.
- **Orthèse doigt à doigt** : maintien d'un ou plusieurs doigts pour lutter contre la déformation et limiter la douleur. À porter la nuit.
- **Orthèse d'activité** : conçue pour être portée lors de certaines activités spécifiques (travail, loisirs), elle protège l'articulation tout en permettant une mobilité adaptée.

## Comment les orthèses aident-elles au quotidien ?

- Réduction de la douleur en limitant les mouvements excessifs
- Protection des articulations fragiles lors des activités
- Amélioration de la fonction manuelle grâce à une meilleure stabilité
- Diminution de la fatigue musculaire

## Conseils pour bien utiliser une orthèse

- Toujours suivre les recommandations de votre professionnel de santé
- Porter l'orthèse aux moments où la douleur ou la fatigue se manifeste
- Ne pas forcer sur l'articulation immobilisée
- Vérifier régulièrement l'état de l'orthèse (usure, ajustement)
- Associer l'orthèse à des exercices et gestes protecteurs

## Quand consulter un professionnel ?

- Dès l'apparition de douleurs persistantes ou de déformations
- Pour un bilan personnalisé et le choix de l'orthèse adaptée
- En cas d'inconfort, de douleur nouvelle ou de problème d'ajustement
- Pour un suivi régulier et une adaptation en fonction de l'évolution de la maladie`,
    published: true,
  },
  {
    slug: "ergotherapie",
    poleSlug: "ergotherapie-ortheses",
    title: "Ergothérapie",
    description: "Qu'est-ce que l'ergothérapie et comment peut-elle vous aider ?",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-12_a_15.04.51_31643476-948d-4124-b48a-958bad35497e.png",
    videos: [
      { embedUrl: "https://www.youtube.com/embed/fQLBOwMh7W4", title: "Ergothérapie — présentation" },
    ],
    content: `## Qu'est-ce que l'ergothérapie ?

L'ergothérapie permet de prendre conscience des postures et des mouvements et de rechercher des alternatives pour mieux utiliser les articulations. L'ergothérapie offre un «mode d'emploi» pour la main.

## Les objectifs de l'ergothérapie pour l'arthrose

L'intervention est toujours personnalisée, selon les besoins et les priorités de chacun :

- Soulager la douleur par des techniques adaptées et des conseils d'économie articulaire
- Maintenir ou améliorer la mobilité et la souplesse des doigts et du poignet
- Préserver la force musculaire, tout en évitant les efforts nuisibles
- Adapter les gestes du quotidien pour protéger les articulations
- Faciliter les activités importantes : cuisiner, s'habiller, écrire, jardiner, etc.
- Retrouver confiance dans l'utilisation de ses mains

## Le bilan ergothérapique : une étape essentielle

Avant toute prise en charge, l'ergothérapeute réalise un bilan fonctionnel et occupationnel. Il comprend :

- L'observation des gestes de la vie quotidienne : ouvrir un bocal, boutonner une chemise, se coiffer, écrire, etc.
- L'évaluation de la douleur, de la force, de la mobilité articulaire
- L'identification des priorités de la personne
- L'analyse du contexte de vie : domicile, loisirs, travail, habitudes

## Que propose concrètement l'ergothérapeute ?

**Rééducation fonctionnelle douce** : exercices de mobilité fine et globale, renforcement musculaire adapté, travail de la coordination et de la préhension, étirements doux.

**Éducation gestuelle & protection articulaire** : apprendre à éviter les mouvements nocifs (torsion, pincement…), adopter des gestes protecteurs dans les activités quotidiennes.

**Préconisation d'aides techniques** : conseils sur les outils ergonomiques : stylos, ustensiles, poignées, ouvre-bocaux, etc.

**Aménagement de l'environnement** : astuces pour le logement, la cuisine, la salle de bain, idées d'organisation pour réduire les contraintes sur les mains.

## Quand consulter un ergothérapeute ?

Il n'est jamais trop tôt ni trop tard pour consulter. L'ergothérapeute peut aider en prévention dès les premières douleurs, en complément d'un traitement médical ou kiné, après une opération ou en cas de perte d'autonomie.`,
    published: true,
  },
  {
    slug: "exercices-ergotherapie",
    poleSlug: "ergotherapie-ortheses",
    title: "Exercices Ergothérapie",
    description: "Exercices simples et gestes protecteurs à pratiquer au quotidien pour préserver la mobilité de vos mains.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-4_39e2cdc6-ed88-4a27-b4ff-cd78efb862a3.png",
    date: "2024-08-02",
    images: [
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.49.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.26.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.09.png",
    ],
    content: `## Pourquoi bouger ses mains est essentiel

En cas d'arthrose, on peut être tenté de moins utiliser sa main par peur d'avoir mal. Pourtant, une activité régulière et douce est essentielle pour :

- Maintenir la souplesse des articulations
- Préserver la force musculaire
- Réduire la raideur
- Limiter l'évolution de l'arthrose

Les exercices doivent être adaptés, progressifs et non douloureux.

## Quelques exercices simples à pratiquer au quotidien

### 1. Ouverture et fermeture de la main

- Ouvrir lentement les doigts au maximum
- Puis refermer doucement en formant un poing sans serrer
- Répéter 10 fois

### 2. Éventail des doigts

- Poser la main à plat sur une table
- Écarter lentement les doigts
- Puis les rapprocher
- Répéter 10 fois

### 3. Mobilisation du pouce

- Toucher chaque bout de doigt avec le pouce (pince)
- Puis amener le pouce vers la base du petit doigt
- Répéter 5 à 10 fois

### 4. Étirement doux

- Étirer doucement les doigts vers l'arrière avec l'autre main
- Maintenir quelques secondes
- Ne jamais forcer si la douleur apparaît

**Conseil :** faire les exercices dans une pièce chauffée ou après avoir réchauffé les mains (eau tiède, gant chauffant, etc.).

## Quand arrêter un exercice ?

- Si un exercice provoque une douleur vive, il faut l'arrêter
- Une légère gêne est normale au début, mais elle ne doit pas persister
- Demandez conseil à un professionnel si vous avez un doute ou si la douleur augmente

Un ergothérapeute peut adapter les exercices à votre situation précise et vous accompagner dans votre progression.

## Gestes protecteurs à adopter

L'ergothérapie enseigne des gestes simples pour limiter les pressions sur les articulations et éviter les douleurs :

- Utiliser la paume de la main plutôt que les doigts pour pousser
- Porter les objets avec les deux mains ou en les calant contre soi
- Éviter les gestes de pincement avec le pouce et l'index
- Préférer les outils à gros manches ou les aides ergonomiques
- Utiliser les articulations les plus solides (poignet, avant-bras, épaules)
- Alterner les activités pour éviter les gestes répétitifs prolongés`,
    published: true,
  },
  {
    slug: "ergonomie-au-travail",
    poleSlug: "ergotherapie-ortheses",
    title: "Ergonomie au travail",
    description: "Comment améliorer la qualité de vie professionnelle avec l'arthrose de la main.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-3_06771c50-d31b-4f4f-bcf2-85a959211a05.png",
    content: `## Importance de l'ergonomie

L'ergonomie au travail vise à adapter le poste et les gestes pour réduire les contraintes sur les articulations, prévenir la douleur et la fatigue, et ainsi préserver la fonction de la main malgré l'arthrose. Une bonne ergonomie permet aussi de limiter l'aggravation des lésions arthrosiques.

## Principes clés

- **Position neutre des mains et poignets** : garder les mains dans un alignement naturel sans flexion ou extension excessive
- **Alternance des tâches** : varier les activités et les mouvements pour ne pas solliciter continuellement les mêmes articulations
- **Pauses régulières** : intégrer des pauses fréquentes pour détendre les muscles et les articulations
- **Utilisation d'aides techniques** : outils ergonomiques (claviers, souris, instruments à manche large), repose-poignets, supports adaptés

## Conseils pratiques

- Ajuster la hauteur du bureau et de la chaise pour avoir les bras en angle droit, épaules détendues
- Organiser l'espace de travail pour limiter les mouvements répétitifs ou les efforts excessifs
- Utiliser des supports pour les avant-bras afin de réduire la pression sur les poignets
- Préférer des outils à poignée large ou recouverte de matériaux souples
- Éviter les gestes de pincement prolongés ou répétitifs
- Porter une orthèse prescrite pendant certaines activités professionnelles si nécessaire
- Maintenir une bonne posture globale (dos, épaules, cou)

## Quand consulter un ergothérapeute ?

- Pour un bilan personnalisé du poste de travail et des gestes
- Pour la mise en place d'adaptations spécifiques (matériel, organisation du travail)
- Pour un apprentissage des gestes protecteurs et des exercices adaptés`,
    published: true,
  },
  {
    slug: "gestion-de-la-douleur",
    poleSlug: "ergotherapie-ortheses",
    title: "Ergothérapie et Gestion de la douleur",
    description: "Comment soulager la douleur grâce à l'ergothérapie.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Douleur_au_travail_en_teletravail_b926cec5-e3ce-44d5-9bdd-54f055145599.png",
    content: `## Comprendre la douleur liée à l'arthrose

L'arthrose est une maladie dégénérative des articulations qui provoque une inflammation locale, entraînant des douleurs et une raideur, particulièrement au réveil ou après un effort. La douleur est un signal d'alerte, mais elle peut aussi devenir chronique et limiter la qualité de vie.

## Techniques non médicamenteuses

- **Gestes et postures adaptés** : éviter les mouvements brusques ou répétitifs, utiliser les gestes protecteurs enseignés en ergothérapie
- **Exercices doux** : mobilisations régulières pour maintenir la souplesse articulaire
- **Thermothérapie** : application de chaleur (bouillotte, bain chaud) pour détendre les muscles et réduire la raideur, ou froid (glace) en cas de poussée inflammatoire
- **Massages adaptés** : réalisés par un professionnel pour améliorer la circulation et détendre les tissus
- **Topiques** (crèmes, gels) appliqués localement pour un effet ciblé. Il existe des baumes naturels ayant une action anti-inflammatoire.
- **Relaxation et gestion du stress** : techniques de respiration, méditation ou sophrologie peuvent diminuer la perception de la douleur

## Rôle de l'ergothérapie dans la gestion de la douleur

- Enseignement des gestes protecteurs
- Adaptation des activités quotidiennes pour limiter les contraintes sur les articulations douloureuses
- Conseils sur les aides techniques et orthèses
- Mise en place d'un programme d'exercices personnalisés

## Quand consulter un professionnel ?

- Si la douleur est persistante, intense ou évolutive
- En cas de limitations fonctionnelles importantes
- Pour un bilan et un ajustement du traitement
- Pour un accompagnement en ergothérapie ou en kinésithérapie`,
    published: true,
  },
  {
    slug: "materiels-soins-terebenthine",
    poleSlug: "ergotherapie-ortheses",
    title: "Matériels d'ergothérapie, Soins térébenthine",
    description: "Les bons gestes, les astuces du quotidien et les soins apaisants.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-5_d6e2b6f7-06c8-40f0-990d-7f57c5ef7bce.png",
    content: `## Les bons outils pour protéger vos mains au quotidien

Ici vous allez trouver des astuces pour la plupart des gestes du quotidien.

## Soins et toilettes

- Poignées de douche ergonomiques : antidérapantes et faciles à saisir, réduisent l'effort et la douleur
- Brosses à long manche pour le dos ou les pieds, évitent les torsions
- Distributeurs de savon automatiques ou avec pompe facile à presser
- Sièges et barres d'appui pour plus de sécurité et moins de contraintes sur les mains

## Cuisine et repas

- Ouvre-bocaux à levier ou électriques pour éviter la torsion du poignet
- Ustensiles à manches larges et antidérapants (couteaux, cuillères, spatules)
- Couteaux à bascule ou couteaux ergonomiques facilitent la coupe avec moins d'effort
- Planche à découper antidérapante pour plus de stabilité
- Épluche-légumes avec manche large et coupe nette

## Écriture et bureau

- Stylos ergonomiques larges et légers, avec grip confortable
- Supports et repose-poignets pour réduire la tension lors de la frappe ou de l'écriture
- Claviers et souris ergonomiques pour diminuer les contraintes sur les mains
- Supports de documents inclinés pour éviter les postures forcées

## Ménage et entretien

- Balais et manches réglables pour éviter de plier les doigts et le poignet
- Gants de ménage antidérapants et rembourrés pour protéger les mains
- Ouvre-bouteilles et tournevis avec prises ergonomiques
- Aspirateurs légers avec poignée adaptée

## Jardinage

- Outils à manches larges et ergonomiques (sécateurs, bêches, fourches)
- Gants renforcés et confortables pour protéger la peau et les articulations
- Tabourets ou sièges mobiles pour éviter les postures pénibles
- Arrosoirs légers à poignée ergonomique

## Conseils généraux pour choisir ses aides techniques

- Opter pour des matériaux légers et solides
- Choisir des formes arrondies et antidérapantes
- Prendre des objets à manche large et confortable
- Tester avant d'acheter si possible
- Ne pas hésiter à demander conseil à un ergothérapeute`,
    published: true,
  },

  // ── PÔLE HYPNOSE ──────────────────────────────────────────────────────────

  {
    slug: "quest-ce-que-l-hypnose",
    poleSlug: "hypnose",
    title: "Qu'est-ce que l'hypnose ?",
    description:
      "Définition, mécanismes et bienfaits de l'hypnose dans la prise en charge de la douleur et de l'arthrose de la main.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-16_993553cc-a3de-42c6-a49e-58764d8dd056.png",
    date: "2024-08-02",
    videos: [
      {
        embedUrl: "https://www.youtube.com/embed/Lfx22Tv-i90",
        title: "Place de l'hypnose dans la chirurgie pour rhizarthrose",
      },
    ],
    content: `## 1. Définition

L'hypnose est un état modifié de conscience dans lequel l'attention se focalise sur certaines sensations, pensées ou images, tout en réduisant la perception de l'environnement extérieur. C'est un état naturel que nous expérimentons tous chaque jour : par exemple, lorsque l'on est absorbé dans un livre ou un film au point d'en oublier la notion du temps.

En hypnothérapie, cet état est utilisé à des fins thérapeutiques pour influencer positivement la perception, les émotions et certains processus physiologiques, notamment la douleur.

## 2. Les mécanismes de l'hypnose

L'hypnose agit sur le système nerveux central en modifiant :

- **La perception de la douleur** : elle n'est pas effacée, mais vécue différemment.
- **La réponse émotionnelle** : l'anxiété et la peur sont diminuées, réduisant l'impact du stress sur les muscles et les articulations.
- **La communication corps-esprit** : en stimulant la détente musculaire, la circulation et la régulation nerveuse.

## 3. Lien avec l'arthrose de la main

Dans l'arthrose (notamment la rhizarthrose, arthrose de la base du pouce), la douleur chronique entretient un cercle vicieux : tension musculaire → inflammation → perception accrue de la douleur.

L'hypnose aide à rompre ce cercle en :

- Diminution de la perception douloureuse
- Amélioration de la tolérance aux gestes quotidiens
- Réduction des tensions musculaires autour de l'articulation
- Amélioration du sommeil, ce qui favorise la récupération

## 4. Déroulement d'une séance

1. **Accueil et entretien** : identification des besoins (douleur, anxiété, sommeil, préparation à un geste médical).
2. **Induction** : techniques pour guider le patient vers un état de conscience modifié (respiration, fixation visuelle, métaphores).
3. **Travail thérapeutique** : visualisations, suggestions positives, métaphores ciblées sur la main, la mobilité et le confort.
4. **Réveil** : retour progressif à un état d'éveil complet.

Une séance dure en moyenne 30 à 60 minutes et peut se pratiquer assis ou allongé.

## 5. Les bienfaits validés en contexte articulaire

- Diminution des douleurs chroniques
- Meilleure gestion des poussées douloureuses
- Détente générale, réduisant la tension musculaire
- Soutien à la rééducation (meilleure participation et tolérance aux exercices)

## 6. Bien choisir son hypnothérapeute

- Formation reconnue : hypnose Ericksonienne, hypnose médicale, hypnoanalgésie
- Expérience dans la prise en charge de la douleur et/ou des pathologies de la main
- Approche personnalisée : adaptation des techniques aux besoins du patient (douleur, anxiété, sommeil)
- Travail en coordination avec les autres professionnels de santé (médecin, kiné, ergo)

Demandez toujours quelle formation le praticien a suivie, et s'il travaille en lien avec des structures médicales.`,
    published: true,
  },
  {
    slug: "auto-hypnose",
    poleSlug: "hypnose",
    title: "Qu'est-ce que l'Auto Hypnose ?",
    description:
      "Pratiquer l'hypnose sur soi-même pour gérer la douleur chronique, améliorer le sommeil et retrouver confort et mobilité.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-17_fd7e2daf-2614-41c7-ae5a-0b173d2cc0ed.png",
    content: `## 1. Définition

L'auto-hypnose est une technique d'hypnose que l'on pratique sur soi-même, sans l'intervention directe d'un praticien. Elle consiste à induire volontairement un état hypnotique pour atteindre un objectif précis : gestion de la douleur, détente profonde, amélioration du sommeil, concentration, etc.

Contrairement à l'hypnose guidée, l'auto-hypnose est autonome : vous en êtes à la fois le "praticien" et le bénéficiaire.

## 2. Comment ça marche ?

L'auto-hypnose utilise les mêmes mécanismes que l'hypnose accompagnée :

- **Respiration contrôlée** : ralentit le rythme cardiaque et favorise la détente musculaire
- **Focalisation de l'attention** : sur une image, un souvenir ou une sensation agréable
- **Suggestions mentales** : phrases ou visualisations positives répétées pour modifier la perception de la douleur ou induire un état de bien-être

En agissant sur le système nerveux central, l'auto-hypnose diminue la transmission des signaux douloureux et augmente la sensation de confort.

## 3. Pourquoi c'est utile dans l'arthrose de la main

- Réduction des poussées douloureuses grâce à une meilleure gestion émotionnelle et nerveuse
- Diminution des tensions musculaires qui aggravent la douleur articulaire
- Amélioration de la mobilité grâce à un état de détente globale
- Complément efficace aux séances de kinésithérapie, ergothérapie ou hypnose médicale

## 4. Conseils pour débuter

- Choisir un environnement calme où vous ne serez pas dérangé
- Adopter une position confortable (assis ou allongé)
- Fermer les yeux et respirer profondément pendant 1 à 2 minutes
- Visualiser un lieu agréable ou imaginer la main entourée d'une lumière chaude et apaisante
- Introduire des suggestions positives, par exemple : *"Mon pouce est détendu et léger."* / *"Chaque respiration apporte du confort à ma main."*
- Revenir doucement à l'état normal après 5 à 10 minutes

## 5. Les premiers pas : exercices simples

- **Exercice de la main légère** : imaginer que votre main flotte, comme portée par un coussin d'air
- **Exercice du gant anesthésiant** : visualiser que vous enfilez un gant qui diffuse chaleur et confort dans votre main
- **Exercice de la couleur apaisante** : imaginer une couleur qui vous apporte détente (bleu, vert, doré) et la faire circuler dans votre main

## 6. Lien avec la méditation

- **Points communs** : concentration sur le moment présent, apaisement mental, régulation du stress
- **Différences** : la méditation observe sans chercher à changer, l'auto-hypnose utilise activement la suggestion pour transformer la perception ou le ressenti

Pratiquer 5 à 10 minutes par jour suffit pour ressentir les bienfaits, et cela devient plus facile avec l'entraînement.`,
    published: true,
  },
  {
    slug: "hypnose-pre-operatoire",
    poleSlug: "hypnose",
    title: "Hypnose pré-opératoire en préparation à une chirurgie de la main",
    description:
      "Comment l'hypnose prépare mentalement et physiologiquement à la chirurgie de la main et réduit le risque d'algoneurodystrophie.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_15_juil._2025_a_12_23_27_35cd7f95-9797-4940-9639-b4fba3ad79a1.png",
    videos: [
      {
        embedUrl: "https://www.youtube.com/embed/AUEHMaAwFTk",
        title: "Hypnose pré-opératoire — introduction",
      },
      {
        embedUrl: "https://www.youtube.com/embed/5JVF7DUSFYk",
        title: "Séance d'auto-hypnose à pratiquer avant une chirurgie de la main",
      },
    ],
    content: `## 1. Objectif des séances préopératoires

La chirurgie de la main (réparation de tendons, libération nerveuse, prothèse de pouce, trapézectomie…) est un acte précis qui mobilise autant le corps que l'esprit.

Une préparation par l'hypnose permet de :

- Réduire l'anxiété et le stress avant l'intervention
- Installer un état de confiance envers l'équipe chirurgicale
- Préparer mentalement à mieux gérer la douleur après l'opération
- Faciliter le réveil et la récupération

Tout cela contribue à réduire considérablement les risques d'algoneurodystrophie.

## 2. Pourquoi ça fonctionne

- **Réduction de la peur** : l'hypnose agit sur le système limbique (siège des émotions), réduisant l'activation du stress
- **Suggestion positive** : le cerveau préprogramme des réactions de détente et de confort pour le jour J
- **Amélioration de la tolérance à la douleur** : apprentissage de techniques utilisables immédiatement après l'opération
- **Impact physiologique** : baisse de la tension artérielle, réduction du rythme cardiaque, amélioration de l'oxygénation

## 3. Lien avec l'algoneurodystrophie (syndrome douloureux régional complexe)

L'algoneurodystrophie est une complication possible après une chirurgie ou un traumatisme de la main.

Elle se manifeste par :
- Douleur disproportionnée
- Raideur articulaire importante
- Gonflement et changements de couleur ou de température de la peau

**Rôle de l'hypnose dans la prévention et la prise en charge :**

- Diminution de l'hyperactivité du système nerveux autonome impliqué dans la douleur et l'œdème
- Relaxation musculaire pour limiter la raideur
- Meilleure adhésion à la rééducation en réduisant la peur du mouvement
- Recadrage sensoriel : transformation de la perception de la douleur en sensations plus neutres ou confortables

L'apprentissage de l'auto-hypnose avant la chirurgie permet d'être autonome dès la sortie du bloc opératoire pour gérer l'inconfort et favoriser une récupération rapide.`,
    published: true,
  },
  {
    slug: "hypnose-anti-douleur",
    poleSlug: "hypnose",
    title: "Hypnose anti-douleur",
    description:
      "Apprendre à réduire soi-même la perception de la douleur avec la technique « La lumière apaisante ».",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-13_a_13.53.35_3c0de3ca-a787-4d80-9422-177478248a08.png",
    content: `## Objectif

Apprendre à réduire soi-même la perception de la douleur, à détendre la main et à créer un espace intérieur de confort, utilisable en toute autonomie à la maison, au travail ou lors des soins.

## Préparation à la séance

- Choisissez un endroit calme où vous ne serez pas dérangé
- Adoptez une position confortable, assis ou allongé
- Éteignez ou mettez en mode silencieux votre téléphone

## "La lumière apaisante"

**Durée :** 8 à 12 minutes
**Objectif :** réduire la douleur et relâcher les tensions musculaires de la main

### Étape 1 — Entrer dans l'état hypnotique

- Fermez les yeux
- Prenez trois grandes inspirations par le nez et expirez lentement par la bouche
- À chaque expiration, imaginez que votre corps devient un peu plus lourd et détendu

### Étape 2 — Focalisation sur la respiration

- Concentrez-vous sur l'air qui entre et sort
- Imaginez que chaque inspiration apporte un peu plus de calme dans votre main

### Étape 3 — Visualisation de la lumière

- Imaginez au-dessus de votre main une lumière douce, dorée et chaude
- Voyez-la descendre doucement jusqu'à entourer complètement votre main
- Cette lumière pénètre à l'intérieur de chaque articulation, de chaque muscle, et diffuse chaleur, confort et souplesse

### Étape 4 — Suggestion de confort

- Répétez mentalement : *"À chaque respiration, ma main devient plus souple, plus légère, plus confortable."*
- Imaginez la douleur comme une couleur sombre qui se dissout dans la lumière dorée

### Étape 5 — Ancrage positif

- Choisissez un geste discret (serrer doucement le pouce contre l'index) pour associer ce geste à cette sensation de confort
- La prochaine fois que vous ressentirez une gêne, ce geste rappellera à votre corps cette détente

### Étape 6 — Retour

- Ramenez doucement votre attention à la pièce, bougez vos doigts, ouvrez les yeux
- Prenez un moment pour observer les changements de sensations

## Conseils pratiques

- Répéter 1 à 2 fois par jour, même sans douleur, pour entraîner le cerveau à entrer rapidement dans cet état
- Utiliser la technique pendant les poussées douloureuses ou avant un geste qui sollicite beaucoup la main
- Associer si possible à des exercices doux de mobilité pour optimiser le confort articulaire`,
    published: true,
  },

  // ── PÔLE CHIRURGIE ────────────────────────────────────────────────────────

  {
    slug: "arthrose-pouce-causes-evolution",
    poleSlug: "chirurgie",
    title: "Arthrose du pouce : causes, évolution et facteurs aggravants",
    description:
      "Comprendre pourquoi l'arthrose de la main apparaît, comment elle évolue et ce qui peut l'aggraver.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_16_juil._2025_a_16_50_16_32bd410f-f25d-46d8-b037-0f6f68b41b1a.png",
    date: "2026-05-18",
    content: `## Comprendre l'arthrose de la main et du pouce

L'arthrose de la main est une maladie chronique des articulations liée à une usure progressive du cartilage. Le cartilage est un tissu souple qui permet aux os de glisser sans douleur lors des mouvements. Lorsqu'il s'abîme, les articulations deviennent moins fluides, plus sensibles et peuvent se déformer avec le temps.

L'arthrose peut toucher plusieurs zones de la main :
- les doigts
- la base du pouce (rhizarthrose)
- le poignet dans certains cas

La rhizarthrose, qui concerne l'articulation située à la base du pouce, est l'une des formes les plus fréquentes. Le pouce étant essentiel dans la plupart des gestes du quotidien, cette atteinte peut rapidement devenir handicapante.

## Pourquoi l'arthrose apparaît-elle ?

L'arthrose n'a pas une seule cause. Elle résulte souvent de plusieurs facteurs associés.

**L'âge :** Avec le temps, le cartilage perd progressivement en souplesse et en capacité de réparation. Le risque d'arthrose augmente donc naturellement avec l'âge.

**Les mouvements répétés :** Certaines activités professionnelles, sportives ou manuelles sollicitent fortement les articulations de la main : gestes répétitifs, serrage, pincement, utilisation d'outils vibrants, travail prolongé sur écran ou smartphone. Ces contraintes mécaniques répétées peuvent accélérer l'usure articulaire.

**Les facteurs héréditaires :** Certaines personnes présentent une prédisposition familiale. L'arthrose des doigts est notamment plus fréquente dans certaines familles.

**Les traumatismes :** Une fracture, une entorse, une luxation ou une ancienne blessure de la main ou du pouce peuvent fragiliser une articulation et favoriser l'apparition d'une arthrose secondaire.

**Les hormones :** L'arthrose de la main touche plus souvent les femmes, notamment après la ménopause, suggérant un rôle hormonal dans son développement.

**L'hyperlaxité et certaines morphologies :** Des articulations très souples ou certaines formes anatomiques du pouce peuvent entraîner une instabilité favorisant l'usure du cartilage.

## Comment évolue l'arthrose ?

L'arthrose évolue généralement lentement, sur plusieurs années.

Au début, les douleurs apparaissent surtout lors des efforts : ouvrir un bocal, tourner une clé, porter des objets, écrire, utiliser un téléphone.

Puis les symptômes peuvent devenir plus fréquents :
- douleurs au repos
- perte de force
- raideur matinale
- gêne dans les gestes fins
- sensation de craquement
- gonflement articulaire

Avec le temps, certaines articulations peuvent se déformer. Dans la rhizarthrose, le pouce peut perdre en stabilité et en force, rendant certains gestes du quotidien difficiles.

L'évolution est très variable d'une personne à l'autre. Certaines arthroses restent peu gênantes pendant des années, tandis que d'autres deviennent rapidement invalidantes.

## Les facteurs qui aggravent l'arthrose

Certains éléments peuvent accélérer l'évolution ou augmenter les douleurs :

- les gestes répétitifs excessifs
- le port de charges lourdes
- le manque de repos articulaire
- certaines activités manuelles intensives
- les mauvaises postures
- le stress et la fatigue
- le tabac
- le surpoids (qui favorise l'inflammation générale)
- l'absence de prise en charge précoce

Des poussées inflammatoires peuvent également survenir par périodes, provoquant davantage de douleur et de gonflement.

## Peut-on agir ?

Oui. Une prise en charge précoce permet souvent de ralentir l'évolution et d'améliorer le confort au quotidien.

La prévention repose notamment sur :

- l'adaptation des gestes
- la protection des articulations
- les exercices adaptés
- le maintien de la mobilité
- une bonne hygiène de vie
- l'utilisation d'attelles lorsque nécessaire
- un accompagnement médical personnalisé

Mieux comprendre son arthrose permet d'agir plus tôt et de préserver durablement la fonction de la main.`,
    published: true,
  },
  {
    slug: "la-rhizarthrose",
    poleSlug: "chirurgie",
    title: "La rhizarthrose",
    description:
      "Définition, causes, symptômes, diagnostic et traitements de l'arthrose de la base du pouce.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_16_juil._2025_a_16_50_16_e2101b5d-c218-4804-aa6d-ec1e26edde7e.png",
    videos: [
      {
        embedUrl: "https://www.youtube.com/embed/8hWU1x01hrU",
        title: "La rhizarthrose — explications",
      },
    ],
    content: `## Qu'est-ce que la rhizarthrose ?

La rhizarthrose est une arthrose de l'articulation trapézo-métacarpienne (TM), c'est-à-dire l'articulation située à la base du pouce, entre l'os trapèze du poignet et le premier métacarpien. C'est l'une des formes d'arthrose les plus fréquentes de la main.

## Causes et facteurs de risque

- **Âge :** la prévalence augmente avec l'âge
- **Sexe féminin :** les femmes sont nettement plus touchées, notamment après la ménopause
- **Prédispositions génétiques :** antécédents familiaux d'arthrose de la main
- **Activités répétitives :** sollicitation intense du pouce (couturières, musiciens, artisans)
- **Traumatismes antérieurs :** entorse, fracture ancienne de la base du pouce

## Symptômes

- Douleur à la base du pouce, surtout lors des gestes de pince (ouvrir un bocal, tourner une clé)
- Raideur matinale
- Gonflement de l'articulation
- Déformation progressive
- Perte de force de préhension

## Diagnostic

Le diagnostic repose sur :
- L'examen clinique (palpation de la base du pouce, test de la colonne du pouce)
- La radiographie standard (pincement de l'interligne articulaire, ostéophytes)
- L'IRM si nécessaire pour évaluer les tissus mous

## Traitements

### Traitements conservateurs (non chirurgicaux)

- Antalgiques et anti-inflammatoires (selon prescription médicale)
- Orthèses stabilisatrices de la colonne du pouce
- Kinésithérapie spécialisée
- Infiltrations de corticoïdes
- Nutrition anti-inflammatoire

### Traitements chirurgicaux

- **Arthroplastie (trapézectomie-ligamentoplastie)** : ablation de l'os trapèze et reconstruction ligamentaire — technique de référence
- **Prothèse trapézo-métacarpienne** : remplacement de l'articulation par une prothèse
- **Ostéotomie** : réaxage osseux dans certains cas précoces
- **Fusion articulaire** : rare, réservée à certaines situations particulières

## Prévention et adaptation

- Utiliser des outils à manches larges
- Éviter les gestes de pincement répétitifs
- Porter une orthèse de stabilisation lors des activités
- Pratiquer des exercices de renforcement adaptés`,
    published: true,
  },
  {
    slug: "la-chirurgie-prothetique",
    poleSlug: "chirurgie",
    title: "La Chirurgie Prothétique",
    description:
      "Qu'est-ce qu'un chirurgien de la main ? Comment se déroule une intervention de rhizarthrose ?",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-19_5808fe9e-a19c-4d5c-a71d-2eda804ee51b.png",
    videos: [
      { embedUrl: "https://www.youtube.com/embed/M4GSxkmvyJg", title: "Chirurgie prothétique — vidéo 1" },
      { embedUrl: "https://www.youtube.com/embed/PGBY51V_ipg", title: "Chirurgie prothétique — vidéo 2" },
      { embedUrl: "https://www.youtube.com/embed/LykGmVy5YrI", title: "Chirurgie prothétique — vidéo 3" },
      { embedUrl: "https://www.youtube.com/embed/Hbfpse11sKQ", title: "Chirurgie prothétique — vidéo 4" },
    ],
    content: `## Chirurgien de la main – un métier de précision

Un chirurgien de la main est un spécialiste formé à la prise en charge médicale et chirurgicale des pathologies de la main, du poignet, des nerfs, des tendons.

C'est une surspécialité issue de la chirurgie orthopédique ou plastique, nécessitant une formation complémentaire rigoureuse.

Ses domaines d'intervention incluent :
- Traumatologie : fractures, plaies tendineuses ou nerveuses, urgences de la main
- Pathologies dégénératives : arthrose du pouce (rhizarthrose), doigts à ressaut
- Microchirurgie : réparation des nerfs et des vaisseaux, greffes, réimplantations
- Pathologies fonctionnelles : canal carpien, kystes, compression nerveuse

## La Chirurgie

La chirurgie avec prothèse articulaire vise à remplacer l'articulation abîmée par une prothèse.

L'intervention se déroule sous anesthésie loco-régionale : seul votre bras sera endormi. L'intervention dure un peu moins d'une heure, vous pourrez rentrer chez vous le jour même. Après l'opération, vous devrez porter une attelle pendant 3 semaines. Vous aurez également des séances de rééducation pendant deux mois afin de vous aider à retrouver une totale mobilité de votre pouce et améliorer votre force de préhension.

Lors de l'intervention, vous serez éveillé puisque l'anesthésie est loco-régionale. Vous serez installé en position couchée, sur le dos, avec le bras opéré bien exposé sur une tablette. Une antisepsie sera réalisée pour désinfecter la zone opérée et éviter les infections. Vous devrez avoir pris une douche la veille et le matin de l'intervention.

L'intervention consiste en une incision assez petite, entre 3 et 4 centimètres. Puis le chirurgien dégage les tissus mous, les tendons et les muscles pour pouvoir accéder à l'articulation sans toucher les structures environnantes. Il enlève ensuite la partie ostéochondrale usée et positionne la prothèse. Il vérifie le bon fonctionnement de la prothèse et referme les tissus et la peau avec des sutures.

## 1. Principe & fonctionnement de la prothèse

La prothèse utilise un concept de double mobilité, initialement développé pour les prothèses de hanche, appliqué à l'articulation trapézo-métacarpienne (base du pouce). Il comporte :
- Une cupule (sphérique ou conique) scellée dans le trapèze
- Un insert en polyéthylène hautement réticulé (PE) qui s'articule à la fois avec la cupule et la tête métallique, offrant deux degrés de liberté articulaires

Cette conception permet de réduire les risques de luxation et d'accroître l'amplitude de mouvement, tout en répartissant mieux les contraintes mécaniques.

## 2. Matières & composants de la prothèse

- **Cupules (sphériques ou coniques)** en acier inoxydable, revêtues de titane et d'hydroxyapatite (HAP) pour favoriser leur fixation osseuse
- **Insert** : polyéthylène hautement réticulé (PE), durable et résistant à l'usure
- **Tige** (colonne métacarpienne) en titane (avec revêtement titane+HAP), disponible en plusieurs tailles (XS à 4), formes anatomiques (trilobées), et hauteurs variées (6, 8, 10 mm), pour adapter précisément à l'anatomie du patient

## 3. Durabilité & résultats cliniques

Études à court/moyen terme montrent des résultats fonctionnels très encourageants (mobilité, soulagement de la douleur, satisfaction).

À 2 ans de suivi :
- **Survie implantaire** estimée à 96 %, taux de réintervention < 5 %
- **Douleur au repos** tombée à 0 (sur échelle DASH) chez la majorité des patients
- **Force de préhension** (pince pouce-index) significativement augmentée (~4,5 kg → ~7 kg)

Comparée à la trapézectomie classique, la prothèse permet une récupération plus rapide (retour au travail, meilleure force).

## 4. Mise en place chirurgicale de la prothèse

La chirurgie requiert un ancillaire spécifique de dernière génération pour positionner précisément les composants.

Il est impératif de centrer et positionner la cupule **perpendiculaire à l'axe du métacarpien**, pour maximiser la mobilité (jusqu'à 116°) et éviter les conflits intra-prothétiques. Un positionnement incorrect peut entraîner usure prématurée ou descellement.

L'intervention se déroule en plusieurs étapes : préparation métacarpienne et trapézienne, choix des composants adaptés, test de stabilité et de mobilité, suture et pansement.`,
    published: true,
  },
  {
    slug: "protheses-tmc-et-digitales-ipp",
    poleSlug: "chirurgie",
    title: "Prothèses trapézométacarpiennes et prothèses digitales IPP",
    description:
      "Tout savoir sur les prothèses trapézométacarpiennes et digitales IPP",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-30_111ac8b4-d5ea-4a85-81af-47b88db9f53a.png",
    content: `## 1. Principe & fonctionnement de la prothèse TMC

La prothèse utilise un concept de double mobilité, initialement développé pour les prothèses de hanche, appliqué à l'articulation trapézo-métacarpienne (base du pouce). Il comporte :
- Une cupule (sphérique ou conique) scellée dans le trapèze
- Un insert en polyéthylène hautement réticulé (PE) qui s'articule à la fois avec la cupule et la tête métallique, offrant deux degrés de liberté articulaires

Cette conception permet de réduire les risques de luxation et d'accroître l'amplitude de mouvement, tout en répartissant mieux les contraintes mécaniques.

## 2. Matières & composants

- **Cupules** en acier inoxydable, revêtues de titane et d'hydroxyapatite (HAP) pour favoriser leur fixation osseuse
- **Insert** : polyéthylène hautement réticulé (PE), durable et résistant à l'usure
- **Tige** en titane, disponible en plusieurs tailles (XS à 4), formes anatomiques (trilobées), et hauteurs variées (6, 8, 10 mm)

## 3. Durabilité & résultats cliniques

Études à court/moyen terme montrent des résultats fonctionnels très encourageants.

À 2 ans de suivi :
- **Survie implantaire** estimée à 96 %, taux de réintervention < 5 %
- **Douleur au repos** tombée à 0 (sur échelle DASH) chez la majorité des patients
- **Force de préhension** significativement augmentée (~4,5 kg → ~7 kg)

Comparée à la trapézectomie classique, la prothèse permet une récupération plus rapide.

## 4. Mise en place chirurgicale

La chirurgie requiert un ancillaire spécifique de dernière génération. Il est impératif de centrer et positionner la cupule **perpendiculaire à l'axe du métacarpien**, pour maximiser la mobilité (jusqu'à 116°) et éviter les conflits intra-prothétiques.

L'intervention se déroule en plusieurs étapes : préparation métacarpienne et trapézienne, choix des composants adaptés, test de stabilité et de mobilité, suture et pansement.

## Prothèse IPP (Interphalangienne Proximale)

### Qu'est-ce qu'une prothèse IPP ?

La prothèse IPP remplace l'articulation située entre la première et la deuxième phalange (articulation proximale du doigt), souvent altérée par l'arthrose. Elle vise à restaurer une articulation mobile, réduire la douleur et permettre une fonction digitale plus fluide.

### Différents types de prothèses IPP

1. **Spacers (espaceurs en silicone)** : maintiennent un espace entre les os à l'aide d'un matériau souple. Avantages : longue durée de vie, changement relativement simple. Inconvénient : la mobilité diminue avec le temps à cause du dépôt osseux autour de l'implant.

2. **Prothèses articulaires à glissement ou charnière** : imitent une articulation naturelle, avec deux surfaces qui coulissent l'une sur l'autre. Fabriquées dans des matériaux biocompatibles (alliages chrome-cobalt, pyrocarbone, ou métal + polyéthylène).

3. **Prothèse anatomique totale (ex. TACTYS)** : dispositif modulaire non contraint conçu pour reproduire la flexion naturelle de l'articulation.

4. **Design semi-contraint (ex. IPP2)** : préserve l'axe de flexion naturel, offre une bonne stabilité (flexion jusqu'à ~100°) et assure une fixation durable grâce à un revêtement titane poreux.

### Matériaux courants

- **Silicone médical** : souple, toléré, mais la mobilité peut décliner avec le temps
- **Chrome-cobalt / pyrocarbone** : résistants à l'usure et rigides
- **Métal + polyéthylène** : combinent robustesse et glissement fluide

### Procédure chirurgicale et post-opératoire

- **Préopératoire** : bilan radiologique précis, évaluation de l'état osseux et ligamentaire
- **Intervention** : réalisée en ambulatoire, sous anesthésie locale ou locorégionale. L'accès est possible par voie dorsale (via les extenseurs) ou palmaire selon les cas
- **Fixation de l'implant** : soit cimentée, soit scellée, selon le type de prothèse
- **Après l'opération** : soins de pansement durant environ 15 jours ; attelle dynamique 4 à 6 semaines (voie dorsale) ou strapping adjacent (voie palmaire). Mobilisation douce encouragée rapidement.

### Avantages et limites

**Avantages :**
- Diminution significative de la douleur
- Récupération de la mobilité (flexion moyenne ~90° pour des articulations jusqu'à 110-120°)
- Fonction améliorée pour les actions simples

**Limites :**
- Mobilité pas toujours pleinement rétablie selon l'état initial et les soins post-opératoires
- Usure et nécessité de suivi régulier
- Risques généraux : infection, raideur, déboîtement, réactions biologiques`,
    published: true,
  },

  // ── PÔLE NUTRITION ────────────────────────────────────────────────────────

  {
    slug: "les-10-regles-or",
    poleSlug: "nutrition",
    title: "Les 10 règles d'OR de l'alimentation anti-inflammatoire",
    description:
      "Les principes fondamentaux d'une alimentation qui protège vos articulations au quotidien.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-17_8806a71d-b363-41f7-b8a1-214aa404019c.png",
    date: "2026-03-20",
    content: `## Les 10 règles d'or

1. **Abondance et diversité de légumes et fruits de saison** — 50 % de l'assiette (vitamines, minéraux, polyphénols, antioxydants, fibres prébiotiques)

2. **Booster la consommation d'oméga 3**
   - Huile riche en oméga 3 : 1 à 2 cuillères à soupe par jour
   - Petits poissons gras : 2 à 3 fois par semaine
   - Oléagineux : noix

3. **Limiter les aliments à index glycémique élevé** — sucres rapides, pain blanc, produits sucrés industriels

4. **Respecter l'équilibre de l'assiette acido-basique** — privilégier légumes, fruits, légumineuses

5. **Réduire la consommation de viande rouge et charcuterie** — sources de graisses saturées pro-inflammatoires

6. **Réduire fortement les produits transformés et ultra-transformés** — favoriser producteurs locaux et circuits courts

7. **Limiter la consommation de sel** — remplacer par gomasio et épices

8. **Contrôler le poids** — le surpoids aggrave l'inflammation articulaire systémique

9. **Lutter contre la sédentarité** — une activité physique douce et régulière reste essentielle

10. **Prendre le pouvoir sur l'arthrose** — harmonie de vie, sommeil de qualité, limitation du stress`,
    published: true,
  },
  {
    slug: "la-nutrition-anti-inflammatoire",
    poleSlug: "nutrition",
    title: "La nutrition anti-inflammatoire",
    description:
      "\"L'alimentation est la première des médecines.\" Comprendre comment l'assiette agit sur l'arthrose.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-5_f5888581-44a7-4e8b-9c14-073688c6067a.png",
    date: "2025-10-24",
    videos: [
      {
        embedUrl: "https://www.youtube.com/embed/cXXAe4-UyKU",
        title: "La nutrition anti-inflammatoire",
      },
    ],
    content: `> *"L'alimentation est la première des médecines"* — Hippocrate

## Comprendre

La nutrition anti-inflammatoire est une approche alimentaire qui vise à réduire l'inflammation chronique dans l'organisme. Elle repose sur trois grands principes :

1. **Réduire** les aliments pro-inflammatoires (sucre raffiné, excès de graisses saturées, produits ultra-transformés)
2. **Augmenter** les aliments protecteurs et réparateurs (oméga-3, antioxydants, fibres)
3. **Soutenir** les processus naturels de résolution de l'inflammation, grâce à des nutriments spécifiques

**Bénéfices attendus :**
- Diminution de la douleur articulaire
- Meilleure mobilité
- Énergie et récupération améliorées
- Soutien de la santé globale (cœur, cerveau, digestion)

## Pourquoi l'alimentation est importante dans la rhizarthrose

- **Réduire la douleur** : en diminuant les molécules pro-inflammatoires circulantes dans le corps, on peut atténuer les poussées douloureuses
- **Préserver la mobilité** : moins d'inflammation signifie souvent moins de raideur matinale et plus de facilité dans les gestes quotidiens
- **Soutenir la réparation tissulaire** : certains nutriments (oméga-3, antioxydants) soutiennent le renouvellement cellulaire et limitent les dommages oxydatifs
- **Améliorer l'état général** : un corps moins inflammé est aussi plus énergique et récupère mieux après l'effort ou la rééducation

## Les bases de la nutrition anti-inflammatoire

### À limiter — aliments pro-inflammatoires

- Sucres rapides (sodas, bonbons, pâtisseries)
- Graisses saturées en excès (fritures, charcuteries)
- Produits ultra-transformés riches en additifs et sel

### À augmenter — aliments protecteurs

- Fruits et légumes colorés (antioxydants puissants)
- Poissons gras et graines riches en oméga-3 (EPA, DHA, ALA)
- Huiles végétales de qualité (olive, colza, lin)
- Épices anti-inflammatoires (curcuma, gingembre)

**Varier et équilibrer** : pour éviter carences et déséquilibres, tout en gardant le plaisir de manger.

## Le mécanisme en bref

- **Sans alimentation adaptée** : l'organisme reste dans un état de micro-inflammation chronique, qui entretient les douleurs articulaires et accélère la dégradation du cartilage
- **Avec alimentation anti-inflammatoire** : on diminue la production de cytokines pro-inflammatoires et on favorise la libération de médiateurs pro-résolution (SPM) issus des oméga-3, qui aident à éteindre l'inflammation

## Exemple concret — Arthrose du pouce et alimentation

Une personne souffrant de rhizarthrose qui adopte une alimentation riche en poissons gras, légumes variés et épices anti-inflammatoires, et qui réduit sa consommation de produits industriels sucrés et salés, peut constater :

1. Moins de gonflement de l'articulation
2. Moins de douleurs lors des gestes de pince (ouvrir un bocal, écrire)
3. Moins de raideur le matin
4. Plus d'énergie pour suivre les séances de kinésithérapie ou d'ergothérapie

> **Astuce :** Penser à chaque repas comme à une "opportunité anti-inflammatoire". Un simple ajout (une poignée de noix, une cuillère d'huile d'olive, quelques fruits rouges) peut faire la différence sur le long terme.`,
    published: true,
  },
  {
    slug: "les-aliments-anti-inflammatoires",
    poleSlug: "nutrition",
    title: "Les Aliments anti-inflammatoires",
    description:
      "Guide complet des aliments à privilégier pour soutenir vos articulations et réduire l'inflammation.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-2_12a441b6-ddd4-474a-9114-57ca2d3ca2ba.png",
    date: "2025-10-24",
    content: `## Soutenir vos articulations par l'assiette

Une alimentation anti-inflammatoire est l'un des piliers pour mieux vivre avec la rhizarthrose. Chaque aliment présenté ici est choisi pour son potentiel à réduire l'inflammation, soutenir la souplesse articulaire et limiter les douleurs.

## 1. Fruits et légumes colorés

**Exemples :** myrtilles, framboises, cerises, oranges, épinards, brocoli, chou kale, poivrons rouges, carottes

**Riches en :** antioxydants (vitamine C, bêta-carotène, flavonoïdes, anthocyanes)

**Bénéfices pour l'arthrose du pouce :**
- Neutralisent les radicaux libres responsables de l'usure du cartilage
- Réduisent les réactions inflammatoires au niveau articulaire
- Favorisent la production de collagène pour des tissus plus résistants

## 2. Sources d'oméga-3

**Exemples :** saumon, sardines, maquereaux, truite, graines de lin, graines de chia, noix, huile de colza, huile de lin

**Riches en :** acides gras EPA, DHA, ALA

**Bénéfices pour l'arthrose du pouce :**
- Réduisent la production de cytokines pro-inflammatoires
- Soutiennent la lubrification articulaire
- Participent à la régénération cellulaire et à la résolution naturelle de l'inflammation

## 3. Huiles de qualité

**Exemples :** huile d'olive extra-vierge, huile de noix, huile de lin (à froid)

**Riches en :** polyphénols, acides gras mono et polyinsaturés

**Bénéfices :** L'oléocanthal de l'huile d'olive a des propriétés proches de certains anti-inflammatoires naturels. Limite l'inflammation chronique et protège les membranes cellulaires.

## 4. Épices et herbes aromatiques

**Exemples :** curcuma (avec poivre noir pour augmenter son absorption), gingembre, ail, oignon, thym, romarin

**Riches en :** curcumine, gingerol, composés soufrés, antioxydants

**Bénéfices pour l'arthrose du pouce :**
- Action anti-inflammatoire directe sur les articulations
- Améliorent la circulation locale, réduisant les sensations de raideur
- Peuvent réduire la perception de la douleur grâce à leurs effets sur certaines voies nerveuses

## 5. Protéines maigres et légumineuses

**Exemples :** poulet, dinde, œufs, lentilles, pois chiches, haricots rouges, tofu

**Bénéfices :** maintiennent la masse musculaire autour de l'articulation, apportent des nutriments nécessaires à la réparation des tissus

## 6. Céréales complètes

**Exemples :** quinoa, riz complet, flocons d'avoine, sarrasin

**Bénéfices :** stabilisent la glycémie, apport continu d'énergie

## 7. Boissons protectrices

**Exemples :** thé vert, tisanes curcuma-gingembre, eau citronnée

**Bénéfices :** action antioxydante, soutien hydratation

> **Astuce :** Variez les couleurs dans l'assiette chaque jour — plus il y a de couleurs, plus il y a de molécules protectrices.`,
    published: true,
  },
  {
    slug: "petits-dejeuners-anti-inflammatoires",
    poleSlug: "nutrition",
    title: "Petits déjeuners anti-inflammatoires",
    description:
      "Guide complet pour composer des petits-déjeuners protecteurs et gourmands. Par Corinne Moulet, diététicienne micro-nutritionniste.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-35_2f6e5506-b215-453a-9011-6b2bb46788ff.png",
    date: "2025-10-24",
    author: "Corinne Moulet — Diététicienne Micro-nutritionniste",
    content: `## La formule de base

Un petit-déjeuner anti-inflammatoire équilibré repose sur 4 éléments :

1. **1 boisson chaude ou fraîche** — thé vert, tisane, eau citronnée, café (modéré)
2. **1 glucide IG bas ou modéré riche en fibres** — céréales complètes, pain au levain, flocons d'avoine, sarrasin, fruits
3. **1 protéine** — œufs, fromage blanc, yaourt nature, produits laitiers, poisson fumé
4. **1 matière grasse** — oléagineux, purées d'oléagineux (amande, noisette), avocat, huile de qualité

## Sources de protéines

- Œufs (coque, brouillés, pochés)
- Produits laitiers : yaourt, fromage blanc, fromage à pâte dure
- Poisson fumé : saumon, truite
- Viandes maigres (volaille)

## Glucides à IG bas

- Céréales complètes (avoine, seigle, épeautre)
- Pain au levain ou pain complet
- Fruits frais de saison
- Légumineuses (rares au petit-déj mais possibles : houmous sur tartine)

## Bonnes graisses

- Noix, amandes, noisettes, noix du Brésil
- Purées d'oléagineux (sans sucre ajouté)
- Avocat
- Huile de lin ou de colza (à froid, sur tartine)

## Idées de petit-déjeuners rapides

- **Tartine gourmande salée** : pain au levain + avocat écrasé + œuf poché + graines de sésame
- **Bol d'açaï** : base açaï congelée + fruits rouges + granola sans sucre + noix + filet de miel
- **Bol super food** : yaourt grec + myrtilles + graines de chia + flocons d'avoine + noix
- **Miam aux fruits** : flocons d'avoine + lait végétal + banane + fruits rouges + cannelle
- **Tartine ricotta** : pain complet + ricotta + framboises + filet de miel + amandes effilées`,
    published: true,
  },
  {
    slug: "idees-menus",
    poleSlug: "nutrition",
    title: "Les idées menus anti-inflammatoires",
    description:
      "Une galerie de menus anti-inflammatoires pour s'inspirer au quotidien.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-7_24670c68-8809-436d-9140-a831cfd196d4.png",
    date: "2025-08-13",
    images: [
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-8.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-5.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-6.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-9.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-10.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-11.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-12.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-13.png",
    ],
    content: `## Inspiration repas

Ces idées menus illustrent comment composer des repas anti-inflammatoires variés, gourmands et accessibles.

Chaque menu respecte les principes de la nutrition anti-inflammatoire : abondance de végétaux colorés, oméga-3 présents, glucides à IG bas, protéines maigres et bonnes graisses.`,
    published: true,
  },
  {
    slug: "micronutrition",
    poleSlug: "nutrition",
    title: "Micronutrition",
    description:
      "Vitamines, minéraux et oligo-éléments : comment la micronutrition optimise la santé articulaire.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-14_bded3d70-326d-4572-8de1-f055788b313b.png",
    date: "2024-08-02",
    content: `## 1. Qu'est-ce que la micronutrition ?

La micronutrition est une approche de la santé qui se concentre sur les micronutriments — vitamines, minéraux, oligo-éléments, acides gras essentiels, antioxydants, acides aminés, probiotiques…

Ces éléments, bien que nécessaires en très petites quantités, jouent un rôle majeur dans le fonctionnement optimal de nos cellules, la protection contre l'inflammation et la régénération tissulaire.

Dans le cas de l'arthrose de la main (et particulièrement la rhizarthrose), la micronutrition vise à :
- Réduire l'inflammation chronique de l'articulation
- Soutenir la réparation et la souplesse des tissus articulaires
- Améliorer la lubrification articulaire
- Limiter la progression de l'usure du cartilage

## 2. Les grands principes appliqués à l'arthrose

- **Principe 1 – Corriger les déficits** : Un manque en vitamine D, magnésium ou oméga-3 peut aggraver l'inflammation et la dégradation articulaire.
- **Principe 2 – Optimiser les apports protecteurs** : Apporter suffisamment d'antioxydants (vitamines C et E, polyphénols) pour contrer les radicaux libres qui endommagent le cartilage.
- **Principe 3 – Favoriser l'équilibre global** : Soutenir l'équilibre intestinal (microbiote) qui influence l'inflammation systémique.

## 3. Comment et pourquoi ça fonctionne ?

Dans l'arthrose, l'inflammation libère des enzymes destructrices qui dégradent le cartilage. Les micronutriments agissent à différents niveaux :

- **Anti-inflammatoires naturels** (oméga-3, curcumine) → réduisent la production de cytokines pro-inflammatoires
- **Antioxydants** (vitamines C, E, sélénium, zinc) → limitent le stress oxydatif qui abîme les cellules articulaires
- **Cofacteurs enzymatiques** (magnésium, manganèse, cuivre) → nécessaires à la fabrication de collagène et d'élastine, composants clés des articulations
- **Probiotiques** → améliorent l'équilibre intestinal, ce qui module la réponse inflammatoire globale

## 4. Conseils pratiques

- Faire un bilan micronutritionnel avant toute supplémentation pour cibler vos besoins réels
- Associer les compléments à une alimentation anti-inflammatoire (richesse en oméga-3, fibres, végétaux colorés)
- Fractionner les prises dans la journée pour une meilleure absorption
- Hydrater régulièrement pour soutenir la fonction articulaire

> **Note importante :** La micronutrition ne remplace pas les traitements médicaux ni la rééducation, mais elle optimise l'efficacité de l'ensemble du parcours de soins. Il est important d'en parler avec votre médecin traitant car il peut y avoir des interactions avec certains traitements.`,
    published: true,
  },

  // ── PÔLE BEAUTÉ ───────────────────────────────────────────────────────────

  {
    slug: "le-vieillissement-cutane-des-mains",
    poleSlug: "beaute",
    title: "Le Vieillissement cutané des mains",
    description: "Comment préserver et retrouver la jeunesse de nos mains",
    image: "/images/beaute/vieillissement-mains.webp",
    content: `## 1. Les spécificités de la peau des mains

- Peu de glandes sébacées → peau plus sèche que le visage, moins protégée par le film lipidique naturel
- Exposition constante → soleil, eau, produits ménagers, variations de température
- Peu de tissu adipeux sous-cutané → les tendons, veines et os deviennent plus visibles avec le temps

## 2. Les mécanismes du vieillissement

- **Vieillissement intrinsèque** : lié à l'âge et à la génétique. Les cellules se renouvellent plus lentement, la production de collagène et d'élastine diminue, la peau perd en fermeté et en épaisseur
- **Vieillissement extrinsèque** : causé par les agressions extérieures (UV, tabac, pollution, produits irritants). Les UV sont responsables de 80 % du vieillissement visible
- **Photovieillissement** : apparition de taches brunes (lentigos solaires), texture irrégulière, perte d'élasticité
- **Altérations vasculaires** : fragilisation des capillaires, donnant une peau plus fine et marbrée
- **Fonte graisseuse** : perte progressive de la graisse sous-cutanée, rendant les structures profondes visibles

## 3. Conséquences esthétiques

- Peau fine, fripée, sèche
- Taches pigmentaires et irrégularités de couleur
- Relief marqué des veines et tendons
- Perte de douceur et d'hydratation

## 4. Les facteurs aggravants à éviter

- **Le soleil sans protection** : principal responsable du vieillissement prématuré. Provoque taches brunes, perte d'élasticité et texture irrégulière
- **Les produits irritants** : détergents, solvants et produits ménagers agressifs altèrent la barrière cutanée
- **Le tabac** : réduit la microcirculation, accélère la dégradation du collagène et ternit le teint
- **Le froid et la sécheresse** : fragilisent la peau déjà peu protégée par les glandes sébacées
- **Les gestes répétitifs** : l'exposition prolongée à l'eau et aux frottements use davantage la peau fine des mains

## 5. Quand consulter un spécialiste ?

Certains signes méritent une consultation médicale :

- **Taches pigmentaires** nombreuses ou qui évoluent rapidement
- **Perte de volume** marquée rendant les veines et tendons très saillants
- **Sécheresse extrême** résistant aux soins habituels
- **Prurit ou irritations** persistantes

Un chirurgien de la main ou un dermatologue pourra évaluer l'état cutané et proposer des solutions adaptées : soins médicaux, injections de comblement ou traitements dermatologiques.`,
    published: true,
  },
  {
    slug: "prevention-vieillissement-mains",
    poleSlug: "beaute",
    title: "Prévention",
    description: "Prévention du vieillissement de nos mains",
    image: "/images/beaute/prevention.webp",
    content: `## 1. Protection solaire au quotidien

- Crème SPF 30 à 50 toute l'année, réappliquée après lavage ou exposition prolongée
- Gants anti-UV pour conduite ou sports extérieurs prolongés

## 2. Hydratation régulière

- Crèmes riches en glycérine, urée, acide hyaluronique
- Bain d'huile (huile d'amande douce, jojoba) 1 à 2 fois par semaine

## 3. Éviter les agressions

- Porter des gants ménagers pour vaisselle et produits d'entretien
- Limiter l'eau chaude et les savons agressifs → privilégier nettoyants doux pH neutre

## 4. Nutrition & micronutrition

- Apport suffisant en vitamine C, zinc, oméga-3 pour soutenir la production de collagène et l'élasticité cutanée

## 5. Soins réguliers

- Gommage doux 1 fois par semaine pour stimuler le renouvellement cellulaire
- Massages avec crème riche pour stimuler la microcirculation et favoriser la pénétration des actifs
- Application de sérum vitamine C le matin pour uniformiser le teint et protéger contre les radicaux libres
- Masque hydratant 1 à 2 fois par semaine (miel, aloe vera, huile d'argan)

## 6. Les bons réflexes au quotidien

De petits gestes simples font une grande différence sur le long terme :

- Appliquer sa crème visage sur le dos des mains en fin de routine beauté
- Porter des gants en hiver pour protéger du froid et du vent
- Sécher soigneusement les mains après lavage pour éviter les gerçures
- Boire suffisamment d'eau pour maintenir l'hydratation de la peau de l'intérieur

Une prévention régulière et cohérente permet de ralentir significativement les signes du vieillissement et de garder des mains douces, hydratées et lumineuses plus longtemps.`,
    published: true,
  },
  {
    slug: "les-injections",
    poleSlug: "beaute",
    title: "Les injections",
    description: "La médecine esthétique au profit de nos mains",
    image: "/images/beaute/injections.webp",
    content: `Les mains, tout comme le visage, sont l'un des premiers témoins visibles du temps qui passe. Avec l'âge, la peau s'affine, perd son élasticité, les veines et tendons deviennent plus apparents, et des taches peuvent se former. Pour celles et ceux qui souhaitent retrouver des mains plus jeunes, lisses et harmonieuses, la médecine esthétique propose aujourd'hui des solutions douces et efficaces.

Les injections de produits de comblement permettent de restaurer le volume perdu, d'hydrater en profondeur et de stimuler la production naturelle de collagène. Elles s'adressent particulièrement aux personnes qui :
- Souhaitent corriger la fonte graisseuse et l'aspect creusé du dos des mains
- Désirent atténuer la visibilité des veines et tendons
- Recherchent un résultat naturel, durable et sans chirurgie lourde

En confiant ce geste à un chirurgien de la main, on bénéficie d'une expertise précise de l'anatomie et d'une sécurité optimale, garantissant un résultat harmonieux et adapté à chaque morphologie.

## 1. Quel produit est injecté ?

Il s'agit généralement du **Radiesse®** :
- Produit de comblement à base d'hydroxyapatite de calcium (CaHA), une substance biocompatible et biodégradable
- Agit comme un stimulant de collagène : donne un effet immédiat de comblement et améliore la qualité de la peau sur le long terme

## 2. Mécanisme d'action

- Injecté dans le dos de la main, Radiesse® restaure le volume perdu, masquant veines et tendons apparents
- Les microsphères de CaHA stimulent la production de nouveau collagène autour d'elles
- Au fil des mois, le gel porteur est résorbé et remplacé par le tissu collagénique nouvellement formé

## 3. Déroulement d'une séance

1. Consultation préalable pour évaluer l'indication et vérifier l'absence de contre-indication
2. Désinfection et éventuelle anesthésie locale par crème ou injection
3. Injections au niveau du dos de la main via une micro-canule ou aiguille fine
4. Massage doux pour répartir le produit uniformément
5. Durée totale : 20 à 30 minutes

## 4. Résultats & durée

- **Effet immédiat** : mains plus jeunes, volumes restaurés, peau plus lisse
- **Résultat optimal** à 1 mois grâce à la stimulation du collagène
- **Durée moyenne** : 12 à 18 mois selon le patient et son mode de vie

## 5. Résorption et sécurité

- L'hydroxyapatite de calcium se dégrade naturellement dans l'organisme en ions calcium et phosphate, éliminés par les voies naturelles
- Produit sûr, utilisé depuis des décennies en médecine reconstructrice et esthétique

## 6. Pourquoi choisir un chirurgien de la main pour ce geste ?

- Connaissance approfondie de l'anatomie fine de la main : structures vasculaires, tendineuses et nerveuses
- Capacité à éviter les zones à risque et à optimiser la répartition du produit
- Expertise en cas de main déjà opérée, porteuse de cicatrices ou d'implants
- Maîtrise des gestes d'injection et gestion immédiate d'éventuelles complications`,
    published: true,
  },

  // ── PÔLE KINÉSITHÉRAPIE ───────────────────────────────────────────────────

  {
    slug: "kinesitherapie-et-arthrose",
    poleSlug: "kinesitherapie",
    title: "Kinésithérapie et arthrose de la main",
    description:
      "Objectifs, principes clés et contenu d'une séance type de kinésithérapie pour la rhizarthrose.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-22_f9dd5003-b2da-4442-81ce-26268b746f55.png",
    date: "2025-10-24",
    content: `## Objectifs

- Diminuer la douleur et l'inflammation
- Préserver la mobilité fonctionnelle (gestes de la vie quotidienne)
- Stabiliser la colonne du pouce et les doigts
- Retarder les déformations et optimiser la force de pince

## Principes clés

1. **Recentrage articulaire** de la trapézo-métacarpienne (TM) : traction douce dans l'axe de M1 (décompression), pour calmer la douleur et recentrer la base métacarpienne
2. **Ouverture de la 1ʳᵉ commissure** : étirements doux pour lutter contre l'adduction et prévenir la pince en "bec de canard"
3. **Stabilité active TM** : renforcement des petits muscles stabilisateurs du pouce
4. **Économie articulaire** : éviter les prises sub-termino-terminales pénibles (pince bout de doigts), privilégier prises en "poulpe" (main "qui tient une balle"), outils à manches épais, deux mains plutôt qu'une
5. **Orthèses** : attelles de repos nocturnes ou stabilisatrices pour calmer la douleur et protéger l'articulation (bénéfice documenté sur douleur/handicap)

## Contenu d'une séance type (non opérée)

- **Antalgie** : chaleur/physiothérapie selon tolérance, massages, mobilisations douces en décompression (sans douleur)
- **Mobilisations** : flexion/extension et légère rotation TM guidées, amplitude "confortable", sans forcer
- **Renforcement ciblé** : opposant (pouce vers le 5ᵉ doigt) et 1er IOD (abduction du 2ᵉ rayon) en co-contraction autour de la position de fonction ; progression avec élastique souple
- **Éducation gestuelle** : préhensions larges, ouverture de commissure dans les gestes, organisation du poste de travail`,
    published: true,
  },
  {
    slug: "la-kinesitherapie",
    poleSlug: "kinesitherapie",
    title: "La Kinésithérapie et l'arthrose de la main",
    description:
      "Pourquoi consulter un kiné spécialiste de la main et comment se déroule la collaboration avec le chirurgien.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-27_13eb0eb4-6f4c-4afb-be03-d4c6328c8e1b.png",
    date: "2025-10-24",
    content: `## 1. Pourquoi la kinésithérapie est utile

L'arthrose de la main, et plus particulièrement la rhizarthrose (base du pouce), entraîne douleur, raideur et perte de force et de fonction. La kinésithérapie a pour objectifs :

- Soulager la douleur par des techniques manuelles, de la mobilisation douce et des méthodes physiques (chaleur, physiothérapie…)
- Préserver ou améliorer la mobilité articulaire, afin de maintenir les gestes du quotidien
- Renforcer les muscles stabilisateurs pour protéger les articulations et éviter les compensations néfastes
- Apprendre des gestes protecteurs et adapter l'environnement pour limiter les contraintes mécaniques

En intervenant tôt, le kinésithérapeute peut ralentir la perte fonctionnelle, réduire l'inflammation et améliorer la qualité de vie.

## 2. Pourquoi consulter un kinésithérapeute spécialiste de la main

La main est une structure complexe avec plus de 20 articulations, un réseau tendineux dense et une mécanique fine. Un kinésithérapeute formé spécifiquement à la rééducation de la main possède :

- Une connaissance approfondie de l'anatomie et de la biomécanique de la main et du poignet
- La maîtrise de techniques spécifiques comme le recentrage trapézo-métacarpien, l'ouverture de la commissure, ou le renforcement ciblé de l'opposant et du 1er interosseux dorsal
- L'expertise pour choisir et ajuster une orthèse sur mesure en fonction du stade d'arthrose et de l'activité du patient
- Une expérience dans l'accompagnement des patients opérés (trapézectomie, ligamentoplastie, prothèse…)

## 3. Quelle formation a suivi un kiné spécialiste de la main

Après le diplôme d'État en kinésithérapie (5 ans d'études), le kinésithérapeute peut suivre :

- Un Diplôme Universitaire (DU) ou Interuniversitaire (DIU) de rééducation de la main et du membre supérieur
- Des formations spécialisées validées par le Conseil de l'Ordre des Kinésithérapeutes
- Des stages pratiques dans des centres de chirurgie de la main, en lien direct avec des chirurgiens spécialisés

## 4. L'importance de la collaboration chirurgien – kinésithérapeute de la main

Dans le cas d'une prothèse trapézo-métacarpienne ou interphalangienne proximale (IPP), la réussite ne dépend pas uniquement de la chirurgie.

- **En pré-opératoire**, le kinésithérapeute prépare la main : il entretient la mobilité, réduit l'inflammation et optimise l'état musculaire pour faciliter la récupération
- **En post-opératoire**, il suit un protocole validé avec le chirurgien : mobilisation progressive, renforcement, travail fonctionnel et conseils d'adaptation
- La communication régulière entre le chirurgien et le kiné permet d'ajuster le rythme et l'intensité des exercices selon l'évolution`,
    published: true,
  },
  {
    slug: "kinesitherapie-post-chirurgie",
    poleSlug: "kinesitherapie",
    title: "Kinésithérapie post-chirurgie pour rhizarthrose",
    description:
      "Protocole de rééducation par phases après trapézectomie, ligamentoplastie ou prothèse TM.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-25_b197a2a8-f599-4bc0-8758-2b15d7bce62b.png",
    date: "2025-10-24",
    content: `Les parcours varient selon la technique (trapézectomie-ligamentoplastie, prothèse TMC, autres). Les jalons ci-dessous sont des repères à adapter par le chirurgien et le kinésithérapeute.

## Phases et jalons usuels

### 0 à 3 semaines — Protection et antalgie

- Protection (pansements/attelle), antalgie, drainage œdème (élévation, pompages doux)
- Mobilisations des segments libres (IP, MP non concernés)
- Auto-rééducation apprise avec le rééducateur
- **Semaine 1** : immobilisation poignet-pouce
- **Semaine 2** : libération du poignet
- **Semaine 3** : après avis du chirurgien, ablation complète de l'orthèse

### 3 à 8 semaines — Rééducation spécialisée

- Mobilisations douces et renforcement progressif des muscles du pouce
- Travail cicatrice (massage)
- Reprise fonctionnelle progressive non douloureuse

### À partir de 8 semaines

- Reprise des activités ordinaires selon les progrès

### Après 12 semaines

- Reprise totale des activités (préhensions de force, activités sportives et manuelles)

## Résultats attendus

- Amélioration graduelle de 3 à 6 mois selon le geste chirurgical et le terrain
- Jusqu'à la sensation de "pouce oublié" (réintégration complète de la fonction du pouce)

## Invariants de qualité (post-op)

- Respect de la douleur-guide
- Travail en chaîne : mobilité – stabilité – geste utile
- Coordination chirurgien ↔ kiné (validation des étapes)`,
    published: true,
  },
  {
    slug: "rhizarthrose-et-musicien",
    poleSlug: "kinesitherapie",
    title: "La rhizarthrose et le Musicien",
    description:
      "Enjeux spécifiques de la rhizarthrose pour les musiciens : contraintes, orthèses fonctionnelles et solutions chirurgicales.",
    image:
      "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_24_oct._2025_a_13_54_18_42810976-0217-4644-9e12-611c881f798c.png",
    date: "2025-10-24",
    content: `La rhizarthrose est une atteinte dégénérative de la base du pouce susceptible de limiter la fonction de la main et a fortiori celle du musicien.

La colonne du pouce joue un rôle fondamental dans la formation des arches de la main, et l'articulation Trapézo-métacarpienne (TM) est responsable de l'orientation tridimensionnelle du pouce dans l'espace.

## Quels sont les risques pour le musicien atteint de rhizarthrose ?

**La douleur** — instabilité douloureuse à la base du pouce lors de la prise de l'instrument, à la mobilisation des tissus périarticulaires. Cette douleur peut être d'apparition spontanée ou provoquée et très variable en intensité.

**La raideur** — peut s'installer insidieusement. Au stade ultime elle peut évoluer vers la fusion articulaire de l'articulation TM. La raideur débute souvent par une limitation de l'opposition ou une fermeture de la 1ère commissure, entravant la mobilité du pouce en opposition ou la réalisation d'écarts.

**La perte de force** — due en premier lieu à la douleur, puis à une amyotrophie de non utilisation. Ceci va se traduire par une diminution progressive de la force d'appui sur la corde ou la touche.

## Les orthèses fonctionnelles pour les musiciens

Il est possible de réaliser des orthèses fonctionnelles compatibles avec la pratique instrumentale. Elles permettent de :
- Limiter les contraintes et la douleur
- Stabiliser l'articulation
- Améliorer le comportement musculaire du pouce et son placement

Les techniques de "taping" spécifique à la rhizarthrose vont aider le musicien pour un concert ou un évènement, avec une efficacité de quelques heures.

## Rééducation et auto-rééducation

Les principes de rééducation reposent sur :

- Maintien de l'ouverture de la 1ère commissure
- Décompression articulaire
- Renforcement statique des muscles stabilisateurs
- Éducation à la prise de l'instrument
- Alternance des rythmes de serrage-relâchement
- Mise en place d'aides techniques
- Économie articulaire
- Développer la mobilité du pouce dans les prises plutôt que l'appui statique longtemps maintenu

**Conseils pratiques :** s'échauffer avant de jouer, traction et chaleur pour soulager, port d'orthèses nocturnes systématiques, et fonctionnelles si possible, auto-rééducation, étude du geste, placement, mobilité et relâchement du pouce.

## La chirurgie de la rhizarthrose : une chance pour les musiciens

Fruit de plusieurs décennies d'expérimentation des chirurgiens français, les dernières générations de prothèses trapézo-métacarpiennes offrent aux musiciens atteints de rhizarthrose sévère la possibilité de retrouver un pouce indolore, solide et performant en 2 ou 3 mois.

L'expérience du chirurgien de la main est un atout majeur du résultat. L'intervention est aujourd'hui une alternative de qualité plutôt que l'arrêt de l'instrument.`,
    published: true,
  },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------

export function getPoleBySlug(slug: string): Pole | undefined {
  return poles.find((p) => p.slug === slug);
}

export function getArticlesByPole(poleSlug: string): Article[] {
  return articles.filter((a) => a.poleSlug === poleSlug && a.published);
}

export function getArticleBySlug(
  poleSlug: string,
  articleSlug: string
): Article | undefined {
  return articles.find(
    (a) => a.poleSlug === poleSlug && a.slug === articleSlug
  );
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(
      (a) =>
        a.poleSlug === article.poleSlug &&
        a.slug !== article.slug &&
        a.published
    )
    .slice(0, limit);
}

// ---------------------------------------------------------------------------
// AVERTISSEMENT MÉDICAL (texte légal)
// ---------------------------------------------------------------------------

export const medicalDisclaimer = `Cette application ne fournit aucun conseil médical, diagnostic ou traitement.

Les informations présentées dans l'application, sur ses pages, dans le blog, les vidéos ou tout autre contenu associé sont fournies à titre informatif et éducatif uniquement.

Elles ne doivent jamais être utilisées comme substitut à un avis professionnel d'un médecin, à un diagnostic médical, ou à un traitement prescrit par un professionnel de santé qualifié.

Si vous pensez avoir un problème de santé, une douleur inhabituelle, un symptôme inquiétant, ou si vous envisagez de modifier votre traitement : consultez immédiatement un professionnel de santé qualifié.`;

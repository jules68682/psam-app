// ⚠️  FICHIER AUTO-GÉNÉRÉ — NE PAS ÉDITER À LA MAIN.
// Traduction ANGLAISE générée par scripts/translate-content.ts à partir de lib/content.ts.
// ⚠️  TRADUCTION NON FAITE (provider="none", copie FR verbatim).
//     Régénérer avec un vrai moteur : TRANSLATE_PROVIDER=deepl DEEPL_API_KEY=... node scripts/translate-content.ts
// BROUILLON : chaque article porte reviewed:false jusqu'à validation par l'équipe médicale.
// Généré le 2026-06-01T08:56:49.023Z.

import type { TeamMember, Expert, Pole, Article, Partner } from './content';

export const teamMembers: TeamMember[] = [
  {
    "id": "joel-rezzouk",
    "name": "Dr Joël REZZOUK",
    "initials": "JR",
    "role": "Président du comité scientifique, Chirurgien de la Main",
    "bio": "Chirurgien de la main et du poignet depuis plus de 20 ans. Fondateur de l'Unité Santé Main Aquitaine et spécialisé dans l'osteoarthritis et la trapeziometacarpal osteoarthritis.",
    "image": "/images/equipe/joel-rezzouk.JPG",
    "quote": "Parce que trop de patients se sentent démunis face à l'hand osteoarthritis. PSAM, c'est un engagement : informer, expliquer et donner à chacun des solutions pour ralentir la maladie. Parce que mieux comprendre, c'est déjà mieux vivre !",
    "website": "https://usma-sante.fr",
    "isFounder": true
  },
  {
    "id": "corinne-moulet",
    "name": "Corinne MOULET",
    "initials": "CM",
    "role": "Vice-Présidente, Nutritionniste & Hypnothérapeute",
    "bio": "Nutritionniste spécialisée en nutrition anti-osteoarthritis et hypnothérapeute. Elle anime des ateliers Nutri osteoarthritis pour aider chacun à adapter son alimentation et mieux vivre avec l'osteoarthritis.",
    "image": "/images/equipe/corinne-moulet.JPG",
    "quote": "Ce que vous mettez dans votre assiette joue un rôle clé ! Certains aliments favorisent l'inflammation, d'autres la réduisent. Mieux manger, c'est aider vos joints à mieux vieillir.",
    "isFounder": true
  },
  {
    "id": "stephanie-lasserre",
    "name": "Stéphanie LASSERRE",
    "initials": "SL",
    "role": "Directrice de Projet & Directrice administrative",
    "bio": "Au sein de PSAM, Stéphanie est le point de contact central pour tous nos partenaires. En tant que responsable des partenariats, directrice de projet, chargée de communication et gestionnaire administrative, elle assure la liaison entre l'association et ses partenaires, institutions et interlocuteurs clés.",
    "image": "/images/equipe/stephanie-lassere.jpg",
    "isFounder": true
  }
];

export const experts: Expert[] = [
  {
    "id": "joel-rezzouk",
    "name": "Dr Joël REZZOUK",
    "initials": "JR",
    "role": "Chirurgien de la Main",
    "website": "https://usma-sante.fr"
  },
  {
    "id": "valerie-madert",
    "name": "Valérie MADERT",
    "initials": "VM",
    "role": "occupational therapist, Orthésiste",
    "website": "https://orthese-main.com"
  },
  {
    "id": "corinne-moulet",
    "name": "Corinne MOULET",
    "initials": "CM",
    "role": "Nutritionniste, Hypnothérapeute"
  },
  {
    "id": "rosario-baladron",
    "name": "Rosario BALADRON",
    "initials": "RB",
    "role": "physiotherapist de la Main"
  },
  {
    "id": "michel-boutan",
    "name": "Michel BOUTAN",
    "initials": "MB",
    "role": "physiotherapist de la Main"
  }
];

export const poles: Pole[] = [
  {
    "id": "ergotherapie-ortheses",
    "slug": "ergotherapie-ortheses",
    "title": "Occupational therapy, orthoses, equipment and soothing care",
    "shortTitle": "Occup. therapy & orthoses",
    "description": "Custom orthoses, protective exercises, adapted equipment and everyday tips to relieve hand osteoarthritis.",
    "icon": "Hand",
    "image": "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
  },
  {
    "id": "hypnose",
    "slug": "hypnose",
    "title": "Preparatory and pain-relief hypnosis",
    "shortTitle": "Hypnosis",
    "description": "Mental preparation for surgery, chronic pain management and self-hypnosis to live better with osteoarthritis.",
    "icon": "Brain",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
  },
  {
    "id": "chirurgie",
    "slug": "chirurgie",
    "title": "Surgery, trapeziometacarpal osteoarthritis",
    "shortTitle": "Surgery",
    "description": "Understanding trapeziometacarpal osteoarthritis, surgical options, prostheses and post-operative care.",
    "icon": "Stethoscope",
    "image": "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80"
  },
  {
    "id": "nutrition",
    "slug": "nutrition",
    "title": "Anti-inflammatory nutrition / micronutrition",
    "shortTitle": "Nutrition",
    "description": "Food, the first medicine. Protective foods, anti-inflammatory menus and targeted micronutrition.",
    "icon": "Apple",
    "image": "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
  },
  {
    "id": "beaute",
    "slug": "beaute",
    "title": "Beauty and aesthetic medicine for the hands",
    "shortTitle": "Beauty",
    "description": "Rejuvenation, moisturising care, aesthetic medicine and routines to care for your hands at any age.",
    "icon": "Sparkles",
    "image": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80"
  },
  {
    "id": "kinesitherapie",
    "slug": "kinesitherapie",
    "title": "Physiotherapy",
    "shortTitle": "Physiotherapy",
    "description": "Specialised rehabilitation, post-surgery protocols, muscle strengthening and advice for musicians.",
    "icon": "Dumbbell",
    "image": "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80"
  }
];

export const partners: Partner[] = [
  {
    "id": "arthrose-pouce",
    "name": "Arthrose du Pouce",
    "logo": "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/logo_AP_orange_site_internet.png",
    "url": "https://www.arthrose-pouce.com"
  },
  {
    "id": "credit-agricole",
    "name": "Fondation Crédit Agricole",
    "logo": "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.15.58.png",
    "url": "https://www.fondation-ca-solidaritedeveloppement.org"
  },
  {
    "id": "sogeca",
    "name": "SOGECA",
    "logo": "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.17.11.png",
    "url": "https://www.sogeca.com"
  }
];

export const articles: Article[] = [
  {
    "slug": "ortheses-post-operatoires",
    "poleSlug": "ergotherapie-ortheses",
    "title": "orthosiss (post-operatives)",
    "description": "Le rôle et l'importance de l'orthosis dans la récupération après chirurgie.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-12_a_14.01.04_45af858a-200a-445e-882a-cd2769310b14.png",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/gkmW4clboy4",
        "title": "orthosiss — vidéo 1"
      },
      {
        "embedUrl": "https://www.youtube.com/embed/J3vyX6kWxlA",
        "title": "orthosiss — vidéo 2"
      }
    ],
    "content": "## Qu'est-ce qu'une orthosis ?\n\nUne orthosis est un dispositif médical externe, conçu pour soutenir, immobiliser ou corriger une joint ou une partie du corps. Dans le cas de l'hand osteoarthritis, l'orthosis vise à soulager la douleur, limiter les mouvements douloureux et protéger les joints fragilisées.\n\n## Types d'orthosiss pour l'hand osteoarthritis\n\nPrivilégier les orthosiss réalisées sur mesure : elles sont adaptées à la morphologie de la main, offrent un ajustement précis et un confort optimal, permettant une meilleure efficacité et un port prolongé.\n\n- **resting orthosis longue** : portée principalement la nuit ou lors de phases douloureuses, elle immobilise le poignet et le pouce pour réduire l'inflammation. À porter également lors de moments de repos dans la journée.\n- **orthosis de jour** : plus courte, elle permet de maintenir une bonne posture articulaire tout en laissant la main fonctionnelle. Elle stabilise la base du pouce pour limiter la douleur lors des mouvements de grip.\n- **orthosis doigt à doigt** : maintien d'un ou plusieurs doigts pour lutter contre la déformation et limiter la douleur. À porter la nuit.\n- **activity orthosis** : conçue pour être portée lors de certaines activités spécifiques (travail, loisirs), elle protège l'joint tout en permettant une mobilité adaptée.\n\n## Comment les orthosiss aident-elles au quotidien ?\n\n- Réduction de la douleur en limitant les mouvements excessifs\n- Protection des joints fragiles lors des activités\n- Amélioration de la fonction manuelle grâce à une meilleure stabilité\n- Diminution de la fatigue musculaire\n\n## Conseils pour bien utiliser une orthosis\n\n- Toujours suivre les recommandations de votre professionnel de santé\n- Porter l'orthosis aux moments où la douleur ou la fatigue se manifeste\n- Ne pas forcer sur l'joint immobilisée\n- Vérifier régulièrement l'état de l'orthosis (usure, ajustement)\n- Associer l'orthosis à des exercices et gestes protecteurs\n\n## Quand consulter un professionnel ?\n\n- Dès l'apparition de douleurs persistantes ou de déformations\n- Pour un bilan personnalisé et le choix de l'orthosis adaptée\n- En cas d'inconfort, de douleur nouvelle ou de problème d'ajustement\n- Pour un suivi régulier et une adaptation en fonction de l'évolution de la maladie",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "ergotherapie",
    "poleSlug": "ergotherapie-ortheses",
    "title": "occupational therapy",
    "description": "Qu'est-ce que l'occupational therapy et comment peut-elle vous aider ?",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-12_a_15.04.51_31643476-948d-4124-b48a-958bad35497e.png",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/fQLBOwMh7W4",
        "title": "occupational therapy — présentation"
      }
    ],
    "content": "## Qu'est-ce que l'occupational therapy ?\n\nL'occupational therapy permet de prendre conscience des postures et des mouvements et de rechercher des alternatives pour mieux utiliser les joints. L'occupational therapy offre un «mode d'emploi» pour la main.\n\n## Les objectifs de l'occupational therapy pour l'osteoarthritis\n\nL'intervention est toujours personnalisée, selon les besoins et les priorités de chacun :\n\n- Soulager la douleur par des techniques adaptées et des conseils d'économie articulaire\n- Maintenir ou améliorer la mobilité et la souplesse des doigts et du poignet\n- Préserver la force musculaire, tout en évitant les efforts nuisibles\n- Adapter les gestes du quotidien pour protéger les joints\n- Faciliter les activités importantes : cuisiner, s'habiller, écrire, jardiner, etc.\n- Retrouver confiance dans l'utilisation de ses mains\n\n## Le bilan ergothérapique : une étape essentielle\n\nAvant toute prise en charge, l'occupational therapist réalise un bilan fonctionnel et occupationnel. Il comprend :\n\n- L'observation des gestes de la vie quotidienne : ouvrir un bocal, boutonner une chemise, se coiffer, écrire, etc.\n- L'évaluation de la douleur, de la force, de la mobilité articulaire\n- L'identification des priorités de la personne\n- L'analyse du contexte de vie : domicile, loisirs, travail, habitudes\n\n## Que propose concrètement l'occupational therapist ?\n\n**rehabilitation fonctionnelle douce** : exercices de mobilité fine et globale, renforcement musculaire adapté, travail de la coordination et de la grip, étirements doux.\n\n**Éducation gestuelle & protection articulaire** : apprendre à éviter les mouvements nocifs (torsion, pincement…), adopter des gestes protecteurs dans les activités quotidiennes.\n\n**Préconisation d'aides techniques** : conseils sur les outils ergonomiques : stylos, ustensiles, poignées, ouvre-bocaux, etc.\n\n**Aménagement de l'environnement** : astuces pour le logement, la cuisine, la salle de bain, idées d'organisation pour réduire les contraintes sur les mains.\n\n## Quand consulter un occupational therapist ?\n\nIl n'est jamais trop tôt ni trop tard pour consulter. L'occupational therapist peut aider en prévention dès les premières douleurs, en complément d'un traitement médical ou kiné, après une opération ou en cas de perte d'autonomie.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "exercices-ergotherapie",
    "poleSlug": "ergotherapie-ortheses",
    "title": "Exercices occupational therapy",
    "description": "Exercices simples et gestes protecteurs à pratiquer au quotidien pour préserver la mobilité de vos mains.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-4_39e2cdc6-ed88-4a27-b4ff-cd78efb862a3.png",
    "date": "2024-08-02",
    "images": [
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.49.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.26.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-08-12_a_15.38.09.png"
    ],
    "content": "## Pourquoi bouger ses mains est essentiel\n\nEn cas d'osteoarthritis, on peut être tenté de moins utiliser sa main par peur d'avoir mal. Pourtant, une activité régulière et douce est essentielle pour :\n\n- Maintenir la souplesse des joints\n- Préserver la force musculaire\n- Réduire la raideur\n- Limiter l'évolution de l'osteoarthritis\n\nLes exercices doivent être adaptés, progressifs et non douloureux.\n\n## Quelques exercices simples à pratiquer au quotidien\n\n### 1. Ouverture et fermeture de la main\n\n- Ouvrir lentement les doigts au maximum\n- Puis refermer doucement en formant un poing sans serrer\n- Répéter 10 fois\n\n### 2. Éventail des doigts\n\n- Poser la main à plat sur une table\n- Écarter lentement les doigts\n- Puis les rapprocher\n- Répéter 10 fois\n\n### 3. Mobilisation du pouce\n\n- Toucher chaque bout de doigt avec le pouce (pince)\n- Puis amener le pouce vers la base du petit doigt\n- Répéter 5 à 10 fois\n\n### 4. Étirement doux\n\n- Étirer doucement les doigts vers l'arrière avec l'autre main\n- Maintenir quelques secondes\n- Ne jamais forcer si la douleur apparaît\n\n**Conseil :** faire les exercices dans une pièce chauffée ou après avoir réchauffé les mains (eau tiède, gant chauffant, etc.).\n\n## Quand arrêter un exercice ?\n\n- Si un exercice provoque une douleur vive, il faut l'arrêter\n- Une légère gêne est normale au début, mais elle ne doit pas persister\n- Demandez conseil à un professionnel si vous avez un doute ou si la douleur augmente\n\nUn occupational therapist peut adapter les exercices à votre situation précise et vous accompagner dans votre progression.\n\n## Gestes protecteurs à adopter\n\nL'occupational therapy enseigne des gestes simples pour limiter les pressions sur les joints et éviter les douleurs :\n\n- Utiliser la paume de la main plutôt que les doigts pour pousser\n- Porter les objets avec les deux mains ou en les calant contre soi\n- Éviter les gestes de pincement avec le pouce et l'index\n- Préférer les outils à gros manches ou les aides ergonomiques\n- Utiliser les joints les plus solides (poignet, avant-bras, épaules)\n- Alterner les activités pour éviter les gestes répétitifs prolongés",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "ergonomie-au-travail",
    "poleSlug": "ergotherapie-ortheses",
    "title": "Ergonomie au travail",
    "description": "Comment améliorer la qualité de vie professionnelle avec l'hand osteoarthritis.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-3_06771c50-d31b-4f4f-bcf2-85a959211a05.png",
    "content": "## Importance de l'ergonomie\n\nL'ergonomie au travail vise à adapter le poste et les gestes pour réduire les contraintes sur les joints, prévenir la douleur et la fatigue, et ainsi préserver la fonction de la main malgré l'osteoarthritis. Une bonne ergonomie permet aussi de limiter l'aggravation des lésions arthrosiques.\n\n## Principes clés\n\n- **Position neutre des mains et poignets** : garder les mains dans un alignement naturel sans flexion ou extension excessive\n- **Alternance des tâches** : varier les activités et les mouvements pour ne pas solliciter continuellement les mêmes joints\n- **Pauses régulières** : intégrer des pauses fréquentes pour détendre les muscles et les joints\n- **Utilisation d'aides techniques** : outils ergonomiques (claviers, souris, instruments à manche large), repose-poignets, supports adaptés\n\n## Conseils pratiques\n\n- Ajuster la hauteur du bureau et de la chaise pour avoir les bras en angle droit, épaules détendues\n- Organiser l'espace de travail pour limiter les mouvements répétitifs ou les efforts excessifs\n- Utiliser des supports pour les avant-bras afin de réduire la pression sur les poignets\n- Préférer des outils à poignée large ou recouverte de matériaux souples\n- Éviter les gestes de pincement prolongés ou répétitifs\n- Porter une orthosis prescrite pendant certaines activités professionnelles si nécessaire\n- Maintenir une bonne posture globale (dos, épaules, cou)\n\n## Quand consulter un occupational therapist ?\n\n- Pour un bilan personnalisé du poste de travail et des gestes\n- Pour la mise en place d'adaptations spécifiques (matériel, organisation du travail)\n- Pour un apprentissage des gestes protecteurs et des exercices adaptés",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "gestion-de-la-douleur",
    "poleSlug": "ergotherapie-ortheses",
    "title": "occupational therapy et Gestion de la douleur",
    "description": "Comment soulager la douleur grâce à l'occupational therapy.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Douleur_au_travail_en_teletravail_b926cec5-e3ce-44d5-9bdd-54f055145599.png",
    "content": "## Comprendre la douleur liée à l'osteoarthritis\n\nL'osteoarthritis est une maladie dégénérative des joints qui provoque une inflammation locale, entraînant des douleurs et une raideur, particulièrement au réveil ou après un effort. La douleur est un signal d'alerte, mais elle peut aussi devenir chronique et limiter la qualité de vie.\n\n## Techniques non médicamenteuses\n\n- **Gestes et postures adaptés** : éviter les mouvements brusques ou répétitifs, utiliser les gestes protecteurs enseignés en occupational therapy\n- **Exercices doux** : mobilisations régulières pour maintenir la souplesse articulaire\n- **Thermothérapie** : application de chaleur (bouillotte, bain chaud) pour détendre les muscles et réduire la raideur, ou froid (glace) en cas de poussée inflammatoire\n- **Massages adaptés** : réalisés par un professionnel pour améliorer la circulation et détendre les tissus\n- **Topiques** (crèmes, gels) appliqués localement pour un effet ciblé. Il existe des baumes naturels ayant une action anti-inflammatory.\n- **Relaxation et gestion du stress** : techniques de respiration, méditation ou sophrologie peuvent diminuer la perception de la douleur\n\n## Rôle de l'occupational therapy dans la gestion de la douleur\n\n- Enseignement des gestes protecteurs\n- Adaptation des activités quotidiennes pour limiter les contraintes sur les joints douloureuses\n- Conseils sur les aides techniques et orthosiss\n- Mise en place d'un programme d'exercices personnalisés\n\n## Quand consulter un professionnel ?\n\n- Si la douleur est persistante, intense ou évolutive\n- En cas de limitations fonctionnelles importantes\n- Pour un bilan et un ajustement du traitement\n- Pour un accompagnement en occupational therapy ou en physiotherapy",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "materiels-soins-terebenthine",
    "poleSlug": "ergotherapie-ortheses",
    "title": "Matériels d'occupational therapy, Soins térébenthine",
    "description": "Les bons gestes, les astuces du quotidien et les soins apaisants.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-5_d6e2b6f7-06c8-40f0-990d-7f57c5ef7bce.png",
    "content": "## Les bons outils pour protéger vos mains au quotidien\n\nIci vous allez trouver des astuces pour la plupart des gestes du quotidien.\n\n## Soins et toilettes\n\n- Poignées de douche ergonomiques : antidérapantes et faciles à saisir, réduisent l'effort et la douleur\n- Brosses à long manche pour le dos ou les pieds, évitent les torsions\n- Distributeurs de savon automatiques ou avec pompe facile à presser\n- Sièges et barres d'appui pour plus de sécurité et moins de contraintes sur les mains\n\n## Cuisine et repas\n\n- Ouvre-bocaux à levier ou électriques pour éviter la torsion du poignet\n- Ustensiles à manches larges et antidérapants (couteaux, cuillères, spatules)\n- Couteaux à bascule ou couteaux ergonomiques facilitent la coupe avec moins d'effort\n- Planche à découper antidérapante pour plus de stabilité\n- Épluche-légumes avec manche large et coupe nette\n\n## Écriture et bureau\n\n- Stylos ergonomiques larges et légers, avec grip confortable\n- Supports et repose-poignets pour réduire la tension lors de la frappe ou de l'écriture\n- Claviers et souris ergonomiques pour diminuer les contraintes sur les mains\n- Supports de documents inclinés pour éviter les postures forcées\n\n## Ménage et entretien\n\n- Balais et manches réglables pour éviter de plier les doigts et le poignet\n- Gants de ménage antidérapants et rembourrés pour protéger les mains\n- Ouvre-bouteilles et tournevis avec prises ergonomiques\n- Aspirateurs légers avec poignée adaptée\n\n## Jardinage\n\n- Outils à manches larges et ergonomiques (sécateurs, bêches, fourches)\n- Gants renforcés et confortables pour protéger la peau et les joints\n- Tabourets ou sièges mobiles pour éviter les postures pénibles\n- Arrosoirs légers à poignée ergonomique\n\n## Conseils généraux pour choisir ses aides techniques\n\n- Opter pour des matériaux légers et solides\n- Choisir des formes arrondies et antidérapantes\n- Prendre des objets à manche large et confortable\n- Tester avant d'acheter si possible\n- Ne pas hésiter à demander conseil à un occupational therapist",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "quest-ce-que-l-hypnose",
    "poleSlug": "hypnose",
    "title": "Qu'est-ce que l'hypnose ?",
    "description": "Définition, mécanismes et bienfaits de l'hypnose dans la prise en charge de la douleur et de l'hand osteoarthritis.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-16_993553cc-a3de-42c6-a49e-58764d8dd056.png",
    "date": "2024-08-02",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/Lfx22Tv-i90",
        "title": "Place de l'hypnose dans la chirurgie pour trapeziometacarpal osteoarthritis"
      }
    ],
    "content": "## 1. Définition\n\nL'hypnose est un état modifié de conscience dans lequel l'attention se focalise sur certaines sensations, pensées ou images, tout en réduisant la perception de l'environnement extérieur. C'est un état naturel que nous expérimentons tous chaque jour : par exemple, lorsque l'on est absorbé dans un livre ou un film au point d'en oublier la notion du temps.\n\nEn hypnothérapie, cet état est utilisé à des fins thérapeutiques pour influencer positivement la perception, les émotions et certains processus physiologiques, notamment la douleur.\n\n## 2. Les mécanismes de l'hypnose\n\nL'hypnose agit sur le système nerveux central en modifiant :\n\n- **La perception de la douleur** : elle n'est pas effacée, mais vécue différemment.\n- **La réponse émotionnelle** : l'anxiété et la peur sont diminuées, réduisant l'impact du stress sur les muscles et les joints.\n- **La communication corps-esprit** : en stimulant la détente musculaire, la circulation et la régulation nerveuse.\n\n## 3. Lien avec l'hand osteoarthritis\n\nDans l'osteoarthritis (notamment la trapeziometacarpal osteoarthritis, osteoarthritis de la base du pouce), la douleur chronique entretient un cercle vicieux : tension musculaire → inflammation → perception accrue de la douleur.\n\nL'hypnose aide à rompre ce cercle en :\n\n- Diminution de la perception douloureuse\n- Amélioration de la tolérance aux gestes quotidiens\n- Réduction des tensions musculaires autour de l'joint\n- Amélioration du sommeil, ce qui favorise la récupération\n\n## 4. Déroulement d'une séance\n\n1. **Accueil et entretien** : identification des besoins (douleur, anxiété, sommeil, préparation à un geste médical).\n2. **Induction** : techniques pour guider le patient vers un état de conscience modifié (respiration, fixation visuelle, métaphores).\n3. **Travail thérapeutique** : visualisations, suggestions positives, métaphores ciblées sur la main, la mobilité et le confort.\n4. **Réveil** : retour progressif à un état d'éveil complet.\n\nUne séance dure en moyenne 30 à 60 minutes et peut se pratiquer assis ou allongé.\n\n## 5. Les bienfaits validés en contexte articulaire\n\n- Diminution des douleurs chroniques\n- Meilleure gestion des poussées douloureuses\n- Détente générale, réduisant la tension musculaire\n- Soutien à la rehabilitation (meilleure participation et tolérance aux exercices)\n\n## 6. Bien choisir son hypnothérapeute\n\n- Formation reconnue : hypnose Ericksonienne, hypnose médicale, hypnoanalgésie\n- Expérience dans la prise en charge de la douleur et/ou des pathologies de la main\n- Approche personnalisée : adaptation des techniques aux besoins du patient (douleur, anxiété, sommeil)\n- Travail en coordination avec les autres professionnels de santé (médecin, kiné, ergo)\n\nDemandez toujours quelle formation le praticien a suivie, et s'il travaille en lien avec des structures médicales.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "auto-hypnose",
    "poleSlug": "hypnose",
    "title": "Qu'est-ce que l'Auto Hypnose ?",
    "description": "Pratiquer l'hypnose sur soi-même pour gérer la douleur chronique, améliorer le sommeil et retrouver confort et mobilité.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-17_fd7e2daf-2614-41c7-ae5a-0b173d2cc0ed.png",
    "content": "## 1. Définition\n\nL'auto-hypnose est une technique d'hypnose que l'on pratique sur soi-même, sans l'intervention directe d'un praticien. Elle consiste à induire volontairement un état hypnotique pour atteindre un objectif précis : gestion de la douleur, détente profonde, amélioration du sommeil, concentration, etc.\n\nContrairement à l'hypnose guidée, l'auto-hypnose est autonome : vous en êtes à la fois le \"praticien\" et le bénéficiaire.\n\n## 2. Comment ça marche ?\n\nL'auto-hypnose utilise les mêmes mécanismes que l'hypnose accompagnée :\n\n- **Respiration contrôlée** : ralentit le rythme cardiaque et favorise la détente musculaire\n- **Focalisation de l'attention** : sur une image, un souvenir ou une sensation agréable\n- **Suggestions mentales** : phrases ou visualisations positives répétées pour modifier la perception de la douleur ou induire un état de bien-être\n\nEn agissant sur le système nerveux central, l'auto-hypnose diminue la transmission des signaux douloureux et augmente la sensation de confort.\n\n## 3. Pourquoi c'est utile dans l'hand osteoarthritis\n\n- Réduction des poussées douloureuses grâce à une meilleure gestion émotionnelle et nerveuse\n- Diminution des tensions musculaires qui aggravent la douleur articulaire\n- Amélioration de la mobilité grâce à un état de détente globale\n- Complément efficace aux séances de physiotherapy, occupational therapy ou hypnose médicale\n\n## 4. Conseils pour débuter\n\n- Choisir un environnement calme où vous ne serez pas dérangé\n- Adopter une position confortable (assis ou allongé)\n- Fermer les yeux et respirer profondément pendant 1 à 2 minutes\n- Visualiser un lieu agréable ou imaginer la main entourée d'une lumière chaude et apaisante\n- Introduire des suggestions positives, par exemple : *\"Mon pouce est détendu et léger.\"* / *\"Chaque respiration apporte du confort à ma main.\"*\n- Revenir doucement à l'état normal après 5 à 10 minutes\n\n## 5. Les premiers pas : exercices simples\n\n- **Exercice de la main légère** : imaginer que votre main flotte, comme portée par un coussin d'air\n- **Exercice du gant anesthésiant** : visualiser que vous enfilez un gant qui diffuse chaleur et confort dans votre main\n- **Exercice de la couleur apaisante** : imaginer une couleur qui vous apporte détente (bleu, vert, doré) et la faire circuler dans votre main\n\n## 6. Lien avec la méditation\n\n- **Points communs** : concentration sur le moment présent, apaisement mental, régulation du stress\n- **Différences** : la méditation observe sans chercher à changer, l'auto-hypnose utilise activement la suggestion pour transformer la perception ou le ressenti\n\nPratiquer 5 à 10 minutes par jour suffit pour ressentir les bienfaits, et cela devient plus facile avec l'entraînement.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "hypnose-pre-operatoire",
    "poleSlug": "hypnose",
    "title": "Hypnose pré-opératoire en préparation à une chirurgie de la main",
    "description": "Comment l'hypnose prépare mentalement et physiologiquement à la chirurgie de la main et réduit le risque d'algoneurodystrophie.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_15_juil._2025_a_12_23_27_35cd7f95-9797-4940-9639-b4fba3ad79a1.png",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/AUEHMaAwFTk",
        "title": "Hypnose pré-opératoire — introduction"
      },
      {
        "embedUrl": "https://www.youtube.com/embed/5JVF7DUSFYk",
        "title": "Séance d'auto-hypnose à pratiquer avant une chirurgie de la main"
      }
    ],
    "content": "## 1. Objectif des séances préopératoires\n\nLa chirurgie de la main (réparation de tendons, libération nerveuse, prosthesis de pouce, trapézectomie…) est un acte précis qui mobilise autant le corps que l'esprit.\n\nUne préparation par l'hypnose permet de :\n\n- Réduire l'anxiété et le stress avant l'intervention\n- Installer un état de confiance envers l'équipe chirurgicale\n- Préparer mentalement à mieux gérer la douleur après l'opération\n- Faciliter le réveil et la récupération\n\nTout cela contribue à réduire considérablement les risques d'algoneurodystrophie.\n\n## 2. Pourquoi ça fonctionne\n\n- **Réduction de la peur** : l'hypnose agit sur le système limbique (siège des émotions), réduisant l'activation du stress\n- **Suggestion positive** : le cerveau préprogramme des réactions de détente et de confort pour le jour J\n- **Amélioration de la tolérance à la douleur** : apprentissage de techniques utilisables immédiatement après l'opération\n- **Impact physiologique** : baisse de la tension artérielle, réduction du rythme cardiaque, amélioration de l'oxygénation\n\n## 3. Lien avec l'algoneurodystrophie (syndrome douloureux régional complexe)\n\nL'algoneurodystrophie est une complication possible après une chirurgie ou un traumatisme de la main.\n\nElle se manifeste par :\n- Douleur disproportionnée\n- Raideur articulaire importante\n- Gonflement et changements de couleur ou de température de la peau\n\n**Rôle de l'hypnose dans la prévention et la prise en charge :**\n\n- Diminution de l'hyperactivité du système nerveux autonome impliqué dans la douleur et l'œdème\n- Relaxation musculaire pour limiter la raideur\n- Meilleure adhésion à la rehabilitation en réduisant la peur du mouvement\n- Recadrage sensoriel : transformation de la perception de la douleur en sensations plus neutres ou confortables\n\nL'apprentissage de l'auto-hypnose avant la chirurgie permet d'être autonome dès la sortie du bloc opératoire pour gérer l'inconfort et favoriser une récupération rapide.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "hypnose-anti-douleur",
    "poleSlug": "hypnose",
    "title": "Hypnose anti-douleur",
    "description": "Apprendre à réduire soi-même la perception de la douleur avec la technique « La lumière apaisante ».",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-13_a_13.53.35_3c0de3ca-a787-4d80-9422-177478248a08.png",
    "content": "## Objectif\n\nApprendre à réduire soi-même la perception de la douleur, à détendre la main et à créer un espace intérieur de confort, utilisable en toute autonomie à la maison, au travail ou lors des soins.\n\n## Préparation à la séance\n\n- Choisissez un endroit calme où vous ne serez pas dérangé\n- Adoptez une position confortable, assis ou allongé\n- Éteignez ou mettez en mode silencieux votre téléphone\n\n## \"La lumière apaisante\"\n\n**Durée :** 8 à 12 minutes\n**Objectif :** réduire la douleur et relâcher les tensions musculaires de la main\n\n### Étape 1 — Entrer dans l'état hypnotique\n\n- Fermez les yeux\n- Prenez trois grandes inspirations par le nez et expirez lentement par la bouche\n- À chaque expiration, imaginez que votre corps devient un peu plus lourd et détendu\n\n### Étape 2 — Focalisation sur la respiration\n\n- Concentrez-vous sur l'air qui entre et sort\n- Imaginez que chaque inspiration apporte un peu plus de calme dans votre main\n\n### Étape 3 — Visualisation de la lumière\n\n- Imaginez au-dessus de votre main une lumière douce, dorée et chaude\n- Voyez-la descendre doucement jusqu'à entourer complètement votre main\n- Cette lumière pénètre à l'intérieur de chaque joint, de chaque muscle, et diffuse chaleur, confort et souplesse\n\n### Étape 4 — Suggestion de confort\n\n- Répétez mentalement : *\"À chaque respiration, ma main devient plus souple, plus légère, plus confortable.\"*\n- Imaginez la douleur comme une couleur sombre qui se dissout dans la lumière dorée\n\n### Étape 5 — Ancrage positif\n\n- Choisissez un geste discret (serrer doucement le pouce contre l'index) pour associer ce geste à cette sensation de confort\n- La prochaine fois que vous ressentirez une gêne, ce geste rappellera à votre corps cette détente\n\n### Étape 6 — Retour\n\n- Ramenez doucement votre attention à la pièce, bougez vos doigts, ouvrez les yeux\n- Prenez un moment pour observer les changements de sensations\n\n## Conseils pratiques\n\n- Répéter 1 à 2 fois par jour, même sans douleur, pour entraîner le cerveau à entrer rapidement dans cet état\n- Utiliser la technique pendant les poussées douloureuses ou avant un geste qui sollicite beaucoup la main\n- Associer si possible à des exercices doux de mobilité pour optimiser le confort articulaire",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "arthrose-pouce-causes-evolution",
    "poleSlug": "chirurgie",
    "title": "thumb osteoarthritis : causes, évolution et facteurs aggravants",
    "description": "Comprendre pourquoi l'hand osteoarthritis apparaît, comment elle évolue et ce qui peut l'aggraver.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_16_juil._2025_a_16_50_16_32bd410f-f25d-46d8-b037-0f6f68b41b1a.png",
    "date": "2026-05-18",
    "content": "## Comprendre l'hand osteoarthritis et du pouce\n\nL'hand osteoarthritis est une maladie chronique des joints liée à une usure progressive du cartilage. Le cartilage est un tissu souple qui permet aux os de glisser sans douleur lors des mouvements. Lorsqu'il s'abîme, les joints deviennent moins fluides, plus sensibles et peuvent se déformer avec le temps.\n\nL'osteoarthritis peut toucher plusieurs zones de la main :\n- les doigts\n- la base du pouce (trapeziometacarpal osteoarthritis)\n- le poignet dans certains cas\n\nLa trapeziometacarpal osteoarthritis, qui concerne l'joint située à la base du pouce, est l'une des formes les plus fréquentes. Le pouce étant essentiel dans la plupart des gestes du quotidien, cette atteinte peut rapidement devenir handicapante.\n\n## Pourquoi l'osteoarthritis apparaît-elle ?\n\nL'osteoarthritis n'a pas une seule cause. Elle résulte souvent de plusieurs facteurs associés.\n\n**L'âge :** Avec le temps, le cartilage perd progressivement en souplesse et en capacité de réparation. Le risque d'osteoarthritis augmente donc naturellement avec l'âge.\n\n**Les mouvements répétés :** Certaines activités professionnelles, sportives ou manuelles sollicitent fortement les joints de la main : gestes répétitifs, serrage, pincement, utilisation d'outils vibrants, travail prolongé sur écran ou smartphone. Ces contraintes mécaniques répétées peuvent accélérer l'usure articulaire.\n\n**Les facteurs héréditaires :** Certaines personnes présentent une prédisposition familiale. L'osteoarthritis des doigts est notamment plus fréquente dans certaines familles.\n\n**Les traumatismes :** Une fracture, une entorse, une luxation ou une ancienne blessure de la main ou du pouce peuvent fragiliser une joint et favoriser l'apparition d'une osteoarthritis secondaire.\n\n**Les hormones :** L'hand osteoarthritis touche plus souvent les femmes, notamment après la ménopause, suggérant un rôle hormonal dans son développement.\n\n**L'hyperlaxité et certaines morphologies :** Des joints très souples ou certaines formes anatomiques du pouce peuvent entraîner une instabilité favorisant l'usure du cartilage.\n\n## Comment évolue l'osteoarthritis ?\n\nL'osteoarthritis évolue généralement lentement, sur plusieurs années.\n\nAu début, les douleurs apparaissent surtout lors des efforts : ouvrir un bocal, tourner une clé, porter des objets, écrire, utiliser un téléphone.\n\nPuis les symptômes peuvent devenir plus fréquents :\n- douleurs au repos\n- perte de force\n- raideur matinale\n- gêne dans les gestes fins\n- sensation de craquement\n- gonflement articulaire\n\nAvec le temps, certaines joints peuvent se déformer. Dans la trapeziometacarpal osteoarthritis, le pouce peut perdre en stabilité et en force, rendant certains gestes du quotidien difficiles.\n\nL'évolution est très variable d'une personne à l'autre. Certaines osteoarthritiss restent peu gênantes pendant des années, tandis que d'autres deviennent rapidement invalidantes.\n\n## Les facteurs qui aggravent l'osteoarthritis\n\nCertains éléments peuvent accélérer l'évolution ou augmenter les douleurs :\n\n- les gestes répétitifs excessifs\n- le port de charges lourdes\n- le manque de repos articulaire\n- certaines activités manuelles intensives\n- les mauvaises postures\n- le stress et la fatigue\n- le tabac\n- le surpoids (qui favorise l'inflammation générale)\n- l'absence de prise en charge précoce\n\nDes poussées inflammatoires peuvent également survenir par périodes, provoquant davantage de douleur et de gonflement.\n\n## Peut-on agir ?\n\nOui. Une prise en charge précoce permet souvent de ralentir l'évolution et d'améliorer le confort au quotidien.\n\nLa prévention repose notamment sur :\n\n- l'adaptation des gestes\n- la protection des joints\n- les exercices adaptés\n- le maintien de la mobilité\n- une bonne hygiène de vie\n- l'utilisation d'attelles lorsque nécessaire\n- un accompagnement médical personnalisé\n\nMieux comprendre son osteoarthritis permet d'agir plus tôt et de préserver durablement la fonction de la main.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "la-rhizarthrose",
    "poleSlug": "chirurgie",
    "title": "La trapeziometacarpal osteoarthritis",
    "description": "Définition, causes, symptômes, diagnostic et traitements de l'osteoarthritis de la base du pouce.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_16_juil._2025_a_16_50_16_e2101b5d-c218-4804-aa6d-ec1e26edde7e.png",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/8hWU1x01hrU",
        "title": "La trapeziometacarpal osteoarthritis — explications"
      }
    ],
    "content": "## Qu'est-ce que la trapeziometacarpal osteoarthritis ?\n\nLa trapeziometacarpal osteoarthritis est une osteoarthritis de l'joint trapézo-métacarpienne (TM), c'est-à-dire l'joint située à la base du pouce, entre l'os trapèze du poignet et le premier métacarpien. C'est l'une des formes d'osteoarthritis les plus fréquentes de la main.\n\n## Causes et facteurs de risque\n\n- **Âge :** la prévalence augmente avec l'âge\n- **Sexe féminin :** les femmes sont nettement plus touchées, notamment après la ménopause\n- **Prédispositions génétiques :** antécédents familiaux d'hand osteoarthritis\n- **Activités répétitives :** sollicitation intense du pouce (couturières, musiciens, artisans)\n- **Traumatismes antérieurs :** entorse, fracture ancienne de la base du pouce\n\n## Symptômes\n\n- Douleur à la base du pouce, surtout lors des gestes de pince (ouvrir un bocal, tourner une clé)\n- Raideur matinale\n- Gonflement de l'joint\n- Déformation progressive\n- Perte de force de grip\n\n## Diagnostic\n\nLe diagnostic repose sur :\n- L'examen clinique (palpation de la base du pouce, test de la colonne du pouce)\n- La radiographie standard (pincement de l'interligne articulaire, ostéophytes)\n- L'IRM si nécessaire pour évaluer les tissus mous\n\n## Traitements\n\n### Traitements conservateurs (non chirurgicaux)\n\n- Antalgiques et anti-inflammatorys (selon prescription médicale)\n- orthosiss stabilisatrices de la colonne du pouce\n- physiotherapy spécialisée\n- injections de corticoïdes\n- Nutrition anti-inflammatory\n\n### Traitements chirurgicaux\n\n- **Arthroplastie (trapézectomie-ligamentoplastie)** : ablation de l'os trapèze et reconstruction ligamentaire — technique de référence\n- **prosthesis trapézo-métacarpienne** : remplacement de l'joint par une prosthesis\n- **Ostéotomie** : réaxage osseux dans certains cas précoces\n- **Fusion articulaire** : rare, réservée à certaines situations particulières\n\n## Prévention et adaptation\n\n- Utiliser des outils à manches larges\n- Éviter les gestes de pincement répétitifs\n- Porter une orthosis de stabilisation lors des activités\n- Pratiquer des exercices de renforcement adaptés",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "la-chirurgie-prothetique",
    "poleSlug": "chirurgie",
    "title": "La Chirurgie Prothétique",
    "description": "Qu'est-ce qu'un chirurgien de la main ? Comment se déroule une intervention de trapeziometacarpal osteoarthritis ?",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-19_5808fe9e-a19c-4d5c-a71d-2eda804ee51b.png",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/M4GSxkmvyJg",
        "title": "Chirurgie prothétique — vidéo 1"
      },
      {
        "embedUrl": "https://www.youtube.com/embed/PGBY51V_ipg",
        "title": "Chirurgie prothétique — vidéo 2"
      },
      {
        "embedUrl": "https://www.youtube.com/embed/LykGmVy5YrI",
        "title": "Chirurgie prothétique — vidéo 3"
      },
      {
        "embedUrl": "https://www.youtube.com/embed/Hbfpse11sKQ",
        "title": "Chirurgie prothétique — vidéo 4"
      }
    ],
    "content": "## Chirurgien de la main – un métier de précision\n\nUn chirurgien de la main est un spécialiste formé à la prise en charge médicale et chirurgicale des pathologies de la main, du poignet, des nerfs, des tendons.\n\nC'est une surspécialité issue de la chirurgie orthopédique ou plastique, nécessitant une formation complémentaire rigoureuse.\n\nSes domaines d'intervention incluent :\n- Traumatologie : fractures, plaies tendineuses ou nerveuses, urgences de la main\n- Pathologies dégénératives : thumb osteoarthritis (trapeziometacarpal osteoarthritis), doigts à ressaut\n- Microchirurgie : réparation des nerfs et des vaisseaux, greffes, réimplantations\n- Pathologies fonctionnelles : canal carpien, kystes, compression nerveuse\n\n## La Chirurgie\n\nLa chirurgie avec prosthesis articulaire vise à remplacer l'joint abîmée par une prosthesis.\n\nL'intervention se déroule sous anesthésie loco-régionale : seul votre bras sera endormi. L'intervention dure un peu moins d'une heure, vous pourrez rentrer chez vous le jour même. Après l'opération, vous devrez porter une attelle pendant 3 semaines. Vous aurez également des séances de rehabilitation pendant deux mois afin de vous aider à retrouver une totale mobilité de votre pouce et améliorer votre force de grip.\n\nLors de l'intervention, vous serez éveillé puisque l'anesthésie est loco-régionale. Vous serez installé en position couchée, sur le dos, avec le bras opéré bien exposé sur une tablette. Une antisepsie sera réalisée pour désinfecter la zone opérée et éviter les infections. Vous devrez avoir pris une douche la veille et le matin de l'intervention.\n\nL'intervention consiste en une incision assez petite, entre 3 et 4 centimètres. Puis le chirurgien dégage les tissus mous, les tendons et les muscles pour pouvoir accéder à l'joint sans toucher les structures environnantes. Il enlève ensuite la partie ostéochondrale usée et positionne la prosthesis. Il vérifie le bon fonctionnement de la prosthesis et referme les tissus et la peau avec des sutures.\n\n## 1. Principe & fonctionnement de la prosthesis\n\nLa prosthesis utilise un concept de double mobilité, initialement développé pour les prosthesiss de hanche, appliqué à l'joint trapézo-métacarpienne (base du pouce). Il comporte :\n- Une cupule (sphérique ou conique) scellée dans le trapèze\n- Un insert en polyéthylène hautement réticulé (PE) qui s'articule à la fois avec la cupule et la tête métallique, offrant deux degrés de liberté articulaires\n\nCette conception permet de réduire les risques de luxation et d'accroître l'amplitude de mouvement, tout en répartissant mieux les contraintes mécaniques.\n\n## 2. Matières & composants de la prosthesis\n\n- **Cupules (sphériques ou coniques)** en acier inoxydable, revêtues de titane et d'hydroxyapatite (HAP) pour favoriser leur fixation osseuse\n- **Insert** : polyéthylène hautement réticulé (PE), durable et résistant à l'usure\n- **Tige** (colonne métacarpienne) en titane (avec revêtement titane+HAP), disponible en plusieurs tailles (XS à 4), formes anatomiques (trilobées), et hauteurs variées (6, 8, 10 mm), pour adapter précisément à l'anatomie du patient\n\n## 3. Durabilité & résultats cliniques\n\nÉtudes à court/moyen terme montrent des résultats fonctionnels très encourageants (mobilité, soulagement de la douleur, satisfaction).\n\nÀ 2 ans de suivi :\n- **Survie implantaire** estimée à 96 %, taux de réintervention < 5 %\n- **Douleur au repos** tombée à 0 (sur échelle DASH) chez la majorité des patients\n- **Force de grip** (pince pouce-index) significativement augmentée (~4,5 kg → ~7 kg)\n\nComparée à la trapézectomie classique, la prosthesis permet une récupération plus rapide (retour au travail, meilleure force).\n\n## 4. Mise en place chirurgicale de la prosthesis\n\nLa chirurgie requiert un ancillaire spécifique de dernière génération pour positionner précisément les composants.\n\nIl est impératif de centrer et positionner la cupule **perpendiculaire à l'axe du métacarpien**, pour maximiser la mobilité (jusqu'à 116°) et éviter les conflits intra-prothétiques. Un positionnement incorrect peut entraîner usure prématurée ou descellement.\n\nL'intervention se déroule en plusieurs étapes : préparation métacarpienne et trapézienne, choix des composants adaptés, test de stabilité et de mobilité, suture et pansement.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "protheses-tmc-et-digitales-ipp",
    "poleSlug": "chirurgie",
    "title": "prosthesiss trapeziometacarpals et prosthesiss digitales IPP",
    "description": "Tout savoir sur les prosthesiss trapeziometacarpals et digitales IPP",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-30_111ac8b4-d5ea-4a85-81af-47b88db9f53a.png",
    "content": "## 1. Principe & fonctionnement de la prosthesis TMC\n\nLa prosthesis utilise un concept de double mobilité, initialement développé pour les prosthesiss de hanche, appliqué à l'joint trapézo-métacarpienne (base du pouce). Il comporte :\n- Une cupule (sphérique ou conique) scellée dans le trapèze\n- Un insert en polyéthylène hautement réticulé (PE) qui s'articule à la fois avec la cupule et la tête métallique, offrant deux degrés de liberté articulaires\n\nCette conception permet de réduire les risques de luxation et d'accroître l'amplitude de mouvement, tout en répartissant mieux les contraintes mécaniques.\n\n## 2. Matières & composants\n\n- **Cupules** en acier inoxydable, revêtues de titane et d'hydroxyapatite (HAP) pour favoriser leur fixation osseuse\n- **Insert** : polyéthylène hautement réticulé (PE), durable et résistant à l'usure\n- **Tige** en titane, disponible en plusieurs tailles (XS à 4), formes anatomiques (trilobées), et hauteurs variées (6, 8, 10 mm)\n\n## 3. Durabilité & résultats cliniques\n\nÉtudes à court/moyen terme montrent des résultats fonctionnels très encourageants.\n\nÀ 2 ans de suivi :\n- **Survie implantaire** estimée à 96 %, taux de réintervention < 5 %\n- **Douleur au repos** tombée à 0 (sur échelle DASH) chez la majorité des patients\n- **Force de grip** significativement augmentée (~4,5 kg → ~7 kg)\n\nComparée à la trapézectomie classique, la prosthesis permet une récupération plus rapide.\n\n## 4. Mise en place chirurgicale\n\nLa chirurgie requiert un ancillaire spécifique de dernière génération. Il est impératif de centrer et positionner la cupule **perpendiculaire à l'axe du métacarpien**, pour maximiser la mobilité (jusqu'à 116°) et éviter les conflits intra-prothétiques.\n\nL'intervention se déroule en plusieurs étapes : préparation métacarpienne et trapézienne, choix des composants adaptés, test de stabilité et de mobilité, suture et pansement.\n\n## prosthesis IPP (Interphalangienne Proximale)\n\n### Qu'est-ce qu'une prosthesis IPP ?\n\nLa prosthesis IPP remplace l'joint située entre la première et la deuxième phalange (joint proximale du doigt), souvent altérée par l'osteoarthritis. Elle vise à restaurer une joint mobile, réduire la douleur et permettre une fonction digitale plus fluide.\n\n### Différents types de prosthesiss IPP\n\n1. **Spacers (espaceurs en silicone)** : maintiennent un espace entre les os à l'aide d'un matériau souple. Avantages : longue durée de vie, changement relativement simple. Inconvénient : la mobilité diminue avec le temps à cause du dépôt osseux autour de l'implant.\n\n2. **prosthesiss articulaires à glissement ou charnière** : imitent une joint naturelle, avec deux surfaces qui coulissent l'une sur l'autre. Fabriquées dans des matériaux biocompatibles (alliages chrome-cobalt, pyrocarbone, ou métal + polyéthylène).\n\n3. **prosthesis anatomique totale (ex. TACTYS)** : dispositif modulaire non contraint conçu pour reproduire la flexion naturelle de l'joint.\n\n4. **Design semi-contraint (ex. IPP2)** : préserve l'axe de flexion naturel, offre une bonne stabilité (flexion jusqu'à ~100°) et assure une fixation durable grâce à un revêtement titane poreux.\n\n### Matériaux courants\n\n- **Silicone médical** : souple, toléré, mais la mobilité peut décliner avec le temps\n- **Chrome-cobalt / pyrocarbone** : résistants à l'usure et rigides\n- **Métal + polyéthylène** : combinent robustesse et glissement fluide\n\n### Procédure chirurgicale et post-operative\n\n- **Préopératoire** : bilan radiologique précis, évaluation de l'état osseux et ligamentaire\n- **Intervention** : réalisée en ambulatoire, sous anesthésie locale ou locorégionale. L'accès est possible par voie dorsale (via les extenseurs) ou palmaire selon les cas\n- **Fixation de l'implant** : soit cimentée, soit scellée, selon le type de prosthesis\n- **Après l'opération** : soins de pansement durant environ 15 jours ; attelle dynamique 4 à 6 semaines (voie dorsale) ou strapping adjacent (voie palmaire). Mobilisation douce encouragée rapidement.\n\n### Avantages et limites\n\n**Avantages :**\n- Diminution significative de la douleur\n- Récupération de la mobilité (flexion moyenne ~90° pour des joints jusqu'à 110-120°)\n- Fonction améliorée pour les actions simples\n\n**Limites :**\n- Mobilité pas toujours pleinement rétablie selon l'état initial et les soins post-operatives\n- Usure et nécessité de suivi régulier\n- Risques généraux : infection, raideur, déboîtement, réactions biologiques",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "les-10-regles-or",
    "poleSlug": "nutrition",
    "title": "Les 10 règles d'OR de l'alimentation anti-inflammatory",
    "description": "Les principes fondamentaux d'une alimentation qui protège vos joints au quotidien.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-17_8806a71d-b363-41f7-b8a1-214aa404019c.png",
    "date": "2026-03-20",
    "content": "## Les 10 règles d'or\n\n1. **Abondance et diversité de légumes et fruits de saison** — 50 % de l'assiette (vitamines, minéraux, polyphénols, antioxydants, fibres prébiotiques)\n\n2. **Booster la consommation d'oméga 3**\n   - Huile riche en oméga 3 : 1 à 2 cuillères à soupe par jour\n   - Petits poissons gras : 2 à 3 fois par semaine\n   - Oléagineux : noix\n\n3. **Limiter les aliments à index glycémique élevé** — sucres rapides, pain blanc, produits sucrés industriels\n\n4. **Respecter l'équilibre de l'assiette acido-basique** — privilégier légumes, fruits, légumineuses\n\n5. **Réduire la consommation de viande rouge et charcuterie** — sources de graisses saturées pro-inflammatoires\n\n6. **Réduire fortement les produits transformés et ultra-transformés** — favoriser producteurs locaux et circuits courts\n\n7. **Limiter la consommation de sel** — remplacer par gomasio et épices\n\n8. **Contrôler le poids** — le surpoids aggrave l'inflammation articulaire systémique\n\n9. **Lutter contre la sédentarité** — une activité physique douce et régulière reste essentielle\n\n10. **Prendre le pouvoir sur l'osteoarthritis** — harmonie de vie, sommeil de qualité, limitation du stress",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "la-nutrition-anti-inflammatoire",
    "poleSlug": "nutrition",
    "title": "La nutrition anti-inflammatory",
    "description": "\"L'alimentation est la première des médecines.\" Comprendre comment l'assiette agit sur l'osteoarthritis.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Design_sans_titre-5_f5888581-44a7-4e8b-9c14-073688c6067a.png",
    "date": "2025-10-24",
    "videos": [
      {
        "embedUrl": "https://www.youtube.com/embed/cXXAe4-UyKU",
        "title": "La nutrition anti-inflammatory"
      }
    ],
    "content": "> *\"L'alimentation est la première des médecines\"* — Hippocrate\n\n## Comprendre\n\nLa nutrition anti-inflammatory est une approche alimentaire qui vise à réduire l'inflammation chronique dans l'organisme. Elle repose sur trois grands principes :\n\n1. **Réduire** les aliments pro-inflammatoires (sucre raffiné, excès de graisses saturées, produits ultra-transformés)\n2. **Augmenter** les aliments protecteurs et réparateurs (oméga-3, antioxydants, fibres)\n3. **Soutenir** les processus naturels de résolution de l'inflammation, grâce à des nutriments spécifiques\n\n**Bénéfices attendus :**\n- Diminution de la douleur articulaire\n- Meilleure mobilité\n- Énergie et récupération améliorées\n- Soutien de la santé globale (cœur, cerveau, digestion)\n\n## Pourquoi l'alimentation est importante dans la trapeziometacarpal osteoarthritis\n\n- **Réduire la douleur** : en diminuant les molécules pro-inflammatoires circulantes dans le corps, on peut atténuer les poussées douloureuses\n- **Préserver la mobilité** : moins d'inflammation signifie souvent moins de raideur matinale et plus de facilité dans les gestes quotidiens\n- **Soutenir la réparation tissulaire** : certains nutriments (oméga-3, antioxydants) soutiennent le renouvellement cellulaire et limitent les dommages oxydatifs\n- **Améliorer l'état général** : un corps moins inflammé est aussi plus énergique et récupère mieux après l'effort ou la rehabilitation\n\n## Les bases de la nutrition anti-inflammatory\n\n### À limiter — aliments pro-inflammatoires\n\n- Sucres rapides (sodas, bonbons, pâtisseries)\n- Graisses saturées en excès (fritures, charcuteries)\n- Produits ultra-transformés riches en additifs et sel\n\n### À augmenter — aliments protecteurs\n\n- Fruits et légumes colorés (antioxydants puissants)\n- Poissons gras et graines riches en oméga-3 (EPA, DHA, ALA)\n- Huiles végétales de qualité (olive, colza, lin)\n- Épices anti-inflammatorys (curcuma, gingembre)\n\n**Varier et équilibrer** : pour éviter carences et déséquilibres, tout en gardant le plaisir de manger.\n\n## Le mécanisme en bref\n\n- **Sans alimentation adaptée** : l'organisme reste dans un état de micro-inflammation chronique, qui entretient les douleurs articulaires et accélère la dégradation du cartilage\n- **Avec alimentation anti-inflammatory** : on diminue la production de cytokines pro-inflammatoires et on favorise la libération de médiateurs pro-résolution (SPM) issus des oméga-3, qui aident à éteindre l'inflammation\n\n## Exemple concret — thumb osteoarthritis et alimentation\n\nUne personne souffrant de trapeziometacarpal osteoarthritis qui adopte une alimentation riche en poissons gras, légumes variés et épices anti-inflammatorys, et qui réduit sa consommation de produits industriels sucrés et salés, peut constater :\n\n1. Moins de gonflement de l'joint\n2. Moins de douleurs lors des gestes de pince (ouvrir un bocal, écrire)\n3. Moins de raideur le matin\n4. Plus d'énergie pour suivre les séances de physiotherapy ou d'occupational therapy\n\n> **Astuce :** Penser à chaque repas comme à une \"opportunité anti-inflammatory\". Un simple ajout (une poignée de noix, une cuillère d'huile d'olive, quelques fruits rouges) peut faire la différence sur le long terme.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "les-aliments-anti-inflammatoires",
    "poleSlug": "nutrition",
    "title": "Les Aliments anti-inflammatorys",
    "description": "Guide complet des aliments à privilégier pour soutenir vos joints et réduire l'inflammation.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-2_12a441b6-ddd4-474a-9114-57ca2d3ca2ba.png",
    "date": "2025-10-24",
    "content": "## Soutenir vos joints par l'assiette\n\nUne alimentation anti-inflammatory est l'un des piliers pour mieux vivre avec la trapeziometacarpal osteoarthritis. Chaque aliment présenté ici est choisi pour son potentiel à réduire l'inflammation, soutenir la souplesse articulaire et limiter les douleurs.\n\n## 1. Fruits et légumes colorés\n\n**Exemples :** myrtilles, framboises, cerises, oranges, épinards, brocoli, chou kale, poivrons rouges, carottes\n\n**Riches en :** antioxydants (vitamine C, bêta-carotène, flavonoïdes, anthocyanes)\n\n**Bénéfices pour l'thumb osteoarthritis :**\n- Neutralisent les radicaux libres responsables de l'usure du cartilage\n- Réduisent les réactions inflammatoires au niveau articulaire\n- Favorisent la production de collagène pour des tissus plus résistants\n\n## 2. Sources d'oméga-3\n\n**Exemples :** saumon, sardines, maquereaux, truite, graines de lin, graines de chia, noix, huile de colza, huile de lin\n\n**Riches en :** acides gras EPA, DHA, ALA\n\n**Bénéfices pour l'thumb osteoarthritis :**\n- Réduisent la production de cytokines pro-inflammatoires\n- Soutiennent la lubrification articulaire\n- Participent à la régénération cellulaire et à la résolution naturelle de l'inflammation\n\n## 3. Huiles de qualité\n\n**Exemples :** huile d'olive extra-vierge, huile de noix, huile de lin (à froid)\n\n**Riches en :** polyphénols, acides gras mono et polyinsaturés\n\n**Bénéfices :** L'oléocanthal de l'huile d'olive a des propriétés proches de certains anti-inflammatorys naturels. Limite l'inflammation chronique et protège les membranes cellulaires.\n\n## 4. Épices et herbes aromatiques\n\n**Exemples :** curcuma (avec poivre noir pour augmenter son absorption), gingembre, ail, oignon, thym, romarin\n\n**Riches en :** curcumine, gingerol, composés soufrés, antioxydants\n\n**Bénéfices pour l'thumb osteoarthritis :**\n- Action anti-inflammatory directe sur les joints\n- Améliorent la circulation locale, réduisant les sensations de raideur\n- Peuvent réduire la perception de la douleur grâce à leurs effets sur certaines voies nerveuses\n\n## 5. Protéines maigres et légumineuses\n\n**Exemples :** poulet, dinde, œufs, lentilles, pois chiches, haricots rouges, tofu\n\n**Bénéfices :** maintiennent la masse musculaire autour de l'joint, apportent des nutriments nécessaires à la réparation des tissus\n\n## 6. Céréales complètes\n\n**Exemples :** quinoa, riz complet, flocons d'avoine, sarrasin\n\n**Bénéfices :** stabilisent la glycémie, apport continu d'énergie\n\n## 7. Boissons protectrices\n\n**Exemples :** thé vert, tisanes curcuma-gingembre, eau citronnée\n\n**Bénéfices :** action antioxydante, soutien hydratation\n\n> **Astuce :** Variez les couleurs dans l'assiette chaque jour — plus il y a de couleurs, plus il y a de molécules protectrices.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "petits-dejeuners-anti-inflammatoires",
    "poleSlug": "nutrition",
    "title": "Petits déjeuners anti-inflammatorys",
    "description": "Guide complet pour composer des petits-déjeuners protecteurs et gourmands. Par Corinne Moulet, diététicienne micro-nutritionniste.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-35_2f6e5506-b215-453a-9011-6b2bb46788ff.png",
    "date": "2025-10-24",
    "author": "Corinne Moulet — Diététicienne Micro-nutritionniste",
    "content": "## La formule de base\n\nUn petit-déjeuner anti-inflammatory équilibré repose sur 4 éléments :\n\n1. **1 boisson chaude ou fraîche** — thé vert, tisane, eau citronnée, café (modéré)\n2. **1 glucide IG bas ou modéré riche en fibres** — céréales complètes, pain au levain, flocons d'avoine, sarrasin, fruits\n3. **1 protéine** — œufs, fromage blanc, yaourt nature, produits laitiers, poisson fumé\n4. **1 matière grasse** — oléagineux, purées d'oléagineux (amande, noisette), avocat, huile de qualité\n\n## Sources de protéines\n\n- Œufs (coque, brouillés, pochés)\n- Produits laitiers : yaourt, fromage blanc, fromage à pâte dure\n- Poisson fumé : saumon, truite\n- Viandes maigres (volaille)\n\n## Glucides à IG bas\n\n- Céréales complètes (avoine, seigle, épeautre)\n- Pain au levain ou pain complet\n- Fruits frais de saison\n- Légumineuses (rares au petit-déj mais possibles : houmous sur tartine)\n\n## Bonnes graisses\n\n- Noix, amandes, noisettes, noix du Brésil\n- Purées d'oléagineux (sans sucre ajouté)\n- Avocat\n- Huile de lin ou de colza (à froid, sur tartine)\n\n## Idées de petit-déjeuners rapides\n\n- **Tartine gourmande salée** : pain au levain + avocat écrasé + œuf poché + graines de sésame\n- **Bol d'açaï** : base açaï congelée + fruits rouges + granola sans sucre + noix + filet de miel\n- **Bol super food** : yaourt grec + myrtilles + graines de chia + flocons d'avoine + noix\n- **Miam aux fruits** : flocons d'avoine + lait végétal + banane + fruits rouges + cannelle\n- **Tartine ricotta** : pain complet + ricotta + framboises + filet de miel + amandes effilées",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "idees-menus",
    "poleSlug": "nutrition",
    "title": "Les idées menus anti-inflammatorys",
    "description": "Une galerie de menus anti-inflammatorys pour s'inspirer au quotidien.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-7_24670c68-8809-436d-9140-a831cfd196d4.png",
    "date": "2025-08-13",
    "images": [
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-8.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-5.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-6.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-9.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-10.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-11.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-12.png",
      "https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Astuce_pratique-13.png"
    ],
    "content": "## Inspiration repas\n\nCes idées menus illustrent comment composer des repas anti-inflammatorys variés, gourmands et accessibles.\n\nChaque menu respecte les principes de la nutrition anti-inflammatory : abondance de végétaux colorés, oméga-3 présents, glucides à IG bas, protéines maigres et bonnes graisses.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "micronutrition",
    "poleSlug": "nutrition",
    "title": "micronutrition",
    "description": "Vitamines, minéraux et oligo-éléments : comment la micronutrition optimise la santé articulaire.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-14_bded3d70-326d-4572-8de1-f055788b313b.png",
    "date": "2024-08-02",
    "content": "## 1. Qu'est-ce que la micronutrition ?\n\nLa micronutrition est une approche de la santé qui se concentre sur les micronutriments — vitamines, minéraux, oligo-éléments, acides gras essentiels, antioxydants, acides aminés, probiotiques…\n\nCes éléments, bien que nécessaires en très petites quantités, jouent un rôle majeur dans le fonctionnement optimal de nos cellules, la protection contre l'inflammation et la régénération tissulaire.\n\nDans le cas de l'hand osteoarthritis (et particulièrement la trapeziometacarpal osteoarthritis), la micronutrition vise à :\n- Réduire l'inflammation chronique de l'joint\n- Soutenir la réparation et la souplesse des tissus articulaires\n- Améliorer la lubrification articulaire\n- Limiter la progression de l'usure du cartilage\n\n## 2. Les grands principes appliqués à l'osteoarthritis\n\n- **Principe 1 – Corriger les déficits** : Un manque en vitamine D, magnésium ou oméga-3 peut aggraver l'inflammation et la dégradation articulaire.\n- **Principe 2 – Optimiser les apports protecteurs** : Apporter suffisamment d'antioxydants (vitamines C et E, polyphénols) pour contrer les radicaux libres qui endommagent le cartilage.\n- **Principe 3 – Favoriser l'équilibre global** : Soutenir l'équilibre intestinal (microbiote) qui influence l'inflammation systémique.\n\n## 3. Comment et pourquoi ça fonctionne ?\n\nDans l'osteoarthritis, l'inflammation libère des enzymes destructrices qui dégradent le cartilage. Les micronutriments agissent à différents niveaux :\n\n- **anti-inflammatorys naturels** (oméga-3, curcumine) → réduisent la production de cytokines pro-inflammatoires\n- **Antioxydants** (vitamines C, E, sélénium, zinc) → limitent le stress oxydatif qui abîme les cellules articulaires\n- **Cofacteurs enzymatiques** (magnésium, manganèse, cuivre) → nécessaires à la fabrication de collagène et d'élastine, composants clés des joints\n- **Probiotiques** → améliorent l'équilibre intestinal, ce qui module la réponse inflammatoire globale\n\n## 4. Conseils pratiques\n\n- Faire un bilan micronutritionnel avant toute supplémentation pour cibler vos besoins réels\n- Associer les compléments à une alimentation anti-inflammatory (richesse en oméga-3, fibres, végétaux colorés)\n- Fractionner les prises dans la journée pour une meilleure absorption\n- Hydrater régulièrement pour soutenir la fonction articulaire\n\n> **Note importante :** La micronutrition ne remplace pas les traitements médicaux ni la rehabilitation, mais elle optimise l'efficacité de l'ensemble du parcours de soins. Il est important d'en parler avec votre médecin traitant car il peut y avoir des interactions avec certains traitements.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "le-vieillissement-cutane-des-mains",
    "poleSlug": "beaute",
    "title": "Le Vieillissement cutané des mains",
    "description": "Comment préserver et retrouver la jeunesse de nos mains",
    "image": "/images/beaute/vieillissement-mains.webp",
    "content": "## 1. Les spécificités de la peau des mains\n\n- Peu de glandes sébacées → peau plus sèche que le visage, moins protégée par le film lipidique naturel\n- Exposition constante → soleil, eau, produits ménagers, variations de température\n- Peu de tissu adipeux sous-cutané → les tendons, veines et os deviennent plus visibles avec le temps\n\n## 2. Les mécanismes du vieillissement\n\n- **Vieillissement intrinsèque** : lié à l'âge et à la génétique. Les cellules se renouvellent plus lentement, la production de collagène et d'élastine diminue, la peau perd en fermeté et en épaisseur\n- **Vieillissement extrinsèque** : causé par les agressions extérieures (UV, tabac, pollution, produits irritants). Les UV sont responsables de 80 % du vieillissement visible\n- **Photovieillissement** : apparition de taches brunes (lentigos solaires), texture irrégulière, perte d'élasticité\n- **Altérations vasculaires** : fragilisation des capillaires, donnant une peau plus fine et marbrée\n- **Fonte graisseuse** : perte progressive de la graisse sous-cutanée, rendant les structures profondes visibles\n\n## 3. Conséquences esthétiques\n\n- Peau fine, fripée, sèche\n- Taches pigmentaires et irrégularités de couleur\n- Relief marqué des veines et tendons\n- Perte de douceur et d'hydratation\n\n## 4. Les facteurs aggravants à éviter\n\n- **Le soleil sans protection** : principal responsable du vieillissement prématuré. Provoque taches brunes, perte d'élasticité et texture irrégulière\n- **Les produits irritants** : détergents, solvants et produits ménagers agressifs altèrent la barrière cutanée\n- **Le tabac** : réduit la microcirculation, accélère la dégradation du collagène et ternit le teint\n- **Le froid et la sécheresse** : fragilisent la peau déjà peu protégée par les glandes sébacées\n- **Les gestes répétitifs** : l'exposition prolongée à l'eau et aux frottements use davantage la peau fine des mains\n\n## 5. Quand consulter un spécialiste ?\n\nCertains signes méritent une consultation médicale :\n\n- **Taches pigmentaires** nombreuses ou qui évoluent rapidement\n- **Perte de volume** marquée rendant les veines et tendons très saillants\n- **Sécheresse extrême** résistant aux soins habituels\n- **Prurit ou irritations** persistantes\n\nUn chirurgien de la main ou un dermatologue pourra évaluer l'état cutané et proposer des solutions adaptées : soins médicaux, injections de comblement ou traitements dermatologiques.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "prevention-vieillissement-mains",
    "poleSlug": "beaute",
    "title": "Prévention",
    "description": "Prévention du vieillissement de nos mains",
    "image": "/images/beaute/prevention.webp",
    "content": "## 1. Protection solaire au quotidien\n\n- Crème SPF 30 à 50 toute l'année, réappliquée après lavage ou exposition prolongée\n- Gants anti-UV pour conduite ou sports extérieurs prolongés\n\n## 2. Hydratation régulière\n\n- Crèmes riches en glycérine, urée, acide hyaluronique\n- Bain d'huile (huile d'amande douce, jojoba) 1 à 2 fois par semaine\n\n## 3. Éviter les agressions\n\n- Porter des gants ménagers pour vaisselle et produits d'entretien\n- Limiter l'eau chaude et les savons agressifs → privilégier nettoyants doux pH neutre\n\n## 4. Nutrition & micronutrition\n\n- Apport suffisant en vitamine C, zinc, oméga-3 pour soutenir la production de collagène et l'élasticité cutanée\n\n## 5. Soins réguliers\n\n- Gommage doux 1 fois par semaine pour stimuler le renouvellement cellulaire\n- Massages avec crème riche pour stimuler la microcirculation et favoriser la pénétration des actifs\n- Application de sérum vitamine C le matin pour uniformiser le teint et protéger contre les radicaux libres\n- Masque hydratant 1 à 2 fois par semaine (miel, aloe vera, huile d'argan)\n\n## 6. Les bons réflexes au quotidien\n\nDe petits gestes simples font une grande différence sur le long terme :\n\n- Appliquer sa crème visage sur le dos des mains en fin de routine beauté\n- Porter des gants en hiver pour protéger du froid et du vent\n- Sécher soigneusement les mains après lavage pour éviter les gerçures\n- Boire suffisamment d'eau pour maintenir l'hydratation de la peau de l'intérieur\n\nUne prévention régulière et cohérente permet de ralentir significativement les signes du vieillissement et de garder des mains douces, hydratées et lumineuses plus longtemps.",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "les-injections",
    "poleSlug": "beaute",
    "title": "Les injections",
    "description": "La médecine esthétique au profit de nos mains",
    "image": "/images/beaute/injections.webp",
    "content": "Les mains, tout comme le visage, sont l'un des premiers témoins visibles du temps qui passe. Avec l'âge, la peau s'affine, perd son élasticité, les veines et tendons deviennent plus apparents, et des taches peuvent se former. Pour celles et ceux qui souhaitent retrouver des mains plus jeunes, lisses et harmonieuses, la médecine esthétique propose aujourd'hui des solutions douces et efficaces.\n\nLes injections de produits de comblement permettent de restaurer le volume perdu, d'hydrater en profondeur et de stimuler la production naturelle de collagène. Elles s'adressent particulièrement aux personnes qui :\n- Souhaitent corriger la fonte graisseuse et l'aspect creusé du dos des mains\n- Désirent atténuer la visibilité des veines et tendons\n- Recherchent un résultat naturel, durable et sans chirurgie lourde\n\nEn confiant ce geste à un chirurgien de la main, on bénéficie d'une expertise précise de l'anatomie et d'une sécurité optimale, garantissant un résultat harmonieux et adapté à chaque morphologie.\n\n## 1. Quel produit est injecté ?\n\nIl s'agit généralement du **Radiesse®** :\n- Produit de comblement à base d'hydroxyapatite de calcium (CaHA), une substance biocompatible et biodégradable\n- Agit comme un stimulant de collagène : donne un effet immédiat de comblement et améliore la qualité de la peau sur le long terme\n\n## 2. Mécanisme d'action\n\n- Injecté dans le dos de la main, Radiesse® restaure le volume perdu, masquant veines et tendons apparents\n- Les microsphères de CaHA stimulent la production de nouveau collagène autour d'elles\n- Au fil des mois, le gel porteur est résorbé et remplacé par le tissu collagénique nouvellement formé\n\n## 3. Déroulement d'une séance\n\n1. Consultation préalable pour évaluer l'indication et vérifier l'absence de contre-indication\n2. Désinfection et éventuelle anesthésie locale par crème ou injection\n3. Injections au niveau du dos de la main via une micro-canule ou aiguille fine\n4. Massage doux pour répartir le produit uniformément\n5. Durée totale : 20 à 30 minutes\n\n## 4. Résultats & durée\n\n- **Effet immédiat** : mains plus jeunes, volumes restaurés, peau plus lisse\n- **Résultat optimal** à 1 mois grâce à la stimulation du collagène\n- **Durée moyenne** : 12 à 18 mois selon le patient et son mode de vie\n\n## 5. Résorption et sécurité\n\n- L'hydroxyapatite de calcium se dégrade naturellement dans l'organisme en ions calcium et phosphate, éliminés par les voies naturelles\n- Produit sûr, utilisé depuis des décennies en médecine reconstructrice et esthétique\n\n## 6. Pourquoi choisir un chirurgien de la main pour ce geste ?\n\n- Connaissance approfondie de l'anatomie fine de la main : structures vasculaires, tendineuses et nerveuses\n- Capacité à éviter les zones à risque et à optimiser la répartition du produit\n- Expertise en cas de main déjà opérée, porteuse de cicatrices ou d'implants\n- Maîtrise des gestes d'injection et gestion immédiate d'éventuelles complications",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "kinesitherapie-et-arthrose",
    "poleSlug": "kinesitherapie",
    "title": "physiotherapy et hand osteoarthritis",
    "description": "Objectifs, principes clés et contenu d'une séance type de physiotherapy pour la trapeziometacarpal osteoarthritis.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-22_f9dd5003-b2da-4442-81ce-26268b746f55.png",
    "date": "2025-10-24",
    "content": "## Objectifs\n\n- Diminuer la douleur et l'inflammation\n- Préserver la mobilité fonctionnelle (gestes de la vie quotidienne)\n- Stabiliser la colonne du pouce et les doigts\n- Retarder les déformations et optimiser la force de pince\n\n## Principes clés\n\n1. **Recentrage articulaire** de la trapézo-métacarpienne (TM) : traction douce dans l'axe de M1 (décompression), pour calmer la douleur et recentrer la base métacarpienne\n2. **Ouverture de la 1ʳᵉ commissure** : étirements doux pour lutter contre l'adduction et prévenir la pince en \"bec de canard\"\n3. **Stabilité active TM** : renforcement des petits muscles stabilisateurs du pouce\n4. **Économie articulaire** : éviter les prises sub-termino-terminales pénibles (pince bout de doigts), privilégier prises en \"poulpe\" (main \"qui tient une balle\"), outils à manches épais, deux mains plutôt qu'une\n5. **orthosiss** : attelles de repos nocturnes ou stabilisatrices pour calmer la douleur et protéger l'joint (bénéfice documenté sur douleur/handicap)\n\n## Contenu d'une séance type (non opérée)\n\n- **Antalgie** : chaleur/physiothérapie selon tolérance, massages, mobilisations douces en décompression (sans douleur)\n- **Mobilisations** : flexion/extension et légère rotation TM guidées, amplitude \"confortable\", sans forcer\n- **Renforcement ciblé** : opposant (pouce vers le 5ᵉ doigt) et 1er IOD (abduction du 2ᵉ rayon) en co-contraction autour de la position de fonction ; progression avec élastique souple\n- **Éducation gestuelle** : grips larges, ouverture de commissure dans les gestes, organisation du poste de travail",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "la-kinesitherapie",
    "poleSlug": "kinesitherapie",
    "title": "La physiotherapy et l'hand osteoarthritis",
    "description": "Pourquoi consulter un kiné spécialiste de la main et comment se déroule la collaboration avec le chirurgien.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-27_13eb0eb4-6f4c-4afb-be03-d4c6328c8e1b.png",
    "date": "2025-10-24",
    "content": "## 1. Pourquoi la physiotherapy est utile\n\nL'hand osteoarthritis, et plus particulièrement la trapeziometacarpal osteoarthritis (base du pouce), entraîne douleur, raideur et perte de force et de fonction. La physiotherapy a pour objectifs :\n\n- Soulager la douleur par des techniques manuelles, de la mobilisation douce et des méthodes physiques (chaleur, physiothérapie…)\n- Préserver ou améliorer la mobilité articulaire, afin de maintenir les gestes du quotidien\n- Renforcer les muscles stabilisateurs pour protéger les joints et éviter les compensations néfastes\n- Apprendre des gestes protecteurs et adapter l'environnement pour limiter les contraintes mécaniques\n\nEn intervenant tôt, le physiotherapist peut ralentir la perte fonctionnelle, réduire l'inflammation et améliorer la qualité de vie.\n\n## 2. Pourquoi consulter un physiotherapist spécialiste de la main\n\nLa main est une structure complexe avec plus de 20 joints, un réseau tendineux dense et une mécanique fine. Un physiotherapist formé spécifiquement à la rehabilitation de la main possède :\n\n- Une connaissance approfondie de l'anatomie et de la biomécanique de la main et du poignet\n- La maîtrise de techniques spécifiques comme le recentrage trapézo-métacarpien, l'ouverture de la commissure, ou le renforcement ciblé de l'opposant et du 1er interosseux dorsal\n- L'expertise pour choisir et ajuster une orthosis sur mesure en fonction du stade d'osteoarthritis et de l'activité du patient\n- Une expérience dans l'accompagnement des patients opérés (trapézectomie, ligamentoplastie, prosthesis…)\n\n## 3. Quelle formation a suivi un kiné spécialiste de la main\n\nAprès le diplôme d'État en physiotherapy (5 ans d'études), le physiotherapist peut suivre :\n\n- Un Diplôme Universitaire (DU) ou Interuniversitaire (DIU) de rehabilitation de la main et du membre supérieur\n- Des formations spécialisées validées par le Conseil de l'Ordre des physiotherapists\n- Des stages pratiques dans des centres de chirurgie de la main, en lien direct avec des chirurgiens spécialisés\n\n## 4. L'importance de la collaboration chirurgien – physiotherapist de la main\n\nDans le cas d'une prosthesis trapézo-métacarpienne ou interphalangienne proximale (IPP), la réussite ne dépend pas uniquement de la chirurgie.\n\n- **En pré-opératoire**, le physiotherapist prépare la main : il entretient la mobilité, réduit l'inflammation et optimise l'état musculaire pour faciliter la récupération\n- **En post-operative**, il suit un protocole validé avec le chirurgien : mobilisation progressive, renforcement, travail fonctionnel et conseils d'adaptation\n- La communication régulière entre le chirurgien et le kiné permet d'ajuster le rythme et l'intensité des exercices selon l'évolution",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "kinesitherapie-post-chirurgie",
    "poleSlug": "kinesitherapie",
    "title": "physiotherapy post-chirurgie pour trapeziometacarpal osteoarthritis",
    "description": "Protocole de rehabilitation par phases après trapézectomie, ligamentoplastie ou prosthesis TM.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Astuce_pratique-25_b197a2a8-f599-4bc0-8758-2b15d7bce62b.png",
    "date": "2025-10-24",
    "content": "Les parcours varient selon la technique (trapézectomie-ligamentoplastie, prosthesis TMC, autres). Les jalons ci-dessous sont des repères à adapter par le chirurgien et le physiotherapist.\n\n## Phases et jalons usuels\n\n### 0 à 3 semaines — Protection et antalgie\n\n- Protection (pansements/attelle), antalgie, drainage œdème (élévation, pompages doux)\n- Mobilisations des segments libres (IP, MP non concernés)\n- Auto-rehabilitation apprise avec le rééducateur\n- **Semaine 1** : immobilisation poignet-pouce\n- **Semaine 2** : libération du poignet\n- **Semaine 3** : après avis du chirurgien, ablation complète de l'orthosis\n\n### 3 à 8 semaines — rehabilitation spécialisée\n\n- Mobilisations douces et renforcement progressif des muscles du pouce\n- Travail cicatrice (massage)\n- Reprise fonctionnelle progressive non douloureuse\n\n### À partir de 8 semaines\n\n- Reprise des activités ordinaires selon les progrès\n\n### Après 12 semaines\n\n- Reprise totale des activités (grips de force, activités sportives et manuelles)\n\n## Résultats attendus\n\n- Amélioration graduelle de 3 à 6 mois selon le geste chirurgical et le terrain\n- Jusqu'à la sensation de \"pouce oublié\" (réintégration complète de la fonction du pouce)\n\n## Invariants de qualité (post-op)\n\n- Respect de la douleur-guide\n- Travail en chaîne : mobilité – stabilité – geste utile\n- Coordination chirurgien ↔ kiné (validation des étapes)",
    "published": true,
    "reviewed": false
  },
  {
    "slug": "rhizarthrose-et-musicien",
    "poleSlug": "kinesitherapie",
    "title": "La trapeziometacarpal osteoarthritis et le Musicien",
    "description": "Enjeux spécifiques de la trapeziometacarpal osteoarthritis pour les musiciens : contraintes, orthosiss fonctionnelles et solutions chirurgicales.",
    "image": "https://prevention-sante-arthrose-main.fr/cdn/shop/articles/ChatGPT_Image_24_oct._2025_a_13_54_18_42810976-0217-4644-9e12-611c881f798c.png",
    "date": "2025-10-24",
    "content": "La trapeziometacarpal osteoarthritis est une atteinte dégénérative de la base du pouce susceptible de limiter la fonction de la main et a fortiori celle du musicien.\n\nLa colonne du pouce joue un rôle fondamental dans la formation des arches de la main, et l'joint Trapézo-métacarpienne (TM) est responsable de l'orientation tridimensionnelle du pouce dans l'espace.\n\n## Quels sont les risques pour le musicien atteint de trapeziometacarpal osteoarthritis ?\n\n**La douleur** — instabilité douloureuse à la base du pouce lors de la prise de l'instrument, à la mobilisation des tissus périarticulaires. Cette douleur peut être d'apparition spontanée ou provoquée et très variable en intensité.\n\n**La raideur** — peut s'installer insidieusement. Au stade ultime elle peut évoluer vers la fusion articulaire de l'joint TM. La raideur débute souvent par une limitation de l'opposition ou une fermeture de la 1ère commissure, entravant la mobilité du pouce en opposition ou la réalisation d'écarts.\n\n**La perte de force** — due en premier lieu à la douleur, puis à une amyotrophie de non utilisation. Ceci va se traduire par une diminution progressive de la force d'appui sur la corde ou la touche.\n\n## Les orthosiss fonctionnelles pour les musiciens\n\nIl est possible de réaliser des orthosiss fonctionnelles compatibles avec la pratique instrumentale. Elles permettent de :\n- Limiter les contraintes et la douleur\n- Stabiliser l'joint\n- Améliorer le comportement musculaire du pouce et son placement\n\nLes techniques de \"taping\" spécifique à la trapeziometacarpal osteoarthritis vont aider le musicien pour un concert ou un évènement, avec une efficacité de quelques heures.\n\n## rehabilitation et auto-rehabilitation\n\nLes principes de rehabilitation reposent sur :\n\n- Maintien de l'ouverture de la 1ère commissure\n- Décompression articulaire\n- Renforcement statique des muscles stabilisateurs\n- Éducation à la prise de l'instrument\n- Alternance des rythmes de serrage-relâchement\n- Mise en place d'aides techniques\n- Économie articulaire\n- Développer la mobilité du pouce dans les prises plutôt que l'appui statique longtemps maintenu\n\n**Conseils pratiques :** s'échauffer avant de jouer, traction et chaleur pour soulager, port d'orthosiss nocturnes systématiques, et fonctionnelles si possible, auto-rehabilitation, étude du geste, placement, mobilité et relâchement du pouce.\n\n## La chirurgie de la trapeziometacarpal osteoarthritis : une chance pour les musiciens\n\nFruit de plusieurs décennies d'expérimentation des chirurgiens français, les dernières générations de prosthesiss trapézo-métacarpiennes offrent aux musiciens atteints de trapeziometacarpal osteoarthritis sévère la possibilité de retrouver un pouce indolore, solide et performant en 2 ou 3 mois.\n\nL'expérience du chirurgien de la main est un atout majeur du résultat. L'intervention est aujourd'hui une alternative de qualité plutôt que l'arrêt de l'instrument.",
    "published": true,
    "reviewed": false
  }
];

export const medicalDisclaimer = "Cette application ne fournit aucun conseil médical, diagnostic ou traitement.\n\nLes informations présentées dans l'application, sur ses pages, dans le blog, les vidéos ou tout autre contenu associé sont fournies à titre informatif et éducatif uniquement.\n\nElles ne doivent jamais être utilisées comme substitut à un avis professionnel d'un médecin, à un diagnostic médical, ou à un traitement prescrit par un professionnel de santé qualifié.\n\nSi vous pensez avoir un problème de santé, une douleur inhabituelle, un symptôme inquiétant, ou si vous envisagez de modifier votre traitement : consultez immédiatement un professionnel de santé qualifié.";

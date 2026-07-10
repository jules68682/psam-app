import React, { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, StyleSheet, LayoutAnimation,
  Platform, UIManager, Linking, Image,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../context/LanguageContext';
import { t } from '../lib/translations';

// Active l'animation d'accordéon sur Android.
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// ── Images des sections (assets/images/thermalisme) ──────────────────────────────
// Les require() doivent être statiques : on les regroupe et on référence par clé.
const IMAGES = {
  piscine: require('../assets/images/thermalisme/piscine.jpg'),
  pelotherapie: require('../assets/images/thermalisme/pelotherapie.jpg'),
  etuveLocale: require('../assets/images/thermalisme/etuve-locale.jpg'),
  thermesChristus: require('../assets/images/thermalisme/thermes-christus.jpg'),
  hotelDuLac: require('../assets/images/thermalisme/hotel-du-lac.jpg'),
  residenceRegina: require('../assets/images/thermalisme/residence-regina.jpg'),
} as const;

type ImageKey = keyof typeof IMAGES;

// Ratio réel (largeur/hauteur) de chaque asset local, résolu au chargement.
// Permet un aspectRatio dynamique : chaque photo garde ses proportions exactes,
// s'affiche en entier (portrait ou paysage) sans recadrage ni déformation.
const DEFAULT_RATIO = 3 / 2;
const RATIOS = Object.fromEntries(
  (Object.keys(IMAGES) as ImageKey[]).map(key => {
    const asset = Image.resolveAssetSource(IMAGES[key]);
    const ratio = asset && asset.height ? asset.width / asset.height : DEFAULT_RATIO;
    return [key, ratio];
  }),
) as Record<ImageKey, number>;

// ── Modèle de contenu ───────────────────────────────────────────────────────────
// Chaque section est composée de blocs typés rendus dans l'ordre.
type Block =
  | { kind: 'para'; lead?: string; text: string }
  | { kind: 'bullets'; items: string[] }
  | { kind: 'steps'; items: string[] }
  | { kind: 'image'; src: ImageKey; caption?: string }
  | { kind: 'link'; label: string; url: string }
  | { kind: 'links'; items: { label: string; url: string }[] }
  | { kind: 'button'; label: string; url: string };

type Section = {
  id: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  title: string;
  blocks: Block[];
};

// ── Données des 10 sous-sections (source : contenu-thermalisme.md) ───────────────
const SECTIONS: Section[] = [
  {
    id: 'definition',
    icon: 'info-outline',
    title: "Qu'est-ce que le thermalisme ?",
    blocks: [
      { kind: 'para', text: "Le thermalisme est une pratique thérapeutique qui consiste à utiliser l'eau thermale et ses dérivés pour traiter, soulager ou prévenir certaines pathologies, dans un cadre médical et encadré." },
      { kind: 'para', text: "Respectueuse de l'organisme et non invasive, la médecine thermale propose une démarche de santé qui ne se fonde pas uniquement sur le traitement des symptômes mais repose sur la prise en charge globale d'une pathologie, accordant à la prévention une place aussi importante qu'au soulagement. Elle a fait la preuve de son efficacité sur le long terme à travers de nombreuses études scientifiques." },
      { kind: 'image', src: 'piscine', caption: 'Bassin thermal' },
      { kind: 'para', text: "Lors d'une cure thermale, les équipes soignantes prodiguent des soins naturels et efficaces, à partir des eaux et boues thermales, ressources de la nature dont les bienfaits sont reconnus par l'Académie de Médecine." },
      { kind: 'para', text: "Pour que la cure thermale soit conventionnée et donc prise en charge par les organismes sociaux, elle doit être prescrite par un médecin et durer 18 jours." },
    ],
  },
  {
    id: 'arthrose',
    icon: 'pan-tool',
    title: 'Thermalisme et arthrose de la main',
    blocks: [
      { kind: 'para', text: "L'arthrose touche aujourd'hui près de 10 millions de Français et constitue l'une des premières causes de douleur chronique et de perte d'autonomie. Parmi ses formes les plus invalidantes, l'arthrose des mains touche entre 35 et 45 % des cas selon l'Inserm. Elle impacte fortement les gestes du quotidien et la qualité de vie." },
      { kind: 'para', text: "Handicapante, douloureuse et déformante, l'arthrose des mains est l'une des localisations les plus communes de l'arthrose, surtout chez les femmes." },
      { kind: 'para', text: "De nombreux soins thermaux apaisent les douleurs, réduisent les inflammations et redonnent souplesse et mobilité pour préserver la fonction de la main." },
    ],
  },
  {
    id: 'bienfaits',
    icon: 'schedule',
    title: 'Bienfaits, durée et fréquence des cures',
    blocks: [
      { kind: 'para', text: "Une cure thermale se déroule sur 18 jours consécutifs de soins (pas de soins le dimanche). Les bénéfices peuvent se manifester pendant plusieurs mois après la cure." },
      { kind: 'para', text: 'Les principaux effets observés :' },
      { kind: 'bullets', items: [
        'Diminution des douleurs chroniques',
        'Amélioration de la souplesse articulaire',
        'Reprise progressive des gestes du quotidien',
        'Effet durable sur le bien-être général',
      ] },
      { kind: 'para', text: "Il est généralement recommandé de renouveler la cure une fois par an pour optimiser les résultats. Les bénéfices d'une cure thermale peuvent se faire ressentir jusqu'à 9 mois après la cure, dès la 3e cure effectuée." },
    ],
  },
  {
    id: 'soins',
    icon: 'spa',
    title: 'Les programmes de soins thermaux',
    blocks: [
      { kind: 'para', text: "La cure thermale orientation Rhumatologie propose 72 soins sur 18 jours, adaptés à la pathologie à traiter. Dans le cas d'une arthrose de la main, les soins thermaux les plus prescrits sont :" },
      { kind: 'para', lead: 'Pélothérapie (15 min) :', text: "application de boue thermale sur les articulations désignées dans la prescription médicale (à une température entre 41 et 44 °C). Cette boue, appelée péloïde de Dax, est issue d'un mélange unique de limon de l'Adour, d'eau thermale et de composés biologiques, préparé selon un processus rigoureux. Effets antalgiques et anti-inflammatoires." },
      { kind: 'image', src: 'pelotherapie', caption: 'Pélothérapie' },
      { kind: 'para', lead: 'Douche térébenthinée (3 min) :', text: "projection d'un mélange d'eau thermale et de composants issus du pin des Landes (Dax Terpin), pulvérisé via de micro-jets sur le corps à une température entre 40 et 44 °C. Antalgique et anti-inflammatoire." },
      { kind: 'para', lead: 'Étuve locale (10 min) :', text: "bain local de vapeur d'eau thermale entre 40 et 46 °C pour les mains ou les pieds. Action antalgique et amélioration de la mobilité." },
      { kind: 'image', src: 'etuveLocale', caption: 'Étuve locale' },
      { kind: 'para', lead: 'Douche sous-marine (10 min) :', text: "l'agent thermal effectue un massage des zones douloureuses à l'aide d'un jet, le patient étant immergé dans une baignoire. Antalgique et décontractant." },
    ],
  },
  {
    id: 'dax',
    icon: 'place',
    title: 'Dax, une station spécialisée',
    blocks: [
      { kind: 'para', text: "Les 6 établissements Thermes Adour, à Dax et Saint-Paul-lès-Dax, sont reconnus pour leur expertise dans la prise en charge des pathologies rhumatologiques." },
      { kind: 'para', text: 'Ils proposent :' },
      { kind: 'bullets', items: [
        'Un encadrement médical spécialisé',
        'Des infrastructures modernes',
        'Des programmes adaptés aux douleurs chroniques et aux troubles articulaires',
        'Un accompagnement global des patients',
        "Des formules d'hébergement intégrées (de l'appartement à l'hôtel trois étoiles en passant par le camping)",
      ] },
      { kind: 'para', text: 'Les stations thermales de Dax sont des références nationales en rhumatologie.' },
      { kind: 'image', src: 'thermesChristus', caption: 'Les Thermes de Christus' },
      { kind: 'image', src: 'hotelDuLac', caption: 'Hôtel du Lac, Saint-Paul-lès-Dax' },
      { kind: 'link', label: 'Présentation détaillée des centres, soins et parcours proposés', url: 'https://www.thermes-dax.com/' },
    ],
  },
  {
    id: 'preparer',
    icon: 'checklist',
    title: 'Préparer sa cure',
    blocks: [
      { kind: 'para', text: "La cure thermale est un séjour qui nécessite une certaine préparation avant le départ. Que vous partiez pour la première fois ou que vous prépariez votre prochaine cure, voici les étapes préparatoires." },
      { kind: 'steps', items: [
        "Votre médecin traitant vous prescrit une cure thermale. Avec lui, remplissez votre demande de prise en charge administrative, fournie par votre caisse d'affiliation (votre médecin indique le nom de la station — Dax ou Saint-Paul-lès-Dax — ainsi que les orientations prescrites : rhumatologie, phlébologie). Complétez les rubriques qui vous concernent, sans oublier la rubrique Ressources, qui permettra d'étudier vos droits éventuels à des forfaits de déplacement et d'hébergement. La déclaration de ressources concerne l'année civile précédant la prescription. Si vos ressources dépassent 14 664,38 €, pas de remboursement des frais de transport et d'hébergement ; sinon, remplissez le questionnaire et joignez les justificatifs.",
        "Vous demandez l'accord à votre Caisse Primaire d'Assurance Maladie. Adressez le formulaire à votre CPAM pour accord. L'accord est valable pour l'année civile. Donné en octobre ou novembre, il reste valable jusqu'à la fin du 1er trimestre de l'année suivante ; donné en décembre, il reste valable toute l'année suivante.",
        "Vous préparez votre séjour avec Thermes Adour. Choisissez votre formule d'hébergement et réservez simultanément votre cure, avec possibilité d'assurance annulation. Septembre et octobre étant les plus fréquentés, privilégiez si possible le printemps ou l'été.",
        "Vous prenez rendez-vous avec un médecin thermal pour votre jour d'arrivée. Il sera votre interlocuteur médical privilégié et établira la prescription appropriée. Munissez-vous de votre dossier médical et de vos radiographies.",
        "Vous choisissez un mode de transport : voiture (autoroute A63, sortie 12), train (ligne TGV depuis Paris), avion (aéroport de Biarritz).",
        "Vous rassemblez les documents nécessaires : accord de prise en charge, dossier médical, réservation, contrat d'assurance annulation le cas échéant, coordonnées de votre médecin thermal.",
        "Vous préparez votre valise : 1 ou 2 maillots de bain, 1 bonnet de bain, une paire de sandales de piscine en plastique, une tenue confortable, des chaussures de marche, un jeton en fer ou une pièce de 1 € pour le vestiaire. Peignoirs et serviettes sont fournis durant la cure.",
        "À votre arrivée : prenez possession de votre hébergement, rendez-vous chez votre médecin thermal pour l'ordonnance thermale, déposez les ordonnances et originaux de prise en charge à l'accueil. Vous serez informé de la planification de vos soins, et un SMS ou e-mail vous précisera l'heure du premier soin.",
      ] },
      { kind: 'image', src: 'residenceRegina', caption: "Résidence Régina, Dax — une formule d'hébergement en cure" },
    ],
  },
  {
    id: 'prise-charge',
    icon: 'receipt-long',
    title: 'Prise en charge et démarches',
    blocks: [
      { kind: 'para', text: 'La cure thermale est remboursée sous certaines conditions.' },
      { kind: 'para', lead: 'Conditions :', text: "seul un médecin peut prescrire une cure ; elle doit concerner une pathologie prise en charge (les établissements de Dax et Saint-Paul-lès-Dax sont spécialisés en Rhumatologie et Phlébologie) ; l'établissement doit être agréé et conventionné ; une seule cure par année civile pour une même affection (double orientation possible sur prescription) ; la prise en charge est valable pour l'année civile ; une cure dure 18 jours effectifs, sans remboursement en cas d'interruption sauf force majeure ou raison médicale." },
      { kind: 'para', lead: 'Frais médicaux :', text: "les 3 consultations médicales sont remboursées à 70 % sur la base du tarif conventionnel (en 2026 : 28 € par consultation pour une cure simple-orientation, 42 € pour une double-orientation ; reste à charge de 30 %, soit 8,40 € ou 12,60 € par consultation). Le forfait thermal est remboursé à 65 % sur la base d'un tarif forfaitaire conventionnel. Remettez le volet 2 du formulaire à l'établissement dès le début de la cure pour la dispense d'avance de frais. Un complément tarifaire encadré peut s'ajouter. Votre complémentaire santé peut éventuellement prendre en charge le ticket modérateur et ce complément." },
      { kind: 'para', lead: "Frais de transport et d'hébergement :", text: "hors prestations légales, ils dépendent de vos ressources. Sous condition de plafond, l'Assurance Maladie peut rembourser le transport à 65 % (base billet SNCF aller/retour 2e classe) et l'hébergement à 65 % sur la base d'un forfait de 150,01 € (soit 97,50 €). Conservez vos justificatifs et adressez le volet 3 du formulaire à votre caisse au retour." },
      { kind: 'para', lead: 'Frais restant à charge :', text: "ticket modérateur, frais complémentaires, soins de confort et complément tarifaire. Les bénéficiaires de la CSS ou de l'ACS ne se voient pas facturer le complément tarifaire." },
      { kind: 'para', text: "Source : ameli.fr. Il est conseillé d'anticiper sa réservation plusieurs mois à l'avance." },
      { kind: 'link', label: 'Réserver votre cure auprès des établissements Thermes Adour', url: 'https://www.thermes-dax.com/reservation-cures-soins/' },
    ],
  },
  {
    id: 'apres-cure',
    icon: 'self-improvement',
    title: 'Après la cure : prolonger les bienfaits',
    blocks: [
      { kind: 'para', text: "Les bénéfices d'une cure peuvent être prolongés grâce à :" },
      { kind: 'bullets', items: [
        'Un suivi médical régulier',
        'Des exercices adaptés pour la main',
        'Une activité physique douce',
        'Une bonne hygiène de vie',
      ] },
    ],
  },
  {
    id: 'reserver',
    icon: 'event-available',
    title: 'Je réserve ma cure',
    blocks: [
      { kind: 'para', text: "Il est conseillé d'anticiper sa réservation plusieurs mois à l'avance. La réservation se fait directement auprès des établissements Thermes Adour." },
      { kind: 'button', label: 'Réserver ma cure', url: 'https://www.thermes-dax.com/reservation-cures-soins/' },
    ],
  },
  {
    id: 'liens',
    icon: 'link',
    title: 'Liens utiles',
    blocks: [
      { kind: 'para', text: 'Retrouvez ci-dessous les ressources utiles.' },
      { kind: 'links', items: [
        { label: 'Établissements thermaux de Dax', url: 'https://www.thermes-dax.com/' },
        { label: 'Aides et remboursements', url: 'https://www.thermes-dax.com/dossier/aides-remboursement/' },
        { label: 'Visites virtuelles des établissements', url: 'https://www.thermes-dax.com/dossiers-pratiques/visitez-nos-etablissements/' },
      ] },
    ],
  },
];

// Ouvre le lien dans le navigateur externe.
const openLink = (url: string) => {
  if (url) Linking.openURL(url);
};

// ── Image de section ─────────────────────────────────────────────────────────────
// aspectRatio piloté par les dimensions réelles : initialisé depuis
// resolveAssetSource, puis corrigé via onLoad (dimensions runtime fiables).
// Largeur 100 %, hauteur proportionnelle, resizeMode contain => aucune troncature.
function FigureImage({ src, caption }: { src: ImageKey; caption?: string }) {
  const [ratio, setRatio] = useState<number>(RATIOS[src] ?? DEFAULT_RATIO);

  return (
    <View style={s.figure}>
      <Image
        source={IMAGES[src]}
        style={[s.figureImg, { aspectRatio: ratio }]}
        resizeMode="contain"
        onLoad={e => {
          const source = e.nativeEvent?.source;
          if (source?.width && source?.height) {
            setRatio(source.width / source.height);
          }
        }}
        accessibilityIgnoresInvertColors
        accessibilityLabel={caption}
      />
      {caption ? <Text style={s.figureCaption}>{caption}</Text> : null}
    </View>
  );
}

// ── Rendu d'un bloc de contenu ──────────────────────────────────────────────────
function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case 'para':
      return (
        <Text style={s.cardBodyText}>
          {block.lead ? <Text style={s.lead}>{block.lead} </Text> : null}
          {block.text}
        </Text>
      );

    case 'bullets':
      return (
        <View style={s.list}>
          {block.items.map((item, i) => (
            <View key={i} style={s.bulletRow}>
              <View style={s.bulletDot} />
              <Text style={s.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      );

    case 'steps':
      return (
        <View style={s.list}>
          {block.items.map((item, i) => (
            <View key={i} style={s.stepRow}>
              <View style={s.stepNum}>
                <Text style={s.stepNumText}>{i + 1}</Text>
              </View>
              <Text style={s.stepText}>{item}</Text>
            </View>
          ))}
        </View>
      );

    case 'image':
      return <FigureImage src={block.src} caption={block.caption} />;

    case 'link':
      return (
        <TouchableOpacity
          style={s.linkRow}
          activeOpacity={0.7}
          onPress={() => openLink(block.url)}
          accessibilityRole="link"
          accessibilityLabel={block.label}
        >
          <MaterialIcons name="open-in-new" size={16} color={COLORS.primary} />
          <Text style={s.linkText}>{block.label}</Text>
        </TouchableOpacity>
      );

    case 'links':
      return (
        <>
          {block.items.map(l => (
            <TouchableOpacity
              key={l.label}
              style={s.linkRow}
              activeOpacity={0.7}
              onPress={() => openLink(l.url)}
              accessibilityRole="link"
              accessibilityLabel={l.label}
            >
              <MaterialIcons name="open-in-new" size={16} color={COLORS.primary} />
              <Text style={s.linkText}>{l.label}</Text>
            </TouchableOpacity>
          ))}
        </>
      );

    case 'button':
      return (
        <TouchableOpacity
          style={s.primaryBtn}
          activeOpacity={0.85}
          onPress={() => openLink(block.url)}
          accessibilityRole="button"
          accessibilityLabel={block.label}
        >
          <MaterialIcons name="event-available" size={18} color={COLORS.white} />
          <Text style={s.primaryBtnText}>{block.label}</Text>
        </TouchableOpacity>
      );
  }
}

export default function ThermalismeScreen() {
  const { lang } = useLang();
  const insets = useSafeAreaInsets();
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <SafeAreaView style={s.safe} edges={['left', 'right']}>
      {/* ── Header avec bouton retour ─────────────────────────────── */}
      <View style={[s.header, { paddingTop: insets.top + 10 }]}>
        <TouchableOpacity
          style={s.iconBtn}
          activeOpacity={0.7}
          onPress={() => router.back()}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel={t(lang, 'retour')}
        >
          <Text style={s.backIcon}>←</Text>
        </TouchableOpacity>
        <Text style={s.headerTitle} numberOfLines={1}>Thermalisme</Text>
        <View style={s.iconBtn} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>
        {/* ── Bannière (Thermes Adour) ────────────────────────────── */}
        <Image
          source={require('../assets/images/thermalisme-paysage.jpg')}
          style={s.banner}
          resizeMode="cover"
          accessibilityIgnoresInvertColors
        />

        {/* ── Hero / intro ────────────────────────────────────────── */}
        <View style={s.hero}>
          <Text style={s.eyebrowLight}>CŒUR THERMAL</Text>
          <Text style={s.heroTitle}>Thermalisme & arthrose de la main</Text>
          <Text style={s.heroIntro}>
            Une démarche de santé naturelle et encadrée pour soulager l'arthrose de
            la main, de la compréhension des cures jusqu'à la réservation de votre séjour.
          </Text>
        </View>

        {/* ── Accordéon des 10 sous-sections ──────────────────────── */}
        <View style={s.section}>
          {SECTIONS.map(sec => {
            const isOpen = openId === sec.id;
            return (
              <View key={sec.id} style={s.card}>
                <TouchableOpacity
                  style={s.cardHead}
                  activeOpacity={0.8}
                  onPress={() => toggle(sec.id)}
                  accessibilityRole="button"
                  accessibilityState={{ expanded: isOpen }}
                  accessibilityLabel={sec.title}
                >
                  <View style={s.cardIconWrap}>
                    <MaterialIcons name={sec.icon} size={22} color={COLORS.primary} />
                  </View>
                  <Text style={s.cardTitle}>{sec.title}</Text>
                  <MaterialIcons
                    name={isOpen ? 'expand-less' : 'expand-more'}
                    size={26}
                    color={COLORS.sage}
                  />
                </TouchableOpacity>

                {isOpen && (
                  <View style={s.cardBody}>
                    {sec.blocks.map((block, i) => (
                      <View key={i} style={i > 0 ? s.blockGap : undefined}>
                        <BlockView block={block} />
                      </View>
                    ))}
                  </View>
                )}
              </View>
            );
          })}
        </View>

        {/* ── Mention partenaire ──────────────────────────────────── */}
        <View style={s.partnerWrap}>
          <Text style={s.partnerText}>En partenariat avec les Thermes Adour</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },

  // Header (cohérent avec qui-sommes-nous)
  header: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white,
    paddingHorizontal: 12, paddingBottom: 10,
    borderBottomWidth: 1, borderBottomColor: '#EEEBE4', gap: 8, zIndex: 10, elevation: 4,
  },
  iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 26, color: COLORS.primary, fontWeight: '700' },
  headerTitle: { flex: 1, fontSize: 16, fontFamily: FONTS.title, fontWeight: '600', color: COLORS.text, textAlign: 'center' },

  scroll: { paddingBottom: 40 },

  // Bannière
  banner: { width: '100%', height: 200 },

  // Hero
  hero: { backgroundColor: COLORS.primary, paddingHorizontal: 24, paddingVertical: 36 },
  eyebrowLight: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.sage, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  heroTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 34, marginBottom: 14 },
  heroIntro: { fontSize: 15, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.85)', lineHeight: 23 },

  // Section conteneur
  section: { paddingHorizontal: 16, paddingVertical: 24 },

  // Cards accordéon
  card: {
    backgroundColor: COLORS.white, borderRadius: 16, marginBottom: 12, overflow: 'hidden',
    shadowColor: '#1F3D2B', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, shadowRadius: 12, elevation: 3,
  },
  cardHead: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16 },
  cardIconWrap: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.cream,
    alignItems: 'center', justifyContent: 'center',
  },
  cardTitle: { flex: 1, fontSize: 15, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, lineHeight: 20 },
  cardBody: { paddingHorizontal: 16, paddingBottom: 16, paddingTop: 2 },
  cardBodyText: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },
  lead: { fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  blockGap: { marginTop: 12 },

  // Listes à puces
  list: { marginTop: 2 },
  bulletRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 10, marginBottom: 8 },
  bulletDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: COLORS.primary, marginTop: 8 },
  bulletText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },

  // Étapes numérotées
  stepRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 12, marginBottom: 14 },
  stepNum: {
    width: 26, height: 26, borderRadius: 13, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center', marginTop: 1,
  },
  stepNumText: { fontSize: 13, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white },
  stepText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },

  // Figures / images de section
  figure: { marginTop: 4 },
  figureImg: { width: '100%', borderRadius: 12, backgroundColor: COLORS.cream },
  figureCaption: {
    fontSize: 12, fontFamily: FONTS.body, fontStyle: 'italic',
    color: COLORS.textLight, marginTop: 6, textAlign: 'center',
  },

  // Bouton principal vert PSAM
  primaryBtn: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8,
    backgroundColor: COLORS.primary, borderRadius: 12, paddingVertical: 13, paddingHorizontal: 18,
    marginTop: 4,
  },
  primaryBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },

  // Liens
  linkRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginTop: 2 },
  linkText: { flex: 1, fontSize: 13, fontFamily: FONTS.body, fontWeight: '600', color: COLORS.primary, lineHeight: 18 },

  // Partenaire
  partnerWrap: { alignItems: 'center', paddingHorizontal: 24, paddingBottom: 12 },
  partnerText: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.textLight, fontStyle: 'italic' },
});

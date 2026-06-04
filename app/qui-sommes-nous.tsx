import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Image,
  StyleSheet,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../context/LanguageContext';
import { t } from '../lib/translations';

const GROUP_PHOTO = require('../assets/images/equipe/photo-equipe.webp');

// Membres de l'équipe — contenu repris fidèlement du site PSAM.
// Noms / rôles / bios / citations restent dans leur langue source (français).
const TEAM = [
  {
    id: 'joel-rezzouk',
    name: 'Dr Joël REZZOUK',
    role: 'Président du comité scientifique',
    subtitle: 'Chirurgien de la Main — Fondateur de l\'Unité Santé Main Aquitaine',
    bio: 'Chirurgien de la main et du poignet depuis plus de 20 ans. Fondateur de l\'Unité Santé Main Aquitaine et spécialisé dans l\'arthrose et la rhizarthrose.',
    quote: "Parce que trop de patients se sentent démunis face à l'arthrose de la main. PSAM, c'est un engagement : informer, expliquer et donner à chacun des solutions pour ralentir la maladie. Parce que mieux comprendre, c'est déjà mieux vivre !",
    website: 'https://usma-sante.fr',
    image: require('../assets/images/equipe/joel-rezzouk.jpg'),
    initials: 'JR',
  },
  {
    id: 'corinne-moulet',
    name: 'Corinne MOULET',
    role: 'Vice-Présidente',
    subtitle: 'Nutritionniste spécialisée en nutrition anti-arthrose & Hypnothérapeute',
    bio: 'Nutritionniste spécialisée en nutrition anti-arthrose et hypnothérapeute. Elle anime des ateliers Nutri Arthrose pour aider chacun à adapter son alimentation et mieux vivre avec l\'arthrose.',
    quote: "Ce que vous mettez dans votre assiette joue un rôle clé ! Certains aliments favorisent l'inflammation, d'autres la réduisent. Mieux manger, c'est aider vos articulations à mieux vieillir.",
    website: null,
    image: require('../assets/images/equipe/corinne-moulet.png'),
    initials: 'CM',
  },
  {
    id: 'stephanie-lasserre',
    name: 'Stéphanie LASSERRE',
    role: 'Directrice de Projet & Directrice administrative',
    subtitle: 'Responsable des partenariats et de la communication',
    bio: "Au sein de PSAM, Stéphanie est le point de contact central pour tous nos partenaires. En tant que responsable des partenariats, directrice de projet, chargée de communication et gestionnaire administrative, elle assure la liaison entre l'association et ses partenaires, institutions et interlocuteurs clés.",
    quote: null,
    website: null,
    image: null,
    initials: 'SL',
  },
] as const;

const EXPERTS = [
  { id: 'joel-rezzouk', name: 'Dr Joël REZZOUK', role: 'Chirurgien de la Main', initials: 'JR', website: 'https://usma-sante.fr', image: require('../assets/images/equipe/joel-rezzouk.jpg') },
  { id: 'valerie-madert', name: 'Valérie MADERT', role: 'Ergothérapeute, Orthésiste', initials: 'VM', website: 'https://orthese-main.d-web64.com', image: require('../assets/images/equipe/valerie-madert.png') },
  { id: 'corinne-moulet', name: 'Corinne MOULET', role: 'Nutritionniste, Hypnothérapeute', initials: 'CM', website: null, image: require('../assets/images/equipe/corinne-moulet.png') },
  { id: 'rosario-baladron', name: 'Rosario BALADRON', role: 'Kinésithérapeute de la Main', initials: 'RB', website: null, image: require('../assets/images/equipe/rosario-baladron.png') },
  { id: 'michel-boutan', name: 'Michel BOUTAN', role: 'Kinésithérapeute de la Main', initials: 'MB', website: null, image: require('../assets/images/equipe/michel-boutan.png') },
] as const;

export default function QuiSommesNousScreen() {
  const { lang } = useLang();
  const insets = useSafeAreaInsets();

  const openLink = (url: string) => WebBrowser.openBrowserAsync(url);

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
        <Text style={s.headerTitle} numberOfLines={1}>{t(lang, 'qsn_team_title')}</Text>
        <View style={s.iconBtn} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>
        {/* ── Hero ────────────────────────────────────────────────── */}
        <View style={s.hero}>
          <Text style={s.eyebrowLight}>{t(lang, 'qsn_eyebrow')}</Text>
          <Text style={s.heroTitle}>{t(lang, 'qsn_hero_title')}</Text>
          <Text style={s.heroIntro}>{t(lang, 'qsn_hero_intro')}</Text>
        </View>

        {/* ── Qui sommes-nous ─────────────────────────────────────── */}
        <View style={s.section}>
          <Text style={s.eyebrow}>{t(lang, 'qsn_team_eyebrow')}</Text>
          <Text style={s.sectionTitle}>{t(lang, 'qsn_team_title')}</Text>

          <Image source={GROUP_PHOTO} style={s.groupPhoto} resizeMode="cover" />

          {TEAM.map((m, i) => (
            <View key={m.id} style={[s.memberCard, i === TEAM.length - 1 && { marginBottom: 0 }]}>
              <View style={s.memberHead}>
                <Image source={m.image} style={s.memberAvatar} resizeMode="cover" />
                <View style={s.memberHeadText}>
                  <Text style={s.memberRole}>{m.role}</Text>
                  <Text style={s.memberName}>{m.name}</Text>
                  <Text style={s.memberSubtitle}>{m.subtitle}</Text>
                </View>
              </View>
              <Text style={s.memberBio}>{m.bio}</Text>
              {m.quote && <Text style={s.memberQuote}>“{m.quote}”</Text>}
              {m.website && (
                <TouchableOpacity activeOpacity={0.7} onPress={() => openLink(m.website!)}>
                  <Text style={s.link}>{m.website.replace('https://', '')} →</Text>
                </TouchableOpacity>
              )}
            </View>
          ))}
        </View>

        {/* ── Notre mission ───────────────────────────────────────── */}
        <View style={[s.section, s.sectionAlt]}>
          <Text style={s.eyebrow}>{t(lang, 'qsn_mission_eyebrow')}</Text>
          <Text style={s.sectionTitle}>{t(lang, 'qsn_mission_title')}</Text>
          <Text style={s.para}>{t(lang, 'qsn_mission_p1')}</Text>
          <Text style={s.para}>{t(lang, 'qsn_mission_p2')}</Text>
          <Text style={s.para}>{t(lang, 'qsn_mission_p3')}</Text>
        </View>

        {/* ── Les experts partenaires ─────────────────────────────── */}
        <View style={s.section}>
          <Text style={s.eyebrow}>{t(lang, 'qsn_experts_eyebrow')}</Text>
          <Text style={s.sectionTitle}>{t(lang, 'qsn_experts_title')}</Text>
          <Text style={s.para}>{t(lang, 'qsn_experts_intro')}</Text>

          {EXPERTS.map(e => (
            <View key={e.id} style={s.expertRow}>
              <Image source={e.image} style={s.expertAvatar} resizeMode="cover" />
              <View style={s.expertText}>
                <Text style={s.expertName}>{e.name}</Text>
                <Text style={s.expertRole}>{e.role}</Text>
                {e.website && (
                  <TouchableOpacity activeOpacity={0.7} onPress={() => openLink(e.website!)}>
                    <Text style={s.link}>{e.website.replace('https://', '')} →</Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* ── Nos valeurs ─────────────────────────────────────────── */}
        <View style={[s.section, s.sectionAlt, { marginBottom: 0 }]}>
          <Text style={s.eyebrow}>{t(lang, 'qsn_values_eyebrow')}</Text>
          <Text style={s.sectionTitle}>{t(lang, 'qsn_values_title')}</Text>

          {[1, 2, 3].map(n => (
            <View key={n} style={s.valueCard}>
              <Text style={s.valueTitle}>{t(lang, `qsn_value_${n}_title` as any)}</Text>
              <Text style={s.valueDesc}>{t(lang, `qsn_value_${n}_desc` as any)}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },

  header: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white,
    paddingHorizontal: 12, paddingBottom: 10,
    borderBottomWidth: 1, borderBottomColor: '#EEEBE4', gap: 8, zIndex: 10, elevation: 4,
  },
  iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 26, color: COLORS.primary, fontWeight: '700' },
  headerTitle: { flex: 1, fontSize: 16, fontFamily: FONTS.title, fontWeight: '600', color: COLORS.text, textAlign: 'center' },

  scroll: { paddingBottom: 48 },

  // Hero
  hero: { backgroundColor: COLORS.primary, paddingHorizontal: 24, paddingVertical: 36 },
  eyebrowLight: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.sage, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  heroTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 34, marginBottom: 14 },
  heroIntro: { fontSize: 15, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.85)', lineHeight: 23 },

  // Sections
  section: { paddingHorizontal: 24, paddingVertical: 32 },
  sectionAlt: { backgroundColor: COLORS.white },
  eyebrow: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.sage, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8 },
  sectionTitle: { fontSize: 22, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, marginBottom: 20, lineHeight: 28 },
  para: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 23, marginBottom: 12 },

  groupPhoto: { width: '100%', height: 200, borderRadius: 20, marginBottom: 28, backgroundColor: '#E5E1D8' },

  // Membres
  memberCard: {
    backgroundColor: COLORS.white, borderRadius: 20, padding: 18, marginBottom: 16,
    shadowColor: '#1F3D2B', shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08, shadowRadius: 12, elevation: 3,
  },
  memberHead: { flexDirection: 'row', alignItems: 'center', gap: 14, marginBottom: 14 },
  memberAvatar: { width: 72, height: 72, borderRadius: 36, backgroundColor: '#E5E1D8', borderWidth: 2, borderColor: COLORS.sage },
  memberHeadText: { flex: 1 },
  memberRole: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.sage, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 3 },
  memberName: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text },
  memberSubtitle: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.primary, marginTop: 3, lineHeight: 16 },
  memberBio: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },
  memberQuote: { fontSize: 14, fontFamily: FONTS.body, fontStyle: 'italic', color: COLORS.textLight, lineHeight: 21, marginTop: 12, paddingLeft: 14, borderLeftWidth: 2, borderLeftColor: COLORS.sage },
  link: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '600', color: COLORS.primary, marginTop: 10 },

  // Experts
  expertRow: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: COLORS.cream, borderRadius: 16, padding: 14, marginTop: 12,
  },
  expertAvatar: { width: 90, height: 90, borderRadius: 45, backgroundColor: '#E5E1D8', borderWidth: 2, borderColor: COLORS.sage },
  expertText: { flex: 1 },
  expertName: { fontSize: 15, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text },
  expertRole: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.sage, marginTop: 2 },

  // Valeurs
  valueCard: { backgroundColor: COLORS.cream, borderRadius: 16, padding: 18, marginTop: 12 },
  valueTitle: { fontSize: 17, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 6 },
  valueDesc: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },
});

import React, { useRef, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  ImageBackground, Image, Animated,
  Dimensions, StyleSheet, StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { FontAwesome } from '@expo/vector-icons';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';
import LanguageSelector from '../../components/LanguageSelector';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const EVENT_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80';

const INSTAGRAM_URL = 'https://www.instagram.com/prevention_sante_arthrose_main/';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61590419490328';
const INSTAGRAM_COLOR = '#E1306C';
const FACEBOOK_COLOR = '#1877F2';

const POLES_DATA = [
  { slug: 'nutrition', nameKey: 'home_pole_nutrition', accent: '#2E7D32', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&q=80' },
  { slug: 'hypnose', nameKey: 'home_pole_hypnose', accent: '#7B1FA2', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80' },
  { slug: 'kinesitherapie', nameKey: 'home_pole_kinesitherapie', accent: '#1565C0', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80' },
  { slug: 'ergotherapie-ortheses', nameKey: 'home_pole_ergotherapie', accent: '#F57F17', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=80' },
  { slug: 'chirurgie', nameKey: 'home_pole_chirurgie', accent: '#C62828', image: require('../../assets/images/dr-rezzouk-chirurgie.jpg') },
  { slug: 'beaute', nameKey: 'home_pole_beaute', accent: '#AD1457', image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&q=80' },
] as const;

export default function AccueilScreen() {
  const { lang } = useLang();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(40)).current;
  const scaleAnim = useRef(new Animated.Value(0.95)).current;
  const statsAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 800, useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
      ]),
      Animated.timing(statsAnim, { toValue: 1, duration: 600, useNativeDriver: true }),
    ]).start();
  }, [fadeAnim, slideAnim, scaleAnim, statsAnim]);

  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <StatusBar barStyle="light-content" />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>

        {/* ── BLOC 1 : HERO ─────────────────────────────────────────────── */}
        <ImageBackground
          source={require('../../assets/images/hero-main.png')}
          style={[s.hero, { height: SCREEN_WIDTH * 0.95 }]}
          resizeMode="cover"
        >
          <View style={s.heroLayer1} />
          <View style={s.heroLayer2} />
          <View style={s.heroContent}>
            <Animated.View style={{ opacity: fadeAnim, transform: [{ translateY: slideAnim }] }}>
              <View style={s.heroBadge}>
                <Text style={s.heroBadgeText}>{t(lang, 'assoc_badge')}</Text>
              </View>
              <Image
                source={require('../../assets/images/logo-psam.png')}
                style={s.heroLogo}
                resizeMode="contain"
              />
              <Text style={s.heroName}>{t(lang, 'hero_subtitle')}</Text>
              <View style={s.heroLine} />
              <Text style={s.heroTagline}>{t(lang, 'hero_tagline')}</Text>
            </Animated.View>
          </View>
          {/* Language selector overlay in hero top-right */}
          <View style={s.langWrap}>
            <LanguageSelector />
          </View>
        </ImageBackground>

        {/* ── BLOC 2 : STATS ANIMÉES ────────────────────────────────────── */}
        <Animated.View style={[s.statsWrapper, { opacity: statsAnim }]}>
          <View style={s.statsCard}>
            <Text style={s.statsLabel}>{t(lang, 'stats_title')}</Text>
            <View style={s.statsRow}>
              <View style={s.statCol}>
                <Text style={s.statNum}>{t(lang, 'stats_1_num')}</Text>
                <Text style={s.statDesc}>{t(lang, 'stats_1_label')}</Text>
              </View>
              <View style={s.statDivider} />
              <View style={s.statCol}>
                <Text style={s.statNum}>{t(lang, 'stats_2_num')}</Text>
                <Text style={s.statDesc}>{t(lang, 'stats_2_label')}</Text>
              </View>
              <View style={s.statDivider} />
              <View style={s.statCol}>
                <Text style={s.statNum}>{t(lang, 'stats_3_num')}</Text>
                <Text style={s.statDesc}>{t(lang, 'stats_3_label')}</Text>
              </View>
            </View>
          </View>
        </Animated.View>

        {/* ── BLOC 3 : LES PÔLES ───────────────────────────────────────── */}
        <View style={s.polesSection}>
          <View style={s.polesHeader}>
            <Text style={s.sectionTitle}>{t(lang, 'poles_title')}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/(tabs)/poles')}>
              <Text style={s.seeAll}>{t(lang, 'voir_tous')}</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={s.polesScroll}
          >
            {POLES_DATA.map(pole => (
              <TouchableOpacity
                key={pole.slug}
                style={s.poleCard}
                activeOpacity={0.85}
                onPress={() => router.push({ pathname: '/(tabs)/poles', params: { poleSlug: pole.slug } })}
              >
                <ImageBackground
                  source={typeof pole.image === 'string' ? { uri: pole.image } : pole.image}
                  style={s.poleCardBg}
                  resizeMode="cover"
                >
                  <View style={s.poleCardImageOverlay} />
                </ImageBackground>
                <View style={s.poleCardInfo}>
                  <View style={[s.poleAccentDot, { backgroundColor: pole.accent }]} />
                  <Text style={s.poleCardName} numberOfLines={1}>{t(lang, pole.nameKey)}</Text>
                  <Text style={s.poleCardSub}>{t(lang, 'poles_voir')}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* ── BLOC 4 : DÉCOUVRIR L'APP ──────────────────────────────────── */}
        <View style={s.discoverSection}>
          <View style={s.discoverHeader}>
            <Text style={s.discoverSectionTitle}>{t(lang, 'decouvrir')}</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={() => router.push('/(tabs)/poles')}>
              <Text style={s.discoverSeeAll}>{t(lang, 'tout_voir')}</Text>
            </TouchableOpacity>
          </View>

          {/* Grande card — Les pôles */}
          <TouchableOpacity
            style={s.discoverLargeCard}
            activeOpacity={0.85}
            onPress={() => router.push('/(tabs)/poles')}
          >
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80' }}
              style={StyleSheet.absoluteFillObject}
              resizeMode="cover"
            />
            <View style={s.discoverLargeOverlay}>
              <View style={s.discoverBadge}>
                <Text style={s.discoverBadgeText}>{t(lang, 'discover_badge')}</Text>
              </View>
              <Text style={s.discoverLargeTitle}>
                {t(lang, 'discover_poles_list')}
              </Text>
            </View>
          </TouchableOpacity>

          {/* 2 cards moyennes */}
          <View style={s.discoverMedRow}>
            <TouchableOpacity
              style={s.discoverMedCard}
              activeOpacity={0.85}
              onPress={() => router.push('/(tabs)/videotheque')}
            >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80' }}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
              />
              <View style={s.discoverMedOverlay}>
                <Text style={s.discoverSmallLabel}>{t(lang, 'bento_videos_label')}</Text>
                <Text style={s.discoverMedTitle}>{t(lang, 'bento_videos_title')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={s.discoverMedCard}
              activeOpacity={0.85}
              onPress={() => router.push('/(tabs)/evenements')}
            >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80' }}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
              />
              <View style={s.discoverMedOverlay}>
                <Text style={s.discoverSmallLabel}>{t(lang, 'bento_events_label')}</Text>
                <Text style={s.discoverMedTitle}>{t(lang, 'bento_events_title')}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* 2 cards petites */}
          <View style={s.discoverSmallRow}>
            <TouchableOpacity
              style={s.discoverSmallCard}
              activeOpacity={0.85}
              onPress={() => router.push('/(tabs)/missions')}
            >
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' }}
                style={StyleSheet.absoluteFillObject}
                resizeMode="cover"
              />
              <View style={s.discoverSmallOverlay}>
                <Text style={s.discoverSmallLabel}>{t(lang, 'bento_missions_label')}</Text>
                <Text style={s.discoverSmallTitle}>{t(lang, 'bento_missions_title')}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={s.discoverFavCard}
              activeOpacity={0.85}
              onPress={() => router.push('/(tabs)/favoris')}
            >
              <ImageBackground
                source={{ uri: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80' }}
                style={StyleSheet.absoluteFillObject}
                imageStyle={{ borderRadius: 20 }}
                resizeMode="cover"
              >
                <View style={s.discoverFavScrim} />
                <View style={s.discoverFavContent}>
                  <View style={s.discoverFavIconWrap}>
                    <Text style={s.discoverFavIcon}>♡</Text>
                  </View>
                  <View>
                    <Text style={s.discoverFavLabel}>{t(lang, 'bento_fav_label')}</Text>
                    <Text style={s.discoverFavTitle}>{t(lang, 'bento_fav_title')}</Text>
                  </View>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── BLOC 5 : ÉVÉNEMENT À LA UNE ─────────────────────────────── */}
        <View style={s.eventWrapper}>
          <ImageBackground
            source={{ uri: EVENT_IMAGE }}
            style={s.eventBg}
            resizeMode="cover"
          >
            <View style={s.eventOverlay}>
              <View>
                <View style={s.eventBadge}>
                  <Text style={s.eventBadgeText}>{t(lang, 'prochainement')}</Text>
                </View>
                <Text style={s.eventTitle}>{t(lang, 'main_etoiles')}</Text>
                <Text style={s.eventDetails}>{t(lang, 'home_event_date')}</Text>
              </View>
              <View style={s.eventBottom}>
                <TouchableOpacity
                  style={s.eventBtn}
                  activeOpacity={0.85}
                  onPress={() => router.push('/(tabs)/evenements')}
                >
                  <Text style={s.eventBtnText}>{t(lang, 'home_event_cta')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* ── BLOC 6 : FOOTER ASSOCIATION (cliquable → Qui sommes-nous) ── */}
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => router.push('/qui-sommes-nous')}
          accessibilityRole="button"
          accessibilityLabel={t(lang, 'qsn_team_title')}
        >
          <ImageBackground
            source={require('../../assets/images/hero-main.png')}
            style={s.footer}
            imageStyle={s.footerImage}
            resizeMode="cover"
          >
            <View style={s.footerOverlay} />
            <Image
              source={require('../../assets/images/logo-psam.png')}
              style={s.footerLogo}
              resizeMode="contain"
            />
            <Text style={s.footerDesc}>{t(lang, 'footer_desc')}</Text>
            <View style={s.footerRow}>
              <View style={s.footerContact}>
                <Text style={s.footerContactText}>
                  prevention.sante.arthrose.main{'\n'}@gmail.com
                </Text>
              </View>
              <View style={s.footerContact}>
                <Text style={s.footerPhone}>06 78 28 82 23</Text>
              </View>
            </View>

            {/* Réseaux sociaux */}
            <View style={s.socialRow}>
              <TouchableOpacity
                style={s.socialBtn}
                activeOpacity={0.7}
                onPress={() => WebBrowser.openBrowserAsync(INSTAGRAM_URL)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                accessibilityRole="link"
                accessibilityLabel={t(lang, 'social_instagram')}
              >
                <FontAwesome name="instagram" size={32} color={INSTAGRAM_COLOR} />
              </TouchableOpacity>
              <TouchableOpacity
                style={s.socialBtn}
                activeOpacity={0.7}
                onPress={() => WebBrowser.openBrowserAsync(FACEBOOK_URL)}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                accessibilityRole="link"
                accessibilityLabel={t(lang, 'social_facebook')}
              >
                <FontAwesome name="facebook-square" size={32} color={FACEBOOK_COLOR} />
              </TouchableOpacity>
            </View>

            {/* Indicateur « En savoir plus » */}
            <View style={s.footerMore}>
              <Text style={s.footerMoreText}>{t(lang, 'footer_en_savoir_plus')} →</Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  scroll: { paddingBottom: 0 },

  // ── Hero
  hero: { width: '100%' },
  heroLayer1: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,30,18,0.45)' },
  heroLayer2: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 200, backgroundColor: 'rgba(10,30,18,0.45)' },
  heroContent: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end', padding: 28, paddingBottom: 32 },
  heroBadge: {
    alignSelf: 'flex-start', marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20,
    paddingHorizontal: 14, paddingVertical: 7,
    borderWidth: 1, borderColor: 'rgba(255,255,255,0.3)',
  },
  heroBadgeText: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, letterSpacing: 2 },
  heroLogo: { width: 180, height: 60, marginBottom: 8 },
  heroName: { fontSize: 14, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.85)', letterSpacing: 0.5 },
  heroLine: { height: 1, width: 60, backgroundColor: 'rgba(255,255,255,0.25)', marginVertical: 16 },
  heroTagline: { fontSize: 12, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5 },
  langWrap: { position: 'absolute', top: 16, right: 16 },

  // ── Stats
  statsWrapper: { margin: 16, marginTop: -24 },
  statsCard: {
    backgroundColor: COLORS.white, borderRadius: 24, padding: 20,
    shadowColor: '#1F3D2B', shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15, shadowRadius: 20, elevation: 10,
  },
  statsLabel: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, letterSpacing: 0.5, marginBottom: 16, textAlign: 'center' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
  statCol: { flex: 1, alignItems: 'center' },
  statNum: { fontSize: 28, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, textAlign: 'center' },
  statDesc: { fontSize: 11, fontFamily: FONTS.body, color: COLORS.textLight, textAlign: 'center', lineHeight: 15, marginTop: 2 },
  statDivider: { width: 1, height: 40, backgroundColor: '#F0F0F0' },

  // ── Pôles
  polesSection: { marginTop: 8, paddingBottom: 4 },
  polesHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginBottom: 16 },
  sectionTitle: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  seeAll: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.primary },
  polesScroll: { paddingLeft: 16, paddingBottom: 4 },
  poleCard: {
    width: 150, marginRight: 12, borderRadius: 20, overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 10, elevation: 4,
  },
  poleCardBg: { width: 150, height: 100 },
  poleCardImageOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.25)' },
  poleCardInfo: { backgroundColor: COLORS.white, padding: 12 },
  poleAccentDot: { width: 8, height: 8, borderRadius: 4, marginBottom: 6 },
  poleCardName: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  poleCardSub: { fontSize: 10, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 2 },

  // ── Discover
  discoverSection: { marginHorizontal: 16, marginBottom: 16 },
  discoverHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  discoverSectionTitle: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  discoverSeeAll: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.primary },

  discoverLargeCard: { width: '100%', height: 180, borderRadius: 24, overflow: 'hidden', marginBottom: 12 },
  discoverLargeOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,30,18,0.40)', padding: 20, justifyContent: 'flex-end' },
  discoverBadge: { backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 20, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, marginBottom: 10 },
  discoverBadgeText: { fontSize: 9, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, letterSpacing: 2 },
  discoverLargeTitle: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 26 },

  discoverMedRow: { flexDirection: 'row', gap: 12, marginBottom: 12 },
  discoverMedCard: { flex: 1, height: 150, borderRadius: 20, overflow: 'hidden' },
  discoverMedOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,30,18,0.45)', padding: 14, justifyContent: 'flex-end' },
  discoverMedTitle: { fontSize: 14, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 18 },

  discoverSmallRow: { flexDirection: 'row', gap: 12 },
  discoverSmallCard: { flex: 1, height: 120, borderRadius: 20, overflow: 'hidden' },
  discoverSmallOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(10,30,18,0.45)', padding: 14, justifyContent: 'flex-end' },
  discoverSmallLabel: { fontSize: 8, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.8)', letterSpacing: 2, marginBottom: 4 },
  discoverSmallTitle: { fontSize: 13, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white },

  discoverFavCard: { flex: 1, height: 120, borderRadius: 20, backgroundColor: COLORS.primary, overflow: 'hidden' },
  discoverFavScrim: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(31,61,43,0.72)', borderRadius: 20 },
  discoverFavContent: { flex: 1, padding: 14, justifyContent: 'space-between' },
  discoverFavIconWrap: { backgroundColor: 'rgba(255,255,255,0.18)', borderRadius: 12, width: 36, height: 36, alignItems: 'center', justifyContent: 'center' },
  discoverFavIcon: { fontSize: 20, color: COLORS.white },
  discoverFavLabel: { fontSize: 8, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.85)', letterSpacing: 2, marginBottom: 4 },
  discoverFavTitle: { fontSize: 13, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 17 },

  // ── Événement
  eventWrapper: { margin: 16, marginTop: 0, borderRadius: 24, overflow: 'hidden' },
  eventBg: { height: 220 },
  eventOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(10,30,18,0.48)', padding: 20, justifyContent: 'space-between',
  },
  eventBadge: { backgroundColor: 'rgba(240,192,64,0.9)', borderRadius: 20, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5 },
  eventBadgeText: { fontSize: 9, fontFamily: FONTS.body, fontWeight: '700', color: '#3a2800', letterSpacing: 1 },
  eventTitle: { fontSize: 22, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 28, marginTop: 8 },
  eventDetails: { fontSize: 12, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.75)', marginTop: 4 },
  eventBottom: { flexDirection: 'row' },
  eventBtn: { backgroundColor: COLORS.white, borderRadius: 12, paddingHorizontal: 20, paddingVertical: 11 },
  eventBtnText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },

  // ── Footer
  footer: { margin: 16, marginTop: 0, borderRadius: 24, backgroundColor: COLORS.primary, padding: 24, marginBottom: 32, overflow: 'hidden' },
  footerImage: { borderRadius: 24 },
  footerOverlay: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(31,61,43,0.84)' },
  footerLogo: { width: 100, height: 36, marginBottom: 12 },
  footerDesc: { fontSize: 13, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.75)', lineHeight: 20, marginBottom: 16 },
  footerRow: { flexDirection: 'row', gap: 12 },
  footerContact: { flex: 1, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12, padding: 12, alignItems: 'center' },
  footerContactText: { fontSize: 10, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.8)', textAlign: 'center' },
  footerPhone: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, textAlign: 'center' },
  socialRow: { flexDirection: 'row', justifyContent: 'center', gap: 20, marginTop: 18 },
  socialBtn: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: COLORS.white,
    alignItems: 'center', justifyContent: 'center',
  },
  footerMore: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 18 },
  footerMoreText: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, letterSpacing: 0.5 },
});

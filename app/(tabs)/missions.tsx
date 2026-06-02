import {
  View, Text, ScrollView, TouchableOpacity,
  Image, ImageBackground, StyleSheet, Alert, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

export default function MissionsScreen() {
  const { lang } = useLang();

  const openLink = async (url: string) => {
    try {
      if (url.startsWith('http://') || url.startsWith('https://')) {
        await WebBrowser.openBrowserAsync(url);
      } else {
        await Linking.openURL(url);
      }
    } catch {
      Alert.alert(t(lang, 'err_title'), t(lang, 'err_link'));
    }
  };

  return (
    <SafeAreaView style={ms.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={ms.scroll}>

        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <ImageBackground
          source={require('../../assets/images/conferences.jpg')}
          style={ms.heroBg}
          resizeMode="cover"
        >
          <View style={ms.heroOverlay}>
            <Text style={ms.heroLabel}>{t(lang, 'bento_missions_label')}</Text>
            <Text style={ms.heroTitle}>{t(lang, 'missions_tagline')}</Text>
            <View style={ms.heroDivider} />
          </View>
        </ImageBackground>

        {/* ── VUE D'ENSEMBLE ───────────────────────────────────────────── */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={ms.overviewScroll}
        >
          {([
            { titleKey: 'ov_conferences', descKey: 'ov_expertise', image: require('../../assets/images/conferences.jpg') },
            { titleKey: 'ov_unite_pro', descKey: 'ov_entreprises', image: { uri: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=300&q=80' } },
            { titleKey: 'ov_main_etoiles', descKey: 'ov_gastronomie', image: require('../../assets/images/main-etoiles.jpg') },
            { titleKey: 'ov_17sept', descKey: 'ov_paris', image: { uri: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=300&q=80' } },
            { titleKey: 'ov_livre', descKey: 'ov_roman', image: require('../../assets/images/livre.jpg') },
          ] as const).map(item => (
            <View key={item.titleKey} style={ms.overviewCard}>
              <Image source={item.image} style={ms.overviewImg} resizeMode="cover" />
              <Text style={ms.overviewCardTitle}>{t(lang, item.titleKey)}</Text>
              <Text style={ms.overviewCardDesc}>{t(lang, item.descKey)}</Text>
            </View>
          ))}
        </ScrollView>

        {/* ── CONFÉRENCES ──────────────────────────────────────────────── */}
        <View style={ms.confSection}>
          <ImageBackground
            source={require('../../assets/images/conferences.jpg')}
            style={ms.confBg}
            resizeMode="cover"
            imageStyle={{ opacity: 0.3, transform: [{ translateY: 45 }] }}
          >
            <View style={ms.confOverlay}>
              <Text style={ms.confLabel}>{t(lang, 'conf_label')}</Text>
              <Text style={ms.confTitle}>{t(lang, 'conf_title')}</Text>
              <Text style={ms.confDesc}>{t(lang, 'conf_desc')}</Text>

              <Text style={ms.confContactQ}>{t(lang, 'conf_contact_q')}</Text>
              <Text style={ms.confContactLine}>
                {t(lang, 'conf_contact_mail')}{' '}
                <Text
                  style={ms.confContactLink}
                  onPress={() => Linking.openURL('mailto:prevention.sante.arthrose.main@gmail.com')}
                >
                  prevention.sante.arthrose.main@gmail.com
                </Text>
              </Text>
              <Text style={ms.confContactLine}>
                {t(lang, 'conf_contact_tel')}{' '}
                <Text
                  style={ms.confContactLink}
                  onPress={() => Linking.openURL('tel:0678288223')}
                >
                  06 78 28 82 23
                </Text>
              </Text>
            </View>
          </ImageBackground>
        </View>

        {/* ── UNITÉ SANTÉ MAIN PRO ─────────────────────────────────────── */}
        <View style={ms.unitSection}>
          <View style={ms.unitTopBar} />
          <View style={ms.unitInner}>
            <View style={ms.unitHeaderRow}>
              <View style={ms.unitBadge}>
                <Text style={ms.unitBadgeText}>PRO</Text>
              </View>
              <View style={ms.unitHeaderText}>
                <Text style={ms.unitName}>{t(lang, 'unite_title')}</Text>
                <Text style={ms.unitSub}>{t(lang, 'unite_subtitle')}</Text>
              </View>
            </View>

            <View style={ms.packsRow}>
              <View style={ms.pack1}>
                <View style={ms.pack1Label}>
                  <Text style={ms.pack1LabelText}>{t(lang, 'pack1')}</Text>
                </View>
                <Text style={ms.packTitle}>{t(lang, 'pack1_name')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack1_b1')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack1_b2')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack1_b3')}</Text>
              </View>
              <View style={ms.pack2}>
                <View style={ms.pack2Label}>
                  <Text style={ms.pack2LabelText}>{t(lang, 'pack2')}</Text>
                </View>
                <Text style={ms.packTitle}>{t(lang, 'pack2_name')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack2_b1')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack2_b2')}</Text>
                <Text style={ms.packBullet}>• {t(lang, 'mpack2_b3')}</Text>
              </View>
            </View>

            <TouchableOpacity
              style={ms.greenBtn}
              activeOpacity={0.8}
              onPress={() => openLink('mailto:prevention.sante.arthrose.main@gmail.com?subject=Unit%C3%A9%20Sant%C3%A9%20Main%20Pro')}
            >
              <Text style={ms.greenBtnText}>{t(lang, 'nous_contacter')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── LA MAIN DANS LES ÉTOILES ─────────────────────────────────── */}
        <View style={ms.etoilesWrapper}>
          <ImageBackground
            source={require('../../assets/images/main-etoiles.jpg')}
            style={ms.etoilesBg}
            resizeMode="cover"
          >
            <View style={ms.etoilesOverlay}>
              <View style={ms.etoilesBadge}>
                <Text style={ms.etoilesBadgeText}>ÉVÉNEMENT EXCLUSIF</Text>
              </View>
              <Text style={ms.etoilesTitle}>{t(lang, 'etoiles_title')}</Text>
              <Text style={ms.etoilesChef}>{t(lang, 'etoiles_chef')}</Text>
              <View style={ms.etoilesBtns}>
                <TouchableOpacity
                  style={ms.etoilesBtnWhite}
                  activeOpacity={0.8}
                  onPress={() => openLink('tel:0558728015')}
                >
                  <Text style={ms.etoilesBtnWhiteText}>{t(lang, 'reserver_btn')}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={ms.etoilesBtnOutline}
                  activeOpacity={0.8}
                  onPress={() => router.push('/(tabs)/evenements')}
                >
                  <Text style={ms.etoilesBtnOutlineText}>{t(lang, 'en_savoir_plus')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* ── 17 SEPTEMBRE ─────────────────────────────────────────────── */}
        <View style={ms.septSection}>
          <View style={ms.septTopBar} />
          <View style={ms.septInner}>
            <View style={ms.septHeaderRow}>
              <View style={ms.septTitleCol}>
                <Text style={ms.septTitle}>{t(lang, 'sept_title2')}</Text>
              </View>
              <View style={ms.septBadge}>
                <Text style={ms.septBadgeNum}>17 SEPT.</Text>
                <Text style={ms.septBadgeLoc}>{t(lang, 'sept_paris')}</Text>
              </View>
            </View>
            <View style={ms.septInfoBox}>
              <Text style={ms.septInfoText}>{t(lang, 'sept_info')}</Text>
              <Text style={ms.septProText}>{t(lang, 'sept_pro_short')}</Text>
            </View>
            <TouchableOpacity
              style={ms.greenBtn}
              activeOpacity={0.8}
              onPress={() => openLink('mailto:prevention.sante.arthrose.main@gmail.com?subject=17%20septembre%20-%20Journ%C3%A9e%20mondiale%20arthrose')}
            >
              <Text style={ms.greenBtnText}>{t(lang, 'nous_contacter')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ── LE LIVRE ─────────────────────────────────────────────────── */}
        <View style={ms.livreWrapper}>
          <ImageBackground
            source={require('../../assets/images/livre.jpg')}
            style={ms.livreBg}
            resizeMode="cover"
          >
            <View style={ms.livreImageOverlay}>
              <Text style={ms.livreSmallLabel}>{t(lang, 'livre_badge')}</Text>
              <Text style={ms.livreImageTitle}>{t(lang, 'livre_title')}</Text>
            </View>
          </ImageBackground>
          <View style={ms.livreContent}>
            <Text style={ms.livreDesc}>{t(lang, 'livre_desc')}</Text>
            <View style={ms.livreBtns}>
              <TouchableOpacity
                style={ms.livreBtnGreen}
                activeOpacity={0.8}
                onPress={() => openLink('https://www.fnac.com/a22190913/Stephanie-Lasserre-Conversation-avec-mon-chirurgien-de-la-main')}
              >
                <Text style={ms.livreBtnGreenText}>{t(lang, 'acheter_fnac')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={ms.livreBtnOutline}
                activeOpacity={0.8}
                onPress={() => openLink('mailto:prevention.sante.arthrose.main@gmail.com')}
              >
                <Text style={ms.livreBtnOutlineText}>{t(lang, 'nous_contacter')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{ height: 32 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const ms = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  scroll: { paddingBottom: 48 },

  // Hero
  heroBg: { height: 280 },
  heroOverlay: {
    flex: 1,
    backgroundColor: 'rgba(20,50,30,0.78)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  heroLabel: {
    fontSize: 13, fontFamily: FONTS.body, fontWeight: '700',
    color: COLORS.white, letterSpacing: 4, marginBottom: 10,
  },
  heroTitle: {
    fontSize: 28, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.white, textAlign: 'center', lineHeight: 36,
  },
  heroDivider: {
    marginTop: 16, height: 3, width: 60,
    backgroundColor: 'rgba(255,255,255,0.5)', alignSelf: 'center',
  },

  // Overview horizontal scroll
  overviewScroll: { paddingHorizontal: 16, paddingVertical: 20 },
  overviewCard: {
    width: 130, marginRight: 12, borderRadius: 16, backgroundColor: COLORS.white,
    padding: 14,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  overviewImg: {
    width: '100%', height: 72, borderRadius: 12,
    backgroundColor: 'rgba(31,61,43,0.1)', marginBottom: 10,
  },
  overviewCardTitle: {
    fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary,
  },
  overviewCardDesc: {
    fontSize: 11, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 3,
  },

  // Conférences
  confSection: {
    backgroundColor: COLORS.primary, margin: 16, borderRadius: 24, overflow: 'hidden',
  },
  confBg: { height: 220 },
  confOverlay: { flex: 1, padding: 24, justifyContent: 'center' },
  confLabel: {
    fontSize: 10, fontFamily: FONTS.body, fontWeight: '700',
    color: COLORS.white, letterSpacing: 3, marginBottom: 8,
  },
  confTitle: {
    fontSize: 22, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.white, lineHeight: 28,
  },
  confDesc: {
    fontSize: 13, fontFamily: FONTS.body,
    color: 'rgba(255,255,255,0.75)', lineHeight: 20, marginTop: 10,
  },
  confContactQ: {
    fontSize: 13, fontFamily: FONTS.body, fontWeight: '700',
    color: COLORS.white, lineHeight: 20, marginTop: 16,
  },
  confContactLine: {
    fontSize: 13, fontFamily: FONTS.body,
    color: 'rgba(255,255,255,0.75)', lineHeight: 20, marginTop: 4,
  },
  confContactLink: {
    fontFamily: FONTS.body, fontWeight: '700',
    color: COLORS.white, textDecorationLine: 'underline',
  },

  // Unité Santé Main Pro
  unitSection: {
    backgroundColor: COLORS.white, margin: 16, borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  unitTopBar: { height: 8, width: '100%', backgroundColor: 'rgba(31,61,43,0.08)' },
  unitInner: { padding: 20 },
  unitHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  unitBadge: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center',
  },
  unitBadgeText: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  unitHeaderText: { marginLeft: 14, flex: 1 },
  unitName: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  unitSub: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.textLight },
  packsRow: { flexDirection: 'row', gap: 10, marginBottom: 16 },
  pack1: { flex: 1, backgroundColor: COLORS.cream, borderRadius: 14, padding: 14 },
  pack2: { flex: 1, backgroundColor: 'rgba(31,61,43,0.1)', borderRadius: 14, padding: 14 },
  pack1Label: {
    backgroundColor: COLORS.primary, borderRadius: 8,
    paddingHorizontal: 8, paddingVertical: 4, alignSelf: 'flex-start', marginBottom: 8,
  },
  pack1LabelText: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  pack2Label: {
    backgroundColor: 'rgba(31,61,43,0.3)', borderRadius: 8,
    paddingHorizontal: 8, paddingVertical: 4, alignSelf: 'flex-start', marginBottom: 8,
  },
  pack2LabelText: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  packTitle: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: '#1a1a1a', marginBottom: 6 },
  packBullet: { fontSize: 11, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 18 },

  // La Main dans les Étoiles
  etoilesWrapper: { margin: 16, borderRadius: 24, overflow: 'hidden' },
  etoilesBg: { height: 320 },
  etoilesOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15,40,25,0.75)',
    padding: 24,
    justifyContent: 'flex-end',
  },
  etoilesBadge: {
    backgroundColor: '#F0C040', borderRadius: 20, alignSelf: 'flex-start',
    paddingHorizontal: 12, paddingVertical: 5, marginBottom: 12,
  },
  etoilesBadgeText: {
    fontSize: 9, fontFamily: FONTS.body, fontWeight: '700',
    color: '#5a3a00', letterSpacing: 1,
  },
  etoilesTitle: {
    fontSize: 26, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.white, lineHeight: 32, marginBottom: 4,
  },
  etoilesChef: {
    fontSize: 13, fontFamily: FONTS.body,
    color: 'rgba(255,255,255,0.8)', marginBottom: 16,
  },
  etoilesBtns: { flexDirection: 'row', gap: 10 },
  etoilesBtnWhite: {
    flex: 1, backgroundColor: COLORS.white, borderRadius: 12,
    paddingVertical: 13, alignItems: 'center',
  },
  etoilesBtnWhiteText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  etoilesBtnOutline: {
    flex: 1, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.6)',
    borderRadius: 12, paddingVertical: 12, alignItems: 'center',
  },
  etoilesBtnOutlineText: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.white },

  // 17 Septembre
  septSection: {
    backgroundColor: COLORS.white, margin: 16, borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  septTopBar: { height: 6, width: '100%', backgroundColor: '#E05252' },
  septInner: { padding: 20 },
  septHeaderRow: {
    flexDirection: 'row', justifyContent: 'space-between',
    alignItems: 'flex-start', marginBottom: 12,
  },
  septTitleCol: { flex: 1 },
  septTitle: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  septBadge: {
    backgroundColor: '#E05252', borderRadius: 20, marginLeft: 12,
    paddingHorizontal: 10, paddingVertical: 6, alignItems: 'center',
  },
  septBadgeNum: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  septBadgeLoc: { fontSize: 9, fontFamily: FONTS.body, color: COLORS.white },
  septInfoBox: {
    backgroundColor: '#FFF5F5', borderRadius: 14, padding: 14, marginBottom: 14,
  },
  septInfoText: { fontSize: 13, fontFamily: FONTS.body, color: '#CC3333', lineHeight: 20 },
  septProText: {
    fontSize: 13, fontFamily: FONTS.body, color: COLORS.primary,
    fontStyle: 'italic', marginTop: 8,
  },

  // Le Livre
  livreWrapper: {
    margin: 16, borderRadius: 24, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  livreBg: { height: 220 },
  livreImageOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'flex-end',
    padding: 20,
  },
  livreSmallLabel: {
    fontSize: 11, fontFamily: FONTS.body, fontWeight: '700',
    color: COLORS.white, letterSpacing: 2, marginBottom: 4,
  },
  livreImageTitle: {
    fontSize: 18, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.white, lineHeight: 24,
  },
  livreAuteur: {
    fontSize: 12, fontFamily: FONTS.body, fontStyle: 'italic',
    color: 'rgba(255,255,255,0.8)', marginTop: 4,
  },
  livreContent: { backgroundColor: COLORS.white, padding: 20 },
  livreDesc: {
    fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight,
    lineHeight: 20, marginBottom: 16,
  },
  livreBtns: { flexDirection: 'row', gap: 10 },
  livreBtnGreen: {
    flex: 1, backgroundColor: COLORS.primary, borderRadius: 10,
    paddingVertical: 13, alignItems: 'center',
  },
  livreBtnGreenText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  livreBtnOutline: {
    flex: 1, borderWidth: 1.5, borderColor: COLORS.primary,
    borderRadius: 10, paddingVertical: 12, alignItems: 'center',
  },
  livreBtnOutlineText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },

  // Shared
  greenBtn: {
    backgroundColor: COLORS.primary, borderRadius: 12,
    paddingVertical: 13, alignItems: 'center',
  },
  greenBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
});

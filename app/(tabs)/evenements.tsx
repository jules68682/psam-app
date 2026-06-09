import { useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  ImageBackground, Image, Modal, StyleSheet,
  Alert, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

const EVENT_IMAGE = 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80';
const SANTEXPO_IMAGE = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80';
const TEL = 'tel:0558728015';
const MAIL_INSCRIPTION = 'mailto:prevention.sante.arthrose.main@gmail.com?subject=Inscription%20La%20Main%20dans%20les%20%C3%89toiles&body=Bonjour%2C%20je%20souhaite%20m%27inscrire%20%C3%A0%20la%20soir%C3%A9e%20La%20Main%20dans%20les%20%C3%89toiles.';
const MAIL_JOURNEE = 'mailto:prevention.sante.arthrose.main@gmail.com?subject=Journ%C3%A9e%20mondiale%20de%20l%27arthrose%20-%2017%20septembre';
const MAIL_SANTEXPO = 'mailto:prevention.sante.arthrose.main@gmail.com?subject=SantExpo%20-%20Unit%C3%A9%20Sant%C3%A9%20Main%20Professionnelle';

function DetailRow({ text }: { text: string }) {
  return (
    <View style={es.detailRow}>
      <View style={es.detailDot} />
      <Text style={es.detailText}>{text}</Text>
    </View>
  );
}

export default function EvenementsScreen() {
  const { lang } = useLang();
  const [showSantExpo, setShowSantExpo] = useState(false);

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
    <SafeAreaView style={es.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={es.scroll}>
        <Text style={es.pageTitle}>{t(lang, 'evenements_title')}</Text>
        <Text style={es.pageSub}>{t(lang, 'evenements_subtitle')}</Text>

        {/* ── CARD 1 — La Main dans les Étoiles ───────────────────────── */}
        <View style={es.card1Wrapper}>
          <ImageBackground
            source={{ uri: EVENT_IMAGE }}
            style={es.card1Bg}
            resizeMode="cover"
            borderRadius={20}
          >
            <View style={es.card1Overlay}>
              <View style={es.goldenBadge}>
                <Text style={es.goldenBadgeText}>{t(lang, 'prochainement')}</Text>
              </View>
              <Text style={es.card1Title}>{t(lang, 'main_etoiles')}</Text>
              <Text style={es.card1Subtitle}>{t(lang, 'menu')}</Text>

              <View style={es.sep} />

              <DetailRow text={t(lang, 'lieu')} />
              <DetailRow text={t(lang, 'date_event')} />
              <DetailRow text={t(lang, 'prix')} />
              <DetailRow text={t(lang, 'chef')} />

              <View style={es.sep} />

              <TouchableOpacity
                style={es.btnWhite}
                activeOpacity={0.8}
                onPress={() => openLink(MAIL_INSCRIPTION)}
              >
                <Text style={es.btnWhiteText}>{t(lang, 'inscrire')}</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={es.btnOutline}
                activeOpacity={0.8}
                onPress={() => openLink(TEL)}
              >
                <Text style={es.btnOutlineText}>{t(lang, 'reserver')}</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>

        {/* ── CARD 2 — SantExpo ─────────────────────────────────────── */}
        <View style={es.card2}>
          <View style={es.card2HeaderRow}>
            <Text style={es.card2Title}>{t(lang, 'santexpo_title')}</Text>
            <View style={es.greenBadge}>
              <Text style={es.greenBadgeText}>{t(lang, 'stand')}</Text>
            </View>
          </View>
          <Text style={es.card2Desc}>{t(lang, 'santexpo_desc')}</Text>
          <TouchableOpacity
            style={es.btnGreen}
            activeOpacity={0.8}
            onPress={() => setShowSantExpo(true)}
          >
            <Text style={es.btnGreenText}>{t(lang, 'en_savoir_plus')}</Text>
          </TouchableOpacity>
        </View>

        {/* ── CARD 3 — 17 septembre Paris ──────────────────────────── */}
        <View style={es.card3}>
          <View style={es.card3HeaderRow}>
            <Text style={es.card3Title}>{t(lang, 'sept_title')}</Text>
            <View style={es.redBadge}>
              <Text style={es.redBadgeText}>{t(lang, 'a_venir')}</Text>
            </View>
          </View>
          <Text style={es.card3Sub}>{t(lang, 'sept_sub')}</Text>
          <Text style={es.card3Desc}>{t(lang, 'sept_desc')}</Text>
          <Text style={es.card3Pro}>{t(lang, 'sept_pro')}</Text>
          <TouchableOpacity
            style={es.btnGreen}
            activeOpacity={0.8}
            onPress={() => openLink(MAIL_JOURNEE)}
          >
            <Text style={es.btnGreenText}>{t(lang, 'nous_contacter')}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* ── MODAL SantExpo ──────────────────────────────────────────── */}
      <Modal
        visible={showSantExpo}
        animationType="slide"
        onRequestClose={() => setShowSantExpo(false)}
      >
        <SafeAreaView style={sm.safe} edges={['top']}>
          <View style={sm.header}>
            <TouchableOpacity
              style={sm.closeTouch}
              activeOpacity={0.8}
              onPress={() => setShowSantExpo(false)}
              hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
              accessibilityRole="button"
              accessibilityLabel={t(lang, 'fermer')}
            >
              <Text style={sm.closeBtn}>← {t(lang, 'fermer')}</Text>
            </TouchableOpacity>
            <Text style={sm.headerTitle}>{t(lang, 'santexpo_modal_header')}</Text>
            <View style={{ width: 60 }} />
          </View>

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={sm.scroll}>
            <Image source={{ uri: SANTEXPO_IMAGE }} style={sm.heroImage} resizeMode="cover" />

            <View style={sm.mainCard}>
              <View style={sm.standBadge}>
                <Text style={sm.standBadgeText}>{t(lang, 'stand')}</Text>
              </View>
              <Text style={sm.cardTitle}>{t(lang, 'unite_title')}</Text>
              <Text style={sm.cardDesc}>{t(lang, 'santexpo_modal_desc')}</Text>

              <View style={sm.sep} />

              <View style={sm.packsRow}>
                <View style={sm.pack1}>
                  <Text style={sm.packLabel}>{t(lang, 'pack1')}</Text>
                  <Text style={sm.packTitle}>{t(lang, 'pack1_name')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack1_b1')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack1_b2')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack1_b3')}</Text>
                </View>
                <View style={sm.pack2}>
                  <Text style={sm.packLabel}>{t(lang, 'pack2')}</Text>
                  <Text style={sm.packTitle}>{t(lang, 'pack2_name')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack2_b1')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack2_b2')}</Text>
                  <Text style={sm.packBullet}>• {t(lang, 'epack2_b3')}</Text>
                </View>
              </View>

              <View style={sm.benefitsWrap}>
                {(['benefit1', 'benefit2', 'benefit3', 'benefit4'] as const).map(key => (
                  <View key={key} style={sm.benefitChip}>
                    <Text style={sm.benefitCheck}>✓ </Text>
                    <Text style={sm.benefitText}>{t(lang, key)}</Text>
                  </View>
                ))}
              </View>

              <TouchableOpacity
                style={sm.ctaBtn}
                activeOpacity={0.8}
                onPress={() => openLink(MAIL_SANTEXPO)}
              >
                <Text style={sm.ctaBtnText}>{t(lang, 'nous_contacter')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
}

const es = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  scroll: { padding: 16, paddingTop: 20, paddingBottom: 40 },
  pageTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, marginBottom: 4 },
  pageSub: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, marginBottom: 20 },

  card1Wrapper: { borderRadius: 20, overflow: 'hidden', marginBottom: 16 },
  card1Bg: { minHeight: 340 },
  card1Overlay: { flex: 1, backgroundColor: 'rgba(20,50,30,0.85)', padding: 24, borderRadius: 20 },
  goldenBadge: {
    backgroundColor: 'rgba(240,192,64,0.95)', borderRadius: 20, alignSelf: 'flex-start',
    paddingHorizontal: 14, paddingVertical: 6, marginBottom: 16,
  },
  goldenBadgeText: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary, letterSpacing: 1.2 },
  card1Title: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, lineHeight: 32 },
  card1Subtitle: { fontSize: 14, fontFamily: FONTS.body, fontStyle: 'italic', color: 'rgba(255,255,255,0.8)', marginTop: 4 },
  sep: { height: 1, backgroundColor: 'rgba(255,255,255,0.2)', marginVertical: 20 },
  detailRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  detailDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.7)' },
  detailText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.white, marginLeft: 12, lineHeight: 20 },
  btnWhite: { backgroundColor: COLORS.white, borderRadius: 12, paddingVertical: 15, alignItems: 'center', marginBottom: 10 },
  btnWhiteText: { fontSize: 15, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  btnOutline: { borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.5)', borderRadius: 12, paddingVertical: 14, alignItems: 'center' },
  btnOutlineText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '600', color: COLORS.white },

  card2: {
    backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 2, borderColor: '#E8E5E0',
    padding: 24, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  card2HeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 },
  card2Title: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  greenBadge: { backgroundColor: 'rgba(31,61,43,0.1)', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  greenBadgeText: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  card2Desc: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 22, marginBottom: 16 },

  card3: { backgroundColor: COLORS.white, borderRadius: 20, borderWidth: 2, borderColor: '#E8E5E0', padding: 24, marginBottom: 16 },
  card3HeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 },
  card3Title: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  redBadge: { backgroundColor: '#E05252', borderRadius: 20, paddingHorizontal: 10, paddingVertical: 5 },
  redBadgeText: { fontSize: 10, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, letterSpacing: 0.8 },
  card3Sub: { fontSize: 15, fontFamily: FONTS.body, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 },
  card3Desc: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 20, marginBottom: 8 },
  card3Pro: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.primary, fontStyle: 'italic', lineHeight: 19, marginBottom: 16 },

  btnGreen: { backgroundColor: COLORS.primary, borderRadius: 12, paddingVertical: 13, alignItems: 'center' },
  btnGreenText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
});

const sm = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: COLORS.white, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  closeTouch: { minHeight: 44, justifyContent: 'center' },
  closeBtn: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.primary, fontWeight: '600' },
  headerTitle: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  scroll: { padding: 16, paddingBottom: 48 },
  heroImage: { width: '100%', height: 200, borderRadius: 16 },
  mainCard: {
    backgroundColor: COLORS.white, borderRadius: 16, padding: 20, marginTop: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  standBadge: { backgroundColor: COLORS.primary, borderRadius: 20, alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, marginBottom: 16 },
  standBadgeText: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  cardTitle: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 8 },
  cardDesc: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 22, marginBottom: 16 },
  sep: { height: 1, backgroundColor: '#E5E5E5', marginVertical: 16 },
  packsRow: { flexDirection: 'row', marginBottom: 16 },
  pack1: { flex: 1, backgroundColor: COLORS.cream, borderRadius: 12, padding: 16 },
  pack2: { flex: 1, backgroundColor: 'rgba(31,61,43,0.1)', borderRadius: 12, padding: 16, marginLeft: 8 },
  packLabel: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary, marginBottom: 6 },
  packTitle: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: '#1a1a1a', marginBottom: 8 },
  packBullet: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 20 },
  benefitsWrap: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 16 },
  benefitChip: { flexDirection: 'row', backgroundColor: 'rgba(31,61,43,0.08)', borderRadius: 8, padding: 8, margin: 4 },
  benefitCheck: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.primary, fontWeight: '700' },
  benefitText: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.text },
  ctaBtn: { backgroundColor: COLORS.primary, borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 8 },
  ctaBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
});

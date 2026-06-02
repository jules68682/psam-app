import React from 'react';
import {
  View, Text, ScrollView, TouchableOpacity,
  StyleSheet, Linking,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../context/LanguageContext';
import { t } from '../lib/translations';

const EMAIL = 'prevention.sante.arthrose.main@gmail.com';
const PHONE = '06 78 28 82 23';

export default function PolitiqueConfidentialiteScreen() {
  const { lang } = useLang();
  const insets = useSafeAreaInsets();

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
        <Text style={s.headerTitle} numberOfLines={1}>{t(lang, 'privacy_title')}</Text>
        <View style={s.iconBtn} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>
        <Text style={s.title}>{t(lang, 'privacy_title')}</Text>
        <Text style={s.date}>En vigueur depuis le 1er juin 2026</Text>

        <View style={s.divider} />

        <Text style={s.h2}>Éditeur</Text>
        <Text style={s.body}>
          PSAM — Prévention Santé Arthrose Main{'\n'}
          Association loi 1901{'\n'}
          75 route du Stanquet, 40990 Mées
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
          <Text style={s.link}>{EMAIL}</Text>
        </TouchableOpacity>

        <View style={s.divider} />

        <Text style={s.h2}>1. Données collectées</Text>
        <Text style={s.body}>
          Cette application ne collecte aucune donnée personnelle identifiable.
        </Text>
        <Text style={s.body}>
          Les seules données stockées le sont localement sur votre appareil :
        </Text>
        <Text style={s.li}>• Vos articles mis en favoris</Text>
        <Text style={s.li}>• Votre préférence de langue (français, anglais, espagnol)</Text>
        <Text style={s.li}>• Votre acceptation de l&apos;avertissement médical</Text>
        <Text style={s.body}>
          Ces données ne sont jamais transmises à des serveurs tiers et
          restent sur votre appareil. Elles sont supprimées si vous
          désinstallez l&apos;application.
        </Text>

        <View style={s.divider} />

        <Text style={s.h2}>2. Chatbot</Text>
        <Text style={s.body}>
          L&apos;assistant intégré à l&apos;application utilise une API d&apos;intelligence
          artificielle pour répondre à vos questions. Les messages que vous
          envoyez au chatbot peuvent être traités par ce service tiers.
          Ne communiquez jamais d&apos;informations médicales personnelles,
          de données d&apos;identité ou de coordonnées via le chatbot.
        </Text>

        <View style={s.divider} />

        <Text style={s.h2}>3. Cookies et traceurs</Text>
        <Text style={s.body}>
          L&apos;application mobile ne dépose aucun cookie sur votre appareil.
        </Text>

        <View style={s.divider} />

        <Text style={s.h2}>4. Liens externes</Text>
        <Text style={s.body}>
          L&apos;application contient des liens vers des sites tiers (partenaires,
          réseaux sociaux, e-Nable 360, etc.). PSAM n&apos;est pas responsable
          des pratiques de confidentialité de ces sites.
        </Text>

        <View style={s.divider} />

        <Text style={s.h2}>5. Vos droits (RGPD)</Text>
        <Text style={s.body}>
          Conformément au Règlement Général sur la Protection des Données,
          vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression
          de vos données. Pour toute demande :
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
          <Text style={s.link}>{EMAIL}</Text>
        </TouchableOpacity>

        <View style={s.divider} />

        <Text style={s.h2}>6. Contact</Text>
        <Text style={s.body}>
          Pour toute question relative à cette politique :
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(`mailto:${EMAIL}`)}>
          <Text style={s.link}>{EMAIL}</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={() => Linking.openURL(`tel:${PHONE.replace(/\s/g, '')}`)}>
          <Text style={s.link}>{PHONE}</Text>
        </TouchableOpacity>
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

  scroll: { padding: 24, paddingBottom: 48 },

  title: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, lineHeight: 32 },
  date: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 8 },

  divider: { height: 1, backgroundColor: '#E5E1D8', marginVertical: 24 },

  h2: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 12 },
  body: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 23, marginBottom: 10 },
  li: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 23, marginBottom: 4, paddingLeft: 8 },
  link: { fontSize: 15, fontFamily: FONTS.body, fontWeight: '600', color: COLORS.primary, marginBottom: 6, textDecorationLine: 'underline' },
});

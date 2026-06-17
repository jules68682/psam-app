import {
  View, Text, ScrollView, TouchableOpacity, Image,
  StyleSheet, Alert, Linking,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

export default function SponsorsScreen() {
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
    <SafeAreaView style={sp.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={sp.scroll}>

        {/* Header */}
        <View style={sp.header}>
          <Text style={sp.pageTitle}>{t(lang, 'sponsors_title')}</Text>
          <Text style={sp.pageSub}>{t(lang, 'sponsors_subtitle')}</Text>
        </View>

        {/* Card Thermes Adour */}
        <View style={sp.card}>
          <View style={sp.logoTile}>
            <Image
              source={require('../../assets/images/thermes-adour.png')}
              style={sp.logoTileImg}
              resizeMode="contain"
            />
          </View>
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_bienetre')}</Text>
          </View>
          <Text style={sp.sponsorName}>Thermes Adour</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'thermes_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://www.thermes-dax.com/')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'visiter_site')}</Text>
          </TouchableOpacity>
        </View>

        {/* Card Arthrose du Pouce */}
        <View style={sp.card}>
          <Image
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0881/3287/8600/files/logo_AP_orange_site_internet.png' }}
            style={sp.logo}
            resizeMode="contain"
          />
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_medical')}</Text>
          </View>
          <Text style={sp.sponsorName}>Arthrose du Pouce</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'sponsor1_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://www.arthrose-pouce.com')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'visiter_site')}</Text>
          </TouchableOpacity>
        </View>

        {/* Card Fondation Crédit Agricole */}
        <View style={sp.card}>
          <Image
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.15.58.png' }}
            style={sp.logo}
            resizeMode="contain"
          />
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_instit')}</Text>
          </View>
          <Text style={sp.sponsorName}>Fondation Crédit Agricole Solidarité &amp; Développement</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'sponsor2_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://www.fondation-ca-solidaritedeveloppement.org')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'visiter_site')}</Text>
          </TouchableOpacity>
        </View>

        {/* Card SOGECA */}
        <View style={sp.card}>
          <Image
            source={{ uri: 'https://cdn.shopify.com/s/files/1/0881/3287/8600/files/Capture_d_ecran_2025-09-10_a_18.17.11.png' }}
            style={sp.logo}
            resizeMode="contain"
          />
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_fin')}</Text>
          </View>
          <Text style={sp.sponsorName}>SOGECA</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'sponsor3_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://www.sogeca.com')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'visiter_site')}</Text>
          </TouchableOpacity>
        </View>

        {/* Card e-Nable 360 */}
        <View style={sp.card}>
          <Image
            source={{ uri: 'https://e-nable360.fr/wp-content/uploads/2024/01/og-image.png' }}
            style={sp.logo}
            resizeMode="contain"
          />
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_innovation')}</Text>
          </View>
          <Text style={sp.sponsorName}>e-Nable 360</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'enable_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://e-nable360.fr/catalogue/')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'voir_catalogue')}</Text>
          </TouchableOpacity>
        </View>

        {/* Card Orthésiste */}
        <View style={sp.card}>
          <Image
            source={require('../../assets/images/orthesiste-logo.png')}
            style={sp.logo}
            resizeMode="contain"
          />
          <View style={sp.badge}>
            <Text style={sp.badgeText}>{t(lang, 'partenaire_medical')}</Text>
          </View>
          <Text style={sp.sponsorName}>Orthésiste</Text>
          <Text style={sp.sponsorDesc}>{t(lang, 'orthesiste_desc')}</Text>
          <TouchableOpacity
            style={sp.visitBtn}
            activeOpacity={0.8}
            onPress={() => openLink('https://orthese-main.d-web64.com')}
          >
            <Text style={sp.visitBtnText}>{t(lang, 'visiter_site')}</Text>
          </TouchableOpacity>
        </View>

        {/* Devenir partenaire */}
        <View style={sp.ctaCard}>
          <Text style={sp.ctaTitle}>{t(lang, 'devenir_partenaire')}</Text>
          <Text style={sp.ctaDesc}>{t(lang, 'devenir_desc')}</Text>
          <TouchableOpacity
            style={sp.ctaBtn}
            activeOpacity={0.8}
            onPress={() => openLink('mailto:prevention.sante.arthrose.main@gmail.com?subject=Partenariat%20PSAM')}
          >
            <Text style={sp.ctaBtnText}>{t(lang, 'nous_contacter')}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const sp = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  scroll: { padding: 16, paddingBottom: 48 },

  header: {
    backgroundColor: COLORS.white, borderRadius: 16, padding: 20, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  pageTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  pageSub: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 2 },

  card: {
    backgroundColor: COLORS.white, borderRadius: 20, padding: 20, marginBottom: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  logo: { width: '100%', height: 70, marginBottom: 16 },
  logoTile: {
    width: 96, height: 96, borderRadius: 16, overflow: 'hidden',
    backgroundColor: '#3A4C74', alignSelf: 'center', marginBottom: 16,
  },
  logoTileImg: { width: '100%', height: '100%' },
  badge: {
    backgroundColor: 'rgba(31,61,43,0.1)', borderRadius: 20,
    alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 5, marginBottom: 10,
  },
  badgeText: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  sponsorName: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 8 },
  sponsorDesc: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 20, marginBottom: 16 },
  visitBtn: { backgroundColor: COLORS.primary, borderRadius: 10, paddingVertical: 12, alignItems: 'center' },
  visitBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },

  ctaCard: { backgroundColor: COLORS.primary, borderRadius: 20, padding: 20, marginBottom: 16 },
  ctaTitle: { fontSize: 20, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white, marginBottom: 10 },
  ctaDesc: { fontSize: 13, fontFamily: FONTS.body, color: 'rgba(255,255,255,0.8)', lineHeight: 20, marginBottom: 16 },
  ctaBtn: { backgroundColor: COLORS.white, borderRadius: 10, paddingVertical: 13, alignItems: 'center' },
  ctaBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
});

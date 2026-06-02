import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { t, type Lang } from '@/lib/translations';

// ── Section e-Nable 360 (objets adaptés gratuits) ─────────────────────────────
// Données récupérées sur e-nable360.fr (meta twitter:image + og:title), objets
// tagués « Moteur » liés à la main. Fabrication bénévole → « faire une demande ».
const ENABLE_PRODUCTS: { name: string; image: string; url: string }[] = [
  {
    name: 'Ouvre bouteille / pot / bocal',
    image: 'https://e-nable360.fr/wp-content/uploads/ninja-forms/15/objects/Ouvre%20bouteille%20/%20pot%20/%20bocal/img-2-rotated.jpg',
    url: 'https://e-nable360.fr/produit/ouvre-bouteille-pot-bocal/',
  },
  {
    name: 'Grande tirette pour fermeture éclair',
    image: 'https://e-nable360.fr/wp-content/uploads/2026/01/20260114_190025-scaled.jpg',
    url: 'https://e-nable360.fr/produit/grande-tirette-pour-fermeture-eclair/',
  },
  {
    name: 'Outil pour extraire les comprimés',
    image: 'https://e-nable360.fr/wp-content/uploads/ninja-forms/15/objects/Outil%20pour%20extraire%20les%20comprimés%20(pour%20les%20petits%20comprimés)/img.webp',
    url: 'https://e-nable360.fr/produit/outil-pour-extraire-les-comprimes-pour-les-petits-comprimes/',
  },
  {
    name: 'Souris pour écrire',
    image: 'https://e-nable360.fr/wp-content/uploads/2026/04/20260421_113940-scaled.jpg',
    url: 'https://e-nable360.fr/produit/souris-pour-ecrire/',
  },
  {
    name: 'Jeton de caddie spécial arthrose',
    image: 'https://e-nable360.fr/wp-content/uploads/ninja-forms/15/objects/Jeton%20de%20caddie%20spécial%20arthrose/img.png',
    url: 'https://e-nable360.fr/produit/jeton-de-caddie-special-arthrose/',
  },
  {
    name: 'Ouvre boîte',
    image: 'https://e-nable360.fr/wp-content/uploads/ninja-forms/15/objects/Ouvre%20boîte%20/img.jpg',
    url: 'https://e-nable360.fr/produit/ouvre-boite/',
  },
  {
    name: 'Manche grossi pour couvert',
    image: 'https://e-nable360.fr/wp-content/uploads/ninja-forms/15/objects/Manche%20grossi%20pour%20couvert/img.webp',
    url: 'https://e-nable360.fr/produit/manche-grossi-pour-couvert/',
  },
];

export default function ENableSection({ lang }: { lang: Lang }) {
  return (
    <View style={en.section}>
      <Text style={en.title}>{t(lang, 'enable_section_title')}</Text>
      <Text style={en.intro}>{t(lang, 'enable_section_intro')}</Text>

      <View style={en.grid}>
        {ENABLE_PRODUCTS.map(product => (
          <View key={product.url} style={en.card}>
            <Image
              source={{ uri: encodeURI(product.image) }}
              style={en.cardImage}
              resizeMode="cover"
            />
            <View style={en.cardBody}>
              <Text style={en.cardName} numberOfLines={2}>{product.name}</Text>
              <TouchableOpacity
                style={en.cardBtn}
                activeOpacity={0.8}
                onPress={() => WebBrowser.openBrowserAsync(product.url)}
              >
                <Text style={en.cardBtnText}>{t(lang, 'enable_demande')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={en.catalogueBtn}
        activeOpacity={0.8}
        onPress={() => WebBrowser.openBrowserAsync('https://e-nable360.fr/catalogue/')}
      >
        <Text style={en.catalogueBtnText}>{t(lang, 'enable_voir_catalogue')} →</Text>
      </TouchableOpacity>
    </View>
  );
}

const en = StyleSheet.create({
  section: {
    marginTop: 28, paddingTop: 24,
    borderTopWidth: 1, borderTopColor: '#E8E4DD',
  },
  title: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 10, lineHeight: 24 },
  intro: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 22, marginBottom: 16 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%', marginBottom: 14, borderRadius: 14, overflow: 'hidden',
    backgroundColor: COLORS.white,
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 6, elevation: 2,
  },
  cardImage: { width: '100%', height: 110, backgroundColor: '#F0EDE6' },
  cardBody: { padding: 10 },
  cardName: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.text, lineHeight: 18, minHeight: 36 },
  cardBtn: {
    marginTop: 8, backgroundColor: COLORS.primary, borderRadius: 8,
    paddingVertical: 8, alignItems: 'center',
  },
  cardBtnText: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  catalogueBtn: {
    marginTop: 6, borderWidth: 1.5, borderColor: COLORS.primary,
    borderRadius: 12, paddingVertical: 14, alignItems: 'center',
  },
  catalogueBtnText: { fontSize: 14, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
});

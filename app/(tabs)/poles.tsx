import { useState, useMemo, useEffect } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router, useLocalSearchParams } from 'expo-router';
import { type Pole } from '@/lib/content';
import { useContent } from '@/hooks/useContent';
import { POLE_IMAGES } from '@/lib/poleImages';
import ArticleCard from '@/components/ArticleCard';
import { COLORS, FONTS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

const openArticle = (slug: string) =>
  router.push({ pathname: '/article/[slug]', params: { slug } });

// ── Main component ───────────────────────────────────────────────────────────
export default function PolesScreen() {
  const { lang } = useLang();
  const { poles, articles } = useContent();
  const { poleSlug } = useLocalSearchParams<{ poleSlug?: string }>();
  const [selectedPole, setSelectedPole] = useState<Pole | null>(null);

  // Navigation directe depuis l'accueil : sélectionne le pôle passé en paramètre.
  useEffect(() => {
    if (!poleSlug || poles.length === 0) return;
    const target = poles.find(p => p.slug === poleSlug);
    if (target) {
      setSelectedPole(target);
      // Réinitialise le paramètre pour ne pas re-forcer le détail au retour.
      router.setParams({ poleSlug: '' });
    }
  }, [poleSlug, poles]);

  const poleArticles = useMemo(
    () => selectedPole
      ? articles.filter(a => a.poleSlug === selectedPole.slug && a.published)
      : [],
    [selectedPole, articles],
  );

  const artCount = (slug: string) =>
    articles.filter(a => a.poleSlug === slug && a.published).length;

  // ── DETAIL VIEW ────────────────────────────────────────────────────────────
  if (selectedPole) {
    const poleImg = POLE_IMAGES[selectedPole.slug];
    return (
      <SafeAreaView style={s.safe} edges={['top']}>
        {/* Back */}
        <View style={s.backRow}>
          <TouchableOpacity
            style={s.backTouch}
            activeOpacity={0.8}
            onPress={() => setSelectedPole(null)}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            accessibilityRole="button"
            accessibilityLabel={t(lang, 'retour')}
          >
            <Text style={s.backBtn}>← {t(lang, 'retour')}</Text>
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Hero image avec overlay nom */}
          <View>
            <Image source={poleImg} style={s.detailHeroImage} resizeMode="cover" />
            <View style={s.detailHeroOverlay}>
              <Text style={s.detailHeroTitle}>{selectedPole.title}</Text>
            </View>
          </View>

          {/* Articles */}
          <View style={s.detailContent}>
            <Text style={s.detailSubtitle}>
              {poleArticles.length} {t(lang, 'article_dispo')}
            </Text>

            {poleArticles.map(article => (
              <ArticleCard
                key={article.slug}
                article={article}
                pole={selectedPole}
                onPress={() => openArticle(article.slug)}
              />
            ))}

            {poleArticles.length === 0 && (
              <Text style={s.emptyText}>Aucun article disponible pour cet outil.</Text>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ── LIST VIEW ──────────────────────────────────────────────────────────────
  return (
    <SafeAreaView style={s.safe} edges={['top']}>
      <View style={s.listHeader}>
        <Text style={s.listTitle}>{t(lang, 'poles_page_title')}</Text>
        <Text style={s.listSub}>{t(lang, 'poles_subtitle')}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.list}>
        {poles.map(pole => {
          const count = artCount(pole.slug);
          return (
            <TouchableOpacity
              key={pole.slug}
              style={s.poleCard}
              activeOpacity={0.8}
              onPress={() => setSelectedPole(pole)}
            >
              <Image
                source={POLE_IMAGES[pole.slug]}
                style={s.poleCardImage}
                resizeMode="cover"
              />
              <View style={s.poleCardBody}>
                <Text style={s.poleCardTitle}>{pole.shortTitle}</Text>
                <Text style={s.poleCardDesc} numberOfLines={2}>
                  {pole.description}
                </Text>
                <View style={s.poleCardRow}>
                  <Text style={s.poleCardCount}>{count} {t(lang, 'articles')}</Text>
                  <Text style={s.poleCardCta}>{t(lang, 'poles_voir')} ›</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

// ── Styles écran principal ────────────────────────────────────────────────────
const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  listHeader: {
    backgroundColor: COLORS.white, padding: 16, paddingTop: 8,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  listTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 3 },
  listSub: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight },
  list: { padding: 16, paddingTop: 16, paddingBottom: 40 },

  // Liste cards
  poleCard: {
    borderRadius: 16, backgroundColor: COLORS.white, marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  poleCardImage: { width: '100%', height: 140 },
  poleCardBody: { padding: 16 },
  poleCardTitle: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  poleCardDesc: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 4, lineHeight: 19 },
  poleCardRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 },
  poleCardCount: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.primary, fontWeight: '600' },
  poleCardCta: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },

  // Detail view
  backRow: {
    backgroundColor: COLORS.white, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  backTouch: { minHeight: 44, justifyContent: 'center', alignSelf: 'flex-start' },
  backBtn: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.primary, fontWeight: '600' },
  detailHeroImage: { width: '100%', height: 200 },
  detailHeroOverlay: {
    position: 'absolute', bottom: 0, left: 0, right: 0,
    backgroundColor: 'rgba(31,61,43,0.7)', padding: 16,
  },
  detailHeroTitle: { fontSize: 18, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.white },
  detailContent: { padding: 16 },
  detailSubtitle: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, marginBottom: 16 },
  emptyText: { fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, textAlign: 'center', paddingVertical: 32 },
});

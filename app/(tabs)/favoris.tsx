import { useCallback } from 'react';
import {
  View, Text, FlatList, TouchableOpacity,
  ActivityIndicator, StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { COLORS, FONTS } from '@/constants/theme';
import { useFavoris } from '@/hooks/useFavoris';
import { useContent } from '@/hooks/useContent';
import ArticleCard from '@/components/ArticleCard';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

export default function FavorisScreen() {
  const { lang } = useLang();
  const { articles, poles } = useContent();
  const { favoris, loading, removeFavori, refresh } = useFavoris();

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  if (loading) {
    return (
      <SafeAreaView style={fs.safe} edges={['top']}>
        <View style={fs.center}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={fs.safe} edges={['top']}>
      {/* Header */}
      <View style={fs.header}>
        <View style={fs.headerRow}>
          <Text style={fs.pageTitle}>{t(lang, 'mes_favoris')}</Text>
          {favoris.length > 0 && (
            <View style={fs.countBadge}>
              <Text style={fs.countText}>{favoris.length}</Text>
            </View>
          )}
        </View>
      </View>

      {favoris.length === 0 ? (
        /* ── État vide ─────────────────────────────────────────────────── */
        <View style={fs.empty}>
          <View style={fs.emptyHeart}>
            <Text style={fs.emptyHeartIcon}>♡</Text>
          </View>
          <Text style={fs.emptyTitle}>{t(lang, 'aucun_favori')}</Text>
          <Text style={fs.emptySub}>{t(lang, 'aucun_favori_desc')}</Text>
        </View>
      ) : (
        /* ── FlatList — même carte que la liste d'un pôle ──────────────── */
        <FlatList
          data={favoris}
          keyExtractor={slug => slug}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={fs.list}
          renderItem={({ item: slug }) => {
            const article = articles.find(a => a.slug === slug);
            if (!article) {
              // Favori orphelin : données indisponibles → état d'erreur sobre.
              return (
                <View style={fs.errorCard}>
                  <Text style={fs.errorText}>{t(lang, 'article_indispo')}</Text>
                  <TouchableOpacity
                    style={fs.errorRemove}
                    activeOpacity={0.8}
                    onPress={() => removeFavori(slug)}
                  >
                    <Text style={fs.errorRemoveText}>{t(lang, 'retirer')}</Text>
                  </TouchableOpacity>
                </View>
              );
            }
            const pole = poles.find(p => p.slug === article.poleSlug);
            return (
              <ArticleCard
                article={article}
                pole={pole}
                onPress={() =>
                  router.push({ pathname: '/article/[slug]', params: { slug } })
                }
              />
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}

const fs = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },

  header: {
    backgroundColor: COLORS.white, padding: 16, paddingBottom: 12,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  headerRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  pageTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  countBadge: {
    backgroundColor: COLORS.primary, borderRadius: 14,
    paddingHorizontal: 10, paddingVertical: 3,
  },
  countText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },

  // État vide
  empty: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 40, paddingBottom: 60 },
  emptyHeart: {
    width: 80, height: 80, borderRadius: 40,
    backgroundColor: '#FEE2E2',
    alignItems: 'center', justifyContent: 'center', marginBottom: 24,
  },
  emptyHeartIcon: { fontSize: 36, color: '#E05252' },
  emptyTitle: {
    fontSize: 22, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.text, marginBottom: 12,
  },
  emptySub: {
    fontSize: 15, fontFamily: FONTS.body, color: COLORS.textLight,
    textAlign: 'center', lineHeight: 23,
  },

  // Liste
  list: { padding: 16, paddingTop: 8, paddingBottom: 40 },

  // Carte d'erreur (favori orphelin)
  errorCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: COLORS.white, borderRadius: 16, marginBottom: 12, padding: 16,
    borderWidth: 1, borderColor: '#EEEBE4',
  },
  errorText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.textLight, fontStyle: 'italic' },
  errorRemove: {
    borderWidth: 1.5, borderColor: '#E05252',
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7,
  },
  errorRemoveText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: '#E05252' },
  card: {
    flexDirection: 'row', backgroundColor: COLORS.white,
    borderRadius: 16, marginBottom: 12, overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  cardAccent: { width: 4, backgroundColor: '#E05252' },
  cardBody: { flex: 1, padding: 14 },
  cardTitle: {
    fontSize: 15, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.text, lineHeight: 21,
  },
  cardDesc: {
    fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight,
    marginTop: 4, lineHeight: 18,
  },
  cardDate: {
    fontSize: 11, fontFamily: FONTS.body, color: COLORS.sage,
    fontWeight: '500', marginTop: 4,
  },
  actions: { flexDirection: 'row', gap: 10, marginTop: 12 },
  btnRead: {
    backgroundColor: COLORS.primary, borderRadius: 8,
    paddingHorizontal: 16, paddingVertical: 8,
  },
  btnReadText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
  btnRemove: {
    borderWidth: 1.5, borderColor: '#E05252',
    borderRadius: 8, paddingHorizontal: 12, paddingVertical: 7,
  },
  btnRemoveText: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: '#E05252' },
});

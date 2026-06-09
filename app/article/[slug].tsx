import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';
import { useFavoris } from '@/hooks/useFavoris';
import { useContent } from '@/hooks/useContent';
import ENableSection from '@/components/ENableSection';
import { getArticleSources } from '@/lib/sources';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

export default function ArticleDetailScreen() {
  const { lang } = useLang();
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { articles, poles } = useContent();
  const { isFavori, toggleFavori, refresh } = useFavoris();
  const insets = useSafeAreaInsets();

  useFocusEffect(useCallback(() => { refresh(); }, [refresh]));

  const article = articles.find(a => a.slug === slug);
  const pole = article ? poles.find(p => p.slug === article.poleSlug) : null;

  if (!article) {
    return (
      <SafeAreaView style={s.safe}>
        <View style={s.center}>
          <Text style={s.notFound}>Article introuvable</Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={s.back}>← Retour</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const favori = isFavori(article.slug);
  const sources = getArticleSources(article.slug, article.poleSlug);

  return (
    <SafeAreaView style={s.safe} edges={['left', 'right']}>
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
        <Text style={s.headerTitle} numberOfLines={1}>{article.title}</Text>
        <TouchableOpacity
          style={s.iconBtn}
          activeOpacity={0.7}
          onPress={() => toggleFavori(article.slug)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="button"
          accessibilityLabel={favori ? t(lang, 'retirer_favoris') : t(lang, 'ajouter_favoris')}
        >
          <Text style={[s.heart, favori && s.heartActive]}>{favori ? '♥' : '♡'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={s.scroll}>
        {pole && <View style={s.badge}><Text style={s.badgeText}>{pole.shortTitle}</Text></View>}
        <Text style={s.title}>{article.title}</Text>
        <Text style={s.lead}>{article.description}</Text>
        <View style={s.divider} />

        {article.content
          ? article.content.split('\n').filter(l => l.trim()).map((line, i) => {
              if (line.startsWith('## ')) return <Text key={i} style={s.h2}>{line.slice(3)}</Text>;
              if (line.startsWith('### ')) return <Text key={i} style={s.h3}>{line.slice(4)}</Text>;
              if (line.startsWith('- ') || line.startsWith('• ')) return (
                <View key={i} style={s.bulletRow}>
                  <Text style={s.bullet}>•</Text>
                  <Text style={s.bulletText}>{line.replace(/^[-•]\s/, '')}</Text>
                </View>
              );
              return <Text key={i} style={s.para}>{line}</Text>;
            })
          : <Text style={s.soon}>Article bientôt disponible.</Text>
        }

        {(article.videos?.length ?? 0) > 0 && (
          <View style={s.videosBlock}>
            <Text style={s.videosTitle}>Vidéos associées</Text>
            {article.videos!.map((v, i) => (
              <TouchableOpacity key={i} style={s.videoBtn} activeOpacity={0.8}
                onPress={() => Linking.openURL(v.embedUrl.replace('/embed/', '/watch?v='))}>
                <Text style={s.videoBtnIcon}>▶</Text>
                <Text style={s.videoBtnText} numberOfLines={2}>{v.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {article.slug === 'materiels-soins-terebenthine' && <ENableSection lang={lang} />}

        {sources.length > 0 && (
          <View style={s.sourcesBlock}>
            <Text style={s.sourcesTitle}>{t(lang, 'sources_title')}</Text>
            <Text style={s.sourcesIntro}>{t(lang, 'sources_intro')}</Text>
            {sources.map((src, i) => (
              src.url ? (
                <TouchableOpacity
                  key={i}
                  style={s.sourceRow}
                  activeOpacity={0.7}
                  onPress={() => WebBrowser.openBrowserAsync(src.url!)}
                  accessibilityRole="link"
                  accessibilityLabel={src.label}
                >
                  <Text style={s.sourceBullet}>•</Text>
                  <Text style={s.sourceLink}>{src.label}</Text>
                </TouchableOpacity>
              ) : (
                <View key={i} style={s.sourceRow}>
                  <Text style={s.sourceBullet}>•</Text>
                  <Text style={s.sourceText}>{src.label}</Text>
                </View>
              )
            ))}
          </View>
        )}

        <View style={s.disclaimerBlock}>
          <Text style={s.disclaimerText}>{t(lang, 'medical_disclaimer_footer')}</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 12 },
  notFound: { fontSize: 16, color: COLORS.textLight, fontFamily: FONTS.body },
  back: { fontSize: 15, color: COLORS.primary, fontFamily: FONTS.body },
  header: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.white, paddingHorizontal: 12, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#EEEBE4', gap: 8, zIndex: 10, elevation: 4 },
  iconBtn: { width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  backIcon: { fontSize: 26, color: COLORS.primary, fontWeight: '700' },
  headerTitle: { flex: 1, fontSize: 15, fontFamily: FONTS.title, fontWeight: '600', color: COLORS.text, textAlign: 'center' },
  heart: { fontSize: 26, color: COLORS.textLight },
  heartActive: { color: '#E05252' },
  scroll: { padding: 20, paddingBottom: 48 },
  badge: { backgroundColor: COLORS.primary, borderRadius: 20, paddingHorizontal: 12, paddingVertical: 5, alignSelf: 'flex-start', marginBottom: 14 },
  badgeText: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, textTransform: 'uppercase', letterSpacing: 0.5 },
  title: { fontSize: 24, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, lineHeight: 32, marginBottom: 12 },
  lead: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 22, marginBottom: 20, fontStyle: 'italic' },
  divider: { height: 1, backgroundColor: '#DDD9D0', marginBottom: 20 },
  h2: { fontSize: 19, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, marginTop: 18, marginBottom: 8, lineHeight: 26 },
  h3: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginTop: 14, marginBottom: 6, lineHeight: 22 },
  para: { fontSize: 15, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 23, marginBottom: 6 },
  bulletRow: { flexDirection: 'row', gap: 8, paddingLeft: 4, marginBottom: 4 },
  bullet: { fontSize: 15, color: COLORS.primary, lineHeight: 23, fontWeight: '700' },
  bulletText: { flex: 1, fontSize: 15, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 23 },
  soon: { fontSize: 14, color: COLORS.textLight, fontFamily: FONTS.body, fontStyle: 'italic', textAlign: 'center', paddingVertical: 24 },
  videosBlock: { marginTop: 28, backgroundColor: COLORS.white, borderRadius: 14, padding: 16, gap: 10 },
  videosTitle: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, marginBottom: 4 },
  videoBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.primary, borderRadius: 10, paddingVertical: 12, paddingHorizontal: 14, gap: 10 },
  videoBtnIcon: { fontSize: 14, color: COLORS.white },
  videoBtnText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, fontWeight: '600', color: COLORS.white, lineHeight: 19 },
  sourcesBlock: { marginTop: 28, backgroundColor: COLORS.white, borderRadius: 14, padding: 16, gap: 6 },
  sourcesTitle: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.text, marginBottom: 2 },
  sourcesIntro: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 19, marginBottom: 8 },
  sourceRow: { flexDirection: 'row', gap: 8, paddingVertical: 4 },
  sourceBullet: { fontSize: 15, color: COLORS.primary, lineHeight: 21, fontWeight: '700' },
  sourceLink: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.primary, lineHeight: 21, textDecorationLine: 'underline', fontWeight: '600' },
  sourceText: { flex: 1, fontSize: 14, fontFamily: FONTS.body, color: COLORS.text, lineHeight: 21 },
  disclaimerBlock: { marginTop: 16, backgroundColor: '#F3EFE6', borderRadius: 12, borderLeftWidth: 3, borderLeftColor: COLORS.primary, padding: 14 },
  disclaimerText: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, lineHeight: 19, fontStyle: 'italic' },
});

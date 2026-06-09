import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { type Article, type Pole } from '@/lib/content';
import { POLE_IMAGES } from '@/lib/poleImages';
import { COLORS, FONTS } from '@/constants/theme';

type Props = {
  article: Article;
  pole?: Pole | null;
  onPress: () => void;
};

// Carte d'article réutilisée dans la liste d'un pôle ET dans l'écran Favoris.
export default function ArticleCard({ article, pole, onPress }: Props) {
  // L'image spécifique de l'article peut être absente, relative ou cassée
  // (lien CDN mort). En cas d'échec de chargement, on bascule sur l'image
  // d'illustration du pôle pour ne jamais laisser de cadre vide.
  const [failed, setFailed] = useState(false);
  // image article = require() local (number) OU URL distante (string).
  const articleSource =
    failed || article.image == null
      ? null
      : typeof article.image === 'number'
        ? article.image
        : article.image.startsWith('http')
          ? { uri: article.image }
          : null;
  const source = articleSource ?? POLE_IMAGES[article.poleSlug];
  return (
    <TouchableOpacity style={c.card} activeOpacity={0.85} onPress={onPress}>
      <Image
        source={source}
        style={c.image}
        resizeMode="cover"
        onError={() => setFailed(true)}
      />
      <View style={c.body}>
        {pole && (
          <View style={c.badge}>
            <Text style={c.badgeText}>{pole.shortTitle}</Text>
          </View>
        )}
        <Text style={c.title}>{article.title}</Text>
        <Text style={c.desc} numberOfLines={2}>{article.description}</Text>
      </View>
    </TouchableOpacity>
  );
}

const c = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white, borderRadius: 16, marginBottom: 12,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  image: { width: '100%', height: 200, backgroundColor: '#FFFFFF' },
  body: { padding: 16 },
  badge: {
    backgroundColor: COLORS.primary, borderRadius: 20, alignSelf: 'flex-start',
    paddingHorizontal: 10, paddingVertical: 4, marginBottom: 8,
  },
  badgeText: { fontSize: 11, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white, textTransform: 'uppercase', letterSpacing: 0.5 },
  title: { fontSize: 16, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, lineHeight: 22 },
  desc: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 4, lineHeight: 19 },
});

import { type ImageSourcePropType } from 'react-native';

// Images d'illustration par pôle. Partagé entre l'écran Outils, les cartes
// d'articles et l'écran Favoris pour un rendu cohérent.
export const POLE_IMAGES: Record<string, ImageSourcePropType> = {
  'nutrition': { uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
  'hypnose': { uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  'kinesitherapie': { uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  'ergotherapie-ortheses': { uri: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80' },
  'chirurgie': require('../assets/images/dr-rezzouk-chirurgie.jpg'),
  'beaute': { uri: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
};

import { type ImageSourcePropType } from 'react-native';

// Images d'illustration par pôle. Partagé entre l'écran Outils, les cartes
// d'articles et l'écran Favoris pour un rendu cohérent.
export const POLE_IMAGES: Record<string, ImageSourcePropType> = {
  'nutrition': { uri: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80' },
  'hypnose': { uri: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80' },
  'kinesitherapie': { uri: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80' },
  'ergotherapie-ortheses': { uri: 'https://prevention-sante-arthrose-main.fr/cdn/shop/articles/Capture_d_ecran_2025-08-12_a_15.04.51_31643476-948d-4124-b48a-958bad35497e.png' },
  'chirurgie': require('../assets/images/dr-rezzouk-chirurgie.jpg'),
  'beaute': { uri: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&q=80' },
};

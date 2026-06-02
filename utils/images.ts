export const POLE_IMAGES: Record<string, string> = {
  nutrition: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
  hypnose: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  kinesitherapie: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  'ergotherapie-ortheses': 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
  chirurgie: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&q=80',
  beaute: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=80',
};

export function getYoutubeThumbnail(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/embed\/|watch\?v=)([^&?/]+)/);
  const id = match?.[1] ?? '';
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}

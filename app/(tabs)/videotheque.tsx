import {
  View, Text, ScrollView, TouchableOpacity, Image,
  StyleSheet, Linking, Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, FONTS } from '@/constants/theme';
import { getYoutubeThumbnail } from '@/utils/images';
import { useLang } from '../../context/LanguageContext';
import { t, Lang } from '../../lib/translations';

const SCREEN_W = Dimensions.get('window').width;
const CARD_W = (SCREEN_W - 48) / 2;

interface VideoItem { url: string; title: string }
interface Section { key: string; videos: VideoItem[] }

const SECTIONS: Section[] = [
  {
    key: 'qr',
    videos: [
      { url: 'https://youtu.be/Ru7UO7M4hbE', title: "Pourquoi l'opération ?" },
      { url: 'https://youtu.be/MQ9NMYTb4V8', title: "Comment se déroule l'intervention ?" },
      { url: 'https://youtu.be/ho-iBGa8nKY', title: "Peut-on opérer les deux mains ?" },
      { url: 'https://youtu.be/6d_AuI8RpYI', title: "Où trouver des informations ?" },
      { url: 'https://youtu.be/0tyFabVQ0wE', title: "Que se passe-t-il après ?" },
      { url: 'https://youtu.be/7_GYxj4_Cmg', title: "Pour qui cette opération ?" },
    ],
  },
  {
    key: 'interviews',
    videos: [
      { url: 'https://youtu.be/qpZ7tIUpcC4', title: "L'arthrose du pouce se soigne" },
      { url: 'https://youtu.be/LfJTs6xJB04', title: "L'intérêt des orthèses" },
      { url: 'https://youtu.be/lI5szLWHwwk', title: "Résultats après chirurgie" },
      { url: 'https://youtu.be/DHQK1Y1jqJM', title: "Rôle de la nutrition" },
      { url: 'https://youtu.be/jW887ZF0gpE', title: "L'application PSAM" },
      { url: 'https://youtu.be/RQZ5hY6UFoA', title: "L'hypnose dans la chirurgie" },
      { url: 'https://youtu.be/JR_eqzHOVcM', title: "Former les chirurgiens" },
      { url: 'https://youtu.be/liDlWHvt2jg', title: "Prise en charge patient" },
      { url: 'https://youtu.be/HNWfr1geBbA', title: "La chirurgie de la main" },
      { url: 'https://youtu.be/2tTEZxSk7Uk', title: "Qu'est-ce que la rhizarthrose ?" },
      { url: 'https://youtu.be/x9xLVrOCwDE', title: "Les professionnels qui accompagnent" },
      { url: 'https://youtu.be/vOy6AlRo4Gs', title: "L'hypnose et algoneurodystrophie" },
    ],
  },
  {
    key: 'thematiques',
    videos: [
      { url: 'https://youtu.be/jrUeeP2Wcy8', title: "Orthèses et ergothérapie" },
      { url: 'https://youtu.be/2-z_cfHTae4', title: "Témoignage : une infirmière" },
      { url: 'https://youtu.be/X8Hv4puF8NQ', title: "L'hypnose contre la douleur" },
      { url: 'https://youtu.be/a-mNvvCC2_g', title: "Nutrition et rhizarthrose" },
    ],
  },
];

type SectionTitleKey = 'video_section1' | 'video_section2' | 'video_section3'
type SectionSubKey = 'video_section1_sub' | 'video_section2_sub' | 'video_section3_sub'

const SECTION_I18N: Array<{ title: SectionTitleKey; sub: SectionSubKey }> = [
  { title: 'video_section1', sub: 'video_section1_sub' },
  { title: 'video_section2', sub: 'video_section2_sub' },
  { title: 'video_section3', sub: 'video_section3_sub' },
]

// ── VideoCard ─────────────────────────────────────────────────────────────────
function VideoCard({ video, linkLabel }: { video: VideoItem; linkLabel: string }) {
  const thumb = getYoutubeThumbnail(video.url);
  return (
    <TouchableOpacity
      style={[vs.card, { width: CARD_W }]}
      activeOpacity={0.8}
      onPress={() => Linking.openURL(video.url)}
    >
      <View style={vs.thumbContainer}>
        <Image source={{ uri: thumb }} style={vs.thumb} resizeMode="cover" />
        <View style={vs.playOverlay}>
          <View style={vs.playCircle}>
            <Text style={vs.playIcon}>▶</Text>
          </View>
        </View>
      </View>
      <View style={vs.cardInfo}>
        <Text style={vs.cardTitle} numberOfLines={2}>{video.title}</Text>
        <Text style={vs.cardLink}>{linkLabel}</Text>
      </View>
    </TouchableOpacity>
  );
}

// ── VideoGrid ─────────────────────────────────────────────────────────────────
function VideoGrid({ videos, linkLabel }: { videos: VideoItem[]; linkLabel: string }) {
  const rows: VideoItem[][] = [];
  for (let i = 0; i < videos.length; i += 2) {
    rows.push(videos.slice(i, i + 2));
  }
  return (
    <View style={vs.grid}>
      {rows.map((row, ri) => (
        <View key={ri} style={vs.gridRow}>
          {row.map(v => <VideoCard key={v.url} video={v} linkLabel={linkLabel} />)}
          {row.length === 1 && <View style={{ width: CARD_W, margin: 8 }} />}
        </View>
      ))}
    </View>
  );
}

// ── Screen ────────────────────────────────────────────────────────────────────
export default function VideothequeScreen() {
  const { lang } = useLang();
  const total = SECTIONS.reduce((n, s) => n + s.videos.length, 0);
  const linkLabel = t(lang, 'voir_video');

  return (
    <SafeAreaView style={vs.safe} edges={['top']}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={vs.header}>
          <Text style={vs.pageTitle}>{t(lang, 'video_title')}</Text>
          <Text style={vs.pageSub}>{t(lang, 'video_subtitle')}</Text>
          <View style={vs.countBadge}>
            <Text style={vs.countText}>{total} {t(lang, 'videos_label')}</Text>
          </View>
        </View>

        {/* Sections */}
        {SECTIONS.map((section, idx) => (
          <View key={section.key}>
            <View style={vs.sectionHeader}>
              <Text style={vs.sectionTitle}>{t(lang, SECTION_I18N[idx].title)}</Text>
              <Text style={vs.sectionSub}>{t(lang, SECTION_I18N[idx].sub)}</Text>
            </View>
            <VideoGrid videos={section.videos} linkLabel={linkLabel} />
          </View>
        ))}

        <View style={{ height: 40 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const vs = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.cream },

  header: {
    backgroundColor: COLORS.white, padding: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06, shadowRadius: 4, elevation: 2,
  },
  pageTitle: { fontSize: 26, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary, marginBottom: 4 },
  pageSub: { fontSize: 13, fontFamily: FONTS.body, color: COLORS.textLight, marginBottom: 12 },
  countBadge: {
    backgroundColor: COLORS.primary, borderRadius: 20, alignSelf: 'flex-start',
    paddingHorizontal: 12, paddingVertical: 5,
  },
  countText: { fontSize: 12, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },

  sectionHeader: {
    backgroundColor: COLORS.white, padding: 16, marginTop: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04, shadowRadius: 3, elevation: 1,
  },
  sectionTitle: { fontSize: 15, fontFamily: FONTS.title, fontWeight: '700', color: COLORS.primary },
  sectionSub: { fontSize: 12, fontFamily: FONTS.body, color: COLORS.textLight, marginTop: 2 },

  grid: { paddingHorizontal: 8 },
  gridRow: { flexDirection: 'row' },

  card: {
    margin: 8, borderRadius: 12, backgroundColor: COLORS.white,
    overflow: 'hidden',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08, shadowRadius: 8, elevation: 3,
  },
  thumbContainer: { width: '100%', height: 100 },
  thumb: { width: '100%', height: 100 },
  playOverlay: {
    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
    alignItems: 'center', justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.15)',
  },
  playCircle: {
    width: 36, height: 36, borderRadius: 18,
    backgroundColor: 'rgba(31,61,43,0.8)',
    alignItems: 'center', justifyContent: 'center',
  },
  playIcon: { fontSize: 14, color: COLORS.white, marginLeft: 3 },
  cardInfo: { padding: 10 },
  cardTitle: {
    fontSize: 12, fontFamily: FONTS.body, fontWeight: '700',
    color: '#1a1a1a', lineHeight: 17,
  },
  cardLink: { fontSize: 11, fontFamily: FONTS.body, color: COLORS.primary, marginTop: 6 },
});

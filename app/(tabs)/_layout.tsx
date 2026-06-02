import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/constants/theme';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../lib/translations';

type IconName = React.ComponentProps<typeof Ionicons>['name'];

function tabIcon(name: IconName) {
  return ({ color, size }: { color: string; size: number }) => (
    <Ionicons name={name} color={color} size={size} />
  );
}

export default function TabsLayout() {
  // S'abonner à la langue active : force le re-render des libellés d'onglets au switch.
  const { lang } = useLang();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopColor: '#E8E4DD',
          borderTopWidth: 1,
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: t(lang, 'accueil'), tabBarIcon: tabIcon('home') }}
      />
      <Tabs.Screen
        name="poles"
        options={{ title: t(lang, 'poles'), tabBarIcon: tabIcon('grid') }}
      />
      <Tabs.Screen
        name="videotheque"
        options={{ title: t(lang, 'videotheque'), tabBarIcon: tabIcon('play-circle') }}
      />
      <Tabs.Screen
        name="evenements"
        options={{ title: t(lang, 'evenements'), tabBarIcon: tabIcon('calendar') }}
      />
      <Tabs.Screen
        name="favoris"
        options={{ title: t(lang, 'nav_favoris'), tabBarIcon: tabIcon('heart') }}
      />
      <Tabs.Screen
        name="missions"
        options={{ title: t(lang, 'missions'), tabBarIcon: tabIcon('flag') }}
      />
      <Tabs.Screen
        name="sponsors"
        options={{ title: t(lang, 'sponsors'), tabBarIcon: tabIcon('star') }}
      />
    </Tabs>
  );
}

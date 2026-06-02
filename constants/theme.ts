export const COLORS = {
  primary: '#1F3D2B',
  sage: '#6B8E6F',
  cream: '#F7F4ED',
  white: '#FFFFFF',
  text: '#1a1a1a',
  textLight: '#666666',
};

export const FONTS = {
  title: 'serif',
  body: 'System',
};

// Compat export pour les composants template Expo
export const Colors = {
  light: {
    text: COLORS.text,
    background: COLORS.cream,
    tint: COLORS.primary,
    icon: COLORS.textLight,
    tabIconDefault: '#9E9E9E',
    tabIconSelected: COLORS.primary,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: COLORS.white,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: COLORS.white,
  },
};

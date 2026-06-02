import React from 'react'
import { View, TouchableOpacity, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import { useLang } from '../context/LanguageContext'
import { Lang } from '../lib/translations'
import { COLORS, FONTS } from '../constants/theme'

// Drapeaux en PNG (assets/flags) — pas d'emoji : ne rendent pas sur Android (Huawei).
// FR = France, EN = Royaume-Uni (GB), ES = Espagne.
const LANGS: { code: Lang; label: string; flag: ImageSourcePropType }[] = [
  { code: 'fr', label: 'FR', flag: require('../assets/flags/fr.png') },
  { code: 'en', label: 'EN', flag: require('../assets/flags/gb.png') },
  { code: 'es', label: 'ES', flag: require('../assets/flags/es.png') },
]

export default function LanguageSelector() {
  const { lang, setLang } = useLang()
  return (
    <View style={s.row}>
      {LANGS.map(({ code, label, flag }) => (
        <TouchableOpacity
          key={code}
          style={[s.btn, lang === code && s.btnActive]}
          activeOpacity={0.75}
          onPress={() => setLang(code)}
        >
          <Image source={flag} style={s.flag} resizeMode="cover" />
          <Text style={[s.label, lang === code && s.labelActive]}>{label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const s = StyleSheet.create({
  row: { flexDirection: 'row', gap: 6 },
  btn: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    borderRadius: 8, paddingHorizontal: 10, paddingVertical: 6,
    backgroundColor: COLORS.cream,
    borderWidth: 1, borderColor: '#D5D1CB',
  },
  btnActive: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  flag: { width: 18, height: 12, borderRadius: 2 },
  label: { fontSize: 13, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.primary },
  labelActive: { color: COLORS.white },
})

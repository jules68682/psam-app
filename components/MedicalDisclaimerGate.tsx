import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, TouchableOpacity, Image,
  StyleSheet, ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as WebBrowser from 'expo-web-browser';
import { COLORS, FONTS } from '@/constants/theme';

const STORAGE_KEY = 'medical_disclaimer_accepted';
const PRIVACY_URL = 'https://prevention-sante-arthrose-main.fr/politique-de-confidentialite';

export default function MedicalDisclaimerGate({ children }: { children: React.ReactNode }) {
  const [accepted, setAccepted] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then(v => setAccepted(v === 'true'))
      .catch(() => setAccepted(false));
  }, []);

  const accept = () => {
    setAccepted(true);
    AsyncStorage.setItem(STORAGE_KEY, 'true').catch(() => null);
  };

  // Pendant la lecture d'AsyncStorage — évite un flash de l'avertissement.
  if (accepted === null) {
    return (
      <View style={s.loader}>
        <ActivityIndicator color={COLORS.primary} />
      </View>
    );
  }

  if (accepted) return <>{children}</>;

  return (
    <SafeAreaView style={s.safe}>
      <ScrollView contentContainerStyle={s.scroll} showsVerticalScrollIndicator={false}>
        <Image
          source={require('../assets/images/logo-psam.png')}
          style={s.logo}
          resizeMode="contain"
        />

        <Text style={s.title}>Information importante</Text>

        <Text style={s.body}>
          Cette application est fournie à titre informatif et éducatif uniquement.
          Elle ne constitue en aucun cas un avis médical, un diagnostic ou une
          recommandation thérapeutique.
        </Text>
        <Text style={s.body}>
          Les contenus présentés ne remplacent pas une consultation avec un
          professionnel de santé qualifié. En cas de douleurs, de symptômes
          ou de doutes concernant votre santé, consultez votre médecin ou
          un spécialiste de la main.
        </Text>
        <Text style={s.body}>
          L&apos;association PSAM — Prévention Santé Arthrose Main décline toute
          responsabilité quant aux décisions médicales prises sur la base
          des informations contenues dans cette application.
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => WebBrowser.openBrowserAsync(PRIVACY_URL)}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          accessibilityRole="link"
        >
          <Text style={s.link}>Consulter notre politique de confidentialité</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={s.footer}>
        <TouchableOpacity
          style={s.btn}
          activeOpacity={0.85}
          onPress={accept}
          accessibilityRole="button"
          accessibilityLabel="J'accepte et je continue"
        >
          <Text style={s.btnText}>J&apos;accepte et je continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  loader: { flex: 1, backgroundColor: COLORS.cream, alignItems: 'center', justifyContent: 'center' },
  safe: { flex: 1, backgroundColor: COLORS.cream },
  scroll: { padding: 28, paddingBottom: 24, alignItems: 'center' },
  logo: { width: 200, height: 70, marginTop: 12, marginBottom: 28 },
  title: {
    fontSize: 22, fontFamily: FONTS.title, fontWeight: '700',
    color: COLORS.primary, textAlign: 'center', marginBottom: 20,
  },
  body: {
    fontSize: 15, fontFamily: FONTS.body, color: COLORS.text,
    lineHeight: 22, marginBottom: 16, textAlign: 'left', alignSelf: 'stretch',
  },
  link: {
    fontSize: 14, fontFamily: FONTS.body, fontWeight: '600',
    color: COLORS.primary, textDecorationLine: 'underline',
    marginTop: 8, textAlign: 'center',
  },
  footer: {
    padding: 20, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#EEEBE4',
    backgroundColor: COLORS.cream,
  },
  btn: {
    backgroundColor: '#1F3D2B', borderRadius: 14,
    paddingVertical: 16, alignItems: 'center',
  },
  btnText: { fontSize: 16, fontFamily: FONTS.body, fontWeight: '700', color: COLORS.white },
});

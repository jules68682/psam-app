import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, StyleSheet } from 'react-native';
import { LanguageProvider } from '../context/LanguageContext';
import ChatBot from '../components/ChatBot';
import MedicalDisclaimerGate from '../components/MedicalDisclaimerGate';

export default function RootLayout() {
  return (
    <LanguageProvider>
      <SafeAreaProvider>
        <StatusBar style="dark" />
        <MedicalDisclaimerGate>
          <View style={s.container}>
            <Stack screenOptions={{ headerShown: false }} />
            <ChatBot />
          </View>
        </MedicalDisclaimerGate>
      </SafeAreaProvider>
    </LanguageProvider>
  );
}

const s = StyleSheet.create({
  container: { flex: 1 },
});

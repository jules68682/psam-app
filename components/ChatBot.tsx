import React, { useState, useRef, useEffect } from 'react'
import {
  View, Text, Modal, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, Animated, KeyboardAvoidingView, Platform,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { COLORS, FONTS } from '../constants/theme'
import { useLang } from '../context/LanguageContext'
import { t, Lang } from '../lib/translations'

type Message = { role: 'user' | 'assistant'; content: string }

const REPLY_LANG: Record<Lang, string> = {
  fr: 'Réponds toujours en français',
  en: 'Always reply in English',
  es: 'Responde siempre en español',
}

function buildSystemPrompt(lang: Lang): string {
  return `Tu es l'assistant d'information de l'association PSAM (Prévention Santé Arthrose Main). Ton rôle est d'informer sur l'arthrose de la main et d'orienter vers les professionnels de santé adaptés. Nous sommes là pour vous informer : tu n'accompagnes pas, ne suis pas et ne conseilles pas médicalement.

Contexte PSAM :
- Association loi 1901
- Fondateur : Dr Joël Rezzouk, chirurgien de la main, USMA Aquitaine
- Vice-présidente : Corinne Moulet, nutritionniste
- Directrice : Stéphanie Lasserre
- 6 outils : nutrition, hypnose, kinésithérapie, ergothérapie, chirurgie, beauté
- Application gratuite en développement
- Événements : La Main dans les Étoiles (11-12 juin 2026, Seignosse, 120€)
- Journée mondiale arthrose : 17 septembre 2027 Paris
- Contact : prevention.sante.arthrose.main@gmail.com
- Tél : 06 78 28 82 23

${REPLY_LANG[lang]}, de façon claire, sobre et professionnelle.
Tu te limites à informer et à orienter ; tu n'accompagnes pas, ne suis pas et ne donnes jamais de conseil médical personnalisé.
Tu ne poses jamais de diagnostic. Pour tout cas personnel (symptômes, douleurs, traitement), invite explicitement à consulter un professionnel de santé.
Limite tes réponses à 150 mots maximum.

Format des réponses : réponds uniquement en texte simple, en phrases et paragraphes. N'utilise AUCUN formatage Markdown : pas d'astérisques (* ou **), pas de dièses (#), pas de tirets de liste. Le texte doit être lisible tel quel dans l'application.`
}

function LoadingDots() {
  const anims = [
    useRef(new Animated.Value(0.3)).current,
    useRef(new Animated.Value(0.3)).current,
    useRef(new Animated.Value(0.3)).current,
  ]

  useEffect(() => {
    const pulse = (anim: Animated.Value, delay: number) =>
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(anim, { toValue: 1, duration: 300, useNativeDriver: true }),
          Animated.timing(anim, { toValue: 0.3, duration: 300, useNativeDriver: true }),
        ])
      )
    const a0 = pulse(anims[0], 0)
    const a1 = pulse(anims[1], 200)
    const a2 = pulse(anims[2], 400)
    a0.start(); a1.start(); a2.start()
    return () => { a0.stop(); a1.stop(); a2.stop() }
  }, [])

  return (
    <View style={c.loadingBubble}>
      {anims.map((anim, i) => (
        <Animated.Text key={i} style={[c.dot, { opacity: anim }]}>●</Animated.Text>
      ))}
    </View>
  )
}

export default function ChatBot() {
  const { lang } = useLang()
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t(lang, 'chatbot_welcome') },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const scrollViewRef = useRef<ScrollView>(null)

  // Update welcome message when lang changes (only if no conversation yet)
  useEffect(() => {
    if (messages.length === 1 && messages[0].role === 'assistant') {
      setMessages([{ role: 'assistant', content: t(lang, 'chatbot_welcome') }])
    }
  }, [lang])

  async function sendMessage(userMessage: string) {
    setIsLoading(true)
    const newMessages: Message[] = [...messages, { role: 'user', content: userMessage }]
    setMessages(newMessages)
    setInput('')

    try {
      const apiKey = process.env.EXPO_PUBLIC_ANTHROPIC_API_KEY ?? ''
      if (!apiKey) {
        console.error('[ChatBot] EXPO_PUBLIC_ANTHROPIC_API_KEY manquante (non injectée dans le bundle). Vérifier .env.local puis relancer avec `expo start -c`.')
      }

      // L'API Anthropic exige que le 1er message soit de rôle "user".
      // On retire les messages "assistant" en tête (ex: message de bienvenue),
      // sinon l'API renvoie une erreur 400 -> pas de content -> message générique.
      const apiMessages = newMessages
        .map(m => ({ role: m.role, content: m.content }))
        .filter((m, i, arr) => !(m.role === 'assistant' && arr.slice(0, i + 1).every(x => x.role === 'assistant')))

      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 30000)

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          // requis pour les appels directs depuis un client (web / navigateur)
          'anthropic-dangerous-direct-browser-access': 'true',
        },
        body: JSON.stringify({
          model: 'claude-haiku-4-5-20251001',
          max_tokens: 300,
          system: buildSystemPrompt(lang),
          messages: apiMessages,
        }),
        signal: controller.signal,
      })
      clearTimeout(timeout)

      const data = await response.json()

      if (!response.ok || data.type === 'error') {
        // L'API a répondu mais refuse la requête (auth, quota/crédit, surcharge,
        // erreur serveur…). Du point de vue utilisateur = service indisponible,
        // pas un problème de connexion. On logge le détail technique en console.
        console.error('[ChatBot] Réponse API en erreur:', response.status, JSON.stringify(data))
        setMessages([...newMessages, { role: 'assistant', content: t(lang, 'chatbot_unavailable') }])
        return
      }

      const reply = data.content?.[0]?.text ?? t(lang, 'chatbot_no_reply')
      setMessages([...newMessages, { role: 'assistant', content: reply }])
    } catch (err) {
      // Timeout (abort) => le service ne répond pas à temps = indisponible.
      // Tout autre échec de fetch = vrai problème de connexion réseau.
      const isTimeout = err instanceof Error && err.name === 'AbortError'
      console.error('[ChatBot] Échec envoi message:', err)
      setMessages([...newMessages, {
        role: 'assistant',
        content: t(lang, isTimeout ? 'chatbot_unavailable' : 'chatbot_error'),
      }])
    } finally {
      setIsLoading(false)
      setTimeout(() => scrollViewRef.current?.scrollToEnd({ animated: true }), 100)
    }
  }

  return (
    <>
      {/* Floating button */}
      <TouchableOpacity
        style={c.fab}
        activeOpacity={0.85}
        onPress={() => setOpen(true)}
      >
        <MaterialIcons name="chat-bubble-outline" size={26} color="#fff" />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={open} animationType="slide" onRequestClose={() => setOpen(false)}>
        <SafeAreaView style={c.safe} edges={['top']}>
          <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            {/* Header */}
            <View style={c.header}>
              <View style={{ flex: 1 }}>
                <Text style={c.headerTitle}>{t(lang, 'chatbot_title')}</Text>
                <Text style={c.headerSub}>{t(lang, 'chatbot_subtitle')}</Text>
              </View>
              <TouchableOpacity
                onPress={() => setOpen(false)}
                style={c.closeBtn}
                activeOpacity={0.7}
                hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                accessibilityRole="button"
                accessibilityLabel={t(lang, 'fermer')}
              >
                <Text style={c.closeText}>✕</Text>
              </TouchableOpacity>
            </View>

            {/* Messages */}
            <ScrollView
              ref={scrollViewRef}
              style={c.scrollView}
              contentContainerStyle={c.scrollContent}
              showsVerticalScrollIndicator={false}
              onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
            >
              {messages.map((msg, i) => (
                <View
                  key={i}
                  style={[
                    c.bubble,
                    msg.role === 'user' ? c.bubbleUser : c.bubbleAssistant,
                  ]}
                >
                  <Text style={[c.bubbleText, msg.role === 'user' ? c.bubbleTextUser : c.bubbleTextAssistant]}>
                    {msg.content}
                  </Text>
                </View>
              ))}
              {isLoading && <LoadingDots />}
            </ScrollView>

            {/* Footer */}
            <View style={c.footer}>
              <TextInput
                style={c.input}
                value={input}
                onChangeText={setInput}
                placeholder={t(lang, 'chatbot_placeholder')}
                placeholderTextColor="#A0998E"
                multiline
                returnKeyType="send"
                onSubmitEditing={() => {
                  if (!isLoading && input.trim()) sendMessage(input.trim())
                }}
              />
              <TouchableOpacity
                style={[c.sendBtn, (isLoading || !input.trim()) && c.sendBtnDisabled]}
                activeOpacity={0.8}
                disabled={isLoading || !input.trim()}
                onPress={() => sendMessage(input.trim())}
              >
                <Text style={c.sendIcon}>›</Text>
              </TouchableOpacity>
            </View>

            {/* Avertissement médical permanent */}
            <Text style={c.disclaimer}>{t(lang, 'chatbot_disclaimer')}</Text>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </Modal>
    </>
  )
}

const PRIMARY = '#1F3D2B'

const c = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    zIndex: 1000,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  safe: { flex: 1, backgroundColor: '#F7F4ED' },

  header: {
    backgroundColor: PRIMARY,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontFamily: FONTS.body,
    fontWeight: '700',
    color: '#fff',
  },
  headerSub: {
    fontSize: 12,
    fontFamily: FONTS.body,
    color: 'rgba(255,255,255,0.75)',
    marginTop: 2,
  },
  closeBtn: {
    width: 44,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeText: { fontSize: 18, color: '#fff', fontWeight: '700' },

  scrollView: { flex: 1, backgroundColor: '#F7F4ED' },
  scrollContent: { padding: 16, paddingBottom: 8 },

  bubble: {
    maxWidth: '80%',
    borderRadius: 18,
    padding: 12,
    marginBottom: 8,
  },
  bubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: PRIMARY,
    borderBottomRightRadius: 4,
  },
  bubbleAssistant: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  bubbleText: { fontSize: 15, fontFamily: FONTS.body, lineHeight: 22 },
  bubbleTextUser: { color: '#fff' },
  bubbleTextAssistant: { color: '#1a1a1a' },

  loadingBubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 18,
    borderBottomLeftRadius: 4,
    padding: 14,
    marginBottom: 8,
    gap: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  dot: { fontSize: 12, color: COLORS.textLight },

  footer: {
    backgroundColor: '#fff',
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    backgroundColor: '#F7F4ED',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 15,
    fontFamily: FONTS.body,
    color: '#1a1a1a',
    maxHeight: 100,
  },
  sendBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendBtnDisabled: { opacity: 0.4 },
  sendIcon: { fontSize: 24, color: '#fff', fontWeight: '700', lineHeight: 28 },

  disclaimer: {
    fontSize: 11,
    fontFamily: FONTS.body,
    color: COLORS.textLight,
    backgroundColor: '#fff',
    textAlign: 'center',
    paddingHorizontal: 16,
    paddingBottom: 10,
    lineHeight: 15,
  },
})

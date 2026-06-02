import { useMemo } from 'react';
import { useLang } from '@/context/LanguageContext';
import { getContent } from '@/lib/content.localized';

/** Contenu (pôles, articles, équipe…) dans la langue active. */
export function useContent() {
  const { lang } = useLang();
  return useMemo(() => getContent(lang), [lang]);
}

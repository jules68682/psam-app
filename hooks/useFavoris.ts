import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'favoris';

export function useFavoris() {
  const [favoris, setFavoris] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const raw = await AsyncStorage.getItem(KEY);
      setFavoris(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setFavoris([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const persist = (list: string[]) => {
    setFavoris(list);
    AsyncStorage.setItem(KEY, JSON.stringify(list)).catch(() => null);
  };

  const addFavori = useCallback((slug: string) => {
    setFavoris(prev => {
      if (prev.includes(slug)) return prev;
      const next = [...prev, slug];
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => null);
      return next;
    });
  }, []);

  const removeFavori = useCallback((slug: string) => {
    setFavoris(prev => {
      const next = prev.filter(s => s !== slug);
      AsyncStorage.setItem(KEY, JSON.stringify(next)).catch(() => null);
      return next;
    });
  }, []);

  const isFavori = useCallback((slug: string) => favoris.includes(slug), [favoris]);

  const toggleFavori = useCallback((slug: string) => {
    if (favoris.includes(slug)) { removeFavori(slug); return false; }
    addFavori(slug); return true;
  }, [favoris, addFavori, removeFavori]);

  return { favoris, loading, refresh, addFavori, removeFavori, isFavori, toggleFavori };
}

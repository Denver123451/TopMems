'use client';

import { useEffect, useState, useCallback } from 'react';
import { IMeme } from '../types/types';
import { list } from '../utils/list';

const STORAGE_KEY = 'memes';

export function useMemes() {
  const [memes, setMemes] = useState<IMeme[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setMemes(JSON.parse(stored));
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        initFresh();
      }
    } else {
      initFresh();
    }
  }, []);

  const initFresh = useCallback(() => {
    const initial = list.map((m) => ({
      ...m,
      likes: Math.floor(Math.random() * 100),
      image: window.location.origin + m.image,
    }));
    setMemes(initial);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
  }, []);

  const updateMemes = useCallback((updater: (old: IMeme[]) => IMeme[]) => {
    setMemes((old) => {
      const updated = updater(old);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  return { memes, updateMemes };
}

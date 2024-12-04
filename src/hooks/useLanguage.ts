import { create } from 'zustand';
import { translations } from '@/lib/i18n/translations';

type Language = 'en' | 'zh';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
  t: (key: string) => {
    const { language } = get();
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    
    return value || key;
  },
}));
import { useState, useEffect } from 'react';

export const useTranslations = (language: string) => {
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const module = await import(`../locales/${language}.json`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // Fallback to English if the requested language pack fails to load
        const fallbackModule = await import('../locales/en.json');
        setTranslations(fallbackModule.default);
      }
    };

    loadTranslations();
  }, [language]);

  return translations;
};


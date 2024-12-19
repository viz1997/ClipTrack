import { getLangFromUrl } from './utils';
import type { Lang } from './config';
import { getTranslations } from './translations';

export function useI18n(url: URL) {
  const lang = getLangFromUrl(url) as Lang;
  const t = (key: Parameters<typeof getTranslations>[1]) => {
    const translations = getTranslations(lang);
    return translations[key];
  };

  return {
    lang,
    t,
  };
}
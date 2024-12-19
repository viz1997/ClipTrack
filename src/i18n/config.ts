// Configuration for i18n
export const defaultLang = 'en';

export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;
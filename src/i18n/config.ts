// Configuration for i18n
export const defaultLang = 'en';

export const languages = {
  'en': 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  'ja': '日本語',
} as const;

export type Lang = keyof typeof languages;
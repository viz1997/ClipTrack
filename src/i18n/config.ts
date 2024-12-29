// Configuration for i18n
export const defaultLang = 'en';

export const languages = {
  'en': 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
  'ja': '日本語',
  'de': 'Deutsch', // 德语
  'fr': 'Français', // 法语
  'ko': '한국어', // 韩语
  'pl': 'Polski', // 波兰语
  'ru': 'Русский', // 俄语
  'pt': 'Português', // 葡萄牙语
} as const;

export type Lang = keyof typeof languages;
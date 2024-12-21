import en from './en';
import zh_cn from './zh-cn';
import zh_tw from './zh-tw';
import ja from './ja';
import type { Lang } from '../config';

export const translations = {
  "en": en,
  "zh-cn": zh_cn,
  "zh-tw": zh_tw,

  "ja": ja,
} as const;

export type TranslationKey = keyof typeof en;

export function getTranslations(lang: Lang) {
  return translations[lang];
}
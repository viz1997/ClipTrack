import en from './en';
import zh from './zh';
import ja from './ja';
import type { Lang } from '../config';

export const translations = {
  en,
  zh,
  ja,
} as const;

export type TranslationKey = keyof typeof en;

export function getTranslations(lang: Lang) {
  return translations[lang];
}
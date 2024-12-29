import en from './en';
import zh_cn from './zh-cn';
import zh_tw from './zh-tw';
import ja from './ja';
import ko from './ko';
import ru from './ru';
import de from './de';
import pt from './pt';
import pl from './pl';


import type { Lang } from '../config';

export const translations = {
  "en": en,
  "zh-cn": zh_cn,
  "zh-tw": zh_tw,
  "ja": ja,
  "ko": ko,
  "ru": ru,
  "de": de,
  "pt": pt,
  "pl": pl,

} as const;

export type TranslationKey = keyof typeof en;

export function getTranslations(lang: Lang) {
  return translations[lang];
}
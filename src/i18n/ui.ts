import { translations } from './translations';
import type { Lang } from './config';

export const ui = translations;

export const defaultLang = 'en' as const;
export type { Lang };
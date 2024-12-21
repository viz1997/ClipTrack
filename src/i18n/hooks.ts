import { getLangFromUrl } from './utils';
import type { Lang } from './config';
import { getTranslations } from './translations';
import type { TranslationKey } from './translations'; // 导入 TranslationKey 类型

export function useI18n(url: URL) {
  const lang = getLangFromUrl(url) as Lang;

  // 修改 t 函数的参数类型为 TranslationKey
  const t = (key: TranslationKey) => {
    const translations = getTranslations(lang);
    return translations[key];
  };

  return {
    lang,
    t,
  };
}
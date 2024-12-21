import { ui, defaultLang, type Lang } from './ui';

// 从 URL 中提取语言
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang.toLowerCase() in ui) return lang.toLowerCase() as Lang;
  return defaultLang;
}

// 翻译函数
export function useTranslations(lang: Lang) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: any = ui[lang];

    // 遍历嵌套键
    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) break;
    }

    // 如果当前语言中找不到，回退到默认语言
    if (value === undefined && lang !== defaultLang) {
      value = ui[defaultLang];
      for (const k of keys) {
        value = value?.[k];
        if (value === undefined) break;
      }
    }

    // 如果仍然找不到，记录警告并返回键本身
    if (value === undefined) {
      console.warn(`Translation key "${key}" not found in language "${lang}" or fallback language "${defaultLang}".`);
      return key;
    }

    return value;
  };
}

// 从 URL 中提取路由
export function getRouteFromUrl(url: URL): string {
  return url.pathname.replace(/^\/[^/]+/, '') || '/';
}
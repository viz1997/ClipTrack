export const defaultLang = 'en';

export const languages = {
  en: 'English',
  zh: '中文',
  ja: '日本語',
} as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.features': 'Features',
    'nav.faq': 'FAQ',
    'cta.getStarted': 'Get Started',
    'welcome.title': 'Welcome to Astro',
    'welcome.description': 'To get started, open the directory',
    'welcome.challenge': 'Code Challenge:',
    'welcome.message': 'Tweak the "Welcome to Astro" message above.',
  },
  zh: {
    'nav.home': '首页',
    'nav.about': '关于',
    'nav.services': '服务',
    'nav.features': '功能',
    'nav.faq': '常见问题',
    'cta.getStarted': '开始使用',
    'welcome.title': '欢迎使用 Astro',
    'welcome.description': '开始使用，请打开目录',
    'welcome.challenge': '代码挑战：',
    'welcome.message': '修改上面的"欢迎使用 Astro"消息。',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.about': '概要',
    'nav.services': 'サービス',
    'nav.features': '機能',
    'nav.faq': 'よくある質問',
    'cta.getStarted': '始める',
    'welcome.title': 'Astroへようこそ',
    'welcome.description': '始めるには、ディレクトリを開いてください',
    'welcome.challenge': 'コードチャレンジ：',
    'welcome.message': '上記の"Astroへようこそ"メッセージを変更してください。',
  },
} as const;
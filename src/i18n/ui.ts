import visibilityDilemma from "../assets/images/visibility-dilemma.png";
import engagementGap from "../assets/images/engagement-gap.png";
import resultsInHibernation from "../assets/images/results-in-hibernation.gif";
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
 'nav.howitworks': 'How It Works',
  'nav.features': 'Features',
  'nav.faq': 'FAQ',
  'nav.getStarted': 'Get Started',

  'hero.title': 'Manage Your Clipboard Like a Pro',
  'hero.description': 'ClipTrack is the intelligent clipboard manager that helps you boost your productivity and organize your digital life.',

  'features.title': 'Why Choose ',


  'say.title': 'What Our Clients Say',
  'say1.name': 'Emily Brown',
  'say1.job': 'Content Creator',
  'say1.description': 'As a content creator, I need to manage a lot of clipboard content quickly. ClipTrack allows me to easily search, organize, and manage my clipboard content!',

  'say2.name': 'Sophia Chen',
  'say2.job': 'Freelance Designer',
  'say2.description': "I love how ClipTrack integrates seamlessly into my workflow. The sidebar mode doesn't obstruct my main content, and the ability to quickly search and manage clipboard items is a huge time-saver. Highly recommended!",
  
  'say3.name': 'John Doe',
  'say3.job': 'Software Developer',
  'say3.description': "ClipTrack's ability to preserve original web links and include accurate timestamps is a lifesaver. It helps me track and manage my clipboard history with precision!",
 
  'ready.title': 'Ready to elevate your copy-paste experience?',
'ready.description': 'Start using ClipTrack now and experience the convenience of an intelligent clipboard!',

'footer.title': 'Designed to enhance the copy-paste experience for browser users',

  'footer.product': 'Product',
  'footer.support': 'support',
  'footer.love': 'Love❤️',


  services: [
    {
      title: "Intelligent Clipboard",
      features: [
      "Automatically saves the text, links, and images you copy",
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
    {
      title: "Quick Search",
features: [
"Easily find and manage all your saved content",
],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
    },
    {
      title: "Source Link Preservation",
features: [
"Automatically records the source webpage of the content for easy traceability",
],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
    },
   
   
  ],

  solutions: [
    {
      title: "Floating Window & Sidebar",
      painPoint:
        "The floating window mode allows for easy adjustment of position, offering flexibility and convenience.",
      agitatepainPoint:
        "The sidebar mode does not obstruct the main content, providing intuitive operation.",
      solution:
        "Choose your preferred method.",
      img: visibilityDilemma,
    },
    {
      title: "Easy to Operate",
      painPoint:
        "Intuitive Display, Convenient Operation.",
      agitatepainPoint:
        "Help you quickly search, operate, and manage clipboard content.",
      solution:
        "Choose your preferred method.",
      img: engagementGap,
    },
    {
      title: "Seamless and Efficient Recording",
      painPoint:
        "No additional actions required, seamless recording ensures a smooth experience for you.",
      agitatepainPoint:
        "Original web links are preserved, allowing you to quickly locate the source and enhance productivity.",
      solution:
        "Accurate timestamps are included for easy tracking and management.",
      img: resultsInHibernation,
    },
  ],
  faqs: [
    {
      question: "What is ClipTrack?",
      answer:
      "ClipTrack is an intelligent clipboard management tool designed to help users enhance productivity and organize their digital lives. It allows users to easily search, organize, and manage clipboard content, supports floating window and sidebar modes, offers seamless recording functionality, and retains original web page links and timestamps.",
      },
      {
      question: "Which browsers does ClipTrack support?",
      answer:
      "ClipTrack supports Chrome and Edge browsers, with plans to support more browsers in the future. We are committed to providing users with a seamless, cross-platform clipboard management experience.",
      },
      {
      question: "Is my clipboard content secure?",
      answer:
      "ClipTrack places a high priority on your privacy and data security. All data is stored locally in your browser, and deleting the ClipTrack extension or manually clearing browser data will erase all your data. Additionally, we strictly adhere to relevant laws and regulations to ensure the security of your data.",
      },
      {
      question: "Which types of content does ClipTrack support for copying?",
      answer:
      "ClipTrack currently supports text and web page copy recording. We will continue to expand support for more types to meet users' diverse needs.",
      },
      {
      question: "Does ClipTrack support multi-device synchronization?",
      answer:
      "Currently, ClipTrack does not support multi-device synchronization, but we are developing this feature and it is expected to be released in future versions.",
      }
   
  ],
  footerSupport: [
   { itemText: "Privacy", itemLink: "/privacy" },
    { itemText: "Terms", itemLink: "/terms" },
    { itemText: "Contact", itemLink: "#" },
  ],
  footerProduct: [
    { itemText: "Home", itemLink: "#" },
    { itemText: "Features", itemLink: "#Features" },
    { itemText: "How It Works", itemLink: "#" },
    { itemText: "FAQs", itemLink: "#" },

  ],
  footerLove: [
    { itemText: "联系我们", itemLink: "#" },
  ],

  },
  zh: {
   'nav.home': '首页',
  'nav.about': '关于',
  'nav.howitworks': '如何使用',
  'nav.features': '功能',
  'nav.faq': '常见问题',
  'nav.getStarted': '立即使用',
  
  'hero.title': '像专业人士一样管理你的剪贴板',
  'hero.description': 'ClipTrack 是一款智能剪贴板管理器，可帮助您提高工作效率并组织您的数字生活',

  'features.title': '为什么选择',
  'features1.subtitle': '智能剪贴',
  'features1.description': '自动保存您复制的文本、链接和图片',
  'features2.subtitle': '快速搜索',
  'features2.description': '轻松查找和管理您保存的所有内容',
  'features3.subtitle': '源链接保存',
  'features3.description': '自动记录内容的来源网页，方便回溯',

  'say.title': '听听我们客户的评价',
  'say1.name': 'Emily Brown',
  'say1.job': '内容创作者',
  'say1.description': '作为一名内容创作者，我需要快速管理大量剪贴板内容。ClipTrack 让我能够轻松搜索、整理和管理剪贴板内容！',

  'say2.name': 'Sophia Chen',
  'say2.job': '自由设计师',
  'say2.description': '我喜欢 ClipTrack 如何无缝融入我的工作流程。侧边栏模式不会遮挡我的主要内容，而且能够快速搜索和管理剪贴板项目，极大地节省了时间。强烈推荐！',
  
  'say3.name': 'John Doe',
  'say3.job': '软件开发人员',
  'say3.description': 'ClipTrack 保留原始网页链接并包含准确时间戳的功能真是太棒了。它帮助我精确跟踪和管理剪贴板历史！',

  'about1.title': '悬浮窗口和侧边栏',
  'about1.description': 'ClipTrack 会自动记录您复制到剪贴板的内容，以便您随时访问',

  'about2.title': '剪贴板标签',
  'about2.description': '为剪贴板内容添加标签，以便您可以根据需要快速查找',

  'about3.title': '剪贴板搜索',
  'about3.description': '使用强大的搜索功能，快速找到您需要的剪贴板内容',

 
  'faq.title': '常见问题',
  'faq1.question': 'ClipTrack 是什么？',
  'faq1.answer': 'ClipTrack 是一款智能剪贴板管理工具，旨在帮助用户提升生产力并组织数字生活。它允许用户轻松搜索、整理和管理剪贴板内容，支持悬浮窗口和侧边栏模式，提供无缝记录功能，并保留原始网页链接和时间戳。',

  'faq2.question': 'ClipTrack 支持哪些浏览器？',
  'faq2.answer': 'ClipTrack支持所有主流浏览器，包括但不限于Chrome、Firefox、Safari、Edge等。我们致力于为用户提供跨平台、无缝的剪贴板管理体验。',

  'faq3.question': '我的剪贴内容安全吗？',
  'faq3.answer': 'ClipTrack非常重视您的隐私和数据安全。我们采用端到端加密技术，确保您的剪贴内容在传输和存储过程中得到严格保护。同时，我们严格遵守相关法律法规，确保您的数据安全。',

  'faq4.question': '如何使用 ClipTrack 的悬浮窗口模式？',
  'faq4.answer': '悬浮窗口模式允许用户将剪贴板管理器固定在屏幕的任意位置，方便随时访问。只需在设置中启用悬浮窗口模式，即可调整窗口位置和大小，享受灵活的操作体验。',

  'faq5.question': 'ClipTrack 是否支持多设备同步？',
  'faq5.answer': '目前 ClipTrack 不支持多设备同步功能，但我们正在开发此功能，预计将在未来的版本中推出。',


  'ready.title': '准备好提升复制粘贴体验了吗？',
  'ready.description': '立即立即使用ClipTrack, 体验智能剪贴板带来的便利!',
  
  'footer.title': '专为浏览器使用者提升复制粘贴体验',

  'footer.product': '产品',
  'footer.support': '支持',
  'footer.love': '支持产品❤️',

  services: [
    {
      title: "智能剪贴",
      features: [
        "自动保存您复制的文本、链接和图片",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
    {
      title: "快速搜索",
      features: [
        "轻松查找和管理您保存的所有内容",
       
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
    },
    {
      title: "源链接保存",
      features: [
        "自动记录内容的来源网页，方便回溯",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
    },
   
   
  ],
  
  solutions: [
    {
      title: "悬浮窗和侧边栏",
      painPoint:
        "悬浮窗模式允许轻松调整位置，提供灵活性和便利性。",
      agitatepainPoint:
        "侧边栏模式不遮挡主要内容，操作直观。",
      solution:
        "选择您的首选方法。",
      img: visibilityDilemma,
    },
    {
      title: "使用简单",
      painPoint:
        "直观显示，操作方便。",
      agitatepainPoint:
        "帮助您快速搜索、操作和管理剪贴板内容。",
      solution:
        "选择您的首选方法。",
      img: engagementGap,
    },
    {
      title: "无感高效记录",
      painPoint:
        "无需额外操作，无缝录制可确保为您提供流畅的体验。",
      agitatepainPoint:
        "保留原始 Web 链接，使您能够快速找到源并提高工作效率。",
      solution:
        "包含准确的时间戳，便于跟踪和管理。",
      img: resultsInHibernation,
    },
  ],
  
  faqs: [
    {
      question: "ClipTrack是什么？",
      answer:
        "ClipTrack 是一款智能剪贴板管理工具，旨在帮助用户提升生产力并组织数字生活。它允许用户轻松搜索、整理和管理剪贴板内容，支持悬浮窗口和侧边栏模式，提供无缝记录功能，并保留原始网页链接和时间戳。",
    },
    {
      question: "ClipTrack支持哪些浏览器？",
      answer:
        "ClipTrack支持Chrome、Edge浏览器，将支持更多浏览器。我们致力于为用户提供跨平台、无缝的剪贴板管理体验。",
    },
    {
      question: "我的剪贴内容安全吗？",
      answer:
        "ClipTrack非常重视您的隐私和数据安全。所有的数据保存在本地浏览器，删除ClipTrack插件或者手动清除浏览器数据都会清除所有数据。同时，我们严格遵守相关法律法规，确保您的数据安全。",
    },
   
    {
      question: "ClipTrack支持哪些复制类型？",
      answer:
      "ClipTrack目前支持文本和网页复制记录。我们将继续扩展支持的类型，以满足用户多样化的需求。"
      },
    {
      question: "ClipTrack 是否支持多设备同步？",
      answer:
        "目前 ClipTrack 不支持多设备同步功能，但我们正在开发此功能，预计将在未来的版本中推出。",
    },
   
  ],
  footerSupport: [
    { itemText: "隐私政策", itemLink: "/privacy" },
    { itemText: "服务条款", itemLink: "/terms" },
    { itemText: "联系我们", itemLink: "#" },
  ],
  footerProduct: [
    { itemText: "首页", itemLink: "#" },
    { itemText: "功能", itemLink: "#Features" },
    { itemText: "如何使用", itemLink: "#" },
    { itemText: "常见问题", itemLink: "#" },

  ],
  footerLove: [
    { itemText: "联系我们", itemLink: "#" },
  ],

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
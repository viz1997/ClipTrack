import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 導入所有需要的圖像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: '首頁',
    about: '關於',
    howitworks: '如何使用',
    features: '功能',
    faq: '常見問題',
    getStarted: '立即使用',
  },
  
  hero: {
    title: '像專業人士一樣管理你的剪貼簿',
    description: 'ClipTrack 是一款智能剪貼簿管理器，可幫助您提高工作效率並組織您的數字生活',
  },

  testimonials: {
    title: '聽聽我們客戶的評價',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: '內容創作者',
        content: '作為一名內容創作者，我需要快速管理大量剪貼簿內容。ClipTrack 讓我能夠輕鬆搜索、整理和管理剪貼簿內容！',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: '自由設計師',
        content: '我喜歡 ClipTrack 如何無縫融入我的工作流程。側邊欄模式不會遮擋我的主要內容，而且能夠快速搜索和管理剪貼簿項目，極大地節省了時間。強烈推薦！',
      },
      {
        image: image3,
        name: 'John Doe',
        job: '軟件開發人員',
        content: 'ClipTrack 保留原始網頁鏈接並包含準確時間戳的功能真是太棒了。它幫助我精確跟踪和管理剪貼簿歷史！',
      },
    ],
  },

  ready: {
    title: '準備好提升複製粘貼體驗了嗎？',
    description: '立即使用ClipTrack, 體驗智能剪貼簿帶來的便利!',
  },
  
  footer: {
    title: '專為瀏覽器使用者提升複製粘貼體驗',
    privacy: '隱私政策',
    terms: '服務條款',
    contact: '聯繫我們',
    feedback: '反饋建議',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: '產品',
    support: '支持',
    love: '支持產品❤️',
  },

  features: {
    title: '為什麼選擇',
    items: [
      {
        subtitle: "智能剪貼",
        content: [
          "自動保存您複製的文本、鏈接和圖片",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
      {
        subtitle: "快速搜索",
        content: [
          "輕鬆查找和管理您保存的所有內容",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "源鏈接保存",
        content: [
          "自動記錄內容的來源網頁，方便回溯",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
    },
    ],
  },

  solutions: [
    {
      title: "懸浮窗和側邊欄",
      painPoint:
        "懸浮窗模式允許輕鬆調整位置，提供靈活性和便利性。",
      agitatepainPoint:
        "側邊欄模式不遮擋主要內容，操作直觀。",
      solution:
        "選擇您的首選方法。",
      img: visibilityDilemma,
    },
    {
      title: "使用簡單",
      painPoint:
        "直觀顯示，操作方便。",
      agitatepainPoint:
        "幫助您快速搜索、操作和管理剪貼簿內容。",
      solution:
        "選擇您的首選方法。",
      img: engagementGap,
    },
    {
      title: "無感高效記錄",
      painPoint:
        "無需額外操作，無縫錄製可確保為您提供流暢的體驗。",
      agitatepainPoint:
        "保留原始 Web 鏈接，使您能夠快速找到源並提高工作效率。",
      solution:
        "包含準確的時間戳，便於跟踪和管理。",
      img: resultsInHibernation,
    },
  ],
  
  faqs: {
    title: '常見問題',
    questions: [
      {
        question: "ClipTrack是什麼？",
        answer:
          "ClipTrack 是一款智能剪貼簿管理工具，旨在幫助用戶提升生產力並組織數字生活。它允許用戶輕鬆搜索、整理和管理剪貼簿內容，支持懸浮窗口和側邊欄模式，提供無縫記錄功能，並保留原始網頁鏈接和時間戳。",
      },
      {
        question: "ClipTrack支持哪些瀏覽器？",
        answer:
          "ClipTrack支持Chrome、Edge瀏覽器，將支持更多瀏覽器。我們致力於為用戶提供跨平台、無縫的剪貼簿管理體驗。",
      },
      {
        question: "我的剪貼內容安全嗎？",
        answer:
          "ClipTrack非常重視您的隱私和數據安全。所有的數據保存在本地瀏覽器，刪除ClipTrack插件或者手動清除瀏覽器數據都會清除所有數據。同時，我們嚴格遵守相關法律法規，確保您的數據安全。",
      },
      {
        question: "ClipTrack支持哪些複製類型？",
        answer:
          "ClipTrack目前支持文本和網頁複製記錄。我們將繼續擴展支持的類型，以滿足用戶多樣化的需求。",
      },
      {
        question: "ClipTrack 是否支持多設備同步？",
        answer:
          "目前 ClipTrack 不支持多設備同步功能，但我們正在開發此功能，預計將在未來的版本中推出。",
      },
    ],
  },

  footerSupport: [
    { itemText: "隱私政策", itemLink: "/zh-tw/privacy" },
    { itemText: "服務條款", itemLink: "/zh-tw/terms" },
  
  ],
  footerProduct: [
    { itemText: "首頁", itemLink: "#" },
    { itemText: "功能", itemLink: "#features" },
    { itemText: "常見問題", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "聯繫我們", itemLink: "#" },
  ],

  privacyPolicy: {
    title: "隱私說明",
    lastUpdated: "最後更新日期",
    introduction: {
      title: "1. 引言",
      content: "歡迎使用 ClipTrack 剪貼簿管理助手插件！我們非常重視您的隱私，並致力於保護您的個人信息。本隱私說明解釋了我們如何收集、使用和保護您的信息。",
    },
    informationWeCollect: {
      title: "2. 我們收集的信息",
      content: "ClipTrack 插件是一款瀏覽器擴展，旨在提供高效的剪貼簿管理功能。我們僅收集實現該功能所需的最低限度的信息，所有數據都存儲在您的本地瀏覽器中，不會上傳到任何服務器。具體包括：",
      items: [
        {
          title: "剪貼簿內容",
          description: "為了提供剪貼簿管理功能，我們需要訪問和存儲您複製到剪貼簿的內容。這些內容僅存儲在您的本地瀏覽器中，不會上傳到我們的服務器。",
        },
        {
          title: "使用數據",
          description: "為了改進產品和服務，我們可能會收集匿名的使用數據，例如您使用插件的頻率、功能使用情況等。這些數據不會包含任何個人身份信息，也不會上傳到我們的服務器。",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. 我們如何使用您的信息",
      content: "我們收集的信息將用於以下目的：",
      items: [
        {
          title: "提供和改進插件功能",
          description: "我們使用您的剪貼簿內容來實現插件的核心功能，並使用匿名使用數據來改進產品和服務。",
        },
        {
          title: "個性化體驗",
          description: "我們可能會使用您的使用數據來為您提供更加個性化的體驗。",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. 我們如何保護您的信息",
      content: "我們採取以下措施來保護您的信息安全：",
      items: [
        {
          title: "本地存儲",
          description: "您的剪貼簿內容和使用數據僅存儲在您的本地瀏覽器中，不會上傳到任何服務器。",
        },
        {
          title: "數據加密",
          description: "我們使用加密技術來保護您的信息在傳輸和存儲過程中的安全。",
        },
        {
          title: "訪問控制",
          description: "我們限制對您的信息的訪問權限，只有需要處理這些信息的人員才能訪問。",
        },
      ],
    },
    yourRights: {
      title: "5. 您的權利",
      content: "您有權訪問、更正和刪除我們收集的您的信息。您可以通過以下方式行使您的權利：",
      items: [
        {
          title: "訪問和更正",
          description: "您可以隨時訪問和更正存儲在您本地瀏覽器中的剪貼簿內容。",
        },
        {
          title: "刪除",
          description: "您可以隨時刪除存儲在您本地瀏覽器中的剪貼簿內容，以及清除插件的緩存數據。卸載插件或清除瀏覽器數據也會自動刪除所有相關信息。",
        },
      ],
    },
    policyChanges: {
      title: "6. 隱私政策的變更",
      content: "我們可能會不時更新本隱私說明。如果我們對隱私政策做出重大變更，我們將通過適當的方式通知您，例如在插件中顯示通知或發送電子郵件。",
    },
    contactUs: {
      title: "7. 聯繫我們",
      content: "如果您對本隱私說明有任何疑問，請通過以下方式與我們聯繫：",
      email: "1943875844@qq.com",
    },
  },

  termsOfService: {
    title: "服務條款",
    lastUpdated: "最後更新日期",
    introduction: {
      title: "1. 接受條款",
      content: "使用 ClipTrack 剪貼簿管理助手插件即表示您同意接受本服務條款的約束。如果您不同意本服務條款，請勿使用本插件。",
    },
    license: {
      title: "2. 使用許可",
      content: "我們授予您有限、非獨家、不可轉讓的許可，允許您在您的個人設備上安裝和使用 ClipTrack 插件，僅用於個人用途。",
    },
    userResponsibilities: {
      title: "3. 用戶責任",
      content: "您同意：",
      items: [
        "僅將 ClipTrack 插件用於合法目的。",
        "不使用 ClipTrack 插件侵犯他人的知識產權或其他權利。",
        "不干擾或破壞 ClipTrack 插件的正常運行。",
      ],
    },
    disclaimer: {
      title: "4. 免責聲明",
      content: "ClipTrack 插件按“現狀”提供，不提供任何明示或暗示的保證，包括但不限於適銷性、特定用途適用性和非侵權性的保證。",
    },
    limitationOfLiability: {
      title: "5. 責任限制",
      content: "在任何情況下，我們均不對您或任何第三方因使用或無法使用 ClipTrack 插件而遭受的任何直接、間接、附帶、特殊或衍生性損害承擔責任。",
    },
    changesToTerms: {
      title: "6. 服務條款的變更",
      content: "我們可能會不時更新本服務條款。如果我們對服務條款做出重大變更，我們將通過適當的方式通知您，例如在插件中顯示通知或發送電子郵件。",
    },
    governingLaw: {
      title: "7. 適用法律",
      content: "本服務條款受中華人民共和國法律管轄。",
    },
    disputeResolution: {
      title: "8. 爭議解決",
      content: "因本服務條款引起的或與本服務條款相關的任何爭議應通過友好協商解決。如果協商不成，雙方同意將爭議提交中國國際經濟貿易仲裁委員會仲裁。",
    },
    contactUs: {
      title: "9. 聯繫我們",
      content: "如果您對本服務條款有任何疑問，請通過以下方式與我們聯繫：",
      email: "1943875844@qq.com",
    },
  },
} as const;
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {

  nav: {
    home: '首页',
    about: '关于',
    howitworks: '如何使用',
    features: '功能',
    faq: '常见问题',
    getStarted: '立即使用',
  },
  
  hero: {
    title: '像专业人士一样管理你的剪贴板',
    description: 'ClipTrack 是一款智能剪贴板管理器，可帮助您提高工作效率并组织您的数字生活',
  },



  testimonials: {
    title: '听听我们客户的评价',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: '内容创作者',
        content: '作为一名内容创作者，我需要快速管理大量剪贴板内容。ClipTrack 让我能够轻松搜索、整理和管理剪贴板内容！',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: '自由设计师',
        content: '我喜欢 ClipTrack 如何无缝融入我的工作流程。侧边栏模式不会遮挡我的主要内容，而且能够快速搜索和管理剪贴板项目，极大地节省了时间。强烈推荐！',
      },
      {
        image: image3,
        name: 'John Doe',
        job: '软件开发人员',
        content: 'ClipTrack 保留原始网页链接并包含准确时间戳的功能真是太棒了。它帮助我精确跟踪和管理剪贴板历史！',
      },
    ],
  },

 

 
  

  ready: {
    title: '准备好提升复制粘贴体验了吗？',
    description: '立即使用ClipTrack, 体验智能剪贴板带来的便利!',
  },
  
  footer: {
    title: '专为浏览器使用者提升复制粘贴体验',
    privacy: '隐私政策',
    terms: '服务条款',
    contact: '联系我们',
    feedback: '反馈建议',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: '产品',
    support: '支持',
    love: '支持产品❤️',
  },

  features: {
    title: '为什么选择',
    items: [
    {
      subtitle: "智能剪贴",
      content: [
        "自动保存您复制的文本、链接和图片",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
    {
      subtitle: "快速搜索",
      content: [
        "轻松查找和管理您保存的所有内容",
       
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
    },
    {
      subtitle: "源链接保存",
      content: [
        "自动记录内容的来源网页，方便回溯",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
    },
   
   
  ],
},
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
  
  faqs: {
    title: '常见问题',
    questions: [
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
  },
  footerSupport: [
    { itemText: "隐私政策", itemLink: "/zh/privacy" },
    { itemText: "服务条款", itemLink: "/zh/terms" },
  
  ],
  footerProduct: [
    { itemText: "首页", itemLink: "#" },
    { itemText: "功能", itemLink: "#features" },
    { itemText: "常见问题", itemLink: "#faq" },

  ],
  footerLove: [
    { itemText: "联系我们", itemLink: "#" },
  ],

  privacyPolicy: {
    title: "隐私说明",
    lastUpdated: "最后更新日期",
    introduction: {
      title: "1. 引言",
      content: "欢迎使用 ClipTrack 剪贴板管理助手插件！我们非常重视您的隐私，并致力于保护您的个人信息。本隐私说明解释了我们如何收集、使用和保护您的信息。",
    },
    informationWeCollect: {
      title: "2. 我们收集的信息",
      content: "ClipTrack 插件是一款浏览器扩展，旨在提供高效的剪贴板管理功能。我们仅收集实现该功能所需的最低限度的信息，所有数据都存储在您的本地浏览器中，不会上传到任何服务器。具体包括：",
      items: [
        {
          title: "剪贴板内容",
          description: "为了提供剪贴板管理功能，我们需要访问和存储您复制到剪贴板的内容。这些内容仅存储在您的本地浏览器中，不会上传到我们的服务器。",
        },
        {
          title: "使用数据",
          description: "为了改进产品和服务，我们可能会收集匿名的使用数据，例如您使用插件的频率、功能使用情况等。这些数据不会包含任何个人身份信息，也不会上传到我们的服务器。",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. 我们如何使用您的信息",
      content: "我们收集的信息将用于以下目的：",
      items: [
        {
          title: "提供和改进插件功能",
          description: "我们使用您的剪贴板内容来实现插件的核心功能，并使用匿名使用数据来改进产品和服务。",
        },
        {
          title: "个性化体验",
          description: "我们可能会使用您的使用数据来为您提供更加个性化的体验。",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. 我们如何保护您的信息",
      content: "我们采取以下措施来保护您的信息安全：",
      items: [
        {
          title: "本地存储",
          description: "您的剪贴板内容和使用数据仅存储在您的本地浏览器中，不会上传到任何服务器。",
        },
        {
          title: "数据加密",
          description: "我们使用加密技术来保护您的信息在传输和存储过程中的安全。",
        },
        {
          title: "访问控制",
          description: "我们限制对您的信息的访问权限，只有需要处理这些信息的人员才能访问。",
        },
      ],
    },
    yourRights: {
      title: "5. 您的权利",
      content: "您有权访问、更正和删除我们收集的您的信息。您可以通过以下方式行使您的权利：",
      items: [
        {
          title: "访问和更正",
          description: "您可以随时访问和更正存储在您本地浏览器中的剪贴板内容。",
        },
        {
          title: "删除",
          description: "您可以随时删除存储在您本地浏览器中的剪贴板内容，以及清除插件的缓存数据。卸载插件或清除浏览器数据也会自动删除所有相关信息。",
        },
      ],
    },
    policyChanges: {
      title: "6. 隐私政策的变更",
      content: "我们可能会不时更新本隐私说明。如果我们对隐私政策做出重大变更，我们将通过适当的方式通知您，例如在插件中显示通知或发送电子邮件。",
    },
    contactUs: {
      title: "7. 联系我们",
      content: "如果您对本隐私说明有任何疑问，请通过以下方式与我们联系：",
      email: "1943875844@qq.com",
    },
  },

  termsOfService: {
    title: "服务条款",
    lastUpdated: "最后更新日期",
    introduction: {
      title: "1. 接受条款",
      content: "使用 ClipTrack 剪贴板管理助手插件即表示您同意接受本服务条款的约束。如果您不同意本服务条款，请勿使用本插件。",
    },
    license: {
      title: "2. 使用许可",
      content: "我们授予您有限、非独家、不可转让的许可，允许您在您的个人设备上安装和使用 ClipTrack 插件，仅用于个人用途。",
    },
    userResponsibilities: {
      title: "3. 用户责任",
      content: "您同意：",
      items: [
        "仅将 ClipTrack 插件用于合法目的。",
        "不使用 ClipTrack 插件侵犯他人的知识产权或其他权利。",
        "不干扰或破坏 ClipTrack 插件的正常运行。",
      ],
    },
    disclaimer: {
      title: "4. 免责声明",
      content: "ClipTrack 插件按“现状”提供，不提供任何明示或暗示的保证，包括但不限于适销性、特定用途适用性和非侵权性的保证。",
    },
    limitationOfLiability: {
      title: "5. 责任限制",
      content: "在任何情况下，我们均不对您或任何第三方因使用或无法使用 ClipTrack 插件而遭受的任何直接、间接、附带、特殊或衍生性损害承担责任。",
    },
    changesToTerms: {
      title: "6. 服务条款的变更",
      content: "我们可能会不时更新本服务条款。如果我们对服务条款做出重大变更，我们将通过适当的方式通知您，例如在插件中显示通知或发送电子邮件。",
    },
    governingLaw: {
      title: "7. 适用法律",
      content: "本服务条款受中华人民共和国法律管辖。",
    },
    disputeResolution: {
      title: "8. 争议解决",
      content: "因本服务条款引起的或与本服务条款相关的任何争议应通过友好协商解决。如果协商不成，双方同意将争议提交中国国际经济贸易仲裁委员会仲裁。",
    },
    contactUs: {
      title: "9. 联系我们",
      content: "如果您对本服务条款有任何疑问，请通过以下方式与我们联系：",
      email: "1943875844@qq.com",
    },
  },



} as const;
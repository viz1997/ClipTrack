
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {




  nav: {

    home: 'Home',
    about: 'About',
   howitworks: 'How It Works',
    features: 'Features',
    faq: 'FAQ',
    getStarted: 'Get Started',
  
  },
  
  hero: {
    title: 'Manage Your Clipboard Like a Pro',
    description: 'ClipTrack is the intelligent clipboard manager that helps you boost your productivity and organize your digital life.',

  },

  features: {
    title: 'Why Choose ',
    items: [
    {
      subtitle: "Intelligent Clipboard",
      content: [
        "Automatically saves the text, links, and images you copy",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
    },
    {
      subtitle: "Quick Search",
      content: [
        "Easily find and manage all your saved content",
       
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
    },
    {
      subtitle: "Source Link Preservation",
      content: [
        "Automatically records the source webpage of the content for easy traceability",
      
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
    },
   
   
  ],
},

 


  testimonials: {
    title: 'What Our Clients Say',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Content Creator',
        description: 'As a content creator, I need to manage a lot of clipboard content quickly. ClipTrack allows me to easily search, organize, and manage my clipboard content!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Freelance Designer',
        description: "I love how ClipTrack integrates seamlessly into my workflow. The sidebar mode doesn't obstruct my main content, and the ability to quickly search and manage clipboard items is a huge time-saver. Highly recommended!",
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Software Developer',
        description: "ClipTrack's ability to preserve original web links and include accurate timestamps is a lifesaver. It helps me track and manage my clipboard history with precision!",
      },

    
    ],
  },

 
  

  ready: {
    title: 'Ready to elevate your copy-paste experience?',
    description: 'Start using ClipTrack now and experience the convenience of an intelligent clipboard!',
  },
  
  footer: {
    title: 'Designed to enhance the copy-paste experience for browser users',

    product: 'Product',
    support: 'support',
    love: 'Love❤️',
  },











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
      title: "Easy to Use",
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

  faqs: {
    title: 'FAQs',
    questions: [
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
  },

  footerSupport: [
   { itemText: "Privacy", itemLink: "/en/privacy" },
    { itemText: "Terms", itemLink: "/en/terms" },
 
  ],
  footerProduct: [
    { itemText: "Home", itemLink: "#" },
    { itemText: "Features", itemLink: "#features" },

    { itemText: "FAQs", itemLink: "#faq" },

  ],
  footerLove: [
    { itemText: "WeChat Pay", itemLink: "#" },
    { itemText: "WeChat Pay", itemLink: "#" },
    { itemText: "WeChat Pay", itemLink: "#" },
  ],


  privacyPolicy: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated",
    introduction: {
      title: "1. Introduction",
      content: "Welcome to ClipTrack! We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your information.",
    },
    informationWeCollect: {
      title: "2. Information We Collect",
      content: "ClipTrack is a browser extension designed to provide efficient clipboard management. We only collect the minimum amount of information necessary to provide this functionality. All data is stored locally in your browser and is not uploaded to any server. Specifically, we collect:",
      items: [
        {
          title: "Clipboard Content",
          description: "To provide clipboard management functionality, we need to access and store the content you copy to the clipboard. This content is stored locally in your browser and is not uploaded to our servers.",
        },
        {
          title: "Usage Data",
          description: "To improve our products and services, we may collect anonymous usage data, such as the frequency of your use of the extension and the features you use. This data does not include any personally identifiable information and is not uploaded to our servers.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. How We Use Your Information",
      content: "The information we collect is used for the following purposes:",
      items: [
        {
          title: "Provide and Improve Extension Functionality",
          description: "We use your clipboard content to provide the core functionality of the extension and use anonymous usage data to improve our products and services.",
        },
        {
          title: "Personalize Your Experience",
          description: "We may use your usage data to provide a more personalized experience.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. How We Protect Your Information",
      content: "We take the following measures to protect your information:",
      items: [
        {
          title: "Local Storage",
          description: "Your clipboard content and usage data are stored locally in your browser and are not uploaded to any server.",
        },
        {
          title: "Data Encryption",
          description: "We use encryption technologies to protect your information during transmission and storage.",
        },
        {
          title: "Access Control",
          description: "We restrict access to your information to only those who need to process it.",
        },
      ],
    },
    yourRights: {
      title: "5. Your Rights",
      content: "You have the right to access, correct, and delete the information we collect. You can exercise your rights as follows:",
      items: [
        {
          title: "Access and Correct",
          description: "You can access and correct the clipboard content stored in your local browser at any time.",
        },
        {
          title: "Delete",
          description: "You can delete the clipboard content stored in your local browser at any time, as well as clear the extension's cache data. Uninstalling the extension or clearing browser data will also automatically delete all related information.",
        },
      ],
    },
    policyChanges: {
      title: "6. Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time. If we make significant changes, we will notify you through appropriate means, such as displaying a notice in the extension or sending an email.",
    },
    contactUs: {
      title: "7. Contact Us",
      content: "If you have any questions about this Privacy Policy, please contact us:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Terms of Service",
    lastUpdated: "Last Updated",
    introduction: {
      title: "1. Acceptance of Terms",
      content: "By using the ClipTrack clipboard management assistant plugin, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, please do not use the plugin.",
    },
    license: {
      title: "2. License",
      content: "We grant you a limited, non-exclusive, non-transferable license to install and use the ClipTrack plugin on your personal devices for personal use only.",
    },
    userResponsibilities: {
      title: "3. User Responsibilities",
      content: "You agree to:",
      items: [
        "Use the ClipTrack plugin only for lawful purposes.",
        "Not use the ClipTrack plugin to infringe upon the intellectual property rights or other rights of others.",
        "Not interfere with or disrupt the normal operation of the ClipTrack plugin.",
      ],
    },
    disclaimer: {
      title: "4. Disclaimer",
      content: "The ClipTrack plugin is provided 'as is' without any express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.",
    },
    limitationOfLiability: {
      title: "5. Limitation of Liability",
      content: "Under no circumstances shall we be liable to you or any third party for any direct, indirect, incidental, special, or consequential damages arising from the use or inability to use the ClipTrack plugin.",
    },
    changesToTerms: {
      title: "6. Changes to Terms of Service",
      content: "We may update these Terms of Service from time to time. If we make significant changes, we will notify you through appropriate means, such as displaying a notice in the plugin or sending an email.",
    },
    governingLaw: {
      title: "7. Governing Law",
      content: "These Terms of Service are governed by the laws of the People's Republic of China.",
    },
    disputeResolution: {
      title: "8. Dispute Resolution",
      content: "Any disputes arising from or related to these Terms of Service shall be resolved through friendly negotiations. If negotiations fail, both parties agree to submit the dispute to the China International Economic and Trade Arbitration Commission for arbitration.",
    },
    contactUs: {
      title: "9. Contact Us",
      content: "If you have any questions about these Terms of Service, please contact us:",
      email: "1943875844@qq.com",
    },
  },

} as const;
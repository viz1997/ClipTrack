
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: '홈',
    about: '소개',
    howitworks: '사용 방법',
    features: '기능',
    faq: 'FAQ',
    getStarted: '시작하기',
  },
  hero: {
    title: '전문가처럼 클립보드를 관리하세요',
    description: 'ClipTrack은 생산성을 높이고 디지털 생활을 조직화하는 데 도움을 주는 스마트 클립보드 관리자입니다',
  },
  testimonials: {
    title: '고객들의 이야기',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: '콘텐츠 크리에이터',
        content: '콘텐츠 크리에이터로서, 많은 클립보드 콘텐츠를 빠르게 관리해야 합니다. ClipTrack은 클립보드 콘텐츠를 쉽게 검색, 정리 및 관리할 수 있게 해줍니다!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: '프리랜서 디자이너',
        content: 'ClipTrack이 내 워크플로우에 어떻게 자연스럽게 통합되는지 사랑합니다. 사이드바 모드는 내 주요 콘텐츠를 가리지 않으며, 클립보드 항목을 빠르게 검색하고 관리할 수 있어 많은 시간을 절약합니다. 강력 추천합니다!',
      },
      {
        image: image3,
        name: 'John Doe',
        job: '소프트웨어 개발자',
        content: 'ClipTrack이 원본 웹 링크와 정확한 타임스탬프를 유지하는 기능은 정말 훌륭합니다. 클립보드 기록을 정확하게 추적하고 관리하는 데 큰 도움이 됩니다!',
      },
    ],
  },
  ready: {
    title: '복사 및 붙여넣기 경험을 향상시킬 준비가 되셨나요?',
    description: '지금 ClipTrack을 시작하고 스마트 클립보드의 혜택을 경험해보세요!',
  },
  footer: {
    title: '브라우저 사용자를 위한 복사 및 붙여넣기 경험 향상',
    privacy: '개인정보 보호정책',
    terms: '이용 약관',
    contact: '연락처',
    feedback: '피드백',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: '제품',
    support: '지원',
    love: '제품 지원하기 ❤️',
  },
  features: {
    title: '왜 ClipTrack을 선택해야 할까요?',
    items: [
      {
        subtitle: "스마트 클립보드",
        content: [
          "복사한 텍스트, 링크 및 이미지를 자동으로 저장",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "빠른 검색",
        content: [
          "저장된 모든 콘텐츠를 쉽게 찾고 관리",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "소스 링크 저장",
        content: [
          "콘텐츠의 원본 웹 페이지를 자동으로 기록하여 쉽게 추적",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "플로팅 창 및 사이드바",
      painPoint:
        "플로팅 창 모드는 위치를 쉽게 조정할 수 있어 유연성과 편의성을 제공합니다.",
      agitatepainPoint:
        "사이드바 모드는 주요 콘텐츠를 가리지 않으며 직관적으로 사용할 수 있습니다.",
      solution:
        "선호하는 방법을 선택하세요.",
      img: visibilityDilemma,
    },
    {
      title: "간편한 사용",
      painPoint:
        "직관적인 디스플레이와 쉬운 사용.",
      agitatepainPoint:
        "클립보드 콘텐츠를 빠르게 검색, 조작 및 관리할 수 있도록 도와줍니다.",
      solution:
        "선호하는 방법을 선택하세요.",
      img: engagementGap,
    },
    {
      title: "원활한 기록",
      painPoint:
        "추가 작업 없이 원활한 기록이 가능하여 끊김 없는 경험을 제공합니다.",
      agitatepainPoint:
        "원본 웹 링크를 유지하여 소스를 빠르게 찾고 생산성을 높일 수 있습니다.",
      solution:
        "정확한 타임스탬프를 포함하여 쉽게 추적하고 관리할 수 있습니다.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: '자주 묻는 질문',
    questions: [
      {
        question: "ClipTrack이란 무엇인가요?",
        answer:
          "ClipTrack은 생산성을 높이고 디지털 생활을 조직화하는 데 도움을 주는 스마트 클립보드 관리 도구입니다. 사용자가 클립보드 콘텐츠를 쉽게 검색, 정리 및 관리할 수 있도록 지원하며, 플로팅 창 및 사이드바 모드를 지원하고 원활한 기록 기능을 제공하며 원본 웹 링크와 타임스탬프를 유지합니다.",
      },
      {
        question: "ClipTrack은 어떤 브라우저를 지원하나요?",
        answer:
          "ClipTrack은 Chrome 및 Edge 브라우저를 지원하며, 앞으로 더 많은 브라우저를 지원할 예정입니다. 우리는 사용자에게 크로스 플랫폼, 원활한 클립보드 관리 경험을 제공하기 위해 노력하고 있습니다.",
      },
      {
        question: "내 클립보드 콘텐츠는 안전한가요?",
        answer:
          "ClipTrack은 귀하의 프라이버시와 데이터 보안을 매우 중요하게 생각합니다. 모든 데이터는 로컬 브라우저에 저장됩니다. ClipTrack 확장 프로그램을 삭제하거나 브라우저 데이터를 수동으로 삭제하면 모든 데이터가 삭제됩니다. 동시에, 우리는 관련 법규를 엄격히 준수하여 귀하의 데이터를 안전하게 보호합니다.",
      },
      {
        question: "ClipTrack은 어떤 유형의 복사를 지원하나요?",
        answer:
          "ClipTrack은 현재 텍스트 및 웹 페이지 복사를 지원합니다. 우리는 사용자의 다양한 요구를 충족시키기 위해 지원 유형을 계속 확장할 것입니다.",
      },
      {
        question: "ClipTrack은 다중 기기 동기화를 지원하나요?",
        answer:
          "현재 ClipTrack은 다중 기기 동기화 기능을 지원하지 않지만, 이 기능을 개발 중이며 향후 버전에서 출시할 예정입니다.",
      },
    ],
  },
  footerSupport: [
    { itemText: "개인정보 보호정책", itemLink: "/ko/privacy" },
    { itemText: "이용 약관", itemLink: "/ko/terms" },
  ],
  footerProduct: [
    { itemText: "홈", itemLink: "#" },
    { itemText: "기능", itemLink: "#features" },
    { itemText: "FAQ", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "연락처", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "개인정보 보호정책",
    lastUpdated: "마지막 업데이트",
    introduction: {
      title: "1. 소개",
      content: "ClipTrack 클립보드 관리자 확장 프로그램에 오신 것을 환영합니다! 우리는 귀하의 프라이버시를 매우 중요하게 생각하며 귀하의 개인 정보를 보호하기 위해 최선을 다하고 있습니다. 이 개인정보 보호정책은 우리가 귀하의 정보를 어떻게 수집, 사용 및 보호하는지 설명합니다.",
    },
    informationWeCollect: {
      title: "2. 수집하는 정보",
      content: "ClipTrack 확장 프로그램은 효율적인 클립보드 관리 기능을 제공하는 브라우저 확장 프로그램입니다. 우리는 이 기능을 가능하게 하는 데 필요한 최소한의 정보만 수집하며, 모든 데이터는 귀하의 로컬 브라우저에 저장되고 서버로 업로드되지 않습니다. 여기에는 다음이 포함됩니다:",
      items: [
        {
          title: "클립보드 콘텐츠",
          description: "클립보드 관리 기능을 제공하기 위해, 우리는 귀하가 클립보드에 복사한 콘텐츠에 액세스하고 이를 저장해야 합니다. 이 콘텐츠는 귀하의 로컬 브라우저에만 저장되며 서버로 업로드되지 않습니다.",
        },
        {
          title: "사용 데이터",
          description: "제품 및 서비스를 개선하기 위해, 우리는 익명의 사용 데이터를 수집할 수 있습니다. 예를 들어, 확장 프로그램 사용 빈도, 기능 사용 등이 있습니다. 이 데이터에는 개인 식별 정보가 포함되지 않으며 서버로 업로드되지 않습니다.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. 정보 사용 방법",
      content: "우리가 수집한 정보는 다음 목적으로 사용됩니다:",
      items: [
        {
          title: "확장 프로그램 기능 제공 및 개선",
          description: "우리는 귀하의 클립보드 콘텐츠를 사용하여 확장 프로그램의 핵심 기능을 가능하게 하고, 익명의 사용 데이터를 사용하여 제품 및 서비스를 개선합니다.",
        },
        {
          title: "개인화된 경험 제공",
          description: "우리는 귀하의 사용 데이터를 사용하여 더 개인화된 경험을 제공할 수 있습니다.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. 정보 보호 방법",
      content: "우리는 귀하의 정보 보호를 위해 다음 조치를 취합니다:",
      items: [
        {
          title: "로컬 저장",
          description: "귀하의 클립보드 콘텐츠와 사용 데이터는 귀하의 로컬 브라우저에만 저장되며 서버로 업로드되지 않습니다.",
        },
        {
          title: "데이터 암호화",
          description: "우리는 정보 전송 및 저장 과정에서의 보안을 보장하기 위해 암호화 기술을 사용합니다.",
        },
        {
          title: "접근 제어",
          description: "우리는 귀하의 정보에 대한 접근 권한을 제한하여, 이 정보를 처리해야 하는 사람만 접근할 수 있도록 합니다.",
        },
      ],
    },
    yourRights: {
      title: "5. 귀하의 권리",
      content: "귀하는 우리가 수집한 귀하의 정보에 접근, 수정 및 삭제할 권리가 있습니다. 귀하는 다음과 같은 방법으로 귀하의 권리를 행사할 수 있습니다:",
      items: [
        {
          title: "접근 및 수정",
          description: "귀하는 언제든지 귀하의 로컬 브라우저에 저장된 클립보드 콘텐츠에 접근하고 수정할 수 있습니다.",
        },
        {
          title: "삭제",
          description: "귀하는 언제든지 귀하의 로컬 브라우저에 저장된 클립보드 콘텐츠 및 확장 프로그램의 캐시 데이터를 삭제할 수 있습니다. 확장 프로그램을 삭제하거나 브라우저 데이터를 수동으로 삭제하면 모든 관련 정보가 자동으로 삭제됩니다.",
        },
      ],
    },
    policyChanges: {
      title: "6. 개인정보 보호정책 변경",
      content: "우리는 이 개인정보 보호정책을 수시로 업데이트할 수 있습니다. 개인정보 보호정책에 중대한 변경이 있는 경우, 우리는 적절한 방법으로 귀하에게 알릴 것입니다. 예를 들어, 확장 프로그램 내에 알림을 표시하거나 이메일을 보내는 방식 등이 있습니다.",
    },
    contactUs: {
      title: "7. 연락처",
      content: "이 개인정보 보호정책에 대해 궁금한 점이 있으시면 다음 연락처로 문의해 주세요:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "이용 약관",
    lastUpdated: "마지막 업데이트",
    introduction: {
      title: "1. 약관 동의",
      content: "ClipTrack 클립보드 관리자 확장 프로그램을 사용함으로써 귀하는 본 이용 약관에 동의하게 됩니다. 본 이용 약관에 동의하지 않으시면, 확장 프로그램을 사용하지 마십시오.",
    },
    license: {
      title: "2. 사용 라이선스",
      content: "우리는 귀하에게 개인적인 용도로만 ClipTrack 확장 프로그램을 귀하의 개인 기기에 설치하고 사용할 수 있는 제한적, 비독점적, 양도 불가능한 라이선스를 부여합니다.",
    },
    userResponsibilities: {
      title: "3. 사용자 책임",
      content: "귀하는 다음 사항에 동의합니다:",
      items: [
        "ClipTrack 확장 프로그램을 합법적인 목적으로만 사용할 것.",
        "ClipTrack 확장 프로그램을 사용하여 타인의 지적 재산권 또는 기타 권리를 침해하지 않을 것.",
        "ClipTrack 확장 프로그램의 정상적인 작동을 방해하거나 중단시키지 않을 것.",
      ],
    },
    disclaimer: {
      title: "4. 면책 조항",
      content: "ClipTrack 확장 프로그램은 '있는 그대로' 제공되며, 상품성, 특정 목적에의 적합성 및 비침해성에 대한 어떠한 명시적 또는 묵시적 보증도 제공하지 않습니다.",
    },
    limitationOfLiability: {
      title: "5. 책임 제한",
      content: "어떤 경우에도 우리는 귀하 또는 제3자에게 ClipTrack 확장 프로그램의 사용 또는 사용 불가능으로 인해 발생한 직접적, 간접적, 부수적, 특별 또는 파생적 손해에 대해 책임을 지지 않습니다.",
    },
    changesToTerms: {
      title: "6. 이용 약관 변경",
      content: "우리는 본 이용 약관을 수시로 업데이트할 수 있습니다. 이용 약관에 중대한 변경이 있는 경우, 우리는 적절한 방법으로 귀하에게 알릴 것입니다. 예를 들어, 확장 프로그램 내에 알림을 표시하거나 이메일을 보내는 방식 등이 있습니다.",
    },
    governingLaw: {
      title: "7. 적용 법률",
      content: "본 이용 약관은 중화인민공화국 법률의 적용을 받습니다.",
    },
    disputeResolution: {
      title: "8. 분쟁 해결",
      content: "본 이용 약관으로 인해 발생하거나 이와 관련된 모든 분쟁은 우호적인 협상을 통해 해결되어야 합니다. 협상이 이루어지지 않는 경우, 양측은 분쟁을 중국국제경제무역중재위원회에 제출하기로 합의합니다.",
    },
    contactUs: {
      title: "9. 연락처",
      content: "본 이용 약관에 대해 궁금한 점이 있으시면 다음 연락처로 문의해 주세요:",
      email: "1943875844@qq.com",
    },
  },
} as const;
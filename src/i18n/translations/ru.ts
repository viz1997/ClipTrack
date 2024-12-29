
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: 'Главная',
    about: 'О нас',
    howitworks: 'Как это работает',
    features: 'Функции',
    faq: 'Часто задаваемые вопросы',
    getStarted: 'Начать',
  },
  hero: {
    title: 'Управляйте буфером обмена как профессионал',
    description: 'ClipTrack — это интеллектуальный менеджер буфера обмена, который помогает повысить вашу продуктивность и организовать цифровую жизнь',
  },
  testimonials: {
    title: 'Что говорят наши клиенты',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Создатель контента',
        content: 'Как создатель контента, мне нужно быстро управлять большим количеством элементов буфера обмена. ClipTrack позволяет мне легко искать, организовывать и управлять содержимым буфера обмена!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Фриланс-дизайнер',
        content: 'Мне нравится, как ClipTrack легко встраивается в мой рабочий процесс. Режим боковой панели не блокирует мой основной контент, а быстрый поиск и управление элементами буфера обмена экономят мне много времени. Очень рекомендую!',
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Разработчик программного обеспечения',
        content: 'Функция ClipTrack, которая сохраняет исходные веб-ссылки и включает точные временные метки, просто великолепна. Это помогает мне точно отслеживать и управлять историей буфера обмена!',
      },
    ],
  },
  ready: {
    title: 'Готовы улучшить свой опыт копирования и вставки?',
    description: 'Начните использовать ClipTrack прямо сейчас и ощутите преимущества интеллектуального буфера обмена!',
  },
  footer: {
    title: 'Улучшение опыта копирования и вставки для пользователей браузеров',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    contact: 'Контакты',
    feedback: 'Обратная связь',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: 'Продукт',
    support: 'Поддержка',
    love: 'Поддержите продукт ❤️',
  },
  features: {
    title: 'Почему выбирают ClipTrack?',
    items: [
      {
        subtitle: "Интеллектуальный буфер обмена",
        content: [
          "Автоматическое сохранение скопированного текста, ссылок и изображений",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "Быстрый поиск",
        content: [
          "Легко находите и управляйте всем сохраненным содержимым",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "Сохранение исходных ссылок",
        content: [
          "Автоматическая запись исходной веб-страницы для удобного отслеживания",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "Плавающее окно и боковая панель",
      painPoint:
        "Режим плавающего окна позволяет легко регулировать положение, обеспечивая гибкость и удобство.",
      agitatepainPoint:
        "Режим боковой панели не блокирует основной контент и интуитивно понятен в использовании.",
      solution:
        "Выберите предпочтительный метод.",
      img: visibilityDilemma,
    },
    {
      title: "Простота использования",
      painPoint:
        "Интуитивный интерфейс и простота в использовании.",
      agitatepainPoint:
        "Помогает быстро искать, управлять и редактировать содержимое буфера обмена.",
      solution:
        "Выберите предпочтительный метод.",
      img: engagementGap,
    },
    {
      title: "Бесперебойная запись",
      painPoint:
        "Никаких дополнительных действий не требуется, бесперебойная запись обеспечивает плавный опыт.",
      agitatepainPoint:
        "Сохраняет исходные веб-ссылки, позволяя быстро находить источник и повышать производительность.",
      solution:
        "Включает точные временные метки для удобного отслеживания и управления.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: 'Часто задаваемые вопросы',
    questions: [
      {
        question: "Что такое ClipTrack?",
        answer:
          "ClipTrack — это интеллектуальный менеджер буфера обмена, предназначенный для повышения производительности и организации цифровой жизни. Он позволяет пользователям легко искать, организовывать и управлять содержимым буфера обмена, поддерживает режимы плавающего окна и боковой панели, предлагает функции бесперебойной записи и сохраняет исходные веб-ссылки и временные метки.",
      },
      {
        question: "Какие браузеры поддерживает ClipTrack?",
        answer:
          "ClipTrack поддерживает браузеры Chrome и Edge и будет поддерживать больше браузеров в будущем. Мы стремимся предоставить пользователям кросс-платформенный, бесперебойный опыт управления буфером обмена.",
      },
      {
        question: "Безопасно ли содержимое моего буфера обмена?",
        answer:
          "ClipTrack очень серьезно относится к вашей конфиденциальности и безопасности данных. Все данные хранятся локально в вашем браузере. Удаление расширения ClipTrack или ручное удаление данных браузера удаляет все данные. В то же время мы строго соблюдаем применимые законы и правила, чтобы обеспечить безопасность ваших данных.",
      },
      {
        question: "Какие типы копирования поддерживает ClipTrack?",
        answer:
          "ClipTrack в настоящее время поддерживает копирование текста и веб-страниц. Мы продолжим расширять поддерживаемые типы, чтобы удовлетворить разнообразные потребности пользователей.",
      },
      {
        question: "Поддерживает ли ClipTrack синхронизацию между устройствами?",
        answer:
          "В настоящее время ClipTrack не поддерживает синхронизацию между устройствами, но мы работаем над этой функцией и планируем внедрить ее в будущих версиях.",
      },
    ],
  },
  footerSupport: [
    { itemText: "Политика конфиденциальности", itemLink: "/ru/privacy" },
    { itemText: "Условия использования", itemLink: "/ru/terms" },
  ],
  footerProduct: [
    { itemText: "Главная", itemLink: "#" },
    { itemText: "Функции", itemLink: "#features" },
    { itemText: "Часто задаваемые вопросы", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "Контакты", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "Политика конфиденциальности",
    lastUpdated: "Последнее обновление",
    introduction: {
      title: "1. Введение",
      content: "Добро пожаловать в расширение для управления буфером обмена ClipTrack! Мы очень серьезно относимся к вашей конфиденциальности и стремимся защитить вашу личную информацию. Эта политика конфиденциальности объясняет, как мы собираем, используем и защищаем вашу информацию.",
    },
    informationWeCollect: {
      title: "2. Информация, которую мы собираем",
      content: "Расширение ClipTrack — это расширение для браузера, предназначенное для предоставления эффективных функций управления буфером обмена. Мы собираем только минимально необходимую информацию для обеспечения этой функциональности, и все данные хранятся локально в вашем браузере и не загружаются на наши серверы. Это включает:",
      items: [
        {
          title: "Содержимое буфера обмена",
          description: "Чтобы предоставить функцию управления буфером обмена, нам необходимо получить доступ и сохранить содержимое, которое вы копируете в буфер обмена. Это содержимое хранится только локально в вашем браузере и не загружается на наши серверы.",
        },
        {
          title: "Данные об использовании",
          description: "Чтобы улучшить продукт и услуги, мы можем собирать анонимные данные об использовании, такие как частота использования расширения, использование функций и т.д. Эти данные не содержат личной идентификационной информации и не загружаются на наши серверы.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. Как мы используем вашу информацию",
      content: "Информация, которую мы собираем, используется для следующих целей:",
      items: [
        {
          title: "Предоставление и улучшение функций расширения",
          description: "Мы используем содержимое вашего буфера обмена для обеспечения основных функций расширения и используем анонимные данные об использовании для улучшения продукта и услуг.",
        },
        {
          title: "Персонализация опыта",
          description: "Мы можем использовать ваши данные об использовании, чтобы предоставить вам более персонализированный опыт.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. Как мы защищаем вашу информацию",
      content: "Мы принимаем следующие меры для защиты безопасности вашей информации:",
      items: [
        {
          title: "Локальное хранение",
          description: "Содержимое вашего буфера обмена и данные об использовании хранятся только локально в вашем браузере и не загружаются на серверы.",
        },
        {
          title: "Шифрование данных",
          description: "Мы используем технологии шифрования для защиты вашей информации во время передачи и хранения.",
        },
        {
          title: "Контроль доступа",
          description: "Мы ограничиваем доступ к вашей информации только теми лицами, которым необходимо обрабатывать эту информацию.",
        },
      ],
    },
    yourRights: {
      title: "5. Ваши права",
      content: "Вы имеете право на доступ, исправление и удаление информации, которую мы собираем. Вы можете осуществить свои права следующим образом:",
      items: [
        {
          title: "Доступ и исправление",
          description: "Вы можете в любое время получить доступ и исправить содержимое вашего буфера обмена, хранящееся локально в вашем браузере.",
        },
        {
          title: "Удаление",
          description: "Вы можете в любое время удалить содержимое вашего буфера обмена, хранящееся локально в вашем браузере, а также очистить кэш расширения. Удаление расширения или ручное удаление данных браузера автоматически удаляет всю соответствующую информацию.",
        },
      ],
    },
    policyChanges: {
      title: "6. Изменения в политике конфиденциальности",
      content: "Мы можем время от времени обновлять эту политику конфиденциальности. Если мы вносим существенные изменения в политику конфиденциальности, мы уведомим вас соответствующим образом, например, отобразив уведомление в расширении или отправив электронное письмо.",
    },
    contactUs: {
      title: "7. Свяжитесь с нами",
      content: "Если у вас есть вопросы относительно этой политики конфиденциальности, пожалуйста, свяжитесь с нами следующим образом:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Условия использования",
    lastUpdated: "Последнее обновление",
    introduction: {
      title: "1. Принятие условий",
      content: "Используя расширение для управления буфером обмена ClipTrack, вы соглашаетесь соблюдать настоящие условия использования. Если вы не согласны с этими условиями использования, не используйте расширение.",
    },
    license: {
      title: "2. Лицензия на использование",
      content: "Мы предоставляем вам ограниченную, неисключительную, непередаваемую лицензию на установку и использование расширения ClipTrack на ваших личных устройствах исключительно для личного использования.",
    },
    userResponsibilities: {
      title: "3. Обязанности пользователя",
      content: "Вы соглашаетесь:",
      items: [
        "Использовать расширение ClipTrack только в законных целях.",
        "Не использовать расширение ClipTrack для нарушения прав интеллектуальной собственности или других прав третьих лиц.",
        "Не нарушать или препятствовать нормальной работе расширения ClipTrack.",
      ],
    },
    disclaimer: {
      title: "4. Отказ от ответственности",
      content: "Расширение ClipTrack предоставляется «как есть», без каких-либо явных или подразумеваемых гарантий, включая, но не ограничиваясь, гарантии товарной пригодности, пригодности для определенной цели и ненарушения прав.",
    },
    limitationOfLiability: {
      title: "5. Ограничение ответственности",
      content: "Ни при каких обстоятельствах мы не несем ответственности перед вами или любыми третьими лицами за любые прямые, косвенные, случайные, специальные или косвенные убытки, возникшие в результате использования или невозможности использования расширения ClipTrack.",
    },
    changesToTerms: {
      title: "6. Изменения в условиях использования",
      content: "Мы можем время от времени обновлять настоящие условия использования. Если мы вносим существенные изменения в условия использования, мы уведомим вас соответствующим образом, например, отобразив уведомление в расширении или отправив электронное письмо.",
    },
    governingLaw: {
      title: "7. Применимое право",
      content: "Настоящие условия использования регулируются законодательством Китайской Народной Республики.",
    },
    disputeResolution: {
      title: "8. Разрешение споров",
      content: "Все споры, возникающие из настоящих условий использования или связанные с ними, должны быть разрешены путем дружественных переговоров. Если соглашение не может быть достигнуто, обе стороны соглашаются передать спор в Китайскую международную экономическую и торговую арбитражную комиссию.",
    },
    contactUs: {
      title: "9. Свяжитесь с нами",
      content: "Если у вас есть вопросы относительно настоящих условий использования, пожалуйста, свяжитесь с нами следующим образом:",
      email: "1943875844@qq.com",
    },
  },
} as const;
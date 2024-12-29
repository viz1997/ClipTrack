
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    howitworks: 'Comment ça marche',
    features: 'Fonctionnalités',
    faq: 'FAQ',
    getStarted: 'Commencer',
    changelog: 'Journal des modifications',
  },
  hero: {
    title: 'Gérez votre presse-papiers comme un pro',
    description: 'ClipTrack est un gestionnaire de presse-papiers intelligent qui vous aide à augmenter votre productivité et à organiser votre vie numérique',
  },
  testimonials: {
    title: 'Ce que disent nos clients',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Créatrice de contenu',
        content: 'En tant que créatrice de contenu, je dois gérer rapidement de nombreux éléments du presse-papiers. ClipTrack me permet de rechercher, organiser et gérer facilement le contenu du presse-papiers !',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Designer freelance',
        content: "J'adore la façon dont ClipTrack s'intègre parfaitement dans mon flux de travail. Le mode barre latérale ne bloque pas mon contenu principal, et la recherche et la gestion rapides des éléments du presse-papiers me font gagner beaucoup de temps. Je le recommande vivement !",
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Développeur de logiciels',
        content: "La fonction de ClipTrack qui conserve les liens web d'origine et inclut des horodatages précis est tout simplement géniale. Cela m'aide à suivre et à gérer avec précision l'historique du presse-papiers !",
      },
    ],
  },
  ready: {
    title: 'Prêt à améliorer votre expérience de copier-coller ?',
    description: 'Commencez dès maintenant avec ClipTrack et découvrez les avantages d\'un presse-papiers intelligent !',
  },
  footer: {
    title: 'Améliorez l\'expérience de copier-coller pour les utilisateurs de navigateurs',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d\'utilisation',
    contact: 'Contact',
    feedback: 'Commentaires',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: 'Produit',
    support: 'Support',
    love: 'Soutenez le produit ❤️',
  },
  features: {
    title: 'Pourquoi choisir ClipTrack ?',
    items: [
      {
        subtitle: "Presse-papiers intelligent",
        content: [
          "Sauvegarde automatique du texte, des liens et des images copiés",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "Recherche rapide",
        content: [
          "Trouvez et gérez facilement tout le contenu sauvegardé",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "Sauvegarde des liens sources",
        content: [
          "Enregistrement automatique de la page web source pour un suivi facile",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "Fenêtre flottante et barre latérale",
      painPoint:
        "Le mode fenêtre flottante permet un ajustement facile de la position, offrant flexibilité et commodité.",
      agitatepainPoint:
        "Le mode barre latérale ne bloque pas le contenu principal et est intuitif à utiliser.",
      solution:
        "Choisissez votre méthode préférée.",
      img: visibilityDilemma,
    },
    {
      title: "Utilisation simple",
      painPoint:
        "Affichage intuitif et utilisation facile.",
      agitatepainPoint:
        "Vous aide à rechercher, manipuler et gérer rapidement le contenu du presse-papiers.",
      solution:
        "Choisissez votre méthode préférée.",
      img: engagementGap,
    },
    {
      title: "Enregistrement fluide",
      painPoint:
        "Aucune action supplémentaire requise, l'enregistrement fluide garantit une expérience sans interruption.",
      agitatepainPoint:
        "Conserve les liens web d'origine, vous permettant de retrouver rapidement la source et d'augmenter votre productivité.",
      solution:
        "Inclut des horodatages précis pour un suivi et une gestion faciles.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: 'Questions fréquemment posées',
    questions: [
      {
        question: "Qu'est-ce que ClipTrack ?",
        answer:
          "ClipTrack est un gestionnaire de presse-papiers intelligent conçu pour augmenter la productivité et organiser la vie numérique. Il permet aux utilisateurs de rechercher, organiser et gérer facilement le contenu du presse-papiers, prend en charge les modes fenêtre flottante et barre latérale, offre des fonctions d'enregistrement fluides et conserve les liens web d'origine et les horodatages.",
      },
      {
        question: "Quels navigateurs sont pris en charge par ClipTrack ?",
        answer:
          "ClipTrack prend en charge les navigateurs Chrome et Edge et prendra en charge davantage de navigateurs à l'avenir. Nous nous engageons à offrir aux utilisateurs une gestion de presse-papiers fluide et multiplateforme.",
      },
      {
        question: "Mon contenu du presse-papiers est-il sécurisé ?",
        answer:
          "ClipTrack prend très au sérieux votre vie privée et la sécurité de vos données. Toutes les données sont stockées localement dans votre navigateur. La suppression de l'extension ClipTrack ou la suppression manuelle des données du navigateur supprime toutes les données. Dans le même temps, nous respectons strictement les lois et réglementations applicables pour garantir la sécurité de vos données.",
      },
      {
        question: "Quels types de copies ClipTrack prend-il en charge ?",
        answer:
          "ClipTrack prend actuellement en charge les copies de texte et de pages web. Nous continuerons à étendre les types pris en charge pour répondre aux divers besoins des utilisateurs.",
      },
      {
        question: "ClipTrack prend-il en charge la synchronisation multi-appareils ?",
        answer:
          "Actuellement, ClipTrack ne prend pas en charge la synchronisation multi-appareils, mais nous travaillons sur cette fonctionnalité et prévoyons de l'introduire dans les futures versions.",
      },
    ],
  },
  footerSupport: [
    { itemText: "Politique de confidentialité", itemLink: "/fr/privacy" },
    { itemText: "Conditions d'utilisation", itemLink: "/fr/terms" },
  ],
  footerProduct: [
    { itemText: "Accueil", itemLink: "#" },
    { itemText: "Fonctionnalités", itemLink: "#features" },
    { itemText: "FAQ", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "Contact", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour",
    introduction: {
      title: "1. Introduction",
      content: "Bienvenue dans l'extension de gestionnaire de presse-papiers ClipTrack ! Nous accordons une grande importance à votre vie privée et nous nous engageons à protéger vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.",
    },
    informationWeCollect: {
      title: "2. Informations que nous collectons",
      content: "L'extension ClipTrack est une extension de navigateur conçue pour offrir des fonctionnalités de gestion de presse-papiers efficaces. Nous ne collectons que les informations minimales nécessaires pour permettre cette fonctionnalité, et toutes les données sont stockées localement dans votre navigateur et ne sont pas téléchargées sur nos serveurs. Cela inclut :",
      items: [
        {
          title: "Contenu du presse-papiers",
          description: "Pour fournir la fonctionnalité de gestion du presse-papiers, nous devons accéder et stocker le contenu que vous copiez dans le presse-papiers. Ce contenu est stocké uniquement localement dans votre navigateur et n'est pas téléchargé sur nos serveurs.",
        },
        {
          title: "Données d'utilisation",
          description: "Pour améliorer le produit et les services, nous pouvons collecter des données d'utilisation anonymes, telles que la fréquence d'utilisation de l'extension, l'utilisation des fonctionnalités, etc. Ces données ne contiennent aucune information d'identification personnelle et ne sont pas téléchargées sur nos serveurs.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. Comment nous utilisons vos informations",
      content: "Les informations que nous collectons sont utilisées aux fins suivantes :",
      items: [
        {
          title: "Fournir et améliorer les fonctionnalités de l'extension",
          description: "Nous utilisons le contenu de votre presse-papiers pour permettre les fonctionnalités principales de l'extension et utilisons des données d'utilisation anonymes pour améliorer le produit et les services.",
        },
        {
          title: "Personnalisation de l'expérience",
          description: "Nous pouvons utiliser vos données d'utilisation pour vous offrir une expérience plus personnalisée.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. Comment nous protégeons vos informations",
      content: "Nous prenons les mesures suivantes pour protéger la sécurité de vos informations :",
      items: [
        {
          title: "Stockage local",
          description: "Le contenu de votre presse-papiers et les données d'utilisation sont stockés uniquement localement dans votre navigateur et ne sont pas téléchargés sur des serveurs.",
        },
        {
          title: "Chiffrement des données",
          description: "Nous utilisons des technologies de chiffrement pour protéger vos informations pendant leur transmission et leur stockage.",
        },
        {
          title: "Contrôle d'accès",
          description: "Nous limitons l'accès à vos informations aux personnes qui ont besoin de traiter ces informations.",
        },
      ],
    },
    yourRights: {
      title: "5. Vos droits",
      content: "Vous avez le droit d'accéder, de corriger et de supprimer les informations que nous collectons. Vous pouvez exercer vos droits comme suit :",
      items: [
        {
          title: "Accès et correction",
          description: "Vous pouvez accéder et corriger à tout moment le contenu de votre presse-papiers stocké localement dans votre navigateur.",
        },
        {
          title: "Suppression",
          description: "Vous pouvez à tout moment supprimer le contenu de votre presse-papiers stocké localement dans votre navigateur, ainsi que vider le cache de l'extension. La désinstallation de l'extension ou la suppression des données du navigateur supprime automatiquement toutes les informations pertinentes.",
        },
      ],
    },
    policyChanges: {
      title: "6. Modifications de la politique de confidentialité",
      content: "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Si nous apportons des modifications importantes à la politique de confidentialité, nous vous en informerons de manière appropriée, par exemple en affichant une notification dans l'extension ou en envoyant un e-mail.",
    },
    contactUs: {
      title: "7. Contactez-nous",
      content: "Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter comme suit :",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Conditions d'utilisation",
    lastUpdated: "Dernière mise à jour",
    introduction: {
      title: "1. Acceptation des conditions",
      content: "En utilisant l'extension de gestionnaire de presse-papiers ClipTrack, vous acceptez d'être lié par ces conditions d'utilisation. Si vous n'acceptez pas ces conditions d'utilisation, n'utilisez pas l'extension.",
    },
    license: {
      title: "2. Licence d'utilisation",
      content: "Nous vous accordons une licence limitée, non exclusive, non transférable, pour installer et utiliser l'extension ClipTrack sur vos appareils personnels, uniquement pour un usage personnel.",
    },
    userResponsibilities: {
      title: "3. Responsabilités de l'utilisateur",
      content: "Vous acceptez :",
      items: [
        "N'utiliser l'extension ClipTrack qu'à des fins légales.",
        "Ne pas utiliser l'extension ClipTrack pour enfreindre les droits de propriété intellectuelle ou autres droits de tiers.",
        "Ne pas perturber ou entraver le fonctionnement normal de l'extension ClipTrack.",
      ],
    },
    disclaimer: {
      title: "4. Clause de non-responsabilité",
      content: "L'extension ClipTrack est fournie \"telle quelle\", sans aucune garantie, expresse ou implicite, y compris, mais sans s'y limiter, les garanties de qualité marchande, d'adéquation à un usage particulier et de non-violation des droits de tiers.",
    },
    limitationOfLiability: {
      title: "5. Limitation de responsabilité",
      content: "En aucun cas, nous ne serons responsables envers vous ou tout tiers pour tout dommage direct, indirect, accessoire, spécial ou consécutif résultant de l'utilisation ou de l'impossibilité d'utiliser l'extension ClipTrack.",
    },
    changesToTerms: {
      title: "6. Modifications des conditions d'utilisation",
      content: "Nous pouvons mettre à jour ces conditions d'utilisation de temps à autre. Si nous apportons des modifications importantes aux conditions d'utilisation, nous vous en informerons de manière appropriée, par exemple en affichant une notification dans l'extension ou en envoyant un e-mail.",
    },
    governingLaw: {
      title: "7. Loi applicable",
      content: "Ces conditions d'utilisation sont régies par les lois de la République populaire de Chine.",
    },
    disputeResolution: {
      title: "8. Résolution des litiges",
      content: "Tous les litiges découlant de ces conditions d'utilisation ou liés à celles-ci seront résolus par des négociations amicales. Si aucun accord ne peut être trouvé, les deux parties conviennent de soumettre le litige à la Commission d'arbitrage économique et commerciale internationale de Chine.",
    },
    contactUs: {
      title: "9. Contactez-nous",
      content: "Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter comme suit :",
      email: "1943875844@qq.com",
    },
  },
  changelog: {
    title: "Journal des modifications",
    description: "Restez informé des dernières modifications et améliorations de ClipTrack.",
    versions: [
      {
        version: "1.0.4",
        date: "2024-12-29",
        change: {
          features: [
            "Ajout d'une page de bienvenue pour guider les nouveaux utilisateurs.",
            "Introduction d'un tutoriel d'intégration pour aider les utilisateurs à démarrer rapidement.",
            "Ajout d'un interrupteur de copie automatique pour permettre aux utilisateurs de désactiver l'enregistrement automatique du contenu copié."
          ],
          bugFixes: [
            "Corrigé un problème empêchant la fenêtre de la barre latérale de défiler."
          ]
        }
      },
      {
        version: "1.0.3",
        date: "2024-12-26",
        change: {
          features: [
            "Version initiale de ClipTrack.",
            "Fonctionnalités de base de gestion du presse-papiers, y compris la copie de texte et de liens."
          ],
          bugFixes: []
        }
      }
    ]
  }
} as const;
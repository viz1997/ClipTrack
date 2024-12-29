import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";
export default {
  nav: {
    home: 'Startseite',
    about: 'Über uns',
    howitworks: 'So funktioniert es',
    features: 'Funktionen',
    faq: 'FAQ',
    getStarted: 'Jetzt starten',
    changelog: 'Änderungsprotokoll',
  },
  hero: {
    title: 'Verwalten Sie Ihre Zwischenablage wie ein Profi',
    description: 'ClipTrack ist ein intelligenter Zwischenablage-Manager, der Ihnen hilft, Ihre Produktivität zu steigern und Ihr digitales Leben zu organisieren',
  },
  testimonials: {
    title: 'Was unsere Kunden sagen',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Content Creator',
        content: 'Als Content Creator muss ich schnell mit vielen Zwischenablage-Inhalten umgehen. ClipTrack ermöglicht es mir, Inhalte einfach zu suchen, zu organisieren und zu verwalten!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Freelance Designer',
        content: 'Ich liebe, wie nahtlos sich ClipTrack in meinen Workflow integriert. Der Seitenleistenmodus blockiert meine Hauptinhalte nicht, und die schnelle Suche und Verwaltung von Zwischenablage-Elementen spart mir viel Zeit. Sehr empfehlenswert!',
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Softwareentwickler',
        content: 'Die Funktion von ClipTrack, ursprüngliche Weblinks und genaue Zeitstempel zu speichern, ist fantastisch. Es hilft mir, den Verlauf der Zwischenablage präzise zu verfolgen und zu verwalten!',
      },
    ],
  },
  ready: {
    title: 'Bereit, Ihr Kopieren und Einfügen zu verbessern?',
    description: 'Starten Sie jetzt mit ClipTrack und erleben Sie die Vorteile einer intelligenten Zwischenablage!',
  },
  footer: {
    title: 'Verbessern Sie das Kopieren und Einfügen für Browser-Nutzer',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    contact: 'Kontakt',
    feedback: 'Feedback',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: 'Produkt',
    support: 'Support',
    love: 'Unterstützen Sie das Produkt ❤️',
  },
  features: {
    title: 'Warum ClipTrack?',
    items: [
      {
        subtitle: "Intelligente Zwischenablage",
        content: [
          "Automatisches Speichern von kopiertem Text, Links und Bildern",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "Schnelle Suche",
        content: [
          "Einfaches Finden und Verwalten aller gespeicherten Inhalte",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "Quelllink-Speicherung",
        content: [
          "Automatische Aufzeichnung der Quellwebseite für einfaches Zurückverfolgen",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "Schwebefenster und Seitenleiste",
      painPoint:
        "Der Schwebefenster-Modus ermöglicht eine einfache Anpassung der Position und bietet Flexibilität und Komfort.",
      agitatepainPoint:
        "Der Seitenleisten-Modus blockiert die Hauptinhalte nicht und ist intuitiv zu bedienen.",
      solution:
        "Wählen Sie Ihre bevorzugte Methode.",
      img: visibilityDilemma,
    },
    {
      title: "Einfache Bedienung",
      painPoint:
        "Intuitive Anzeige und einfache Bedienung.",
      agitatepainPoint:
        "Hilft Ihnen, schnell zu suchen, zu bearbeiten und Zwischenablage-Inhalte zu verwalten.",
      solution:
        "Wählen Sie Ihre bevorzugte Methode.",
      img: engagementGap,
    },
    {
      title: "Nahtlose Aufzeichnung",
      painPoint:
        "Keine zusätzlichen Aktionen erforderlich, nahtlose Aufzeichnung sorgt für ein reibungsloses Erlebnis.",
      agitatepainPoint:
        "Behält ursprüngliche Weblinks bei, sodass Sie schnell die Quelle finden und Ihre Produktivität steigern können.",
      solution:
        "Enthält genaue Zeitstempel zur einfachen Nachverfolgung und Verwaltung.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: 'Häufig gestellte Fragen',
    questions: [
      {
        question: "Was ist ClipTrack?",
        answer:
          "ClipTrack ist ein intelligenter Zwischenablage-Manager, der darauf abzielt, die Produktivität zu steigern und das digitale Leben zu organisieren. Es ermöglicht Benutzern, einfach zu suchen, zu organisieren und Zwischenablage-Inhalte zu verwalten, unterstützt Schwebefenster- und Seitenleisten-Modi, bietet nahtlose Aufzeichnungsfunktionen und behält ursprüngliche Weblinks und Zeitstempel bei.",
      },
      {
        question: "Welche Browser unterstützt ClipTrack?",
        answer:
          "ClipTrack unterstützt Chrome und Edge-Browser und wird in Zukunft weitere Browser unterstützen. Wir sind bestrebt, Benutzern eine plattformübergreifende, nahtlose Zwischenablage-Verwaltung zu bieten.",
      },
      {
        question: "Sind meine Zwischenablage-Inhalte sicher?",
        answer:
          "ClipTrack nimmt Ihre Privatsphäre und Datensicherheit sehr ernst. Alle Daten werden lokal in Ihrem Browser gespeichert. Das Löschen des ClipTrack-Plugins oder das manuelle Löschen der Browserdaten löscht alle Daten. Gleichzeitig halten wir uns strikt an die geltenden Gesetze und Vorschriften, um Ihre Daten sicher zu halten.",
      },
      {
        question: "Welche Arten von Kopien unterstützt ClipTrack?",
        answer:
          "ClipTrack unterstützt derzeit Text- und Webseiten-Kopien. Wir werden weiterhin unterstützte Typen erweitern, um die vielfältigen Anforderungen der Benutzer zu erfüllen.",
      },
      {
        question: "Unterstützt ClipTrack die Synchronisierung mehrerer Geräte?",
        answer:
          "Derzeit unterstützt ClipTrack keine Synchronisierung mehrerer Geräte, aber wir arbeiten an dieser Funktion und planen, sie in zukünftigen Versionen einzuführen.",
      },
    ],
  },
  footerSupport: [
    { itemText: "Datenschutz", itemLink: "/de/privacy" },
    { itemText: "Nutzungsbedingungen", itemLink: "/de/terms" },
  ],
  footerProduct: [
    { itemText: "Startseite", itemLink: "#" },
    { itemText: "Funktionen", itemLink: "#features" },
    { itemText: "FAQ", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "Kontakt", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Letzte Aktualisierung",
    introduction: {
      title: "1. Einleitung",
      content: "Willkommen bei der ClipTrack-Zwischenablage-Manager-Erweiterung! Wir legen großen Wert auf Ihre Privatsphäre und sind bestrebt, Ihre persönlichen Daten zu schützen. Diese Datenschutzerklärung erklärt, wie wir Ihre Informationen sammeln, verwenden und schützen.",
    },
    informationWeCollect: {
      title: "2. Informationen, die wir sammeln",
      content: "Die ClipTrack-Erweiterung ist eine Browser-Erweiterung, die effiziente Zwischenablage-Verwaltungsfunktionen bietet. Wir sammeln nur die minimal erforderlichen Informationen, um diese Funktion zu ermöglichen, und alle Daten werden lokal in Ihrem Browser gespeichert und nicht auf unsere Server hochgeladen. Dazu gehören:",
      items: [
        {
          title: "Zwischenablage-Inhalte",
          description: "Um die Zwischenablage-Verwaltungsfunktion bereitzustellen, müssen wir auf die Inhalte zugreifen und sie speichern, die Sie in die Zwischenablage kopieren. Diese Inhalte werden nur lokal in Ihrem Browser gespeichert und nicht auf unsere Server hochgeladen.",
        },
        {
          title: "Nutzungsdaten",
          description: "Um das Produkt und die Dienstleistungen zu verbessern, können wir anonyme Nutzungsdaten sammeln, wie z.B. die Häufigkeit der Nutzung der Erweiterung, die Nutzung der Funktionen usw. Diese Daten enthalten keine persönlichen Identifikationsinformationen und werden nicht auf unsere Server hochgeladen.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. Wie wir Ihre Informationen verwenden",
      content: "Die von uns gesammelten Informationen werden für folgende Zwecke verwendet:",
      items: [
        {
          title: "Bereitstellung und Verbesserung der Erweiterungsfunktionen",
          description: "Wir verwenden Ihre Zwischenablage-Inhalte, um die Kernfunktionen der Erweiterung zu ermöglichen, und verwenden anonyme Nutzungsdaten, um das Produkt und die Dienstleistungen zu verbessern.",
        },
        {
          title: "Personalisierung des Erlebnisses",
          description: "Wir können Ihre Nutzungsdaten verwenden, um Ihnen ein personalisierteres Erlebnis zu bieten.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. Wie wir Ihre Informationen schützen",
      content: "Wir ergreifen die folgenden Maßnahmen, um die Sicherheit Ihrer Informationen zu gewährleisten:",
      items: [
        {
          title: "Lokale Speicherung",
          description: "Ihre Zwischenablage-Inhalte und Nutzungsdaten werden nur lokal in Ihrem Browser gespeichert und nicht auf Server hochgeladen.",
        },
        {
          title: "Datenverschlüsselung",
          description: "Wir verwenden Verschlüsselungstechnologien, um Ihre Informationen während der Übertragung und Speicherung zu schützen.",
        },
        {
          title: "Zugriffskontrolle",
          description: "Wir beschränken den Zugriff auf Ihre Informationen auf die Personen, die diese Informationen verarbeiten müssen.",
        },
      ],
    },
    yourRights: {
      title: "5. Ihre Rechte",
      content: "Sie haben das Recht, auf die von uns gesammelten Informationen zuzugreifen, sie zu korrigieren und zu löschen. Sie können Ihre Rechte wie folgt ausüben:",
      items: [
        {
          title: "Zugriff und Korrektur",
          description: "Sie können jederzeit auf die in Ihrem lokalen Browser gespeicherten Zwischenablage-Inhalte zugreifen und sie korrigieren.",
        },
        {
          title: "Löschung",
          description: "Sie können jederzeit die in Ihrem lokalen Browser gespeicherten Zwischenablage-Inhalte sowie den Cache der Erweiterung löschen. Das Deinstallieren der Erweiterung oder das Löschen der Browser-Daten löscht automatisch alle relevanten Informationen.",
        },
      ],
    },
    policyChanges: {
      title: "6. Änderungen der Datenschutzrichtlinie",
      content: "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wenn wir wesentliche Änderungen an der Datenschutzrichtlinie vornehmen, werden wir Sie auf geeignete Weise benachrichtigen, z.B. durch eine Anzeige in der Erweiterung oder eine E-Mail.",
    },
    contactUs: {
      title: "7. Kontaktieren Sie uns",
      content: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, kontaktieren Sie uns bitte wie folgt:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Nutzungsbedingungen",
    lastUpdated: "Letzte Aktualisierung",
    introduction: {
      title: "1. Annahme der Bedingungen",
      content: "Durch die Nutzung der ClipTrack-Zwischenablage-Manager-Erweiterung erklären Sie sich damit einverstanden, an diese Nutzungsbedingungen gebunden zu sein. Wenn Sie diesen Nutzungsbedingungen nicht zustimmen, verwenden Sie die Erweiterung nicht.",
    },
    license: {
      title: "2. Nutzungslizenz",
      content: "Wir gewähren Ihnen eine eingeschränkte, nicht exklusive, nicht übertragbare Lizenz, die ClipTrack-Erweiterung auf Ihren persönlichen Geräten zu installieren und zu nutzen, ausschließlich für den persönlichen Gebrauch.",
    },
    userResponsibilities: {
      title: "3. Benutzerverantwortung",
      content: "Sie erklären sich damit einverstanden:",
      items: [
        "Die ClipTrack-Erweiterung nur für legale Zwecke zu verwenden.",
        "Die ClipTrack-Erweiterung nicht zu verwenden, um die Rechte Dritter zu verletzen.",
        "Den normalen Betrieb der ClipTrack-Erweiterung nicht zu stören oder zu beeinträchtigen.",
      ],
    },
    disclaimer: {
      title: "4. Haftungsausschluss",
      content: "Die ClipTrack-Erweiterung wird „wie besehen“ bereitgestellt, ohne jegliche ausdrückliche oder stillschweigende Garantie, einschließlich, aber nicht beschränkt auf die Garantie der Marktgängigkeit, der Eignung für einen bestimmten Zweck und der Nichtverletzung von Rechten Dritter.",
    },
    limitationOfLiability: {
      title: "5. Haftungsbeschränkung",
      content: "In keinem Fall haften wir Ihnen oder Dritten gegenüber für direkte, indirekte, zufällige, besondere oder Folgeschäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung der ClipTrack-Erweiterung entstehen.",
    },
    changesToTerms: {
      title: "6. Änderungen der Nutzungsbedingungen",
      content: "Wir können diese Nutzungsbedingungen von Zeit zu Zeit aktualisieren. Wenn wir wesentliche Änderungen an den Nutzungsbedingungen vornehmen, werden wir Sie auf geeignete Weise benachrichtigen, z.B. durch eine Anzeige in der Erweiterung oder eine E-Mail.",
    },
    governingLaw: {
      title: "7. Anwendbares Recht",
      content: "Diese Nutzungsbedingungen unterliegen dem Recht der Volksrepublik China.",
    },
    disputeResolution: {
      title: "8. Streitbeilegung",
      content: "Alle Streitigkeiten, die sich aus diesen Nutzungsbedingungen ergeben oder in Zusammenhang damit stehen, sollen durch freundliche Verhandlungen beigelegt werden. Wenn keine Einigung erzielt werden kann, vereinbaren beide Parteien, die Streitigkeit der China International Economic and Trade Arbitration Commission zur Schlichtung vorzulegen.",
    },
    contactUs: {
      title: "9. Kontaktieren Sie uns",
      content: "Wenn Sie Fragen zu diesen Nutzungsbedingungen haben, kontaktieren Sie uns bitte wie folgt:",
      email: "1943875844@qq.com",
    },
  },
  changelog: {
    title: "Änderungsprotokoll",
    description: "Bleiben Sie über die neuesten Änderungen und Verbesserungen in ClipTrack auf dem Laufenden.",
    versions: [
      {
        version: "1.0.4",
        date: "2024-12-29",
        change: {
          features: [
            "Eine Installations-Willkommensseite wurde hinzugefügt, um neue Benutzer zu führen.",
            "Ein Onboarding-Tutorial wurde eingeführt, um Benutzern den schnellen Einstieg zu erleichtern.",
            "Ein automatischer Kopieren-Schalter wurde hinzugefügt, um Benutzern zu ermöglichen, die automatische Aufzeichnung von kopierten Inhalten zu deaktivieren."
          ],
          bugFixes: [
            "Behob ein Problem, bei dem das Seitenleistenfenster nicht scrollen konnte."
          ]
        }
      },
      {
        version: "1.0.3",
        date: "2024-12-26",
        change: {
          features: [
            "Erstveröffentlichung von ClipTrack.",
            "Grundlegende Zwischenablage-Verwaltungsfunktionen, einschließlich Text- und Link-Kopieren, werden unterstützt."
          ],
          bugFixes: []
        }
      }
    ]
  }
} as const;
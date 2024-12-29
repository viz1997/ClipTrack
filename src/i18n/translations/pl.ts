
import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: 'Strona główna',
    about: 'O nas',
    howitworks: 'Jak to działa',
    features: 'Funkcje',
    faq: 'FAQ',
    getStarted: 'Rozpocznij',
  },
  hero: {
    title: 'Zarządzaj schowkiem jak profesjonalista',
    description: 'ClipTrack to inteligentny menedżer schowka, który pomaga zwiększyć produktywność i zorganizować cyfrowe życie',
  },
  testimonials: {
    title: 'Co mówią nasi klienci',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Twórca treści',
        content: 'Jako twórca treści muszę szybko zarządzać wieloma elementami schowka. ClipTrack pozwala mi łatwo wyszukiwać, organizować i zarządzać zawartością schowka!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Projektantka freelancer',
        content: 'Uwielbiam, jak ClipTrack płynnie integruje się z moim przepływem pracy. Tryb paska bocznego nie blokuje mojej głównej zawartości, a szybkie wyszukiwanie i zarządzanie elementami schowka oszczędza mi dużo czasu. Gorąco polecam!',
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Programista',
        content: 'Funkcja ClipTrack, która zachowuje oryginalne linki do stron internetowych i zawiera dokładne znaczniki czasu, jest po prostu świetna. Pomaga mi dokładnie śledzić i zarządzać historią schowka!',
      },
    ],
  },
  ready: {
    title: 'Gotowy, aby poprawić swoje doświadczenie kopiowania i wklejania?',
    description: 'Zacznij korzystać z ClipTrack już teraz i doświadcz korzyści inteligentnego schowka!',
  },
  footer: {
    title: 'Poprawa doświadczenia kopiowania i wklejania dla użytkowników przeglądarek',
    privacy: 'Polityka prywatności',
    terms: 'Warunki korzystania z usługi',
    contact: 'Kontakt',
    feedback: 'Opinie',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: 'Produkt',
    support: 'Wsparcie',
    love: 'Wesprzyj produkt ❤️',
  },
  features: {
    title: 'Dlaczego wybrać ClipTrack?',
    items: [
      {
        subtitle: "Inteligentny schowek",
        content: [
          "Automatycznie zapisuje skopiowany tekst, linki i obrazy",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "Szybkie wyszukiwanie",
        content: [
          "Łatwo znajdź i zarządzaj wszystkimi zapisanymi treściami",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "Zapisywanie linków źródłowych",
        content: [
          "Automatycznie zapisuje oryginalną stronę internetową dla łatwego śledzenia",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "Pływające okno i pasek boczny",
      painPoint:
        "Tryb pływającego okna pozwala na łatwe dostosowanie pozycji, oferując elastyczność i wygodę.",
      agitatepainPoint:
        "Tryb paska bocznego nie blokuje głównej zawartości i jest intuicyjny w użyciu.",
      solution:
        "Wybierz preferowaną metodę.",
      img: visibilityDilemma,
    },
    {
      title: "Łatwość użycia",
      painPoint:
        "Intuicyjny wyświetlacz i łatwość użycia.",
      agitatepainPoint:
        "Pomaga szybko wyszukiwać, manipulować i zarządzać zawartością schowka.",
      solution:
        "Wybierz preferowaną metodę.",
      img: engagementGap,
    },
    {
      title: "Bezproblemowe zapisywanie",
      painPoint:
        "Bez dodatkowych działań, bezproblemowe zapisywanie zapewnia płynne doświadczenie.",
      agitatepainPoint:
        "Zachowuje oryginalne linki do stron internetowych, pozwalając szybko znaleźć źródło i zwiększyć produktywność.",
      solution:
        "Zawiera dokładne znaczniki czasu dla łatwego śledzenia i zarządzania.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: 'Często zadawane pytania',
    questions: [
      {
        question: "Co to jest ClipTrack?",
        answer:
          "ClipTrack to inteligentne narzędzie do zarządzania schowkiem, zaprojektowane, aby zwiększyć produktywność i zorganizować cyfrowe życie. Pozwala użytkownikom łatwo wyszukiwać, organizować i zarządzać zawartością schowka, obsługuje tryby pływającego okna i paska bocznego, oferuje funkcje bezproblemowego zapisywania i zachowuje oryginalne linki do stron internetowych oraz znaczniki czasu.",
      },
      {
        question: "Jakie przeglądarki obsługuje ClipTrack?",
        answer:
          "ClipTrack obsługuje przeglądarki Chrome i Edge oraz będzie obsługiwać więcej przeglądarek w przyszłości. Zobowiązujemy się do zapewnienia użytkownikom wieloplatformowego, bezproblemowego doświadczenia zarządzania schowkiem.",
      },
      {
        question: "Czy moja zawartość schowka jest bezpieczna?",
        answer:
          "ClipTrack bardzo poważnie traktuje Twoją prywatność i bezpieczeństwo danych. Wszystkie dane są przechowywane lokalnie w Twojej przeglądarce. Usunięcie rozszerzenia ClipTrack lub ręczne usunięcie danych przeglądarki usuwa wszystkie dane. Jednocześnie ściśle przestrzegamy obowiązujących przepisów i regulacji, aby zapewnić bezpieczeństwo Twoich danych.",
      },
      {
        question: "Jakie typy kopiowania obsługuje ClipTrack?",
        answer:
          "ClipTrack obecnie obsługuje kopiowanie tekstu i stron internetowych. Będziemy nadal rozszerzać obsługiwane typy, aby zaspokoić różnorodne potrzeby użytkowników.",
      },
      {
        question: "Czy ClipTrack obsługuje synchronizację między urządzeniami?",
        answer:
          "Obecnie ClipTrack nie obsługuje synchronizacji między urządzeniami, ale pracujemy nad tą funkcją i planujemy wprowadzić ją w przyszłych wersjach.",
      },
    ],
  },
  footerSupport: [
    { itemText: "Polityka prywatności", itemLink: "/pl/privacy" },
    { itemText: "Warunki korzystania z usługi", itemLink: "/pl/terms" },
  ],
  footerProduct: [
    { itemText: "Strona główna", itemLink: "#" },
    { itemText: "Funkcje", itemLink: "#features" },
    { itemText: "FAQ", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "Kontakt", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "Polityka prywatności",
    lastUpdated: "Ostatnia aktualizacja",
    introduction: {
      title: "1. Wprowadzenie",
      content: "Witamy w rozszerzeniu do zarządzania schowkiem ClipTrack! Bardzo poważnie traktujemy Twoją prywatność i zobowiązujemy się do ochrony Twoich danych osobowych. Ta polityka prywatności wyjaśnia, w jaki sposób zbieramy, wykorzystujemy i chronimy Twoje informacje.",
    },
    informationWeCollect: {
      title: "2. Informacje, które zbieramy",
      content: "Rozszerzenie ClipTrack to rozszerzenie przeglądarki zaprojektowane, aby zapewnić wydajne funkcje zarządzania schowkiem. Zbieramy tylko minimalne informacje niezbędne do umożliwienia tej funkcjonalności, a wszystkie dane są przechowywane lokalnie w Twojej przeglądarce i nie są przesyłane na nasze serwery. Obejmuje to:",
      items: [
        {
          title: "Zawartość schowka",
          description: "Aby zapewnić funkcjonalność zarządzania schowkiem, musimy uzyskać dostęp i przechowywać zawartość, którą kopiujesz do schowka. Ta zawartość jest przechowywana tylko lokalnie w Twojej przeglądarce i nie jest przesyłana na nasze serwery.",
        },
        {
          title: "Dane użytkowania",
          description: "Aby ulepszyć produkt i usługi, możemy zbierać anonimowe dane użytkowania, takie jak częstotliwość korzystania z rozszerzenia, wykorzystanie funkcji itp. Te dane nie zawierają informacji umożliwiających identyfikację osoby i nie są przesyłane na nasze serwery.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. Jak wykorzystujemy Twoje informacje",
      content: "Informacje, które zbieramy, są wykorzystywane do następujących celów:",
      items: [
        {
          title: "Zapewnianie i ulepszanie funkcji rozszerzenia",
          description: "Wykorzystujemy zawartość Twojego schowka, aby umożliwić podstawowe funkcje rozszerzenia, i wykorzystujemy anonimowe dane użytkowania, aby ulepszyć produkt i usługi.",
        },
        {
          title: "Personalizacja doświadczenia",
          description: "Możemy wykorzystywać Twoje dane użytkowania, aby zapewnić bardziej spersonalizowane doświadczenie.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. Jak chronimy Twoje informacje",
      content: "Podejmujemy następujące środki, aby chronić bezpieczeństwo Twoich informacji:",
      items: [
        {
          title: "Przechowywanie lokalne",
          description: "Zawartość Twojego schowka i dane użytkowania są przechowywane tylko lokalnie w Twojej przeglądarce i nie są przesyłane na serwery.",
        },
        {
          title: "Szyfrowanie danych",
          description: "Wykorzystujemy technologie szyfrowania, aby chronić Twoje informacje podczas przesyłania i przechowywania.",
        },
        {
          title: "Kontrola dostępu",
          description: "Ograniczamy dostęp do Twoich informacji tylko do osób, które muszą je przetwarzać.",
        },
      ],
    },
    yourRights: {
      title: "5. Twoje prawa",
      content: "Masz prawo dostępu, poprawiania i usuwania informacji, które zbieramy. Możesz wykonywać swoje prawa w następujący sposób:",
      items: [
        {
          title: "Dostęp i poprawianie",
          description: "Możesz w każdej chwili uzyskać dostęp i poprawić zawartość swojego schowka przechowywaną lokalnie w Twojej przeglądarce.",
        },
        {
          title: "Usuwanie",
          description: "Możesz w każdej chwili usunąć zawartość swojego schowka przechowywaną lokalnie w Twojej przeglądarce oraz wyczyścić pamięć podręczną rozszerzenia. Usunięcie rozszerzenia lub ręczne usunięcie danych przeglądarki automatycznie usuwa wszystkie powiązane informacje.",
        },
      ],
    },
    policyChanges: {
      title: "6. Zmiany w polityce prywatności",
      content: "Możemy od czasu do czasu aktualizować tę politykę prywatności. Jeśli wprowadzimy znaczące zmiany w polityce prywatności, powiadomimy Cię w odpowiedni sposób, na przykład wyświetlając powiadomienie w rozszerzeniu lub wysyłając e-mail.",
    },
    contactUs: {
      title: "7. Skontaktuj się z nami",
      content: "Jeśli masz pytania dotyczące tej polityki prywatności, skontaktuj się z nami w następujący sposób:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Warunki korzystania z usługi",
    lastUpdated: "Ostatnia aktualizacja",
    introduction: {
      title: "1. Akceptacja warunków",
      content: "Korzystając z rozszerzenia do zarządzania schowkiem ClipTrack, zgadzasz się być związany niniejszymi warunkami korzystania z usługi. Jeśli nie zgadzasz się z tymi warunkami, nie korzystaj z rozszerzenia.",
    },
    license: {
      title: "2. Licencja na korzystanie",
      content: "Przyznajemy Ci ograniczoną, niewyłączną, niepodlegającą przeniesieniu licencję na instalowanie i korzystanie z rozszerzenia ClipTrack na Twoich urządzeniach osobistych wyłącznie do użytku osobistego.",
    },
    userResponsibilities: {
      title: "3. Obowiązki użytkownika",
      content: "Zgadzasz się:",
      items: [
        "Korzystać z rozszerzenia ClipTrack wyłącznie do celów zgodnych z prawem.",
        "Nie używać rozszerzenia ClipTrack do naruszania praw własności intelektualnej lub innych praw osób trzecich.",
        "Nie zakłócać ani nie utrudniać normalnego funkcjonowania rozszerzenia ClipTrack.",
      ],
    },
    disclaimer: {
      title: "4. Zrzeczenie się odpowiedzialności",
      content: "Rozszerzenie ClipTrack jest dostarczane „tak, jak jest”, bez jakichkolwiek gwarancji, wyraźnych lub dorozumianych, w tym, ale nie ograniczając się do, gwarancji handlowości, przydatności do określonego celu i nie naruszania praw.",
    },
    limitationOfLiability: {
      title: "5. Ograniczenie odpowiedzialności",
      content: "W żadnym wypadku nie będziemy odpowiedzialni wobec Ciebie lub jakiejkolwiek osoby trzeciej za jakiekolwiek bezpośrednie, pośrednie, przypadkowe, specjalne lub wynikowe szkody wynikające z korzystania lub niemożności korzystania z rozszerzenia ClipTrack.",
    },
    changesToTerms: {
      title: "6. Zmiany w warunkach korzystania z usługi",
      content: "Możemy od czasu do czasu aktualizować niniejsze warunki korzystania z usługi. Jeśli wprowadzimy znaczące zmiany w warunkach, powiadomimy Cię w odpowiedni sposób, na przykład wyświetlając powiadomienie w rozszerzeniu lub wysyłając e-mail.",
    },
    governingLaw: {
      title: "7. Obowiązujące prawo",
      content: "Niniejsze warunki korzystania z usługi podlegają prawu Chińskiej Republiki Ludowej.",
    },
    disputeResolution: {
      title: "8. Rozstrzyganie sporów",
      content: "Wszelkie spory wynikające z niniejszych warunków korzystania z usługi lub związane z nimi będą rozstrzygane poprzez przyjazne negocjacje. Jeśli nie można osiągnąć porozumienia, obie strony zgadzają się na przekazanie sporu do Chińskiej Międzynarodowej Komisji Arbitrażowej Gospodarczego i Handlowego.",
    },
    contactUs: {
      title: "9. Skontaktuj się z nami",
      content: "Jeśli masz pytania dotyczące niniejszych warunków korzystania z usługi, skontaktuj się z nami w następujący sposób:",
      email: "1943875844@qq.com",
    },
  },
} as const;

import visibilityDilemma from "../../assets/images/visibility-dilemma.png";
import engagementGap from "../../assets/images/engagement-gap.png";
import resultsInHibernation from "../../assets/images/results-in-hibernation.gif";
// 导入所有需要的图像
import image1 from "../../assets/images/user1.jpg";
import image2 from "../../assets/images/user2.jpg";
import image3 from "../../assets/images/user3.jpg";

export default {
  nav: {
    home: 'Início',
    about: 'Sobre',
    howitworks: 'Como funciona',
    features: 'Funcionalidades',
    faq: 'Perguntas frequentes',
    getStarted: 'Começar',
  },
  hero: {
    title: 'Gerencie sua área de transferência como um profissional',
    description: 'ClipTrack é um gerenciador inteligente de área de transferência que ajuda a aumentar sua produtividade e organizar sua vida digital',
  },
  testimonials: {
    title: 'O que nossos clientes dizem',
    items: [
      {
        image: image1,
        name: 'Emily Brown',
        job: 'Criadora de conteúdo',
        content: 'Como criadora de conteúdo, preciso gerenciar rapidamente muitos itens da área de transferência. O ClipTrack me permite pesquisar, organizar e gerenciar facilmente o conteúdo da área de transferência!',
      },
      {
        image: image2,
        name: 'Sophia Chen',
        job: 'Designer freelancer',
        content: 'Adoro como o ClipTrack se integra perfeitamente ao meu fluxo de trabalho. O modo de barra lateral não bloqueia meu conteúdo principal, e a pesquisa e gerenciamento rápidos de itens da área de transferência economizam muito tempo. Recomendo fortemente!',
      },
      {
        image: image3,
        name: 'John Doe',
        job: 'Desenvolvedor de software',
        content: 'A função do ClipTrack de manter links da web originais e incluir carimbos de data e hora precisos é simplesmente incrível. Isso me ajuda a rastrear e gerenciar com precisão o histórico da área de transferência!',
      },
    ],
  },
  ready: {
    title: 'Pronto para melhorar sua experiência de copiar e colar?',
    description: 'Comece a usar o ClipTrack agora e experimente os benefícios de uma área de transferência inteligente!',
  },
  footer: {
    title: 'Melhorando a experiência de copiar e colar para usuários de navegadores',
    privacy: 'Política de privacidade',
    terms: 'Termos de serviço',
    contact: 'Contato',
    feedback: 'Feedback',
    github: 'GitHub',
    discord: 'Discord',
    twitter: 'Twitter',
    product: 'Produto',
    support: 'Suporte',
    love: 'Apoie o produto ❤️',
  },
  features: {
    title: 'Por que escolher o ClipTrack?',
    items: [
      {
        subtitle: "Área de transferência inteligente",
        content: [
          "Salva automaticamente textos, links e imagens copiados",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M256 0c17.7 0 32 14.3 32 32V42.4c93.7 13.9 167.7 88 181.6 181.6H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H469.6c-13.9 93.7-88 167.7-181.6 181.6V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V469.6C130.3 455.7 56.3 381.7 42.4 288H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H42.4C56.3 130.3 130.3 56.3 224 42.4V32c0-17.7 14.3-32 32-32zM107.4 288c12.5 58.3 58.4 104.1 116.6 116.6V384c0-17.7 14.3-32 32-32s32 14.3 32 32v20.6c58.3-12.5 104.1-58.4 116.6-116.6H384c-17.7 0-32-14.3-32-32s14.3-32 32-32h20.6C392.1 165.7 346.3 119.9 288 107.4V128c0 17.7-14.3 32-32 32s-32-14.3-32-32V107.4C165.7 119.9 119.9 165.7 107.4 224H128c17.7 0 32 14.3 32 32s-14.3 32-32 32H107.4zM256 224a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>`,
      },
      {
        subtitle: "Pesquisa rápida",
        content: [
          "Encontre e gerencie facilmente todo o conteúdo salvo",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm306.7 69.1L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"/></svg>`,
      },
      {
        subtitle: "Salvamento de links de origem",
        content: [
          "Grava automaticamente a página da web de origem para fácil rastreamento",
        ],
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" stroke-width="1.5" fill="currentColor" class="w-6 h-6"><path d="M544 248v3.3l69.7-69.7c21.9-21.9 21.9-57.3 0-79.2L535.6 24.4c-21.9-21.9-57.3-21.9-79.2 0L416.3 64.5c-2.7-.3-5.5-.5-8.3-.5H296c-37.1 0-67.6 28-71.6 64H224V248c0 22.1 17.9 40 40 40s40-17.9 40-40V176c0 0 0-.1 0-.1V160l16 0 136 0c0 0 0 0 .1 0H464c44.2 0 80 35.8 80 80v8zM336 192v56c0 39.8-32.2 72-72 72s-72-32.2-72-72V129.4c-35.9 6.2-65.8 32.3-76 68.2L99.5 255.2 26.3 328.4c-21.9 21.9-21.9 57.3 0 79.2l78.1 78.1c21.9 21.9 57.3 21.9 79.2 0l37.7-37.7c.9 0 1.8 .1 2.7 .1H384c26.5 0 48-21.5 48-48c0-5.6-1-11-2.7-16H432c26.5 0 48-21.5 48-48c0-12.8-5-24.4-13.2-33c25.7-5 45.1-27.6 45.2-54.8v-.4c-.1-30.8-25.1-55.8-56-55.8c0 0 0 0 0 0l-120 0z"/></svg>`,
      },
    ],
  },
  solutions: [
    {
      title: "Janela flutuante e barra lateral",
      painPoint:
        "O modo de janela flutuante permite ajustar facilmente a posição, oferecendo flexibilidade e conveniência.",
      agitatepainPoint:
        "O modo de barra lateral não bloqueia o conteúdo principal e é intuitivo de usar.",
      solution:
        "Escolha seu método preferido.",
      img: visibilityDilemma,
    },
    {
      title: "Uso simples",
      painPoint:
        "Exibição intuitiva e fácil de usar.",
      agitatepainPoint:
        "Ajuda você a pesquisar, manipular e gerenciar rapidamente o conteúdo da área de transferência.",
      solution:
        "Escolha seu método preferido.",
      img: engagementGap,
    },
    {
      title: "Gravação contínua",
      painPoint:
        "Nenhuma ação adicional necessária, a gravação contínua garante uma experiência suave.",
      agitatepainPoint:
        "Mantém os links da web originais, permitindo que você encontre rapidamente a fonte e aumente sua produtividade.",
      solution:
        "Inclui carimbos de data e hora precisos para fácil rastreamento e gerenciamento.",
      img: resultsInHibernation,
    },
  ],
  faqs: {
    title: 'Perguntas frequentes',
    questions: [
      {
        question: "O que é o ClipTrack?",
        answer:
          "O ClipTrack é uma ferramenta inteligente de gerenciamento de área de transferência projetada para aumentar a produtividade e organizar a vida digital. Ele permite que os usuários pesquisem, organizem e gerenciem facilmente o conteúdo da área de transferência, suporta modos de janela flutuante e barra lateral, oferece funções de gravação contínua e mantém links da web originais e carimbos de data e hora.",
      },
      {
        question: "Quais navegadores o ClipTrack suporta?",
        answer:
          "O ClipTrack suporta os navegadores Chrome e Edge e suportará mais navegadores no futuro. Estamos comprometidos em fornecer aos usuários uma experiência de gerenciamento de área de transferência multiplataforma e contínua.",
      },
      {
        question: "Meu conteúdo da área de transferência é seguro?",
        answer:
          "O ClipTrack leva sua privacidade e segurança de dados muito a sério. Todos os dados são armazenados localmente no seu navegador. A remoção da extensão ClipTrack ou a exclusão manual dos dados do navegador exclui todos os dados. Ao mesmo tempo, seguimos rigorosamente as leis e regulamentos aplicáveis para garantir a segurança dos seus dados.",
      },
      {
        question: "Quais tipos de cópia o ClipTrack suporta?",
        answer:
          "O ClipTrack atualmente suporta cópias de texto e páginas da web. Continuaremos a expandir os tipos suportados para atender às diversas necessidades dos usuários.",
      },
      {
        question: "O ClipTrack suporta sincronização entre dispositivos?",
        answer:
          "Atualmente, o ClipTrack não suporta sincronização entre dispositivos, mas estamos trabalhando nesse recurso e planejamos introduzi-lo em versões futuras.",
      },
    ],
  },
  footerSupport: [
    { itemText: "Política de privacidade", itemLink: "/pt/privacy" },
    { itemText: "Termos de serviço", itemLink: "/pt/terms" },
  ],
  footerProduct: [
    { itemText: "Início", itemLink: "#" },
    { itemText: "Funcionalidades", itemLink: "#features" },
    { itemText: "Perguntas frequentes", itemLink: "#faq" },
  ],
  footerLove: [
    { itemText: "Contato", itemLink: "#" },
  ],
  privacyPolicy: {
    title: "Política de privacidade",
    lastUpdated: "Última atualização",
    introduction: {
      title: "1. Introdução",
      content: "Bem-vindo à extensão do gerenciador de área de transferência ClipTrack! Levamos sua privacidade muito a sério e nos comprometemos a proteger suas informações pessoais. Esta política de privacidade explica como coletamos, usamos e protegemos suas informações.",
    },
    informationWeCollect: {
      title: "2. Informações que coletamos",
      content: "A extensão ClipTrack é uma extensão de navegador projetada para fornecer funcionalidades eficientes de gerenciamento de área de transferência. Coletamos apenas as informações mínimas necessárias para permitir essa funcionalidade, e todos os dados são armazenados localmente no seu navegador e não são enviados para nossos servidores. Isso inclui:",
      items: [
        {
          title: "Conteúdo da área de transferência",
          description: "Para fornecer a funcionalidade de gerenciamento de área de transferência, precisamos acessar e armazenar o conteúdo que você copia para a área de transferência. Esse conteúdo é armazenado apenas localmente no seu navegador e não é enviado para nossos servidores.",
        },
        {
          title: "Dados de uso",
          description: "Para melhorar o produto e os serviços, podemos coletar dados de uso anônimos, como a frequência de uso da extensão, o uso de funcionalidades, etc. Esses dados não contêm informações de identificação pessoal e não são enviados para nossos servidores.",
        },
      ],
    },
    howWeUseYourInformation: {
      title: "3. Como usamos suas informações",
      content: "As informações que coletamos são usadas para os seguintes propósitos:",
      items: [
        {
          title: "Fornecer e melhorar as funcionalidades da extensão",
          description: "Usamos o conteúdo da sua área de transferência para permitir as funcionalidades principais da extensão e usamos dados de uso anônimos para melhorar o produto e os serviços.",
        },
        {
          title: "Personalização da experiência",
          description: "Podemos usar seus dados de uso para oferecer uma experiência mais personalizada.",
        },
      ],
    },
    howWeProtectYourInformation: {
      title: "4. Como protegemos suas informações",
      content: "Tomamos as seguintes medidas para proteger a segurança de suas informações:",
      items: [
        {
          title: "Armazenamento local",
          description: "O conteúdo da sua área de transferência e os dados de uso são armazenados apenas localmente no seu navegador e não são enviados para servidores.",
        },
        {
          title: "Criptografia de dados",
          description: "Usamos tecnologias de criptografia para proteger suas informações durante a transmissão e o armazenamento.",
        },
        {
          title: "Controle de acesso",
          description: "Limitamos o acesso às suas informações apenas às pessoas que precisam processar essas informações.",
        },
      ],
    },
    yourRights: {
      title: "5. Seus direitos",
      content: "Você tem o direito de acessar, corrigir e excluir as informações que coletamos. Você pode exercer seus direitos da seguinte forma:",
      items: [
        {
          title: "Acesso e correção",
          description: "Você pode acessar e corrigir o conteúdo da sua área de transferência armazenado localmente no seu navegador a qualquer momento.",
        },
        {
          title: "Exclusão",
          description: "Você pode excluir o conteúdo da sua área de transferência armazenado localmente no seu navegador e limpar o cache da extensão a qualquer momento. A remoção da extensão ou a exclusão manual dos dados do navegador exclui automaticamente todas as informações relevantes.",
        },
      ],
    },
    policyChanges: {
      title: "6. Alterações na política de privacidade",
      content: "Podemos atualizar esta política de privacidade de tempos em tempos. Se fizermos alterações significativas na política de privacidade, notificaremos você de forma apropriada, por exemplo, exibindo uma notificação na extensão ou enviando um e-mail.",
    },
    contactUs: {
      title: "7. Contate-nos",
      content: "Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco da seguinte forma:",
      email: "1943875844@qq.com",
    },
  },
  termsOfService: {
    title: "Termos de serviço",
    lastUpdated: "Última atualização",
    introduction: {
      title: "1. Aceitação dos termos",
      content: "Ao usar a extensão do gerenciador de área de transferência ClipTrack, você concorda em ficar vinculado a estes termos de serviço. Se você não concordar com estes termos de serviço, não use a extensão.",
    },
    license: {
      title: "2. Licença de uso",
      content: "Concedemos a você uma licença limitada, não exclusiva, intransferível para instalar e usar a extensão ClipTrack em seus dispositivos pessoais, apenas para uso pessoal.",
    },
    userResponsibilities: {
      title: "3. Responsabilidades do usuário",
      content: "Você concorda:",
      items: [
        "Usar a extensão ClipTrack apenas para fins legais.",
        "Não usar a extensão ClipTrack para violar os direitos de propriedade intelectual ou outros direitos de terceiros.",
        "Não perturbar ou prejudicar o funcionamento normal da extensão ClipTrack.",
      ],
    },
    disclaimer: {
      title: "4. Isenção de responsabilidade",
      content: "A extensão ClipTrack é fornecida \"no estado em que se encontra\", sem qualquer garantia, expressa ou implícita, incluindo, mas não se limitando a, garantias de comercialização, adequação a um propósito específico e não violação.",
    },
    limitationOfLiability: {
      title: "5. Limitação de responsabilidade",
      content: "Em nenhum caso seremos responsáveis perante você ou qualquer terceiro por quaisquer danos diretos, indiretos, incidentais, especiais ou consequenciais decorrentes do uso ou da incapacidade de uso da extensão ClipTrack.",
    },
    changesToTerms: {
      title: "6. Alterações nos termos de serviço",
      content: "Podemos atualizar estes termos de serviço de tempos em tempos. Se fizermos alterações significativas nos termos de serviço, notificaremos você de forma apropriada, por exemplo, exibindo uma notificação na extensão ou enviando um e-mail.",
    },
    governingLaw: {
      title: "7. Lei aplicável",
      content: "Estes termos de serviço são regidos pelas leis da República Popular da China.",
    },
    disputeResolution: {
      title: "8. Resolução de disputas",
      content: "Todas as disputas decorrentes destes termos de serviço ou relacionadas a eles serão resolvidas por meio de negociações amigáveis. Se um acordo não puder ser alcançado, ambas as partes concordam em submeter a disputa à Comissão de Arbitragem Econômica e Comercial Internacional da China.",
    },
    contactUs: {
      title: "9. Contate-nos",
      content: "Se você tiver dúvidas sobre estes termos de serviço, entre em contato conosco da seguinte forma:",
      email: "1943875844@qq.com",
    },
  },
} as const;
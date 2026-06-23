export type Tamanho = {
  label: string;
  larguraPol: number;
  espessuraPol: number;
  volumeL: number;
};

export type Destaques = {
  tipoDePrancha: string;
  nivelDeHabilidade: string;
  rabeta: string | null;
  tamanhoDaOnda: string;
  rocker?: string | null;
  quilhas?: string | null;
};

export type StatusConteudo = "completo" | "em-validacao";

export type Modelo = {
  slug: string;
  nome: string;
  acento: string;
  logo: string;
  logoWhite: string;
  mockup: string;
  mockupFront: string;
  fotos: string[];
  video3d?: string;
  youtube?: string;
  descricaoCurta: string;
  descricao: string;
  porQueEscolher: string[];
  indicadoPara: string;
  destaques: Destaques;
  tamanhos: Tamanho[];
  statusConteudo: StatusConteudo;
};

export const pranchas: Modelo[] = [
  {
    slug: "hell-fish",
    nome: "HELL FISH",
    acento: "#17BEBB",
    logo: "/pranchas/hell-fish/FrogSurfboards-hell-fish-logo.png",
    logoWhite: "/pranchas/hell-fish/FrogSurfboards-hell-fish-logo-white.png",
    mockup: "/pranchas/hell-fish/FrogSurfboards-hell-fish-mockup.png",
    mockupFront: "/pranchas/hell-fish/FrogSurfboards-hell-fish-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — pasta Images/ não copiada ainda]
    descricaoCurta: "Pequenas ondas, grandes manobras. A prancha que acelera sua diversão.",
    descricao:
      "A HELL FISH é realmente enfeitiçada. Uma versão moderna das clássicas fishs dos anos 70, esse modelo foi criado para o surfista experiente que quer mais diversão nos dias de ondas pequenas e cheias.\n\nCom rocker baixo, ela entrega uma remada fácil e entrada rápida nas ondas, te fazendo voar mesmo quando o mar tá só na marola. O double concave no fundo e a rabeta swallow garantem resposta rápida e controle total nas manobras.\n\nA HELL FISH brilha quando a maioria das pranchas afunda — velocidade, agilidade e performance pra transformar qualquer ondinha em uma pista de skate aquática.\n\nIdeal pra quem quer explorar o mar com leveza, mas sem perder a pegada de performance.",
    porQueEscolher: [
      "Rocker baixo e boa remada: entra fácil nas ondas, mesmo nos dias mais fracos.",
      "Design inspirado nas fishs retrô, com performance moderna.",
      "Agilidade e resposta rápida em ondas cheias ou fracas.",
      "Perfeita como segunda prancha no quiver de quem já tem uma high performance.",
    ],
    indicadoPara:
      "Surfistas experientes que buscam uma segunda prancha para dias de ondas menores e mais cheias, com facilidade para manobras e muita diversão.",
    destaques: {
      tipoDePrancha: "Performance Fish",
      nivelDeHabilidade: "Intermediário a Avançado",
      rabeta: "Fish / Swallow",
      tamanhoDaOnda: "Pequenas a Médias (0.5m – 2.0m) — de 2 a 4 pés",
      rocker: null, // [confirmar] — texto diz "baixo", tabela de características diz "Médio"
      quilhas: null, // [confirmar] — mockup sugere twin/2+1
    },
    tamanhos: [
      { label: "5'4\"", larguraPol: 19.80, espessuraPol: 2.50, volumeL: 29.0 },
      { label: "5'5\"", larguraPol: 19.80, espessuraPol: 2.50, volumeL: 29.7 },
      { label: "5'6\"", larguraPol: 20.00, espessuraPol: 2.50, volumeL: 30.5 },
      { label: "5'7\"", larguraPol: 20.00, espessuraPol: 2.57, volumeL: 31.5 },
      { label: "5'8\"", larguraPol: 20.20, espessuraPol: 2.62, volumeL: 32.8 },
      { label: "5'9\"", larguraPol: 20.50, espessuraPol: 2.65, volumeL: 33.5 },
      { label: "5'10\"", larguraPol: 20.65, espessuraPol: 2.70, volumeL: 34.9 },
      { label: "5'11\"", larguraPol: 20.75, espessuraPol: 2.75, volumeL: 35.9 },
      { label: "6'0\"", larguraPol: 20.90, espessuraPol: 2.75, volumeL: 38.0 },
    ],
    // ⚠️ Existem duas listas de litragens no insumo — usar tabela acima; confirmar qual é correta
    statusConteudo: "completo",
  },

  {
    slug: "wild-twin",
    nome: "WILD TWIN",
    acento: "#FF4000",
    logo: "/pranchas/wild-twin/FrogSurfboards-wild-twin-logo.png",
    logoWhite: "/pranchas/wild-twin/FrogSurfboards-wild-twin-logo.png", // [INSUMO NECESSÁRIO — logo-white não encontrada na pasta]
    mockup: "/pranchas/wild-twin/frogsurfboards-wild-twin-mockup.png",
    mockupFront: "/pranchas/wild-twin/frogsurfboards-wild-twin-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — Faltam Fotos]
    descricaoCurta: "Versatilidade e performance com alma twin fin.",
    descricao:
      "A WILD TWIN é feita pra quem quer ir além da diversão clássica dos twin fins e levar o surfe a um novo nível. Com rocker mais baixo, ela proporciona remadas ágeis e fáceis — menos esforço, mais onda.\n\nO wide point avançado e o bico largo garantem estabilidade desde a entrada na onda, enquanto a rabeta estreita com edge acentuado atua como uma “terceira quilha invisível”, oferecendo controle e resposta rápida nas manobras.\n\nEla brilha nos dias de até 1 metro, entregando velocidade, fluidez e agilidade, sem perder aquele feeling solto que só uma twin pode oferecer. É tipo um canivete suíço de duas quilhas — pronto pra qualquer condição, com estilo e liberdade.",
    porQueEscolher: [
      "Remada fácil e rápida com rocker baixo.",
      "Estabilidade na entrada da onda, com controle nas curvas.",
      "Mais drive e resposta do que uma twin convencional.",
      "Combina fluidez e performance, sem abrir mão da vibe clássica.",
    ],
    indicadoPara:
      "Surfistas que buscam um twin fin mais versátil, com equilíbrio entre fluidez e controle.",
    destaques: {
      tipoDePrancha: "Twin fin (versátil)",
      nivelDeHabilidade: "Intermediário ao avançado",
      rabeta: "Estreita com edge acentuado",
      tamanhoDaOnda: "Pequenas a médias (até 1m), cheias ou com boa parede",
      rocker: "Mais baixo",
      quilhas: "Twin (2 quilhas)",
    },
    tamanhos: [
      { label: "5'6\"", larguraPol: 19.40, espessuraPol: 2.50, volumeL: 29.3 },
      { label: "5'8\"", larguraPol: 19.40, espessuraPol: 2.50, volumeL: 29.8 },
      { label: "5'10\"", larguraPol: 19.50, espessuraPol: 2.60, volumeL: 31.2 },
      { label: "6'0\"", larguraPol: 19.70, espessuraPol: 2.70, volumeL: 33.7 },
      { label: "6'2\"", larguraPol: 20.00, espessuraPol: 2.75, volumeL: 35.5 },
      { label: "6'4\"", larguraPol: 20.25, espessuraPol: 2.80, volumeL: 37.5 },
    ],
    statusConteudo: "completo",
  },

  {
    slug: "msv",
    nome: "MSV",
    acento: "#262626",
    logo: "/pranchas/msv/FrogSurfboards-msv-logo.png",
    logoWhite: "/pranchas/msv/FrogSurfboards-msv-logo-white.png",
    mockup: "/pranchas/msv/frogsurfboards-msv-mockup.png",
    mockupFront: "/pranchas/msv/FrogSurfboards-msv-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — Faltam Fotos]
    descricaoCurta: "Ataques rápidos, manobras precisas. Você no controle, sem limites.",
    descricao:
      "A MSV é a FERRARI das pranchas da Frog — feita pra quem pisa fundo no surfe e quer ir além. Criada pra surfistas avançados, ela entrega resposta rápida, pressão nas manobras e drive pra atacar as partes mais críticas da onda com confiança.\n\nO rocker acentuado e o wide point deslocado pra trás favorecem o surf de borda, enquanto o concave profundo que vira V bottom melhora a troca de borda e mantém a fluidez mesmo em manobras intensas.\n\nSeja em ondas tubulares ou no surfe diário, a MSV oferece controle, agilidade e uma leitura afiada da linha. É a prancha que responde no pensamento, pronta pra te acompanhar em sessões de alta performance.",
    porQueEscolher: [
      "Alta performance total: projetada pra ataques agressivos e curvas verticais.",
      "Estabilidade com resposta rápida, mesmo em ondas mais fortes.",
      "Ideal pra quem surfa no limite, com precisão e controle absoluto.",
      "Design refinado pra performance diária ou em condições de desafio.",
    ],
    indicadoPara:
      "Surfistas que buscam maximizar seu potencial e performance em ondas desafiadoras.",
    destaques: {
      tipoDePrancha: "High performance",
      nivelDeHabilidade: "Avançado",
      rabeta: null, // [INSUMO NECESSÁRIO — não informado]
      tamanhoDaOnda: "De tubulares fortes ao surfe diário",
      rocker: "Acentuado",
      quilhas: null, // [confirmar]
    },
    tamanhos: [
      { label: "5'8\"", larguraPol: 18.50, espessuraPol: 2.30, volumeL: 23.5 },
      { label: "5'9\"", larguraPol: 18.65, espessuraPol: 2.35, volumeL: 26.7 },
      { label: "5'10\"", larguraPol: 18.65, espessuraPol: 2.40, volumeL: 27.2 },
      { label: "5'11\"", larguraPol: 18.80, espessuraPol: 2.40, volumeL: 27.9 },
      { label: "6'0\"", larguraPol: 18.80, espessuraPol: 2.42, volumeL: 28.5 },
      { label: "6'1\"", larguraPol: 19.00, espessuraPol: 2.50, volumeL: 29.2 },
      { label: "6'2\"", larguraPol: 19.30, espessuraPol: 2.55, volumeL: 30.2 },
      { label: "6'3\"", larguraPol: 19.50, espessuraPol: 2.65, volumeL: 32.0 },
    ],
    statusConteudo: "completo",
  },

  {
    slug: "krypto",
    nome: "KRYPTO",
    acento: "#A4036F",
    logo: "/pranchas/krypto/frogsurfboards-krypto-logo.png",
    logoWhite: "/pranchas/krypto/frogsurfboards-krypto-logo.png", // [INSUMO NECESSÁRIO — logo-white não encontrada]
    mockup: "/pranchas/krypto/frogsurfboards-krypto-mockup.png",
    mockupFront: "/pranchas/krypto/frogsurfboards-krypto-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — Faltam Fotos]
    descricaoCurta: "Velocidade e desempenho em qualquer onda.",
    descricao:
      "A KRYPTO é a prancha pensada pra quem quer tirar o máximo do surfe em qualquer condição. Com rocker baixo, ela entrega remada fácil, entrada rápida nas ondas e muito mais velocidade no pé.\n\nO outline equilibrado e as bordas levemente mais altas oferecem estabilidade sem travar o surfe, criando o cenário ideal pra manobras precisas, seguras e com fluidez. É uma prancha que se adapta bem a ondas pequenas e médias, combinando performance com controle.\n\nSe você tá evoluindo ou já tem uma boa base no surfe e quer uma prancha versátil pro dia a dia, a KRYPTO vai te dar mais confiança pra explorar cada sessão.",
    porQueEscolher: [
      "Mais remada, mais onda: rocker baixo que favorece entrada rápida.",
      "Estável e previsível, sem deixar o surfe travado.",
      "Outline versátil: funciona em diferentes tipos de mar.",
      "Ideal pra progressão técnica com controle e segurança.",
    ],
    indicadoPara:
      "Surfistas em evolução e também experientes que buscam desempenho constante em diversas condições.",
    destaques: {
      tipoDePrancha: "Performance versátil (daily driver)",
      nivelDeHabilidade: "Intermediário a avançado",
      rabeta: null, // [INSUMO NECESSÁRIO — não informado]
      tamanhoDaOnda: "Pequenas a médias (2 a 5 pés)",
      rocker: "Baixo",
      quilhas: null, // [confirmar]
    },
    tamanhos: [
      { label: "5'4\"", larguraPol: 19.80, espessuraPol: 2.50, volumeL: 30.0 },
      { label: "5'5\"", larguraPol: 19.80, espessuraPol: 2.50, volumeL: 30.5 },
      { label: "5'6\"", larguraPol: 20.00, espessuraPol: 2.50, volumeL: 31.2 },
      { label: "5'7\"", larguraPol: 20.00, espessuraPol: 2.58, volumeL: 32.1 },
      { label: "5'8\"", larguraPol: 20.25, espessuraPol: 2.58, volumeL: 32.8 },
      { label: "5'9\"", larguraPol: 20.40, espessuraPol: 2.60, volumeL: 33.6 },
      { label: "5'10\"", larguraPol: 20.50, espessuraPol: 2.65, volumeL: 34.9 },
      { label: "5'11\"", larguraPol: 20.70, espessuraPol: 2.70, volumeL: 36.4 },
      { label: "6'0\"", larguraPol: 20.90, espessuraPol: 2.75, volumeL: 38.0 },
    ],
    statusConteudo: "completo",
  },

  {
    slug: "liberty-flow",
    nome: "LIBERTY FLOW",
    acento: "#347FD5",
    logo: "/pranchas/liberty-flow/FrogSurfboards-liberty-flow-logo.png",
    logoWhite: "/pranchas/liberty-flow/FrogSurfboards-liberty-flow-logo-white.png",
    mockup: "/pranchas/liberty-flow/frogsurfboards-liberty-flow-mockup.png",
    mockupFront: "/pranchas/liberty-flow/frogsurfboards-liberty-flow-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — Faltam Fotos]
    descricaoCurta: "No controle de cada onda. A flutuação que te leva além.",
    descricao:
      "A LIBERTY FLOW foi feita pra quem quer liberdade dentro d'água — sem pressa, sem pressão. Ideal pra surfistas com alguma experiência, mas que estão voltando ao esporte ou querem uma prancha com mais conforto e remada fácil.\n\nCom medidas generosas, esse modelo oferece entrada suave nas ondas e estabilidade desde o drop. O outline com linhas paralelas e o rocker suave garantem velocidade sem esforço, enquanto a rabeta swallow e a configuração triquilha deixam o surfe mais ágil e estável.\n\nÉ o tipo de prancha que te leva mais longe com menos esforço — perfeita pra surfar de forma relaxada, com prazer e controle.",
    porQueEscolher: [
      "Mais flutuação e estabilidade pra facilitar a vida dentro d'água.",
      "Perfeita pra quem está voltando pro surf ou quer uma prancha mais tranquila.",
      "Remada eficiente, mesmo em ondas mais cheias ou lentas.",
      "Performance sem estresse, com controle e liberdade nas curvas.",
    ],
    indicadoPara:
      "Surfistas que buscam conforto e facilidade na remada, com um design que favorece a flutuação e uma abordagem mais relaxada do surfe.",
    destaques: {
      tipoDePrancha: "Flutuação / conforto (volume generoso)", // [confirmar rótulo]
      nivelDeHabilidade: "Iniciante a intermediário",
      rabeta: "Swallow",
      tamanhoDaOnda: "De 2 a 5 pés, com boa formação",
      rocker: "Suave",
      quilhas: "Triquilha (thruster)",
    },
    tamanhos: [
      { label: "5'10\"", larguraPol: 20.50, espessuraPol: 2.65, volumeL: 36.5 },
      { label: "6'0\"", larguraPol: 20.70, espessuraPol: 2.70, volumeL: 38.0 },
      { label: "6'3\"", larguraPol: 21.10, espessuraPol: 2.75, volumeL: 41.0 },
      { label: "6'6\"", larguraPol: 21.60, espessuraPol: 2.85, volumeL: 45.0 },
      { label: "6'9\"", larguraPol: 22.10, espessuraPol: 3.00, volumeL: 50.5 },
    ],
    statusConteudo: "completo",
  },

  {
    slug: "savage",
    nome: "SAVAGE",
    acento: "#542E71",
    logo: "/pranchas/savage/FrogSurfboards-savage-logo.png",
    logoWhite: "/pranchas/savage/FrogSurfboards-savage-logo-white.png",
    mockup: "/pranchas/savage/frogsurfboards-savage-mockup.png",
    mockupFront: "/pranchas/savage/frogsurfboards-savage-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO — Faltam Fotos]
    descricaoCurta:
      "Aproveite cada onda com essa prancha que transforma qualquer sessão em pura diversão.",
    descricao:
      "A SAVAGE é a retrô com atitude da Frog. Inspirada nas pranchas clássicas, mas com tempero moderno, ela foi feita pra transformar qualquer mar em playground — sem pressão por performance, só vibe boa e linhas fluidas.\n\nCom outline mais largo na parte de cima e rocker baixo, ela tem excelente flutuação e remada facilitada. A biquilha entrega aquele feeling solto, enquanto o design moderno mantém a prancha rápida e segura nas curvas.\n\nEla encaixa como a segunda prancha ideal no seu quiver — pra dias de surf mais relax, mas ainda com aquele toque de estilo que chama atenção na água.",
    porQueEscolher: [
      "Retrô com alma moderna: visual clássico com performance refinada.",
      "Biquilha divertida e solta, sem perder controle.",
      "Flutuação e remada facilitadas, pra entrar fácil em qualquer onda.",
      "A segunda prancha perfeita pra dias mais descontraídos.",
    ],
    indicadoPara:
      "Surfistas iniciantes a intermediários que buscam uma opção divertida e relaxada no quiver.",
    destaques: {
      tipoDePrancha: "Retrô (biquilha)",
      nivelDeHabilidade: "Iniciante a intermediário",
      rabeta: null, // [INSUMO NECESSÁRIO — não informado]
      tamanhoDaOnda: "De 2 a 5 pés, com boa formação",
      rocker: "Baixo",
      quilhas: "Biquilha (twin)",
    },
    tamanhos: [
      { label: "5'5\"", larguraPol: 20.00, espessuraPol: 2.55, volumeL: 30.5 },
      { label: "5'8\"", larguraPol: 20.00, espessuraPol: 2.60, volumeL: 32.1 },
      { label: "5'11\"", larguraPol: 20.30, espessuraPol: 2.70, volumeL: 34.2 },
      { label: "6'2\"", larguraPol: 21.00, espessuraPol: 2.70, volumeL: 37.5 },
    ],
    statusConteudo: "completo",
  },

  {
    slug: "king-frog",
    nome: "KING FROG",
    acento: "#FFB30F",
    logo: "/pranchas/king-frog/FrogSurfboards-king-frog-logo.png",
    logoWhite: "/pranchas/king-frog/FrogSurfboards-king-frog-logo.png", // [INSUMO NECESSÁRIO — não há versão white; usando logo colorida como fallback]
    mockup: "/pranchas/king-frog/FrogSurfboards-king-frog-mockup.png",
    mockupFront: "/pranchas/king-frog/FrogSurfboards-king-frog-mockup-front.png",
    fotos: [], // [INSUMO NECESSÁRIO]
    descricaoCurta: "A pegada da MSV com o volume e a estabilidade que o seu surf pede.", // [PROPOSTA]
    descricao:
      "A KING FROG nasce do DNA de alta performance da MSV, mas pensada para quem quer atacar a onda com mais volume embaixo dos pés. É a escolha de surfistas experientes — mais pesados ou com mais estrada no mar — que não abrem mão de uma prancha que rema fácil, entra cedo e responde rápido.\n\nCom litragem mais generosa e bem distribuída, a KING FROG mantém a remada eficiente e a estabilidade no drop, sem perder o drive e a resposta nas manobras. É a mesma alma de performance da MSV, adaptada ao seu peso e ao seu momento.\n\nDo surfe diário às ondas com mais força, ela entrega controle e confiança pra você surfar no seu ritmo — sem deixar a performance de lado.", // [PROPOSTA]
    porQueEscolher: [
      "A performance da MSV com mais volume: rema fácil e entra cedo.",
      "Estabilidade e remada pensadas para surfistas mais pesados ou veteranos.",
      "Drive e resposta mantidos nas manobras — performance de verdade.",
      "A high performance que acompanha o seu momento, sem abrir mão de diversão.",
    ], // [PROPOSTA]
    indicadoPara:
      "Surfistas experientes, mais pesados ou veteranos, que querem a pegada de performance da MSV com mais volume, remada e estabilidade.", // [PROPOSTA]
    destaques: {
      tipoDePrancha: "High performance com volume", // [PROPOSTA / confirmar com shaper]
      nivelDeHabilidade: "Intermediário a avançado", // [PROPOSTA]
      rabeta: null, // [INSUMO NECESSÁRIO]
      tamanhoDaOnda: "Do surfe diário às ondas com mais força", // [confirmar]
      rocker: undefined, // [INSUMO NECESSÁRIO]
      quilhas: null, // [INSUMO NECESSÁRIO]
    },
    // [INSUMO NECESSÁRIO] — tabela de tamanhos ainda não existe; Sérgio fornecerá medidas
    tamanhos: [],
    statusConteudo: "em-validacao",
  },
];

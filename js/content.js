/* ============================================================
   TODOS OS TEXTOS, LINKS E FOTOS DO SITE FICAM AQUI.
   - Fotos: copie o arquivo para assets/images/ e troque o nome abaixo.
   - Use *asterisco* em volta de uma palavra do título para ela ficar em terracota.
   - Se uma foto não for encontrada, aparece um espaço reservado (sem ícone quebrado).
   ============================================================ */

/* PORTFÓLIO: 10 fotos (nome do arquivo + etiqueta que aparece sobre a foto). */
const PORTFOLIO_FOLDER = "assets/images/";
const PORTFOLIO_PHOTOS = [
  { file: "ray (1).jpg", label: "Retratos" },
  { file: "ray (2).jpg", label: "Natureza" },
  { file: "ray (3).jpg", label: "Eventos" },
  { file: "ray (4).jpg", label: "Cidade" },
  { file: "ray (5).jpg", label: "Alimentos" },
  { file: "ray (6).jpg", label: "Retratos" },
  { file: "ray (7).jpg", label: "Natureza" },
  { file: "ray (8).jpg", label: "Eventos" },
  { file: "placeholder.svg", label: "Cidade" },
  { file: "placeholder.svg", label: "Alimentos" }
];

window.SITE = {
  name: "Rayssa Ferreira",
  avatar: "assets/images/ray (1).jpg",          // foto redonda (Início e Sobre)
  instagram: "https://www.instagram.com/rayssa.raw/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
  email: "contato@exemplo.com",
  whatsapp: "https://wa.me/5521999999999",

  nav: [
    { label: "Início",    href: "index.html" },
    { label: "Serviços",  href: "servicos.html" },
    { label: "Portfólio", href: "portfolio.html" },
    { label: "Sobre",     href: "sobre.html" },
    { label: "Contato",   href: "contato.html" }
  ],

  pages: {
    /* ---------- INÍCIO: 3 cards na colagem + biografia ---------- */
    index: {
      eyebrow: "Fotografia | Vídeo | Edição",
      title: "Momentos que contam *histórias*",
      lead: "Registro o que passa despercebido: textura, cor, movimento e sentimento. Cada imagem nasce de um olhar atento aos detalhes.",
      ctas: [
        { label: "Ver portfólio", href: "portfolio.html", style: "solid" },
        { label: "Falar comigo",  href: "contato.html",   style: "ghost" }
      ],
      cards: [
        { img: "assets/images/ray (2).jpg", caption: "Ver. Sentir. Registrar." },   // CARD 1: grande, no topo
        { img: "assets/images/ray (3).jpg", caption: "" },                          // CARD 2: pequeno, esquerda
        { img: "assets/images/ray (4).jpg", caption: "" }                           // CARD 3: pequeno, direita
      ],
      section: {
        type: "bio",
        title: "Biografia",
        paragraphs: [
          "Meu olhar sempre foi guiado pelos detalhes, aqueles que passam despercebidos à primeira vista, mas que carregam textura, cor, movimento e sentimento. A fotografia, pra mim, é uma forma de traduzir o que sinto ao observar o mundo.",
          "Gosto de ter um caminho, mas é no espontâneo que encontro o que realmente me chama atenção. São nesses momentos que as imagens ganham verdade.",
          "Cada trabalho que realizo carrega um pouco da minha forma de ver e sentir, porque acredito que fotografar vai muito além de registrar, é interpretar."
        ],
        tags: ["Fotografia", "Edição de vídeos", "Conteúdo visual"]
      },
      cta: { title: "Vamos criar algo juntos?", text: "Conte sua ideia e eu preparo uma proposta sob medida.", label: "Pedir orçamento", href: "contato.html" }
    },

    /* ---------- SERVIÇOS: 1 card grande ---------- */
    servicos: {
      eyebrow: "Serviços",
      title: "Do clique à *edição final*",
      lead: "Fotografia, vídeo e edição com acabamento profissional, do planejamento à entrega.",
      ctas: [{ label: "Pedir orçamento", href: "contato.html", style: "solid" }],
      cards: [{ img: "assets/images/ray (5).jpg", caption: "" }],
      section: {
        type: "list",
        title: "O que eu faço",
        items: [
          { n: "01", title: "Fotografia", text: "Ensaios, eventos, produtos e conteúdo para marcas, com tratamento de cor e entrega em alta resolução." },
          { n: "02", title: "Vídeo", text: "Captação e roteiro de vídeos curtos e institucionais, pensados para redes sociais e YouTube." },
          { n: "03", title: "Edição", text: "Montagem, correção de cor e finalização de fotos e vídeos com a identidade visual do cliente." }
        ]
      },
      cta: { title: "Tem um projeto em mente?", text: "Me chame e vamos transformar a ideia em imagem.", label: "Falar comigo", href: "contato.html" }
    },

    /* ---------- PORTFÓLIO: grade com as 10 fotos (lista no topo deste arquivo) ---------- */
    portfolio: {
      eyebrow: "Portfólio",
      title: "Meu *portfólio*",
      lead: "Bem-vindo! Aqui você encontra uma seleção dos meus trabalhos. Clique em uma foto para ampliar.",
      section: { type: "portfolio" }
    },

    /* ---------- SOBRE: 1 card grande ---------- */
    sobre: {
      eyebrow: "Sobre",
      title: "Um olhar que *interpreta*",
      lead: "Atuo de forma independente, explorando a fotografia como espaço de expressão e crescimento profissional.",
      ctas: [{ label: "Ver portfólio", href: "portfolio.html", style: "solid" }],
      cards: [{ img: "assets/images/ray (6).jpg", caption: "Porque cada detalhe importa" }],
      section: {
        type: "bio",
        title: "Minha história",
        paragraphs: [
          "Escreva aqui a sua trajetória, formação e o que te move como criadora.",
          "Conte como começou, o que inspira o seu olhar e como é trabalhar com você."
        ],
        tags: ["Independente", "Autoral", "Detalhista"]
      },
      cta: { title: "Vamos conversar?", text: "Adoraria conhecer o seu projeto.", label: "Entrar em contato", href: "contato.html" }
    },

    /* ---------- CONTATO: 1 card grande ---------- */
    contato: {
      eyebrow: "Contato",
      title: "Vamos criar *juntos*",
      lead: "Fale comigo para pedir um orçamento ou tirar dúvidas. Respondo em até 24 horas.",
      ctas: [{ label: "Chamar no WhatsApp", href: "WHATSAPP", style: "solid" }],
      cards: [{ img: "assets/images/ray (7).jpg", caption: "" }],
      section: {
        type: "contact",
        title: "Onde me encontrar",
        items: [
          { label: "E-mail", value: "EMAIL", href: "MAILTO" },
          { label: "Instagram", value: "@rayssa.raw", href: "INSTAGRAM" },
          { label: "WhatsApp", value: "Enviar mensagem", href: "WHATSAPP" }
        ]
      }
    }
  }
};

/* FOTOS DO PORTFÓLIO: troque os nomes abaixo pelos nomes dos seus arquivos
   (que devem estar na pasta indicada em PORTFOLIO_FOLDER). */
const PORTFOLIO_FOLDER = "assets/images/";
const PORTFOLIO_PHOTOS = [
  "ray (1).jpg", "ray (2).jpg", "ray (3).jpg", "ray (4).jpg",
  "ray (5).jpg", "ray (6).jpg", "ray (7).jpg", "ray (8).jpg"
];
/* TODOS OS TEXTOS E IMAGENS DO SITE FICAM AQUI.
   Para trocar uma foto: coloque o arquivo em assets/images/ e mude o caminho "img". */
window.SITE = {
  name: "Rayssa Nascimento",
  role: "FOTOGRAFIA | VÍDEO | EDIÇÃO",
  avatar: "assets/images/ray (8).jpg", // foto redonda da barra lateral (aparece em todas as telas)
  tagline: "Momentos que contam histórias",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
  tiktok: "https://tiktok.com/",
  email: "mailto:contato@exemplo.com",

  nav: [
    { label: "Início",    href: "index.html" },
    { label: "Serviços",  href: "servicos.html" },
    { label: "Portfólio", href: "portfolio.html" },
    { label: "Sobre",     href: "sobre.html" },
    { label: "Contato",   href: "contato.html" }
  ],

  pages: {
    // Início: 4 cards (1 grande no topo, 2 pequenos, 1 largo embaixo)
    index: {
      title: "Biografia",
      cards: [
        { id: "home-1"  /* CARD 1: grande, no topo */, img: "assets/images/girasol.jpg", caption: "Ver\nSentir\nRegistrar\nEditar" },
        { id: "home-2"  /* CARD 2: pequeno, esquerda */, img: "assets/images/rr (2).jpg", caption: "" },
        { id: "home-3"  /* CARD 3: pequeno, direita */, img: "assets/images/rr (1).jpg", caption: "" },
        { id: "home-4"  /* CARD 4: largo, embaixo */, img: "assets/images/ra (2).jpg", caption: "Porque cada detalhe importa" }
      ],
      paragraphs: [
        "Meu olhar sempre foi guiado pelos detalhes, aqueles que passam despercebidos à primeira vista, mas que carregam textura, cor, movimento e sentimento.",
        "Gosto de ter um caminho, mas é no espontâneo que encontro o que realmente me chama atenção. São nesses momentos que as imagens ganham verdade.",
        "Atualmente atuo de forma independente, explorando a fotografia como um espaço de expressão e também como uma possibilidade de crescimento profissional.",
        "Cada trabalho que realizo carrega um pouco da minha forma de ver e sentir, porque acredito que fotografar vai muito além de registrar, é interpretar."
      ],
      tags: ["Fotografia", "Edição de vídeos", "Conteúdo visual"]
    },
    // Telas dos botões: 1 card grande + texto
    servicos: {
      title: "Serviços",
      cards: [{ id: "servicos-1", img: "assets/images/vermelho.jpg", caption: "Serviços" }],
      paragraphs: ["Edição de vídeo para redes sociais e YouTube.", "Tratamento de fotos e ensaios.", "Conteúdo visual para marcas e criadores."],
      tags: ["Vídeo", "Foto", "Conteúdo"]
    },
    // Portfólio: 10 fotos. Para trocar, veja README (pasta assets/images/portfolio/).
    portfolio: {
      title: "Portfólio",
      cards: PORTFOLIO_PHOTOS.map((img, i) => ({ id: "portfolio-" + (i + 1), img: PORTFOLIO_FOLDER + img })),
      paragraphs: ["Uma seleção dos meus trabalhos recentes em foto e vídeo."],
      tags: ["Fotografia", "Vídeo", "Edição"]
    },
    sobre: {
      title: "Sobre",
      cards: [{ id: "sobre-1", img: "assets/images/ra (3).jpg", caption: "Sobre mim" }],
      paragraphs: ["Escreva aqui a sua história, formação e o que te move como criadora."],
      tags: ["Independente", "Criativa"]
    },
    contato: {
      title: "Contato",
      cards: [{ id: "contato-1", img: "assets/images/ra (1).jpg", caption: "Vamos conversar" }],
      paragraphs: ["Fale comigo pelo e-mail ou pelas redes ao lado para pedir um orçamento."],
      tags: ["Resposta em até 24h"]
    }
  }
};

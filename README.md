# Rayssa Ferreira Fotografia: site de portfólio

Abra `index.html` (de preferência com a extensão **Live Server** do VS Code).

## Pastas
- `js/content.js`: TODOS os textos, links e fotos. É o arquivo que você mais vai editar.
- `assets/images/`: suas fotos. `assets/brand/`: logos e símbolos do manual de marca. `assets/video/intro.mp4`: vídeo de abertura.
- `css/tokens.css`: cores e fontes (paleta e tipografia do manual de marca).
- `css/layout.css`: estrutura das seções. `css/components.css`: botões, cards, efeitos do mouse.
- `css/transitions.css`: transição entre telas e animação do vídeo de abertura.
- `js/app.js`: monta as páginas. `js/intro.js`: abertura com vídeo.

## Trocar fotos (VS Code)
1. Copie a foto para `assets/images/`.
2. Em `js/content.js`, troque o nome do arquivo (`img:` nos cards, `avatar:` na foto redonda, ou a lista `PORTFOLIO_PHOTOS` do Portfólio).
3. `Ctrl+S` e atualize o navegador. Se o nome estiver errado, aparece um espaço reservado em vez de ícone quebrado.

## Vídeo de abertura
Toca na página inicial, uma vez por visita, e diminui até o logo do topo. Para ver de novo: feche a aba e abra o site outra vez.
Navegadores só deixam o vídeo iniciar sem som; use o botão "Ativar som". Para trocar o vídeo, substitua `assets/video/intro.mp4` (se o símbolo final mudar de posição, ajuste `SYM` em `js/intro.js`).

## Nova tela
Copie `sobre.html`, mude `data-page` e o `<title>`, e crie a entrada em `pages` e `nav` no `content.js`.

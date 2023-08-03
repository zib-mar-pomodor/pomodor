import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --color-black: rgba(0,0,0, 0.95);
  --color-grey-50: rgba(0,0,0, 0.50);
  --color-grey-10: rgba(0,0,0, 0.10);
  --color-grey-02: rgba(0,0,0, 0.02);
  --color-white: #fff;

  --color-dark-grey: #e2e2e2;
  --color-sea-blue: #58aad8;
  --color-sea-blue-light: #abd4eb;

  &.dark-mode {
    --color-black: rgba(255,255,255, 0.95);
    --color-grey-50: rgba(255,255,255, 0.50);
    --color-grey-10: rgba(255,255,255, 0.10);
    --color-grey-02: rgba(255,255,255, 0.02);
    --color-white: rgba(0,0,0, 0.90);
    --color-sea-blue-light: #58aad8;

    img:not([class="Header__image"]) {
      filter: invert(1);
    }
  }
  
  
  

  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  background-color: var(--color-white) ;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}


@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: var(--color-white);
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`;

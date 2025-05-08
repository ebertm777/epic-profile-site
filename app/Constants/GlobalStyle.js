import { createGlobalStyle } from "styled-components";

import fontFaces from "./FontFaces";

export default createGlobalStyle`
  ${fontFaces}
${'' /*   
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    font-size: 100%;
    vertical-align: baseline;
  } */}
  
  
body {
  --sb-track-color: #000000;
  --sb-thumb-color: #662d91;
  --sb-size: 9px;
}

body::-webkit-scrollbar {
  width: var(--sb-size)
}

body::-webkit-scrollbar-track {
  background: var(--sb-track-color);
  border-radius: 1px;
}

body::-webkit-scrollbar-thumb {
  background: var(--sb-thumb-color);
  border-radius: 1px;
  border: 1px solid #28282b;
}

@supports not selector(::-webkit-scrollbar) {
  body {
    scrollbar-color: var(--sb-thumb-color)
                     var(--sb-track-color);
  }
}
`;

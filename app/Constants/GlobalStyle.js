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
  
`;

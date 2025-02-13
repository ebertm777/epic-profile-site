import { css } from "styled-components";

export default css`
  // Lato Regular
  @font-face {
    font-family: "Lato";
    font-weight: 400;
    font-display: swap;
    src: url("/Lato-Regular.ttf") format("truetype");
  }

  // Lato Bold
  @font-face {
    font-family: "Lato";
    font-weight: 700;
    font-display: swap;
    src: url("/Lato-Bold.ttf") format("truetype");
  }

  // Lato Thin
  @font-face {
    font-family: "Lato";
    font-weight: 100;
    font-display: swap;
    src: url("/Lato-Thin.ttf") format("truetype");
  }

  // Lato Light
  @font-face {
    font-family: "Lato";
    font-weight: 300;
    font-display: swap;
    src: url("/Lato-Light.ttf") format("truetype");
  }
`;

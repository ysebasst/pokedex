import { createGlobalStyle } from "styled-components";

import colors from "config/colors";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    overflow: hidden;
    margin: 0;
    height: 100vh;
    font-family: sans-serif;
    background-color: ${colors.gray};
  }
  #root {
    display: grid;
    grid-template-rows: auto 1fr auto;
    height: 100%;
  }
`;

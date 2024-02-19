import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


body{
    line-height: 1.2;
    font-family: sans-serif;
}
`;

export default GlobalStyle;

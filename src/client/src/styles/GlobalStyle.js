import {createGlobalStyle} from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }
  
  * {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: none;
    letter-spacing: -0.017em;
  }

  * {
    font-family: 'Apple SD Gothic Neo', sans-serif;
  }

  body {
    font-weight: 400;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.bodyColor};
  }

  button {
    padding: 0;
  }
`;

export default GlobalStyle;

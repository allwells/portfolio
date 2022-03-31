import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Comfortaa;
  }
  

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  *::-webkit-scrollbar {
    width: 7px;
  }

  *::-webkit-scrollbar-track {
    border-radius: 1rem;
    background: #656565;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  } 

  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: #22222288;

    &:hover {
      background: #222222;
    }
  }
`;

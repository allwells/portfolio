import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
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
    background: ${({ theme }) => theme.dark.text2};
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  } 

  *::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background: ${({ theme }) => theme.dark.secondary + "88"};

    &:hover {
      background: ${({ theme }) => theme.dark.secondary};
    }
  }
`;

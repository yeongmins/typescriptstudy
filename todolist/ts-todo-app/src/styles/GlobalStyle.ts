import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;

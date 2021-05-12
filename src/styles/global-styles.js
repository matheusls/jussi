import { themeGet } from '@styled-system/theme-get';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${themeGet('colors.grey')};
    font-family: 'Barlow', sans-serif;
  }
`;

export default GlobalStyles;

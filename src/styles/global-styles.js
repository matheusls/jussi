import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme: { colors } }) => colors.grey};
    font-family: 'Barlow', sans-serif;
  }
`;

export default GlobalStyles;

import { ThemeProvider } from 'styled-components';

import { Home } from 'pages';
import { GlobalStyles, theme } from 'styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Home />
  </ThemeProvider>
);

export default Root;

import { render } from '@testing-library/react';
import { node } from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme } from 'styles';

const AllProviders = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

AllProviders.propTypes = {
  children: node.isRequired,
};

const renderWithTheme = (ui, options) =>
  render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';

export { renderWithTheme as render };

const theme = {
  colors: {
    black: '#000',
    grey: '#f2f2f2',
    greyDark: '#5b5b5b',
    green: '#03ffa5',
    pink: '#ee0e7d',
    white: '#fff',
  },
  fontSizes: {
    small: '0.75rem',
    medium: '1rem',
    large: '2rem',
    xlarge: '4rem',
  },
};

export const colorAliases = Object.keys(theme.colors);

export const fontSizeAliases = Object.keys(theme.fontSizes);

export default theme;

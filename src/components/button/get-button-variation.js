import { themeGet } from '@styled-system/theme-get';
import { css } from 'styled-components';

export const buttonVariations = {
  black: {
    backgroundColor: 'black',
    borderColor: 'black',
    color: 'white',
  },
  green: {
    backgroundColor: 'green',
    borderColor: 'green',
    color: 'black',
  },
  pink: {
    backgroundColor: 'pink',
    borderColor: 'pink',
    color: 'white',
  },
  blackOutline: {
    backgroundColor: 'transparent',
    borderColor: 'black',
    color: 'black',
  },
  greenOutline: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    color: 'green',
  },
  pinkOutline: {
    backgroundColor: 'transparent',
    borderColor: 'pink',
    color: 'pink',
  },
};

export const getButtonVariation = (variation) => {
  const { backgroundColor, borderColor, color } = buttonVariations[variation];

  return css`
    background-color: ${themeGet(`colors.${backgroundColor}`)};
    border-color: ${themeGet(`colors.${borderColor}`)};
    color: ${themeGet(`colors.${color}`)};
  `;
};

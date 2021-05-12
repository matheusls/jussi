import { themeGet } from '@styled-system/theme-get';
import { oneOf } from 'prop-types';
import { compose, layout, space } from 'styled-system';
import styled from 'styled-components';

import { getButtonVariation, buttonVariations } from './get-button-variation';

const Button = styled.button`
  background: none;
  border-style: solid;
  border-width: 1px;
  border-radius: 6px;
  color: ${themeGet('colors.black')};
  cursor: pointer;
  display: block;
  font-size: ${themeGet('fontSizes.medium')};
  line-height: 1;
  outline: none;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-decoration: none;

  ${({ variation }) => (variation ? getButtonVariation(variation) : '')}

  ${compose(layout, space)}
`;

Button.defaultProps = {
  borderRadiusStyle: 'normal',
  variation: 'green',
};

Button.propTypes = {
  borderRadiusStyle: oneOf(['normal', 'pill']),
  variation: oneOf(Object.keys(buttonVariations)),
};

export default Button;

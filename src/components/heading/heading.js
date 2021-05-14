import { themeGet } from '@styled-system/theme-get';
import { oneOf, shape, string } from 'prop-types';
import { color, compose, layout, space, typography } from 'styled-system';
import styled, { css } from 'styled-components';

import { colorAliases, fontSizeAliases } from 'styles';
import { textTransformOptions } from 'utils';

export const headingLevels = [1, 2, 3, 4, 5, 6];

const Heading = styled.h1.attrs(({ level }) => ({
  as: `h${level}`,
}))`
  display: block;
  font-family: 'Barlow', sans-serif;
  line-height: 1.5;
  margin: 0;
  text-transform: ${({ textTransform }) => textTransform};

  ${({ openQuote }) =>
    openQuote &&
    css`
      position: relative;

      &::before {
        bottom: ${openQuote.bottom};
        content: open-quote;
        color: ${themeGet(`colors.${openQuote.color}`)};
        display: inline-block;
        font-size: ${openQuote.size};
        font-weight: 300;
        left: ${openQuote.left};
        line-height: 0.1rem;
        margin-right: 0.25rem;
        position: ${openQuote.position};
        right: ${openQuote.right};
        top: ${openQuote.top};
        vertical-align: bottom;
      }
      &::after {
        visibility: hidden;
        content: close-quote;
      }
    `}

  ${compose(color, layout, space, typography)};
`;

Heading.defaultProps = {
  color: 'black',
  fontSize: 'large',
  fontStyle: 'normal',
  fontWeight: 'bold',
  level: 1,
  openQuote: null,
  textTransform: 'uppercase',
};

Heading.propTypes = {
  color: oneOf(colorAliases),
  fontSize: oneOf(fontSizeAliases),
  level: oneOf(headingLevels),
  openQuote: shape({
    bottom: string.isRequired,
    color: string.isRequired,
    left: string.isRequired,
    position: string.isRequired,
    right: string.isRequired,
    size: string.isRequired,
    top: string.isRequired,
  }),
  textTransform: oneOf(textTransformOptions),
};

export default Heading;

import { oneOf } from 'prop-types';
import { color, compose, layout, space, typography } from 'styled-system';
import styled from 'styled-components';

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

  ${compose(color, layout, space, typography)};
`;

Heading.defaultProps = {
  color: 'black',
  fontSize: 'large',
  fontStyle: 'normal',
  fontWeight: 'bold',
  level: 1,
  textTransform: 'uppercase',
};

Heading.propTypes = {
  color: oneOf(colorAliases),
  fontSize: oneOf(fontSizeAliases),
  level: oneOf(headingLevels),
  textTransform: oneOf(textTransformOptions),
};

export default Heading;

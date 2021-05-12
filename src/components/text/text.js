import { oneOf, string } from 'prop-types';
import { color, compose, layout, space, typography } from 'styled-system';
import styled from 'styled-components';

import { colorAliases, fontSizeAliases } from 'styles';
import { textTransformOptions } from 'utils';

const Text = styled.h1.attrs(({ tag }) => ({
  as: tag,
}))`
  display: block;
  line-height: 1.5;
  margin: 0;
  text-transform: ${({ textTransform }) => textTransform};

  ${compose(color, layout, space, typography)};
`;

Text.defaultProps = {
  color: 'black',
  fontSize: 'medium',
  fontStyle: 'normal',
  tag: 'p',
  textTransform: 'none',
};

Text.propTypes = {
  color: oneOf(colorAliases),
  fontSize: oneOf(fontSizeAliases),
  tag: string,
  textTransform: oneOf(textTransformOptions),
};

export default Text;

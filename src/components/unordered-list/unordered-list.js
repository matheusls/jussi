import { string } from 'prop-types';
import styled from 'styled-components';
import {
  border,
  color,
  flexbox,
  compose,
  layout,
  position,
  shadow,
  space,
  typography,
} from 'styled-system';

const UnorderedList = styled.ul`
  list-style: ${({ listStyle }) => listStyle};

  ${compose(
    border,
    color,
    flexbox,
    layout,
    position,
    shadow,
    space,
    typography,
  )}
`;

const UnorderedListItem = styled.li`
  margin: 0;

  ${compose(border, color, flexbox, layout, space, typography)}
`;

UnorderedList.Item = UnorderedListItem;

UnorderedList.defaultProps = {
  listStyle: 'none',
};

UnorderedList.propTypes = {
  listStyle: string,
};

export default UnorderedList;

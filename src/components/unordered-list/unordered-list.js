import { string } from 'prop-types';
import styled from 'styled-components';
import {
  color,
  flexbox,
  compose,
  layout,
  space,
  typography,
} from 'styled-system';

const UnorderedList = styled.ul`
  list-style: ${({ listStyle }) => listStyle};

  ${compose(color, flexbox, layout, space, typography)}
`;

const UnorderedListItem = styled.li`
  margin: 0;

  ${compose(color, flexbox, layout, space, typography)}
`;

UnorderedList.Item = UnorderedListItem;

UnorderedList.defaultProps = {
  listStyle: 'none',
};

UnorderedList.propTypes = {
  listStyle: string,
};

export default UnorderedList;

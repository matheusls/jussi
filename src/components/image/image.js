import styled from 'styled-components';
import { compose, layout, space } from 'styled-system';

const Image = styled.img`
  ${compose(layout, space)};
`;

export default Image;

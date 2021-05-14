import { themeGet } from '@styled-system/theme-get';
import { Flex } from 'reflexbox';
import styled from 'styled-components';
import { layout, position } from 'styled-system';

export const HeaderCardStyled = styled(Flex).attrs({
  flexDirection: 'column',
  justifyContent: 'space-between',
})`
  background-color: ${themeGet('colors.white')};
  border-radius: 8px;
  box-shadow: 0 32px 32px rgba(0, 0, 0, 0.25);
  padding: 1rem;

  ${layout}
  ${position}
`;

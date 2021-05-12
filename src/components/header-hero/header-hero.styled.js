import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const HeaderHeroStyled = styled.header`
  background-color: ${themeGet('colors.green')};
  padding-bottom: 5rem;
  padding-top: 5rem;
`;

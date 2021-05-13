import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const NavbarStyled = styled.nav`
  padding: 1.25rem 1.5rem;
`;

export const NavbarLinkStyled = styled.a`
  color: ${themeGet('colors.black')};
  font-size: ${themeGet('fontSizes.medium')};
  margin-left: 2rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

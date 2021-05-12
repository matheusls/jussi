import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const FooterStyled = styled.section`
  background-color: ${themeGet('colors.black')};
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
`;

export const SocialMediaListStyled = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SocialMediaListItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
`;

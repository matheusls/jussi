import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const SectionStoresStyled = styled.section`
  background-color: ${themeGet('colors.grey')};
  padding: 1.5rem 0;
`;

export const StoreListStyled = styled.ul`
  align-items: center;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StoreListItemStyled = styled.li`
  &:not(:last-child) {
    margin-right: 3rem;
  }
`;

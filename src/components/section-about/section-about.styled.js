import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

export const SectionAboutStyled = styled.section`
  background-image: linear-gradient(
    to right,
    ${themeGet('colors.white')} 50%,
    ${themeGet('colors.grey')} 50%
  );
  padding-bottom: 4rem;
  padding-top: 4rem;
`;

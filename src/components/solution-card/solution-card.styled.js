import { themeGet } from '@styled-system/theme-get';
import { Box } from 'reflexbox';
import styled from 'styled-components';

export const SolutionCardStyled = styled(Box)`
  border: 1px solid ${themeGet('colors.grey')};
  border-radius: 4px;
  padding: 1rem;

  img {
    border-radius: 50%;
    display: block;
    margin-bottom: 3.5rem;
  }
`;

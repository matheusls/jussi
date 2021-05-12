import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

export const formInlineInputProps = compose(
  background,
  border,
  color,
  space,
  typography,
);

export const formInlineButtonProps = compose(
  background,
  border,
  color,
  position,
  space,
  typography,
);

export const FormInlineStyled = styled.form`
  max-width: 500px;
  position: relative;
  width: 100%;

  ${layout}
`;

export const FormInlineInputStyled = styled.input`
  background: none;
  border: none;
  display: block;
  line-height: 1;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${({ color }) => themeGet(`colors.${color}`)};
  }

  ${formInlineInputProps}
`;

export const FormInlineButtonStyled = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  line-height: 1;
  position: absolute;

  text-transform: ${({ textTransform }) => textTransform};

  ${formInlineButtonProps}
`;

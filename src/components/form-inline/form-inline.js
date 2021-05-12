import { node, string } from 'prop-types';

import {
  FormInlineStyled,
  FormInlineButtonStyled,
  FormInlineInputStyled,
  formInlineInputProps,
  formInlineButtonProps,
} from './form-inline.styled';

const FormInline = ({ buttonProps, inputProps }) => (
  <FormInlineStyled>
    <FormInlineInputStyled {...inputProps} />
    <FormInlineButtonStyled type="button" {...buttonProps} />
  </FormInlineStyled>
);

FormInline.propTypes = {
  buttonProps: {
    children: node.isRequired,
    ...formInlineButtonProps,
  },
  inputProps: {
    id: string.isRequired,
    name: string.isRequired,
    placeholder: string.isRequired,
    type: string.isRequired,
    ...formInlineInputProps,
  },
};

export default FormInline;

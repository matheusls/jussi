import { shape } from 'prop-types';

import {
  FormInlineStyled,
  FormInlineButtonStyled,
  FormInlineInputStyled,
} from './form-inline.styled';

const FormInline = ({ buttonProps, formProps, inputProps }) => (
  <FormInlineStyled {...formProps}>
    <FormInlineInputStyled {...inputProps} />
    <FormInlineButtonStyled {...buttonProps} />
  </FormInlineStyled>
);

FormInline.propTypes = {
  formProps: shape({}),
  buttonProps: shape({}),
  inputProps: shape({}),
};

export default FormInline;

import { bool, func, node, shape, string } from 'prop-types';

import {
  FormInlineStyled,
  FormInlineButtonStyled,
  FormInlineInputStyled,
  formInlineProps,
  formInlineInputProps,
  formInlineButtonProps,
} from './form-inline.styled';

const FormInline = ({ buttonProps, formProps, inputProps }) => (
  <FormInlineStyled {...formProps}>
    <FormInlineInputStyled {...inputProps} />
    <FormInlineButtonStyled {...buttonProps} />
  </FormInlineStyled>
);

FormInline.propTypes = {
  formProps: shape({
    ...formInlineProps,
    onSubmit: func.isRequired,
  }),
  buttonProps: shape({
    ...formInlineButtonProps,
    children: node.isRequired,
    disabled: bool.isRequired,
    type: string,
    onClick: func,
  }),
  inputProps: shape({
    ...formInlineInputProps,
    id: string.isRequired,
    name: string.isRequired,
    placeholder: string.isRequired,
    type: string.isRequired,
    value: string,
    onChange: func,
  }),
};

export default FormInline;

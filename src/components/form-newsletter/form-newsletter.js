import { FormInline } from 'components';

const inputProps = {
  borderBottomColor: 'green',
  borderBottomStyle: 'solid',
  borderBottomWidth: '1px',
  color: 'white',
  id: 'email',
  name: 'email',
  padding: '1.125rem 0',
  placeholder: 'Digite seu e-mail',
  type: 'email',
};

const buttonProps = {
  children: 'Cadastrar',
  color: 'green',
  right: 0,
  textTransform: 'uppercase',
  top: 'calc(50% - 0.5rem)',
};

const FormNewsletter = () => (
  <FormInline inputProps={inputProps} buttonProps={buttonProps} />
);

export default FormNewsletter;

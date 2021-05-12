import { FormInline, Icon } from 'components';

const inputProps = {
  border: 'grey',
  borderRadius: '1.5rem',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'pink',
  id: 'email',
  name: 'email',
  padding: '0.5rem 1rem',
  placeholder: 'Buscar',
  type: 'search',
};

const buttonProps = {
  right: '1rem',
  top: 'calc(50% - 12px)',
};
const FormSearch = () => (
  <FormInline
    inputProps={inputProps}
    buttonProps={{
      ...buttonProps,
      children: <Icon name="search" />,
    }}
  />
);

export default FormSearch;

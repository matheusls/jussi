import { useEffect, useRef, useState } from 'react';
import { useAsyncFn } from 'react-use';

import { FormInline, Icon, LoadingDots, UnorderedList } from 'components';
import { useOutsideClick } from 'hooks';
import { getPeople } from 'services/swapi';

import { FormSearchStyled } from './form-search.styled';

const formProps = {
  position: 'relative',
  zIndex: 5,
};

const inputProps = {
  autoComplete: 'off',
  backgroundColor: 'white',
  border: 'grey',
  borderRadius: '1.5rem',
  borderStyle: 'solid',
  borderWidth: '1px',
  color: 'pink',
  id: 'search',
  name: 'search',
  padding: '0.5rem 1rem',
  placeholder: 'Buscar',
  type: 'text',
};

const buttonProps = {
  right: '1rem',
  top: 'calc(50% - 12px)',
};

const resultsListProps = {
  backgroundColor: 'white',
  borderRadius: '4px;',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.25)',
  paddingBottom: '1rem',
  paddingTop: '2rem',
  paddingX: '1rem',
  position: 'absolute',
  top: '1rem',
  width: '100%',
  zIndex: '3',
};

const FormSearch = () => {
  const [inputValue, setInputValue] = useState('');
  const [shouldShowResults, setShouldShowResults] = useState(false);

  const formRef = useRef(null);
  const { hasClickedOutside } = useOutsideClick(formRef);

  const [{ loading, value }, makeRequest] = useAsyncFn(
    async () => await getPeople(),
    [inputValue],
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    makeRequest();
  };

  const { results } = value || {};

  const isButtonDisabled = loading || !inputValue;

  useEffect(() => {
    if (results) {
      setShouldShowResults(true);
    }
  }, [results]);

  useEffect(() => {
    if (hasClickedOutside) {
      setShouldShowResults(false);
    }
  }, [hasClickedOutside]);

  return (
    <FormSearchStyled ref={formRef}>
      <FormInline
        formProps={{
          ...formProps,
          onSubmit: handleSubmit,
        }}
        inputProps={{
          ...inputProps,
          value: inputValue,
          onChange: (e) => setInputValue(e.target.value),
          onFocus: () => results && setShouldShowResults(true),
        }}
        buttonProps={{
          ...buttonProps,
          children: <Icon name="search" />,
          disabled: isButtonDisabled,
        }}
      />
      {(shouldShowResults || loading) && (
        <UnorderedList {...resultsListProps}>
          {!loading &&
            results?.map(({ name }, i) => {
              const isLastChild = i === results.length - 1;

              return (
                <UnorderedList.Item
                  key={name}
                  marginBottom={`${!isLastChild ? '0.5rem' : ''}`}
                >
                  {name}
                </UnorderedList.Item>
              );
            })}
          {loading && (
            <UnorderedList.Item>
              <LoadingDots />
            </UnorderedList.Item>
          )}
        </UnorderedList>
      )}
    </FormSearchStyled>
  );
};

export default FormSearch;

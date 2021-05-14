import { useEffect, useState } from 'react';

const useOutsideClick = (ref) => {
  const [hasClickedOutside, setHasClickedOutside] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setHasClickedOutside(true);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      setHasClickedOutside(false);
    };
  }, [ref]);

  return {
    hasClickedOutside,
  };
};

export default useOutsideClick;

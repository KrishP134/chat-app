import { useState } from 'react';

export const useToggle = (val: boolean): [boolean, () => void] => {
  const [isTrue, setIsTrue] = useState(val);

  const toggleVal = () => {
    setIsTrue(prev => !prev);
  };
  return [isTrue, toggleVal];
};

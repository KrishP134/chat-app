import { useState } from 'react';

export const useLocalStorage = <T extends object>(
  key: string,
  intialValue?: T
): [T, (key: string, updatedData: T) => void] => {
  const [data, setData] = useState<T>(() => {
    const loadedData = localStorage.getItem(key);
    if (loadedData) {
      try {
        const parsedData = JSON.parse(loadedData);
        return parsedData;
      } catch (e) {
        console.log(e);
      }
    }

    return intialValue;
  });

  const updateData = (key: string, updatedData: T): void => {
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };
  return [data, updateData];
};

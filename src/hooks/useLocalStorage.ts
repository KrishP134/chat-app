import { useEffect, useState } from "react";

export const useLocalStorage = <T extends object>(
  key: string
): [T | undefined, (key: string, updatedData: T) => void] => {
  const [data, setData] = useState<T>();

  useEffect(() => {
    const loadedData = localStorage.getItem(key);
    console.log(key, loadedData);
    if (loadedData) {
      try {
        const parsedData = JSON.parse(loadedData);
        setData(parsedData as T);
      } catch (e) {
        console.log(e);
      }
    }
  }, [key]);

  const updateData = (key: string, updatedData: T): void => {
    setData(updatedData);
    localStorage.setItem(key, JSON.stringify(updatedData));
  };
  return [data, updateData];
};

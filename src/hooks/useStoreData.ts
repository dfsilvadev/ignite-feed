import { useCallback, useState } from "react";

interface StoreDataProps<T> {
  data: T;
  storeData: (newValue: T) => void;
}

export default function useStoreData<K extends string, T>(
  key: K,
  initialValue?: T
): StoreDataProps<T> {
  const [data, setData] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const storeData = useCallback(
    (newValue: T) => {
      setData(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return { data, storeData };
}

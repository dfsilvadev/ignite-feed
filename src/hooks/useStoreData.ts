import { useCallback, useState } from "react";

interface StoreCommentsProps<T> {
  data: T;
  setValue: (newComment: T) => void;
}

export default function useStoreData<K extends string, T>(
  key: K,
  initialValue?: T
): StoreCommentsProps<T> {
  const [data, setData] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newComment: T) => {
      setData(newComment);
      localStorage.setItem(key, JSON.stringify(newComment));
    },
    [key]
  );

  return { data, setValue };
}

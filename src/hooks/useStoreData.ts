import { useCallback, useState } from "react";

type StoreCommentsProps = {
  data: any;
  setValue: (newComment: any) => void;
};

const useStoreData = (key: string, initialValue?: any): StoreCommentsProps => {
  const [data, setData] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newComment: any) => {
      setData(newComment);
      localStorage.setItem(key, JSON.stringify(newComment));
    },
    [key]
  );

  return { data, setValue };
};

export default useStoreData;

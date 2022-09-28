import { useCallback, useState } from "react";

import { Comment } from "../components/Post/types";

type StoreCommentsProps = {
  comments: Comment[];
  setValue: (newComment: Comment[]) => void;
};

const useStoreComments = (
  key: string,
  initialValue?: Comment[]
): StoreCommentsProps => {
  const [comments, setComments] = useState<Comment[]>(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (newComment: Comment[]) => {
      setComments([...newComment]);
      localStorage.setItem(key, JSON.stringify(newComment));
    },
    [key]
  );

  return { comments, setValue };
};

export default useStoreComments;

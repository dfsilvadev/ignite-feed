import { HTMLAttributes } from "react";
import { Author } from "../Post/types";

export type AddCommentFormProps = {
  author: Author;
  handleCreateNewComment: (newComment: string) => void;
} & HTMLAttributes<HTMLFormElement>;

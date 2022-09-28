import { Comment } from "../Post/types";

export type CommentProps = {
  comment?: Comment;
  onDeleteComment: (value: string) => void;
};

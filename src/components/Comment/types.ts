import { Comment } from "../Post/types";

export type CommentProps = {
  comment?: Comment;
  onDeleteComment: (id: number) => void;
};

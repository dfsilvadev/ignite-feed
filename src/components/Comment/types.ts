import { Comment } from "../Post/types";

export type LikeComment = {
  commentId: number;
  numberOfLikes: number;
};

export type CommentProps = {
  comment?: Comment;
  onDeleteComment: (id: number) => void;
};

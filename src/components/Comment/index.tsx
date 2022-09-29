import { ThumbsUp, Trash } from "phosphor-react";

import useFormatDateTime from "../../hooks/useFormatDateTime";

import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

import { CommentProps, LikeComment } from "./types";
import useStoreData from "../../hooks/useStoreData";

export function Comment({ comment, onDeleteComment }: CommentProps) {
  const { data, setValue } = useStoreData<string, LikeComment>(
    `likeCount:${comment?.id}`,
    {
      commentId: 0,
      numberOfLikes: 0,
    }
  );

  const [publishedDateFormatted, publishedDateRelativeNow] =
    useFormatDateTime();

  function handleDeleteComment() {
    onDeleteComment(comment?.id!);
  }

  function handleLikeComment() {
    setValue({
      commentId: comment?.id!,
      numberOfLikes: data.numberOfLikes + 1,
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        url="https://avatars.githubusercontent.com/u/16245261?s=96&v=4"
      />

      <div className={styles["comment-box"]}>
        <div className={styles["comment-content"]}>
          <header>
            <div className={styles["author-and-time"]}>
              <strong>Daniel Silva</strong>
              <time
                title={publishedDateFormatted(new Date(comment?.publishedAt!))}
                dateTime={new Date(comment?.publishedAt!).toISOString()}
              >
                {publishedDateRelativeNow(new Date(comment?.publishedAt!))}
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>

          <p>{comment?.content.text}</p>
        </div>

        <footer>
          <button type="button" onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{data.numberOfLikes}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

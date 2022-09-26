import { useState } from "react";

import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Tags } from "../Tags";
import { AddCommentForm } from "../AddCommentForm";

import styles from "./styles.module.css";

import { PostProps } from "./types";

import useFormatDateTime from "../../hooks/useFormatDateTime";

export function Post({
  author,
  content,
  hashtags,
  publishedAt,
  postId,
}: PostProps) {
  const [comments, setComments] = useState(["Muito bom John, parabéns!! 👏👏"]);

  const [publishedDateFormatted, publishedDateRelativeNow] =
    useFormatDateTime();

  function handleCreateNewComment(newComment: string) {
    setComments([...comments, newComment]);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar url={author.avatarUrl} />

          <div className={styles["author-info"]}>
            <strong>{author?.name}</strong>
            <span>{author?.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted(publishedAt)}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeNow(publishedAt)}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <a href={item.url} key={item.content}>
                <p>{item.content}</p>
              </a>
            );
          }
        })}
        <div>
          <Tags tags={hashtags} />
        </div>
      </div>

      <AddCommentForm
        author={author}
        handleCreateNewComment={handleCreateNewComment}
      />

      <div className={styles["comment-list"]}>
        {comments.map((comment) => (
          <Comment content={comment} />
        ))}
      </div>
    </article>
  );
}

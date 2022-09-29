import { Avatar } from "../Avatar";
import { Comment } from "../Comment";
import { Tags } from "../Tags";
import { AddCommentForm } from "../AddCommentForm";

import useFormatDateTime from "../../hooks/useFormatDateTime";
import useStoreData from "../../hooks/useStoreData";

import mockComments from "../../utils/mockComments";

import styles from "./styles.module.css";

import { Comment as CommentType, PostProps } from "./types";

export function Post({
  author,
  content,
  hashtags,
  publishedAt,
  postId,
}: PostProps) {
  const { data, setValue } = useStoreData<string, CommentType[]>(
    `comments:${postId}`,
    mockComments.filter((comment) => comment.postId === postId && comment)
  );

  const [publishedDateFormatted, publishedDateRelativeNow] =
    useFormatDateTime();

  function handleCreateNewComment(newComment: string) {
    setValue([
      {
        id: Math.floor(Math.random() * 500),
        postId,
        content: {
          author: {
            avatarUrl: "https://i.pravatar.cc/150?img=9",
            name: "John Smith",
          },
          text: newComment,
        },
        publishedAt: new Date(),
      },
      ...data,
    ]);
  }

  function deleteComment(id: number) {
    const commentsWithoutDeletedOne = data.filter(
      (comment) => comment.id !== id
    );
    setValue(commentsWithoutDeletedOne);
    localStorage.removeItem(`likeCount:${id}`);
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
        {data &&
          data.map((comment) => (
            <Comment
              comment={comment}
              key={comment.id}
              onDeleteComment={deleteComment}
            />
          ))}
      </div>
    </article>
  );
}

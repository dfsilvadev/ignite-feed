import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

import { CommentProps } from "./types";

import useFormatDateTime from "../../hooks/useFormatDateTime";

export function Comment({ content }: CommentProps) {
  const [publishedDateFormatted, publishedDateRelativeNow] =
    useFormatDateTime();

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
                title="13 de Setembro de 2022"
                dateTime="2022-09-13 17:04:00"
              >
                Há 15 dias
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

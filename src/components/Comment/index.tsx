import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "../Avatar";

import styles from "./styles.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        url="https://avatars.githubusercontent.com/u/16245261?v=4"
      />

      <div className={styles["comment-box"]}>
        <div className={styles["comment-content"]}>
          <header>
            <div className={styles["author-and-time"]}>
              <strong>Daniel Silva</strong>
              <time
                title="13 de Setembro às 17:04"
                dateTime="2022-09-13 17:04:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário" type="button">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom, Daniel. Parabéns!! 👏👏</p>
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

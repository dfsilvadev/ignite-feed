import styles from "./styles.module.css";

export function PostFormComment() {
  return (
    <form className={styles["comment-form"]}>
      <strong>Deixe o seu feedback</strong>
      <textarea placeholder="Deixe o seu feedback" />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
}

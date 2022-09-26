import { FormEvent, useState } from "react";

import styles from "./styles.module.css";

import { AddCommentFormProps } from "./types";

export function AddCommentForm({
  author,
  handleCreateNewComment,
  ...props
}: AddCommentFormProps) {
  const [comment, setComment] = useState("");

  function initialValue(value: string) {
    setComment(value);
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    handleCreateNewComment(comment);
    initialValue("");
  }

  return (
    <form className={styles["comment-form"]} {...props} onSubmit={handleSubmit}>
      <strong>Deixe o seu feedback</strong>
      <textarea
        placeholder="Deixe o seu feedback"
        name="comment"
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      />

      <footer>
        <button type="submit">Publicar</button>
      </footer>
    </form>
  );
}

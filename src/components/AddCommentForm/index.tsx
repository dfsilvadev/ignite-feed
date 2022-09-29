import { ChangeEvent, FormEvent, useState } from "react";

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

  function handleNewCommentChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    evt.currentTarget.setCustomValidity("");
    setComment(evt.target.value);
  }

  function handleNewCommentInvalid(evt: FormEvent<HTMLTextAreaElement>) {
    evt.currentTarget.setCustomValidity(
      "Nossa... você esqueceu o comentário :("
    );
  }

  return (
    <form className={styles["comment-form"]} {...props} onSubmit={handleSubmit}>
      <strong>Deixe o seu feedback</strong>
      <textarea
        placeholder="Deixe o seu feedback"
        name="comment"
        value={comment}
        onChange={handleNewCommentChange}
        onInvalid={handleNewCommentInvalid}
        required
      />

      <footer>
        <button type="submit" disabled={!!!comment}>
          Publicar
        </button>
      </footer>
    </form>
  );
}

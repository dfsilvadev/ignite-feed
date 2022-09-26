import styles from "./styles.module.css";

type TagsProps = {
  tags: string[];
};

export function Tags({ tags }: TagsProps) {
  return (
    <>
      {tags &&
        tags.map((tag, i) => (
          <p className={styles.tag} key={i}>
            {tag}
          </p>
        ))}
    </>
  );
}

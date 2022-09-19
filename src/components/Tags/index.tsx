import styles from "./styles.module.css";

type TagsProps = {
  tags: string[];
};

export function Tags({ tags }: TagsProps) {
  return <>{tags && tags.map((tag) => <p className={styles.tag}>{tag}</p>)}</>;
}

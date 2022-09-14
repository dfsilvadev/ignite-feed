import styles from "./styles.module.css";

type AvatarProps = {
  hasBorder?: boolean;
  url: string;
};

export function Avatar({ hasBorder = true, url }: AvatarProps) {
  return (
    <img
      className={hasBorder ? `${styles["with-border"]}` : `${styles.avatar}`}
      src={url}
    />
  );
}

import styles from "./styles.module.css";

interface MenuIconProps {
  active: boolean;
  onClick: () => void;
}

export default function MenuIcon({ active, onClick }: MenuIconProps) {
  return (
    <div
      className={`${styles.icon} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      <div className={styles.line} id={styles.line01}></div>
      <div className={styles.line} id={styles.line02}></div>
      <div className={styles.line} id={styles.line03}></div>
    </div>
  );
}

import styles from "./styles.module.css";

export default function Fade({ active }: { active: boolean }) {
  return (
    <div className={`${styles.fade} ${active ? styles.active : ""}`}></div>
  );
}

import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function CardText({ children }: { children: ReactNode }) {
  return <p className={styles.text}>{children}</p>;
}

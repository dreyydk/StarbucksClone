import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function CardTitle({ children }: { children: ReactNode }) {
  return <h1 className={styles.title}>{children}</h1>;
}

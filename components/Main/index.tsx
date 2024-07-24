import { ReactNode } from "react";
import styles from "./style.module.css";

export default function Main({ children }: { children: ReactNode }) {
  return <main className={styles.main}>{children}</main>;
}

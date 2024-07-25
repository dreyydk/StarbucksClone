import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function Disclaimer({ children }: { children: ReactNode }) {
  return <p className={styles.disclaimer}>{children}</p>;
}

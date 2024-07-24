import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function Header({ children }: { children: ReactNode }) {
  return <header className={styles.header}>{children}</header>;
}

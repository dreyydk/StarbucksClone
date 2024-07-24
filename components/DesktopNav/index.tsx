import { ReactNode } from "react";
import styles from "./styles.module.css";

export default function DesktopNav({ children }: { children: ReactNode }) {
  return <div className={styles.container}>{children}</div>;
}

import { ReactNode } from "react";
import styles from "./styles.module.css";

interface MobileNavProps {
  children: ReactNode;
  active: boolean;
}

export default function MobileNav({ children, active }: MobileNavProps) {
  return (
    <div className={`${styles.menu} ${active ? styles.active : ""}`}>
      {children}
    </div>
  );
}

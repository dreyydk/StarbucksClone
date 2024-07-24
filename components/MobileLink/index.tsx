import { ReactNode } from "react";
import styles from "./styles.module.css";

interface MobileLinkProps {
  href: string;
  children: ReactNode;
}

export default function MobileLink(props: MobileLinkProps) {
  return (
    <a href={props.href} className={styles.link}>
      {props.children}
    </a>
  );
}

import { ReactNode } from "react";
import styles from "./styles.module.css";

interface DesktopLinkProps {
  href: string;
  children: ReactNode;
}

export default function DesktopLink(props: DesktopLinkProps) {
  return (
    <a href={props.href} className={styles.link}>
      {props.children}
    </a>
  );
}

import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  href: string;
  preset: "light" | "dark";
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  const className = `${styles.button} ${
    props.preset === "light" ? styles.light : styles.dark
  }`;

  return (
    <a href={props.href}>
      <button className={className}>{props.children}</button>
    </a>
  );
}

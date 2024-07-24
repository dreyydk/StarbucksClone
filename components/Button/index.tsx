import { ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps {
  href: string;
  preset: "light" | "dark" | "truelight" | "darkergreen";
  children: ReactNode;
}

export default function Button(props: ButtonProps) {
  let className = styles.button;

  if (props.preset === "light") {
    className += ` ${styles.light}`;
  } else if (props.preset === "dark") {
    className += ` ${styles.dark}`;
  } else if (props.preset === "truelight") {
    className += ` ${styles.truelight}`;
  } else if (props.preset === "darkergreen") {
    className += ` ${styles.darkergreen}`;
  }

  return (
    <a href={props.href}>
      <button className={className}>{props.children}</button>
    </a>
  );
}

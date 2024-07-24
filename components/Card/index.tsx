import { ReactNode } from "react";
import styles from "./styles.module.css";

interface CardProps {
  preset: "darkgreen" | "green" | "lightgreen" | "purple";
  children: ReactNode;
}

export default function Card(props: CardProps) {
  return (
    <div className={`${styles.card} ${styles[props.preset]}`}>
      {props.children}
    </div>
  );
}

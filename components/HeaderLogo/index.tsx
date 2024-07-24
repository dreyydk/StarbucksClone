import Image from "next/image";
import source from "../../public/logo.png";
import styles from "./styles.module.css";

export default function HeaderLogo() {
  return (
    <Image
      src={source}
      width={640}
      height={648}
      alt="Logo"
      className={styles.logo}
    />
  );
}

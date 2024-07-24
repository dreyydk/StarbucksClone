import styles from "./styles.module.css";

export default function FindStoreBtn() {
  return (
    <a
      href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z"
      className={styles.button}
    >
      <i className="bi bi-geo-alt-fill"></i>
      <span>Find a store</span>
    </a>
  );
}

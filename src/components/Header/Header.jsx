import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.backgroundContainer}>
      <h3 className={styles.title}>BOOK SEARCHER</h3>
    </div>
  );
}

export default Header;

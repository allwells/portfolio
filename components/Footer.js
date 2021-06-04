import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="/">
        Powered by{" "}
        <span className={styles.logo}>
          <Link href="/">
            <a href="/">Allwell Onen</a>
          </Link>
        </span>
      </a>
    </footer>
  );
}

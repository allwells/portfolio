import styles from "../styles/Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className={styles.footer}>
      <p>
        Copyright ©{" "}
        <Link href="/">
          <a>Allwell Onen</a>
        </Link>
        {" " + year}. All rights reserved.
      </p>
    </footer>
  );
}

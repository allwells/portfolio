import Link from "next/link";
import styles from "../styles/AppBar.module.css";

export default function AppBar() {
  return (
    <div className={styles.appbar}>
      <ul className={styles.appbarItems}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a>Project</a>
          </Link>
        </li>
        <li>
          <Link href="/#certificate">
            <a>Certificate</a>
          </Link>
        </li>
        <li>
          <Link href="/#links">
            <a>Useful Links</a>
          </Link>
        </li>
      </ul>
      <ul className={styles.socialItems}>
        <li>
          <Link href="/#facebook">
            <a>G</a>
          </Link>
        </li>
        <li>
          <Link href="/#instagram">
            <a>G</a>
          </Link>
        </li>
        <li>
          <Link href="/#twitter">
            <a>G</a>
          </Link>
        </li>
        <li>
          <Link href="/#github">
            <a>G</a>
          </Link>
        </li>
        <li>
          <Link href="/#linkedin">
            <a>G</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

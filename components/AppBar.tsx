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
          <Link href="/#about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/#contact">
            <a>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/#projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/#certificates">
            <a>Certificates</a>
          </Link>
        </li>
        <li>
          <Link href="/#links">
            <a>Useful Links</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

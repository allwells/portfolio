import Link from "next/link";
import Image from "next/image";
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
      {/* <ul className={styles.socialItems}>
        <li>
          <Link href="/#facebook">
            <a>
              <div className={styles.facebook}></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#linkedin">
            <a>
              <div className={styles.linkedin}></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#twitter">
            <a>
              <div className={styles.twitter}></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#github">
            <a>
              <div className={styles.github}></div>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#gmail">
            <a>
              <div className={styles.gmail}></div>
            </a>
          </Link>
        </li>
      </ul> */}
    </div>
  );
}

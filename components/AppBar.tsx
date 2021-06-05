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
            <a>
              <Image src="/facebook-inactive.svg" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#linkedin">
            <a>
              <Image src="/linkedin-inactive.svg" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#twitter">
            <a>
              <Image src="/twitter-inactive.svg" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#github">
            <a>
              <Image src="/github-inactive.svg" width={25} height={25} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="/#gmail">
            <a>
              <Image src="/gmail-inactive.svg" width={25} height={25} />
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

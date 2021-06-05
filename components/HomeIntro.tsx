import Image from "next/image";
import styles from "../styles/HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <div className={styles.homeIntro}>
      {/* <h1>About Allwell</h1> */}
      <div className={styles.profileParent}>
        <Image
          className={styles.profile}
          src="/profile.jpg"
          width={250}
          height={250}
        />
      </div>
      <div className={styles.introContent}>
        <p className={styles.name}>
          Hi! My name is <b>Allwell Onen</b>
        </p>
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. This is just a
          dummy text so do not try to read it unless you want to waste your
          time. This is just a dummy text so do not try to read it unless you
          want to waste your time. Thank you.
        </p>
        <p>
          This is just a dummy text so do not try to read it unless you want to
          waste your time. This is just a dummy text so do not try to read it
          unless you want to waste your time. This is just a dummy text so do
          not try to read it unless you want to waste your time. Thank you.
        </p>
      </div>
    </div>
  );
}

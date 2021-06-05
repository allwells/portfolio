import Image from "next/image";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.welcomeText}>Welcome To My Page</h1>
      <div className={styles.profileParent}>
        <Image
          className={styles.profile}
          src="/profile.jpg"
          width={250}
          height={250}
        />
      </div>
      <p className={styles.name}>
        Hi! My name is <b>Allwell Onen</b>
      </p>
    </div>
  );
}

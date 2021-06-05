import Image from "next/image";
import styles from "../styles/HomeIntro.module.css";

export default function HomeIntro() {
  return (
    <div className={styles.homeIntro}>
      <div className={styles.profileParent}>
        <div className={styles.profileBorder}>
          <Image
            className={styles.profile}
            src="/profile.jpg"
            width={250}
            height={250}
          />
        </div>
      </div>
      <p className={styles.name}>
        Hi! My name is <b>Allwell Onen</b>,
      </p>
      <p>
        I'm a Software Developer and a Penetration Tester. You can contact me on
        LinkedIn or Telegram. I'm a Software Developer and a Penetration Tester.
        You can contact me on LinkedIn or Telegram. I'm a Software Developer and
        a Penetration Tester. You can contact me on LinkedIn or Telegram.
      </p>
      <p>
        I'm a Software Developer and a Penetration Tester. You can contact me on
        LinkedIn or Telegram. I'm a Software Developer and a Penetration Tester.
        You can contact me on LinkedIn or Telegram. I'm a Software Developer and
        a Penetration Tester. You can contact me on LinkedIn or Telegram.
      </p>
    </div>
  );
}

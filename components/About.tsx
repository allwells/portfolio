import styles from "../styles/About.module.css";

export default function About({ about }) {
  return (
    <div className={styles.homeIntro}>
      <h1 id={about}>About</h1>
      <div className={styles.introContent}>
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

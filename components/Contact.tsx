import styles from "../styles/Contact.module.css";

function Input({ placeholder, type, classname }) {
  return <input placeholder={placeholder} type={type} className={classname} />;
}

export default function Contact({ contact_me }) {
  return (
    <div className={styles.contact}>
      <h1 id={contact_me}>Contact</h1>
      <div className={styles.socialLinks}>
        <a href="https://github.com/allwells" target="_blank">
          <img
            src="https://img.shields.io/badge/github-%2324292e.svg?&style=for-the-badge&logo=github&logoColor=white"
            alt="github"
          />
        </a>
        <a href="https://twitter.com/allwell_festus" target="_blank">
          <img
            src="https://img.shields.io/badge/twitter-%2300acee.svg?&style=for-the-badge&logo=twitter&logoColor=white"
            alt="twitter"
          />
        </a>
        <a href="https://linkedin.com/in/allwell-festus" target="_blank">
          <img
            src="https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"
            alt="linkedin"
          />
        </a>
        <a href="https://www.facebook.com/allwell.onen" target="_blank">
          <img
            src="https://img.shields.io/badge/facebook-%232E87FB.svg?&style=for-the-badge&logo=facebook&logoColor=white"
            alt="facebook"
          />
        </a>
        <a href="https://instagram.com/allwell_festus" target="_blank">
          <img
            src="https://img.shields.io/badge/instagram-%23000000.svg?&style=for-the-badge&logo=instagram&logoColor=white"
            alt="instagram"
          />
        </a>
        <a href="mailto: aleenfestus@gmail.com" target="_blank">
          <img
            src="https://img.shields.io/badge/gmail-%23000000.svg?&style=for-the-badge&logo=gmail&logoColor=white"
            alt="gmail"
          />
        </a>
      </div>
      <div className={styles.sendEmail}>
        <h1 className={styles.leaveMessage}>Leave a Message</h1>
        <div className={styles.namePanel}>
          <Input
            placeholder="Full name"
            type="text"
            classname={styles.nameField}
          />
        </div>
        <div className={styles.emailPanel}>
          <Input
            placeholder="Email address"
            type="text"
            classname={styles.emailField}
          />
        </div>
        <div className={styles.messagePanel}>
          <textarea placeholder="Message..." className={styles.messageField} />
        </div>
        <div className={styles.sendButtonPanel}>
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
}

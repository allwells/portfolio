import styles from "../styles/Contact.module.css";

function Input({ placeholder, type, classname }) {
  return <input placeholder={placeholder} type={type} className={classname} />;
}

export default function Contact({ contact_me }) {
  return (
    <div className={styles.contact}>
      <h1 id={contact_me}>Contact</h1>
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

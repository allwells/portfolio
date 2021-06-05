import styles from "../styles/Contact.module.css";
import Image from "next/image";

function Input({ type, classname }) {
  return <input type={type} className={classname} />;
}

export default function Contact({ contact_me }) {
  return (
    <div className={styles.contact}>
      <h1 id={contact_me}>Get in Touch</h1>
      <div className={styles.socialLinks}>
        <div>
          <a
            className={styles.facebook}
            href="https://facebook.com/allwell.onen"
            target="_blank"
          >
            <Image src="/facebook-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className={styles.linkedin}
            href="https://linkedin.com/in/allwell-festus"
            target="_blank"
          >
            <Image src="/linkedin-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className={styles.telegram}
            href="https://t.me/allwells"
            target="_blank"
          >
            <Image src="/telegram-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className={styles.whatsapp}
            href="https://wa.me/+2348023495323"
            target="_blank"
          >
            <Image src="/whatsapp-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className={styles.gmail}
            href="mailto:aleenfestus@gmail.com"
            target="_blank"
          >
            <Image src="/gmail-inactive.svg" width={10} height={10} />
          </a>
        </div>
      </div>
      <div className={styles.or}>
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className={styles.sendEmail}>
        <div className={styles.namePanel}>
          <p>
            Name <span>*</span>
          </p>
          <Input type="text" classname={styles.nameField} />
        </div>
        <div className={styles.emailPanel}>
          <p>
            Email Address <span>*</span>
          </p>
          <Input type="text" classname={styles.emailField} />
        </div>
        <div className={styles.companyPanel}>
          <p>Company</p>
          <Input type="text" classname={styles.companyField} />
        </div>
        <div className={styles.messagePanel}>
          <p>
            Message <span>*</span>
          </p>
          <textarea className={styles.messageField} />
        </div>
        <div className={styles.sendButtonPanel}>
          <button className={styles.sendButton}>Send</button>
        </div>
      </div>
    </div>
  );
}

import StyledContact from "../../styles/Contact.module";
import Image from "next/image";

function Input({ type, classname }) {
  return <input type={type} className={classname} />;
}

export default function Contact({ contact_me }) {
  return (
    <StyledContact>
      <h1 id={contact_me}>Get in Touch</h1>
      <div className="socialLinks">
        <div>
          <a
            className="facebook"
            href="https://facebook.com/allwell.onen"
            target="_blank"
          >
            <Image src="/facebook-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className="linkedin"
            href="https://linkedin.com/in/allwell-festus"
            target="_blank"
          >
            <Image src="/linkedin-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a className="telegram" href="https://t.me/allwells" target="_blank">
            <Image src="/telegram-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className="whatsapp"
            href="https://wa.me/+2348023495323"
            target="_blank"
          >
            <Image src="/whatsapp-inactive.svg" width={10} height={10} />
          </a>
        </div>
        <div>
          <a
            className="gmail"
            href="mailto:aleenfestus@gmail.com"
            target="_blank"
          >
            <Image src="/gmail-inactive.svg" width={10} height={10} />
          </a>
        </div>
      </div>
      <div className="or">
        <div></div>
        <p>OR</p>
        <div></div>
      </div>
      <div className="sendEmail">
        <div className="namePanel">
          <p>
            Name <span>*</span>
          </p>
          <Input type="text" classname="nameField" />
        </div>
        <div className="emailPanel">
          <p>
            Email Address <span>*</span>
          </p>
          <Input type="text" classname="emailField" />
        </div>
        <div className="companyPanel">
          <p>Company</p>
          <Input type="text" classname="companyField" />
        </div>
        <div className="messagePanel">
          <p>
            Message <span>*</span>
          </p>
          <textarea className="messageField" />
        </div>
        <div className="sendButtonPanel">
          <button className="sendButton">Send</button>
        </div>
      </div>
    </StyledContact>
  );
}

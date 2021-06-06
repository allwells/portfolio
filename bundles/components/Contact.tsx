import Image from "next/image";
import styled from "styled-components";

const StyledContact = styled.div`
  height: fit-content;
  padding: 1em 20em;
  margin-bottom: 6em;

  h1 {
    padding-top: 2.5em;
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: #adbac7;
  }

  .sendEmail {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    place-items: center;
  }

  .sendEmail input {
    height: 4em;
    width: 100%;
    border-radius: 2px;
    outline: none;
    font-size: 16px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    padding-left: 0.5em;
    border: 1px solid ${({ theme }) => theme.colors.hoverBtn};
    background-color: ${({ theme }) => theme.colors.textField};
    transition-duration: 0.5s;
  }

  .sendEmail input:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }

  .sendEmail div {
    margin: 1.4em 0;
    width: 100%;
  }

  .sendEmail .messageField {
    width: 100%;
    height: 16em;
    border-radius: 2px;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.hoverBtn};
    font-size: 16px;
    font-weight: 200;
    color: ${({ theme }) => theme.colors.text};
    padding: 1em 0.7em;
    background-color: ${({ theme }) => theme.colors.textField};
    transition-duration: 0.5s;
  }

  .sendEmail .messageField:focus {
    border: 1px solid ${({ theme }) => theme.colors.text};
  }

  .sendButton {
    width: 12em;
    height: 3em;
    border-radius: 2px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.hoverBtn};
    border: 1px solid ${({ theme }) => theme.colors.hoverBtn};
    transition-duration: 0.3s;
  }

  .sendButton:hover {
    cursor: pointer;
    background-color: #dbe5ee11;
  }

  .sendEmail p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
  }

  .sendEmail span {
    color: brown;
  }

  .socialLinks {
    display: flex;
    justify-content: center;
    margin-top: 6em;
    margin-bottom: 3em;
  }

  .socialLinks div {
    width: fit-content;
    margin: 0.5em 0.8em;
  }

  .socialLinks a {
    border-radius: 50%;
    padding-top: 1.1em;
    border: 2px solid ${({ theme }) => theme.colors.textLight};
  }

  .socialLinks a:hover {
    background-color: ${({ theme }) => theme.colors.hoverBtn};
  }

  .or {
    display: flex;
    justify-content: center;
    margin-top: 6em;
  }

  .or p {
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
    font-weight: 300;
  }

  .or div {
    height: 2px;
    background-color: ${({ theme }) => theme.colors.hoverBtn};
    width: 5%;
    margin: 2em 1em;
  }
`;

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

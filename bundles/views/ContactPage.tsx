import StyledContact from "../../styles/contact.styled";
import head from "../components/Heading";

interface FormProps {
  submitForm: Function;
}

const ContactPage = () => {
  const submitForm = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  return (
    <StyledContact>
      <head.Heading102 heading="Contact" />
      <div className="contact">
        <ContactInfo />
        <ContactForm submitForm={submitForm} />
      </div>
    </StyledContact>
  );
};

const ContactForm = ({ submitForm }: FormProps) => {
  return (
    <form onSubmit={() => submitForm}>
      <head.Heading201 heading="How Can I Help You?" />
      <div className="container">
        <div className="inputs">
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Company Name" />
          <input type="text" placeholder="Email Address" />
        </div>
        <div className="message">
          <textarea placeholder="Message" cols={30} rows={10}></textarea>
        </div>
      </div>
      <input
        className="submitButton"
        id="submit"
        type="submit"
        value="Send Message"
      />
    </form>
  );
};

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div>
        <img src="/phone.svg" alt="phone-icon" />
        <span>
          <a href="tel:+2348023495323">(+234) 802-349-5323</a>
        </span>
      </div>
      <div>
        <img src="/telegram.svg" alt="telegram-icon" />
        <span>
          <a
            href="http://t.me/allwells"
            target="_blank"
            rel="noopener noreferrer"
          >
            @allwells
          </a>
        </span>
      </div>
      <div>
        <img src="/location.svg" alt="location-icon" />
        <span>Lagos, Nigeria</span>
      </div>
      <div>
        <img src="/mail.svg" alt="mail-icon" />
        <span>
          <a href="mailto:aleenfestus@gmail.com">aleenfestus@gmail.com</a>
        </span>
      </div>
    </div>
  );
};

export default ContactPage;

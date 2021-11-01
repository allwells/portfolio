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
  return <form onSubmit={() => submitForm}></form>;
};

const ContactInfo = () => {
  return (
    <div className="contactInfo">
      <div>
        <img src="/desktop.svg" alt="contact-icon" />
        <span>Heading</span>
      </div>
    </div>
  );
};

export default ContactPage;

import styled from "styled-components";

const StyledContact = styled.div`
  .contact {
    height: fit-content;
    padding: 1em 20em;
    margin-bottom: 6em;
  }

  .contact h1 {
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
    color: #adbac7;
    padding-left: 0.5em;
    border: 1px solid #444c56;
    background-color: #dbe5ee11;
    transition-duration: 0.5s;
  }

  .sendEmail input:focus {
    border: 1px solid #adbac7;
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
    border: 1px solid #444c56;
    font-size: 16px;
    font-weight: 200;
    color: #adbac7;
    padding: 1em 0.7em;
    background-color: #dbe5ee11;
    transition-duration: 0.5s;
  }

  .sendEmail .messageField:focus {
    border: 1px solid #adbac7;
  }

  .sendButton {
    width: 12em;
    height: 3em;
    border-radius: 2px;
    outline: none;
    font-size: 18px;
    font-weight: 500;
    color: #adbac7;
    background-color: #444c56;
    border: 1px solid #444c56;
    transition-duration: 0.3s;
  }

  .sendButton:hover {
    cursor: pointer;
    background-color: #dbe5ee11;
  }

  .sendEmail p {
    font-size: 18px;
    color: #adbac7;
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
    border: 2px solid #adbac7aa;
  }

  .socialLinks a:hover {
    background-color: #444c56;
  }

  .contact .or {
    display: flex;
    justify-content: center;
    margin-top: 6em;
  }

  .contact .or p {
    color: #adbac7;
    font-size: 16px;
    font-weight: 300;
  }

  .contact .or div {
    height: 2px;
    background-color: #444c56;
    width: 5%;
    margin: 2em 1em;
  }
`;

export default StyledContact;

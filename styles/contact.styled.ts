import styled from "styled-components";

const StyledContact = styled.div`
  * {
    transition-duration: 0.5s;
  }

  .contact {
    padding: 7% 5%;
    display: flex;
  }

  .contactInfo {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    div {
      display: flex;
      place-items: center;
      margin-bottom: 1rem;
      justify-content: flex-start;
    }

    img {
      width: 2.5rem;
      height: 2.5rem;
    }

    span {
      cursor: default;
      font-weight: 700;
      margin-left: 0.5rem;
      color: ${({ theme }) => theme.dark.text};
    }

    a {
      transition-duration: 0.4s;

      &:hover {
        color: ${({ theme }) => theme.dark.primary.red};
      }
    }
  }

  form {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .container {
      width: 100%;
      display: flex;
      margin: 2rem 0;
      justify-content: space-between;
    }

    .inputs {
      width: 48.5%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      input {
        width: 100%;
        outline: none;
        height: 2.5rem;
        padding: 0 0.7rem;
        font-family: inherit;
        border-radius: 0.3rem;
        color: ${({ theme }) => theme.dark.text};
        background: ${({ theme }) => theme.dark.secondary};
        border: 2px solid ${({ theme }) => theme.dark.tertiary};
        transition-duration: 0.4s;

        &:focus {
          border: 2px solid ${({ theme }) => theme.dark.primary.red};
        }
      }
    }

    .message {
      width: 48.5%;

      textarea {
        width: 100%;
        height: 100%;
        outline: none;
        padding: 0.8rem;
        font-family: inherit;
        border-radius: 0.3rem;
        color: ${({ theme }) => theme.dark.text};
        background: ${({ theme }) => theme.dark.secondary};
        border: 2px solid ${({ theme }) => theme.dark.tertiary};
        transition-duration: 0.4s;

        &:focus {
          border: 2px solid ${({ theme }) => theme.dark.primary.red};
        }
      }
    }

    .submitButton {
      width: 48.5%;
      outline: none;
      height: 2.5rem;
      cursor: pointer;
      font-weight: 700;
      font-size: 0.9rem;
      border-radius: 2rem;
      font-family: inherit;
      padding: 0.5rem 1.5rem;
      letter-spacing: 0.04rem;
      transition-duration: 0.5s;
      color: ${({ theme }) => theme.dark.text};
      background: ${({ theme }) => theme.dark.secondary};
      border: 2px solid ${({ theme }) => theme.dark.primary.red};
      box-shadow: 0 0.2rem 0.3rem ${({ theme }) => theme.dark.black};

      &:hover {
        background: ${({ theme }) => theme.dark.primary.red};
      }
    }
  }
`;

export default StyledContact;

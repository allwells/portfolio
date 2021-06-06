import Image from "next/image";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 100vh;
  margin: 0 1em;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border01};

  .welcomeText {
    font-size: 48px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 2em;
  }

  .profileParent {
    display: flex;
    justify-content: center;
    place-items: center;
    margin-top: 3em;
  }

  .profile {
    border-radius: 50%;
  }

  .name {
    margin-top: 2em;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
    color: ${({ theme }) => theme.colors.text};
  }
`;

export default function Hero() {
  return (
    <StyledHero>
      <h1 className="welcomeText">Welcome To My Page</h1>
      <div className="profileParent">
        <Image
          className="profile"
          src="/profile.jpg"
          width={250}
          height={250}
        />
      </div>
      <p className="name">
        Hi! My name is <b>Allwell Onen</b>
      </p>
    </StyledHero>
  );
}

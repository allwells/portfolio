import Image from "next/image";
import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  place-items: center;
  height: 100vh;
  margin: 0 1em;
  border-bottom: 1px solid ${({ theme }) => theme.lightTheme.border01};

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
    color: ${({ theme }) => theme.lightTheme.text};
  }

  @media screen and (min-width: 270px) and (max-width: 411px) {
    .profileParent {
      margin-top: 3em;
      margin-bottom: 3em;
    }

    .name {
      margin-top: 1em;
      font-size: 17px;
      font-weight: 200;
    }
  }
`;

export default function Hero() {
  return (
    <StyledHero>
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

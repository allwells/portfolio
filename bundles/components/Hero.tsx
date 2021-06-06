import Image from "next/image";
import StyledHero from "../../styles/Hero.module";

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

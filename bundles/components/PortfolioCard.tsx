import Image from "next/image";
import styled from "styled-components";

interface PorfolioCardProps {
  link: string;
  label: string;
  img: string;
  name: string;
}

const PortfolioCard = ({ link, label, img, name }: PorfolioCardProps) => {
  return (
    <StyledPortfolioCard>
      <a id="link" href={link} target="_blank">
        <label>{label}</label>
        <Image id="zoom" src={img} width={380} height={300} alt={"portfolio"} />
        <span id="title">{name}</span>
      </a>
    </StyledPortfolioCard>
  );
};

const StyledPortfolioCard = styled.li`
  margin: 0.5rem;
  overflow: hidden;
  width: fit-content;
  border-radius: 0.7rem;
  border: 1px solid ${({ theme }) => theme.dark.tertiary};

  * {
    transition-duration: 0.5s;
  }

  #zoom {
    &:hover {
      transform: scale(1.3);
    }
  }

  a {
    display: flex;
    flex-direction: column;
  }

  img {
    border-radius: 0.7rem;
  }

  label {
    z-index: 1;
    margin: 1rem;
    font-weight: 600;
    font-size: 0.9rem;
    position: absolute;
    border-radius: 0.4rem;
    padding: 0.2rem 0.6rem;
    color: ${({ theme }) => theme.dark.text};
    background: ${({ theme }) => theme.dark.primary.red};
  }

  span {
    margin: 0;
    z-index: 1;
    height: 3rem;
    display: flex;
    margin-top: -3rem;
    place-items: center;
    justify-content: center;
    transition-duration: 0.3s;
    border-radius: 0 0 0.7rem 0.7rem;
    color: ${({ theme }) => theme.dark.text};
    background: ${({ theme }) => theme.dark.black + "bb"};
  }
`;

export default PortfolioCard;

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

interface Props {
  link: string;
  label: string;
  img: string;
  name: string;
}

const PortfolioCard = ({ link, label, img, name }) => {
  return (
    <StyledPortfolioCard>
      <a href={link} target="_blank">
        <label>{label}</label>
        <Image src={img} width={580} height={400} alt="portfolio" />
        <p>
          <span>{name}</span>
        </p>
      </a>
    </StyledPortfolioCard>
  );
};

const StyledPortfolioCard = styled.li`
  margin: 0.5rem;
  width: fit-content;
  border-radius: 0.7rem;
  transition-duration: 0.5s;

  &:hover {
    box-shadow: 0 0 0.8rem ${({ theme }) => theme.dark.black};
  }

  img:hover ~ li {
    background: ${({ theme }) => theme.dark.black};
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

  p {
    margin: 0;
    z-index: 1;
    height: 3rem;
    display: flex;
    margin-top: -3rem;
    place-items: center;
    justify-content: center;
    border-radius: 0 0 0.7rem 0.7rem;
    color: ${({ theme }) => theme.dark.text};
    background: ${({ theme }) => theme.dark.black + "bb"};
  }
`;

export default PortfolioCard;
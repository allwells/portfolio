import Heading from "../components/Heading";
import Link from "next/link";
import PortfolioCard from "../components/PortfolioCard";
import React from "react";
import StyledPortfolio from "../../styles/portfolio.style";
import route from "../../pages/api/routes";

export default function PortfolioPage() {
  return (
    <StyledPortfolio>
      <Heading.Heading102 heading="Portfolio" />
      <Category />
      <PortfolioContents />
    </StyledPortfolio>
  );
}

const Category = () => {
  return (
    <ul className="category">
      <li>
        <Link href="#all" passHref>
          <a className="all">All</a>
        </Link>
      </li>
      <li>
        <Link href="#java" passHref>
          <a className="java">Java</a>
        </Link>
      </li>
      <li>
        <Link href="#python" passHref>
          <a className="python">Python</a>
        </Link>
      </li>
      <li>
        <Link href="#typescript" passHref>
          <a className="typescript">Typescript</a>
        </Link>
      </li>
      <li>
        <Link href="#javascript" passHref>
          <a className="javascript">Javascript</a>
        </Link>
      </li>
    </ul>
  );
};

const PortfolioContents = () => {
  return (
    <ul className="portfolioContents">
      {route.profile.map((port) => {
        return (
          <PortfolioCard
            link={port.link}
            label={port.label}
            img={port.img}
            name={port.name}
          />
        );
      })}
    </ul>
  );
};

import Heading from "../components/Heading";
import PortfolioCard from "../components/PortfolioCard";
import React from "react";
import StyledPortfolio from "../../styles/portfolio.style";
import route from "../../pages/api/routes";

export default function PortfolioPage() {
  const [project, setProject] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const itemName = [
    { name: "all" },
    { name: "java" },
    { name: "python" },
    { name: "typescript" },
    { name: "javascript" }
  ];

  React.useEffect(() => {
    return setProject(route.profile);
  }, []);

  const handleTabClick = (tabName: string) => {
    return setFilter(tabName);
  };

  return (
    <StyledPortfolio>
      <Heading.Heading102 heading="Portfolio" />
      <TabItems itemName={itemName} handleTabClick={handleTabClick} />
      <Projects filter={filter} project={project} />
    </StyledPortfolio>
  );
}

const TabItems = ({ itemName, handleTabClick }) => {
  return (
    <ul className="category">
      {itemName.map((item: any) => {
        return (
          <li key={item.name}>
            <button onClick={() => handleTabClick(item.name)}>
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const Projects = ({ filter, project }) => {
  if (filter === "" || filter === "all") {
    return (
      <div className="portCon">
        <ul className="portfolioContents">
          {project.map((data: any) => {
            return (
              <PortfolioCard
                key={data.id}
                link={data.link}
                label={data.label}
                img={data.img}
                name={data.name}
              />
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <div className="portCon">
      <ul className="portfolioContents">
        {project.map((data: any) => {
          if (data.label === filter) {
            return (
              <PortfolioCard
                key={data.id}
                link={data.link}
                label={data.label}
                img={data.img}
                name={data.name}
              />
            );
          }
        })}
      </ul>
    </div>
  );
};

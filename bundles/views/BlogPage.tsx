import Image from "next/image";
import React from "react";
import StyledBlog from "../../styles/blog.style";
import heading from "../components/Heading";

export default function BlogPage() {
  return (
    <StyledBlog>
      <heading.Heading102 heading="Blogs" />
      <div className="blogContents">
        <MainPanel />
        <SidePanel />
      </div>
    </StyledBlog>
  );
}

const SidePanel = () => {
  return (
    <div className="sidePanel">
      <div className="aboutMe sidePanelChild">
        <heading.Heading201 heading="About Me" />
        <Image src="/profile.jpg" width={100} height={200} alt="profile" />
        <p className="aboutText">
          My name is Allwell Onen. I am a passionate and dedicated Fullstack Web
          Developer. My stack is MERNstack.
        </p>
      </div>
      {/* <div className="popularPost sidePanelChild">
        <heading.Heading201 heading="Popular Post" />
        <div className="post">
          <p>Popular Post 1</p>
        </div>
        <div className="post">
          <p>Popular Post 2</p>
        </div>
        <div className="post">
          <p>Popular Post 3</p>
        </div>
      </div> */}
      <div className="follow sidePanelChild">
        <heading.Heading201 heading="Follow Me" />
        <p>
          Facebook:{" "}
          <a href="https://facebook.com/allwells.official" target="_blank">
            Allwell Onen
          </a>
        </p>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/allwells_official" target="_blank">
            @allwells_official
          </a>
        </p>
        <p>
          Twitter:{" "}
          <a href="https://twitter.com/allwell_festus" target="_blank">
            @allwell_festus
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/allwells" target="_blank">
            @allwells
          </a>
        </p>
        <p>
          Github:{" "}
          <a href="https://github.com/allwells" target="_blank">
            @allwells
          </a>
        </p>
      </div>
    </div>
  );
};

const MainPanel = () => {
  return <div className="mainPanel"></div>;
};

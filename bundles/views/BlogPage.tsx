import Image from "next/image";
import PreBlogPost from "../components/PreBlogPost";
import React from "react";
import StyledBlog from "../../styles/blog.style";
import heading from "../components/Heading";
import route from "../../pages/api/routes";

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
  const maxLikes = Math.max(...route.blogs.map((like) => like.likes));

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
      <div className="popularPost sidePanelChild">
        <heading.Heading201 heading="Popular Post" />
        <div className="post">
          {route.blogs.map((post) => {
            if (post.likes === maxLikes) {
              return (
                <>
                  <p className="popTitle">{post.title}</p>
                  {/* <p className="popDate">
                    Date posted: <i>{post.date}</i>
                  </p> */}
                </>
              );
            }
          })}
        </div>
      </div>
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
  return (
    <ul className="blogPostPanel">
      {route.blogs.map((blog) => {
        return (
          <PreBlogPost
            key={blog.id}
            title={blog.title}
            img={blog.img}
            description={blog.description}
            date={blog.date}
            showBlogPost={undefined}
          />
        );
      })}
    </ul>
  );
};

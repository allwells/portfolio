import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  img: string;
  description: string;
  date: string;
  showBlogPost: any;
}

const BlogPost: React.FC<Props> = ({
  title,
  img,
  description,
  date,
  showBlogPost,
}) => {
  return (
    <StyledPreBlogPost>
      <h2>{title}</h2>
      <Image src={img} width={500} height={400} alt="blog image" />
      <h4>{description}</h4>
      <div>
        <h5>
          <i>{date}</i>
        </h5>
        <button onClick={showBlogPost}>Read</button>
      </div>
    </StyledPreBlogPost>
  );
};

const StyledPreBlogPost = styled.div`
  display: flex;
  width: 17.5rem;
  margin: 0 0.8rem;
  height: fit-content;
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  flex-direction: column;
  transition-duration: 0.5s;
  background: ${({ theme }) => theme.dark.headingBg};
  border: 1px solid ${({ theme }) => theme.dark.tertiary};
  box-shadow: 0.2rem 0.2rem 0.4rem ${({ theme }) => theme.dark.black};

  h2,
  h4,
  h5,
  p {
    margin: 0;
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.dark.text};
  }

  h2 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-weight: 400;
    font-size: 0.8rem;
  }

  h5 {
    cursor: default;
    font-size: 0.7rem;
    color: ${({ theme }) => theme.dark.text2};
  }

  img {
    border-radius: 0.25rem;
  }

  p {
    line-height: 1.5;
    font-weight: 300;
    font-size: 0.85rem;
  }

  div {
    display: flex;
    margin-top: 1rem;
    justify-content: space-between;

    button {
      font-size: 0.9rem;
      height: fit-content;
      border-radius: 0.2rem;
      padding: 0.3rem 0.7rem;
      border: 2px solid transparent;
      color: ${({ theme }) => theme.dark.text};
      background: ${({ theme }) => theme.dark.primary.red};

      &:focus {
        border: 2px solid ${({ theme }) => theme.dark.black};
        box-shadow: 0 0 0.15rem ${({ theme }) => theme.dark.primary.red};
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    width: 100%;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    width: 100%;
  }
`;

export default BlogPost;

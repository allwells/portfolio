import React from "react";
import Image from "next/image";
import styled from "styled-components";

const StyledScrollTopBtn = styled.button`
  position: fixed;
  bottom: 20px;
  height: 40px;
  width: 40px;
  right: 1rem;
  align-items: center;
  background: ${({ theme }) => theme.lightTheme.black80};
  justify-content: center;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;
  border: none;
  border-radius: 100%;
  background: gray;
  outline: none;
  &:hover {
    opacity: 1;
  }
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const ScrollTopBtn = () => {
  const [showScroll, setShowScroll] = React.useState<boolean>(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTop = () => {
    scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledScrollTopBtn
      onClick={scrollTop}
      style={{ height: 40, display: showScroll ? "flex" : "none" }}
    >
      <Image src="/up-arrow.svg" alt="arrow" width="20" height="20" />
    </StyledScrollTopBtn>
  );
};

export default ScrollTopBtn;

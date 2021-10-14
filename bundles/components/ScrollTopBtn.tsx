import Image from "next/image";
import React from "react";
import styled from "styled-components";

export default function ScrollTopBtn() {
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
}

const StyledScrollTopBtn = styled.button`
  width: 45px;
  bottom: 20px;
  height: 45px;
  opacity: 0.5;
  border: none;
  right: 0.7rem;
  outline: none;
  z-index: 1000;
  position: fixed;
  cursor: pointer;
  align-items: center;
  border-radius: 0.5rem;
  animation: fadeIn 0.3s;
  justify-content: center;
  transition: opacity 0.4s;
  background: ${({ theme }) => theme.dark.secondary};
  border: 1px solid ${({ theme }) => theme.dark.black};

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

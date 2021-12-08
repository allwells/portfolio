import Navbar from "../components/Navbar";
import ScrollTopBtn from "../components/ScrollTopBtn";
import styled from "styled-components";

interface Props {
  home: any;
  about: any;
  service: any;
  portfolio: any;
  blog: any;
  contact: any;
}

const SceneLayout: React.FC<Props> = ({
  children,
  home,
  about,
  service,
  portfolio,
  blog,
  contact,
}) => {
  return (
    <StyledSceneLayout>
      <Navbar
        home={home}
        about={about}
        service={service}
        portfolio={portfolio}
        blog={blog}
        contact={contact}
      />
      <div>{children}</div>
      <ScrollTopBtn />
    </StyledSceneLayout>
  );
};

const StyledSceneLayout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 2.5rem 2.5rem 0 0;
  background-color: ${({ theme }) => theme.dark.secondary};
  border-top: 1px solid ${({ theme }) => theme.dark.text2};
  border-left: 1px solid ${({ theme }) => theme.dark.text2};
  border-right: 1px solid ${({ theme }) => theme.dark.text2};

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    border-radius: 1.5rem 1.5rem 0 0;
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    border-radius: 0;
  }
`;

export default SceneLayout;

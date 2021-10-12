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
  box-shadow: 0 0 0.8rem ${({ theme }) => theme.dark.black};
`;

export default SceneLayout;

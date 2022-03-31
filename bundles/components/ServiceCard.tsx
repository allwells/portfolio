import styled from "styled-components";

interface ServiceCardProps {
  serviceImg: string;
  serviceName: string;
  serviceDescription: string;
}

const ServiceCard = ({
  serviceImg,
  serviceName,
  serviceDescription,
}: ServiceCardProps) => {
  return (
    <StyledServiceCard>
      <div>
        <img src={serviceImg} alt="" />
      </div>
      <div className="head">
        <h3>{serviceName}</h3>
      </div>

      <div className="description">
        <span>{serviceDescription}</span>
      </div>
    </StyledServiceCard>
  );
};

const StyledServiceCard = styled.li`
  width: 20rem;
  padding: 2rem;
  display: flex;
  margin: 0.9rem;
  min-height: 20rem;
  place-items: center;
  border-radius: 0.5rem;
  flex-direction: column;
  background: ${({ theme }) => theme.dark.headingBg};
  border: 1px solid ${({ theme }) => theme.dark.text3};
  box-shadow: 0.3rem 0.3rem 0.6rem ${({ theme }) => theme.dark.black};

  div {
    display: flex;
    justify-content: center;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-top: 2rem;
    text-align: center;
    letter-spacing: 0.07rem;
    color: ${({ theme }) => theme.dark.text};
  }

  span {
    display: flex;
    line-height: 1.5;
    font-size: 0.85rem;
    text-align: center;
    letter-spacing: 0.07rem;
    color: ${({ theme }) => theme.dark.text};
  }
`;

export default ServiceCard;

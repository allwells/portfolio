import Image from "next/image";
import React from "react";
import styled from "styled-components";

interface Props {
  name: string;
  organization: string;
  organizationUrl: string;
  issued: string;
  expiry: string;
  id: string;
  url: string;
  img: string;
}

const CertificateCard: React.FC<Props> = ({
  name,
  organization,
  organizationUrl,
  issued,
  expiry,
  id,
  url,
  img,
}) => {
  return (
    <StyledCertificateCard>
      <div className="companyImage">
        <Image src={img} width={130} height={151} alt="certificate" />
      </div>
      <div className="certDetail">
        <h3 className="name">{name}</h3>
        <a href={organizationUrl} target="_blank">
          {organization}
        </a>
        <div className="dates">
          <span className="issued">{issued}</span>
          <span className="seperator">•</span>
          <span className="expiry">{expiry}</span>
        </div>
        <span className="id">
          Credential ID <span>{id}</span>
        </span>
        <a className="see" href={url} target="_blank">
          See credential
        </a>
      </div>
    </StyledCertificateCard>
  );
};

const StyledCertificateCard = styled.div`
  width: 48%;
  display: flex;
  height: fit-content;
  margin-bottom: 1rem;
  border-radius: 0.67rem;
  transition-duration: 0.5s;
  background: ${({ theme }) => theme.dark.secondary};
  border: 2px solid ${({ theme }) => theme.dark.tertiary};

  &:hover {
    box-shadow: 0 0.3rem 0.4rem ${({ theme }) => theme.dark.black};
  }

  .companyImage {
    width: auto;
    height: 100%;
    padding: 0.5rem 2rem;
    border-radius: 0.5rem 0 0 0.5rem;
    background: ${({ theme }) => theme.dark.tertiary};
  }

  .certDetail {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 1.4rem 0 0 1.5rem;

    h3 {
      margin: 0;
      cursor: default;
      font-weight: 700;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
      letter-spacing: 0.05rem;
      color: ${({ theme }) => theme.dark.text};
    }

    a {
      font-weight: 600;
      margin: 0.1rem 0;
      font-size: 0.9rem;
      width: fit-content;
      letter-spacing: 0.05rem;
      text-decoration: underline;
      color: ${({ theme }) => theme.dark.text};
    }

    .id {
      cursor: default;
      font-weight: 350;
      font-size: 0.9rem;
      letter-spacing: 0.03rem;
      color: ${({ theme }) => theme.dark.text3};

      span {
        text-transform: uppercase;
        color: ${({ theme }) => theme.dark.text3};
      }
    }

    .dates {
      display: flex;
      cursor: default;
      place-items: center;
      justify-content: flex-start;

      .issued,
      .seperator,
      .expiry {
        font-weight: 300;
        font-size: 0.9rem;
        margin: 0.15rem 0;
        margin-right: 0.3rem;
        letter-spacing: 0.05rem;
        color: ${({ theme }) => theme.dark.text};
      }

      .seperator {
        font-size: 0.6rem;
      }
    }
  }
`;

export default CertificateCard;

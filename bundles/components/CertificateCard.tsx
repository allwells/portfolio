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
  label: string;
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
  label,
}) => {
  return (
    <StyledCertificateCard>
      <div className="companyImage">
        <Image src={img} width={130} height={151} alt="certificate" />
      </div>
      <div className="certDetail">
        <div className="nameLabel">
          <h3 className="name">{name}</h3> <span>{label}</span>
        </div>
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
  width: auto;
  display: flex;
  height: fit-content;
  border-radius: 0.67rem;
  transition-duration: 0.5s;
  background: ${({ theme }) => theme.dark.secondary};
  border: 2px solid ${({ theme }) => theme.dark.tertiary};

  &:hover {
    box-shadow: 0 0.3rem 0.4rem ${({ theme }) => theme.dark.black};
  }

  .nameLabel {
    width: 100%;
    display: flex;
    place-items: center;
    justify-content: space-between;

    span {
      font-weight: 600;
      font-size: 0.9rem;
      border-radius: 0.3rem;
      padding: 0.15rem 0.4rem;
      color: ${({ theme }) => theme.dark.text};
      background: ${({ theme }) => theme.dark.primary.red};
    }
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
    padding: 1.4rem 1.5rem 0 1.5rem;

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

  @media only screen and (max-width: ${({ theme }) => theme.screen.tab}) {
    width: 100%;

    .companyImage {
      width: 30%;
      display: flex;
      justify-content: center;
    }

    .certDetail {
      width: 70%;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.screen.mobile}) {
    width: 100%;
    flex-direction: column;

    .companyImage {
      width: 100%;
      display: flex;
      height: 10rem;
      place-items: center;
      justify-content: center;
      border-radius: 0.5rem 0.5rem 0 0;
    }

    .certDetail {
      width: 100%;
      padding: 1rem;

      .id,
      .see {
        font-size: 0.8rem;
      }

      .dates {
        width: 100%;

        .issued,
        .expiry {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export default CertificateCard;

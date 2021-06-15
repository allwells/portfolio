import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";

interface Props {}

const certWidth = 290;
const certHeight = 200;

const StyledCertificatePage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: fit-content;

  h1 {
    color: ${({ theme }) => theme.lightTheme.text};
    font-size: 32px;
    margin-top: 4em;
    text-align: center;
  }

  .certLayout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    width: fit-content;
    height: fit-content;
    margin-bottom: 3em;

    .certCardHolder {
      display: flex;
      justify-content: space-around;
      // border: 1px solid ${({ theme }) => theme.lightTheme.border02};
      // border-radius: 3px;
      align-self: center;
      width: fit-content;
      height: fit-content;
      margin: 2em 0;

      img {
        border-radius: 5px 5px 0 0;
      }

      .certCard {
        margin: 0 2em;
        border-radius: 0 0 5px 5px;
        background-color: ${({ theme }) => theme.lightTheme.border01 + "77"};
        padding-bottom: 2em;

        p,
        h2,
        a {
          color: ${({ theme }) => theme.lightTheme.text};
        }

        h2 {
          font-size: 16px;
          font-weight: 500;
        }

        p {
          font-size: 12px;
          font-weight: 300;
        }

        .certInfo {
          padding: 0 1em;

          a {
            text-decoration: underline;
            &:hover {
              text-decoration: none;
            }
          }
        }
      }
    }
  }
`;

const CertificatePage: React.FC<Props> = () => {
  return (
    <StyledCertificatePage>
      <Head>
        <title>Allwell Onen • Certification</title>
      </Head>
      <h1>Certifications</h1>
      <div className="certLayout">
        <div className="certCardHolder">
          <div className="certCard">
            <Image
              src="/certs/cert01.png"
              width={certWidth}
              height={certHeight}
            />
            <div className="certInfo">
              <h2>SQL (BASIC)</h2>
              <p>
                Organization: <a href="https://hackerrank.com">HackerRank</a>
              </p>
              <p>Date Issued: 17/04/2021</p>
              <p>Certificate: E23ED2BE003A</p>
              <a href="#cert">View certification</a>
            </div>
          </div>
          <div className="certCard">
            <Image
              src="/certs/cert02.jpg"
              width={certWidth}
              height={certHeight}
            />
            <div className="certInfo">
              <h2>Software Application Development</h2>
              <p>
                Organization:{" "}
                <a href="https://loctech.com">LocTech Training Institute</a>
              </p>
              <p>Date Issued: 27/09/2019</p>
              <p>Certificate: RC 1450707</p>
              <a href="#cert">View certification</a>
            </div>
          </div>
          <div className="certCard">
            <Image
              src="/certs/cert03.png"
              width={certWidth}
              height={certHeight}
            />
            <div className="certInfo">
              <h2>Java Programming</h2>
              <p>
                Organization: <a href="https://sololearn.com">SoloLearn</a>
              </p>
              <p>Date Issued: 08/10/2020</p>
              <p>Certificate: 19951669-1068</p>
              <a href="#cert">View certification</a>
            </div>
          </div>
        </div>
        <div className="certCardHolder">
          <div className="certCard">
            <Image
              src="/certs/cert04.png"
              width={certWidth}
              height={certHeight}
            />
            <div className="certInfo">
              <h2>SQL</h2>
              <p>
                Organization: <a href="https://sololearn.com">SoloLearn</a>
              </p>
              <p>Date Issued: 23/11/2020</p>
              <p>Certificate: 19951669-1060</p>
              <a href="#cert">View certification</a>
            </div>
          </div>
        </div>
      </div>
    </StyledCertificatePage>
  );
};

export default CertificatePage;

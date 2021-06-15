import React from "react";
import Head from "next/head";
import styled from "styled-components";

interface Props {}

const StyledProjectPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-bewteen;
  height: fit-content;

  h1 {
    color: ${({ theme }) => theme.lightTheme.text};
    font-size: 32px;
    margin-top: 4em;
    text-align: center;
  }

  .worksLayout {
    display: flex;
    flex-direction: column;
    justify-content: left;
    // border: 1px solid ${({ theme }) => theme.lightTheme.border02};
    // border-radius: 5px;
    width: fit-content;
    align-self: center;
    margin-top: 3em;
    margin-bottom: 6em;

    .works {
      display: flex;
      justify-content: center;
      margin: 0.5em 0;

      .workLink {
        display: flex;
        flex-direction: column;
        justify-content: left;
        border: 1px solid ${({ theme }) => theme.lightTheme.border01};
        border-radius: 5px;
        margin: 1em 1.5em;
        padding: 0.5em 1.2em;
        width: 460px;
        transition-duration: 0.4s;

        &:hover {
          border: 1px solid ${({ theme }) => theme.lightTheme.border02};
          background-color: ${({ theme }) => theme.lightTheme.textField};
        }

        .description {
          font-size: 13px;
          font-weight: 200;
        }

        a,
        p {
          color: ${({ theme }) => theme.lightTheme.blacksmoke};
        }

        a {
          text-decoration: none;
          font-size: 18px;
          font-weight: 600;
          margin-top: 0.5em;

          &:hover {
            text-decoration: underline;
            color: ${({ theme }) => theme.lightTheme.text};
          }
        }

        .tech {
          display: flex;
          justify-content: left;
          place-items: center;

          p {
            font-size: 12px;
            font-weight: 400;
            color: ${({ theme }) => theme.lightTheme.text};
          }

          .java {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.java};
          }

          .javascript {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.javascript};
          }

          .typescript {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.typescript};
          }

          .python {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.python};
          }

          .php {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.php};
          }

          .shell {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.shell};
          }

          .r {
            background-color: ${({ theme }) =>
              theme.lightTheme.programmingLanguage.r};
          }

          .proLang {
            height: 12px;
            width: 12px;
            border-radius: 50%;
            margin-right: 0.3em;
          }
        }
      }
    }
  }
`;

const ProjectPage: React.FC<Props> = () => {
  return (
    <StyledProjectPage>
      <Head>
        <title>Allwell Onen • Projects</title>
      </Head>
      <h1>Projects</h1>
      <div className="worksLayout">
        <div className="works">
          <div className="workLink">
            <a href="https://github.com/allwells/hospital_management_system/">
              Hospital Management System
            </a>
            <p className="description">
              Hospital Management System for small scale hospitals.
            </p>
            <div className="tech">
              <div className="proLang java"></div> <p>Java</p>
            </div>
          </div>
          <div className="workLink">
            <a href="https://github.com/allwells/gothon_from_space_parcel">
              Gothon From Plant Parcel
            </a>
            <p className="description">Python Text Game</p>
            <div className="tech">
              <div className="proLang python"></div> <p>Python</p>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="workLink">
            <a href="https://github.com/allwells/cybermentor">Cybermentor</a>
            <p className="description">
              Network Penetration Testing (Beginners)
            </p>
            <div className="tech">
              <div className="proLang shell"></div> <p>Shell</p>
            </div>
          </div>
          <div className="workLink">
            <a href="https://github.com/allwells/dvc">DVC</a>
            <p className="description">
              Student Evaluation of Lecturers for 1st Semester 2020/2021 -
              Anchor University
            </p>
            <div className="tech">
              <div className="proLang r"></div> <p>R</p>
            </div>
          </div>
        </div>
        <div className="works">
          <div className="workLink">
            <a href="https://github.com/allwells/drug-tracer">Drug Tracer</a>
            <p className="description">
              Tracking the distribution of drugs (legal drugs).
            </p>
            <div className="tech">
              <div className="proLang php"></div> <p>PHP</p>
            </div>
          </div>
          <div className="workLink">
            <a href="https://github.com/allwells/todolist">Todo List</a>
            <p className="description">Todo List Web Application</p>
            <div className="tech">
              <div className="proLang javascript"></div> <p>JavaScript</p>
            </div>
          </div>
        </div>
      </div>
    </StyledProjectPage>
  );
};

export default ProjectPage;

import * as resource from "./api/resources";

import {
  DetailsCardProps,
  DutiesProps,
  EmploymentDutiesProps,
  ResumeBadgeProps,
  ResumeHeadingProps,
  SectionWrapperProps,
} from "../utils/props";

import CertificateCard from "../components/CertificateCard";
import Layout from "../components/Layout";
import React from "react";

export default function About() {
  const [educationDetails, setEducationDetails] = React.useState<any>([]);
  const [skillSet, setSkillSet] = React.useState<any>([]);
  const [hobbieSet, setHobbieSet] = React.useState<any>([]);
  const [certificates, setCertificates] = React.useState<any>([]);
  const [isProfileActivated, setProfileActivated] =
    React.useState<boolean>(false);
  const [isEduActivated, setEduActivated] = React.useState<boolean>(false);
  const [isEmploymentActivated, setEmploymentActivated] =
    React.useState<boolean>(false);
  const [isCertActivated, setCertActivated] = React.useState<boolean>(false);
  const [isSkillActivated, setSkillActivated] = React.useState<boolean>(false);
  const [isHobbiesActivated, setHobbiesActivated] =
    React.useState<boolean>(false);
  const [isRefActivated, setRefActivated] = React.useState<boolean>(false);

  React.useEffect(() => {
    setCertificates(resource.certificates.reverse());
    setEducationDetails(resource.educations.reverse());
    setSkillSet(resource.skills);
    setHobbieSet(resource.hobbies);
  }, []);

  const activateProfile = () => {
    setProfileActivated(true);
  };
  const deactivateProfile = () => {
    setProfileActivated(false);
  };

  const activateEdu = () => {
    setEduActivated(true);
  };
  const deactivateEdu = () => {
    setEduActivated(false);
  };

  const activateEmployment = () => {
    setEmploymentActivated(true);
  };
  const deactivateEmployment = () => {
    setEmploymentActivated(false);
  };

  const activateCert = () => {
    setCertActivated(true);
  };
  const deactivateCert = () => {
    setCertActivated(false);
  };

  const activateSkill = () => {
    setSkillActivated(true);
  };
  const deactivateSkill = () => {
    setSkillActivated(false);
  };

  const activateHobbies = () => {
    setHobbiesActivated(true);
  };
  const deactivateHobbies = () => {
    setHobbiesActivated(false);
  };

  const activateRef = () => {
    setRefActivated(true);
  };
  const deactivateRef = () => {
    setRefActivated(false);
  };

  return (
    <Layout title={"About"} about={"active"}>
      <div className="w-full px-2 pt-20 pb-12 sm:px-8 dark:text-neutral-200">
        {/* Page heading */}
        <h1 className="mb-4 text-base font-extrabold cursor-default md:text-xl dark:text-lime-500">
          <span className="dark:text-blue-600">$</span> about{" "}
          <span className="text-md dark:text-red-500">
            allwell{" "}
            <span className="font-normal dark:text-emerald-500">--onen</span>
          </span>
          <span className="text-white animate-ping">_</span>
        </h1>

        {/* page body */}
        <div className="w-full md:px-6">
          {/* PROFILE */}
          <SectionWrapper
            onMouseEnter={activateProfile}
            onMouseLeave={deactivateProfile}
          >
            {/* resume - profile heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isProfileActivated}
                section={"profile"}
              />

              <span className="-mt-4 text-base">👤</span>
            </div>

            {/* resume - profile body */}
            <div className="w-full px-4 sm:px-5">
              <p
                style={{
                  hyphens: "auto",
                  WebkitHyphens: "auto",
                  MozHyphens: "auto",
                  msHyphens: "auto",
                }}
                className="text-xs leading-6 text-left cursor-default dark:text-neutral-200"
              >
                A dedicated Frontend Developer from 🇳🇬Nigeria🇳🇬 with at least 3
                years of experience with frontend technologies, including HTML,
                CSS, React, Next.js, Tailwindcss, APIs and more. Possesses
                exceptional problem-solving skills and a self-motivated,
                dependable nature and can effectively self-manage during
                independent projects and collaborate as part of a productive
                team. A goal-driven individual that focuses on helping companies
                achieve short- and long-term goals, client satisfaction, and
                event success.
                {/* A self-taught Software Developer from 🇳🇬Nigeria🇳🇬 with at least
                2 years of experience with software technologies which includes
                Java, React, Node, MySQL, etc. Possesses exceptional
                problem-solving skills and a self-motivated, dependable nature
                and able to effectively self-manage during independent projects,
                as well as collaborate as part of a productive team. A
                goal-driven individual that focuses on helping companies achieve
                short- and long-term goals as well as client satisfaction. */}
              </p>
            </div>
          </SectionWrapper>

          {/* EDUCATION */}
          <SectionWrapper
            onMouseEnter={activateEdu}
            onMouseLeave={deactivateEdu}
          >
            {/* resume - education heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isEduActivated}
                section={"education"}
              />

              <span className="-mt-4 text-base">📚</span>
            </div>

            {/* resume - education body */}
            <div className="pb-6">
              {educationDetails.map((education: any) => {
                return <DetailsCard key={education.id} {...education} />;
              })}
            </div>
          </SectionWrapper>

          {/* EMPLOYMENT */}
          <SectionWrapper
            onMouseEnter={activateEmployment}
            onMouseLeave={deactivateEmployment}
          >
            {/* resume - employment heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isEmploymentActivated}
                section={"employment"}
              />

              <span className="-mt-4 text-base">👨🏾‍💻</span>
            </div>

            {/* resume - employment body */}
            <div className="pb-6">
              <EmploymentDuties
                start={"Apr 2022"}
                location={"Port Harcourt, Rivers, Nigeria"}
                organization={"Mesh Advertising & Design Studios"}
                role={"Web Developer"}
              >
                <DutiesList
                  duty={"Worked to remain punctual, reliable, and flexible."}
                />
                <DutiesList
                  duty={
                    "Remained positive and hopeful even in stressful situations."
                  }
                />
                <DutiesList
                  duty={
                    "Contributed to the UI design process of the company's software."
                  }
                />
                <DutiesList
                  duty={
                    "Collaborated with the Lead Developer to build to come up with logics for the company's software and also build the software."
                  }
                />
                <DutiesList
                  duty={
                    "Brought forth the ability to work well independently and also with others."
                  }
                />
              </EmploymentDuties>
            </div>
          </SectionWrapper>

          {/* CERTIFICATES */}
          <SectionWrapper
            onMouseEnter={activateCert}
            onMouseLeave={deactivateCert}
          >
            {/* resume - certificate heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isCertActivated}
                section={"certificates"}
              />

              <span className="-mt-4 text-base">🧾</span>
            </div>

            {/* resume - certificate body */}
            <div className="grid grid-cols-1 gap-5 mb-6 sm:grid-cols-2 sm:px-5">
              {certificates.map((certificate: any) => {
                return (
                  <CertificateCard key={certificate.id} {...certificate} />
                );
              })}
            </div>
          </SectionWrapper>

          {/* SKILLS */}
          <SectionWrapper
            onMouseEnter={activateSkill}
            onMouseLeave={deactivateSkill}
          >
            {/* resume - skills heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isSkillActivated}
                section={"skills"}
              />

              <span className="-mt-4 text-base">🛠</span>
            </div>

            {/* resume - skills body */}
            <div className="flex flex-wrap items-center justify-start px-3 mb-5 sm:px-5">
              {skillSet.map((skill: any) => {
                return <Badge key={skill.id} {...skill} />;
              })}
            </div>
          </SectionWrapper>

          {/* HOBBIES */}
          <SectionWrapper
            onMouseEnter={activateHobbies}
            onMouseLeave={deactivateHobbies}
          >
            {/* resume - hobbies heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isHobbiesActivated}
                section={"hobbies"}
              />

              <span className="-mt-4 text-base">😊</span>
            </div>

            {/* resume - hobbies body */}
            <div className="flex flex-wrap items-center justify-start px-4 mb-5 sm:px-5">
              {hobbieSet.map((hobby: any) => {
                return <Badge key={hobby.id} {...hobby} />;
              })}
            </div>
          </SectionWrapper>

          {/* REFERENCES */}
          <SectionWrapper
            onMouseEnter={activateRef}
            onMouseLeave={deactivateRef}
          >
            {/* resume - references heading */}
            <div className="flex items-center justify-between w-full">
              <ResumeHeading
                activateCursor={isRefActivated}
                section={"references"}
              />

              <span className="-mt-4 text-base">⛓</span>
            </div>

            {/* resume - references body */}
            <div className="flex flex-wrap items-center justify-start px-4 mb-5 sm:px-5">
              <span className="text-xs dark:text-neutral-300">
                References available upon request
              </span>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </Layout>
  );
}

// EXTRA COMPONENTS
function SectionWrapper({
  children,
  onMouseEnter,
  onMouseLeave,
}: SectionWrapperProps) {
  return (
    <div
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
      className="p-2 mt-6 border border-neutral-700 bg-neutral-800/70"
    >
      {children}
    </div>
  );
}

function Badge({ value, theme }: ResumeBadgeProps) {
  return (
    <span className={`${theme} font-extrabold lowercase cursor-default mr-2`}>
      [<span className="text-xs font-light">{value}</span>]
    </span>
  );
}

function ResumeHeading({ section, activateCursor }: ResumeHeadingProps) {
  return (
    <h2
      id={section}
      className="mb-3 text-xs font-light cursor-default md:text-sm dark:text-sky-500"
    >
      <span className="dark:text-red-500">&gt;</span> resume{" "}
      <span className="dark:text-emerald-400">--{section}</span>
      <span
        className={`font-semibold ${activateCursor ? "animate-ping" : null}`}
      >
        _
      </span>
    </h2>
  );
}

function DetailsCard({
  start,
  end = "Present",
  location,
  role,
  organization,
}: DetailsCardProps) {
  return (
    <div className="flex flex-col-reverse justify-start w-full px-4 cursor-default sm:px-5 sm:gap-5 sm:flex-row">
      {/* period and location */}
      <div className="flex flex-col justify-start md:w-1/3 sm:w-3/5">
        <span className="text-xs font-light dark:text-neutral-200">
          {start} - {end}
        </span>
        <span className="text-xs font-light dark:text-neutral-400">
          {location}
        </span>
      </div>

      {/* organization and role */}
      <div className="flex flex-col justify-start mb-1 sm:mb-0 sm:w-3/5">
        <span className="text-sm font-bold sm:text-base dark:text-neutral-200">
          {organization}
        </span>
        <span className="text-xs font-light dark:text-neutral-400">{role}</span>
      </div>
    </div>
  );
}

function DutiesList({ duty }: DutiesProps) {
  return <li className="text-xs leading-7">{duty}</li>;
}

function EmploymentDuties({
  start,
  end = "Present",
  location,
  organization,
  role,
  children,
}: EmploymentDutiesProps) {
  return (
    <>
      <DetailsCard
        start={start}
        end={end}
        location={location}
        organization={organization}
        role={role}
      />
      <div className="flex flex-col-reverse justify-start w-full px-5 mt-1 cursor-default sm:gap-5 sm:flex-row">
        <div className="md:w-1/3 sm:w-3/5"></div>
        <ul className="pl-4 text-xs list-disc sm:w-3/5">{children}</ul>
      </div>
    </>
  );
}

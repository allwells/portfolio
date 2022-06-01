import * as resource from "./api/resources";

import {
  DetailsCardProps,
  DutiesProps,
  EmploymentDutiesProps,
  ResumeBadgeProps,
  ResumeHeadingProps,
  SectionWrapperProps,
} from "../utils/props";

import Layout from "../components/Layout";
import React from "react";

export default function About() {
  const [educationDetails, setEducationDetails] = React.useState<any>([]);
  const [skillSet, setSkillSet] = React.useState<any>([]);
  const [hobbieSet, setHobbieSet] = React.useState<any>([]);

  React.useEffect(() => {
    setEducationDetails(resource.educations.reverse());
    setSkillSet(resource.skills);
    setHobbieSet(resource.hobbies);
  }, []);

  return (
    <Layout
      title={"About"}
      home={undefined}
      about={"active"}
      works={undefined}
      contact={undefined}
    >
      <div className="px-5 pt-20 pb-12 sm:px-12 sm:pt-28 dark:text-neutral-200">
        {/* Page heading */}
        <h1 className="mb-4 text-lg font-extrabold cursor-default md:text-2xl dark:text-neutral-300">
          <span className="dark:text-blue-600">$</span> about{" "}
          <span className="text-md dark:text-rose-500">
            allwell{" "}
            <span className="font-normal dark:text-purple-500">--onen</span>
          </span>
          <span className="animate-ping">_</span>
        </h1>

        {/* page body */}
        <div className="w-full px-0 mt-4 sm:px-8">
          {/* PROFILE */}
          <SectionWrapper>
            {/* resume - profile heading */}
            <ResumeHeading section={"profile"} />

            {/* resume - profile body */}
            <div className="w-full px-6">
              <p
                style={{
                  hyphens: "auto",
                  WebkitHyphens: "auto",
                  MozHyphens: "auto",
                  msHyphens: "auto",
                }}
                className="text-sm leading-8 text-left cursor-default dark:text-neutral-400 sm:text-md"
              >
                Dedicated Fullstack Web Developer with at least 2 years of
                experience with frontend technologies:{" "}
                <strong className="dark:text-neutral-50">React</strong>,{" "}
                <strong className="dark:text-neutral-50">HTML</strong>,{" "}
                <strong className="dark:text-neutral-50">CSS</strong>,{" "}
                <strong className="dark:text-neutral-50">JavaScript</strong>,
                etc, and 1+ years of experience with backend technologies:{" "}
                <strong className="dark:text-neutral-50">Node.js</strong>,{" "}
                <strong className="dark:text-neutral-50">Express</strong>,
                <strong className="dark:text-neutral-50">MongoDB</strong>,{" "}
                <strong className="dark:text-neutral-50">MySQL</strong>,{" "}
                <strong className="dark:text-neutral-50">Laravel</strong>.
                Possesses problem-solving skills and a self-motivated,
                dependable nature and able to effectively self-manage during
                independent projects, as well as collaborate as part of a
                productive team. Focused on helping the company achieve short-
                and long-term goals as well as client satisfaction and event
                success.
              </p>
            </div>
          </SectionWrapper>

          {/* EDUCATION */}
          <SectionWrapper>
            {/* resume - education heading */}
            <ResumeHeading section={"education"} />

            {/* resume - education body */}
            <div className="pb-6">
              {educationDetails.map((education: any) => {
                return <DetailsCard key={education.id} {...education} />;
              })}
            </div>
          </SectionWrapper>

          {/* EMPLOYMENT */}
          <SectionWrapper>
            {/* resume - employment heading */}
            <ResumeHeading section={"employment"} />

            {/* resume - employment body */}
            <div className="pb-6">
              <EmploymentDuties
                start={"Apr 2022"}
                location={"Port Harcourt, Nigeria"}
                organization={"Mesh Advertising & Design Studios"}
                role={"Web Developer Intern"}
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
                  duty={"Brought forth a passion for the industry."}
                />
                <DutiesList
                  duty={
                    "Brought forth the ability to work well independently and also with others."
                  }
                />
              </EmploymentDuties>
            </div>
          </SectionWrapper>

          {/* SKILLS */}
          <SectionWrapper>
            {/* resume - skills heading */}
            <ResumeHeading section={"skills"} />

            {/* resume - skills body */}
            <div className="flex flex-wrap items-center justify-start px-4 mb-5 sm:px-5">
              {skillSet.map((skill: any) => {
                return <Badge key={skill.id} {...skill} />;
              })}
            </div>
          </SectionWrapper>

          {/* HOBBIES */}
          <SectionWrapper>
            {/* resume - hobbies heading */}
            <ResumeHeading section={"hobbies"} />

            {/* resume - hobbies body */}
            <div className="flex flex-wrap items-center justify-start px-4 mb-5 sm:px-5">
              {hobbieSet.map((hobby: any) => {
                return <Badge key={hobby.id} {...hobby} />;
              })}
            </div>
          </SectionWrapper>

          {/* REFERENCES */}
          <SectionWrapper>
            {/* resume - references heading */}
            <ResumeHeading section={"references"} />

            {/* resume - references body */}
            <div className="flex flex-wrap items-center justify-start px-4 mb-5 sm:px-5">
              <span className="text-sm dark:text-neutral-300">
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
function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="p-2 mt-6 transition duration-500 border border-neutral-700 bg-neutral-800/70 lg:opacity-40 lg:hover:opacity-100">
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

function ResumeHeading({ section }: ResumeHeadingProps) {
  return (
    <h2
      id={section}
      className="mb-3 text-sm font-light cursor-default md:text-lg dark:text-neutral-500"
    >
      <span className="dark:text-blue-500">&gt;</span> resume{" "}
      <span className="dark:text-purple-400">--{section}</span>
      <span className="font-semibold animate-ping">_</span>
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
    <div className="flex flex-col-reverse justify-start w-full px-6 mt-6 cursor-default sm:gap-5 sm:flex-row">
      {/* period and location */}
      <div className="flex flex-col justify-start md:w-1/3 sm:w-3/5">
        <span className="text-sm font-light dark:text-neutral-200">
          {start} - {end}
        </span>
        <span className="text-xs font-light sm:text-sm dark:text-neutral-400">
          {location}
        </span>
      </div>

      {/* organization and role */}
      <div className="flex flex-col justify-start mb-1 sm:mb-0 sm:w-3/5">
        <span className="font-bold text-md sm:text-lg dark:text-neutral-200">
          {organization}
        </span>
        <span className="text-xs font-light sm:text-sm dark:text-neutral-400">
          {role}
        </span>
      </div>
    </div>
  );
}

function DutiesList({ duty }: DutiesProps) {
  return <li className="leading-7">{duty}</li>;
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
      <div className="flex flex-col-reverse justify-start w-full px-6 mt-1 cursor-default sm:gap-5 sm:flex-row">
        <div className="md:w-1/3 sm:w-3/5"></div>
        <ul className="pl-4 text-xs list-disc sm:w-3/5 sm:text-sm">
          {children}
        </ul>
      </div>
    </>
  );
}

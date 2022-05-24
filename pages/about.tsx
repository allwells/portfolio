import {
  Badge,
  DetailsCard,
  DutiesList,
  EmploymentDuties,
  ResumeHeading,
  SectionWrapper,
} from "../utils/components";
import { educations, hobbies, skills } from "./resources/resources";

import Layout from "../components/Layout";
import React from "react";

export default function About() {
  const [educationDetails, setEducationDetails] = React.useState<any>([]);
  const [skillSet, setSkillSet] = React.useState<any>([]);
  const [hobbieSet, setHobbieSet] = React.useState<any>([]);

  React.useEffect(() => {
    setEducationDetails(educations.reverse());
    setSkillSet(skills);
    setHobbieSet(hobbies);
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
              <p className="leading-8 text-justify break-words dark:text-neutral-400 cursor-default">
                Dedicated Fullstack Web Developer with over 1+ years experience
                in frontend technologies:{" "}
                <strong className="dark:text-neutral-50">React</strong>,{" "}
                <strong className="dark:text-neutral-50">HTML</strong>,{" "}
                <strong className="dark:text-neutral-50">CSS</strong>,{" "}
                <strong className="dark:text-neutral-50">JavaScript</strong>,
                etc, and 7+ months experience in backend technologies:{" "}
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
            <div className="mb-5 px-4 sm:px-5 flex justify-start items-center flex-wrap">
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
            <div className="mb-5 px-4 sm:px-5 flex justify-start items-center flex-wrap">
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
            <div className="mb-5 px-4 sm:px-5 flex justify-start items-center flex-wrap">
              <span className="dark:text-neutral-300 text-sm">
                References available upon request
              </span>
            </div>
          </SectionWrapper>
        </div>
      </div>
    </Layout>
  );
}

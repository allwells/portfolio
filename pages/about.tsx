import Layout from "../components/Layout";

interface ResumeHeadingProps {
  section: string;
}

interface DetailsCardProps {
  start: string;
  end?: string;
  location: string;
  role: string;
  organization: string;
}

interface DutiesProps {
  duty: string;
}

interface EmploymentDutiesProps {
  start: string;
  end?: string;
  location: string;
  role: string;
  organization: string;
  children: React.ReactNode;
}

export default function About() {
  return (
    <Layout
      title={"About"}
      home={undefined}
      works={undefined}
      about={"active"}
      contact={undefined}
    >
      <div className="px-5 pt-20 pb-6 sm:px-12 sm:pt-28 dark:text-neutral-200">
        {/* Page heading */}
        <h1 className="mb-4 text-lg font-extrabold border cursor-default md:text-2xl dark:text-neutral-300">
          <span className="dark:text-blue-600">$</span> about{" "}
          <span className="text-md dark:text-rose-500">
            allwell{" "}
            <span className="font-normal dark:text-purple-500">--onen</span>
          </span>
          <span className="animate-ping">_</span>
        </h1>

        {/* page body */}
        <div className="w-full px-0 mt-4 border sm:px-8">
          {/* resume - profile heading */}
          <ResumeHeading section={"profile"} />

          {/* resume - profile body */}
          <div className="w-full px-6">
            <p className="leading-8 text-justify break-words dark:text-neutral-400">
              Dedicated Fullstack Web Developer with over 1+ years experience in
              frontend technologies:{" "}
              <strong className="dark:text-neutral-50">React</strong>,{" "}
              <strong className="dark:text-neutral-50">HTML</strong>,{" "}
              <strong className="dark:text-neutral-50">CSS</strong>,{" "}
              <strong className="dark:text-neutral-50">JavaScript</strong>, etc,
              and 7+ months experience in backend technologies:{" "}
              <strong className="dark:text-neutral-50">Node.js</strong>,{" "}
              <strong className="dark:text-neutral-50">Express</strong>,
              <strong className="dark:text-neutral-50">MongoDB</strong>,{" "}
              <strong className="dark:text-neutral-50">MySQL</strong>,{" "}
              <strong className="dark:text-neutral-50">Laravel</strong>.
              Possesses problem-solving skills and a self-motivated, dependable
              nature and able to effectively self-manage during independent
              projects, as well as collaborate as part of a productive team.
              Focused on helping the company achieve short- and long-term goals
              as well as client satisfaction and event success.
            </p>
          </div>

          {/* resume - education heading */}
          <ResumeHeading section={"education"} />

          {/* resume - education body */}
          <div className="pb-6">
            <DetailsCard
              start={"Sep 2019"}
              location={"Lagos, Nigeria"}
              organization={"Anchor University"}
              role={"BSc. Computer Science"}
            />

            <DetailsCard
              start={"Sep 2010"}
              end={"Jul 2016"}
              location={"Port Harcourt, Nigeria"}
              organization={"Science and Arts Specialist College"}
              role={"Secondary Education"}
            />

            <DetailsCard
              start={"Oct 2006"}
              end={"Jul 2010"}
              location={"Port Harcourt, Nigeria"}
              organization={"New Covenant School Group of Schools"}
              role={"Primary Education"}
            />
          </div>

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
              <DutiesList duty={"Brought forth a passion for the industry."} />
              <DutiesList
                duty={
                  "Brought forth the ability to work well independently and also with others."
                }
              />
            </EmploymentDuties>
          </div>

          {/* resume - skills heading */}
          <ResumeHeading section={"skils"} />
          <div className="pb-5 border"></div>
        </div>
      </div>
    </Layout>
  );
}

function ResumeHeading({ section }: ResumeHeadingProps) {
  return (
    <h2
      id={section}
      className="mt-6 mb-3 text-sm font-light cursor-default md:text-lg dark:text-neutral-500"
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

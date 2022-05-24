import {
  DetailsCardProps,
  DutiesProps,
  EmploymentDutiesProps,
  ResumeBadgeProps,
  ResumeHeadingProps,
  SectionWrapperProps,
} from "./props";

function SectionWrapper({ children }: SectionWrapperProps) {
  return (
    <div className="borde border-neutral-700 bg-neutral-80 mt-6 p2">
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

export {
  Badge,
  DutiesList,
  DetailsCard,
  ResumeHeading,
  SectionWrapper,
  EmploymentDuties,
};

interface ResumeHeadingProps {
  section: string;
}

interface SectionWrapperProps {
  children: React.ReactNode;
}

interface DetailsCardProps {
  end?: string;
  role: string;
  start: string;
  location: string;
  organization: string;
}

interface DutiesProps {
  duty: string;
}

interface EmploymentDutiesProps {
  end?: string;
  role: string;
  start: string;
  location: string;
  organization: string;
  children: React.ReactNode;
}

interface ResumeBadgeProps {
  value: string;
  theme: string;
}

export type {
  DutiesProps,
  DetailsCardProps,
  ResumeBadgeProps,
  ResumeHeadingProps,
  SectionWrapperProps,
  EmploymentDutiesProps,
};

export type ResumeHeadingProps = {
  section: string;
  activateCursor: boolean;
};

export type SectionWrapperProps = {
  children: React.ReactNode;
  onMouseEnter: Function;
  onMouseLeave: Function;
};

export type DetailsCardProps = {
  end?: string;
  role: string;
  start: string;
  location: string;
  organization: string;
};

export type DutiesProps = {
  duty: string;
};

export type EmploymentDutiesProps = {
  end?: string;
  role: string;
  start: string;
  location: string;
  organization: string;
  children: React.ReactNode;
};

export type ResumeBadgeProps = {
  value: string;
  theme: string;
};

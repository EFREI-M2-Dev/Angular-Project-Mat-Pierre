export interface Job {
  id: number;
  title: string;
  companyId: number;
  description: string;
  requirements: string[];
  niceToHave?: string[];
  location: string;
  contractType: ContractType;
  salary?: string;
  experienceLevel: ExperienceLevel;
  industry: string;
  languages: string[];
  postedDate: string;
  deadline?: string;
  workHours?: string;
  benefits?: string[];
  applyLink?: string;
  status: Status;
  image: string;
}

export type ContractType = 'CDI' | 'CDD' | 'Freelance' | 'Stage' | 'Alternance';

export type ExperienceLevel = 'Junior' | 'Intermédiaire' | 'Senior';

export type Status = 'active' | 'inactive';

export interface JobFilters {
  search: string;
  contractTypes: ContractType[];
}

export interface Job {
  id: number;
  title: string;
  companyId: number;
  description: string;
  requirements: string[];
  niceToHave?: string[];
  location: string;
  contractType: 'CDI' | 'CDD' | 'Freelance' | 'Stage' | 'Alternance';
  salary?: string;
  experienceLevel: 'Junior' | 'Intermédiaire' | 'Senior';
  industry: string;
  languages: string[];
  postedDate: string;
  deadline?: string;
  workHours?: string;
  benefits?: string[];
  applyLink?: string;
  status: 'active' | 'inactive';
  image: string;
}

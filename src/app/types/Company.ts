export interface Company {
  id: number;
  name: string;
  industry: string;
  location: string;
  remoteFriendly: boolean;
  description: string;
  website: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    behance?: string;
  };
  size: string;
  foundedYear: number;
  coreValues: string[];
  mission: string;
  benefits: string[];
  jobOffers: number[];
}

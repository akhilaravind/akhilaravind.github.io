export interface MetaData {
  siteTitle: string;
  siteDescription: string;
  siteUrl: string;
  keywords: string[];
  author: string;
  locale: string;
}

export interface LanguageItem {
  name: string;
  percentage: number;
  level: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  firstName: string;
  lastName: string;
  headline: string;
  heroHighlight: string;
  heroRole: string;
  heroTag?: string;
  heroGreeting?: string;
  heroHeadlineYellow?: string;
  heroHeadlineEnd?: string;
  heroStats?: { value: string; label: string }[];
  specialization: string;
  experienceClaim: string;
  status: string;
  avatar: string;
  heroImage: string;
  location: {
    city: string;
    region: string;
    country: string;
    display: string;
  };
  languages: LanguageItem[];
  contact: {
    phone: string;
    email: string;
    availability: string;
    callToAction: string;
    cvUrl: string;
  };
  mission: {
    heading: string;
    description: string;
  };
  socialLinks: SocialLink[];
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface ExtraSkillItem {
  name: string;
}

export interface SkillsData {
  proficiency: SkillItem[];
  extraSkills: ExtraSkillItem[];
  technologyTags: string[];
}

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  items: ServiceItem[];
}

export interface EducationItem {
  institution: string;
  role: string;
  stream?: string;
  period: string;
  certificate?: string;
  description: string;
}

export interface EducationData {
  title: string;
  subtitle: string;
  items: EducationItem[];
}

export interface ExperienceItem {
  company: string;
  period: string;
  title: string;
  badge: string;
  location?: string;
  summary?: string;
  highlights?: string[];
  description?: string;
  technologies: string[];
  clients?: { name: string; url: string }[];
}

export interface ExperienceData {
  title: string;
  subtitle: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: string;
  description: string;
  url: string | null;
  image?: string;
  technologies: string[];
  featured?: boolean;
  gradient?: string;
}

export interface PortfolioData {
  title: string;
  subtitle: string;
  categories: string[];
  projects: ProjectItem[];
}

export interface ContactInfoCard {
  icon: string;
  label: string;
  line1: string;
  line2: string;
}

export interface ContactFormField {
  name: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
}

export interface ContactSectionData {
  title: string;
  subtitle: string;
  infoCards: ContactInfoCard[];
  form: {
    heading: string;
    fields: ContactFormField[];
    submitButton: string;
    successMessage: string;
    errorMessage: string;
  };
}

export interface BrandLogo {
  name: string;
  label: string;
}

export interface NavigationItem {
  id: string;
  path: string;
  label: string;
  icon: string;
}

export interface FullPortfolioSchema {
  meta: MetaData;
  profile: ProfileData;
  skills: SkillsData;
  services: ServicesData;
  education: EducationData;
  experience: ExperienceData;
  portfolio: PortfolioData;
  contact: ContactSectionData;
  brandLogos: BrandLogo[];
  navigation: NavigationItem[];
}

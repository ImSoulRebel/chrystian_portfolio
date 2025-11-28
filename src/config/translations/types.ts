/**
 * Tipos TypeScript para el sistema de traducciones
 * Estos tipos garantizan type-safety y autocompletado en toda la aplicación
 */

// Type helper para autocompletado de claves de traducción (deep keys)
export type DeepKeyOf<T> = T extends object
  ? {
      [K in keyof T]: K extends string
        ? T[K] extends object
          ? `${K}` | `${K}.${DeepKeyOf<T[K]>}`
          : `${K}`
        : never;
    }[keyof T]
  : never;

// Locales soportados
export type Locale = 'es' | 'en';

// Tipos para las secciones de traducciones
export interface GeneralTranslations {
  welcome: string;
  and: string;
}

export interface NavTranslations {
  home: string;
  about: string;
  skills: string;
  experience: string;
  projects: string;
  contact: string;
  back: string;
  backLabel: string;
}

export interface Error404Translations {
  title: string;
  description: string;
  heading: string;
  subheading: string;
  message: string;
  suggestion: string;
  homeButton: string;
  contactButton: string;
}

export interface HeroTranslations {
  greeting: string;
  name: string;
  title: string;
  description: string;
  cta: {
    contact: string;
    projects: string;
  };
}

export interface AboutTranslations {
  title: string;
  description1: string;
  description2: string;
  description3: string;
  stats: {
    apps: { label: string; value: string };
    experience: { label: string; value: string };
    users: { label: string; value: string };
    countries: { label: string; value: string };
  };
  highlights: {
    title: string;
    subtitle: string;
    list: Array<{ emoji: string; text: string }>;
  };
}

export interface SkillsTranslations {
  title: string;
  indicatorText: string;
  categories: {
    frontend: string;
    backend: string;
    mobile: string;
    devops: string;
    leadership: string;
    tools: string;
  };
  list?: {
    [key: string]: {
      name: string;
      description: string;
    };
  };
}

export interface ExperienceTranslations {
  title: string;
  subtitle: string;
  current: string;
  months: string;
  years: string;
  list: {
    [key: string]: {
      title: string;
      company: string;
      period: string;
      location: string;
      description: string;
      skills: string[];
    };
  };
}

export interface ProjectsTranslations {
  title: string;
  subtitle: string;
  viewDemo: string;
  viewCode: string;
  viewMore: string;
  readMore: string;
  featured: string;
  stats: {
    inProduction: string;
    featuredProject: string;
    codeAvailable: string;
    underNDA: string;
  };
  badges: {
    confidential: string;
    underNDA: string;
  };
  actions: {
    visitWebsite: string;
    visitWebsiteLabel: string;
    viewGithub: string;
    viewGithubLabel: string;
    requestCaseStudy: string;
    requestCaseStudyLabel: string;
    contactForDetails: string;
    contactForDetailsLabel: string;
  };
  metadata: {
    duration: string;
    role: string;
    team: string;
    sector: string;
    impact: string;
    requestCaseStudy: string;
    requestCaseStudyLabel: string;
    contactForDetails: string;
    contactForDetailsLabel: string;
  };
  seo: {
    title: string;
    description: string;
  };
  list: {
    [key: string]: {
      title: string;
      stack: string;
      description: string;
      impact: string;
      sector?: string;
      role?: string;
      duration?: string;
      team?: string;
      metrics?: {
        label: string;
        value: string;
      }[];
    };
  };
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  description: string;
  seo: {
    title: string;
    description: string;
  };
  form: {
    subject: string;
    title: string;
    text: string;
    name: { label: string; placeholder: string };
    email: { label: string; placeholder: string };
    company: { label: string; placeholder: string };
    phone: { label: string; placeholder: string };
    projectType: {
      label: string;
      placeholder: string;
      options: {
        mobileApp: string;
        webApp: string;
        consulting: string;
        leadership: string;
        migration: string;
        other: string;
      };
    };
    budget: {
      label: string;
      placeholder: string;
      options: {
        range1: string;
        range2: string;
        range3: string;
        range4: string;
        undefined: string;
      };
    };
    timeline: {
      label: string;
      placeholder: string;
      options: {
        immediate: string;
        range1: string;
        range2: string;
        range3: string;
        flexible: string;
      };
    };
    message: { label: string; placeholder: string };
    send: string;
    sending: string;
    success: string;
    error: string;
    notice: string;
    validation: {
      required: string;
      completeRequired: string;
      submitSuccess: string;
      submitError: string;
    };
  };
  expectation: {
    quickResponse: { title: string; text: string };
    collaborationOpportunity: { title: string; text: string };
    actionPlan: { title: string; text: string };
  };
  tipSection: {
    title: string;
    description: string;
  };
  quickLinks: {
    label: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  info: {
    location: string;
    availability: string;
    response: string;
  };
}

export interface FooterTranslations {
  position: string;
  tagline: string;
  nav: {
    title: string;
    home: string;
    about: string;
    contact: string;
    skills: string;
    experience: string;
    projects: string;
  };
  tech: {
    title: string;
    flutter: string;
    firebase: string;
    javascript: string;
    react: string;
    ciCd: string;
  };
  contact: {
    title: string;
    subtitle: string;
    cta: string;
    email: string;
  };
  rights: string;
  madeWith: string;
  technologies: string;
}

export interface SEOTranslations {
  title: string;
  description: string;
  keywords: string;
}

export interface StructuredDataTranslations {
  person: {
    name: string;
    givenName: string;
    familyName: string;
    jobTitle: string;
    description: string;
    knowsAbout: string[];
    occupation: {
      name: string;
      location: string;
      skills: string;
      experienceRequirements: string;
      responsibilities: string;
    };
    worksFor: {
      name: string;
      description: string;
    };
    seeks: {
      name: string;
      description: string;
    };
  };
  website: {
    name: string;
    description: string;
  };
  services: {
    name: string;
    description: string;
    serviceType: string;
    areaServed: string;
    catalog: {
      name: string;
      offers: Array<{
        name: string;
        description: string;
      }>;
    };
  };
}

export interface RecruiterMetaTranslations {
  hiringStatus: string;
  workAuthorization: string;
  salaryExpectation: string;
  noticePeriod: string;
  preferredRole: string;
  teamSizeManaged: string;
  yearsExperience: string;
  specialization: string;
}

export interface LanguageTranslations {
  switchTo: string;
  spanish: string;
  english: string;
}

export interface LoadingTranslations {
  redirecting: string;
  loading: string;
  pleaseWait: string;
  processingRequest: string;
}

// Tipo completo para todas las traducciones de un locale
export interface BlogTranslations {
  title: string;
  heading: string;
  seo: {
    description: string;
  };
  noPosts: string;
  noTitle?: string;
  previewSubtitle?: string;
  viewAll?: string;
  viewAllAria?: string;
  blogHeader?: {
    backToBlogLabel?: string;
    authorLabel?: string;
    updatedLabel?: string;
  };
}

export interface LocaleTranslations {
  welcome: string;
  and: string;
  nav: NavTranslations;
  error404: Error404Translations;
  hero: HeroTranslations;
  about: AboutTranslations;
  skills: SkillsTranslations;
  experience: ExperienceTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
  general: GeneralTranslations;
  seo: SEOTranslations;
  structuredData: StructuredDataTranslations;
  recruiterMeta: RecruiterMetaTranslations;
  language: LanguageTranslations;
  blog: BlogTranslations;
  loading: LoadingTranslations;
}

// Tipo para el objeto de traducciones completo
export interface Translations {
  es: LocaleTranslations;
  en: LocaleTranslations;
}

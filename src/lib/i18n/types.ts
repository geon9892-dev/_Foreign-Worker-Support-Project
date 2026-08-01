export type LangCode = "ko" | "en" | "vi" | "th" | "lo" | "ne" | "id";

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface ServiceTierText {
  label: string;
  desc: string;
}

export interface ServiceText {
  name: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  note: string;
  tiers: Record<string, ServiceTierText>;
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  common: {
    siteName: string;
    tagline: string;
    applyNow: string;
    learnMore: string;
    free: string;
    from: string;
    won: string;
    viewDetails: string;
    startingPrice: string;
    fixedPrice: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    applyNow: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustNote: string;
  };
  stats: {
    members: string;
    membersLabel: string;
    countries: string;
    countriesLabel: string;
    services: string;
    servicesLabel: string;
    satisfaction: string;
    satisfactionLabel: string;
  };
  home: {
    servicesTitle: string;
    servicesSubtitle: string;
    processTitle: string;
    processSubtitle: string;
    steps: ProcessStep[];
    languagesTitle: string;
    languagesSubtitle: string;
    testimonialsTitle: string;
    testimonialsSubtitle: string;
    testimonials: Testimonial[];
    faqTitle: string;
    faqSubtitle: string;
    faqs: FaqItem[];
    ctaTitle: string;
    ctaSubtitle: string;
    ctaButton: string;
  };
  servicesPage: {
    title: string;
    subtitle: string;
  };
  serviceDetail: {
    pricingTitle: string;
    pricingSubtitle: string;
    featuresTitle: string;
    applyCta: string;
    backToServices: string;
    otherServices: string;
  };
  services: Record<string, ServiceText>;
  apply: {
    title: string;
    subtitle: string;
    stepService: string;
    selectTier: string;
    formName: string;
    formNamePlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formEmail: string;
    formEmailPlaceholder: string;
    formNationality: string;
    formNationalityPlaceholder: string;
    formVisa: string;
    formVisaPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    priceLabel: string;
    freeLabel: string;
    totalLabel: string;
    submit: string;
    submitting: string;
    requiredNote: string;
    privacyNote: string;
    successTitle: string;
    successDesc: string;
    backHome: string;
    viewOtherServices: string;
    errorTitle: string;
    errorDesc: string;
    visaOptions: string[];
  };
  about: {
    title: string;
    subtitle: string;
    missionTitle: string;
    missionBody: string;
    valuesTitle: string;
    values: { title: string; desc: string }[];
    howTitle: string;
    howSubtitle: string;
    howSteps: ProcessStep[];
    ctaTitle: string;
    ctaButton: string;
  };
  contact: {
    title: string;
    subtitle: string;
    infoTitle: string;
    phone: string;
    email: string;
    hours: string;
    hoursValue: string;
    address: string;
    addressValue: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formSubjectPlaceholder: string;
    formMessage: string;
    formMessagePlaceholder: string;
    submit: string;
    successMsg: string;
  };
  footer: {
    tagline: string;
    servicesTitle: string;
    companyTitle: string;
    about: string;
    contact: string;
    languagesTitle: string;
    rights: string;
    disclaimer: string;
  };
  nationalities: string[];
}

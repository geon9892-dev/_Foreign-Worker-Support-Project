import type { Dictionary } from "../types";

const en: Dictionary = {
  meta: {
    title: "KoBridge — Your Bridge to Life in Korea",
    description:
      "Moving, bank accounts, visas, schools and jobs — one platform to support Asian migrants living in Korea, in your language.",
  },
  common: {
    siteName: "KoBridge",
    tagline: "Your Bridge to Life in Korea",
    applyNow: "Apply Now",
    learnMore: "Learn More",
    free: "Free",
    from: "from",
    won: "KRW",
    viewDetails: "View Details",
    startingPrice: "Starting price",
    fixedPrice: "Fixed price, no hidden fees",
  },
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    applyNow: "Apply Now",
  },
  hero: {
    badge: "Trusted by 12,000+ migrants across Korea",
    title: "Life in Korea,",
    titleHighlight: "made simple.",
    subtitle:
      "Moving, bank accounts, paperwork, schools, visa checks and jobs — get real help in your own language, with transparent, fixed pricing on every service.",
    ctaPrimary: "Explore Services",
    ctaSecondary: "Talk to Us",
    trustNote: "Available in Korean, English, Vietnamese, Thai, Lao, Nepali & Indonesian",
  },
  stats: {
    members: "12,000+",
    membersLabel: "Migrants supported",
    countries: "6",
    countriesLabel: "Languages supported",
    services: "7",
    servicesLabel: "Core services",
    satisfaction: "4.9/5",
    satisfactionLabel: "Average rating",
  },
  home: {
    servicesTitle: "Everything you need, in one place",
    servicesSubtitle:
      "From your first day in Korea to settling in for good — seven services, transparent fixed pricing.",
    processTitle: "How it works",
    processSubtitle: "Three simple steps, fully supported in your language.",
    steps: [
      {
        title: "Choose a service",
        desc: "Browse our seven services and see the fixed price up front — no surprises.",
      },
      {
        title: "Apply in your language",
        desc: "Fill out a short form. Our team speaks your language and confirms details with you.",
      },
      {
        title: "We handle the rest",
        desc: "Our specialists take care of the paperwork, visits, and follow-up until it's done.",
      },
    ],
    languagesTitle: "Support in your language",
    languagesSubtitle:
      "Switch languages anytime — every page, form and price is fully translated.",
    testimonialsTitle: "Real stories from our members",
    testimonialsSubtitle: "Thousands of migrants trust KoBridge with life's biggest steps.",
    testimonials: [
      {
        quote:
          "I opened my bank account in one visit without speaking a word of Korean. The staff translated everything for me.",
        name: "Nguyen T.",
        role: "Factory worker, Vietnam",
      },
      {
        quote:
          "My visa extension was confusing and stressful. KoBridge handled the paperwork and told me exactly what to expect.",
        name: "Somchai P.",
        role: "E-9 worker, Thailand",
      },
      {
        quote:
          "They helped my daughter get into a local school and explained every document in Nepali. I couldn't have done it alone.",
        name: "Sita R.",
        role: "Resident, Nepal",
      },
    ],
    faqTitle: "Frequently asked questions",
    faqSubtitle: "Can't find your answer? Contact us anytime.",
    faqs: [
      {
        q: "Is KoBridge only for documented workers?",
        a: "No. Whatever your current status, we help you understand your options and take the safest legal next step — including visa checks and regularization guidance.",
      },
      {
        q: "Are the prices really fixed?",
        a: "Yes. Every service shows its fixed price up front. What you see on the pricing page is what you pay — no hidden fees.",
      },
      {
        q: "Do I need to speak Korean?",
        a: "Not at all. Our team and this website support Korean, English, Vietnamese, Thai, Lao, Nepali and Indonesian.",
      },
      {
        q: "How fast can I get help?",
        a: "Most applications are reviewed within 24 hours, and urgent visa matters are prioritized.",
      },
    ],
    ctaTitle: "Ready to get real help?",
    ctaSubtitle: "Join thousands of migrants who trust KoBridge with life in Korea.",
    ctaButton: "Get Started",
  },
  servicesPage: {
    title: "Our Services",
    subtitle: "Seven core services, every price fixed and transparent.",
  },
  serviceDetail: {
    pricingTitle: "Fixed pricing",
    pricingSubtitle: "No hidden fees. The price you see is the price you pay.",
    featuresTitle: "What's included",
    applyCta: "Apply for this service",
    backToServices: "Back to services",
    otherServices: "Other services",
  },
  services: {
    moving: {
      name: "Moving Service",
      shortDesc: "Safe, fast, fixed-price moving — no Korean required.",
      longDesc:
        "From packing to transport to setting up your new place, we handle it all. No home visit needed for a quote — just transparent, fixed pricing from the start.",
      features: [
        "Multilingual coordinator assigned to your move",
        "Fixed pricing, no hidden costs",
        "Full support for packing, transport and setup",
        "Interpreter available on moving day",
      ],
      note: "Prices may vary slightly by distance and floor access.",
      tiers: {
        studio: { label: "Studio / one-room move", desc: "1-ton truck with 2 moving specialists" },
        tworoom: { label: "Two-room move", desc: "2.5-ton truck, 3 specialists, basic packing included" },
        fullpack: { label: "Full-service packing move", desc: "All-in-one packing and unpacking, 5-ton truck" },
      },
    },
    bank: {
      name: "Bank Account Opening",
      shortDesc: "Confusing bank paperwork, solved with an interpreter by your side.",
      longDesc:
        "All you need is your Alien Registration Card. We accompany you to the bank, help with paperwork, and set up mobile/internet banking.",
      features: [
        "Reservation at a foreigner-friendly bank branch",
        "Interpreter support for all paperwork",
        "Debit card and mobile banking setup guidance",
        "Usually completed same day",
      ],
      note: "Bank hours and document requirements may vary by branch.",
      tiers: {
        accompany: { label: "Branch visit with interpreter", desc: "Interpreter accompanies you from account opening to card pickup" },
        remote: { label: "Remote document consulting", desc: "Guidance on required documents and application forms (no branch visit)" },
      },
    },
    admin: {
      name: "Administrative Support",
      shortDesc: "We handle immigration and local government paperwork for you.",
      longDesc:
        "Visa extensions, Alien Registration Card reissue, address registration and more — handled accurately and quickly, so you can take the first step toward stable, legal residence.",
      features: [
        "Immigration office document handling",
        "Accurate legal procedure guidance",
        "Referral to licensed administrative/labor consultants",
        "Real-time progress updates",
      ],
      note: "Government processing times are outside our control and may vary.",
      tiers: {
        visaExtend: { label: "Visa extension / change application", desc: "Full support from document prep to submission" },
        alienCard: { label: "Alien Registration Card reissue", desc: "For lost cards or information changes" },
        accompany: { label: "Community center visit with interpreter", desc: "Support for address registration and similar visits" },
      },
    },
    "language-school": {
      name: "Language School Connection",
      shortDesc: "We help you find the right Korean language school, free of charge.",
      longDesc:
        "From university-affiliated institutes to private academies, we compare options by region and goal and help you enroll.",
      features: [
        "Nationwide language school database comparison",
        "Recommendations matched to D-4 visa requirements",
        "Help completing enrollment documents",
        "Scholarship and discount information",
      ],
      note: "Tuition is paid directly to the school; our fee covers consulting and enrollment support.",
      tiers: {
        consult: { label: "Consultation & recommendation", desc: "Free consultation based on your goals, budget and location" },
        enroll: { label: "Enrollment support", desc: "From application forms to tuition payment support" },
      },
    },
    school: {
      name: "School Connection",
      shortDesc: "From school placement for your children to university admission.",
      longDesc:
        "We support everything from school transfers for multicultural family children to university and graduate admissions for international students.",
      features: [
        "Local school placement consultation",
        "Help preparing transfer documents",
        "University admission consulting",
        "Information on special admission programs",
      ],
      note: "Admission decisions are made by the school; we support the application process.",
      tiers: {
        consult: { label: "Consultation & matching", desc: "School recommendations tailored to your situation" },
        admission: { label: "Admission process support", desc: "Full support from application to document submission" },
      },
    },
    "visa-check": {
      name: "Visa Status Check",
      shortDesc: "Check your residence status accurately, right now.",
      longDesc:
        "Worried about your visa expiring? Our experts review your current status and guide you to the safest legal next step — extension, change, or voluntary reporting.",
      features: [
        "Real-time residence period and status check",
        "Guidance on remedies if a violation occurred",
        "1:1 personalized expert consultation",
        "Fully confidential consultation",
      ],
      note: "This service helps you understand and pursue legal options — it does not provide legal representation.",
      tiers: {
        selfcheck: { label: "Online self-check", desc: "Instantly check your status with your registration number" },
        consult: { label: "1:1 expert consultation (30 min)", desc: "Personalized advice by phone or video call" },
        expertreview: { label: "Document review service", desc: "Pre-check and correction of documents before submission" },
      },
    },
    job: {
      name: "Job Connection",
      shortDesc: "Safe, legal jobs matched to your visa status.",
      longDesc:
        "We only connect you with legal job openings that match your visa type, and support you with contract review and insurance guidance.",
      features: [
        "Job matching by visa-eligible occupation",
        "Employment contract review support",
        "Guidance on payroll and 4 major insurances",
        "Verified, safe workplaces only",
      ],
      note: "Matching fee is charged only once employment is confirmed.",
      tiers: {
        register: { label: "Candidate registration", desc: "Register your resume and get matched job alerts" },
        matching: { label: "Successful matching fee", desc: "One-time payment once employment is confirmed" },
      },
    },
  },
  apply: {
    title: "Apply for a Service",
    subtitle: "Fill in your details and our team will contact you within 24 hours.",
    stepService: "Selected service",
    selectTier: "Select an option",
    formName: "Full name",
    formNamePlaceholder: "Enter your full name",
    formPhone: "Phone number",
    formPhonePlaceholder: "010-1234-5678",
    formEmail: "Email",
    formEmailPlaceholder: "you@example.com",
    formNationality: "Nationality",
    formNationalityPlaceholder: "Select your nationality",
    formVisa: "Visa status",
    formVisaPlaceholder: "Select your visa status",
    formMessage: "Additional details (optional)",
    formMessagePlaceholder: "Tell us anything that will help us assist you better",
    priceLabel: "Price",
    freeLabel: "Free",
    totalLabel: "Total",
    submit: "Submit Application",
    submitting: "Submitting...",
    requiredNote: "* Required fields",
    privacyNote:
      "Your information is used only to process this application and will never be shared with immigration authorities or third parties without your consent.",
    successTitle: "Application received!",
    successDesc:
      "Thank you. Our team will contact you within 24 hours in your preferred language.",
    backHome: "Back to Home",
    viewOtherServices: "View other services",
    errorTitle: "Something went wrong",
    errorDesc: "Please check your details and try again.",
    visaOptions: [
      "E-9 (Non-professional employment)",
      "E-7 (Special skilled worker)",
      "D-2 (Student)",
      "D-4 (General trainee / language course)",
      "F-2 / F-5 / F-6 (Resident / Permanent / Marriage)",
      "H-2 (Working visit)",
      "Undocumented / status expired",
      "Not sure",
    ],
  },
  about: {
    title: "About KoBridge",
    subtitle: "We exist so that no one has to face life in Korea alone.",
    missionTitle: "Our mission",
    missionBody:
      "Every year, hundreds of thousands of workers, students and families from Vietnam, Thailand, Laos, Nepal, Indonesia and beyond come to Korea to build a better future. Too often, a language barrier turns simple tasks — opening a bank account, renewing a visa, enrolling in school — into overwhelming obstacles. KoBridge connects you with real people who speak your language and specialists who know Korean systems inside out, at a fair, transparent price every time.",
    valuesTitle: "What we stand for",
    values: [
      { title: "Transparency", desc: "Every price is fixed and published before you apply. No surprises, ever." },
      { title: "Dignity", desc: "We treat every member with respect, regardless of visa status or background." },
      { title: "Your language", desc: "Support in Korean, English, Vietnamese, Thai, Lao, Nepali and Indonesian." },
      { title: "Legal & safe", desc: "We always guide you toward safe, legal paths — never around them." },
    ],
    howTitle: "How KoBridge works",
    howSubtitle: "A simple, transparent process from start to finish.",
    howSteps: [
      { title: "Tell us what you need", desc: "Browse services or contact our multilingual team directly." },
      { title: "See the fixed price", desc: "Know exactly what you'll pay before you commit to anything." },
      { title: "Get matched with a specialist", desc: "A coordinator who speaks your language guides you end-to-end." },
      { title: "Problem solved", desc: "We follow up until your task is fully complete." },
    ],
    ctaTitle: "Have a question before you start?",
    ctaButton: "Contact Our Team",
  },
  contact: {
    title: "Contact Us",
    subtitle: "Our multilingual team is ready to help, every weekday.",
    infoTitle: "Get in touch",
    phone: "Phone",
    email: "Email",
    hours: "Business hours",
    hoursValue: "Mon–Fri, 09:00–18:00 (KST)",
    address: "Office",
    addressValue: "3F, 123 Guro-daero, Guro-gu, Seoul, South Korea",
    formTitle: "Send us a message",
    formName: "Name",
    formEmail: "Email",
    formSubject: "Subject",
    formSubjectPlaceholder: "What can we help with?",
    formMessage: "Message",
    formMessagePlaceholder: "Write your message here",
    submit: "Send Message",
    successMsg: "Thank you! We'll reply within 1 business day.",
  },
  footer: {
    tagline: "Your bridge to a better life in Korea.",
    servicesTitle: "Services",
    companyTitle: "Company",
    about: "About Us",
    contact: "Contact",
    languagesTitle: "Language",
    rights: "All rights reserved.",
    disclaimer:
      "KoBridge provides consulting and administrative support services. We are not a government agency and do not guarantee immigration outcomes.",
  },
  nationalities: [
    "Vietnam",
    "Thailand",
    "Laos",
    "Nepal",
    "Indonesia",
    "Philippines",
    "Cambodia",
    "Myanmar",
    "Bangladesh",
    "Other",
  ],
};

export default en;

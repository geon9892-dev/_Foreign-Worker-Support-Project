export type ServiceSlug =
  | "moving"
  | "bank"
  | "admin"
  | "language-school"
  | "school"
  | "visa-check"
  | "job";

export interface PriceTier {
  id: string;
  priceKrw: number; // 0 means free
}

export interface ServiceDef {
  slug: ServiceSlug;
  icon: string; // lucide icon name
  color: string; // tailwind gradient classes
  image?: string; // optional hero/card photo
  tiers: PriceTier[];
}

export const services: ServiceDef[] = [
  {
    slug: "moving",
    icon: "Truck",
    color: "from-orange-500 to-amber-500",
    image: "/images/services/moving.jpg",
    tiers: [
      { id: "studio", priceKrw: 350000 },
      { id: "tworoom", priceKrw: 550000 },
      { id: "fullpack", priceKrw: 850000 },
    ],
  },
  {
    slug: "bank",
    icon: "Landmark",
    color: "from-blue-500 to-cyan-500",
    image: "/images/services/bank.jpg",
    tiers: [
      { id: "accompany", priceKrw: 80000 },
      { id: "remote", priceKrw: 40000 },
    ],
  },
  {
    slug: "admin",
    icon: "FileText",
    color: "from-violet-500 to-purple-500",
    image: "/images/services/admin.jpg",
    tiers: [
      { id: "visaExtend", priceKrw: 150000 },
      { id: "alienCard", priceKrw: 60000 },
      { id: "accompany", priceKrw: 70000 },
    ],
  },
  {
    slug: "language-school",
    icon: "Languages",
    color: "from-teal-500 to-emerald-500",
    image: "/images/services/language-school.jpg",
    tiers: [
      { id: "consult", priceKrw: 0 },
      { id: "enroll", priceKrw: 100000 },
    ],
  },
  {
    slug: "school",
    icon: "GraduationCap",
    color: "from-pink-500 to-rose-500",
    image: "/images/services/school.jpg",
    tiers: [
      { id: "consult", priceKrw: 0 },
      { id: "admission", priceKrw: 200000 },
    ],
  },
  {
    slug: "visa-check",
    icon: "ShieldCheck",
    color: "from-sky-500 to-indigo-500",
    image: "/images/services/visa-check.jpg",
    tiers: [
      { id: "selfcheck", priceKrw: 0 },
      { id: "consult", priceKrw: 30000 },
      { id: "expertreview", priceKrw: 50000 },
    ],
  },
  {
    slug: "job",
    icon: "Briefcase",
    color: "from-lime-500 to-green-600",
    image: "/images/services/job.jpg",
    tiers: [
      { id: "register", priceKrw: 0 },
      { id: "matching", priceKrw: 200000 },
    ],
  },
];

export function getService(slug: string): ServiceDef | undefined {
  return services.find((s) => s.slug === slug);
}

export function formatKrw(amount: number, locale = "ko-KR"): string {
  if (amount === 0) return "";
  return new Intl.NumberFormat(locale).format(amount);
}

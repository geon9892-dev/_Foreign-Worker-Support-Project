import {
  Truck,
  Landmark,
  FileText,
  Languages,
  GraduationCap,
  ShieldCheck,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Truck,
  Landmark,
  FileText,
  Languages,
  GraduationCap,
  ShieldCheck,
  Briefcase,
};

export default function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = iconMap[name] ?? FileText;
  return <Icon className={className} />;
}

"use client";

import { useLanguage } from "@/lib/i18n/context";
import { formatKrw } from "@/data/services";

export default function PriceTag({
  amount,
  size = "md",
}: {
  amount: number;
  size?: "sm" | "md" | "lg";
}) {
  const { t } = useLanguage();

  const sizeClasses = {
    sm: "text-base",
    md: "text-xl",
    lg: "text-3xl",
  }[size];

  if (amount === 0) {
    return (
      <span className={`font-bold text-accent ${sizeClasses}`}>{t.common.free}</span>
    );
  }

  return (
    <span className={`font-bold ${sizeClasses}`}>
      {formatKrw(amount)}
      <span className="ml-1 text-sm font-medium text-foreground/50">{t.common.won}</span>
      <span className="text-foreground/50">~</span>
    </span>
  );
}

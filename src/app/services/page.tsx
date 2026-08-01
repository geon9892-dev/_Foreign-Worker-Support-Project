"use client";

import { useLanguage } from "@/lib/i18n/context";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t.servicesPage.title}
        </h1>
        <p className="mt-4 text-foreground/60">{t.servicesPage.subtitle}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.slug} service={s} />
        ))}
      </div>
    </div>
  );
}

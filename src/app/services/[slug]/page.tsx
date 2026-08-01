"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { getService, services } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import PriceTag from "@/components/PriceTag";
import ServiceCard from "@/components/ServiceCard";

export default function ServiceDetailPage() {
  const params = useParams<{ slug: string }>();
  const { t } = useLanguage();
  const service = getService(params.slug);

  if (!service) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <h1 className="text-2xl font-bold">404</h1>
        <Link href="/services" className="mt-4 inline-block text-accent underline">
          {t.serviceDetail.backToServices}
        </Link>
      </div>
    );
  }

  const text = t.services[service.slug];
  const otherServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${service.color}`}>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white"
          >
            <ArrowLeft className="size-4" />
            {t.serviceDetail.backToServices}
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex size-16 items-center justify-center rounded-2xl bg-white/20 text-white backdrop-blur-sm">
              <ServiceIcon name={service.icon} className="size-8" />
            </div>
            <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{text.name}</h1>
          </div>

          <p className="mt-5 max-w-2xl text-white/90 text-base sm:text-lg">{text.longDesc}</p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Features */}
        <div>
          <h2 className="text-xl font-bold">{t.serviceDetail.featuresTitle}</h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {text.features.map((f) => (
              <div key={f} className="flex items-start gap-3 rounded-2xl card-surface p-4">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" />
                </span>
                <p className="text-sm leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="mt-16">
          <h2 className="text-xl font-bold">{t.serviceDetail.pricingTitle}</h2>
          <p className="mt-1 text-sm text-foreground/55">{t.serviceDetail.pricingSubtitle}</p>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {service.tiers.map((tier) => {
              const tierText = text.tiers[tier.id];
              return (
                <div
                  key={tier.id}
                  className="flex flex-col rounded-3xl card-surface p-6 transition-shadow hover:shadow-lg hover:shadow-black/5"
                >
                  <h3 className="font-bold">{tierText?.label ?? tier.id}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
                    {tierText?.desc}
                  </p>
                  <div className="mt-6">
                    <PriceTag amount={tier.priceKrw} size="lg" />
                  </div>
                  <Link
                    href={`/apply/${service.slug}?tier=${tier.id}`}
                    className="mt-5 inline-flex items-center justify-center gap-1.5 rounded-full gradient-brand px-5 py-2.5 text-sm font-semibold text-white hover:opacity-90 transition-opacity"
                  >
                    {t.common.applyNow}
                    <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mt-6 text-xs text-foreground/45">{text.note}</p>
        </div>
      </div>

      {/* Other services */}
      <section className="bg-surface-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold">{t.serviceDetail.otherServices}</h2>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

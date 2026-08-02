"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Quote } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { services } from "@/data/services";
import { languages } from "@/lib/i18n/languages";
import ServiceCard from "@/components/ServiceCard";
import FaqAccordion from "@/components/FaqAccordion";

export default function Home() {
  const { t } = useLanguage();

  const stats = [
    { value: t.stats.members, label: t.stats.membersLabel },
    { value: t.stats.countries, label: t.stats.countriesLabel },
    { value: t.stats.services, label: t.stats.servicesLabel },
    { value: t.stats.satisfaction, label: t.stats.satisfactionLabel },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 size-96 rounded-full bg-brand-start/20 blur-3xl animate-float-slow" />
          <div className="absolute top-1/3 -right-24 size-96 rounded-full bg-brand-end/20 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-28 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border-subtle bg-surface px-4 py-1.5 text-xs font-semibold text-foreground/70">
              <Sparkles className="size-3.5 text-accent" />
              {t.hero.badge}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              {t.hero.title}{" "}
              <span className="gradient-text">{t.hero.titleHighlight}</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/services"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-mid/25 hover:opacity-90 transition-opacity sm:w-auto"
              >
                {t.hero.ctaPrimary}
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border-subtle bg-surface px-7 py-3.5 text-sm font-semibold hover:bg-surface-muted transition-colors sm:w-auto"
              >
                {t.hero.ctaSecondary}
              </Link>
            </div>

            <p className="mt-5 text-xs text-foreground/45">{t.hero.trustNote}</p>
          </div>

          {/* Stats */}
          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl card-surface px-4 py-6 text-center"
              >
                <p className="text-2xl font-extrabold gradient-text sm:text-3xl">{s.value}</p>
                <p className="mt-1 text-xs text-foreground/55">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto mt-16 aspect-[21/9] max-w-5xl overflow-hidden rounded-[2rem] shadow-xl shadow-black/10">
            <Image
              src="/images/hero-community.jpg"
              alt={t.hero.trustNote}
              fill
              priority
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.home.servicesTitle}
          </h2>
          <p className="mt-4 text-foreground/60">{t.home.servicesSubtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.home.processTitle}
            </h2>
            <p className="mt-4 text-foreground/60">{t.home.processSubtitle}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {t.home.steps.map((step, i) => (
              <div key={step.title} className="relative rounded-3xl card-surface p-7">
                <span className="flex size-11 items-center justify-center rounded-full gradient-brand text-lg font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.home.languagesTitle}
          </h2>
          <p className="mt-4 text-foreground/60">{t.home.languagesSubtitle}</p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center justify-center gap-3">
          {languages.map((l) => (
            <span
              key={l.code}
              className="inline-flex items-center gap-2 rounded-full card-surface px-4 py-2 text-sm font-medium"
            >
              <span className="text-lg">{l.flag}</span>
              {l.nativeLabel}
            </span>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              {t.home.testimonialsTitle}
            </h2>
            <p className="mt-4 text-foreground/60">{t.home.testimonialsSubtitle}</p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {t.home.testimonials.map((tm) => (
              <div key={tm.name} className="rounded-3xl card-surface p-7">
                <Quote className="size-6 text-accent/50" />
                <p className="mt-4 text-sm leading-relaxed text-foreground/75">
                  &ldquo;{tm.quote}&rdquo;
                </p>
                <div className="mt-5 border-t border-border-subtle pt-4">
                  <p className="text-sm font-bold">{tm.name}</p>
                  <p className="text-xs text-foreground/50">{tm.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t.home.faqTitle}
          </h2>
          <p className="mt-4 text-foreground/60">{t.home.faqSubtitle}</p>
        </div>

        <div className="mt-12">
          <FaqAccordion items={t.home.faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-brand px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute -top-16 -right-16 size-64 rounded-full bg-white/10 blur-3xl" />
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">{t.home.ctaTitle}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/85">{t.home.ctaSubtitle}</p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-mid shadow-lg hover:opacity-90 transition-opacity"
          >
            {t.home.ctaButton}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

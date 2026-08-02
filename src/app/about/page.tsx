"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Heart, Languages, Scale } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

const valueIcons = [ShieldCheck, Heart, Languages, Scale];

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 left-1/2 size-96 -translate-x-1/2 rounded-full bg-brand-mid/15 blur-3xl" />
        </div>
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.about.title}</h1>
          <p className="mt-5 text-lg text-foreground/60">{t.about.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl card-surface p-8 sm:p-10">
          <h2 className="text-2xl font-bold">{t.about.missionTitle}</h2>
          <p className="mt-4 leading-relaxed text-foreground/65">{t.about.missionBody}</p>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">
            {t.about.valuesTitle}
          </h2>
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.about.values.map((v, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <div key={v.title} className="rounded-3xl card-surface p-6">
                  <span className="flex size-11 items-center justify-center rounded-2xl gradient-brand text-white">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="mt-4 font-bold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/60">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">{t.about.howTitle}</h2>
          <p className="mt-4 text-foreground/60">{t.about.howSubtitle}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.howSteps.map((step, i) => (
            <div key={step.title} className="relative rounded-3xl card-surface p-6">
              <span className="flex size-10 items-center justify-center rounded-full gradient-brand text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-brand px-8 py-14 text-center sm:px-16">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">{t.about.ctaTitle}</h2>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-mid shadow-lg hover:opacity-90 transition-opacity"
          >
            {t.about.ctaButton}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

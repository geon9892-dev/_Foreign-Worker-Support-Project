"use client";

import { Suspense, useActionState, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { getService } from "@/data/services";
import ServiceIcon from "@/components/ServiceIcon";
import PriceTag from "@/components/PriceTag";
import { submitApplication, type ApplicationState } from "@/app/actions";

const initialState: ApplicationState = { status: "idle" };

function ApplyPageInner() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();
  const { t, lang } = useLanguage();
  const service = getService(params.slug);
  const [tierId, setTierId] = useState(
    searchParams.get("tier") || service?.tiers[0]?.id || ""
  );
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

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
  const selectedTier = service.tiers.find((tr) => tr.id === tierId) ?? service.tiers[0];
  const selectedTierText = text.tiers[selectedTier.id];

  if (state.status === "success") {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 text-center">
        <span className="flex size-16 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="size-9" />
        </span>
        <h1 className="mt-6 text-2xl font-extrabold">{t.apply.successTitle}</h1>
        <p className="mt-3 text-foreground/60">{t.apply.successDesc}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full gradient-brand px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
          >
            {t.apply.backHome}
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-border-subtle px-6 py-3 text-sm font-semibold hover:bg-surface-muted"
          >
            {t.apply.viewOtherServices}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Link
        href={`/services/${service.slug}`}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground/60 hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {t.serviceDetail.backToServices}
      </Link>

      <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{t.apply.title}</h1>
      <p className="mt-2 text-foreground/60">{t.apply.subtitle}</p>

      {/* Selected service summary */}
      <div className="mt-8 flex items-center gap-4 rounded-3xl card-surface p-5">
        <div
          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white`}
        >
          <ServiceIcon name={service.icon} className="size-6" />
        </div>
        <div className="flex-1">
          <p className="text-xs text-foreground/50">{t.apply.stepService}</p>
          <p className="font-bold">{text.name}</p>
        </div>
      </div>

      <form action={formAction} className="mt-8 space-y-6">
        <input type="hidden" name="serviceSlug" value={service.slug} />
        <input type="hidden" name="lang" value={lang} />

        {/* Tier selection */}
        <div>
          <label className="text-sm font-semibold">{t.apply.selectTier}</label>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.tiers.map((tier) => {
              const tt = text.tiers[tier.id];
              const active = tier.id === selectedTier.id;
              return (
                <button
                  type="button"
                  key={tier.id}
                  onClick={() => setTierId(tier.id)}
                  className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-colors cursor-pointer ${
                    active
                      ? "border-brand-mid bg-brand-mid/5 ring-1 ring-brand-mid"
                      : "border-border-subtle hover:bg-surface-muted"
                  }`}
                >
                  <span className="text-sm font-semibold">{tt?.label}</span>
                  <span className="mt-1 text-xs text-foreground/55">{tt?.desc}</span>
                  <span className="mt-3">
                    <PriceTag amount={tier.priceKrw} size="sm" />
                  </span>
                </button>
              );
            })}
          </div>
          <input type="hidden" name="tierId" value={selectedTier.id} />
        </div>

        {/* Personal details */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="text-sm font-semibold">
              {t.apply.formName} *
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder={t.apply.formNamePlaceholder}
              className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            />
          </div>
          <div>
            <label htmlFor="phone" className="text-sm font-semibold">
              {t.apply.formPhone} *
            </label>
            <input
              id="phone"
              name="phone"
              required
              placeholder={t.apply.formPhonePlaceholder}
              className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              {t.apply.formEmail}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.apply.formEmailPlaceholder}
              className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            />
          </div>
          <div>
            <label htmlFor="nationality" className="text-sm font-semibold">
              {t.apply.formNationality} *
            </label>
            <select
              id="nationality"
              name="nationality"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            >
              <option value="" disabled>
                {t.apply.formNationalityPlaceholder}
              </option>
              {t.nationalities.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="visaStatus" className="text-sm font-semibold">
              {t.apply.formVisa} *
            </label>
            <select
              id="visaStatus"
              name="visaStatus"
              required
              defaultValue=""
              className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            >
              <option value="" disabled>
                {t.apply.formVisaPlaceholder}
              </option>
              {t.apply.visaOptions.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="text-sm font-semibold">
              {t.apply.formMessage}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder={t.apply.formMessagePlaceholder}
              className="mt-2 w-full resize-none rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
            />
          </div>
        </div>

        {/* Price summary */}
        <div className="flex items-center justify-between rounded-2xl bg-surface-muted p-5">
          <div>
            <span className="text-sm font-semibold">{t.apply.totalLabel}</span>
            <p className="mt-0.5 text-xs text-foreground/50">{selectedTierText?.label}</p>
          </div>
          <PriceTag amount={selectedTier.priceKrw} size="lg" />
        </div>

        {state.status === "error" && (
          <div className="flex items-start gap-2 rounded-xl bg-red-500/10 p-4 text-sm text-red-600">
            <AlertCircle className="mt-0.5 size-4 shrink-0" />
            <div>
              <p className="font-semibold">{t.apply.errorTitle}</p>
              <p className="text-red-600/80">{t.apply.errorDesc}</p>
            </div>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60 sm:w-auto cursor-pointer"
          >
            {isPending && <Loader2 className="size-4 animate-spin" />}
            {isPending ? t.apply.submitting : t.apply.submit}
          </button>
          <p className="mt-3 text-xs text-foreground/45">{t.apply.requiredNote}</p>
          <p className="mt-1 text-xs text-foreground/45">{t.apply.privacyNote}</p>
        </div>
      </form>
    </div>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ApplyPageInner />
    </Suspense>
  );
}

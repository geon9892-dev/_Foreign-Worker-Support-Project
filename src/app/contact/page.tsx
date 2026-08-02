"use client";

import { useActionState } from "react";
import { Phone, Mail, Clock, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { contactInfo } from "@/data/contact";
import { submitContact, type ContactState } from "@/app/actions";

const initialState: ContactState = { status: "idle" };

export default function ContactPage() {
  const { t } = useLanguage();
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  const infoItems = [
    { icon: Phone, label: t.contact.phone, value: contactInfo.phone },
    { icon: Mail, label: t.contact.email, value: contactInfo.email },
    { icon: Clock, label: t.contact.hours, value: t.contact.hoursValue },
    { icon: MapPin, label: t.contact.address, value: t.contact.addressValue },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t.contact.title}</h1>
        <p className="mt-4 text-foreground/60">{t.contact.subtitle}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-lg font-bold">{t.contact.infoTitle}</h2>
          <div className="mt-5 space-y-4">
            {infoItems.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-2xl card-surface p-5">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                  <item.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs text-foreground/50">{item.label}</p>
                  <p className="mt-0.5 text-sm font-semibold">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-3xl card-surface p-7 sm:p-8">
            <h2 className="text-lg font-bold">{t.contact.formTitle}</h2>

            {state.status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-3 py-10 text-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="size-7" />
                </span>
                <p className="font-semibold">{t.contact.successMsg}</p>
              </div>
            ) : (
              <form action={formAction} className="mt-6 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-sm font-semibold">
                      {t.contact.formName}
                    </label>
                    <input
                      id="name"
                      name="name"
                      required
                      className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-semibold">
                      {t.contact.formEmail}
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="text-sm font-semibold">
                    {t.contact.formSubject}
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    placeholder={t.contact.formSubjectPlaceholder}
                    className="mt-2 w-full rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-semibold">
                    {t.contact.formMessage}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={t.contact.formMessagePlaceholder}
                    className="mt-2 w-full resize-none rounded-xl border border-border-subtle bg-surface px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-mid"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isPending}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand px-6 py-3.5 text-sm font-semibold text-white hover:opacity-90 disabled:opacity-60 sm:w-auto cursor-pointer"
                >
                  {isPending && <Loader2 className="size-4 animate-spin" />}
                  {t.contact.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

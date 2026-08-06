"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { services } from "@/data/services";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border-subtle bg-surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt={t.common.siteName} width={36} height={36} className="size-9" />
              <span className="text-lg font-bold tracking-tight">{t.common.siteName}</span>
            </Link>
            <p className="mt-3 text-sm text-foreground/60 max-w-xs">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wide">
              {t.footer.servicesTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-foreground/70 hover:text-foreground"
                  >
                    {t.services[s.slug].name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wide">
              {t.footer.companyTitle}
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/about" className="text-sm text-foreground/70 hover:text-foreground">
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-foreground/70 hover:text-foreground">
                  {t.footer.contact}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground/50 uppercase tracking-wide">
              {t.footer.languagesTitle}
            </h3>
            <div className="mt-4">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border-subtle pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {t.common.siteName}. {t.footer.rights}</p>
          <p className="max-w-2xl">{t.footer.disclaimer}</p>
        </div>
      </div>
    </footer>
  );
}

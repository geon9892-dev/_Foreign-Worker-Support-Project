"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import type { ServiceDef } from "@/data/services";
import ServiceIcon from "./ServiceIcon";
import PriceTag from "./PriceTag";

export default function ServiceCard({ service }: { service: ServiceDef }) {
  const { t } = useLanguage();
  const text = t.services[service.slug];
  const minTier = service.tiers.reduce((min, tier) =>
    tier.priceKrw < min.priceKrw ? tier : min
  );

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl card-surface transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5"
    >
      {service.image ? (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={service.image}
            alt={text.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
          <div
            className={`absolute bottom-3 left-4 flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}
          >
            <ServiceIcon name={service.icon} className="size-5" />
          </div>
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6">
        {!service.image && (
          <div
            className={`flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-sm`}
          >
            <ServiceIcon name={service.icon} className="size-6" />
          </div>
        )}

        <h3 className={`text-lg font-bold ${service.image ? "" : "mt-5"}`}>{text.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-foreground/60">
          {text.shortDesc}
        </p>

        <div className="mt-6 flex items-end justify-between border-t border-border-subtle pt-4">
          <div>
            <p className="text-xs text-foreground/50">{t.common.startingPrice}</p>
            <p className="mt-0.5">
              {minTier.priceKrw > 0 && (
                <span className="mr-1 text-xs text-foreground/50">{t.common.from}</span>
              )}
              <PriceTag amount={minTier.priceKrw} size="sm" />
            </p>
          </div>
          <span className="flex size-9 items-center justify-center rounded-full bg-surface-muted text-foreground/60 transition-all group-hover:bg-foreground group-hover:text-background">
            <ArrowUpRight className="size-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

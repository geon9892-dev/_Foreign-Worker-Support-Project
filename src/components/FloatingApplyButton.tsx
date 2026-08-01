"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircleHeart } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export default function FloatingApplyButton() {
  const { t } = useLanguage();
  const pathname = usePathname();

  if (pathname?.startsWith("/apply")) return null;

  return (
    <Link
      href="/services"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full gradient-brand px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-mid/30 hover:opacity-90 transition-opacity sm:bottom-8 sm:right-8"
    >
      <MessageCircleHeart className="size-4.5" />
      {t.nav.applyNow}
    </Link>
  );
}

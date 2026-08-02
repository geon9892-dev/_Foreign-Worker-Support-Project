"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { languages } from "@/lib/i18n/languages";

export default function LanguageSwitcher({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = languages.find((l) => l.code === lang) ?? languages[0];

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
          variant === "dark"
            ? "border-white/20 text-white hover:bg-white/10"
            : "border-border-subtle text-foreground hover:bg-surface-muted"
        }`}
      >
        <Globe className="size-4" />
        <span className="hidden sm:inline">{current.flag} {current.nativeLabel}</span>
        <span className="sm:hidden">{current.flag}</span>
        <ChevronDown className={`size-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-56 overflow-hidden rounded-2xl border border-border-subtle bg-surface p-1.5 shadow-xl shadow-black/5"
        >
          {languages.map((l) => (
            <button
              key={l.code}
              role="option"
              aria-selected={l.code === lang}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              className="flex w-full items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm hover:bg-surface-muted cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <span>{l.flag}</span>
                <span className="text-foreground">{l.nativeLabel}</span>
              </span>
              {l.code === lang && <Check className="size-4 text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

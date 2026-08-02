import type { LangCode } from "./types";

export interface LanguageMeta {
  code: LangCode;
  label: string;
  nativeLabel: string;
  flag: string;
}

export const languages: LanguageMeta[] = [
  { code: "ko", label: "Korean", nativeLabel: "한국어", flag: "🇰🇷" },
  { code: "en", label: "English", nativeLabel: "English", flag: "🇬🇧" },
  { code: "vi", label: "Vietnamese", nativeLabel: "Tiếng Việt", flag: "🇻🇳" },
  { code: "th", label: "Thai", nativeLabel: "ภาษาไทย", flag: "🇹🇭" },
  { code: "lo", label: "Lao", nativeLabel: "ພາສາລາວ", flag: "🇱🇦" },
  { code: "ne", label: "Nepali", nativeLabel: "नेपाली", flag: "🇳🇵" },
  { code: "id", label: "Indonesian", nativeLabel: "Bahasa Indonesia", flag: "🇮🇩" },
];

export const defaultLang: LangCode = "ko";

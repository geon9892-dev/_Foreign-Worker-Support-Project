import type { Dictionary, LangCode } from "./types";
import ko from "./dictionaries/ko";
import en from "./dictionaries/en";
import vi from "./dictionaries/vi";
import th from "./dictionaries/th";
import lo from "./dictionaries/lo";
import ne from "./dictionaries/ne";
import id from "./dictionaries/id";

export const dictionaries: Record<LangCode, Dictionary> = {
  ko,
  en,
  vi,
  th,
  lo,
  ne,
  id,
};

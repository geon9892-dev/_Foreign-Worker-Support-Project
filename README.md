# KoBridge (코브릿지)

한국에 거주하는 베트남·태국·라오스·네팔·인도네시아 등 아시아 이주민을 위한 다국어 생활 지원 플랫폼입니다. 이사, 은행계좌 개설, 행정처리(비자 연장/외국인등록증), 어학당 연결, 학교 연결, 비자 체크, 일자리 연결까지 7가지 핵심 서비스를 정찰제 가격으로 제공합니다.

## Tech stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS v4
- Custom i18n (한국어/English/Tiếng Việt/ภาษาไทย/ພາສາລາວ/नेपाली/Bahasa Indonesia) via React Context, persisted to `localStorage`
- React 19 Server Actions for the application/contact forms (submissions are written to `.data/*.json` for local development)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `src/data/services.ts` — service slugs, pricing tiers (fixed prices in KRW), icons
- `src/lib/i18n/` — language types, per-language dictionaries (`dictionaries/*.ts`), `LanguageProvider`/`useLanguage`
- `src/components/` — shared UI (Header, Footer, ServiceCard, PriceTag, forms, etc.)
- `src/app/` — routes: home, `/services`, `/services/[slug]`, `/apply/[slug]`, `/about`, `/contact`
- `src/app/actions.ts` — Server Actions for the application and contact forms

## Notes

- Form submissions are persisted to local JSON files under `.data/` (gitignored). This works for `next start` on a persistent server but **not** on a stateless/serverless deployment — swap in a real database or email/webhook integration before going to production.
- Machine-assisted translations for vi/th/lo/ne/id should be reviewed by native speakers before production use.

import type { Metadata } from "next";
import { Inter, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n/context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingApplyButton from "@/components/FloatingApplyButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-kr",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KoBridge — 한국 생활의 든든한 다리",
  description:
    "이사, 은행계좌, 비자, 학교, 일자리까지 — 아시아 이주민을 위한 다국어 생활 지원 플랫폼. Moving, banking, visas, schools and jobs support for migrants in Korea.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${inter.variable} ${notoSansKr.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <LanguageProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingApplyButton />
        </LanguageProvider>
      </body>
    </html>
  );
}

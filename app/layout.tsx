import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroToSite | בניית אתרים מקצועית",
  description: "בונים אתרים מודרניים, מהירים ומרשימים שמביאים לקוחות אמיתיים לעסק שלך. דפי נחיתה, חנויות אונליין, אתרי תדמית.",
  keywords: "בניית אתרים, עיצוב אתרים, חנות אונליין, דף נחיתה, SEO, פיתוח אתרים, ישראל",
  authors: [{ name: "לידור", url: "https://zerotosite.co.il" }],
  openGraph: {
    title: "ZeroToSite | בניית אתרים מקצועית",
    description: "בונים אתרים מודרניים שמביאים לקוחות אמיתיים לעסק שלך",
    url: "https://zerotosite.co.il",
    siteName: "ZeroToSite",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroToSite | בניית אתרים מקצועית",
    description: "בונים אתרים מודרניים שמביאים לקוחות אמיתיים לעסק שלך",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

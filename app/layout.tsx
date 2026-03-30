import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "ZeroToSite | לידור — בניית אתרים ודפי נחיתה",
  description: "לידור בונה אתרים ודפי נחיתה שמביאים לקוחות אמיתיים. מסירה תוך 7 ימים, מחיר הוגן, תוצאות מדידות. דפי נחיתה מ-₪800, אתרי תדמית מ-₪2,500.",
  keywords: "בניית אתרים, דף נחיתה, עיצוב אתרים, חנות אונליין, SEO, פיתוח אתרים, ישראל, לידור, zerotosite",
  authors: [{ name: "לידור", url: "https://zerotosite.co.il" }],
  metadataBase: new URL("https://zerotosite.co.il"),
  alternates: { canonical: "https://zerotosite.co.il" },
  openGraph: {
    title: "ZeroToSite | לידור — בניית אתרים ודפי נחיתה",
    description: "אתרים ודפי נחיתה שמביאים לקוחות אמיתיים. מסירה תוך 7 ימים.",
    url: "https://zerotosite.co.il",
    siteName: "ZeroToSite",
    locale: "he_IL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeroToSite | לידור — בניית אתרים ודפי נחיתה",
    description: "אתרים ודפי נחיתה שמביאים לקוחות אמיתיים. מסירה תוך 7 ימים.",
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

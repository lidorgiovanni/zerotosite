import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZeroToSite | בניית אתרים מקצועית",
  description: "בונים אתרים מודרניים, מהירים ומרשימים שמביאים לקוחות אמיתיים לעסק שלך",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="he">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import he from "@/messages/he.json";
import en from "@/messages/en.json";

type Lang = "he" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");
  const t = lang === "he" ? he : en;

  return (
    <main dir={lang === "he" ? "rtl" : "ltr"}>
      <Navbar lang={lang} t={t.nav} onLangChange={setLang} />
      <Hero lang={lang} t={t.hero} />
      <Services lang={lang} t={t.services} />
      <Portfolio lang={lang} />
      <Pricing lang={lang} t={t.pricing} />
      <Contact lang={lang} t={t.contact} />
      <footer className="bg-slate-950 text-slate-500 text-center text-sm py-6">
        © {new Date().getFullYear()} ZeroToSite — לידור. {t.footer.rights}.
      </footer>
    </main>
  );
}

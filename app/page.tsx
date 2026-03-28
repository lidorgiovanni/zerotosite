"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
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
      <Process lang={lang} />
      <Portfolio lang={lang} />
      <Testimonials lang={lang} />
      <Pricing lang={lang} t={t.pricing} />
      <Contact lang={lang} t={t.contact} />
      <footer className="bg-slate-950 text-slate-500 text-center text-sm py-8">
        <div className="mb-2 text-xl font-black text-white">
          Zero<span className="text-sky-400">To</span>Site
        </div>
        © {new Date().getFullYear()} ZeroToSite — לידור. {t.footer.rights}.
      </footer>
    </main>
  );
}

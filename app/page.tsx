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
import WhatsAppButton from "@/components/WhatsAppButton";
import he from "@/messages/he.json";
import en from "@/messages/en.json";
import { MessageCircle, Phone, Mail, Globe } from "lucide-react";

const WHATSAPP = "972543495645";

type Lang = "he" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");
  const t = lang === "he" ? he : en;
  const isRtl = lang === "he";

  return (
    <main dir={isRtl ? "rtl" : "ltr"}>
      <Navbar lang={lang} t={t.nav} onLangChange={setLang} />
      <Hero lang={lang} t={t.hero} />
      <Services lang={lang} t={t.services} />
      <Process lang={lang} />
      <Portfolio lang={lang} />
      <Testimonials lang={lang} />
      <Pricing lang={lang} t={t.pricing} />
      <Contact lang={lang} t={t.contact} />
      <WhatsAppButton lang={lang} />

      {/* CTA strip */}
      <section className="relative bg-[#020817] py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.15)_0%,transparent_70%)]" />
        <div className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
        <div className={`relative max-w-3xl mx-auto px-6 text-center ${isRtl ? "rtl" : "ltr"}`}>
          <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            {isRtl ? "זמינים עכשיו" : "Available Now"}
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            {isRtl ? "מוכן לאתר שמביא לקוחות?" : "Ready for a site that converts?"}
          </h2>
          <p className="text-slate-400 text-xl mb-10">
            {isRtl ? "שיחת ייעוץ חינמית ללא התחייבות — בואו נבנה משהו מדהים ביחד" : "Free consultation, no commitment — let's build something amazing together"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-black px-10 py-5 rounded-2xl text-lg hover:scale-[1.03] transition-all shadow-2xl shadow-sky-500/25"
            >
              <MessageCircle size={22} />
              {isRtl ? "שלח הודעה עכשיו" : "Send a Message Now"}
            </a>
            <a
              href="tel:+972543495645"
              className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all"
            >
              <Phone size={20} />
              054-349-5645
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`bg-slate-950 text-slate-400 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
            {/* brand */}
            <div>
              <div className="text-2xl font-black text-white mb-3">
                Zero<span className="text-sky-400">To</span>Site
              </div>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
                {isRtl
                  ? "בונים אתרים מודרניים שמביאים לקוחות אמיתיים לעסק שלך."
                  : "Building modern websites that bring real customers to your business."}
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { icon: Globe, href: "#" },
                  { icon: Phone, href: "tel:+972543495645" },
                  { icon: Mail, href: "mailto:lidor@zerotosite.co.il" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-9 h-9 bg-slate-800 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <Icon size={16} className="text-slate-400 hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* links */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">{isRtl ? "ניווט מהיר" : "Quick Links"}</h4>
              <ul className="space-y-2.5">
                {[
                  { label: t.nav.services, href: "#services" },
                  { label: t.nav.portfolio, href: "#portfolio" },
                  { label: t.nav.pricing, href: "#pricing" },
                  { label: t.nav.contact, href: "#contact" },
                ].map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-sky-400 transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm">{isRtl ? "יצירת קשר" : "Contact"}</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2.5 text-sm text-slate-500">
                  <Phone size={14} className="text-sky-400 flex-shrink-0" />
                  054-349-5645
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-500">
                  <Mail size={14} className="text-sky-400 flex-shrink-0" />
                  lidor@zerotosite.co.il
                </li>
                <li className="flex items-center gap-2.5 text-sm text-slate-500">
                  <MessageCircle size={14} className="text-sky-400 flex-shrink-0" />
                  WhatsApp
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span>© {new Date().getFullYear()} ZeroToSite — לידור. {t.footer.rights}.</span>
            <span className="text-slate-700">
              {isRtl ? "עוצב ופותח בישראל 🇮🇱" : "Designed & built in Israel 🇮🇱"}
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

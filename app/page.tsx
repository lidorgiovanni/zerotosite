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
import { MessageCircle, Phone, Mail, Instagram, Facebook, Linkedin } from "lucide-react";

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
      <section className="bg-gradient-to-r from-sky-600 to-blue-700 py-16">
        <div className={`max-w-4xl mx-auto px-6 text-center ${isRtl ? "rtl" : "ltr"}`}>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            {isRtl ? "מוכן להתחיל?" : "Ready to Start?"}
          </h2>
          <p className="text-sky-100 text-lg mb-8">
            {isRtl ? "שיחת ייעוץ חינמית ללא התחייבות — בואו נבנה משהו מדהים ביחד" : "Free consultation, no commitment — let's build something amazing together"}
          </p>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-all shadow-xl"
          >
            <MessageCircle size={20} />
            {isRtl ? "שלח הודעה עכשיו" : "Send a Message Now"}
          </a>
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
                  { icon: Instagram, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
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

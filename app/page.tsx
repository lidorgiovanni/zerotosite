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
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Globe, ArrowLeft, ArrowRight } from "lucide-react";

const WHATSAPP = "972543495645";
type Lang = "he" | "en";

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");
  const t = lang === "he" ? he : en;
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

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

      {/* ── FINAL CTA ── */}
      <section className={`relative bg-[#030712] py-32 overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
        {/* big glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(14,165,233,0.18),transparent)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

        {/* spinning rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] animate-spin-slow pointer-events-none">
          <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
            {isRtl ? "זמינים עכשיו" : "Available Now"}
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black text-white mb-6 leading-[1.05] tracking-tight">
            {isRtl ? (
              <>מוכן לאתר<br /><span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">שמביא לקוחות?</span></>
            ) : (
              <>Ready for a site<br /><span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">that converts?</span></>
            )}
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl mb-12 leading-relaxed">
            {isRtl ? "שיחת ייעוץ חינמית ללא התחייבות — בואו נבנה משהו מדהים ביחד" : "Free consultation, no commitment — let's build something amazing together"}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-10 py-5 rounded-2xl text-lg hover:scale-[1.04] transition-all shadow-2xl shadow-sky-500/30 animate-beam animate-glow">
              <MessageCircle size={22} />
              {isRtl ? "שלח הודעה עכשיו" : "Send a Message Now"}
            </a>
            <a href="tel:+972543495645"
              className="inline-flex items-center justify-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all">
              <Phone size={20} />
              054-349-5645
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`bg-[#020817] ${isRtl ? "rtl" : "ltr"}`}>
        {/* gradient top border */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* brand */}
            <div>
              <div className="text-2xl font-black text-white mb-3">
                Zero<span className="text-sky-400">To</span>Site
              </div>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs mb-6">
                {isRtl ? "בונים אתרים מודרניים שמביאים לקוחות אמיתיים לעסק שלך." : "Building modern websites that bring real customers to your business."}
              </p>
              <div className="flex gap-2">
                {[{ icon: Globe, href: "#" }, { icon: Phone, href: "tel:+972543495645" }, { icon: Mail, href: "mailto:lidor@zerotosite.co.il" }].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} className="w-9 h-9 bg-white/5 hover:bg-sky-500 border border-white/8 hover:border-sky-500 rounded-xl flex items-center justify-center transition-all group">
                    <Icon size={15} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* links */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm">{isRtl ? "ניווט מהיר" : "Quick Links"}</h4>
              <ul className="space-y-3">
                {[
                  { label: t.nav.services, href: "#services" },
                  { label: t.nav.portfolio, href: "#portfolio" },
                  { label: t.nav.pricing, href: "#pricing" },
                  { label: t.nav.contact, href: "#contact" },
                ].map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                      <Arrow size={12} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm">{isRtl ? "יצירת קשר" : "Contact"}</h4>
              <ul className="space-y-3">
                {[
                  { icon: Phone, val: "054-349-5645" },
                  { icon: Mail, val: "lidor@zerotosite.co.il" },
                  { icon: MessageCircle, val: "WhatsApp" },
                ].map(({ icon: Icon, val }) => (
                  <li key={val} className="flex items-center gap-2.5 text-sm text-slate-500">
                    <Icon size={13} className="text-sky-400 flex-shrink-0" />
                    {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span>© {new Date().getFullYear()} ZeroToSite — לידור. {t.footer.rights}.</span>
            <span>{isRtl ? "עוצב ופותח בישראל 🇮🇱" : "Designed & built in Israel 🇮🇱"}</span>
          </div>
        </div>
      </footer>
    </main>
  );
}

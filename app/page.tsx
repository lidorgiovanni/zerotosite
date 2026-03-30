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
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Globe, ArrowLeft, ArrowRight, Star, Shield, Zap, Clock, CheckCircle } from "lucide-react";

const WHATSAPP = "972543495645";
type Lang = "he" | "en";

const marqueeItemsHe = [
  { icon: Star,         text: "5.0 דירוג ממוצע" },
  { icon: Zap,          text: "מסירה תוך 7 ימים" },
  { icon: Shield,       text: "100% שביעות רצון" },
  { icon: Clock,        text: "מענה תוך שעה" },
  { icon: CheckCircle,  text: "50+ פרויקטים" },
  { icon: Zap,          text: "ללא תשלום מראש" },
  { icon: Shield,       text: "קוד נקי ומהיר" },
  { icon: Star,         text: "תמיכה אחרי השקה" },
];

const marqueeItemsEn = [
  { icon: Star,         text: "5.0 Average Rating" },
  { icon: Zap,          text: "7-Day Delivery" },
  { icon: Shield,       text: "100% Satisfaction" },
  { icon: Clock,        text: "1-Hour Response" },
  { icon: CheckCircle,  text: "50+ Projects" },
  { icon: Zap,          text: "No Upfront Payment" },
  { icon: Shield,       text: "Clean Fast Code" },
  { icon: Star,         text: "Post-Launch Support" },
];

export default function Home() {
  const [lang, setLang] = useState<Lang>("he");
  const t = lang === "he" ? he : en;
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const marqueeItems = isRtl ? marqueeItemsHe : marqueeItemsEn;

  return (
    <main dir={isRtl ? "rtl" : "ltr"}>
      <Navbar lang={lang} t={t.nav} onLangChange={setLang} />
      <Hero lang={lang} t={t.hero} />

      {/* ── MARQUEE TRUST BAR ── */}
      <div className="bg-[#0a0f1e] border-y border-white/6 py-3.5 overflow-hidden select-none">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => {
            const Icon = item.icon;
            return (
              <span key={i} className="inline-flex items-center gap-2 text-slate-500 text-sm font-medium px-7">
                <Icon size={13} className="text-sky-400 flex-shrink-0" />
                {item.text}
                <span className="ms-7 text-white/8">✦</span>
              </span>
            );
          })}
        </div>
      </div>

      <Services lang={lang} t={t.services} />
      <Process lang={lang} />
      <Portfolio lang={lang} />
      <About lang={lang} />
      <Testimonials lang={lang} />
      <Pricing lang={lang} t={t.pricing} />
      <FAQ lang={lang} />
      <Contact lang={lang} t={t.contact} />
      <WhatsAppButton lang={lang} />

      {/* ── FINAL CTA ── */}
      <section className={`relative bg-[#030712] py-36 overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
        {/* bg layers */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_50%,rgba(14,165,233,0.13),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_80%,rgba(139,92,246,0.08),transparent)]" />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.045) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
        {/* spinning ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.035] animate-spin-slow pointer-events-none">
          <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-[0.025] pointer-events-none" style={{ animation: "spin-slow 40s linear infinite reverse" }}>
          <div className="w-full h-full rounded-full border border-violet-400" />
        </div>

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {isRtl ? "זמין לפרויקטים חדשים" : "Available for new projects"}
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="font-black text-white mb-6 leading-[1.05] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}>
            {isRtl ? (
              <>מוכן לאתר<br /><span className="text-shimmer">שמביא לקוחות?</span></>
            ) : (
              <>Ready for a site<br /><span className="text-shimmer">that converts?</span></>
            )}
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl mb-12 leading-relaxed">
            {isRtl
              ? "שיחת ייעוץ חינמית ב-15 דקות — אני אגיד לך בדיוק מה האתר שלך צריך"
              : "Free 15-min consultation — I'll tell you exactly what your site needs"}
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.18 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="btn-beam inline-flex items-center justify-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-10 py-5 rounded-2xl text-lg hover:scale-[1.04] transition-all shadow-2xl shadow-sky-500/30">
              <MessageCircle size={22} />
              {isRtl ? "שלח הודעה עכשיו" : "Send a Message Now"}
            </a>
            <a href="tel:+972543495645"
              className="inline-flex items-center justify-center gap-2.5 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all">
              <Phone size={20} />
              054-349-5645
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-5 text-slate-600 text-sm">
            {(isRtl
              ? ["✓ ללא התחייבות", "✓ מענה תוך שעה", "✓ הצעת מחיר חינמית", "✓ ללא תשלום מראש"]
              : ["✓ No commitment", "✓ Reply within 1 hour", "✓ Free quote", "✓ No upfront payment"]
            ).map(item => <span key={item}>{item}</span>)}
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`bg-[#020817] ${isRtl ? "rtl" : "ltr"}`}>
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/35 to-transparent" />

        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

            {/* brand */}
            <div>
              <div className="text-2xl font-black text-white mb-3">
                Zero<span className="text-sky-400">To</span>Site
              </div>
              <p className="text-sm leading-relaxed text-slate-500 max-w-xs mb-6">
                {isRtl
                  ? "בונה אתרים שמביאים לקוחות אמיתיים. לא רק נראים יפה."
                  : "Building websites that bring real customers. Not just look pretty."}
              </p>
              <div className="flex gap-2">
                {[
                  { icon: Globe, href: "#" },
                  { icon: Phone, href: "tel:+972543495645" },
                  { icon: Mail, href: "mailto:lidor@zerotosite.co.il" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href}
                    className="w-9 h-9 bg-white/5 hover:bg-sky-500 border border-white/8 hover:border-sky-500 rounded-xl flex items-center justify-center transition-all duration-200 group">
                    <Icon size={15} className="text-slate-500 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* nav */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm tracking-wide">{isRtl ? "ניווט" : "Navigation"}</h4>
              <ul className="space-y-3">
                {[
                  { label: t.nav.services, href: "#services" },
                  { label: t.nav.portfolio, href: "#portfolio" },
                  { label: t.nav.pricing, href: "#pricing" },
                  { label: t.nav.contact, href: "#contact" },
                ].map(l => (
                  <li key={l.href}>
                    <a href={l.href} className="text-sm text-slate-500 hover:text-sky-400 transition-colors flex items-center gap-1.5 group">
                      <Arrow size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-sky-400 flex-shrink-0" />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* contact */}
            <div>
              <h4 className="text-white font-bold mb-5 text-sm tracking-wide">{isRtl ? "יצירת קשר" : "Contact"}</h4>
              <ul className="space-y-3">
                {[
                  { icon: Phone, val: "054-349-5645", href: "tel:+972543495645" },
                  { icon: Mail, val: "lidor@zerotosite.co.il", href: "mailto:lidor@zerotosite.co.il" },
                  { icon: MessageCircle, val: "WhatsApp", href: `https://wa.me/${WHATSAPP}` },
                ].map(({ icon: Icon, val, href }) => (
                  <li key={val}>
                    <a href={href} className="flex items-center gap-2.5 text-sm text-slate-500 hover:text-sky-400 transition-colors group">
                      <Icon size={13} className="text-sky-400/70 group-hover:text-sky-400 flex-shrink-0 transition-colors" />
                      {val}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-white/6 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <span>© {new Date().getFullYear()} ZeroToSite — לידור. {t.footer.rights}.</span>
            <span className="flex items-center gap-1.5">
              {isRtl ? "עוצב ופותח בישראל" : "Designed & built in Israel"} 🇮🇱
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

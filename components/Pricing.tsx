"use client";
import { motion } from "framer-motion";
import { Check, Zap, ArrowLeft, ArrowRight, Clock, MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface PricingProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; popular: string; cta: string; plans: { name: string; price: string; desc: string; features: string[] }[] };
}

export default function Pricing({ lang, t }: PricingProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.08),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "תמחור" : "Pricing"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-5">
            {t.title}
          </motion.h2>
          <p className="text-slate-400 text-xl">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  isPopular
                    ? "bg-sky-500 scale-[1.03] z-10"
                    : "card-gradient-border hover:scale-[1.01]"
                }`}
                style={isPopular ? { boxShadow: "0 0 0 1px rgba(14,165,233,0.6), 0 40px 100px rgba(14,165,233,0.35)" } : {}}>

                {isPopular && (
                  <>
                    <div className="absolute top-0 left-6 right-6 h-px bg-white/30" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-sky-600 text-xs font-black px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl whitespace-nowrap">
                      <Zap size={11} className="fill-sky-500 text-sky-500" /> {t.popular}
                    </div>
                  </>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className="text-xl font-black mb-1.5 text-white">{plan.name}</h3>
                    <p className={`text-sm ${isPopular ? "text-sky-100" : "text-slate-400"}`}>{plan.desc}</p>
                  </div>

                  <div className="mb-2">
                    <span className="text-6xl font-black leading-none text-white">₪{plan.price}</span>
                    <div className={`text-xs mt-2 flex items-center gap-1.5 ${isPopular ? "text-sky-100" : "text-slate-500"}`}>
                      <Clock size={11} />
                      {isRtl ? "תשלום חד פעמי — ללא דמי מנוי" : "One-time payment — no subscription"}
                    </div>
                  </div>

                  <div className={`my-6 h-px ${isPopular ? "bg-white/20" : "bg-white/8"}`} />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isPopular ? "bg-white/25" : "bg-sky-500/15"}`}>
                          <Check size={11} className={isPopular ? "text-white" : "text-sky-400"} />
                        </div>
                        <span className={`text-sm leading-relaxed ${isPopular ? "text-sky-50" : "text-slate-300"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                    className={`btn-beam flex items-center justify-center gap-2 font-black py-4 rounded-2xl transition-all hover:scale-[1.02] text-base ${
                      isPopular
                        ? "bg-white text-sky-600 hover:bg-sky-50 shadow-lg"
                        : "bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 border border-sky-500/25"
                    }`}>
                    {t.cta} <Arrow size={17} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* guarantee strip */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 card-gradient-border rounded-3xl p-6">
          <div className={`flex flex-col md:flex-row items-center gap-6 ${isRtl ? "text-right" : "text-left"}`}>
            <div className="text-4xl flex-shrink-0">🛡️</div>
            <div className="flex-1">
              <div className="font-black text-white text-lg mb-1">
                {isRtl ? "ערבות שביעות רצון מלאה" : "Full Satisfaction Guarantee"}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isRtl
                  ? "אם לא מרוצה מהתוצאה — לא משלם. פשוט כך. אני עובד עד שאתה מרוצה."
                  : "If you're not satisfied with the result — you don't pay. Simple as that. I work until you're happy."}
              </p>
            </div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="btn-beam flex-shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-black px-6 py-3.5 rounded-2xl transition-all hover:scale-[1.03] whitespace-nowrap text-sm shadow-lg shadow-sky-500/25">
              <MessageCircle size={15} />
              {isRtl ? "בואו נדבר" : "Let's Talk"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

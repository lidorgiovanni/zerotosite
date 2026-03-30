"use client";
import { motion } from "framer-motion";
import { Check, Zap, ArrowLeft, ArrowRight, Clock } from "lucide-react";

const WHATSAPP = "972543495645";

interface PricingProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; popular: string; cta: string; plans: { name: string; price: string; desc: string; features: string[] }[] };
}

export default function Pricing({ lang, t }: PricingProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className={`py-28 bg-[#f8faff] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.07),transparent)]" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "תמחור" : "Pricing"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-5">
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-xl">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  isPopular
                    ? "bg-[#030712] shadow-2xl scale-[1.03] z-10"
                    : "bg-white border border-slate-200 hover:border-sky-200 hover:shadow-xl shadow-sky-50"
                }`}
                style={isPopular ? { boxShadow: "0 0 0 1px rgba(14,165,233,0.4), 0 40px 100px rgba(14,165,233,0.2)" } : {}}>

                {isPopular && (
                  <>
                    {/* gradient top border */}
                    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-black px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl shadow-sky-500/30 whitespace-nowrap">
                      <Zap size={11} className="fill-white" /> {t.popular}
                    </div>
                  </>
                )}
                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-6">
                    <h3 className={`text-xl font-black mb-1.5 ${isPopular ? "text-white" : "text-slate-900"}`}>{plan.name}</h3>
                    <p className={`text-sm ${isPopular ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>
                  </div>

                  {/* price */}
                  <div className="mb-2">
                    <div className="flex items-end gap-1.5">
                      <span className={`text-6xl font-black leading-none ${isPopular ? "text-white" : "text-slate-900"}`}>
                        ₪{plan.price}
                      </span>
                    </div>
                    <div className={`text-xs mt-2 flex items-center gap-1.5 ${isPopular ? "text-slate-500" : "text-slate-400"}`}>
                      <Clock size={11} />
                      {isRtl ? "תשלום חד פעמי — ללא דמי מנוי" : "One-time payment — no subscription"}
                    </div>
                  </div>

                  <div className={`my-6 h-px ${isPopular ? "bg-white/8" : "bg-slate-100"}`} />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isPopular ? "bg-sky-500/20" : "bg-sky-50"}`}>
                          <Check size={11} className={isPopular ? "text-sky-400" : "text-sky-500"} />
                        </div>
                        <span className={`text-sm leading-relaxed ${isPopular ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                    className={`btn-beam flex items-center justify-center gap-2 font-black py-4 rounded-2xl transition-all hover:scale-[1.02] text-base ${
                      isPopular
                        ? "bg-sky-500 hover:bg-sky-400 text-white shadow-xl shadow-sky-500/30"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
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
          className="mt-12 bg-white border border-sky-100 rounded-3xl p-6">
          <div className={`flex flex-col md:flex-row items-center gap-6 ${isRtl ? "text-right" : "text-left"}`}>
            <div className="text-4xl flex-shrink-0">🛡️</div>
            <div className="flex-1">
              <div className="font-black text-slate-900 text-lg mb-1">
                {isRtl ? "ערבות שביעות רצון מלאה" : "Full Satisfaction Guarantee"}
              </div>
              <p className="text-slate-500 text-sm leading-relaxed">
                {isRtl
                  ? "אם לא מרוצה מהתוצאה — לא משלם. פשוט כך. אני עובד עד שאתה מרוצה, כי המוניטין שלי שווה יותר מכל תשלום."
                  : "If you're not satisfied with the result — you don't pay. Simple as that. I work until you're happy, because my reputation is worth more than any payment."}
              </p>
            </div>
            <a href={`https://wa.me/972543495645`} target="_blank" rel="noopener noreferrer"
              className="btn-beam flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-6 py-3.5 rounded-2xl transition-all hover:scale-[1.03] whitespace-nowrap text-sm">
              {isRtl ? "בואו נדבר" : "Let's Talk"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

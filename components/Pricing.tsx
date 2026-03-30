"use client";
import { motion } from "framer-motion";
import { Check, Zap, ArrowLeft, ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(14,165,233,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {isRtl ? "תמחור" : "Pricing"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col transition-all duration-300 ${
                  isPopular
                    ? "bg-sky-500 scale-[1.04] shadow-2xl"
                    : "bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/18"
                }`}
                style={isPopular ? { boxShadow: "0 0 0 1px rgba(14,165,233,0.5), 0 30px 80px rgba(14,165,233,0.35)" } : {}}>

                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-sky-600 text-xs font-black px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl whitespace-nowrap">
                    <Zap size={11} className="fill-sky-500 text-sky-500" /> {t.popular}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-black text-white mb-1">{plan.name}</h3>
                  <p className={`text-sm ${isPopular ? "text-sky-100" : "text-slate-500"}`}>{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <span className="text-5xl font-black text-white">₪{plan.price}</span>
                  <span className={`text-sm ms-2 ${isPopular ? "text-sky-100" : "text-slate-600"}`}>
                    {isRtl ? "חד פעמי" : "one-time"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? "bg-white/25" : "bg-sky-500/15"}`}>
                        <Check size={11} className={isPopular ? "text-white" : "text-sky-400"} />
                      </div>
                      <span className={`text-sm ${isPopular ? "text-sky-50" : "text-slate-400"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-bold py-4 rounded-2xl transition-all hover:scale-[1.02] ${
                    isPopular
                      ? "bg-white text-sky-600 hover:bg-sky-50 shadow-lg"
                      : "bg-white/8 hover:bg-white/14 text-white border border-white/12"
                  }`}>
                  {t.cta} <Arrow size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-slate-600 text-sm mt-10">
          {isRtl ? "💬 לא בטוח? שלח הודעה ונמצא יחד את הפתרון המתאים לך" : "💬 Not sure? Message us and we'll find the right plan together"}
        </motion.p>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}

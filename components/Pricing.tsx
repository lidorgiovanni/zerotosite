"use client";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const WHATSAPP = "972543495645";

interface PricingProps {
  lang: "he" | "en";
  t: {
    title: string;
    subtitle: string;
    popular: string;
    cta: string;
    plans: { name: string; price: string; desc: string; features: string[] }[];
  };
}

export default function Pricing({ lang, t }: PricingProps) {
  const isRtl = lang === "he";

  return (
    <section id="pricing" className={`py-24 bg-slate-50 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            {isRtl ? "תמחור" : "Pricing"}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                  isPopular
                    ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl shadow-slate-900/30 scale-105 border border-sky-500/20"
                    : "bg-white border border-slate-100 hover:shadow-lg hover:border-slate-200"
                }`}
              >
                {/* shimmer on popular */}
                {isPopular && (
                  <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                    <div className="animate-shimmer absolute inset-0" />
                  </div>
                )}

                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-sky-500/30">
                    <Zap size={11} className="fill-white" />
                    {t.popular}
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${isPopular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${isPopular ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>
                </div>

                <div className="mb-8 flex items-end gap-1">
                  <span className={`text-5xl font-black ${isPopular ? "text-white" : "text-slate-900"}`}>
                    ₪{plan.price}
                  </span>
                  <span className={`text-sm mb-2 ${isPopular ? "text-slate-400" : "text-slate-400"}`}>
                    {isRtl ? "חד פעמי" : "one-time"}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${isPopular ? "bg-sky-500/20" : "bg-sky-50"}`}>
                        <Check size={12} className={isPopular ? "text-sky-400" : "text-sky-500"} />
                      </div>
                      <span className={`text-sm ${isPopular ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center font-bold py-3.5 rounded-xl transition-all hover:scale-[1.02] ${
                    isPopular
                      ? "bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/30"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 text-sm mt-10"
        >
          {isRtl ? "💬 לא בטוח איזה חבילה מתאימה לך? שלח הודעה ונעזור לך לבחור" : "💬 Not sure which plan fits you? Send a message and we'll help you choose"}
        </motion.p>
      </div>
    </section>
  );
}

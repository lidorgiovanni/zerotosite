"use client";
import { motion } from "framer-motion";
import { Check, Zap, ArrowLeft, ArrowRight } from "lucide-react";

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
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="pricing" className={`py-28 bg-slate-950 relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-sky-600/8 rounded-full blur-[120px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-widest mb-3"
          >
            {isRtl ? "תמחור" : "Pricing"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-sky-500 shadow-2xl shadow-sky-500/30 scale-[1.03]"
                    : "bg-white/5 border border-white/10 hover:bg-white/8 hover:border-white/15 transition-all"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-sky-600 text-xs font-black px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Zap size={11} className="fill-sky-500 text-sky-500" />
                    {t.popular}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-lg font-black mb-1 ${isPopular ? "text-white" : "text-white"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${isPopular ? "text-sky-100" : "text-slate-500"}`}>{plan.desc}</p>
                </div>

                <div className="mb-8">
                  <div className="flex items-end gap-1">
                    <span className={`text-5xl font-black ${isPopular ? "text-white" : "text-white"}`}>
                      ₪{plan.price}
                    </span>
                  </div>
                  <div className={`text-xs mt-1 ${isPopular ? "text-sky-100" : "text-slate-600"}`}>
                    {isRtl ? "תשלום חד פעמי" : "one-time payment"}
                  </div>
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

                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-2xl transition-all hover:scale-[1.02] ${
                    isPopular
                      ? "bg-white text-sky-600 hover:bg-sky-50 shadow-lg"
                      : "bg-white/10 hover:bg-white/15 text-white border border-white/10"
                  }`}
                >
                  {t.cta}
                  <Arrow size={16} />
                </a>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-sm">
            {isRtl
              ? "💬 לא בטוח? שלח הודעה ונמצא יחד את הפתרון המתאים לך"
              : "💬 Not sure? Send a message and we'll find the right solution together"}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

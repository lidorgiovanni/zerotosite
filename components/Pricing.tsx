"use client";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
  const currency = isRtl ? "₪" : "₪";

  return (
    <section id="pricing" className={`py-24 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.plans.map((plan, i) => {
            const isPopular = i === 1;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  isPopular
                    ? "bg-slate-900 text-white shadow-2xl scale-105"
                    : "bg-slate-50 border border-slate-100"
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    {t.popular}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className={`text-xl font-black mb-1 ${isPopular ? "text-white" : "text-slate-900"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${isPopular ? "text-slate-400" : "text-slate-500"}`}>{plan.desc}</p>
                </div>
                <div className="mb-8">
                  <span className={`text-5xl font-black ${isPopular ? "text-white" : "text-slate-900"}`}>
                    {currency}{plan.price}
                  </span>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <Check size={16} className={isPopular ? "text-sky-400" : "text-sky-500"} />
                      <span className={`text-sm ${isPopular ? "text-slate-300" : "text-slate-600"}`}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/${WHATSAPP}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center font-bold py-3 rounded-full transition-all ${
                    isPopular
                      ? "bg-sky-500 hover:bg-sky-400 text-white"
                      : "bg-slate-900 hover:bg-slate-800 text-white"
                  }`}
                >
                  {t.cta}
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

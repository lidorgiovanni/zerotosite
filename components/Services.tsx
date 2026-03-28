"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code } from "lucide-react";

const icons = [Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code];

interface ServicesProps {
  lang: "he" | "en";
  t: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
}

export default function Services({ lang, t }: ServicesProps) {
  const isRtl = lang === "he";

  return (
    <section id="services" className={`py-24 bg-white ${isRtl ? "rtl" : "ltr"}`}>
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-50 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-sky-50 group-hover:bg-sky-500 rounded-xl flex items-center justify-center mb-4 transition-colors">
                  <Icon size={22} className="text-sky-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code } from "lucide-react";

const icons = [Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code];
const iconColors = [
  "from-sky-400 to-blue-500",
  "from-violet-400 to-purple-500",
  "from-amber-400 to-orange-500",
  "from-pink-400 to-rose-500",
  "from-emerald-400 to-teal-500",
  "from-sky-400 to-cyan-500",
  "from-indigo-400 to-blue-500",
  "from-fuchsia-400 to-violet-500",
];

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
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-50 border border-sky-100 text-sky-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            {isRtl ? "השירותים שלנו" : "Our Services"}
          </motion.div>
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
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.items.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="group p-6 rounded-2xl border border-slate-100 hover:border-transparent hover:shadow-xl hover:shadow-slate-200/60 bg-white hover:bg-gradient-to-br hover:from-white hover:to-slate-50 transition-all duration-300 cursor-default"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${iconColors[i]} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

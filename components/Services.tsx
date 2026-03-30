"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  lang: "he" | "en";
  t: {
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
}

const featured = [
  {
    icon: Globe,
    gradient: "from-sky-500 to-blue-600",
    bg: "from-sky-50 to-blue-50",
    border: "border-sky-100",
    accent: "text-sky-600",
  },
  {
    icon: ShoppingCart,
    gradient: "from-violet-500 to-purple-600",
    bg: "from-violet-50 to-purple-50",
    border: "border-violet-100",
    accent: "text-violet-600",
  },
];

const smallIcons = [Zap, Palette, Search, Shield, Share2, Code];
const smallColors = [
  "bg-amber-50 text-amber-600 border-amber-100",
  "bg-pink-50 text-pink-600 border-pink-100",
  "bg-emerald-50 text-emerald-600 border-emerald-100",
  "bg-sky-50 text-sky-600 border-sky-100",
  "bg-indigo-50 text-indigo-600 border-indigo-100",
  "bg-fuchsia-50 text-fuchsia-600 border-fuchsia-100",
];

export default function Services({ lang, t }: ServicesProps) {
  const isRtl = lang === "he";

  return (
    <section id="services" className={`py-28 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-16 ${isRtl ? "text-right" : "text-left"} max-w-2xl ${isRtl ? "mr-0" : "ml-0"}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-3"
          >
            {isRtl ? "מה אנחנו עושים" : "What We Do"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4 leading-tight"
          >
            {t.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* 2 featured large cards */}
          {t.items.slice(0, 2).map((item, i) => {
            const f = featured[i];
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`group relative bg-gradient-to-br ${f.bg} border ${f.border} rounded-3xl p-8 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-400 cursor-default`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${f.gradient} opacity-5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity`} />
                <div className={`w-14 h-14 bg-gradient-to-br ${f.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={26} className="text-white" />
                </div>
                <h3 className="font-black text-slate-900 text-xl mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
                <div className={`mt-6 inline-flex items-center gap-1 text-sm font-bold ${f.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  {isRtl ? "קרא עוד" : "Learn more"} <ArrowUpRight size={14} />
                </div>
              </motion.div>
            );
          })}

          {/* 6 small cards */}
          {t.items.slice(2).map((item, i) => {
            const Icon = smallIcons[i];
            const colorClass = smallColors[i];
            return (
              <motion.div
                key={i + 2}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 2) * 0.07 }}
                className="group p-6 rounded-3xl border border-slate-100 bg-white hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 cursor-default"
              >
                <div className={`w-10 h-10 ${colorClass} border rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

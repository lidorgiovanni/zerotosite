"use client";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; items: { title: string; desc: string }[] };
}

const cards = [
  { icon: Globe, gradient: "from-sky-500 to-blue-600", glow: "rgba(14,165,233,0.25)", span: "lg:col-span-2" },
  { icon: ShoppingCart, gradient: "from-violet-500 to-purple-600", glow: "rgba(139,92,246,0.25)", span: "" },
  { icon: Zap, gradient: "from-amber-500 to-orange-500", glow: "rgba(245,158,11,0.2)", span: "" },
  { icon: Palette, gradient: "from-pink-500 to-rose-500", glow: "rgba(236,72,153,0.2)", span: "" },
  { icon: Search, gradient: "from-emerald-500 to-teal-500", glow: "rgba(16,185,129,0.2)", span: "lg:col-span-2" },
  { icon: Shield, gradient: "from-sky-400 to-cyan-500", glow: "rgba(6,182,212,0.2)", span: "" },
  { icon: Share2, gradient: "from-indigo-500 to-blue-500", glow: "rgba(99,102,241,0.2)", span: "" },
  { icon: Code, gradient: "from-fuchsia-500 to-violet-500", glow: "rgba(217,70,239,0.2)", span: "" },
];

export default function Services({ lang, t }: ServicesProps) {
  const isRtl = lang === "he";

  return (
    <section id="services" className={`py-28 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {isRtl ? "מה אנחנו עושים" : "What We Do"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-5 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-xl mx-auto">
            {t.subtitle}
          </motion.p>
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.items.map((item, i) => {
            const c = cards[i];
            const Icon = c.icon;
            const isFeatured = i === 0 || i === 4;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className={`group relative rounded-3xl overflow-hidden cursor-default ${c.span} ${isFeatured ? "min-h-[220px]" : "min-h-[180px]"}`}
                style={{ background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)", border: "1px solid #e2e8f0" }}
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${c.glow}, transparent 70%)` }} />

                <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                  <div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${c.gradient} rounded-2xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <h3 className={`font-black text-slate-900 mb-2 ${isFeatured ? "text-xl" : "text-base"}`}>{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`mt-4 flex items-center gap-1 text-sm font-bold bg-gradient-to-r ${c.gradient} bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0`}>
                    {isRtl ? "קרא עוד" : "Learn more"} <ArrowUpRight size={14} className={`bg-gradient-to-r ${c.gradient} bg-clip-text`} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

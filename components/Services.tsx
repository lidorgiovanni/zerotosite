"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { Globe, ShoppingCart, Zap, Palette, Search, Shield, Share2, Code } from "lucide-react";

interface ServicesProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; items: { title: string; desc: string }[] };
}

const meta = [
  { icon: Globe,        color: "#0ea5e9", num: "01" },
  { icon: ShoppingCart, color: "#8b5cf6", num: "02" },
  { icon: Zap,          color: "#f59e0b", num: "03" },
  { icon: Palette,      color: "#ec4899", num: "04" },
  { icon: Search,       color: "#10b981", num: "05" },
  { icon: Shield,       color: "#06b6d4", num: "06" },
  { icon: Share2,       color: "#6366f1", num: "07" },
  { icon: Code,         color: "#d946ef", num: "08" },
];

function ServiceCard({ item, m, isRtl, i }: { item: { title: string; desc: string }; m: typeof meta[0]; isRtl: boolean; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = m.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="spotlight card-gradient-border rounded-3xl p-7 group cursor-default transition-all duration-300 hover:scale-[1.02]"
    >
      <div className="relative z-10">
        {/* top row */}
        <div className="flex items-start justify-between mb-6">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: `${m.color}18`, border: `1px solid ${m.color}30` }}>
            <Icon size={22} style={{ color: m.color }} />
          </div>
          <span className="text-4xl font-black tabular-nums" style={{ color: `${m.color}18` }}>{m.num}</span>
        </div>
        <h3 className="text-white font-black text-lg mb-2 group-hover:text-sky-300 transition-colors duration-200">{item.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-200">{item.desc}</p>

        {/* bottom line */}
        <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }} />
      </div>
    </motion.div>
  );
}

export default function Services({ lang, t }: ServicesProps) {
  const isRtl = lang === "he";

  return (
    <section id="services" className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.07),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "מה אני בונה" : "What I Build"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-5 leading-tight">
            {t.title}
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-xl mx-auto">
            {t.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.items.map((item, i) => (
            <ServiceCard key={i} item={item} m={meta[i]} isRtl={isRtl} i={i} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

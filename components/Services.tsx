"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import { FileText, Globe, ShoppingCart, Palette, Search, Shield, Share2, Code, ArrowUpRight } from "lucide-react";

interface ServicesProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; items: { title: string; desc: string }[] };
}

const meta = [
  { icon: FileText,     color: "#0ea5e9", num: "01", featured: true  },
  { icon: Globe,        color: "#8b5cf6", num: "02", featured: true  },
  { icon: ShoppingCart, color: "#f59e0b", num: "03", featured: false },
  { icon: Palette,      color: "#ec4899", num: "04", featured: false },
  { icon: Search,       color: "#10b981", num: "05", featured: false },
  { icon: Shield,       color: "#06b6d4", num: "06", featured: false },
  { icon: Share2,       color: "#6366f1", num: "07", featured: false },
  { icon: Code,         color: "#d946ef", num: "08", featured: false },
];

function ServiceCard({ item, m, i }: { item: { title: string; desc: string }; m: typeof meta[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = m.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    ref.current!.style.setProperty("--x", `${e.clientX - rect.left}px`);
    ref.current!.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  if (m.featured) {
    return (
      <motion.div ref={ref}
        initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
        onMouseMove={handleMouseMove}
        className="spotlight card-gradient-border rounded-3xl p-8 group cursor-default transition-all duration-300 hover:scale-[1.02] relative overflow-hidden">
        {/* big number bg */}
        <div className="absolute top-4 right-6 text-8xl font-black pointer-events-none select-none"
          style={{ color: `${m.color}10` }}>{m.num}</div>
        <div className="relative z-10">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background: `${m.color}18`, border: `1.5px solid ${m.color}35` }}>
            <Icon size={26} style={{ color: m.color }} />
          </div>
          <h3 className="text-white font-black text-2xl mb-3 group-hover:text-sky-300 transition-colors">{item.title}</h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">{item.desc}</p>
          <div className="inline-flex items-center gap-1.5 text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
            style={{ color: m.color }}>
            {i === 0 ? "מ-₪800" : "מ-₪2,500"} <ArrowUpRight size={14} />
          </div>
          <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
            style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }} />
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      className="spotlight card-gradient-border rounded-3xl p-6 group cursor-default transition-all duration-300 hover:scale-[1.02]">
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-5">
          <div className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
            style={{ background: `${m.color}18`, border: `1px solid ${m.color}30` }}>
            <Icon size={20} style={{ color: m.color }} />
          </div>
          <span className="text-3xl font-black tabular-nums" style={{ color: `${m.color}15` }}>{m.num}</span>
        </div>
        <h3 className="text-white font-black text-base mb-2 group-hover:text-sky-300 transition-colors">{item.title}</h3>
        <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">{item.desc}</p>
        <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: `linear-gradient(90deg, ${m.color}, transparent)` }} />
      </div>
    </motion.div>
  );
}

export default function Services({ lang, t }: ServicesProps) {
  const isRtl = lang === "he";

  return (
    <section id="services" className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(14,165,233,0.08),transparent)]" />
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

        {/* featured row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {t.items.slice(0, 2).map((item, i) => (
            <ServiceCard key={i} item={item} m={meta[i]} i={i} />
          ))}
        </div>

        {/* small cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {t.items.slice(2).map((item, i) => (
            <ServiceCard key={i + 2} item={item} m={meta[i + 2]} i={i + 2} />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f8faff] to-transparent pointer-events-none" />
    </section>
  );
}

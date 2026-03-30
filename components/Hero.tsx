"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, TrendingUp, CheckCircle, Star, Zap } from "lucide-react";

const WHATSAPP = "972543495645";

interface HeroProps {
  lang: "he" | "en";
  t: { badge: string; title: string; titleHighlight: string; subtitle: string; cta: string; ctaSecondary: string };
}

const wordsHe = ["מושלם", "מהיר", "מרשים", "מקצועי"];
const wordsEn = ["Perfect", "Fast", "Stunning", "Professional"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let n = 0;
    const step = Math.ceil(to / 50);
    const t = setInterval(() => { n = Math.min(n + step, to); setCount(n); if (n >= to) clearInterval(t); }, 25);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ lang, t }: HeroProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const words = isRtl ? wordsHe : wordsEn;
  const [wi, setWi] = useState(0);
  useEffect(() => { const id = setInterval(() => setWi(i => (i + 1) % words.length), 2200); return () => clearInterval(id); }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">
      {/* layered background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(14,165,233,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,rgba(139,92,246,0.12),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* spinning ring decoration */}
      <div className="absolute top-1/2 right-[-200px] w-[600px] h-[600px] -translate-y-1/2 opacity-10 animate-spin-slow pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
      </div>
      <div className="absolute top-1/2 right-[-120px] w-[440px] h-[440px] -translate-y-1/2 opacity-8 animate-spin-slow pointer-events-none" style={{ animationDirection: "reverse", animationDuration: "30s" }}>
        <div className="w-full h-full rounded-full border border-violet-400" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-20 items-center">

          {/* ── TEXT SIDE ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <Sparkles size={13} className="animate-pulse" />
              {t.badge}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.8rem,6vw,5rem)] font-black text-white leading-[1.05] tracking-tight mb-6">
              {t.title}
              <br />
              <span className="relative">
                <AnimatePresence mode="wait">
                  <motion.span key={wi}
                    initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                    transition={{ duration: 0.4 }}
                    className="inline-block bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 bg-clip-text text-transparent animate-gradient">
                    {words[wi]}
                  </motion.span>
                </AnimatePresence>
                {/* underline glow */}
                <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-sky-500 to-violet-500 rounded-full opacity-60" />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-xl leading-relaxed mb-10 max-w-xl">
              {t.subtitle}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-3 mb-12">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all duration-200 hover:scale-[1.04] shadow-2xl shadow-sky-500/30 animate-beam">
                {t.cta} <Arrow size={18} />
              </a>
              <a href="#portfolio"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-200">
                {t.ctaSecondary}
              </a>
            </motion.div>

            {/* stats */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-white/8">
              {[
                { to: 50, suffix: "+", label: isRtl ? "פרויקטים" : "Projects" },
                { to: 100, suffix: "%", label: isRtl ? "שביעות רצון" : "Satisfaction" },
                { to: 7, suffix: isRtl ? " ימים" : "d", label: isRtl ? "זמן מסירה" : "Avg. Delivery" },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-3xl font-black text-white tabular-nums"><Counter to={s.to} suffix={s.suffix} /></div>
                  <div className="text-slate-500 text-sm mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── VISUAL SIDE ── */}
          <motion.div initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden lg:block relative">

            {/* glow */}
            <div className="absolute inset-[-40px] bg-sky-500/10 rounded-full blur-3xl" />

            {/* main card — browser */}
            <div className="relative bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              {/* titlebar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#161b22] border-b border-white/6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-4 bg-[#21262d] rounded-lg px-3 py-1.5 text-xs text-slate-500 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500/60 flex-shrink-0" />
                  zerotosite.co.il
                </div>
              </div>

              {/* page content */}
              <div className="p-5 space-y-4">
                {/* hero strip */}
                <div className="relative bg-gradient-to-br from-sky-600/25 via-blue-600/15 to-violet-600/20 rounded-2xl p-5 border border-white/6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl" />
                  <div className="h-2.5 w-20 bg-sky-400/70 rounded-full mb-3" />
                  <div className="h-4 w-44 bg-white/75 rounded-full mb-2" />
                  <div className="h-2.5 w-32 bg-slate-400/35 rounded-full mb-4" />
                  <div className="flex gap-2">
                    <div className="h-7 w-20 bg-sky-500 rounded-xl" />
                    <div className="h-7 w-16 bg-white/8 border border-white/10 rounded-xl" />
                  </div>
                </div>

                {/* service cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { g: "from-sky-500/20 to-blue-500/10", c: "bg-sky-400/20" },
                    { g: "from-violet-500/20 to-purple-500/10", c: "bg-violet-400/20" },
                    { g: "from-emerald-500/20 to-teal-500/10", c: "bg-emerald-400/20" },
                  ].map((x, i) => (
                    <div key={i} className={`bg-gradient-to-br ${x.g} rounded-xl p-3 border border-white/5`}>
                      <div className={`w-5 h-5 ${x.c} rounded-lg mb-2`} />
                      <div className="h-1.5 w-full bg-white/15 rounded-full mb-1" />
                      <div className="h-1.5 w-3/4 bg-white/8 rounded-full" />
                    </div>
                  ))}
                </div>

                {/* chart bar */}
                <div className="bg-white/4 border border-white/6 rounded-xl p-4">
                  <div className="flex items-end gap-1.5 h-12">
                    {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-sky-500/60 to-sky-400/30 rounded-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="flex justify-between mt-2">
                    <div className="h-1.5 w-6 bg-white/10 rounded-full" />
                    <div className="h-1.5 w-8 bg-sky-400/40 rounded-full" />
                  </div>
                </div>
              </div>
            </div>

            {/* floating card 1 — result */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-slate-100">
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={17} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500 font-medium">{isRtl ? "הזמנות אונליין" : "Online orders"}</div>
                <div className="text-emerald-600 font-black text-base">+40%</div>
              </div>
            </motion.div>

            {/* floating card 2 — rating */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -top-5 -right-6 bg-white rounded-2xl px-4 py-3 shadow-2xl border border-slate-100">
              <div className="flex gap-0.5 mb-1">
                {Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-[11px] font-black text-slate-800">{isRtl ? "לקוח מרוצה" : "Happy client"}</div>
            </motion.div>

            {/* floating card 3 — speed */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-1/2 -right-10 -translate-y-1/2 bg-sky-500 rounded-2xl px-3 py-2.5 shadow-2xl shadow-sky-500/30">
              <div className="flex items-center gap-1.5">
                <Zap size={13} className="text-white fill-white" />
                <span className="text-white text-xs font-black">{isRtl ? "7 ימים" : "7 days"}</span>
              </div>
              <div className="text-sky-100 text-[10px] mt-0.5">{isRtl ? "מסירה" : "delivery"}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom transition */}
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

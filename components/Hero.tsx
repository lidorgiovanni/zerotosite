"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, TrendingUp, Star, Zap, CheckCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface HeroProps {
  lang: "he" | "en";
  t: { badge: string; title: string; titleHighlight: string; subtitle: string; cta: string; ctaSecondary: string };
}

const wordsHe = ["להרוויח כסף", "להביא לקוחות", "לעבוד בשבילך", "לגדול איתך"];
const wordsEn = ["make money", "bring clients", "work for you", "grow with you"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const step = Math.ceil(to / 50);
    const t = setInterval(() => { cur = Math.min(cur + step, to); setN(cur); if (cur >= to) clearInterval(t); }, 20);
    return () => clearInterval(t);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Hero({ lang, t }: HeroProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const words = isRtl ? wordsHe : wordsEn;
  const [wi, setWi] = useState(0);
  useEffect(() => { const id = setInterval(() => setWi(i => (i + 1) % words.length), 2500); return () => clearInterval(id); }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">
      {/* bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(14,165,233,0.2),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_90%_90%,rgba(139,92,246,0.12),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* spinning rings */}
      <div className="absolute top-1/2 right-[-180px] -translate-y-1/2 w-[560px] h-[560px] opacity-[0.06] animate-spin-slow pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-16 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-16 items-center">

          {/* TEXT */}
          <div>
            {/* urgency badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 text-sky-300 text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

            {/* headline */}
            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[clamp(2.6rem,5.5vw,4.8rem)] font-black text-white leading-[1.08] tracking-tight mb-6">
              {t.title}
              <br />
              <span className="relative">
                <AnimatePresence mode="wait">
                  <motion.span key={wi}
                    initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -28, filter: "blur(10px)" }}
                    transition={{ duration: 0.38 }}
                    className="inline-block bg-gradient-to-r from-sky-400 via-blue-300 to-violet-400 bg-clip-text text-transparent">
                    {words[wi]}
                  </motion.span>
                </AnimatePresence>
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500 to-violet-500"
                  initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.7, duration: 0.6 }} />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-xl leading-relaxed mb-4 max-w-xl">
              {t.subtitle}
            </motion.p>

            {/* trust checklist */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-10">
              {(isRtl
                ? ["מסירה תוך 7 ימים", "ללא תשלום מראש", "תמיכה אחרי השקה"]
                : ["Delivered in 7 days", "No upfront payment", "Post-launch support"]
              ).map(item => (
                <span key={item} className="flex items-center gap-1.5 text-sm text-slate-400">
                  <CheckCircle size={14} className="text-sky-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }}
              className="flex flex-wrap gap-3 mb-12">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="relative overflow-hidden inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:scale-[1.04] shadow-2xl shadow-sky-500/30 animate-beam">
                {t.cta} <Arrow size={18} />
              </a>
              <a href="#portfolio"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/25 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                {t.ctaSecondary}
              </a>
            </motion.div>

            {/* social proof */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="flex items-center gap-4 pt-8 border-t border-white/8">
              {/* avatars */}
              <div className="flex -space-x-2">
                {["🧑‍💼", "👩‍💻", "👨‍🍳", "👩‍⚖️"].map((e, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border-2 border-[#030712] flex items-center justify-center text-base">
                    {e}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                </div>
                <div className="text-slate-400 text-xs">
                  {isRtl ? "50+ עסקים כבר בחרו בנו" : "50+ businesses already chose us"}
                </div>
              </div>
            </motion.div>
          </div>

          {/* VISUAL */}
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block relative">

            <div className="absolute inset-[-60px] bg-sky-500/8 rounded-full blur-3xl" />

            {/* browser */}
            <div className="relative bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-2xl animate-float">
              {/* titlebar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#161b22] border-b border-white/6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-3 bg-[#21262d] rounded-lg px-3 py-1.5 text-xs text-slate-500 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  zerotosite.co.il
                </div>
                <div className="text-slate-600 text-xs">100 / 100</div>
              </div>

              {/* content */}
              <div className="p-5 space-y-3.5">
                {/* hero strip */}
                <div className="relative bg-gradient-to-br from-sky-600/25 to-violet-600/15 rounded-2xl p-5 border border-white/6 overflow-hidden">
                  <div className="absolute top-0 right-0 w-28 h-28 bg-sky-400/10 rounded-full blur-2xl" />
                  <div className="h-2 w-16 bg-sky-400/60 rounded-full mb-3" />
                  <div className="h-4 w-40 bg-white/80 rounded-full mb-2" />
                  <div className="h-2 w-28 bg-slate-400/30 rounded-full mb-4" />
                  <div className="flex gap-2">
                    <div className="h-7 w-20 bg-sky-500 rounded-xl" />
                    <div className="h-7 w-16 bg-white/8 border border-white/10 rounded-xl" />
                  </div>
                </div>

                {/* 3 cards */}
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { g: "from-sky-500/20 to-blue-500/10", c: "bg-sky-400/25" },
                    { g: "from-violet-500/20 to-purple-500/10", c: "bg-violet-400/25" },
                    { g: "from-emerald-500/20 to-teal-500/10", c: "bg-emerald-400/25" },
                  ].map((x, i) => (
                    <div key={i} className={`bg-gradient-to-br ${x.g} rounded-xl p-3 border border-white/5`}>
                      <div className={`w-5 h-5 ${x.c} rounded-lg mb-2`} />
                      <div className="h-1.5 w-full bg-white/15 rounded-full mb-1" />
                      <div className="h-1.5 w-3/4 bg-white/8 rounded-full" />
                    </div>
                  ))}
                </div>

                {/* bar chart */}
                <div className="bg-white/4 border border-white/6 rounded-xl p-4">
                  <div className="text-[10px] text-slate-500 mb-2">{isRtl ? "מבקרים החודש" : "Visitors this month"}</div>
                  <div className="flex items-end gap-1.5 h-10">
                    {[30, 55, 40, 75, 50, 90, 65, 85, 70, 95, 80, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm"
                        style={{ height: `${h}%`, background: `rgba(14,165,233,${0.3 + h / 200})` }} />
                    ))}
                  </div>
                </div>

                {/* speed score */}
                <div className="flex gap-2.5">
                  {[
                    { label: "Performance", score: 98, color: "text-emerald-400" },
                    { label: "SEO", score: 100, color: "text-sky-400" },
                    { label: "Accessibility", score: 95, color: "text-violet-400" },
                  ].map(s => (
                    <div key={s.label} className="flex-1 bg-white/4 border border-white/6 rounded-xl p-2.5 text-center">
                      <div className={`text-base font-black ${s.color}`}>{s.score}</div>
                      <div className="text-[9px] text-slate-600 mt-0.5">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating: orders up */}
            <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-slate-100">
              <div className="w-9 h-9 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <TrendingUp size={17} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] text-slate-500">{isRtl ? "הזמנות אונליין" : "Online orders"}</div>
                <div className="text-emerald-600 font-black text-lg leading-none">+40%</div>
              </div>
            </motion.div>

            {/* floating: live */}
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-6 bg-sky-500 rounded-2xl px-4 py-2.5 shadow-2xl shadow-sky-500/30 flex items-center gap-2">
              <Zap size={14} className="text-white fill-white" />
              <div>
                <div className="text-white font-black text-sm leading-none">{isRtl ? "7 ימים" : "7 days"}</div>
                <div className="text-sky-100 text-[10px]">{isRtl ? "מסירה" : "delivery"}</div>
              </div>
            </motion.div>

            {/* floating: rating */}
            <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-1/3 -right-10 bg-white rounded-2xl px-3 py-2.5 shadow-2xl border border-slate-100">
              <div className="flex gap-0.5 mb-1">
                {Array(5).fill(0).map((_, i) => <Star key={i} size={10} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-[11px] font-black text-slate-800">5.0 ★</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

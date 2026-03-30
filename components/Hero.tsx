"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Star, Zap, CheckCircle, MessageCircle } from "lucide-react";

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
    const timer = setInterval(() => { cur = Math.min(cur + step, to); setN(cur); if (cur >= to) clearInterval(timer); }, 20);
    return () => clearInterval(timer);
  }, [inView, to]);
  return <span ref={ref}>{n}{suffix}</span>;
}

export default function Hero({ lang, t }: HeroProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const words = isRtl ? wordsHe : wordsEn;
  const [wi, setWi] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setWi(i => (i + 1) % words.length), 2600);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">
      {/* layered bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-5%,rgba(14,165,233,0.18),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_85%_85%,rgba(139,92,246,0.14),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_10%_60%,rgba(16,185,129,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* deco rings */}
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[640px] h-[640px] opacity-[0.05] animate-spin-slow pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
      </div>
      <div className="absolute top-1/2 right-[-120px] -translate-y-1/2 w-[440px] h-[440px] opacity-[0.04] pointer-events-none" style={{ animation: "spin-slow 35s linear infinite reverse" }}>
        <div className="w-full h-full rounded-full border border-violet-400" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-16 items-center">

          {/* ── TEXT ── */}
          <div>
            {/* badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-300 text-sm font-semibold px-4 py-2 rounded-full mb-7">
              <span className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

            {/* headline */}
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
              className="font-black text-white leading-[1.06] tracking-tight mb-6"
              style={{ fontSize: "clamp(2.8rem, 5.8vw, 5.2rem)" }}>
              {t.title}
              <br />
              <span className="relative inline-block mt-1">
                <AnimatePresence mode="wait">
                  <motion.span key={wi}
                    initial={{ opacity: 0, y: 32, filter: "blur(12px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -32, filter: "blur(12px)" }}
                    transition={{ duration: 0.4 }}
                    className="inline-block text-shimmer">
                    {words[wi]}
                  </motion.span>
                </AnimatePresence>
                {/* underline */}
                <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500 via-blue-400 to-violet-500"
                  initial={{ scaleX: 0, originX: isRtl ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.7 }} />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.22 }}
              className="text-slate-400 text-xl leading-relaxed mb-6 max-w-lg">
              {t.subtitle}
            </motion.p>

            {/* checklist */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10">
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
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-12">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="btn-beam inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:scale-[1.04] shadow-2xl shadow-sky-500/30">
                <MessageCircle size={18} />
                {t.cta}
              </a>
              <a href="#portfolio"
                className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 border border-white/12 hover:border-white/28 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                {t.ctaSecondary} <Arrow size={16} />
              </a>
            </motion.div>

            {/* social proof row */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="flex items-center gap-5 pt-8 border-t border-white/8">
              <div className="flex -space-x-2.5">
                {[
                  { bg: "from-orange-400 to-red-500", t: "יכ" },
                  { bg: "from-sky-400 to-blue-500", t: "מל" },
                  { bg: "from-violet-400 to-purple-500", t: "דא" },
                  { bg: "from-emerald-400 to-teal-500", t: "רנ" },
                ].map((a, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${a.bg} border-2 border-[#030712] flex items-center justify-center text-white text-xs font-black`}>
                    {a.t}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={12} className="text-amber-400 fill-amber-400" />)}
                  <span className="text-amber-400 text-xs font-black ms-1">5.0</span>
                </div>
                <div className="text-slate-500 text-xs">
                  {isRtl ? "50+ עסקים כבר בחרו בי" : "50+ businesses already chose me"}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-4 ms-4 ps-4 border-s border-white/8">
                {[
                  { n: 50, s: "+", l: isRtl ? "פרויקטים" : "Projects" },
                  { n: 7, s: isRtl ? "d" : "d", l: isRtl ? "ימי מסירה" : "Delivery" },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-black text-white tabular-nums"><Counter to={s.n} suffix={s.s} /></div>
                    <div className="text-slate-600 text-[10px]">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── MOCKUP ── */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -50 : 50, y: 10 }} animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.85, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative">

            {/* glow */}
            <div className="absolute inset-[-80px] bg-sky-500/8 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-[-40px] bg-violet-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* browser window */}
            <div className="relative bg-[#0d1117] border border-white/10 rounded-3xl overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.6)] animate-float">

              {/* title bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#161b22] border-b border-white/6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-3 bg-[#21262d] rounded-lg px-3 py-1.5 text-xs text-slate-500 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-glow-pulse" />
                  zerotosite.co.il
                </div>
                <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live
                </div>
              </div>

              {/* page content */}
              <div className="p-5 space-y-3">

                {/* hero strip */}
                <div className="relative bg-gradient-to-br from-sky-600/20 via-blue-600/10 to-violet-600/15 rounded-2xl p-5 border border-white/6 overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-32 h-32 bg-sky-400/10 rounded-full blur-2xl" />
                  {/* fake navbar */}
                  <div className="flex items-center justify-between mb-4 opacity-60">
                    <div className="h-2 w-16 bg-white/50 rounded-full" />
                    <div className="flex gap-2">
                      <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                      <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                      <div className="h-1.5 w-8 bg-white/20 rounded-full" />
                    </div>
                  </div>
                  <div className="h-2 w-20 bg-sky-400/70 rounded-full mb-2.5" />
                  <div className="h-5 w-48 bg-white/85 rounded-full mb-1.5" />
                  <div className="h-3 w-36 bg-white/40 rounded-full mb-1" />
                  <div className="h-2.5 w-44 bg-slate-400/25 rounded-full mb-4" />
                  <div className="flex gap-2">
                    <div className="h-8 w-24 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/30" />
                    <div className="h-8 w-20 bg-white/8 border border-white/12 rounded-xl" />
                  </div>
                </div>

                {/* 3 service cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { g: "from-sky-500/15 to-blue-500/8", c: "#0ea5e9" },
                    { g: "from-violet-500/15 to-purple-500/8", c: "#8b5cf6" },
                    { g: "from-emerald-500/15 to-teal-500/8", c: "#10b981" },
                  ].map((x, i) => (
                    <div key={i} className={`bg-gradient-to-br ${x.g} rounded-xl p-3 border border-white/5`}>
                      <div className="w-5 h-5 rounded-lg mb-2" style={{ background: `${x.c}25` }} />
                      <div className="h-1.5 w-full bg-white/12 rounded-full mb-1" />
                      <div className="h-1.5 w-3/4 bg-white/7 rounded-full" />
                    </div>
                  ))}
                </div>

                {/* analytics chart */}
                <div className="bg-white/4 border border-white/6 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[10px] text-slate-500 font-medium">{isRtl ? "מבקרים החודש" : "Monthly Visitors"}</div>
                    <div className="text-emerald-400 text-[10px] font-black">↑ +34%</div>
                  </div>
                  <div className="flex items-end gap-1 h-12">
                    {[25, 42, 35, 60, 45, 72, 55, 80, 62, 88, 74, 100].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm transition-all"
                        style={{ height: `${h}%`, background: `linear-gradient(to top, rgba(14,165,233,0.7), rgba(14,165,233,0.2))` }} />
                    ))}
                  </div>
                </div>

                {/* lighthouse scores */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Performance", score: 98, color: "#10b981" },
                    { label: "SEO", score: 100, color: "#0ea5e9" },
                    { label: "Best Practices", score: 96, color: "#8b5cf6" },
                  ].map(s => (
                    <div key={s.label} className="bg-white/4 border border-white/6 rounded-xl p-2.5 text-center">
                      <div className="text-lg font-black" style={{ color: s.color }}>{s.score}</div>
                      <div className="text-[8px] text-slate-600 mt-0.5 leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* floating card: orders */}
            <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-10 bg-white rounded-2xl px-4 py-3.5 shadow-2xl flex items-center gap-3 border border-slate-100/80">
              <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                <TrendingUp size={18} className="text-white" />
              </div>
              <div>
                <div className="text-[11px] text-slate-400 font-medium">{isRtl ? "הזמנות אונליין" : "Online orders"}</div>
                <div className="text-emerald-600 font-black text-xl leading-none">+40%</div>
              </div>
            </motion.div>

            {/* floating card: delivery */}
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              className="absolute -top-5 -right-8 bg-sky-500 rounded-2xl px-4 py-3 shadow-2xl shadow-sky-500/40 flex items-center gap-2.5">
              <Zap size={16} className="text-white fill-white flex-shrink-0" />
              <div>
                <div className="text-white font-black text-sm leading-none">{isRtl ? "7 ימים" : "7 days"}</div>
                <div className="text-sky-100 text-[10px] mt-0.5">{isRtl ? "מסירה מובטחת" : "guaranteed delivery"}</div>
              </div>
            </motion.div>

            {/* floating card: rating */}
            <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
              className="absolute top-[38%] -right-12 bg-white rounded-2xl px-3.5 py-3 shadow-2xl border border-slate-100/80">
              <div className="flex gap-0.5 mb-1">
                {Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
              </div>
              <div className="text-slate-800 font-black text-sm">5.0</div>
              <div className="text-slate-400 text-[10px]">{isRtl ? "50+ ביקורות" : "50+ reviews"}</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

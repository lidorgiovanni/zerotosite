"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, TrendingUp, Star, Zap, CheckCircle, MessageCircle, Shield, Clock } from "lucide-react";

const WHATSAPP = "972543495645";

interface HeroProps {
  lang: "he" | "en";
  t: { badge: string; title: string; titleHighlight: string; subtitle: string; cta: string; ctaSecondary: string };
}

const wordsHe = ["להרוויח כסף", "דף נחיתה מנצח", "להביא לקוחות", "אתר תדמית מושלם", "חנות שמוכרת"];
const wordsEn = ["make money", "a winning landing page", "bring clients", "a stunning business site", "a store that sells"];

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
    const id = setInterval(() => setWi(i => (i + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]">
      {/* bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(14,165,233,0.22),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_90%,rgba(139,92,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_5%_70%,rgba(16,185,129,0.07),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* rings */}
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] animate-spin-slow pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-14 items-center">

          {/* TEXT */}
          <div>
            {/* urgency badge */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

            {/* headline */}
            <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }}
              className="font-black text-white leading-[1.05] tracking-tight mb-5"
              style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}>
              {t.title}
              <br />
              <span className="relative inline-block mt-2">
                <AnimatePresence mode="wait">
                  <motion.span key={wi}
                    initial={{ opacity: 0, y: 30, filter: "blur(14px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -30, filter: "blur(14px)" }}
                    transition={{ duration: 0.38 }}
                    className="inline-block text-shimmer">
                    {words[wi]}
                  </motion.span>
                </AnimatePresence>
                <motion.span className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-sky-500 via-blue-400 to-violet-500"
                  initial={{ scaleX: 0, originX: isRtl ? 1 : 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.7, duration: 0.8 }} />
              </span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-xl leading-relaxed mb-7 max-w-lg">
              {t.subtitle}
            </motion.p>

            {/* trust pills */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }}
              className="flex flex-wrap gap-3 mb-10">
              {(isRtl
                ? [
                    { icon: Zap, text: "מסירה תוך 7 ימים" },
                    { icon: Shield, text: "ללא תשלום מראש" },
                    { icon: Clock, text: "מענה תוך שעה" },
                  ]
                : [
                    { icon: Zap, text: "Delivered in 7 days" },
                    { icon: Shield, text: "No upfront payment" },
                    { icon: Clock, text: "Reply within 1 hour" },
                  ]
              ).map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 bg-white/6 border border-white/10 text-slate-300 text-sm font-medium px-3.5 py-1.5 rounded-full">
                  <Icon size={13} className="text-sky-400" />
                  {text}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.33 }}
              className="flex flex-wrap gap-3 mb-12">
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="btn-beam inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:scale-[1.04] shadow-2xl shadow-sky-500/35">
                <MessageCircle size={18} />
                {t.cta}
              </a>
              <a href="#portfolio"
                className="inline-flex items-center gap-2 bg-white/7 hover:bg-white/12 border border-white/12 hover:border-white/25 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all">
                {t.ctaSecondary} <Arrow size={16} />
              </a>
            </motion.div>

            {/* social proof */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}
              className="flex flex-wrap items-center gap-5 pt-7 border-t border-white/8">
              <div className="flex -space-x-2.5">
                {[
                  { bg: "from-orange-400 to-red-500", t: "יכ" },
                  { bg: "from-sky-400 to-blue-500", t: "מל" },
                  { bg: "from-violet-400 to-purple-500", t: "דא" },
                  { bg: "from-emerald-400 to-teal-500", t: "רנ" },
                  { bg: "from-pink-400 to-rose-500", t: "שב" },
                ].map((a, i) => (
                  <div key={i} className={`w-9 h-9 rounded-full bg-gradient-to-br ${a.bg} border-2 border-[#030712] flex items-center justify-center text-white text-xs font-black`}>
                    {a.t}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={13} className="text-amber-400 fill-amber-400" />)}
                  <span className="text-amber-400 text-sm font-black ms-1">5.0</span>
                </div>
                <div className="text-slate-500 text-xs">
                  {isRtl ? "50+ עסקים כבר בחרו בי" : "50+ businesses already chose me"}
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-5 ms-2 ps-5 border-s border-white/8">
                {[
                  { n: 50, s: "+", l: isRtl ? "פרויקטים" : "Projects" },
                  { n: 100, s: "%", l: isRtl ? "שביעות רצון" : "Satisfaction" },
                  { n: 7, s: isRtl ? "d" : "d", l: isRtl ? "מסירה" : "Delivery" },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-black text-white tabular-nums"><Counter to={s.n} suffix={s.s} /></div>
                    <div className="text-slate-600 text-[10px] mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* MOCKUP — animated live website */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -60 : 60, y: 16 }} animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block relative">

            {/* glows */}
            <div className="absolute inset-[-100px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute inset-[-60px] bg-violet-500/8 rounded-full blur-2xl pointer-events-none" />

            {/* browser shell */}
            <div className="relative bg-[#0d1117] border border-white/12 rounded-3xl overflow-hidden shadow-[0_60px_160px_rgba(0,0,0,0.8)] animate-float">

              {/* ── TITLE BAR ── */}
              <div className="flex items-center gap-2 px-5 py-3.5 bg-[#161b22] border-b border-white/6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                </div>
                <div className="flex-1 mx-3 bg-[#21262d] rounded-lg px-3 py-1.5 text-xs text-slate-400 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 flex-shrink-0 animate-glow-pulse" />
                  <span className="text-slate-400">zerotosite.co.il</span>
                  <span className="ms-auto text-emerald-400 font-bold text-[10px]">● Live</span>
                </div>
              </div>

              {/* ── PAGE CONTENT ── */}
              <div className="bg-white overflow-hidden" style={{ height: "420px" }}>

                {/* fake navbar */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.4 }}
                  className="flex items-center justify-between px-6 py-3 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-md bg-sky-500" />
                    <div className="h-2.5 w-20 bg-slate-800 rounded-full" />
                  </div>
                  <div className="flex gap-4">
                    {[14, 16, 12, 18].map((w, i) => (
                      <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 + i * 0.08 }}
                        className="h-1.5 bg-slate-300 rounded-full" style={{ width: `${w * 3}px` }} />
                    ))}
                  </div>
                  <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2 }}
                    className="h-6 w-20 bg-sky-500 rounded-full" />
                </motion.div>

                {/* hero section of the fake site */}
                <div className="relative bg-gradient-to-br from-[#030712] via-[#0a1628] to-[#0d1117] px-6 pt-6 pb-5 overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(14,165,233,0.2),transparent)]" />
                  <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "20px 20px" }} />

                  {/* badge */}
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}
                    className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/25 rounded-full px-3 py-1 mb-3">
                    <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
                    <div className="h-1.5 w-24 bg-sky-400/60 rounded-full" />
                  </motion.div>

                  {/* headline lines — typing effect */}
                  <div className="mb-3 space-y-1.5">
                    <motion.div initial={{ width: 0 }} animate={{ width: "85%" }} transition={{ delay: 1.1, duration: 0.6, ease: "easeOut" }}
                      className="h-4 bg-white/90 rounded-full overflow-hidden" />
                    <motion.div initial={{ width: 0 }} animate={{ width: "65%" }} transition={{ delay: 1.4, duration: 0.5, ease: "easeOut" }}
                      className="h-4 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full overflow-hidden" />
                  </div>

                  {/* subtitle */}
                  <div className="space-y-1 mb-4">
                    {["90%", "75%", "55%"].map((w, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.7 + i * 0.1 }}
                        className="h-1.5 bg-slate-500/40 rounded-full" style={{ width: w }} />
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-2">
                    <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.0, type: "spring", stiffness: 200 }}
                      className="h-7 w-28 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/40" />
                    <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2.15, type: "spring", stiffness: 200 }}
                      className="h-7 w-22 bg-white/8 border border-white/15 rounded-xl" />
                  </div>
                </div>

                {/* services section */}
                <div className="px-6 py-4 bg-white">
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.3 }}
                    className="h-2 w-24 bg-sky-500/30 rounded-full mb-3" />
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { color: "#0ea5e9", delay: 2.4 },
                      { color: "#8b5cf6", delay: 2.55 },
                      { color: "#10b981", delay: 2.7 },
                    ].map((card, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, y: 12, scale: 0.92 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ delay: card.delay, type: "spring", stiffness: 180 }}
                        className="rounded-xl p-3 border"
                        style={{ background: `${card.color}08`, borderColor: `${card.color}20` }}>
                        <div className="w-6 h-6 rounded-lg mb-2" style={{ background: `${card.color}25` }} />
                        <div className="h-1.5 w-full rounded-full mb-1" style={{ background: `${card.color}30` }} />
                        <div className="h-1.5 w-3/4 rounded-full" style={{ background: `${card.color}18` }} />
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* stats bar */}
                <div className="px-6 pb-4 bg-white">
                  <div className="flex gap-3">
                    {[
                      { n: "50+", l: isRtl ? "פרויקטים" : "Projects", c: "#0ea5e9", delay: 2.85 },
                      { n: "100%", l: isRtl ? "שביעות רצון" : "Satisfaction", c: "#10b981", delay: 2.95 },
                      { n: "7d", l: isRtl ? "מסירה" : "Delivery", c: "#8b5cf6", delay: 3.05 },
                    ].map((s, i) => (
                      <motion.div key={i}
                        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: s.delay }}
                        className="flex-1 rounded-xl p-2.5 text-center border"
                        style={{ background: `${s.c}06`, borderColor: `${s.c}15` }}>
                        <div className="text-sm font-black" style={{ color: s.c }}>{s.n}</div>
                        <div className="text-[9px] text-slate-400 mt-0.5">{s.l}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* animated cursor */}
                <motion.div
                  animate={{
                    x: [120, 200, 160, 240, 180],
                    y: [80, 120, 200, 160, 100],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute pointer-events-none z-20"
                  style={{ top: 0, left: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 2L16 10L10 11L7 17L4 2Z" fill="white" stroke="#0ea5e9" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </motion.div>

                {/* build progress bar at top */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.9, duration: 2.5, ease: "easeInOut" }}
                  style={{ originX: 0 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 via-violet-500 to-emerald-500 z-30"
                />
              </div>
            </div>

            {/* floating: new order notification */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 3.2, type: "spring", stiffness: 160 }}
              className="absolute -bottom-5 -left-10">
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
                className="bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-slate-100">
                <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/30">
                  <TrendingUp size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">{isRtl ? "הזמנה חדשה! 🎉" : "New order! 🎉"}</div>
                  <div className="text-emerald-600 font-black text-lg leading-none">+₪850</div>
                </div>
              </motion.div>
            </motion.div>

            {/* floating: site is live */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 2.8, type: "spring", stiffness: 160 }}
              className="absolute -top-5 -right-8">
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                className="bg-sky-500 rounded-2xl px-4 py-3 shadow-2xl shadow-sky-500/40 flex items-center gap-2.5">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <div>
                  <div className="text-white font-black text-sm leading-none">{isRtl ? "האתר חי! 🚀" : "Site is Live! 🚀"}</div>
                  <div className="text-sky-100 text-[10px] mt-0.5">{isRtl ? "תוך 7 ימים" : "In 7 days"}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* floating: rating */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ delay: 3.5, type: "spring", stiffness: 160 }}
              className="absolute top-[40%] -right-12">
              <motion.div animate={{ y: [0, -6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                className="bg-white rounded-2xl px-3.5 py-3 shadow-2xl border border-slate-100">
                <div className="flex gap-0.5 mb-1">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
                </div>
                <div className="text-slate-800 font-black text-sm">5.0</div>
                <div className="text-slate-400 text-[10px]">{isRtl ? "לקוח מרוצה" : "Happy client"}</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

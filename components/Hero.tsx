"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle, TrendingUp } from "lucide-react";

const WHATSAPP = "972543495645";

interface HeroProps {
  lang: "he" | "en";
  t: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
}

const wordsHe = ["מושלם", "מהיר", "מרשים", "מקצועי"];
const wordsEn = ["Perfect", "Fast", "Stunning", "Professional"];

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const timer = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [inView, to]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Hero({ lang, t }: HeroProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const words = isRtl ? wordsHe : wordsEn;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setWordIndex((i) => (i + 1) % words.length), 2200);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]">
      {/* animated gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[700px] h-[700px] bg-sky-600/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-violet-600/15 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />

      {/* dot grid */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.12) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-24 pb-16 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — text */}
          <div className={isRtl ? "text-right" : "text-left"}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/25 text-sky-400 text-sm font-semibold px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={13} />
              {t.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black text-white leading-[1.1] mb-6"
            >
              {t.title}
              <br />
              <span className="relative">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={wordIndex}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -24 }}
                    transition={{ duration: 0.35 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-violet-500"
                  >
                    {words[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              {t.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-bold px-8 py-4 rounded-2xl text-base transition-all hover:scale-[1.03] shadow-2xl shadow-sky-500/25"
              >
                {t.cta}
                <Arrow size={18} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/8 border border-white/10 hover:border-white/20 text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all"
              >
                {t.ctaSecondary}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              {[
                { num: 50, suffix: "+", label: isRtl ? "פרויקטים" : "Projects" },
                { num: 100, suffix: "%", label: isRtl ? "שביעות רצון" : "Satisfaction" },
                { num: 7, suffix: isRtl ? " ימים" : " days", label: isRtl ? "זמן מסירה" : "Delivery" },
              ].map((s) => (
                <div key={s.label} className={isRtl ? "text-right" : "text-left"}>
                  <div className="text-2xl font-black text-white">
                    <Counter to={s.num} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT — browser mockup */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -40 : 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* glow behind */}
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-3xl scale-95" />

              {/* browser window */}
              <div className="relative bg-slate-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                  </div>
                  <div className="flex-1 mx-3 bg-slate-700/60 rounded-md px-3 py-1 text-xs text-slate-400 text-left">
                    zerotosite.co.il
                  </div>
                </div>

                {/* fake website content */}
                <div className="p-6 space-y-4 bg-gradient-to-br from-slate-900 to-slate-950">
                  {/* hero area */}
                  <div className="bg-gradient-to-r from-sky-600/30 to-violet-600/20 rounded-xl p-6 border border-white/5">
                    <div className="h-3 w-24 bg-sky-400/60 rounded-full mb-3" />
                    <div className="h-5 w-48 bg-white/80 rounded-full mb-2" />
                    <div className="h-3 w-36 bg-slate-400/40 rounded-full mb-5" />
                    <div className="flex gap-2">
                      <div className="h-8 w-24 bg-sky-500 rounded-lg" />
                      <div className="h-8 w-20 bg-white/10 border border-white/10 rounded-lg" />
                    </div>
                  </div>

                  {/* cards row */}
                  <div className="grid grid-cols-3 gap-3">
                    {["from-sky-500/20 to-blue-500/10", "from-violet-500/20 to-purple-500/10", "from-emerald-500/20 to-teal-500/10"].map((g, i) => (
                      <div key={i} className={`bg-gradient-to-br ${g} rounded-xl p-3 border border-white/5`}>
                        <div className="w-6 h-6 bg-white/20 rounded-lg mb-2" />
                        <div className="h-2 w-full bg-white/20 rounded-full mb-1" />
                        <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                      </div>
                    ))}
                  </div>

                  {/* stats row */}
                  <div className="flex gap-3">
                    {[["50+", "Projects"], ["100%", "Happy"], ["24/7", "Support"]].map(([n, l]) => (
                      <div key={l} className="flex-1 bg-white/5 rounded-xl p-3 text-center border border-white/5">
                        <div className="text-sm font-black text-sky-400">{n}</div>
                        <div className="text-[10px] text-slate-500 mt-0.5">{l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-6 bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-2.5"
              >
                <div className="w-8 h-8 bg-emerald-500 rounded-xl flex items-center justify-center">
                  <TrendingUp size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900">{isRtl ? "הזמנות עלו" : "Orders up"}</div>
                  <div className="text-emerald-500 text-sm font-black">+40%</div>
                </div>
              </motion.div>

              {/* floating check */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-sky-500 rounded-2xl px-4 py-2.5 shadow-2xl flex items-center gap-2"
              >
                <CheckCircle size={15} className="text-white" />
                <span className="text-white text-xs font-bold">{isRtl ? "אתר חי!" : "Live!"}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

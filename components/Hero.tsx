"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Star, Zap, CheckCircle, MessageCircle, Shield, Clock } from "lucide-react";
import LiveMockup from "./LiveMockup";

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
      {/* bg layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(14,165,233,0.22),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_90%_90%,rgba(139,92,246,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_5%_70%,rgba(16,185,129,0.07),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.055) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      {/* deco ring */}
      <div className="absolute top-1/2 right-[-200px] -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] animate-spin-slow pointer-events-none">
        <div className="w-full h-full rounded-full border-2 border-dashed border-sky-400" />
      </div>

      <div className={`relative z-10 w-full max-w-7xl mx-auto px-6 pt-28 pb-20 ${isRtl ? "rtl" : "ltr"}`}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_500px] gap-14 items-center">

          {/* ── TEXT ── */}
          <div>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              {t.badge}
            </motion.div>

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
                ? [{ icon: Zap, text: "מסירה תוך 7 ימים" }, { icon: Shield, text: "ללא תשלום מראש" }, { icon: Clock, text: "מענה תוך שעה" }]
                : [{ icon: Zap, text: "Delivered in 7 days" }, { icon: Shield, text: "No upfront payment" }, { icon: Clock, text: "Reply within 1 hour" }]
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
                  { n: 7, s: "d", l: isRtl ? "מסירה" : "Delivery" },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <div className="text-xl font-black text-white tabular-nums"><Counter to={s.n} suffix={s.s} /></div>
                    <div className="text-slate-600 text-[10px] mt-0.5">{s.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── LIVE MOCKUP ── */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -60 : 60, y: 16 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block">
            <LiveMockup isRtl={isRtl} />
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

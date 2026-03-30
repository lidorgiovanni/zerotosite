"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles, CheckCircle } from "lucide-react";

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

const trustHe = ["ללא עלות ראשונית", "מסירה תוך 7 ימים", "תמיכה מלאה"];
const trustEn = ["No upfront cost", "Delivered in 7 days", "Full support"];

export default function Hero({ lang, t }: HeroProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;
  const words = isRtl ? wordsHe : wordsEn;
  const trust = isRtl ? trustHe : trustEn;
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950">
      {/* blobs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/8 rounded-full blur-3xl" />

      {/* grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center ${isRtl ? "rtl" : "ltr"}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium px-4 py-2 rounded-full mb-8"
        >
          <Sparkles size={14} />
          {t.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-white leading-tight mb-6"
        >
          {t.title}{" "}
          <span className="relative inline-block">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-violet-400 inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {t.subtitle}
        </motion.p>

        {/* trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {trust.map((item) => (
            <span key={item} className="flex items-center gap-1.5 text-sm text-slate-400">
              <CheckCircle size={14} className="text-sky-400" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-xl shadow-sky-500/30"
          >
            {t.cta}
            <Arrow size={20} />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sky-500/40 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all"
          >
            {t.ctaSecondary}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { num: "50+", label: isRtl ? "פרויקטים" : "Projects" },
            { num: "100%", label: isRtl ? "שביעות רצון" : "Satisfaction" },
            { num: "24/7", label: isRtl ? "תמיכה" : "Support" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl font-black text-white">{s.num}</div>
              <div className="text-sm text-slate-400 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* wave bottom — matches bg-white of Services */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H0Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}

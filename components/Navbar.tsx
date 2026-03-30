"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface NavbarProps {
  lang: "he" | "en";
  t: Record<string, string>;
  onLangChange: (l: "he" | "en") => void;
}

export default function Navbar({ lang, t, onLangChange }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const isRtl = lang === "he";

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 40);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.pricing, href: "#pricing" },
  ];

  return (
    <>
      {/* scroll progress */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
        <div className="h-full bg-gradient-to-r from-sky-500 to-violet-500 transition-all duration-100"
          style={{ width: `${progress}%` }} />
      </div>

      <nav className={`fixed top-[2px] w-full z-50 transition-all duration-400 ${
        scrolled
          ? "bg-white/92 backdrop-blur-2xl shadow-lg shadow-black/6 border-b border-slate-100"
          : "bg-transparent"
      }`}>
        <div className="max-w-6xl mx-auto px-6 h-[66px] flex items-center justify-between">

          {/* logo */}
          <a href="#" className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
            Zero<span className="text-sky-400">To</span>Site
          </a>

          {/* desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map(l => (
              <a key={l.href} href={l.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-slate-600 hover:text-sky-500 hover:bg-sky-50"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}>
                {l.label}
              </a>
            ))}
          </div>

          {/* desktop right */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => onLangChange(lang === "he" ? "en" : "he")}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
                scrolled
                  ? "text-slate-500 border-slate-200 hover:border-sky-300 hover:text-sky-500"
                  : "text-white/55 border-white/15 hover:border-white/35 hover:text-white"
              }`}>
              {lang === "he" ? "EN" : "עב"}
            </button>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="btn-beam inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white text-sm font-black px-5 py-2.5 rounded-xl transition-all hover:scale-[1.04] shadow-lg shadow-sky-500/25">
              <MessageCircle size={14} />
              {t.contact}
            </a>
          </div>

          {/* mobile burger */}
          <button onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
              className={`md:hidden bg-white/96 backdrop-blur-2xl border-b border-slate-100 px-6 py-5 flex flex-col gap-1 ${isRtl ? "text-right" : "text-left"}`}>
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-slate-700 hover:text-sky-500 font-semibold transition-colors py-2.5 px-3 rounded-xl hover:bg-sky-50 text-sm">
                  {l.label}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
                <button onClick={() => { onLangChange(lang === "he" ? "en" : "he"); setOpen(false); }}
                  className="text-slate-500 hover:text-sky-500 text-sm font-semibold transition-colors">
                  {lang === "he" ? "Switch to English" : "עבור לעברית"}
                </button>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 bg-sky-500 text-white text-sm font-black px-4 py-2.5 rounded-xl">
                  <MessageCircle size={13} />
                  {t.contact}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}

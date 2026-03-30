"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const WHATSAPP = "972543495645";

interface NavbarProps {
  lang: "he" | "en";
  t: Record<string, string>;
  onLangChange: (l: "he" | "en") => void;
}

export default function Navbar({ lang, t, onLangChange }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isRtl = lang === "he";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.pricing, href: "#pricing" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      scrolled
        ? "bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-slate-100"
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className={`text-xl font-black tracking-tight transition-colors duration-300 ${scrolled ? "text-slate-900" : "text-white"}`}>
          Zero<span className="text-sky-400">To</span>Site
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-sky-500/10 hover:text-sky-500 ${
                scrolled ? "text-slate-600" : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}>
              {l.label}
            </a>
          ))}
        </div>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => onLangChange(lang === "he" ? "en" : "he")}
            className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${
              scrolled
                ? "text-slate-500 border-slate-200 hover:border-sky-300 hover:text-sky-500"
                : "text-white/60 border-white/15 hover:border-white/40 hover:text-white"
            }`}>
            {lang === "he" ? "EN" : "עב"}
          </button>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all hover:scale-[1.04] shadow-lg shadow-sky-500/25">
            {t.contact}
          </a>
        </div>

        {/* Mobile burger */}
        <button className={`md:hidden p-2 rounded-xl transition-colors ${scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"}`}
          onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}
            className={`md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-100 px-6 py-5 flex flex-col gap-1 ${isRtl ? "text-right" : "text-left"}`}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="text-slate-700 hover:text-sky-500 font-medium transition-colors py-2.5 px-3 rounded-xl hover:bg-sky-50 text-sm">
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-4 mt-2 border-t border-slate-100">
              <button onClick={() => { onLangChange(lang === "he" ? "en" : "he"); setOpen(false); }}
                className="text-slate-500 hover:text-sky-500 text-sm font-semibold">
                {lang === "he" ? "Switch to English" : "עבור לעברית"}
              </button>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
                className="bg-sky-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl">
                {t.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

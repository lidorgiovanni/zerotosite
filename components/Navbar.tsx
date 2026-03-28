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
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.pricing, href: "#pricing" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className={`text-xl font-black tracking-tight transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
          Zero<span className="text-sky-400">To</span>Site
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors hover:text-sky-400 ${scrolled ? "text-slate-600" : "text-white/80"}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onLangChange(lang === "he" ? "en" : "he")}
            className={`text-sm font-semibold transition-colors hover:text-sky-400 ${scrolled ? "text-slate-500" : "text-white/70"}`}
          >
            {lang === "he" ? "EN" : "עב"}
          </button>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-400 text-white text-sm font-bold px-5 py-2 rounded-full transition-all hover:scale-105 shadow-lg shadow-sky-500/20"
          >
            {t.contact}
          </a>
        </div>

        <button className={`md:hidden transition-colors ${scrolled ? "text-slate-900" : "text-white"}`} onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden bg-white border-b border-slate-100 px-6 py-4 flex flex-col gap-4 ${isRtl ? "text-right" : "text-left"}`}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-sky-500 font-medium transition-colors">
                {l.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <button onClick={() => onLangChange(lang === "he" ? "en" : "he")} className="text-slate-500 hover:text-sky-500 text-sm font-semibold">
                {lang === "he" ? "Switch to English" : "עבור לעברית"}
              </button>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer" className="bg-sky-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                {t.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

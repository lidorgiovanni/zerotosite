"use client";
import { useState } from "react";
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
  const isRtl = lang === "he";
  const links = [
    { label: t.services, href: "#services" },
    { label: t.portfolio, href: "#portfolio" },
    { label: t.pricing, href: "#pricing" },
    { label: t.contact, href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-xl font-black tracking-tight text-slate-900">
          Zero<span className="text-sky-500">To</span>Site
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-sky-500 transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => onLangChange(lang === "he" ? "en" : "he")}
            className="text-sm font-medium text-slate-500 hover:text-sky-500 transition-colors"
          >
            {lang === "he" ? "EN" : "עב"}
          </button>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
          >
            {t.contact}
          </a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden bg-white border-b border-slate-100 px-6 pb-4 flex flex-col gap-4 ${isRtl ? "text-right" : "text-left"}`}
          >
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-slate-700 hover:text-sky-500 transition-colors">
                {l.label}
              </a>
            ))}
            <button onClick={() => onLangChange(lang === "he" ? "en" : "he")} className="text-slate-500 hover:text-sky-500 text-sm w-fit">
              {lang === "he" ? "Switch to English" : "עבור לעברית"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

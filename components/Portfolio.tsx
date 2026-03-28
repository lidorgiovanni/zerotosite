"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "RestaurantPro", color: "from-orange-400 to-pink-500", category: "branding", categoryHe: "אתר תדמית", categoryEn: "Business Site" },
  { title: "ShopEasy", color: "from-sky-400 to-blue-600", category: "ecommerce", categoryHe: "חנות אונליין", categoryEn: "Online Store" },
  { title: "LaunchFast", color: "from-violet-400 to-purple-600", category: "landing", categoryHe: "דף נחיתה", categoryEn: "Landing Page" },
  { title: "FitLife", color: "from-emerald-400 to-teal-600", category: "webapp", categoryHe: "אפליקציית ווב", categoryEn: "Web App" },
  { title: "LegalEdge", color: "from-amber-400 to-orange-500", category: "branding", categoryHe: "אתר תדמית", categoryEn: "Business Site" },
  { title: "TechStart", color: "from-rose-400 to-red-600", category: "landing", categoryHe: "דף נחיתה", categoryEn: "Landing Page" },
];

interface PortfolioProps {
  lang: "he" | "en";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const isRtl = lang === "he";
  const [active, setActive] = useState("all");

  const categories = [
    { key: "all", he: "הכל", en: "All" },
    { key: "branding", he: "אתרי תדמית", en: "Business Sites" },
    { key: "ecommerce", he: "חנויות", en: "Stores" },
    { key: "landing", he: "דפי נחיתה", en: "Landing Pages" },
    { key: "webapp", he: "אפליקציות", en: "Web Apps" },
  ];

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className={`py-24 bg-slate-50 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {isRtl ? "עבודות נבחרות" : "Selected Work"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "חלק מהפרויקטים שבנינו" : "Some of the projects we've built"}</p>
        </div>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                active === c.key
                  ? "bg-slate-900 text-white shadow-md"
                  : "bg-white text-slate-500 hover:text-slate-900 border border-slate-200"
              }`}
            >
              {isRtl ? c.he : c.en}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} transition-transform duration-500 group-hover:scale-105`} />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <div className="text-xl font-black">{p.title}</div>
                  <div className="text-sm opacity-80 mt-1">{isRtl ? p.categoryHe : p.categoryEn}</div>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-semibold text-sm border border-white/60 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full flex items-center gap-2">
                    <ExternalLink size={14} />
                    {isRtl ? "צפה בפרויקט" : "View Project"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

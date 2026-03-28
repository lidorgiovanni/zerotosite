"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "RestaurantPro",
    categoryKey: "branding",
    categoryHe: "אתר תדמית",
    categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    descHe: "אתר תדמית למסעדה יוקרתית",
    descEn: "Luxury restaurant website",
  },
  {
    title: "ShopEasy",
    categoryKey: "ecommerce",
    categoryHe: "חנות אונליין",
    categoryEn: "Online Store",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    descHe: "חנות אופנה אונליין",
    descEn: "Fashion online store",
  },
  {
    title: "LaunchFast",
    categoryKey: "landing",
    categoryHe: "דף נחיתה",
    categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    descHe: "דף נחיתה לסטארטאפ טכנולוגי",
    descEn: "Tech startup landing page",
  },
  {
    title: "FitLife",
    categoryKey: "webapp",
    categoryHe: "אפליקציית ווב",
    categoryEn: "Web App",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    descHe: "אפליקציית ניהול כושר",
    descEn: "Fitness management app",
  },
  {
    title: "LegalEdge",
    categoryKey: "branding",
    categoryHe: "אתר תדמית",
    categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    descHe: "אתר משרד עורכי דין",
    descEn: "Law firm website",
  },
  {
    title: "TechStart",
    categoryKey: "landing",
    categoryHe: "דף נחיתה",
    categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    descHe: "דף נחיתה לחברת הייטק",
    descEn: "High-tech company landing page",
  },
];

const categories = [
  { key: "all", he: "הכל", en: "All" },
  { key: "branding", he: "אתרי תדמית", en: "Business Sites" },
  { key: "ecommerce", he: "חנויות", en: "Stores" },
  { key: "landing", he: "דפי נחיתה", en: "Landing Pages" },
  { key: "webapp", he: "אפליקציות", en: "Web Apps" },
];

interface PortfolioProps {
  lang: "he" | "en";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const isRtl = lang === "he";
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.categoryKey === active);

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
                className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer bg-slate-200"
              >
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-white font-black text-lg">{p.title}</div>
                  <div className="text-white/70 text-sm">{isRtl ? p.descHe : p.descEn}</div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {isRtl ? p.categoryHe : p.categoryEn}
                  </span>
                </div>
                <div className="absolute inset-0 bg-sky-500/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white font-bold flex items-center gap-2 border border-white/60 px-5 py-2.5 rounded-full">
                    <ExternalLink size={16} />
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

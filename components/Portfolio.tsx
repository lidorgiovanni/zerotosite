"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "RestaurantPro",
    categoryKey: "branding",
    categoryHe: "אתר תדמית", categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    descHe: "אתר תדמית למסעדה יוקרתית", descEn: "Luxury restaurant website",
    resultHe: "+40% הזמנות", resultEn: "+40% bookings",
    tall: true,
  },
  {
    title: "ShopEasy",
    categoryKey: "ecommerce",
    categoryHe: "חנות אונליין", categoryEn: "Online Store",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    descHe: "חנות אופנה אונליין", descEn: "Fashion online store",
    resultHe: "₪50K מכירות/חודש", resultEn: "₪50K sales/month",
    tall: false,
  },
  {
    title: "LaunchFast",
    categoryKey: "landing",
    categoryHe: "דף נחיתה", categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    descHe: "דף נחיתה לסטארטאפ", descEn: "Tech startup landing page",
    resultHe: "12% המרה", resultEn: "12% conversion",
    tall: false,
  },
  {
    title: "FitLife",
    categoryKey: "webapp",
    categoryHe: "אפליקציית ווב", categoryEn: "Web App",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    descHe: "אפליקציית ניהול כושר", descEn: "Fitness management app",
    resultHe: "500+ משתמשים", resultEn: "500+ users",
    tall: true,
  },
  {
    title: "LegalEdge",
    categoryKey: "branding",
    categoryHe: "אתר תדמית", categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    descHe: "אתר משרד עורכי דין", descEn: "Law firm website",
    resultHe: "3x יותר פניות", resultEn: "3x more leads",
    tall: false,
  },
  {
    title: "TechStart",
    categoryKey: "landing",
    categoryHe: "דף נחיתה", categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    descHe: "דף נחיתה לחברת הייטק", descEn: "High-tech landing page",
    resultHe: "גויסו ₪2M", resultEn: "Raised ₪2M",
    tall: false,
  },
];

const categories = [
  { key: "all", he: "הכל", en: "All" },
  { key: "branding", he: "תדמית", en: "Business" },
  { key: "ecommerce", he: "חנויות", en: "Stores" },
  { key: "landing", he: "נחיתה", en: "Landing" },
  { key: "webapp", he: "אפליקציות", en: "Apps" },
];

interface PortfolioProps { lang: "he" | "en"; }

export default function Portfolio({ lang }: PortfolioProps) {
  const isRtl = lang === "he";
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? projects : projects.filter(p => p.categoryKey === active);

  return (
    <section id="portfolio" className={`py-28 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {isRtl ? "עבודות נבחרות" : "Selected Work"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {isRtl ? "פרויקטים שעשו הבדל" : "Projects That Made a Difference"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "כל פרויקט עם תוצאות מדידות" : "Every project with measurable results"}</p>
        </div>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                active === c.key
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-800 border border-slate-100"
              }`}>
              {isRtl ? c.he : c.en}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div key={p.title} layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`group relative overflow-hidden rounded-3xl bg-slate-100 cursor-pointer ${p.tall ? "row-span-1 aspect-[4/5]" : "aspect-[4/3]"}`}>

                <Image src={p.image} alt={p.title} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                {/* base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* category pill */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/15 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20">
                    {isRtl ? p.categoryHe : p.categoryEn}
                  </span>
                </div>

                {/* result pill */}
                <div className="absolute top-4 right-4">
                  <span className="bg-sky-500 text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg">
                    {isRtl ? p.resultHe : p.resultEn}
                  </span>
                </div>

                {/* bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-white font-black text-lg mb-0.5">{p.title}</div>
                  <div className="text-white/70 text-sm">{isRtl ? p.descHe : p.descEn}</div>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 bg-sky-600/85 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-xl">
                      <ArrowUpRight size={22} className="text-sky-600" />
                    </div>
                    <div className="text-white font-black text-base">{isRtl ? "צפה בפרויקט" : "View Project"}</div>
                    <div className="text-sky-100 text-sm mt-1">{isRtl ? p.resultHe : p.resultEn}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mt-14">
          <p className="text-slate-500 mb-5 text-lg">
            {isRtl ? "רוצה שהפרויקט שלך יהיה הבא?" : "Want your project to be next?"}
          </p>
          <a href={`https://wa.me/972543495645`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:scale-[1.03] shadow-xl">
            {isRtl ? "בואו נדבר" : "Let's Talk"} <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

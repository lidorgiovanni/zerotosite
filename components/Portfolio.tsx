"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const WHATSAPP = "972543495645";

const projects = [
  {
    title: "RestaurantPro",
    categoryKey: "branding",
    categoryHe: "אתר תדמית", categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    descHe: "מסעדה יוקרתית — תל אביב", descEn: "Luxury restaurant — Tel Aviv",
    resultHe: "+40% הזמנות", resultEn: "+40% bookings",
    accentColor: "#f97316",
  },
  {
    title: "ShopEasy",
    categoryKey: "ecommerce",
    categoryHe: "חנות אונליין", categoryEn: "Online Store",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    descHe: "חנות אופנה — ₪50K/חודש", descEn: "Fashion store — ₪50K/month",
    resultHe: "₪50K מכירות", resultEn: "₪50K sales",
    accentColor: "#8b5cf6",
  },
  {
    title: "LaunchFast",
    categoryKey: "landing",
    categoryHe: "דף נחיתה", categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    descHe: "סטארטאפ טכנולוגי", descEn: "Tech startup",
    resultHe: "12% המרה", resultEn: "12% conversion",
    accentColor: "#0ea5e9",
  },
  {
    title: "FitLife",
    categoryKey: "webapp",
    categoryHe: "אפליקציית ווב", categoryEn: "Web App",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    descHe: "אפליקציית כושר — 500+ משתמשים", descEn: "Fitness app — 500+ users",
    resultHe: "500+ משתמשים", resultEn: "500+ users",
    accentColor: "#10b981",
  },
  {
    title: "LegalEdge",
    categoryKey: "branding",
    categoryHe: "אתר תדמית", categoryEn: "Business Site",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
    descHe: "משרד עורכי דין", descEn: "Law firm",
    resultHe: "×3 פניות", resultEn: "×3 leads",
    accentColor: "#6366f1",
  },
  {
    title: "TechStart",
    categoryKey: "landing",
    categoryHe: "דף נחיתה", categoryEn: "Landing Page",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
    descHe: "חברת הייטק — גיוס ₪2M", descEn: "High-tech — raised ₪2M",
    resultHe: "גויסו ₪2M", resultEn: "Raised ₪2M",
    accentColor: "#ec4899",
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
    <section id="portfolio" className={`py-28 bg-white relative ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "עבודות נבחרות" : "Selected Work"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-4 leading-tight">
            {isRtl ? "פרויקטים שעשו הבדל" : "Projects That Made a Difference"}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl">
            {isRtl ? "כל פרויקט עם תוצאות מדידות ואמיתיות" : "Every project with real, measurable results"}
          </motion.p>
        </div>

        {/* filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(c => (
            <button key={c.key} onClick={() => setActive(c.key)}
              className={`px-5 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200 ${
                active === c.key
                  ? "bg-slate-900 text-white shadow-lg scale-[1.03]"
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
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-3xl bg-slate-100 cursor-pointer aspect-[4/3]">

                <Image src={p.image} alt={p.title} fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* category */}
                <div className={`absolute top-4 ${isRtl ? "right-4" : "left-4"}`}>
                  <span className="bg-black/40 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/15">
                    {isRtl ? p.categoryHe : p.categoryEn}
                  </span>
                </div>

                {/* result badge */}
                <div className={`absolute top-4 ${isRtl ? "left-4" : "right-4"}`}>
                  <span className="text-white text-xs font-black px-3 py-1.5 rounded-full shadow-lg"
                    style={{ background: p.accentColor }}>
                    {isRtl ? p.resultHe : p.resultEn}
                  </span>
                </div>

                {/* bottom info — always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-white font-black text-lg leading-tight">{p.title}</div>
                  <div className="text-white/60 text-sm mt-0.5">{isRtl ? p.descHe : p.descEn}</div>
                </div>

                {/* hover overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-400 flex items-center justify-center"
                  style={{ background: `${p.accentColor}dd` }}>
                  <div className="text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-400">
                    <div className="w-16 h-16 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
                      <ArrowUpRight size={26} style={{ color: p.accentColor }} />
                    </div>
                    <div className="text-white font-black text-lg">{p.title}</div>
                    <div className="text-white/80 text-sm mt-1 font-bold">{isRtl ? p.resultHe : p.resultEn}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 border border-slate-100 rounded-3xl px-8 py-6">
            <div className={isRtl ? "text-right" : "text-left"}>
              <div className="font-black text-slate-900 text-lg">
                {isRtl ? "רוצה שהפרויקט שלך יהיה הבא?" : "Want your project to be next?"}
              </div>
              <div className="text-slate-500 text-sm mt-0.5">
                {isRtl ? "שיחת ייעוץ חינמית — ללא התחייבות" : "Free consultation — no commitment"}
              </div>
            </div>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="btn-beam flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-black px-6 py-3.5 rounded-2xl transition-all hover:scale-[1.03] shadow-xl whitespace-nowrap">
              <MessageCircle size={17} />
              {isRtl ? "בואו נדבר" : "Let's Talk"}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "RestaurantPro", category: "אתר תדמית", color: "from-orange-400 to-pink-500" },
  { title: "ShopEasy", category: "חנות אונליין", color: "from-sky-400 to-blue-600" },
  { title: "LaunchFast", category: "דף נחיתה", color: "from-violet-400 to-purple-600" },
  { title: "FitLife", category: "אפליקציית ווב", color: "from-emerald-400 to-teal-600" },
  { title: "LegalEdge", category: "אתר תדמית", color: "from-amber-400 to-orange-500" },
  { title: "TechStart", category: "דף נחיתה", color: "from-rose-400 to-red-600" },
];

interface PortfolioProps {
  lang: "he" | "en";
}

export default function Portfolio({ lang }: PortfolioProps) {
  const isRtl = lang === "he";
  const title = isRtl ? "עבודות נבחרות" : "Selected Work";
  const subtitle = isRtl ? "חלק מהפרויקטים שבנינו" : "Some of the projects we've built";

  return (
    <section id="portfolio" className={`py-24 bg-slate-50 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl aspect-video cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div className="text-xl font-black">{p.title}</div>
                <div className="text-sm opacity-80 mt-1">{p.category}</div>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-semibold text-sm border border-white/50 px-4 py-2 rounded-full">
                  {isRtl ? "צפה בפרויקט" : "View Project"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

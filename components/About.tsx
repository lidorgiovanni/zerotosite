"use client";
import { motion } from "framer-motion";
import { CheckCircle, Code, Zap, Heart, Award, Users, Clock, Star } from "lucide-react";

interface AboutProps { lang: "he" | "en"; }

export default function About({ lang }: AboutProps) {
  const isRtl = lang === "he";

  const statsHe = [
    { icon: Award,  n: "50+",  l: "פרויקטים" },
    { icon: Users,  n: "100%", l: "שביעות רצון" },
    { icon: Clock,  n: "7",    l: "ימי מסירה" },
    { icon: Star,   n: "5.0",  l: "דירוג" },
  ];
  const statsEn = [
    { icon: Award,  n: "50+",  l: "Projects" },
    { icon: Users,  n: "100%", l: "Satisfaction" },
    { icon: Clock,  n: "7",    l: "Days Delivery" },
    { icon: Star,   n: "5.0",  l: "Rating" },
  ];

  const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Node.js", "Vercel"];

  const timelineHe = [
    { year: "2021", text: "התחלתי לבנות אתרים — הפרויקט הראשון היה לחנות מקומית" },
    { year: "2022", text: "עברתי ל-React ו-Next.js, בניתי 20+ פרויקטים" },
    { year: "2023", text: "התמחות בדפי נחיתה עם המרה גבוהה ו-Google Ads" },
    { year: "2024", text: "50+ פרויקטים, 100% שביעות רצון, ZeroToSite נולד" },
  ];
  const timelineEn = [
    { year: "2021", text: "Started building websites — first project was for a local store" },
    { year: "2022", text: "Moved to React & Next.js, built 20+ projects" },
    { year: "2023", text: "Specialized in high-converting landing pages & Google Ads" },
    { year: "2024", text: "50+ projects, 100% satisfaction, ZeroToSite was born" },
  ];

  const stats = isRtl ? statsHe : statsEn;
  const timeline = isRtl ? timelineHe : timelineEn;

  return (
    <section className={`py-28 bg-[#f0fdf8] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(16,185,129,0.06),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* header */}
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "קצת עליי" : "About Me"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-5 leading-tight">
            {isRtl ? "לא סוכנות.\nאדם אחד שאכפת לו." : "Not an agency.\nOne person who cares."}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-2xl mx-auto">
            {isRtl
              ? "כשאתה עובד איתי — אתה מדבר ישירות איתי. אני זה שבונה, אני זה שעונה, ואני זה שאחראי על התוצאה."
              : "When you work with me — you talk directly to me. I'm the one who builds, answers, and is responsible for the result."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8">

            {/* avatar + intro */}
            <div className="flex items-start gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-sky-500 via-blue-600 to-violet-600 flex items-center justify-center text-white text-4xl font-black shadow-2xl shadow-sky-500/30">
                  ל
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 bg-emerald-500 rounded-full border-[3px] border-white flex items-center justify-center shadow-lg">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>
              </div>
              <div className="pt-1">
                <div className="text-slate-900 font-black text-2xl">לידור</div>
                <div className="text-slate-500 text-sm mt-0.5">{isRtl ? "מפתח ומעצב אתרים · ישראל 🇮🇱" : "Web Developer & Designer · Israel 🇮🇱"}</div>
                <div className="flex items-center gap-1 mt-2">
                  {Array(5).fill(0).map((_, i) => <Star key={i} size={14} className="text-amber-400 fill-amber-400" />)}
                  <span className="text-amber-500 text-sm font-black ms-1">5.0</span>
                  <span className="text-slate-400 text-xs ms-1">(50+ {isRtl ? "ביקורות" : "reviews"})</span>
                </div>
              </div>
            </div>

            {/* story */}
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p className="text-lg">
                {isRtl
                  ? "שמי לידור, ואני בונה אתרים ודפי נחיתה לעסקים קטנים ובינוניים בישראל. 3+ שנות ניסיון, 50+ פרויקטים, 0 לקוחות לא מרוצים."
                  : "My name is Lidor, and I build websites and landing pages for small and medium businesses in Israel. 3+ years experience, 50+ projects, 0 unhappy clients."}
              </p>
              <p>
                {isRtl
                  ? "אני מאמין שאתר טוב צריך לעשות עבודה — להביא לקוחות, לייצר פניות, למכור. לא רק להיראות יפה. לכן כל פרויקט מתחיל בשאלה: מה המטרה העסקית?"
                  : "I believe a good website should do work — bring customers, generate leads, sell. Not just look pretty. That's why every project starts with: what's the business goal?"}
              </p>
            </div>

            {/* tech stack */}
            <div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">
                {isRtl ? "טכנולוגיות" : "Tech Stack"}
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map(tech => (
                  <span key={tech} className="bg-white border border-emerald-100 text-slate-600 text-xs font-semibold px-3 py-1.5 rounded-full hover:border-emerald-400 hover:text-emerald-700 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="space-y-8">

            {/* stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="bg-white border border-emerald-100 rounded-2xl p-5 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-50 transition-all group">
                    <div className="w-9 h-9 bg-sky-500/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-sky-500/20 transition-colors">
                      <Icon size={17} className="text-sky-500" />
                    </div>
                    <div className="text-3xl font-black text-slate-900">{s.n}</div>
                    <div className="text-slate-500 text-sm mt-0.5">{s.l}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* timeline */}
            <div>
              <div className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-5">
                {isRtl ? "הדרך שלי" : "My Journey"}
              </div>
              <div className="space-y-4 relative">
                <div className={`absolute top-0 bottom-0 ${isRtl ? "right-[11px]" : "left-[11px]"} w-px bg-gradient-to-b from-sky-200 via-violet-200 to-emerald-200`} />
                {timeline.map((item, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: isRtl ? 16 : -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className={`flex items-start gap-4 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-6 h-6 rounded-full bg-sky-500 border-2 border-white shadow-md flex-shrink-0 flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <div className={isRtl ? "text-right" : "text-left"}>
                      <span className="text-sky-500 font-black text-sm">{item.year}</span>
                      <p className="text-slate-600 text-sm mt-0.5 leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

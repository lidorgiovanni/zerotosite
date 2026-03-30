"use client";
import { motion } from "framer-motion";
import { CheckCircle, Code, Zap, Heart } from "lucide-react";

interface AboutProps { lang: "he" | "en"; }

export default function About({ lang }: AboutProps) {
  const isRtl = lang === "he";

  const factsHe = [
    { icon: Code,         text: "3+ שנות ניסיון בפיתוח ועיצוב אתרים" },
    { icon: Zap,          text: "50+ פרויקטים הושלמו בהצלחה" },
    { icon: CheckCircle,  text: "מתמחה ב-Next.js, React, Tailwind CSS" },
    { icon: Heart,        text: "עובד לבד — אתה מדבר ישירות איתי" },
  ];

  const factsEn = [
    { icon: Code,         text: "3+ years of web development & design experience" },
    { icon: Zap,          text: "50+ projects completed successfully" },
    { icon: CheckCircle,  text: "Specializing in Next.js, React, Tailwind CSS" },
    { icon: Heart,        text: "Work solo — you talk directly to me" },
  ];

  const facts = isRtl ? factsHe : factsEn;

  return (
    <section className={`py-24 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_30%_50%,rgba(14,165,233,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* left — avatar + facts */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="flex flex-col gap-8">

            {/* avatar card */}
            <div className="flex items-center gap-5">
              <div className="relative flex-shrink-0">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-3xl font-black shadow-2xl shadow-sky-500/30">
                  ל
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-[#030712] flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div>
                <div className="text-white font-black text-2xl">לידור</div>
                <div className="text-slate-400 text-sm mt-0.5">
                  {isRtl ? "מפתח ומעצב אתרים · ישראל 🇮🇱" : "Web Developer & Designer · Israel 🇮🇱"}
                </div>
                <div className="flex items-center gap-1.5 mt-2">
                  {Array(5).fill(0).map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-amber-400" style={{ opacity: 1 - i * 0.05 }} />
                  ))}
                  <span className="text-amber-400 text-xs font-bold ms-1">5.0</span>
                </div>
              </div>
            </div>

            {/* facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {facts.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="card-gradient-border rounded-2xl p-4 flex items-center gap-3">
                    <div className="w-9 h-9 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-sky-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{f.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* right — story */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-sky-400 font-bold text-sm uppercase tracking-[0.25em] mb-4">
              {isRtl ? "קצת עליי" : "About Me"}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              {isRtl ? "לא סוכנות. אדם אחד שאכפת לו." : "Not an agency. One person who cares."}
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                {isRtl
                  ? "שמי לידור, ואני בונה אתרים ודפי נחיתה לעסקים קטנים ובינוניים בישראל. אני עובד לבד — מה שאומר שאתה מדבר ישירות איתי, לא עם מנהל פרויקטים שמעביר הודעות."
                  : "My name is Lidor, and I build websites and landing pages for small and medium businesses in Israel. I work solo — which means you talk directly to me, not a project manager passing messages."}
              </p>
              <p>
                {isRtl
                  ? "אני מאמין שאתר טוב צריך לעשות עבודה — להביא לקוחות, לייצר פניות, למכור. לא רק להיראות יפה. לכן כל פרויקט שאני בונה מתחיל בשאלה: מה המטרה העסקית?"
                  : "I believe a good website should do work — bring customers, generate leads, sell. Not just look pretty. That's why every project I build starts with the question: what's the business goal?"}
              </p>
              <p>
                {isRtl
                  ? "מתמחה בדפי נחיתה עם המרה גבוהה, אתרי תדמית מקצועיים וחנויות אונליין. טכנולוגיות: Next.js, React, Tailwind CSS, Framer Motion."
                  : "Specializing in high-converting landing pages, professional business websites and online stores. Tech: Next.js, React, Tailwind CSS, Framer Motion."}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "Framer Motion", "TypeScript", "Figma"].map(tech => (
                <span key={tech} className="bg-white/5 border border-white/10 text-slate-400 text-xs font-medium px-3 py-1.5 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

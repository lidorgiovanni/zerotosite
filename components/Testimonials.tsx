"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialsProps {
  lang: "he" | "en";
}

const testimonials = [
  {
    nameHe: "יוסי כהן",
    nameEn: "Yossi Cohen",
    roleHe: "בעל מסעדה",
    roleEn: "Restaurant Owner",
    textHe: "לידור בנה לנו אתר מדהים תוך שבוע. ההזמנות אונליין עלו ב-40% מאז ההשקה. ממליץ בחום!",
    textEn: "Lidor built us an amazing website within a week. Online orders increased by 40% since launch. Highly recommend!",
    avatar: "YK",
    gradient: "from-orange-400 to-red-500",
    result: "+40%",
    resultLabel: { he: "הזמנות", en: "Orders" },
  },
  {
    nameHe: "מיכל לוי",
    nameEn: "Michal Levi",
    roleHe: "בעלת חנות אונליין",
    roleEn: "Online Store Owner",
    textHe: "השירות מקצועי, מהיר ובמחיר הוגן. האתר נראה בדיוק כמו שרציתי. תודה רבה!",
    textEn: "Professional, fast service at a fair price. The site looks exactly as I wanted. Thank you!",
    avatar: "ML",
    gradient: "from-sky-400 to-blue-500",
    result: "7",
    resultLabel: { he: "ימי עבודה", en: "Days" },
  },
  {
    nameHe: "דני אברהם",
    nameEn: "Danny Abraham",
    roleHe: "עורך דין",
    roleEn: "Attorney",
    textHe: "אתר מקצועי שמייצג אותי בצורה מושלמת. הלקוחות תמיד מציינים שהאתר נראה מרשים.",
    textEn: "A professional site that represents me perfectly. Clients always mention how impressive the site looks.",
    avatar: "DA",
    gradient: "from-violet-400 to-purple-500",
    result: "5★",
    resultLabel: { he: "דירוג", en: "Rating" },
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const isRtl = lang === "he";

  return (
    <section className={`py-28 bg-[#020817] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      {/* bg orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-600/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
      <div className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(148,163,184,0.06) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-4"
          >
            {Array(5).fill(0).map((_, i) => (
              <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
            ))}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            {isRtl ? "לקוחות מרוצים" : "Happy Clients"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "מה אומרים עלינו" : "What they say about us"}</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-white/5 border border-white/8 rounded-3xl p-7 hover:bg-white/8 hover:border-white/15 transition-all duration-300 group overflow-hidden"
            >
              {/* result badge */}
              <div className={`absolute top-6 ${isRtl ? "left-6" : "right-6"} bg-gradient-to-br ${t.gradient} rounded-2xl px-3 py-2 text-center`}>
                <div className="text-white font-black text-lg leading-none">{t.result}</div>
                <div className="text-white/70 text-[10px] mt-0.5">{isRtl ? t.resultLabel.he : t.resultLabel.en}</div>
              </div>

              <div className="flex gap-1 mb-5">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={13} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              <p className="text-slate-300 leading-relaxed mb-7 text-sm pr-16">
                &ldquo;{isRtl ? t.textHe : t.textEn}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className={`w-10 h-10 bg-gradient-to-br ${t.gradient} rounded-full flex items-center justify-center text-white text-sm font-black shadow-lg`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{isRtl ? t.nameHe : t.nameEn}</div>
                  <div className="text-slate-500 text-xs">{isRtl ? t.roleHe : t.roleEn}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* bottom trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { num: "50+", label: isRtl ? "פרויקטים הושלמו" : "Projects Completed" },
            { num: "100%", label: isRtl ? "שביעות רצון" : "Client Satisfaction" },
            { num: "< 7", label: isRtl ? "ימי מסירה" : "Days Delivery" },
            { num: "24/7", label: isRtl ? "תמיכה" : "Support" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-2xl font-black text-white">{s.num}</div>
              <div className="text-slate-500 text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

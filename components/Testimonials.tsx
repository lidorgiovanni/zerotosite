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
    color: "bg-orange-500",
  },
  {
    nameHe: "מיכל לוי",
    nameEn: "Michal Levi",
    roleHe: "בעלת חנות אונליין",
    roleEn: "Online Store Owner",
    textHe: "השירות מקצועי, מהיר ובמחיר הוגן. האתר נראה בדיוק כמו שרציתי. תודה רבה!",
    textEn: "Professional, fast service at a fair price. The site looks exactly as I wanted. Thank you!",
    avatar: "ML",
    color: "bg-sky-500",
  },
  {
    nameHe: "דני אברהם",
    nameEn: "Danny Abraham",
    roleHe: "עורך דין",
    roleEn: "Attorney",
    textHe: "אתר מקצועי שמייצג אותי בצורה מושלמת. הלקוחות תמיד מציינים שהאתר נראה מרשים.",
    textEn: "A professional site that represents me perfectly. Clients always mention how impressive the site looks.",
    avatar: "DA",
    color: "bg-violet-500",
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const isRtl = lang === "he";

  return (
    <section className={`py-24 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {isRtl ? "מה אומרים עלינו" : "What They Say"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "לקוחות מרוצים שסומכים עלינו" : "Happy clients who trust us"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {Array(5).fill(0).map((_, j) => (
                  <Star key={j} size={16} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                &ldquo;{isRtl ? t.textHe : t.textEn}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{isRtl ? t.nameHe : t.nameEn}</div>
                  <div className="text-slate-400 text-xs">{isRtl ? t.roleHe : t.roleEn}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

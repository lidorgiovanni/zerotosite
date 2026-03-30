"use client";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialsProps { lang: "he" | "en"; }

const testimonials = [
  {
    nameHe: "יוסי כהן", nameEn: "Yossi Cohen",
    roleHe: "בעל מסעדה", roleEn: "Restaurant Owner",
    textHe: "לידור בנה לנו אתר מדהים תוך שבוע. ההזמנות אונליין עלו ב-40% מאז ההשקה. ממליץ בחום!",
    textEn: "Lidor built us an amazing website within a week. Online orders increased by 40% since launch. Highly recommend!",
    avatar: "YK", gradient: "from-orange-400 to-red-500",
    result: "+40%", resultLabelHe: "הזמנות", resultLabelEn: "Orders",
  },
  {
    nameHe: "מיכל לוי", nameEn: "Michal Levi",
    roleHe: "בעלת חנות אונליין", roleEn: "Online Store Owner",
    textHe: "השירות מקצועי, מהיר ובמחיר הוגן. האתר נראה בדיוק כמו שרציתי. תודה רבה!",
    textEn: "Professional, fast service at a fair price. The site looks exactly as I wanted. Thank you!",
    avatar: "ML", gradient: "from-sky-400 to-blue-500",
    result: "7d", resultLabelHe: "מסירה", resultLabelEn: "Delivery",
  },
  {
    nameHe: "דני אברהם", nameEn: "Danny Abraham",
    roleHe: "עורך דין", roleEn: "Attorney",
    textHe: "אתר מקצועי שמייצג אותי בצורה מושלמת. הלקוחות תמיד מציינים שהאתר נראה מרשים.",
    textEn: "A professional site that represents me perfectly. Clients always mention how impressive the site looks.",
    avatar: "DA", gradient: "from-violet-400 to-purple-500",
    result: "5★", resultLabelHe: "דירוג", resultLabelEn: "Rating",
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const isRtl = lang === "he";
  const featured = testimonials[0];
  const rest = testimonials.slice(1);

  return (
    <section className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(14,165,233,0.08),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-1 mb-5">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={20} className="text-amber-400 fill-amber-400" />)}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4">
            {isRtl ? "לקוחות מרוצים" : "Happy Clients"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "מה אומרים עלינו" : "What they say about us"}</p>
        </div>

        {/* layout: 1 big + 2 small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* featured */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white/8 to-white/4 border border-white/12 rounded-3xl p-8 overflow-hidden group hover:border-white/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/8 rounded-full blur-3xl group-hover:bg-sky-500/12 transition-all" />
            <Quote size={48} className="text-white/6 mb-4" />
            <div className="flex gap-1 mb-5">
              {Array(5).fill(0).map((_, i) => <Star key={i} size={15} className="text-amber-400 fill-amber-400" />)}
            </div>
            <p className="text-white text-xl leading-relaxed mb-8 font-medium">
              &ldquo;{isRtl ? featured.textHe : featured.textEn}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 bg-gradient-to-br ${featured.gradient} rounded-2xl flex items-center justify-center text-white font-black shadow-lg`}>
                  {featured.avatar}
                </div>
                <div>
                  <div className="font-black text-white">{isRtl ? featured.nameHe : featured.nameEn}</div>
                  <div className="text-slate-400 text-sm">{isRtl ? featured.roleHe : featured.roleEn}</div>
                </div>
              </div>
              <div className={`bg-gradient-to-br ${featured.gradient} rounded-2xl px-4 py-2.5 text-center`}>
                <div className="text-white font-black text-xl">{featured.result}</div>
                <div className="text-white/70 text-xs">{isRtl ? featured.resultLabelHe : featured.resultLabelEn}</div>
              </div>
            </div>
          </motion.div>

          {/* 2 smaller */}
          <div className="flex flex-col gap-5">
            {rest.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative bg-white/5 border border-white/10 rounded-3xl p-6 overflow-hidden group hover:bg-white/8 hover:border-white/18 transition-all duration-300 flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-1">
                    {Array(5).fill(0).map((_, j) => <Star key={j} size={12} className="text-amber-400 fill-amber-400" />)}
                  </div>
                  <div className={`bg-gradient-to-br ${t.gradient} rounded-xl px-3 py-1.5 text-center`}>
                    <div className="text-white font-black text-sm">{t.result}</div>
                    <div className="text-white/70 text-[10px]">{isRtl ? t.resultLabelHe : t.resultLabelEn}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  &ldquo;{isRtl ? t.textHe : t.textEn}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/8">
                  <div className={`w-9 h-9 bg-gradient-to-br ${t.gradient} rounded-xl flex items-center justify-center text-white text-xs font-black`}>
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
        </div>

        {/* stats bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "50+", l: isRtl ? "פרויקטים" : "Projects" },
            { n: "100%", l: isRtl ? "שביעות רצון" : "Satisfaction" },
            { n: "7d", l: isRtl ? "מסירה ממוצעת" : "Avg. Delivery" },
            { n: "24/7", l: isRtl ? "תמיכה" : "Support" },
          ].map(s => (
            <div key={s.l} className="bg-white/4 border border-white/8 rounded-2xl p-5 text-center">
              <div className="text-2xl font-black text-white mb-1">{s.n}</div>
              <div className="text-slate-500 text-xs">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

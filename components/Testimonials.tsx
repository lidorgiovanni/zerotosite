"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, TrendingUp, Users, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialsProps { lang: "he" | "en"; }

const testimonials = [
  {
    nameHe: "יוסי כהן", nameEn: "Yossi Cohen",
    roleHe: "בעל מסעדה 'הטעם הים תיכוני'", roleEn: "Owner, 'Mediterranean Taste' Restaurant",
    textHe: "לפני שפנינו ללידור, האתר שלנו היה ישן ואיטי. אנשים נכנסו ויצאו תוך שניות. לידור בנה לנו אתר חדש תוך שבוע בדיוק — ומאז ההזמנות אונליין עלו ב-40%. הוא לא רק בנה אתר, הוא הבין מה המסעדה שלנו צריכה.",
    textEn: "Before we approached Lidor, our website was old and slow. People would enter and leave within seconds. Lidor built us a new site in exactly one week — and since then online orders have increased by 40%. He didn't just build a website, he understood what our restaurant needed.",
    avatar: "יכ", gradient: "from-orange-400 to-red-500",
    resultIcon: TrendingUp, result: "+40%", resultLabelHe: "הזמנות אונליין", resultLabelEn: "Online Orders",
    beforeHe: "אתר ישן ואיטי", beforeEn: "Old slow site",
    afterHe: "7 ימים → אתר חדש", afterEn: "7 days → new site",
  },
  {
    nameHe: "מיכל לוי", nameEn: "Michal Levi",
    roleHe: "בעלת 'מיכל מודה' — חנות אופנה", roleEn: "Owner, 'Michal Fashion' Online Store",
    textHe: "ניסיתי שני מפתחים לפני לידור — שניהם לקחו כסף ולא סיפקו. לידור שונה לגמרי. הוא עמד בכל מה שהבטיח, ענה לכל הודעה תוך שעה, ובסוף קיבלתי אתר שנראה בדיוק כמו שרציתי. המכירות עלו ב-60% בחודש הראשון.",
    textEn: "I tried two developers before Lidor — both took money and didn't deliver. Lidor is completely different. He kept every promise, answered every message within an hour, and in the end I got a site that looks exactly as I wanted. Sales increased by 60% in the first month.",
    avatar: "מל", gradient: "from-sky-400 to-blue-500",
    resultIcon: ShoppingBag, result: "+60%", resultLabelHe: "מכירות חודש ראשון", resultLabelEn: "First Month Sales",
    beforeHe: "2 מפתחים שנכשלו", beforeEn: "2 failed developers",
    afterHe: "מסירה בזמן, 100%", afterEn: "On-time delivery, 100%",
  },
  {
    nameHe: "דני אברהם", nameEn: "Danny Abraham",
    roleHe: "עו\"ד, משרד אברהם ושות'", roleEn: "Attorney, Abraham & Co.",
    textHe: "כעורך דין, האמינות של האתר שלי קריטית. לידור הבין את זה מהרגע הראשון. הוא בנה אתר שמקרין מקצועיות ואמינות. מאז ההשקה, הפניות מהאתר עלו פי 3 — ואיכות הלקוחות השתפרה משמעותית.",
    textEn: "As a lawyer, the credibility of my website is critical. Lidor understood that from the first moment. He built a site that radiates professionalism and credibility. Since launch, website inquiries have tripled — and the quality of clients has improved significantly.",
    avatar: "דא", gradient: "from-violet-400 to-purple-500",
    resultIcon: Users, result: "×3", resultLabelHe: "פניות מהאתר", resultLabelEn: "Website Inquiries",
    beforeHe: "מעט פניות מהאתר", beforeEn: "Few website leads",
    afterHe: "פי 3 פניות איכותיות", afterEn: "3x quality leads",
  },
];

export default function Testimonials({ lang }: TestimonialsProps) {
  const isRtl = lang === "he";
  const [active, setActive] = useState(0);
  const prev = () => setActive(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive(i => (i + 1) % testimonials.length);

  return (
    <section className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(14,165,233,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* header */}
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            className="inline-flex items-center gap-1.5 mb-5">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={22} className="text-amber-400 fill-amber-400" />)}
            <span className="text-amber-400 font-black text-lg ms-1">5.0</span>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-5">
            {isRtl ? "הם כבר בחרו בי" : "They Already Chose Me"}
          </motion.h2>
          <p className="text-slate-500 text-xl">{isRtl ? "תוצאות אמיתיות מלקוחות אמיתיים" : "Real results from real clients"}</p>
        </div>

        {/* featured carousel */}
        <div className="relative mb-6">
          <AnimatePresence mode="wait">
            {testimonials.map((t, i) => i === active && (
              <motion.div key={i}
                initial={{ opacity: 0, x: isRtl ? -40 : 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRtl ? 40 : -40 }}
                transition={{ duration: 0.4 }}
                className="card-gradient-border rounded-3xl p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-8 items-center">
                  <div>
                    <Quote size={40} className="text-white/5 mb-5" />
                    <div className="flex gap-1 mb-5">
                      {Array(5).fill(0).map((_, j) => <Star key={j} size={15} className="text-amber-400 fill-amber-400" />)}
                    </div>
                    <p className="text-white text-lg md:text-xl leading-relaxed mb-7 font-medium">
                      &ldquo;{isRtl ? t.textHe : t.textEn}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${t.gradient} rounded-2xl flex items-center justify-center text-white font-black text-base flex-shrink-0`}>
                        {t.avatar}
                      </div>
                      <div>
                        <div className="font-black text-white">{isRtl ? t.nameHe : t.nameEn}</div>
                        <div className="text-slate-400 text-sm">{isRtl ? t.roleHe : t.roleEn}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row lg:flex-col gap-3">
                    <div className="flex-1 bg-white/5 border border-white/8 rounded-2xl p-4 text-center">
                      <div className={`text-3xl font-black bg-gradient-to-br ${t.gradient} bg-clip-text text-transparent`}>{t.result}</div>
                      <div className="text-slate-400 text-xs mt-1">{isRtl ? t.resultLabelHe : t.resultLabelEn}</div>
                    </div>
                    <div className="flex-1 bg-white/5 border border-white/8 rounded-2xl p-4">
                      <div className="text-xs text-red-400 bg-red-500/10 border border-red-500/15 px-2 py-1 rounded-lg mb-2 text-center">
                        {isRtl ? t.beforeHe : t.beforeEn}
                      </div>
                      <div className="text-center text-slate-600 text-xs mb-2">↓</div>
                      <div className="text-xs text-emerald-400 bg-emerald-500/10 border border-emerald-500/15 px-2 py-1 rounded-lg text-center">
                        {isRtl ? t.afterHe : t.afterEn}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* carousel controls + dots */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-sky-400" : "w-2 h-2 bg-white/20 hover:bg-white/40"}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={isRtl ? next : prev}
              className="w-10 h-10 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105">
              <ChevronLeft size={18} />
            </button>
            <button onClick={isRtl ? prev : next}
              className="w-10 h-10 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all hover:scale-105">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { n: "50+", l: isRtl ? "פרויקטים" : "Projects", sub: isRtl ? "הושלמו בהצלחה" : "completed" },
            { n: "100%", l: isRtl ? "שביעות רצון" : "Satisfaction", sub: isRtl ? "לקוחות מרוצים" : "happy clients" },
            { n: "7", l: isRtl ? "ימי מסירה" : "Days Delivery", sub: isRtl ? "בממוצע" : "on average" },
            { n: "1h", l: isRtl ? "זמן מענה" : "Response Time", sub: isRtl ? "בממוצע" : "on average" },
          ].map(s => (
            <div key={s.l} className="card-gradient-border rounded-2xl p-5 text-center">
              <div className="text-3xl font-black text-white mb-0.5">{s.n}</div>
              <div className="text-sky-400 text-sm font-bold">{s.l}</div>
              <div className="text-slate-600 text-xs mt-0.5">{s.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#f8faff] to-transparent pointer-events-none" />
    </section>
  );
}

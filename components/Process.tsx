"use client";
import { motion } from "framer-motion";
import { Phone, Paintbrush, Rocket, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react";

interface ProcessProps { lang: "he" | "en"; }

const steps = [
  {
    icon: Phone, num: "01", color: "#0ea5e9",
    he: { title: "שיחה חינמית", sub: "15 דקות שמשנות הכל", desc: "מספר לי על העסק שלך ומה המטרה. אני מקשיב, שואל שאלות חכמות, ומבין בדיוק מה יעבוד בשבילך.", bullets: ["ללא עלות", "ללא התחייבות", "מענה תוך שעה"] },
    en: { title: "Free Call", sub: "15 minutes that change everything", desc: "Tell me about your business and the goal. I listen, ask smart questions, and understand exactly what will work for you.", bullets: ["No cost", "No commitment", "Reply within 1 hour"] },
  },
  {
    icon: Paintbrush, num: "02", color: "#8b5cf6",
    he: { title: "עיצוב ובנייה", sub: "אתה רואה הכל בזמן אמת", desc: "אני בונה, אתה מאשר. כל שלב — אתה רואה את ההתקדמות. אין הפתעות. הכל בדיוק כמו שרצית.", bullets: ["עדכונים יומיים", "שינויים ללא עלות", "מסירה תוך 7 ימים"] },
    en: { title: "Design & Build", sub: "You see everything in real time", desc: "I build, you approve. Every step — you see the progress. No surprises. Everything exactly as you wanted.", bullets: ["Daily updates", "Changes at no cost", "Delivered in 7 days"] },
  },
  {
    icon: Rocket, num: "03", color: "#10b981",
    he: { title: "השקה ותמיכה", sub: "אני לא נעלם אחרי", desc: "האתר עולה לאוויר, אני מוודא שהכל עובד מושלם. ואחרי? זמין בוואטסאפ לשאלות ועדכונים.", bullets: ["תמיכה 30 יום", "הדרכה אישית", "זמין בוואטסאפ"] },
    en: { title: "Launch & Support", sub: "I don't disappear after", desc: "The site goes live, I make sure everything works perfectly. And after? Available on WhatsApp for questions and updates.", bullets: ["30-day support", "Personal training", "Available on WhatsApp"] },
  },
];

export default function Process({ lang }: ProcessProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(139,92,246,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "התהליך שלי" : "My Process"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-5">
            {isRtl ? "פשוט. שקוף. מהיר." : "Simple. Transparent. Fast."}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-400 text-xl max-w-lg mx-auto">
            {isRtl ? "מהשיחה הראשונה ועד שהאתר חי — אתה יודע הכל בכל שלב" : "From the first call to the site going live — you know everything at every step"}
          </motion.p>
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="hidden lg:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-emerald-500/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const c = isRtl ? step.he : step.en;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                className="relative group">
                <div className="h-full card-gradient-border rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{ background: `${step.color}15`, border: `1.5px solid ${step.color}30` }}>
                      <Icon size={26} style={{ color: step.color }} />
                    </div>
                    <div>
                      <div className="text-xs font-black tracking-widest" style={{ color: step.color }}>{step.num}</div>
                      <div className="text-slate-500 text-xs mt-0.5">{c.sub}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">{c.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm mb-6">{c.desc}</p>
                  <ul className="space-y-2.5">
                    {c.bullets.map(b => (
                      <li key={b} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle size={14} style={{ color: step.color }} className="flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 h-px w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${step.color}, transparent)` }} />
                </div>
                {i < steps.length - 1 && (
                  <div className={`hidden lg:flex absolute top-8 ${isRtl ? "-left-3" : "-right-3"} z-10 w-6 h-6 items-center justify-center`}>
                    <Arrow size={14} className="text-slate-600" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-14 text-center">
          <a href="https://wa.me/972543495645" target="_blank" rel="noopener noreferrer"
            className="btn-beam inline-flex items-center gap-2.5 bg-sky-500 hover:bg-sky-400 text-white font-black px-8 py-4 rounded-2xl transition-all hover:scale-[1.03] shadow-xl shadow-sky-500/25 text-base">
            {isRtl ? "🚀 התחל עכשיו — שיחה חינמית" : "🚀 Start Now — Free Call"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

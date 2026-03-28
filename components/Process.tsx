"use client";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Rocket } from "lucide-react";

interface ProcessProps {
  lang: "he" | "en";
}

const steps = [
  {
    icon: MessageSquare,
    he: { title: "שיחת היכרות", desc: "מבינים את הצרכים שלך, המטרות והקהל שלך. ללא עלות, ללא התחייבות." },
    en: { title: "Discovery Call", desc: "We understand your needs, goals and audience. No cost, no commitment." },
  },
  {
    icon: Paintbrush,
    he: { title: "עיצוב ופיתוח", desc: "בונים את האתר שלך עם תשומת לב לכל פרט. אתה מאשר בכל שלב." },
    en: { title: "Design & Build", desc: "We build your site with attention to every detail. You approve at every step." },
  },
  {
    icon: Rocket,
    he: { title: "השקה ותמיכה", desc: "מעלים לאוויר ומוודאים שהכל עובד מושלם. אנחנו כאן גם אחרי." },
    en: { title: "Launch & Support", desc: "We go live and make sure everything works perfectly. We're here after too." },
  },
];

export default function Process({ lang }: ProcessProps) {
  const isRtl = lang === "he";

  return (
    <section className={`py-24 bg-slate-900 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            {isRtl ? "איך אנחנו עובדים" : "How We Work"}
          </motion.h2>
          <p className="text-slate-400 text-lg">{isRtl ? "תהליך פשוט, תוצאות מרשימות" : "Simple process, impressive results"}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const content = isRtl ? step.he : step.en;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <div className="w-20 h-20 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={32} className="text-sky-400" />
                </div>
                <div className="absolute top-0 right-4 md:right-auto md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-sky-500 rounded-full flex items-center justify-center text-white text-xs font-black -mt-2">
                  {i + 1}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{content.title}</h3>
                <p className="text-slate-400 leading-relaxed">{content.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

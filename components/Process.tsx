"use client";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Rocket } from "lucide-react";

interface ProcessProps {
  lang: "he" | "en";
}

const steps = [
  {
    icon: MessageSquare,
    color: "from-sky-400 to-blue-500",
    he: { title: "שיחת היכרות", desc: "מבינים את הצרכים שלך, המטרות והקהל שלך. ללא עלות, ללא התחייבות." },
    en: { title: "Discovery Call", desc: "We understand your needs, goals and audience. No cost, no commitment." },
  },
  {
    icon: Paintbrush,
    color: "from-violet-400 to-purple-500",
    he: { title: "עיצוב ופיתוח", desc: "בונים את האתר שלך עם תשומת לב לכל פרט. אתה מאשר בכל שלב." },
    en: { title: "Design & Build", desc: "We build your site with attention to every detail. You approve at every step." },
  },
  {
    icon: Rocket,
    color: "from-emerald-400 to-teal-500",
    he: { title: "השקה ותמיכה", desc: "מעלים לאוויר ומוודאים שהכל עובד מושלם. אנחנו כאן גם אחרי." },
    en: { title: "Launch & Support", desc: "We go live and make sure everything works perfectly. We're here after too." },
  },
];

export default function Process({ lang }: ProcessProps) {
  const isRtl = lang === "he";

  return (
    <section className={`py-24 bg-slate-900 relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      {/* background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4"
          >
            {isRtl ? "התהליך שלנו" : "Our Process"}
          </motion.div>
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
          <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-sky-500/40 to-transparent" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const content = isRtl ? step.he : step.en;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center group"
              >
                <div className="relative inline-block mb-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 bg-slate-800 border-2 border-sky-500 rounded-full flex items-center justify-center text-sky-400 text-xs font-black">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-xl font-black text-white mb-3">{content.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{content.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

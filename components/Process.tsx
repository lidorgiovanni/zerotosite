"use client";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Rocket, ArrowLeft, ArrowRight } from "lucide-react";

interface ProcessProps {
  lang: "he" | "en";
}

const steps = [
  {
    icon: MessageSquare,
    gradient: "from-sky-500 to-blue-600",
    he: { title: "שיחת היכרות", desc: "מבינים את הצרכים שלך, המטרות והקהל שלך. ללא עלות, ללא התחייבות." },
    en: { title: "Discovery Call", desc: "We understand your needs, goals and audience. No cost, no commitment." },
  },
  {
    icon: Paintbrush,
    gradient: "from-violet-500 to-purple-600",
    he: { title: "עיצוב ופיתוח", desc: "בונים את האתר שלך עם תשומת לב לכל פרט. אתה מאשר בכל שלב." },
    en: { title: "Design & Build", desc: "We build your site with attention to every detail. You approve at every step." },
  },
  {
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-600",
    he: { title: "השקה ותמיכה", desc: "מעלים לאוויר ומוודאים שהכל עובד מושלם. אנחנו כאן גם אחרי." },
    en: { title: "Launch & Support", desc: "We go live and make sure everything works perfectly. We're here after too." },
  },
];

export default function Process({ lang }: ProcessProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className={`py-28 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className={`mb-16 ${isRtl ? "text-right" : "text-left"}`}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-widest mb-3"
          >
            {isRtl ? "התהליך שלנו" : "Our Process"}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {isRtl ? "איך אנחנו עובדים" : "How We Work"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "תהליך פשוט, תוצאות מרשימות" : "Simple process, impressive results"}</p>
        </div>

        <div className="relative">
          {/* connecting line desktop */}
          <div className="hidden md:block absolute top-10 left-[10%] right-[10%] h-px">
            <div className="w-full h-full bg-gradient-to-r from-sky-200 via-violet-200 to-emerald-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const content = isRtl ? step.he : step.en;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative group"
                >
                  {/* step number + icon */}
                  <div className="flex flex-col items-center md:items-center mb-6">
                    <div className={`relative w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={30} className="text-white" />
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-slate-900 text-xs font-black shadow-md">
                        {i + 1}
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-center">
                    <h3 className="text-xl font-black text-slate-900 mb-3">{content.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm">{content.desc}</p>
                  </div>

                  {/* arrow between steps (desktop) */}
                  {i < steps.length - 1 && (
                    <div className={`hidden md:flex absolute top-10 ${isRtl ? "-left-5" : "-right-5"} z-10 w-10 h-10 items-center justify-center`}>
                      <Arrow size={16} className="text-slate-300" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

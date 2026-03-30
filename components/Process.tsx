"use client";
import { motion } from "framer-motion";
import { MessageSquare, Paintbrush, Rocket } from "lucide-react";

interface ProcessProps { lang: "he" | "en"; }

const steps = [
  {
    icon: MessageSquare, num: "01",
    gradient: "from-sky-500 to-blue-600",
    glow: "rgba(14,165,233,0.4)",
    he: { title: "שיחת היכרות", desc: "מבינים את הצרכים שלך, המטרות והקהל שלך. ללא עלות, ללא התחייבות." },
    en: { title: "Discovery Call", desc: "We understand your needs, goals and audience. No cost, no commitment." },
  },
  {
    icon: Paintbrush, num: "02",
    gradient: "from-violet-500 to-purple-600",
    glow: "rgba(139,92,246,0.4)",
    he: { title: "עיצוב ופיתוח", desc: "בונים את האתר שלך עם תשומת לב לכל פרט. אתה מאשר בכל שלב." },
    en: { title: "Design & Build", desc: "We build your site with attention to every detail. You approve at every step." },
  },
  {
    icon: Rocket, num: "03",
    gradient: "from-emerald-500 to-teal-500",
    glow: "rgba(16,185,129,0.4)",
    he: { title: "השקה ותמיכה", desc: "מעלים לאוויר ומוודאים שהכל עובד מושלם. אנחנו כאן גם אחרי." },
    en: { title: "Launch & Support", desc: "We go live and make sure everything works perfectly. We're here after too." },
  },
];

export default function Process({ lang }: ProcessProps) {
  const isRtl = lang === "he";

  return (
    <section className={`relative py-28 bg-[#030712] overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(14,165,233,0.07),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.2em] mb-4">
            {isRtl ? "התהליך שלנו" : "Our Process"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4">
            {isRtl ? "איך אנחנו עובדים" : "How We Work"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "תהליך פשוט, תוצאות מרשימות" : "Simple process, impressive results"}</p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* connector */}
          <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-px bg-gradient-to-r from-sky-500/30 via-violet-500/30 to-emerald-500/30" />

          {steps.map((step, i) => {
            const Icon = step.icon;
            const content = isRtl ? step.he : step.en;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.18 }}
                className="group relative text-center">

                {/* number bg */}
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: step.glow }} />
                  <div className={`relative w-28 h-28 bg-gradient-to-br ${step.gradient} rounded-3xl flex flex-col items-center justify-center mx-auto shadow-2xl group-hover:scale-105 transition-transform duration-300`}
                    style={{ boxShadow: `0 20px 60px ${step.glow}` }}>
                    <Icon size={28} className="text-white mb-1" />
                    <span className="text-white/60 text-xs font-black">{step.num}</span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-3">{content.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm max-w-xs mx-auto">{content.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* top/bottom fade to white */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
}

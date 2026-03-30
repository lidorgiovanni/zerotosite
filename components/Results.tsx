"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Users, ShoppingBag, Star, Zap, Globe } from "lucide-react";

interface ResultsProps { lang: "he" | "en"; }

const resultsHe = [
  { icon: TrendingUp, color: "#10b981", n: "+40%",  label: "הזמנות אונליין",    sub: "מסעדה יוקרתית, תל אביב",       gradient: "from-emerald-500 to-teal-500" },
  { icon: ShoppingBag, color: "#8b5cf6", n: "+60%", label: "מכירות חודש ראשון", sub: "חנות אופנה אונליין",             gradient: "from-violet-500 to-purple-500" },
  { icon: Users,       color: "#0ea5e9", n: "×3",   label: "פניות מהאתר",       sub: "משרד עורכי דין",                gradient: "from-sky-500 to-blue-500" },
  { icon: Star,        color: "#f59e0b", n: "12%",  label: "שיעור המרה",         sub: "דף נחיתה לסטארטאפ",             gradient: "from-amber-500 to-orange-500" },
  { icon: Zap,         color: "#ec4899", n: "3 ימים", label: "מסירה ממוצעת",    sub: "דפי נחיתה",                     gradient: "from-pink-500 to-rose-500" },
  { icon: Globe,       color: "#6366f1", n: "98",   label: "Lighthouse Score",   sub: "ביצועים ממוצעים",               gradient: "from-indigo-500 to-blue-500" },
];

const resultsEn = [
  { icon: TrendingUp, color: "#10b981", n: "+40%",   label: "Online Orders",      sub: "Luxury restaurant, Tel Aviv",   gradient: "from-emerald-500 to-teal-500" },
  { icon: ShoppingBag, color: "#8b5cf6", n: "+60%",  label: "First Month Sales",  sub: "Fashion online store",          gradient: "from-violet-500 to-purple-500" },
  { icon: Users,       color: "#0ea5e9", n: "×3",    label: "Website Inquiries",  sub: "Law firm",                      gradient: "from-sky-500 to-blue-500" },
  { icon: Star,        color: "#f59e0b", n: "12%",   label: "Conversion Rate",    sub: "Startup landing page",          gradient: "from-amber-500 to-orange-500" },
  { icon: Zap,         color: "#ec4899", n: "3 days", label: "Avg. Delivery",     sub: "Landing pages",                 gradient: "from-pink-500 to-rose-500" },
  { icon: Globe,       color: "#6366f1", n: "98",    label: "Lighthouse Score",   sub: "Average performance",           gradient: "from-indigo-500 to-blue-500" },
];

export default function Results({ lang }: ResultsProps) {
  const isRtl = lang === "he";
  const results = isRtl ? resultsHe : resultsEn;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className={`py-28 bg-white relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(14,165,233,0.03),transparent)]" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "תוצאות אמיתיות" : "Real Results"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-5 leading-tight">
            {isRtl ? "מספרים שמדברים\nבעד עצמם" : "Numbers That\nSpeak for Themselves"}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="text-slate-500 text-xl max-w-xl mx-auto">
            {isRtl ? "לא הבטחות — תוצאות מדידות מפרויקטים אמיתיים" : "Not promises — measurable results from real projects"}
          </motion.p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {results.map((r, i) => {
            const Icon = r.icon;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="group relative bg-slate-50 hover:bg-white border border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/60 rounded-3xl p-7 transition-all duration-400 overflow-hidden">

                {/* bg glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${r.color}10, transparent 70%)` }} />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${r.color}15`, border: `1px solid ${r.color}25` }}>
                    <Icon size={22} style={{ color: r.color }} />
                  </div>

                  <div className="text-4xl font-black mb-1 bg-gradient-to-br bg-clip-text text-transparent"
                    style={{ backgroundImage: `linear-gradient(135deg, ${r.color}, ${r.color}aa)` }}>
                    {r.n}
                  </div>
                  <div className="text-slate-900 font-bold text-base mb-1">{r.label}</div>
                  <div className="text-slate-400 text-xs">{r.sub}</div>

                  {/* bottom accent line */}
                  <div className="mt-5 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${r.color}, transparent)` }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* bottom note */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            {isRtl
              ? "* תוצאות מבוססות על נתונים אמיתיים מלקוחות. תוצאות עשויות להשתנות בהתאם לתחום ולקמפיין."
              : "* Results based on real client data. Results may vary depending on industry and campaign."}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

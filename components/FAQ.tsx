"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQProps { lang: "he" | "en"; }

const faqsHe = [
  {
    q: "כמה זמן לוקח לבנות אתר?",
    a: "דף נחיתה — 3 ימים. אתר תדמית — 7 ימים. חנות אונליין — 14 ימים. אלו זמנים אמיתיים שאני עומד בהם, לא הבטחות ריקות.",
  },
  {
    q: "האם אני צריך לשלם מראש?",
    a: "לא. אני עובד עם 50% בהתחלה ו-50% רק אחרי שאתה מרוצה מהתוצאה ומאשר את האתר. אם לא מרוצה — לא משלם.",
  },
  {
    q: "מה קורה אם אני רוצה שינויים?",
    a: "שינויים במהלך הבנייה הם חלק מהתהליך — ללא עלות נוספת. אחרי ההשקה, שינויים קטנים גם הם בחינם. שינויים גדולים — נדבר ונסכים על מחיר הוגן.",
  },
  {
    q: "האם האתר יהיה מותאם למובייל?",
    a: "כן, 100%. כל אתר שאני בונה נראה מושלם על כל מסך — מובייל, טאבלט ומחשב. זה לא אופציה, זה סטנדרט.",
  },
  {
    q: "האם אתה עושה גם SEO?",
    a: "כן. כל אתר מגיע עם SEO בסיסי — מטא תגיות, מבנה נכון, מהירות טעינה. קידום אורגני מתקדם הוא שירות נפרד.",
  },
  {
    q: "מה קורה אחרי ההשקה?",
    a: "אני לא נעלם. 30 יום תמיכה מלאה כלולים בכל חבילה. אחרי זה — זמין בוואטסאפ לשאלות, עדכונים קטנים ועזרה. אתה לא לבד.",
  },
];

const faqsEn = [
  {
    q: "How long does it take to build a website?",
    a: "Landing page — 3 days. Business website — 7 days. Online store — 14 days. These are real timelines I stick to, not empty promises.",
  },
  {
    q: "Do I need to pay upfront?",
    a: "No. I work with 50% at the start and 50% only after you're satisfied with the result and approve the site. If you're not happy — you don't pay.",
  },
  {
    q: "What if I want changes?",
    a: "Changes during the build are part of the process — at no extra cost. After launch, small changes are also free. Big changes — we'll talk and agree on a fair price.",
  },
  {
    q: "Will the site be mobile-friendly?",
    a: "Yes, 100%. Every site I build looks perfect on every screen — mobile, tablet and desktop. This isn't an option, it's a standard.",
  },
  {
    q: "Do you do SEO?",
    a: "Yes. Every site comes with basic SEO — meta tags, proper structure, loading speed. Advanced organic promotion is a separate service.",
  },
  {
    q: "What happens after launch?",
    a: "I don't disappear. 30 days of full support is included in every package. After that — available on WhatsApp for questions, small updates and help. You're not alone.",
  },
];

export default function FAQ({ lang }: FAQProps) {
  const isRtl = lang === "he";
  const faqs = isRtl ? faqsHe : faqsEn;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`py-28 bg-white relative ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(14,165,233,0.03),transparent)]" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-500 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "שאלות נפוצות" : "FAQ"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {isRtl ? "יש לך שאלות?" : "Got Questions?"}
          </motion.h2>
          <p className="text-slate-500 text-lg">
            {isRtl ? "תשובות ישירות, ללא שטויות" : "Straight answers, no BS"}
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i
                  ? "border-sky-200 shadow-lg shadow-sky-50"
                  : "border-slate-100 hover:border-slate-200"
              }`}>

              <button onClick={() => setOpen(open === i ? null : i)}
                className={`w-full flex items-center justify-between gap-4 px-6 py-5 text-start transition-colors ${
                  open === i ? "bg-sky-50" : "bg-white hover:bg-slate-50"
                }`}>
                <span className={`font-bold text-base ${open === i ? "text-sky-700" : "text-slate-800"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? "bg-sky-500 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}>
                    <div className="px-6 pb-5 pt-1 bg-sky-50">
                      <p className="text-slate-600 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-12 text-center p-6 bg-slate-50 rounded-3xl border border-slate-100">
          <p className="text-slate-600 text-sm mb-3">
            {isRtl ? "יש לך שאלה שלא מופיעה כאן?" : "Have a question that's not listed here?"}
          </p>
          <a href={`https://wa.me/972543495645`} target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sky-600 font-bold text-sm hover:text-sky-500 transition-colors">
            {isRtl ? "שלח לי הודעה ואענה תוך שעה ←" : "Send me a message and I'll reply within an hour →"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

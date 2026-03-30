"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";
interface FAQProps { lang: "he" | "en"; }

const faqsHe = [
  { q: "כמה זמן לוקח לבנות אתר?", a: "דף נחיתה — 3 ימים. אתר תדמית — 7 ימים. חנות אונליין — 14 ימים. אלו זמנים אמיתיים שאני עומד בהם, לא הבטחות ריקות." },
  { q: "האם אני צריך לשלם מראש?", a: "לא. 50% בהתחלה ו-50% רק אחרי שאתה מרוצה ומאשר את האתר. אם לא מרוצה — לא משלם. פשוט כך." },
  { q: "מה קורה אם אני רוצה שינויים?", a: "שינויים במהלך הבנייה — ללא עלות נוספת. אחרי ההשקה, שינויים קטנים גם בחינם. שינויים גדולים — נדבר ונסכים על מחיר הוגן." },
  { q: "האם האתר יהיה מותאם למובייל?", a: "כן, 100%. כל אתר שאני בונה נראה מושלם על כל מסך. זה לא אופציה, זה סטנדרט. 70% מהגולשים מגיעים ממובייל." },
  { q: "האם אתה עושה גם SEO?", a: "כן. כל אתר מגיע עם SEO בסיסי — מטא תגיות, מבנה נכון, מהירות טעינה, schema markup. קידום אורגני מתקדם הוא שירות נפרד." },
  { q: "מה קורה אחרי ההשקה?", a: "30 יום תמיכה מלאה כלולים. אחרי זה — זמין בוואטסאפ לשאלות ועדכונים קטנים. אתה לא לבד." },
  { q: "האם אתה עובד עם עסקים מכל תחום?", a: "כן. בניתי אתרים למסעדות, עורכי דין, חנויות אופנה, מאמני כושר, חברות הייטק, ועוד. כל עסק מקבל פתרון מותאם." },
  { q: "מה ההבדל בינך לבין סוכנות?", a: "בסוכנות — מדבר עם מנהל פרויקטים שמעביר הודעות. אצלי — מדבר ישירות איתי. מהיר יותר, אישי יותר, ומחיר הוגן יותר." },
];

const faqsEn = [
  { q: "How long does it take to build a website?", a: "Landing page — 3 days. Business website — 7 days. Online store — 14 days. These are real timelines I stick to, not empty promises." },
  { q: "Do I need to pay upfront?", a: "No. 50% at the start and 50% only after you're satisfied and approve the site. If you're not happy — you don't pay. Simple as that." },
  { q: "What if I want changes?", a: "Changes during the build — at no extra cost. After launch, small changes are also free. Big changes — we'll talk and agree on a fair price." },
  { q: "Will the site be mobile-friendly?", a: "Yes, 100%. Every site I build looks perfect on every screen. This isn't an option, it's a standard. 70% of visitors come from mobile." },
  { q: "Do you do SEO?", a: "Yes. Every site comes with basic SEO — meta tags, proper structure, loading speed, schema markup. Advanced organic promotion is a separate service." },
  { q: "What happens after launch?", a: "30 days of full support included. After that — available on WhatsApp for questions and small updates. You're not alone." },
  { q: "Do you work with businesses from any industry?", a: "Yes. I've built sites for restaurants, lawyers, fashion stores, fitness coaches, tech companies, and more. Every business gets a tailored solution." },
  { q: "What's the difference between you and an agency?", a: "At an agency — you talk to a project manager who passes messages. With me — you talk directly to me. Faster, more personal, and fairer price." },
];

export default function FAQ({ lang }: FAQProps) {
  const isRtl = lang === "he";
  const faqs = isRtl ? faqsHe : faqsEn;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(14,165,233,0.06),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-sky-400 font-bold text-sm uppercase tracking-[0.25em] mb-4">
            {isRtl ? "שאלות נפוצות" : "FAQ"}
          </motion.p>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4">
            {isRtl ? "יש לך שאלות?" : "Got Questions?"}
          </motion.h2>
          <p className="text-slate-500 text-lg">{isRtl ? "תשובות ישירות, ללא שטויות" : "Straight answers, no BS"}</p>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className={`rounded-2xl overflow-hidden transition-all duration-300 ${
                open === i ? "card-gradient-border" : "bg-white/4 border border-white/8 hover:border-white/15"
              }`}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-start">
                <span className={`font-bold text-base transition-colors ${open === i ? "text-sky-300" : "text-slate-200"}`}>
                  {faq.q}
                </span>
                <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  open === i ? "bg-sky-500 text-white" : "bg-white/8 text-slate-400"
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
                    <div className="px-6 pb-5 pt-0">
                      <p className="text-slate-400 leading-relaxed text-sm">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mt-10 card-gradient-border rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-5">
          <div className={`flex-1 ${isRtl ? "text-right" : "text-left"}`}>
            <div className="text-white font-black text-base mb-1">
              {isRtl ? "יש לך שאלה שלא מופיעה כאן?" : "Have a question not listed here?"}
            </div>
            <div className="text-slate-500 text-sm">
              {isRtl ? "שלח הודעה ואענה תוך שעה" : "Send a message and I'll reply within an hour"}
            </div>
          </div>
          <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
            className="btn-beam flex-shrink-0 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-black px-6 py-3 rounded-2xl transition-all hover:scale-[1.03] whitespace-nowrap text-sm shadow-lg shadow-green-500/20">
            <MessageCircle size={16} />
            {isRtl ? "שאל אותי" : "Ask Me"}
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}

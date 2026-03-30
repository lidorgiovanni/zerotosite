"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, ArrowLeft, ArrowRight, MapPin } from "lucide-react";

const WHATSAPP = "972543495645";

interface ContactProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; whatsapp: string; or: string; name: string; email: string; message: string; send: string };
}

export default function Contact({ lang, t }: ContactProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="contact" className={`py-28 bg-[#030712] relative overflow-hidden ${isRtl ? "rtl" : "ltr"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(14,165,233,0.07),transparent)]" />
      <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            {isRtl ? "זמין עכשיו לפרויקטים חדשים" : "Available now for new projects"}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white mb-5">
            {t.title}
          </motion.h2>
          <p className="text-slate-400 text-xl">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* LEFT — personal + info */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-5">

            {/* personal card */}
            <div className="card-gradient-border rounded-3xl p-7">
              <div className="flex items-center gap-4 mb-5">
                {/* avatar */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-500 to-violet-600 flex items-center justify-center text-white text-2xl font-black flex-shrink-0 shadow-xl">
                  ל
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-[#030712]" />
                </div>
                <div>
                  <div className="text-white font-black text-lg">לידור</div>
                  <div className="text-slate-400 text-sm">{isRtl ? "מפתח ומעצב אתרים" : "Web Developer & Designer"}</div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin size={11} className="text-slate-500" />
                    <span className="text-slate-500 text-xs">{isRtl ? "ישראל 🇮🇱" : "Israel 🇮🇱"}</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {isRtl
                  ? "אני עובד לבד — כלומר אתה מדבר ישירות איתי, לא עם מנהל פרויקטים. אני זה שבונה, אני זה שעונה, ואני זה שאחראי על התוצאה."
                  : "I work alone — meaning you talk directly to me, not a project manager. I'm the one who builds, I'm the one who answers, and I'm the one responsible for the result."}
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="btn-beam w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-5 rounded-2xl transition-all hover:scale-[1.02] text-lg shadow-2xl shadow-green-500/20">
              <MessageCircle size={22} />
              {t.whatsapp}
            </a>

            {/* info items */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { icon: Phone, label: isRtl ? "טלפון / וואטסאפ" : "Phone / WhatsApp", value: "+972 54-349-5645", href: "tel:+972543495645" },
                { icon: Mail, label: isRtl ? "אימייל" : "Email", value: "lidor@zerotosite.co.il", href: "mailto:lidor@zerotosite.co.il" },
                { icon: Clock, label: isRtl ? "זמן מענה" : "Response Time", value: isRtl ? "עד שעה אחת" : "Within 1 hour", href: null },
              ].map((item, i) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-center gap-4 p-4 card-gradient-border rounded-2xl hover:scale-[1.01] transition-all group">
                    <div className="w-10 h-10 bg-sky-500/10 border border-sky-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-sky-500/20 transition-colors">
                      <Icon size={16} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-slate-500 text-xs">{item.label}</div>
                      <div className="text-white font-semibold text-sm">{item.value}</div>
                    </div>
                  </div>
                );
                return item.href
                  ? <a key={i} href={item.href}>{inner}</a>
                  : <div key={i}>{inner}</div>;
              })}
            </div>
          </motion.div>

          {/* RIGHT — form */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="card-gradient-border rounded-3xl p-8">

            <h3 className="text-white font-black text-xl mb-2">{isRtl ? "שלח הודעה" : "Send a Message"}</h3>
            <p className="text-slate-500 text-sm mb-7">{isRtl ? "אחזור אליך תוך שעה — מובטח" : "I'll reply within an hour — guaranteed"}</p>

            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const text = encodeURIComponent(`${isRtl ? "שלום לידור, שמי" : "Hi Lidor, my name is"} ${name}.\n${message}`);
              window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
            }} className="space-y-4">

              <div className="grid grid-cols-2 gap-4">
                <input name="name" type="text" required placeholder={t.name}
                  className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm" />
                <input name="email" type="email" placeholder={t.email}
                  className="col-span-2 sm:col-span-1 bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all text-sm" />
              </div>

              <textarea name="message" required rows={5} placeholder={t.message}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-white placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/8 transition-all resize-none text-sm" />

              <button type="submit"
                className="btn-beam w-full bg-sky-500 hover:bg-sky-400 text-white font-black py-4 rounded-2xl transition-all hover:scale-[1.02] shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 text-base">
                {t.send} <Arrow size={18} />
              </button>

              <p className="text-center text-slate-600 text-xs">
                {isRtl ? "🔒 הפרטים שלך שמורים אצלי בלבד" : "🔒 Your details are kept private"}
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none" />
    </section>
  );
}

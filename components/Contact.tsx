"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock, ArrowLeft, ArrowRight } from "lucide-react";

const WHATSAPP = "972543495645";

interface ContactProps {
  lang: "he" | "en";
  t: { title: string; subtitle: string; whatsapp: string; or: string; name: string; email: string; message: string; send: string };
}

export default function Contact({ lang, t }: ContactProps) {
  const isRtl = lang === "he";
  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  const info = [
    { icon: Phone, label: isRtl ? "טלפון / וואטסאפ" : "Phone / WhatsApp", value: "+972 54-349-5645" },
    { icon: Mail, label: isRtl ? "אימייל" : "Email", value: "lidor@zerotosite.co.il" },
    { icon: Clock, label: isRtl ? "זמן מענה" : "Response Time", value: isRtl ? "עד שעה" : "Within 1 hour" },
  ];

  return (
    <section id="contact" className={`py-28 bg-white ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-semibold px-4 py-2 rounded-full mb-5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            {isRtl ? "זמינים עכשיו" : "Available Now"}
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* left */}
          <motion.div initial={{ opacity: 0, x: isRtl ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-black py-5 rounded-2xl transition-all hover:scale-[1.02] mb-6 text-lg shadow-2xl shadow-green-500/20 animate-beam">
              <MessageCircle size={22} />
              {t.whatsapp}
            </a>

            <div className="space-y-3">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-200 hover:bg-sky-50/40 transition-all group">
                    <div className="w-11 h-11 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Icon size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                      <div className="text-slate-800 font-bold text-sm">{item.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* right — form */}
          <motion.div initial={{ opacity: 0, x: isRtl ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            className="bg-slate-900 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="flex-1 h-px bg-white/10" />
              <span className="text-slate-500 text-sm font-medium">{t.or}</span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              const text = encodeURIComponent(`${isRtl ? "שלום, שמי" : "Hi, my name is"} ${name}.\n${message}`);
              window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
            }} className="space-y-4">
              {[
                { name: "name", type: "text", placeholder: t.name, required: true },
                { name: "email", type: "email", placeholder: t.email, required: false },
              ].map(f => (
                <input key={f.name} name={f.name} type={f.type} required={f.required} placeholder={f.placeholder}
                  className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-white/8 transition-all text-sm" />
              ))}
              <textarea name="message" required rows={4} placeholder={t.message}
                className="w-full bg-white/6 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-sky-500/60 focus:bg-white/8 transition-all resize-none text-sm" />
              <button type="submit"
                className="relative overflow-hidden w-full bg-sky-500 hover:bg-sky-400 text-white font-black py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 animate-beam">
                {t.send} <Arrow size={17} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

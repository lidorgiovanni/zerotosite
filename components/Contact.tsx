"use client";
import { motion } from "framer-motion";
import { MessageCircle, Phone, Mail, Clock } from "lucide-react";

const WHATSAPP = "972543495645";

interface ContactProps {
  lang: "he" | "en";
  t: {
    title: string;
    subtitle: string;
    whatsapp: string;
    or: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
}

export default function Contact({ lang, t }: ContactProps) {
  const isRtl = lang === "he";

  const info = [
    { icon: Phone, label: isRtl ? "טלפון / וואטסאפ" : "Phone / WhatsApp", value: "+972 54-349-5645" },
    { icon: Mail, label: isRtl ? "אימייל" : "Email", value: "lidor@zerotosite.co.il" },
    { icon: Clock, label: isRtl ? "זמני מענה" : "Response Time", value: isRtl ? "עד שעה" : "Within 1 hour" },
  ];

  return (
    <section id="contact" className={`py-24 bg-slate-50 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-4"
          >
            {t.title}
          </motion.h2>
          <p className="text-slate-500 text-lg">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* left - info */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] mb-8 text-lg shadow-lg shadow-green-500/20"
            >
              <MessageCircle size={24} />
              {t.whatsapp}
            </a>

            <div className="space-y-4">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-100">
                    <div className="w-10 h-10 bg-sky-50 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-sky-500" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">{item.label}</div>
                      <div className="text-slate-800 font-semibold">{item.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* right - form */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-slate-200" />
              <span className="text-slate-400 text-sm font-medium">{t.or}</span>
              <div className="flex-1 h-px bg-slate-200" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const name = (form.elements.namedItem("name") as HTMLInputElement).value;
                const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
                const text = encodeURIComponent(`${isRtl ? "שלום, שמי" : "Hi, my name is"} ${name}.\n${message}`);
                window.open(`https://wa.me/${WHATSAPP}?text=${text}`, "_blank");
              }}
              className="space-y-4"
            >
              <input
                name="name"
                required
                placeholder={t.name}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 transition-all"
              />
              <input
                name="email"
                type="email"
                placeholder={t.email}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 transition-all"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder={t.message}
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-400/10 transition-all resize-none"
              />
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
              >
                {t.send}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

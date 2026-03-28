"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

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

  return (
    <section id="contact" className={`py-24 bg-slate-50 ${isRtl ? "rtl" : "ltr"}`}>
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100"
        >
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] mb-6"
          >
            <MessageCircle size={22} />
            {t.whatsapp}
          </a>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-slate-200" />
            <span className="text-slate-400 text-sm">{t.or}</span>
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
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
            <input
              name="email"
              type="email"
              placeholder={t.email}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder={t.message}
              className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02]"
            >
              {t.send}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

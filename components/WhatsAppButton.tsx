"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const WHATSAPP = "972543495645";
interface WhatsAppButtonProps { lang: "he" | "en"; }

const quickRepliesHe = [
  "אני רוצה דף נחיתה 🚀",
  "אני רוצה אתר תדמית 💼",
  "אני רוצה חנות אונליין 🛒",
  "כמה עולה אתר? 💰",
];

const quickRepliesEn = [
  "I want a landing page 🚀",
  "I want a business website 💼",
  "I want an online store 🛒",
  "How much does a site cost? 💰",
];

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false);
  const isRtl = lang === "he";
  const quickReplies = isRtl ? quickRepliesHe : quickRepliesEn;

  // נפתח אחרי 8 שניות
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 8000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = (msg: string) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className={`fixed bottom-5 left-5 z-50 flex flex-col items-start gap-2`}>

      {/* chat widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`w-64 bg-white rounded-2xl shadow-xl shadow-black/15 overflow-hidden border border-slate-100 ${isRtl ? "rtl" : "ltr"}`}
          >
            {/* header */}
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                  ל
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-300 rounded-full border-2 border-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-black text-xs">לידור</div>
                  <div className="text-green-100 text-[10px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-200 rounded-full" />
                    {isRtl ? "מחובר עכשיו" : "Online now"}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors p-0.5">
                <X size={15} />
              </button>
            </div>

            {/* message bubble */}
            <div className="bg-[#ece5dd] px-3 py-3">
              <div className={`flex ${isRtl ? "justify-end" : "justify-start"}`}>
                <div className="bg-white rounded-xl rounded-tl-sm px-3 py-2 max-w-[90%] shadow-sm">
                  <p className="text-slate-800 text-xs leading-relaxed">
                    {isRtl ? "היי! 👋 אני לידור. במה אני יכול לעזור?" : "Hey! 👋 I'm Lidor. How can I help?"}
                  </p>
                  <div className="text-slate-400 text-[9px] mt-0.5 text-end">
                    {isRtl ? "עכשיו" : "now"} ✓✓
                  </div>
                </div>
              </div>
            </div>

            {/* quick replies */}
            <div className={`bg-white px-3 py-2.5 space-y-1.5 ${isRtl ? "rtl" : "ltr"}`}>
              <p className="text-slate-400 text-[10px] font-medium mb-1.5">
                {isRtl ? "בחר נושא:" : "Choose a topic:"}
              </p>
              {quickReplies.map((reply, i) => (
                <motion.button key={i}
                  initial={{ opacity: 0, x: isRtl ? 8 : -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => sendMessage(reply)}
                  className="w-full text-start px-3 py-2 rounded-lg bg-slate-50 hover:bg-[#25D366]/10 border border-slate-100 hover:border-[#25D366]/25 text-slate-700 hover:text-[#128C7E] text-xs font-medium transition-all flex items-center justify-between group">
                  <span>{reply}</span>
                  <Send size={11} className="text-slate-300 group-hover:text-[#25D366] transition-colors flex-shrink-0" />
                </motion.button>
              ))}
            </div>

            {/* input footer */}
            <div className="bg-white px-3 pb-3">
              <div
                className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 cursor-pointer hover:border-[#25D366]/40 transition-colors"
                onClick={() => sendMessage(isRtl ? "שלום לידור, אני רוצה לדבר איתך" : "Hi Lidor, I'd like to talk with you")}>
                <input readOnly placeholder={isRtl ? "כתוב הודעה..." : "Type a message..."}
                  className="flex-1 bg-transparent text-xs text-slate-400 outline-none cursor-pointer" />
                <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <Send size={11} className="text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* main button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200, damping: 16 }}
        className="relative">

        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15 pointer-events-none" />
            <span className="absolute -inset-1 rounded-full bg-[#25D366]/10 pointer-events-none" />
          </>
        )}

        {/* unread badge */}
        {!open && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3, type: "spring" }}
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-white text-[9px] font-black z-10">
            1
          </motion.div>
        )}

        <button onClick={() => setOpen(!open)}
          className="relative w-12 h-12 bg-[#25D366] hover:bg-[#1db954] text-white rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 flex items-center justify-center hover:scale-110">
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}><X size={18} /></motion.div>
              : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}><MessageCircle size={20} /></motion.div>
            }
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}

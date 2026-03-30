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
  "אני רוצה לשמוע עוד 👋",
];

const quickRepliesEn = [
  "I want a landing page 🚀",
  "I want a business website 💼",
  "I want an online store 🛒",
  "How much does a site cost? 💰",
  "I want to learn more 👋",
];

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const [open, setOpen] = useState(false);
  const isRtl = lang === "he";
  const quickReplies = isRtl ? quickRepliesHe : quickRepliesEn;

  // פותח אחרי 5 שניות
  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = (msg: string) => {
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <div className={`fixed bottom-6 ${isRtl ? "left-6" : "left-6"} z-50 flex flex-col items-start gap-3`}>

      {/* chat widget */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className={`w-72 bg-white rounded-3xl shadow-2xl shadow-black/20 overflow-hidden border border-slate-100 ${isRtl ? "rtl" : "ltr"}`}
          >
            {/* header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-black text-lg flex-shrink-0">
                  ל
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-300 rounded-full border-2 border-[#25D366]" />
                </div>
                <div>
                  <div className="text-white font-black text-sm">לידור</div>
                  <div className="text-green-100 text-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-200 rounded-full" />
                    {isRtl ? "מחובר עכשיו" : "Online now"}
                  </div>
                </div>
              </div>
              <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* chat body */}
            <div className="bg-[#e5ddd5] px-4 py-4 space-y-3" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}>
              {/* incoming message */}
              <div className={`flex ${isRtl ? "justify-end" : "justify-start"}`}>
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] shadow-sm">
                  <p className="text-slate-800 text-sm leading-relaxed">
                    {isRtl
                      ? "היי! 👋 אני לידור. במה אני יכול לעזור לך היום?"
                      : "Hey! 👋 I'm Lidor. How can I help you today?"}
                  </p>
                  <div className="text-slate-400 text-[10px] mt-1 text-end">
                    {isRtl ? "עכשיו" : "now"} ✓✓
                  </div>
                </div>
              </div>
            </div>

            {/* quick replies */}
            <div className={`bg-white px-4 py-3 space-y-2 ${isRtl ? "rtl" : "ltr"}`}>
              <p className="text-slate-400 text-xs font-medium mb-2">
                {isRtl ? "בחר נושא לשיחה:" : "Choose a topic:"}
              </p>
              {quickReplies.map((reply, i) => (
                <motion.button key={i}
                  initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => sendMessage(reply)}
                  className="w-full text-start px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 border border-slate-100 text-slate-700 hover:text-[#128C7E] text-sm font-medium transition-all flex items-center justify-between group">
                  <span>{reply}</span>
                  <Send size={13} className="text-slate-300 group-hover:text-[#25D366] transition-colors flex-shrink-0" />
                </motion.button>
              ))}
            </div>

            {/* footer */}
            <div className="bg-white px-4 pb-4">
              <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2.5 cursor-pointer hover:border-[#25D366]/40 transition-colors"
                onClick={() => sendMessage(isRtl ? "שלום לידור, אני רוצה לדבר איתך" : "Hi Lidor, I'd like to talk with you")}>
                <input readOnly placeholder={isRtl ? "כתוב הודעה..." : "Type a message..."} className="flex-1 bg-transparent text-sm text-slate-500 outline-none cursor-pointer" />
                <div className="w-7 h-7 bg-[#25D366] rounded-full flex items-center justify-center flex-shrink-0">
                  <Send size={13} className="text-white" />
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
        transition={{ delay: 2, type: "spring", stiffness: 180, damping: 14 }}
        className="relative"
      >
        {!open && (
          <>
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
            <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/10 pointer-events-none" />
          </>
        )}

        {/* unread badge */}
        {!open && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 3, type: "spring" }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-[10px] font-black z-10">
            1
          </motion.div>
        )}

        <button onClick={() => setOpen(!open)}
          className="relative w-14 h-14 bg-[#25D366] hover:bg-[#1db954] text-white rounded-full shadow-2xl shadow-green-500/35 transition-all duration-300 flex items-center justify-center hover:scale-110">
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
              : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><MessageCircle size={25} /></motion.div>
            }
          </AnimatePresence>
        </button>
      </motion.div>
    </div>
  );
}

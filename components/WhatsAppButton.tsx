"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface WhatsAppButtonProps { lang: "he" | "en"; }

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const label = lang === "he" ? "דברו איתי עכשיו" : "Chat with me now";

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 180, damping: 14 }}
      className="fixed bottom-6 left-6 z-50"
    >
      {/* outer pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-15 pointer-events-none" />
      <span className="absolute -inset-1.5 rounded-full bg-[#25D366]/10 pointer-events-none" />

      <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer"
        className="relative flex items-center gap-0 bg-[#25D366] hover:bg-[#1db954] text-white font-bold rounded-full shadow-2xl shadow-green-500/35 transition-all duration-300 group overflow-hidden hover:shadow-green-500/50">
        {/* icon */}
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <MessageCircle size={25} />
        </div>
        {/* expanding label */}
        <div className="max-w-0 group-hover:max-w-[180px] overflow-hidden transition-all duration-300 ease-out whitespace-nowrap">
          <span className="pr-5 text-sm font-bold">{label}</span>
        </div>
      </a>
    </motion.div>
  );
}

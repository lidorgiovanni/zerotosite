"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface WhatsAppButtonProps { lang: "he" | "en"; }

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const label = lang === "he" ? "דברו איתי עכשיו" : "Chat with me now";

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 group"
    >
      {/* pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none" />
      <span className="absolute inset-[-4px] rounded-full bg-[#25D366]/15 pointer-events-none" />

      <div className="relative flex items-center gap-0 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full shadow-2xl shadow-green-500/30 transition-all duration-300 overflow-hidden">
        {/* icon always visible */}
        <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
          <MessageCircle size={24} />
        </div>
        {/* label expands on hover */}
        <div className="max-w-0 group-hover:max-w-[200px] overflow-hidden transition-all duration-300 ease-out">
          <span className="pr-5 text-sm whitespace-nowrap">{label}</span>
        </div>
      </div>
    </motion.a>
  );
}

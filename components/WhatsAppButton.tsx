"use client";
import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP = "972543495645";

interface WhatsAppButtonProps {
  lang: "he" | "en";
}

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const label = lang === "he" ? "אנחנו זמינים בשבילכם" : "We're available for you";

  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring" }}
      className="fixed bottom-6 left-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-4 py-3 rounded-full shadow-xl shadow-green-500/30 transition-all hover:scale-105 group"
    >
      <MessageCircle size={22} />
      <span className="text-sm max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
        {label}
      </span>
    </motion.a>
  );
}

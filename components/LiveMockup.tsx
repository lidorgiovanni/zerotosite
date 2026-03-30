"use client";
import { motion } from "framer-motion";
import { Star, TrendingUp, Phone } from "lucide-react";

interface LiveMockupProps { isRtl: boolean; }

const fade = (delay: number, y = 12) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5, ease: "easeOut" as const },
});

const slideIn = (delay: number) => ({
  initial: { opacity: 0, scaleX: 0 },
  animate: { opacity: 1, scaleX: 1 },
  transition: { delay, duration: 0.6, ease: "easeOut" as const },
});

export default function LiveMockup({ isRtl }: LiveMockupProps) {
  return (
    <div className="relative">
      {/* glows */}
      <div className="absolute -inset-16 bg-sky-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -inset-8 bg-violet-500/8 rounded-full blur-2xl pointer-events-none" />

      {/* browser shell */}
      <div className="relative rounded-3xl overflow-hidden border border-white/12 shadow-[0_60px_180px_rgba(0,0,0,0.85)] animate-float"
        style={{ background: "#0d1117" }}>

        {/* ── title bar ── */}
        <div className="flex items-center gap-2 px-5 py-3 bg-[#161b22] border-b border-white/6">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 mx-3 bg-[#21262d] rounded-md px-3 py-1 text-[11px] text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-glow-pulse flex-shrink-0" />
            myclient.co.il
            <span className="ms-auto text-emerald-400 font-bold text-[10px]">● Live</span>
          </div>
        </div>

        {/* ── website content ── */}
        <div className="overflow-hidden" style={{ height: 430, background: "#fff" }}>

          {/* progress bar */}
          <motion.div className="absolute top-[52px] left-0 right-0 h-[2px] z-30 origin-left"
            style={{ background: "linear-gradient(90deg,#0ea5e9,#8b5cf6,#10b981)" }}
            initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 2.2, ease: "easeInOut" }} />

          {/* NAVBAR */}
          <motion.div {...fade(0.7, -8)}
            className="flex items-center justify-between px-5 py-2.5 bg-white border-b border-slate-100 sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-sky-500 to-violet-600" />
              <div className="h-2.5 w-16 bg-slate-800 rounded-full" />
            </div>
            <div className="flex gap-3">
              {[40, 48, 36, 44].map((w, i) => (
                <motion.div key={i} {...fade(0.8 + i * 0.07)}
                  className="h-1.5 bg-slate-200 rounded-full" style={{ width: w }} />
              ))}
            </div>
            <motion.div {...fade(1.1)}
              className="h-7 w-20 rounded-full bg-sky-500 shadow-md shadow-sky-500/30" />
          </motion.div>

          {/* HERO SECTION */}
          <div className="relative px-5 pt-5 pb-4 overflow-hidden"
            style={{ background: "linear-gradient(135deg,#030712 0%,#0a1628 60%,#0d1117 100%)" }}>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_50%_0%,rgba(14,165,233,0.22),transparent)]" />
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "18px 18px" }} />

            {/* badge */}
            <motion.div {...fade(1.2)}
              className="inline-flex items-center gap-1.5 bg-sky-500/15 border border-sky-500/25 rounded-full px-2.5 py-1 mb-2.5">
              <span className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse" />
              <span className="text-sky-300 text-[10px] font-semibold">{isRtl ? "זמין לפרויקטים" : "Available now"}</span>
            </motion.div>

            {/* headline — grows like typing */}
            <div className="mb-2 space-y-1.5 overflow-hidden">
              <motion.div className="h-[18px] bg-white/90 rounded-full origin-left"
                {...slideIn(1.35)} style={{ width: "82%" }} />
              <motion.div className="h-[18px] rounded-full origin-left"
                style={{ background: "linear-gradient(90deg,#38bdf8,#818cf8,#c084fc)", width: "60%" }}
                {...slideIn(1.65)} />
            </div>

            {/* subtitle lines */}
            <div className="space-y-1 mb-3">
              {[78, 62, 48].map((w, i) => (
                <motion.div key={i} {...fade(1.9 + i * 0.12)}
                  className="h-1.5 bg-slate-400/30 rounded-full" style={{ width: `${w}%` }} />
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex gap-2">
              <motion.div {...fade(2.25)} style={{ originX: 0 }}
                className="h-8 w-28 bg-sky-500 rounded-xl shadow-lg shadow-sky-500/40" />
              <motion.div {...fade(2.4)}
                className="h-8 w-20 bg-white/8 border border-white/15 rounded-xl" />
            </div>

            {/* floating cursor */}
            <motion.div className="absolute pointer-events-none z-20"
              style={{ top: 0, left: 0 }}
              animate={{ x: [80, 160, 120, 200, 90], y: [60, 100, 160, 80, 120] }}
              transition={{ delay: 2.5, duration: 7, repeat: Infinity, ease: "easeInOut" }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 2L15 9L9 10.5L6.5 16L3 2Z" fill="white" stroke="#38bdf8" strokeWidth="1.2" strokeLinejoin="round" />
              </svg>
            </motion.div>
          </div>

          {/* SERVICES ROW */}
          <div className="px-5 py-3 bg-white">
            <motion.div {...fade(2.5)} className="h-2 w-20 bg-sky-400/25 rounded-full mb-2.5" />
            <div className="grid grid-cols-3 gap-2">
              {[
                { c: "#0ea5e9", label: isRtl ? "דף נחיתה" : "Landing Page", delay: 2.6 },
                { c: "#8b5cf6", label: isRtl ? "אתר תדמית" : "Business Site", delay: 2.75 },
                { c: "#10b981", label: isRtl ? "חנות אונליין" : "Online Store", delay: 2.9 },
              ].map((card, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 14, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: card.delay, type: "spring", stiffness: 200, damping: 18 }}
                  className="rounded-xl p-2.5 border"
                  style={{ background: `${card.c}08`, borderColor: `${card.c}22` }}>
                  <div className="w-5 h-5 rounded-lg mb-1.5" style={{ background: `${card.c}28` }} />
                  <div className="text-[9px] font-bold mb-1" style={{ color: card.c }}>{card.label}</div>
                  <div className="h-1 w-full rounded-full mb-0.5" style={{ background: `${card.c}25` }} />
                  <div className="h-1 w-3/4 rounded-full" style={{ background: `${card.c}15` }} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* TESTIMONIAL + STATS */}
          <div className="px-5 pb-3 bg-white">
            <div className="grid grid-cols-2 gap-2">
              {/* testimonial card */}
              <motion.div {...fade(3.1)}
                className="rounded-xl p-3 bg-slate-50 border border-slate-100">
                <div className="flex gap-0.5 mb-1.5">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={8} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <div className="space-y-1 mb-2">
                  <div className="h-1 w-full bg-slate-200 rounded-full" />
                  <div className="h-1 w-4/5 bg-slate-200 rounded-full" />
                  <div className="h-1 w-3/5 bg-slate-200 rounded-full" />
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-br from-orange-400 to-red-500" />
                  <div className="h-1.5 w-12 bg-slate-300 rounded-full" />
                </div>
              </motion.div>

              {/* stats */}
              <div className="space-y-2">
                {[
                  { n: "+40%", l: isRtl ? "הזמנות" : "Orders", c: "#10b981", delay: 3.2 },
                  { n: "7d", l: isRtl ? "מסירה" : "Delivery", c: "#0ea5e9", delay: 3.3 },
                  { n: "5.0★", l: isRtl ? "דירוג" : "Rating", c: "#f59e0b", delay: 3.4 },
                ].map((s, i) => (
                  <motion.div key={i} {...fade(s.delay)}
                    className="flex items-center gap-2 rounded-lg px-2.5 py-1.5 border"
                    style={{ background: `${s.c}06`, borderColor: `${s.c}18` }}>
                    <span className="text-xs font-black" style={{ color: s.c }}>{s.n}</span>
                    <span className="text-[9px] text-slate-400">{s.l}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── FLOATING CARDS ── */}

      {/* new order */}
      <motion.div
        initial={{ opacity: 0, x: -30, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 3.6, type: "spring", stiffness: 150 }}
        className="absolute -bottom-5 -left-10">
        <motion.div animate={{ y: [0, -9, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="bg-white rounded-2xl px-4 py-3 shadow-2xl flex items-center gap-3 border border-slate-100">
          <div className="w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/30">
            <TrendingUp size={18} className="text-white" />
          </div>
          <div>
            <div className="text-[11px] text-slate-400 font-medium">{isRtl ? "הזמנה חדשה 🎉" : "New order 🎉"}</div>
            <div className="text-emerald-600 font-black text-lg leading-none">+₪850</div>
          </div>
        </motion.div>
      </motion.div>

      {/* site live */}
      <motion.div
        initial={{ opacity: 0, y: -24, scale: 0.85 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 3.0, type: "spring", stiffness: 150 }}
        className="absolute -top-5 -right-8">
        <motion.div animate={{ y: [0, 9, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
          className="bg-sky-500 rounded-2xl px-4 py-3 shadow-2xl shadow-sky-500/40 flex items-center gap-2.5">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <div>
            <div className="text-white font-black text-sm leading-none">{isRtl ? "האתר חי! 🚀" : "Site is Live! 🚀"}</div>
            <div className="text-sky-100 text-[10px] mt-0.5">{isRtl ? "תוך 7 ימים" : "In 7 days"}</div>
          </div>
        </motion.div>
      </motion.div>

      {/* rating */}
      <motion.div
        initial={{ opacity: 0, x: 24, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 4.0, type: "spring", stiffness: 150 }}
        className="absolute top-[38%] -right-12">
        <motion.div animate={{ y: [0, -7, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4.5 }}
          className="bg-white rounded-2xl px-3.5 py-3 shadow-2xl border border-slate-100">
          <div className="flex gap-0.5 mb-1">
            {Array(5).fill(0).map((_, i) => <Star key={i} size={11} className="text-amber-400 fill-amber-400" />)}
          </div>
          <div className="text-slate-800 font-black text-sm">5.0</div>
          <div className="text-slate-400 text-[10px]">{isRtl ? "לקוח מרוצה" : "Happy client"}</div>
        </motion.div>
      </motion.div>

      {/* phone call */}
      <motion.div
        initial={{ opacity: 0, x: -20, scale: 0.85 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 4.5, type: "spring", stiffness: 150 }}
        className="absolute top-[18%] -left-10">
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="bg-white rounded-2xl px-3.5 py-3 shadow-2xl border border-slate-100 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-violet-500 rounded-xl flex items-center justify-center">
            <Phone size={14} className="text-white" />
          </div>
          <div>
            <div className="text-slate-800 font-black text-xs">{isRtl ? "לקוח חדש!" : "New lead!"}</div>
            <div className="text-violet-500 text-[10px] font-bold">{isRtl ? "מהאתר" : "From website"}</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

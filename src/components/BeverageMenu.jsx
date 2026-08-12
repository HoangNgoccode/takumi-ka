import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";
import { drinks } from "@/lib/menuData";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

// Tiny radar-ish taste profile rendered as three bars
function TasteProfile({ profile }) {
  const rows = [
    { label: "甘味", labelEn: "Sweetness", value: profile.sweetness },
    { label: "酸味", labelEn: "Acidity", value: profile.acidity },
    { label: "コク", labelEn: "Body", value: profile.body },
  ];
  return (
    <div className="mt-4 space-y-3">
      {rows.map((r) => (
        <div key={r.label} className="flex items-center gap-4">
          <span className="w-14 shrink-0 text-xs text-muted-foreground">{r.label}</span>
          <div className="flex-1 flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  n <= r.value ? "bg-[hsl(var(--wood))]" : "bg-[hsl(var(--sand))]/60"
                }`}
              />
            ))}
          </div>
          <span className="w-16 shrink-0 text-[10px] italic text-muted-foreground text-right">{r.labelEn}</span>
        </div>
      ))}
    </div>
  );
}

export default function BeverageMenu() {
  const { addItem } = useCart();
  const [openId, setOpenId] = useState(null);

  return (
    <section id="drinks" className="relative bg-[hsl(30_24%_92%)] py-24 md:py-36">
      {/* vertical slats motif */}
      <div className="absolute inset-0 koushi-bg opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-10">
        {/* header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))]">
              02 — Oshinagaki
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.1] text-balance">
              十の飲物、十の余韻
            </h2>
            <p className="mt-6 max-w-xl text-foreground/70 leading-[1.8]">
              豆を選び、水を選び、温度を選ぶ。
              それぞれの杯に、異なる時間が流れる。
            </p>
          </div>
        </div>

        {/* list */}
        <ul className="divide-y divide-[hsl(var(--wood))]/15 border-y border-[hsl(var(--wood))]/15">
          {drinks.map((d, i) => {
            const open = openId === d.id;
            return (
              <li key={d.id}>
                <button
                  onClick={() => setOpenId(open ? null : d.id)}
                  className="w-full flex items-center gap-4 md:gap-8 py-6 text-left group focus-visible:outline-none"
                  aria-expanded={open}
                >
                  <span className="font-mono text-xs text-muted-foreground tabular-nums w-8 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 min-w-0">
                    <span className="flex items-baseline gap-3 flex-wrap">
                      <span className="font-heading text-xl md:text-2xl">{d.nameJp}</span>
                      <span className="text-sm italic text-muted-foreground">{d.nameEn}</span>
                    </span>
                  </span>
                  <span className="font-heading text-lg tabular-nums shrink-0">{yen(d.price)}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-500 shrink-0 ${open ? "rotate-180" : ""}`}
                    strokeWidth={1.5}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 pl-12 md:pl-16 pr-2 grid md:grid-cols-2 gap-6">
                        <div>
                          <p className="text-sm text-foreground/70 leading-[1.8] mb-1">{d.note}</p>
                          <TasteProfile profile={d.profile} />
                        </div>
                        <div className="flex md:justify-end items-end">
                          <button
                            onClick={() => addItem(d)}
                            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] text-sm hover:bg-[hsl(var(--espresso))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
                            aria-label={`${d.nameJp}を注文に追加`}
                          >
                            <Plus className="w-4 h-4" strokeWidth={1.5} />
                            注文に加える
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
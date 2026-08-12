import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, ChevronDown } from "lucide-react";
import { Image } from "@/components/ui/image";
import { pastries, drinks } from "@/lib/menuData";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

function TasteProfile({ profile }) {
  const rows = [["甘味", profile.sweetness], ["酸味", profile.acidity], ["コク", profile.body]];
  return (
    <div className="mt-3 space-y-2">
      {rows.map(([label, v]) => (
        <div key={label} className="flex items-center gap-3">
          <span className="w-10 text-[11px] text-muted-foreground">{label}</span>
          <div className="flex-1 flex gap-1">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className={`h-1 flex-1 rounded-full ${n <= v ? "bg-[hsl(var(--wood))]" : "bg-[hsl(var(--sand))]/60"}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OrderMenu() {
  const { addItem } = useCart();
  const [tab, setTab] = useState("pastries");
  const [openDrink, setOpenDrink] = useState(null);

  return (
    <section id="menu" className="bg-[hsl(var(--parchment))] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex justify-center mb-10 md:mb-14">
          <div className="inline-flex p-1 rounded-full border hairline">
            {[["pastries", "菓子 · Pastries"], ["drinks", "飲物 · Drinks"]].map(([key, label]) => (
              <button key={key} onClick={() => setTab(key)} className={`min-h-[44px] px-6 md:px-8 rounded-full text-sm font-heading transition-colors ${tab === key ? "bg-[hsl(var(--wood))] text-[hsl(var(--parchment))]" : "text-foreground/70"}`}>
                {label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {tab === "pastries" ? (
            <motion.ul key="pastries" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
              {pastries.map((p) => (
                <li key={p.id} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
                    <Image src={p.image} alt={p.nameJp} fittingType="fill" className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
                    <span className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[hsl(var(--parchment))]/85 backdrop-blur-sm text-[10px] text-foreground/70">
                      <span className="relative flex w-1.5 h-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--wood))] opacity-50 animate-ping" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[hsl(var(--wood))]" />
                      </span>
                      {p.batch}
                    </span>
                  </div>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div><h3 className="font-heading text-xl">{p.nameJp}</h3><p className="text-xs italic text-muted-foreground">{p.nameEn}</p><p className="mt-2 text-sm text-foreground/70">{p.desc}</p></div>
                    <p className="font-heading text-lg tabular-nums shrink-0">{yen(p.price)}</p>
                  </div>
                  <button onClick={() => addItem(p)} className="mt-4 w-full inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full border hairline text-sm hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors">
                    <Plus className="w-4 h-4" strokeWidth={1.5} /> 注文に加える
                  </button>
                </li>
              ))}
            </motion.ul>
          ) : (
            <motion.ul key="drinks" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="divide-y divide-[hsl(var(--wood))]/15 border-y border-[hsl(var(--wood))]/15 max-w-3xl mx-auto">
              {drinks.map((d, i) => {
                const open = openDrink === d.id;
                return (
                  <li key={d.id}>
                    <button onClick={() => setOpenDrink(open ? null : d.id)} className="w-full flex items-center gap-4 py-5 text-left focus-visible:outline-none" aria-expanded={open}>
                      <span className="font-mono text-xs text-muted-foreground tabular-nums w-8">{String(i + 1).padStart(2, "0")}</span>
                      <span className="flex-1 flex items-baseline gap-3 flex-wrap"><span className="font-heading text-lg md:text-xl">{d.nameJp}</span><span className="text-sm italic text-muted-foreground">{d.nameEn}</span></span>
                      <span className="font-heading text-base tabular-nums">{yen(d.price)}</span>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-500 ${open ? "rotate-180" : ""}`} strokeWidth={1.5} />
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }} className="overflow-hidden">
                          <div className="pb-5 pl-12 md:pl-16 grid sm:grid-cols-2 gap-4 items-end">
                            <div><p className="text-sm text-foreground/70">{d.note}</p><TasteProfile profile={d.profile} /></div>
                            <div className="flex sm:justify-end">
                              <button onClick={() => addItem(d)} className="inline-flex items-center gap-2 min-h-[44px] px-6 rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] text-sm hover:bg-[hsl(var(--espresso))] transition-colors">
                                <Plus className="w-4 h-4" strokeWidth={1.5} /> 注文に加える
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
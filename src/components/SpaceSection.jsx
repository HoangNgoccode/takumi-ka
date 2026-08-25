import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/cartContext";
import { coffees } from "@/lib/menuData";

const yen = (n) => `¥${n.toLocaleString()}`;

export default function SpaceSection() {
  const { addItem } = useCart();

  return (
    <section className="bg-[hsl(var(--parchment))] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-3">
            Morning Brew · 朝の一杯
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-[1.2] text-balance">
            新しい一日を、珈琲で目覚める
          </h2>
          <p className="mt-4 text-sm text-foreground/60">
            朝の光に溶ける一杯。心と体を、ゆっくりと起こします。
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="divide-y hairline"
        >
          {coffees.map((c) => (
            <li key={c.id} className="py-5 flex items-start justify-between gap-6">
              <div className="min-w-0">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-heading text-xl">{c.nameJp}</h3>
                  <span className="text-xs italic text-muted-foreground">{c.nameEn}</span>
                </div>
                <p className="mt-1.5 text-sm text-foreground/70">{c.desc}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <p className="font-heading text-lg tabular-nums">{yen(c.price)}</p>
                <button
                  onClick={() => addItem(c)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border hairline hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors"
                  aria-label={`${c.nameJp}を注文に加える`}
                >
                  <Plus className="w-4 h-4" strokeWidth={1.5} />
                </button>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
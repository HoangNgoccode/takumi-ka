import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { creamRolls } from "@/lib/menuData";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

export default function OrderMenu() {
  const { addItem } = useCart();

  return (
    <section id="menu" className="bg-[hsl(var(--parchment))] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-3">La Crème · 菓子棚</p>
          <h2 className="font-heading text-3xl md:text-4xl text-balance">Sweet Cream Rolls</h2>
          <p className="mt-4 text-sm text-foreground/60">職人がひと巻きずつ、丁寧に。お好みの味をお選びください。</p>
        </div>

        {creamRolls.length === 0 ? (
          <p className="text-center text-sm text-foreground/50 py-12">ただいま仕込み中です。</p>
        ) : (
          <motion.ul initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10">
            {creamRolls.map((p) => (
              <li key={p.id} className="group">
                <div className="relative aspect-square overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
                  <Image src={p.image} alt={p.nameJp} fittingType="fit" className="w-full h-full transition-transform duration-700 group-hover:scale-105" />
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
        )}
      </div>
    </section>
  );
}
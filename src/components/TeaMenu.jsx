import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useCart } from "@/lib/cartContext";
import { teas } from "@/lib/menuData";

const yen = (n) => `¥${n.toLocaleString()}`;

export default function TeaMenu() {
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
            Tea Time · 茶の間
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-[1.2] text-balance">
            一服の茶で、心を澄ませる
          </h2>
          <p className="mt-4 text-sm text-foreground/60">
            香り立つ茶葉を、丁寧に淹れて。穏やかな時間をお届けします。
          </p>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="divide-y hairline"
        >
          {teas.map((t) => (
            <li key={t.id} className="py-5 flex items-center justify-between gap-4 md:gap-6">
              {t.image ? (
                <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
                  <Image src={t.image} alt={t.nameJp} fittingType="fill" className="w-full h-full" />
                </div>
              ) : (
                <div className="w-16 h-16 md:w-20 md:h-20 shrink-0" />
              )}
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-3">
                  <h3 className="font-heading text-lg md:text-xl">{t.nameJp}</h3>
                  <span className="text-xs italic text-muted-foreground">{t.nameEn}</span>
                </div>
                <p className="mt-1 text-sm text-foreground/70">{t.desc}</p>
              </div>
              <div className="flex items-center gap-3 md:gap-4 shrink-0">
                <p className="font-heading text-base md:text-lg tabular-nums">{yen(t.price)}</p>
                <button
                  onClick={() => addItem(t)}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border hairline hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors"
                  aria-label={`${t.nameJp}を注文に加える`}
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
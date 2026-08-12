import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Image } from "@/components/ui/image";
import { pastries } from "@/lib/menuData";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

const accentTints = {
  espresso: "from-[#3b2a20] to-[#5a4334]",
  gold: "from-[#8b5e3c] to-[#c79a5b]",
  cream: "from-[#d9c5b2] to-[#e7dac8]",
  vanilla: "from-[#c9a86a] to-[#e6cf9c]",
};

export default function PastryGallery() {
  const { addItem } = useCart();
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="relative bg-[hsl(var(--parchment))] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* section header */}
        <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-24">
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))]">
              01 — Gallery of Textures
            </p>
          </div>
          <div className="md:col-span-8">
            <h2 className="font-heading text-4xl md:text-6xl leading-[1.1] text-balance">
              四つの菓子、四つの時間
            </h2>
            <p className="mt-6 max-w-xl text-foreground/70 leading-[1.8]">
              それぞれの素材と温度。職人が一つずつ手で整えた、
              触れる前に味わえる四つの構成。
            </p>
          </div>
        </div>

        {/* gallery grid */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
          {pastries.map((p, i) => (
            <li
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className={`group relative grid gap-6 ${
                i % 2 === 1 ? "md:mt-24" : ""
              }`}
            >
              {/* composition card */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
                  <Image
                    src={p.image}
                    alt={`${p.nameJp}の写真`}
                    fittingType="fill"
                    focalPointX={0.5}
                    focalPointY={0.5}
                    className="w-full h-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${accentTints[p.accent]} mix-blend-multiply opacity-0 group-hover:opacity-20 transition-opacity duration-700`}
                    aria-hidden="true"
                  />
                </div>

                {/* freshness indicator */}
                <div className="mt-4 flex items-center gap-2">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--wood))] opacity-40 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--wood))]" />
                  </span>
                  <span className="text-xs text-muted-foreground tracking-wide">
                    次の焼き上がり · {p.batch}
                  </span>
                </div>
              </motion.div>

              {/* details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="flex items-start justify-between gap-6"
              >
                <div className="min-w-0">
                  <h3 className="font-heading text-2xl md:text-3xl leading-tight">{p.nameJp}</h3>
                  <p className="text-xs italic text-muted-foreground tracking-wide">{p.nameEn}</p>
                  <p className="mt-3 text-sm text-foreground/70 leading-[1.7] max-w-xs">{p.desc}</p>
                </div>
                <div className="flex flex-col items-end gap-4 shrink-0">
                  <p className="font-heading text-xl tabular-nums">{yen(p.price)}</p>
                  <button
                    onClick={() => addItem(p)}
                    className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-full border hairline text-sm hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
                    aria-label={`${p.nameJp}を注文に追加`}
                  >
                    <Plus className="w-4 h-4" strokeWidth={1.5} />
                    注文に加える
                  </button>
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
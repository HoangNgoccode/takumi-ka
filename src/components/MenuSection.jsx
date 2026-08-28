import React, { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { coffees, teas, creamRolls } from "@/lib/menuData";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

const SIZES = [
  { id: "s", label: "S", delta: -60 },
  { id: "m", label: "M", delta: 0 },
  { id: "l", label: "L", delta: 100 },
];

function DrinkRow({ drink }) {
  const { addItem } = useCart();
  const [sizeId, setSizeId] = useState("m");
  const sizeObj = SIZES.find((s) => s.id === sizeId);
  const unitPrice = drink.price + sizeObj.delta;

  const handleAdd = () => {
    addItem({
      ...drink,
      id: `${drink.id}-${sizeId}`,
      nameJp: `${drink.nameJp}（${sizeObj.label}）`,
      nameEn: `${drink.nameEn} · ${sizeObj.label}`,
      price: unitPrice,
    });
  };

  return (
    <li className="py-5 flex items-center justify-between gap-4 md:gap-6">
      <div className="relative w-16 h-16 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
        <img src={drink.image} alt={drink.nameJp} className="w-full h-full object-cover" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-3">
          <h3 className="font-heading text-lg md:text-xl">{drink.nameJp}</h3>
          <span className="text-xs italic text-muted-foreground">{drink.nameEn}</span>
        </div>
        <p className="mt-1 text-sm text-foreground/70">{drink.desc}</p>
        <div className="mt-2 inline-flex items-center gap-1 border hairline rounded-full p-0.5">
          {SIZES.map((s) => (
            <button
              key={s.id}
              onClick={() => setSizeId(s.id)}
              className={`min-w-[28px] h-7 px-2 rounded-full text-xs font-medium transition-colors ${
                sizeId === s.id
                  ? "bg-[hsl(var(--wood))] text-[hsl(var(--parchment))]"
                  : "text-foreground/70 hover:bg-[hsl(var(--sand))]/40"
              }`}
              aria-pressed={sizeId === s.id}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-end gap-2 shrink-0">
        <p className="font-heading text-base md:text-lg tabular-nums">{yen(unitPrice)}</p>
        <button
          onClick={handleAdd}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border hairline hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors"
          aria-label={`${drink.nameJp}（${sizeObj.label}）を注文に追加`}
        >
          <Plus className="w-4 h-4" strokeWidth={1.5} />
        </button>
      </div>
    </li>
  );
}

function PastryCard({ pastry }) {
  const { addItem } = useCart();
  return (
    <li className="group">
      <div className="relative aspect-square overflow-hidden rounded-sm bg-[hsl(var(--sand))]/30">
        <img src={pastry.image} alt={pastry.nameJp} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-xl">{pastry.nameJp}</h3>
          <p className="text-xs italic text-muted-foreground">{pastry.nameEn}</p>
          <p className="mt-2 text-sm text-foreground/70">{pastry.desc}</p>
        </div>
        <p className="font-heading text-lg tabular-nums shrink-0">{yen(pastry.price)}</p>
      </div>
      <button
        onClick={() => addItem(pastry)}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 min-h-[44px] rounded-full border hairline text-sm hover:bg-[hsl(var(--wood))] hover:text-[hsl(var(--parchment))] hover:border-[hsl(var(--wood))] transition-colors"
      >
        <Plus className="w-4 h-4" strokeWidth={1.5} /> 注文に追加
      </button>
    </li>
  );
}

export default function MenuSection() {
  return (
    <section id="menu" className="bg-[hsl(var(--parchment))] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-3">La Crème · メニュー</p>
          <h2 className="font-heading text-3xl md:text-4xl text-balance">お選びください</h2>
          <p className="mt-4 text-sm text-foreground/60">一杯の飲み物と、一つの菓子。職人の手仕事をどうぞ。</p>
        </div>

        <Tabs defaultValue="drinks" className="w-full">
          <TabsList className="mx-auto mb-10 grid grid-cols-2 max-w-xs rounded-full bg-[hsl(var(--sand))]/50">
            <TabsTrigger value="drinks" className="rounded-full">ドリンク</TabsTrigger>
            <TabsTrigger value="pastries" className="rounded-full">クリームロール</TabsTrigger>
          </TabsList>

          <TabsContent value="drinks">
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="divide-y hairline max-w-3xl mx-auto"
            >
              {[...coffees, ...teas].map((c) => (
                <DrinkRow key={c.id} drink={c} />
              ))}
            </motion.ul>
          </TabsContent>

          <TabsContent value="pastries">
            <motion.ul
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-10"
            >
              {creamRolls.map((p) => (
                <PastryCard key={p.id} pastry={p} />
              ))}
            </motion.ul>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
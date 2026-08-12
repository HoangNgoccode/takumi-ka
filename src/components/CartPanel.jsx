import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

export default function CartPanel() {
  const { items, isOpen, setOpen, updateQty, removeItem, totalPrice, totalCount, clear } = useCart();

  const progress = totalCount > 0 ? Math.min(100, (totalCount / 5) * 100) : 0;

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[hsl(var(--parchment))] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="注文内容"
      >
        <div className="flex items-center justify-between px-6 md:px-8 h-16 md:h-20 border-b hairline">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Your Order</p>
            <h2 className="font-heading text-lg">お選びした品</h2>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-[hsl(var(--sand))]/40 transition-colors focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))]"
            aria-label="閉じる"
          >
            <X className="w-5 h-5" strokeWidth={1.5} />
          </button>
        </div>

        {/* tea-pour progress */}
        <div className="px-6 md:px-8 pt-4">
          <div className="h-px w-full bg-[hsl(var(--sand))]">
            <div
              className="h-px bg-[hsl(var(--wood))] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            {totalCount >= 5
              ? "職人にお渡しできます"
              : "もう少しお選びください"}
          </p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <div className="w-16 h-16 rounded-full border border-[hsl(var(--sand))] flex items-center justify-center">
                <span className="font-heading text-2xl text-[hsl(var(--sand))]" aria-hidden="true">器</span>
              </div>
              <p className="font-heading text-lg">まだ器は空です</p>
              <p className="text-sm text-muted-foreground max-w-[220px]">
                菓子と飲物を選ぶと、ここに並びます。
              </p>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-heading text-base leading-tight">{item.nameJp}</p>
                    <p className="text-xs italic text-muted-foreground">{item.nameEn}</p>
                    <p className="mt-1 text-sm text-foreground/70">{yen(item.price)}</p>
                    <div className="mt-3 inline-flex items-center gap-3 border hairline rounded-full px-1 py-1">
                      <button
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        className="w-8 h-8 rounded-full hover:bg-[hsl(var(--sand))]/40 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))]"
                        aria-label="一つ減らす"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-5 text-center text-sm tabular-nums">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        className="w-8 h-8 rounded-full hover:bg-[hsl(var(--sand))]/40 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))]"
                        aria-label="一つ増やす"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                  <p className="font-heading text-base tabular-nums">{yen(item.price * item.qty)}</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="self-start text-xs text-muted-foreground hover:text-[hsl(var(--wood))] underline underline-offset-4"
                  >
                    削除
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t hairline px-6 md:px-8 py-6 space-y-4">
          <div className="flex items-baseline justify-between">
            <span className="text-sm text-muted-foreground">小計</span>
            <span className="font-heading text-2xl tabular-nums">{yen(totalPrice)}</span>
          </div>
          <button
            disabled={items.length === 0}
            className="w-full min-h-[52px] rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] font-heading tracking-wide hover:bg-[hsl(var(--espresso))] disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
            style={{ backgroundImage: "linear-gradient(90deg, transparent, hsl(var(--sand)/0.15), transparent)", backgroundSize: "200% 100%" }}
          >
            選択を確定する
          </button>
          {items.length > 0 && (
            <button
              onClick={clear}
              className="w-full text-xs text-muted-foreground hover:text-[hsl(var(--wood))] underline underline-offset-4"
            >
              すべて取り消す
            </button>
          )}
        </div>
      </aside>
    </>
  );
}
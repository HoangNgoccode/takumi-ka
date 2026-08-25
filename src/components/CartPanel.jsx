import React from "react";
import { X, Plus, Minus } from "lucide-react";
import { useCart } from "@/lib/cartContext";

const yen = (n) => `¥${n.toLocaleString()}`;

export default function CartPanel() {
  const { items, isOpen, setOpen, updateQty, removeItem, totalPrice, totalCount, clear, note, setNote } = useCart();
  const progress = Math.min(100, (totalCount / 5) * 100);

  return (
    <>
      <div className={`fixed inset-0 z-50 bg-espresso/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setOpen(false)} />
      <aside className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-[hsl(var(--parchment))] shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isOpen ? "translate-x-0" : "translate-x-full"}`} role="dialog" aria-label="注文内容">
        <div className="flex items-center justify-between px-6 md:px-8 h-16 md:h-20 border-b hairline">
          <div><p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Your Order</p><h2 className="font-heading text-lg">お選びした品</h2></div>
          <button onClick={() => setOpen(false)} className="inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-[hsl(var(--sand))]/40" aria-label="閉じる"><X className="w-5 h-5" strokeWidth={1.5} /></button>
        </div>

        <div className="px-6 md:px-8 pt-4">
          <div className="h-px w-full bg-[hsl(var(--sand))]"><div className="h-px bg-[hsl(var(--wood))] transition-all duration-700" style={{ width: `${progress}%` }} /></div>
          <p className="mt-2 text-xs text-muted-foreground">{totalCount >= 5 ? "職人にお渡しできます" : "もう少しお選びください"}</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3">
              <span className="font-heading text-2xl text-[hsl(var(--sand))]">器</span>
              <p className="font-heading text-lg">まだ器は空です</p>
              <p className="text-sm text-muted-foreground max-w-[220px]">菓子と飲物を選ぶと、ここに並びます。</p>
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
                      <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-full hover:bg-[hsl(var(--sand))]/40 flex items-center justify-center" aria-label="減らす"><Minus className="w-3.5 h-3.5" /></button>
                      <span className="w-5 text-center text-sm tabular-nums">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full hover:bg-[hsl(var(--sand))]/40 flex items-center justify-center" aria-label="増やす"><Plus className="w-3.5 h-3.5" /></button>
                    </div>
                  </div>
                  <p className="font-heading text-base tabular-nums">{yen(item.price * item.qty)}</p>
                  <button onClick={() => removeItem(item.id)} className="self-start text-xs text-muted-foreground hover:text-[hsl(var(--wood))] underline underline-offset-4">削除</button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t hairline px-6 md:px-8 py-6 space-y-4">
          {items.length > 0 && (
            <div className="space-y-2">
              <label htmlFor="order-note" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">ご要望 · Special Requests</label>
              <textarea
                id="order-note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="アレルギー、配膳の順番など、お気軽にお書きください。"
                rows={2}
                className="w-full rounded-sm border hairline bg-transparent px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-[hsl(var(--wood))] resize-none"
              />
            </div>
          )}
          <div className="flex items-baseline justify-between"><span className="text-sm text-muted-foreground">小計</span><span className="font-heading text-2xl tabular-nums">{yen(totalPrice)}</span></div>
          <button disabled={items.length === 0} className="w-full min-h-[52px] rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] font-heading hover:bg-[hsl(var(--espresso))] disabled:opacity-40 disabled:cursor-not-allowed transition-colors">選択を確定する</button>
          {items.length > 0 && <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-[hsl(var(--wood))] underline underline-offset-4">すべて取り消す</button>}
        </div>
      </aside>
    </>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cartContext";

export default function Navbar() {
  const { totalCount, setOpen } = useCart();
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[hsl(var(--parchment))]/80 border-b hairline">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-heading text-xl md:text-2xl">木漏れ日</Link>
        <a href="#menu" className="hidden md:block text-sm text-foreground/70 hover:text-[hsl(var(--wood))]">メニュー</a>
        <button onClick={() => setOpen(true)} className="relative inline-flex items-center justify-center w-12 h-12 rounded-full hover:bg-[hsl(var(--sand))]/40 focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))]" aria-label="注文カートを開く">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {totalCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] text-[11px] flex items-center justify-center">{totalCount}</span>
          )}
        </button>
      </nav>
    </header>
  );
}
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useCart } from "@/lib/cartContext";

const LOGO_URL = "https://media.base44.com/images/public/6a7c0fbc3673521b41e904a4/a8dad95c5_generated_image.png";

export default function Navbar() {
  const { totalCount, setOpen } = useCart();
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[hsl(var(--parchment))]/80 border-b hairline">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <Image src={LOGO_URL} alt="A Cup of Coffee" fittingType="fit" className="w-12 h-12 md:w-14 md:h-14 object-contain" />
          <span className="font-heading text-xl md:text-2xl tracking-wide">A Cup of Coffee</span>
        </Link>
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
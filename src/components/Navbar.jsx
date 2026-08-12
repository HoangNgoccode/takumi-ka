import React from "react";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cartContext";

const links = [
  { href: "#gallery", label: "菓子" },
  { href: "#drinks", label: "飲物" },
  { href: "#about", label: "店について" },
  { href: "#visit", label: "店舗" },
];

export default function Navbar() {
  const { totalCount, setOpen } = useCart();

  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-[hsl(var(--parchment))]/80 border-b hairline">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="flex items-baseline gap-3 group">
          <span className="font-heading text-xl md:text-2xl tracking-wide text-foreground">
            木漏れ日
          </span>
          <span className="hidden sm:inline text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Komorebi Café
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm tracking-wide text-foreground/70 hover:text-[hsl(var(--wood))] transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px after:bg-[hsl(var(--wood))] hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(true)}
          className="relative inline-flex items-center justify-center min-w-[48px] min-h-[48px] rounded-full hover:bg-[hsl(var(--sand))]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
          aria-label="注文カートを開く"
        >
          <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
          {totalCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[20px] h-5 px-1 rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] text-[11px] font-medium flex items-center justify-center">
              {totalCount}
            </span>
          )}
        </button>
      </nav>
    </header>
  );
}
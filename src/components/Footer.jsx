import React from "react";
import { Instagram } from "lucide-react";
import { Image } from "@/components/ui/image";

const LOGO_URL = "https://media.base44.com/images/public/6a7c0fbc3673521b41e904a4/a8dad95c5_generated_image.png";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--espresso))] text-[hsl(var(--parchment))]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src={LOGO_URL} alt="A Cup of Coffee" fittingType="fit" className="w-14 h-14 object-contain" />
            <div className="flex items-baseline gap-3">
              <span className="font-heading text-3xl tracking-wide">A Cup of Coffee</span>
              <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--sand))]">Pâtisserie & Café</span>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-[hsl(var(--parchment))]/70 leading-[1.8] text-sm">職人の手と珈琲の温度。<br />沖縄の海風と、一九八三年から。</p>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--sand))] mb-5">案内</p>
          <ul className="space-y-3 text-sm">
            <li><a href="#menu" className="hover:text-[hsl(var(--sand))]">メニュー</a></li>
          </ul>
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--sand))] mb-5">つながる</p>
          <p className="text-sm text-[hsl(var(--parchment))]/70">沖縄県那覇市 国際通り 三番地</p>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center justify-center w-12 h-12 rounded-full border border-[hsl(var(--parchment))]/20 hover:bg-[hsl(var(--parchment))]/10" aria-label="Instagram"><Instagram className="w-5 h-5" strokeWidth={1.5} /></a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-6 md:px-10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[hsl(var(--parchment))]/50">
        <p>© 2026 A Cup of Coffee. All rights reserved.</p>
        <div className="flex gap-6"><a href="#" className="hover:text-[hsl(var(--sand))]">プライバシー</a><a href="#" className="hover:text-[hsl(var(--sand))]">利用規約</a></div>
      </div>
    </footer>
  );
}
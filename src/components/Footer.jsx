import React from "react";
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[hsl(var(--espresso))] text-[hsl(var(--parchment))]">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-baseline gap-3">
            <span className="font-heading text-3xl">木漏れ日</span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-[hsl(var(--sand))]">Komorebi Café</span>
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
        <p>© 2026 木漏れ日カフェ. All rights reserved.</p>
        <div className="flex gap-6"><a href="#" className="hover:text-[hsl(var(--sand))]">プライバシー</a><a href="#" className="hover:text-[hsl(var(--sand))]">利用規約</a></div>
      </div>
    </footer>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const heroImage = "https://media.base44.com/images/public/6a7c0fbc3673521b41e904a4/3575629be_generated_52a9eac0.png";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--parchment))] pt-16 md:pt-20">
      <div className="absolute inset-0 koushi-bg opacity-40" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div className="md:col-span-7" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-5">A Cup of Coffee · Pâtisserie & Café</p>
          <h1 className="font-heading text-4xl md:text-6xl leading-[1.1] text-balance">職人の味、現代の調和</h1>
          <p className="mt-6 max-w-md text-foreground/70 leading-[1.8]">木漏れ日の揺れる店内で、一枚ずつ手で焼かれた菓子と、一杯ずつ注がれる珈琲。以下よりお選びください。</p>
        </motion.div>
        <motion.div className="md:col-span-5" initial={{ opacity: 0, scale: 1.05 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image src={heroImage} alt="ミルフィーユ" fittingType="fill" focalPointX={0.5} focalPointY={0.4} className="w-full h-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
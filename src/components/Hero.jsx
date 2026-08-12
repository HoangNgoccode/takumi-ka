import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Image } from "@/components/ui/image";

const heroImage = "https://media.base44.com/images/public/6a7c0fbc3673521b41e904a4/3575629be_generated_52a9eac0.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[hsl(var(--parchment))]">
      {/* wood texture layer (parallax slow) */}
      <motion.div
        className="absolute inset-0 koushi-bg opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-24 md:pt-0 min-h-screen grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left: vertical Japanese title */}
        <motion.div
          className="flex md:flex-col items-start gap-6 md:gap-10"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
          }}
        >
          <motion.div
            className="hidden md:flex vertical-jp text-[3.2rem] leading-none text-foreground/90 select-none"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
            aria-label="職人の味、現代の調和"
          >
            職人の味、現代の調和
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } } }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))]">
              Komorebi · Pâtisserie
            </p>
            <h1 className="md:hidden font-heading text-5xl leading-[1.1] text-foreground text-balance">
              職人の味、<br />現代の調和
            </h1>
            <p className="max-w-sm text-foreground/70 leading-[1.8]">
              木漏れ日の揺れる店内で、一枚ずつ手で焼かれた菓子と、
              一杯ずつ注がれる珈琲。京都の茶屋の静けさと、
              東京の直線がここで出会う。
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-full bg-[hsl(var(--wood))] text-[hsl(var(--parchment))] font-heading tracking-wide hover:bg-[hsl(var(--espresso))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
              >
                菓子を見る
              </a>
              <a
                href="#drinks"
                className="inline-flex items-center justify-center min-h-[52px] px-8 rounded-full border hairline text-foreground hover:border-[hsl(var(--wood))] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--wood))] focus-visible:ring-offset-2"
              >
                飲物を見る
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: macro pastry image */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 1.08, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <Image
              src={heroImage}
              alt="ミルフィーユのマクロ写真"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.4}
              className="w-full h-full"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-[hsl(var(--wood))]/15" />
          </div>
          {/* circular geometry motif */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full border border-[hsl(var(--wood))]/30 hidden md:block" aria-hidden="true">
            <div className="absolute inset-6 rounded-full border border-[hsl(var(--wood))]/20" />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4" strokeWidth={1.5} />
        </motion.span>
      </div>
    </section>
  );
}
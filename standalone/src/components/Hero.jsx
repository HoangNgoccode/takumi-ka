import React from 'react'
import { motion } from 'framer-motion'

const heroImage = 'https://i.pinimg.com/736x/06/a5/5b/06a55b5918bf4bbfdeff4206e4ca98e2.jpg'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--parchment))] pt-16 md:pt-20">
      <div className="absolute inset-0 koushi-bg opacity-40" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-5">
            A Cup of Coffee · Pâtisserie & Café
          </p>
          <h1 className="font-heading text-4xl md:text-6xl leading-[1.1] text-balance">
            手作りの味わい、現代の調和
          </h1>
          <p className="mt-6 max-w-md text-foreground/70 leading-[1.8]">
            木漏れ日の差し込む店で、一つずつ手焼きの菓子と、一杯ずつ淹れるコーヒー。どうぞお選びください。
          </p>
        </motion.div>
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <img src={heroImage} alt="ミルフィーユ" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
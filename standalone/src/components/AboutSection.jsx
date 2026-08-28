import React from 'react'
import { motion } from 'framer-motion'

const interiorImage = 'https://media.base44.com/images/public/6a7c0fbc3673521b41e904a4/0497db195_generated_f55bb5d1.png'

const pillars = [
  { jp: '木', en: 'Material', text: '杉と檜。生きている素材だけを、時とともに色濃く。' },
  { jp: '火', en: 'Fire', text: '朝の窯は200度。職人が温度を握り、菓子の命を決める。' },
  { jp: '光', en: 'Light', text: '正午の木漏れ日が床に落ちる。灯りは自然光を補うのみ。' },
  { jp: '静', en: 'Stillness', text: 'コーヒーが注がれる音だけ。一杯の時間、急がない。' },
]

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[hsl(var(--parchment))] py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
            <img src={interiorImage} alt="Komorebi カフェの空間" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-[hsl(var(--wood))]/30 flex items-center justify-center bg-[hsl(var(--parchment))]/70 backdrop-blur-sm" aria-hidden="true">
            <span className="font-heading text-lg text-[hsl(var(--wood))]">Kyoto</span>
          </div>
        </motion.div>

        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-6">
              03 — The Atelier
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.15] text-balance">
              木の温もりと、<br className="hidden md:block" />現代の線が<br className="hidden md:block" />共に生きる場所
            </h2>
            <p className="mt-8 max-w-xl text-foreground/70 leading-[1.9]">
              Komorebi Caféは、1983年、京都の路地で一つの菓子から始まりました。
              三代に渡る窯、変わらぬ手の温度。
              伝統の形をそのままに、今日の道具と感性で、毎日焼いています。
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10">
            {pillars.map((p, i) => (
              <motion.div
                key={p.jp}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-heading text-3xl text-[hsl(var(--wood))]" aria-hidden="true">{p.jp}</span>
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">{p.en}</span>
                </div>
                <p className="mt-3 text-sm text-foreground/70 leading-[1.7]">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
import React from "react";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

const SPACE_URL =
  "https://i.pinimg.com/736x/06/a5/5b/06a55b5918bf4bbfdeff4206e4ca98e2.jpg";

export default function SpaceSection() {
  return (
    <section className="bg-[hsl(var(--parchment))] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-8 md:gap-12 items-center">
        <motion.div
          className="md:col-span-7 order-2 md:order-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
            <Image
              src={SPACE_URL}
              alt="A Cup of Coffee の店内"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.45}
              className="w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5 order-1 md:order-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-5">
            The Space · 空間
          </p>
          <h2 className="font-heading text-3xl md:text-4xl leading-[1.2] text-balance">
            木漏れ日と、白磁の器
          </h2>
          <p className="mt-6 text-foreground/70 leading-[1.8]">
            沖縄の光が、杉の長いテーブルを縁取る。風が通る窓辺、静かな時間。一口の菓子に、海の息吹を。
          </p>
          <div className="mt-8 h-px w-16 bg-[hsl(var(--wood))]/30" />
        </motion.div>
      </div>
    </section>
  );
}
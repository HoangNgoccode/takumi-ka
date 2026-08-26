import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const hours = [
  { day: "月 — 木", time: "09:00 — 19:00" },
  { day: "金 — 土", time: "09:00 — 21:00" },
  { day: "日・祝日", time: "09:00 — 18:00" },
];

export default function VisitSection() {
  return (
    <section id="visit" className="relative bg-[hsl(30_24%_92%)] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.4em] text-[hsl(var(--wood))] mb-6">
              04 — Visit
            </p>
            <h2 className="font-heading text-4xl md:text-5xl leading-[1.15] text-balance">
              木漏れ日の下へ<br />お越しください
            </h2>
            <p className="mt-6 text-foreground/70 leading-[1.8] max-w-md">
              予約は不要。窯のそばに座り、焼き上がる音をお待ちください。
            </p>
          </div>

          <div className="md:col-span-7 grid sm:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[hsl(var(--wood))] mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">住所</p>
                  <p className="mt-1 leading-[1.7]">沖縄県那覇市<br />国際通り3番</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-[hsl(var(--wood))] mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">電話</p>
                  <p className="mt-1 leading-[1.7]">098-000-0000</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex items-start gap-4"
            >
              <Clock className="w-5 h-5 text-[hsl(var(--wood))] mt-1 shrink-0" strokeWidth={1.5} />
              <div className="w-full">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">営業時間</p>
                <ul className="mt-2 space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-baseline justify-between gap-4 border-b hairline pb-2">
                      <span className="text-sm">{h.day}</span>
                      <span className="font-heading text-sm tabular-nums">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
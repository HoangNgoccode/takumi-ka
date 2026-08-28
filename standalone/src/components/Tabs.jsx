import React, { useState } from 'react'

export default function Tabs({ tabs, children }) {
  const [active, setActive] = useState(tabs[0].id)
  return (
    <div className="w-full">
      <div className="mx-auto mb-10 flex justify-center">
        <div className="inline-flex gap-1 rounded-full bg-[hsl(var(--sand))]/50 p-1">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                active === t.id
                  ? 'bg-[hsl(var(--wood))] text-[hsl(var(--parchment))]'
                  : 'text-foreground/70 hover:bg-[hsl(var(--sand))]/40'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {children(active)}
    </div>
  )
}
"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({ images, name }: { images: string[]; name: string }) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="relative aspect-square overflow-hidden rounded-[10px] bg-sand group">
        <Image
          src={images[active]}
          alt={`${name} — view ${active + 1}`}
          fill
          priority
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
      </div>
      {images.length > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, i) => (
            <button
              key={src + i}
              onClick={() => setActive(i)}
              aria-label={`View image ${i + 1}`}
              aria-current={active === i}
              className={cn(
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-[6px] border transition-colors",
                active === i ? "border-forest" : "border-transparent hover:border-charcoal/30",
              )}
            >
              <Image src={src} alt="" fill sizes="80px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

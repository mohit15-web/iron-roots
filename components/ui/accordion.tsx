"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: { title: string; content: React.ReactNode }[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-charcoal/10 border-t border-b border-charcoal/10">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.title}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between py-4 text-left"
            >
              <span className="font-medium text-charcoal">{item.title}</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 text-charcoal/60 transition-transform duration-300",
                  isOpen && "rotate-180",
                )}
                aria-hidden
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-in-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="pb-4 text-sm text-charcoal/70 leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

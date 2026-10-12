"use client";

import { useState } from "react";
import { z } from "zod";
import { Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const emailSchema = z.string().email("Enter a valid email address");

type Status = "idle" | "loading" | "success" | "error";

export function NewsletterForm({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      setError(result.error.issues[0].message);
      setStatus("error");
      return;
    }
    setStatus("loading");
    setError("");
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <p
        className={cn(
          "flex items-center gap-2 text-sm",
          variant === "dark" ? "text-ivory" : "text-forest",
        )}
      >
        <Check className="h-4 w-4" />
        Thanks for subscribing. (Demo mode — no email has actually been sent.)
      </p>
    );
  }

  const inputStyles =
    variant === "dark"
      ? "bg-transparent border-ivory/40 text-ivory placeholder:text-ivory/50 focus:border-ivory"
      : "bg-white border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-forest";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
      <div className="flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
          aria-invalid={status === "error"}
          aria-describedby={status === "error" ? "newsletter-error" : undefined}
          className={cn(
            "w-full border rounded-[4px] px-4 py-3 text-sm focus:outline-none transition-colors",
            inputStyles,
          )}
        />
        {status === "error" && (
          <p id="newsletter-error" className="mt-1.5 text-xs text-terracotta">
            {error}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium rounded-[4px] transition-colors disabled:opacity-60",
          variant === "dark"
            ? "bg-ivory text-charcoal hover:bg-sand"
            : "bg-forest text-white hover:bg-charcoal",
        )}
      >
        {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
        Subscribe
      </button>
    </form>
  );
}

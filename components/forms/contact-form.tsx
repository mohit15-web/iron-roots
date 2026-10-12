"use client";

import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your name"),
  email: z.string().email("Enter a valid email address"),
  message: z.string().min(10, "Your message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

const fieldClass =
  "w-full border border-charcoal/20 rounded-[4px] px-4 py-3 text-sm bg-white focus:outline-none focus:border-forest transition-colors";
const labelClass = "block text-sm font-medium text-charcoal mb-1.5";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof FormValues] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 700));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-forest/5 rounded-[10px] p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-forest mx-auto mb-3" />
        <p className="font-serif text-2xl text-charcoal mb-2">Message sent</p>
        <p className="text-charcoal/70">
          Thanks for reaching out. (Demo mode — no message has actually been sent.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className={labelClass}>Name</label>
        <input
          id="name"
          className={fieldClass}
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        />
        {errors.name && <p className="mt-1.5 text-xs text-terracotta">{errors.name}</p>}
      </div>
      <div>
        <label htmlFor="email" className={labelClass}>Email</label>
        <input
          id="email"
          type="email"
          className={fieldClass}
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        />
        {errors.email && <p className="mt-1.5 text-xs text-terracotta">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className={labelClass}>Message</label>
        <textarea
          id="message"
          rows={5}
          className={`${fieldClass} resize-none`}
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        />
        {errors.message && <p className="mt-1.5 text-xs text-terracotta">{errors.message}</p>}
      </div>
      <Button type="submit" variant="primary" disabled={submitting} className="w-full sm:w-auto">
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Send Message
      </Button>
    </form>
  );
}

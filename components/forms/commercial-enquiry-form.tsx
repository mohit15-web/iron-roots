"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  businessEmail: z.string().email("Enter a valid business email"),
  company: z.string().min(2, "Enter your company name"),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Select a project type"),
  spaceSize: z.string().optional(),
  location: z.string().min(2, "Enter a project location"),
  budgetRange: z.string().optional(),
  projectDetails: z.string().min(10, "Tell us a little more about the project"),
});

type FormValues = z.infer<typeof schema>;

const fieldClass =
  "w-full border border-charcoal/20 rounded-[4px] px-4 py-3 text-sm bg-white focus:outline-none focus:border-forest transition-colors";
const labelClass = "block text-sm font-medium text-charcoal mb-1.5";
const errorClass = "mt-1.5 text-xs text-terracotta";

export function CommercialEnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-forest/30 bg-forest/5 rounded-[10px] p-8 text-center">
        <CheckCircle2 className="h-8 w-8 text-forest mx-auto mb-3" />
        <p className="font-serif text-2xl text-charcoal mb-2">Thank you</p>
        <p className="text-charcoal/70 max-w-md mx-auto">
          We&apos;ve received your project details. (Demo mode — no enquiry
          has actually been sent to our team.)
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>Full name</label>
          <input id="name" className={fieldClass} {...register("name")} />
          {errors.name && <p className={errorClass}>{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="businessEmail" className={labelClass}>Business email</label>
          <input id="businessEmail" type="email" className={fieldClass} {...register("businessEmail")} />
          {errors.businessEmail && <p className={errorClass}>{errors.businessEmail.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="company" className={labelClass}>Company</label>
          <input id="company" className={fieldClass} {...register("company")} />
          {errors.company && <p className={errorClass}>{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>Phone (optional)</label>
          <input id="phone" type="tel" className={fieldClass} {...register("phone")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="projectType" className={labelClass}>Project type</label>
          <select id="projectType" className={fieldClass} defaultValue="" {...register("projectType")}>
            <option value="" disabled>Select a project type</option>
            <option value="Office">Office</option>
            <option value="Hospitality / Café">Hospitality / Café</option>
            <option value="Retail">Retail</option>
            <option value="Residential Complex">Residential Complex</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && <p className={errorClass}>{errors.projectType.message}</p>}
        </div>
        <div>
          <label htmlFor="spaceSize" className={labelClass}>Approx. space size (optional)</label>
          <input id="spaceSize" placeholder="e.g. 2,500 sq ft" className={fieldClass} {...register("spaceSize")} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="location" className={labelClass}>Project location</label>
          <input id="location" className={fieldClass} {...register("location")} />
          {errors.location && <p className={errorClass}>{errors.location.message}</p>}
        </div>
        <div>
          <label htmlFor="budgetRange" className={labelClass}>Budget range (optional)</label>
          <select id="budgetRange" className={fieldClass} defaultValue="" {...register("budgetRange")}>
            <option value="">Prefer not to say</option>
            <option value="Under ₹1,00,000">Under ₹1,00,000</option>
            <option value="₹1,00,000 – ₹5,00,000">₹1,00,000 – ₹5,00,000</option>
            <option value="₹5,00,000 – ₹20,00,000">₹5,00,000 – ₹20,00,000</option>
            <option value="Over ₹20,00,000">Over ₹20,00,000</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectDetails" className={labelClass}>Project details</label>
        <textarea
          id="projectDetails"
          rows={5}
          className={cn(fieldClass, "resize-none")}
          {...register("projectDetails")}
        />
        {errors.projectDetails && <p className={errorClass}>{errors.projectDetails.message}</p>}
      </div>

      <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
        Submit Enquiry
      </Button>
    </form>
  );
}

import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

const styles = {
  primary:
    "bg-forest text-white hover:bg-charcoal border border-forest hover:border-charcoal",
  secondary:
    "bg-transparent text-charcoal border border-charcoal hover:bg-charcoal hover:text-white",
  inverse:
    "bg-white text-charcoal border border-white hover:bg-transparent hover:text-white",
  ghost: "bg-transparent text-forest hover:text-charcoal border border-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide rounded-[4px] transition-colors duration-300 ease-in-out disabled:opacity-50 disabled:pointer-events-none";

interface ButtonOwnProps {
  variant?: keyof typeof styles;
  className?: string;
}

type ButtonProps = ButtonOwnProps & ComponentPropsWithoutRef<"button">;

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={cn(base, styles[variant], className)} {...props} />
  );
}

type LinkButtonProps = ButtonOwnProps & ComponentPropsWithoutRef<typeof Link>;

export function LinkButton({
  variant = "primary",
  className,
  ...props
}: LinkButtonProps) {
  return <Link className={cn(base, styles[variant], className)} {...props} />;
}

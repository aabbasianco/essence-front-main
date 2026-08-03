import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const inputPresets = {
  default: "bg-background border border-border",
  searchBox: "bg-surface-subtle border border-surface-subtle",
};
export type InputPreset = keyof typeof inputPresets;

export const inputShapes = {
  rounded: "rounded-[var(--input-radius)]",
  pill: "rounded-full",
  square: "",
};
export type InputShape = keyof typeof inputShapes;

const inputVariants = cva(
  "h-9 w-60 min-w-0 px-3 py-1 text-base transition outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:bg-background focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 md:text-sm dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40",
  {
    variants: {
      preset: inputPresets,
      shape: inputShapes,
    },
    defaultVariants: {
      preset: "searchBox",
      shape: "rounded",
    },
  },
);

type InputProps = React.ComponentProps<"input"> &
  VariantProps<typeof inputVariants> & {
    fluid?: boolean;
  };

function Input({
  className,
  type,
  preset = "searchBox",
  shape = "pill",
  fluid = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-preset={preset}
      data-shape={shape}
      data-slot="input"
      className={cn(
        inputVariants({ preset, shape, className }),
        fluid && "w-full",
      )}
      dir="auto"
      {...props}
    />
  );
}

export { Input };

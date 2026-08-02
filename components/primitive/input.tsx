import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const inputVariants = cva(
  "h-9 w-60 min-w-0 px-3 py-1 text-base transition outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 md:text-sm dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40",
  {
    variants: {
      variant: {
        primary: "rounded-full border border-input bg-input/30",
        secondary: "rounded-(--input-radius) border border-input bg-input/30",
      },
    },
    defaultVariants: {
      variant: "primary",
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
  variant = "primary",
  fluid = false,
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      data-slot="input"
      data-variant={variant}
      className={cn(
        inputVariants({ variant, className }),
        fluid && "w-full",
      )}
      dir="auto"
      {...props}
    />
  );
}

export { Input };

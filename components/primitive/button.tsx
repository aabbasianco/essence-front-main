import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-primary text-primary bg-input/30 hover:bg-input/50 hover:text-foreground hover:bg-primary-subtle aria-expanded:bg-muted aria-expanded:text-foreground",
        tertiary:
          "bg-secondary-subtle text-secondary-subtle-foreground hover:bg-secondary/50 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "bg-background text-primary hover:bg-muted hover:text-foreground hover:bg-primary-subtle aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-danger-subtle text-danger-subtle-foreground hover:bg-danger/20 focus-visible:border-danger/40 focus-visible:ring-danger/20 dark:bg-danger/20 dark:hover:bg-danger/30 dark:focus-visible:ring-danger/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        md: "h-9 gap-1.5 px-4 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2",
        lg: "h-10 gap-1.5 px-5 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3",
        xl: "h-10 gap-1.5 px-8 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3",
        icon: "size-9",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
      layout: {
        fit: "w-fit",
        full: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "lg",
      layout: "fit",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    loading?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
  };

function Button({
  className,
  variant = "primary",
  size = "lg",
  layout = "fit",
  asChild = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-layout={layout}
      data-loading={loading || undefined}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      disabled={disabled || loading}
      className={cn(buttonVariants({ variant, size, layout, className }))}
      {...props}
    >
      {loading ? (
        <Spinner />
      ) : (
        startIcon && <span data-slot="button-start-icon">{startIcon}</span>
      )}

      <span data-slot="button-label">{children}</span>

      {endIcon && !loading && (
        <span className="" data-slot="button-end-icon">{endIcon}</span>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };

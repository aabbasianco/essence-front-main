import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
import { Badge } from "./badge";

const buttonVariants = cva(
  "group/button inline-flex bg-(--button-background) text-(--button-foreground) shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        primary: "[--button-background:var(--color-primary)] [--button-foreground:var(--color-primary-foreground)] [--button-effective-background:var(--color-primary)] hover:bg-primary/80",
        secondary:
          "border-primary [--button-background:var(--color-background)] [--button-foreground:var(--color-primary)] hover:text-foreground hover:bg-primary-subtle aria-expanded:bg-muted aria-expanded:text-foreground",
        tertiary:
          "[--button-background:var(--color-transparent)] [--button-foreground:var(--color-secondary-subtle-foreground)] border border-border hover:bg-secondary-subtle aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "[--button-background:var(--color-transparent)] [--button-foreground:var(--color-secondary-subtle-foreground)] [--button-effective-background:var(--color-secondary-foreground)] hover:text-foreground hover:bg-secondary-subtle aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "[--button-background:var(--color-danger-subtle)] [--button-foreground:var(--color-danger-subtle-foreground)] [--button-effective-background:var(--color-danger-subtle)] hover:bg-danger/20 focus-visible:border-danger/40 focus-visible:ring-danger/20 dark:bg-danger/20 dark:hover:bg-danger/30 dark:focus-visible:ring-danger/40",
        link: "[--button-background:var(--color-transparent)] [--button-foreground:var(--color-primary)] underline-offset-4 hover:underline",
      },
      size: {
        md: "h-9 gap-1.5 px-4 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5 data-[has-badge=true]:pe-2.5",
        xs: "h-6 gap-1 px-2.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 px-3 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
        lg: "h-10 gap-1.5 px-5 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
        xl: "h-10 gap-1.5 px-8 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
        "icon-md": "size-10 px-2 rounded-lg [&_svg]:size-6!",
        "icon-xs": "size-6 px-1 [&_svg:not([class*='size-'])]:size-3.5!",
        "icon-sm": "size-8 px-1.5 [&_svg:not([class*='size-'])]:size-4.5!",
        "icon-lg": "size-12 px-2.5 rounded-lg [&_svg]:size-7!",
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
    badge?: React.ReactNode;
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
  badge,
  asChild = false,
  loading = false,
  startIcon,
  endIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const isIconButton = size?.startsWith("icon");
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-layout={layout}
      data-has-badge={!!badge || undefined}
      data-loading={loading || undefined}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      disabled={disabled || loading}
      dir="auto"
      className={cn(buttonVariants({ variant, size, layout, className }))}
      {...props}
    >
      {loading ? (
        <Spinner data-icon="inline-start" />
      ) : (
        startIcon && <span data-slot="button-start-icon">{startIcon}</span>
      )}

      {!isIconButton && <span data-slot="button-label">{children}</span>}

      {endIcon && !loading && (
        <span className="" data-slot="button-end-icon">
          {endIcon}
        </span>
      )}

      {badge != null && badge !== null && badge !== true && (
        <Badge
          className="min-h-4 min-w-4 text-xs rounded-full border-none"
          style={
            {
              "--badge-background": "var(--button-foreground)",
              "--badge-foreground": "var(--button-effective-background)",
            } as React.CSSProperties
          }
          data-slot="button-badge"
        >
          {badge}
        </Badge>
      )}
    </Comp>
  );
}

export { Button, buttonVariants };

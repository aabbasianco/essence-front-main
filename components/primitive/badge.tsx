import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import {
  GetPalette,
  type Appearance,
  type Severity,
  severities,
  appearances,
} from "@/lib/theme/palette";

const badgeVariants = cva(
  "bg-[var(--badge-background)] text-[var(--badge-foreground)] border-[var(--badge-border)] hover:cursor-pointer border-2 group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      appearance: appearances,
      severity: severities,
      size: {
        // sm: "px-2.5 py-0.5 text-[length:var(--font-size-xs)] ",
        sm: "px-1 py-0 text-[length:var(--description-font-size)] font-[var(--badge-font-weight)] data-[has-end-icon=true]:pe-0 data-[has-start-icon=true]:ps-0  [&_svg:not([class*='size-'])]:size-4",
        md: "px-2 py-0.5 text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)] data-[has-end-icon=true]:pe-1 data-[has-start-icon=true]:ps-1  [&_svg:not([class*='size-'])]:size-5",
      },
      shape: {
        rounded: "rounded-[var(--badge-radius)]",
        pill: "rounded-full",
        square: "",
      },
    },
    defaultVariants: {
      appearance: "solid",
      severity: "info",
      size: "sm",
      shape: "rounded",
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
  };

function Badge({
  className,
  appearance = "solid",
  severity = "info",
  size = "sm",
  shape = "rounded",
  startIcon,
  endIcon,
  asChild = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";
  const resolvedAppearance: Appearance = appearance ?? "soft";
  const resolvedSeverity: Severity = severity ?? "info";
  const palette = GetPalette(resolvedAppearance, resolvedSeverity);

  return (
    <Comp
      data-slot="badge"
      data-appearance={appearance}
      data-severity={severity}
      data-size={size}
      data-shape={shape}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      className={cn(
        badgeVariants({ appearance, severity, size, shape }),
        className,
      )}
      style={
        {
          "--badge-background": palette.background,
          "--badge-foreground": palette.foreground,
          "--badge-border": palette.border,
        } as React.CSSProperties
      }
      {...props}
    >
      {appearance == "ghost" && (
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-current animate-pulse"
        />
      )}
      {startIcon && <span data-slot="badge-start-icon">{startIcon}</span>}
      <span data-slot="badge-label">{children}</span>
      {endIcon && <span data-slot="badge-end-icon">{endIcon}</span>}
    </Comp>
  );
}

export { Badge, badgeVariants };

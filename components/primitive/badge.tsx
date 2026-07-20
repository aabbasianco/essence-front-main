import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "bg-[var(--badge-background)] text-[var(--badge-foreground)] border-[var(--badge-border)] hover:cursor-pointer border-2 group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      appearance: {
        solid: "",
        soft: "",
        outline: "",
        ghost: "",
      },
      color: {
        primary: "",
        secondary: "",
        tertiary: "",
        success: "",
        warning: "",
        danger: "",
        info: "",
      },
      size: {
        md: "px-2.5 py-0.5 text-[length:var(--caption-font-size)] font-[var(--badge-font-weight)]",
        lg: "px-3 py-1 text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      },
      shape: {
        rounded: "rounded-[var(--badge-radius)]",
        pill: "rounded-full",
        square: "",
      },
    },
    defaultVariants: {
      appearance: "solid",
      color: "primary",
      size: "md",
      shape: "rounded",
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean };

type BadgeVariants = VariantProps<typeof badgeVariants>;

type BadgeAppearance = NonNullable<BadgeVariants["appearance"]>;
type BadgeColor = NonNullable<BadgeVariants["color"]>;

function Badge({
  className,
  appearance = "solid",
  color = "primary",
  size = "md",
  shape = "rounded",
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";
  const appearanceValue = appearance ?? "solid";
  const colorValue = color ?? "primary";
  const palette = GetBadgePalette(appearanceValue, colorValue);

  return (
    <Comp
      data-slot="badge"
      data-appearance={appearance}
      data-color={color}
      data-size={size}
      data-shape={shape}
      className={cn(
        badgeVariants({ appearance, color, size, shape }),
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
    />
  );
}

export { Badge, badgeVariants };

function GetBadgePalette(appearance: BadgeAppearance, color: BadgeColor) {
  switch (appearance) {
    case "solid":
      return {
        background: `var(--${color})`,
        foreground: `var(--${color}-foreground)`,
        border: "transparent",
      };
    case "soft":
      return {
        background: `var(--${color}-subtle)`,
        foreground: `var(--${color}-subtle-foreground)`,
        border: `transparent`,
      };
    case "outline":
      return {
        background: `var(--${color}-subtle)`,
        foreground: `var(--${color}-subtle-foreground)`,
        border: `var(--${color})`,
      };
    case "ghost":
      return {
        background: `transparent`,
        foreground: `var(--${color})`,
        border: `transparent`,
      };
  }
}

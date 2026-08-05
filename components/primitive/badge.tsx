import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import {
  GetPalette,
  type Appearance,
  type Tone,
  tones,
  appearances,
} from "@/lib/design-system/palette";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";

const badgeSizes = {
  sm: "px-1 py-0 text-[length:var(--description-font-size)] font-[var(--badge-font-weight)] data-[has-end-icon=true]:pe-0 data-[has-start-icon=true]:ps-0.5 [&_svg:not([class*='size-'])]:size-4",
  md: "px-2 py-0.5 text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)] data-[has-end-icon=true]:pe-1 data-[has-start-icon=true]:ps-1 [&_svg:not([class*='size-'])]:size-5",
};
type BadgeSize = keyof typeof badgeSizes;

const badgeShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--badge-radius)]",
});
type BadgeShape = keyof typeof badgeShapes;

const badgeDefaults = {
  appearance: "solid",
  tone: "primary",
  size: "sm",
  shape: "rounded",
} satisfies {
  appearance: Appearance;
  tone: Tone;
  size: BadgeSize;
  shape: BadgeShape;
};

const badgePresets = {
  // Marketing
  featured: {
    appearance: badgeDefaults.appearance,
    tone: "secondary",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  new: {
    appearance: badgeDefaults.appearance,
    tone: "primary",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  "best-seller": {
    appearance: badgeDefaults.appearance,
    tone: "primary",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  trending: {
    appearance: badgeDefaults.appearance,
    tone: "violet",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  limited: {
    appearance: badgeDefaults.appearance,
    tone: "danger",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  discount: {
    appearance: badgeDefaults.appearance,
    tone: "danger",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },

  // Availability
  "in-stock": {
    appearance: "ghost",
    tone: "success",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  "low-stock": {
    appearance: "ghost",
    tone: "warning",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  "out-of-stock": {
    appearance: "ghost",
    tone: "danger",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },
  "pre-order": {
    appearance: "ghost",
    tone: "info",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },

  // Shipping
  "express": {
    appearance: "ghost",
    tone: "primary",
    size: badgeDefaults.size,
    shape: badgeDefaults.shape,
  },

  // Order Status
  // Admin Status
  // Review Status
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    size: BadgeSize;
    shape: BadgeShape;
  }
>;

type BadgePreset = keyof typeof badgePresets;

const badgeVariants = cva(
  "group/badge bg-[var(--badge-background)] text-[var(--badge-foreground)] border-[var(--badge-border)] border-2 inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all pointer-events-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      appearance: appearances,
      tone: tones,
      size: badgeSizes,
      shape: badgeShapes,
    },

    defaultVariants: {
      appearance: badgeDefaults.appearance,
      tone: badgeDefaults.tone,
      size: badgeDefaults.size,
      shape: badgeDefaults.shape,
    },
  },
);

type BadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    preset?: BadgePreset;
    asChild?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
  };

function Badge({
  className,
  preset,
  appearance,
  tone,
  size,
  shape,
  startIcon,
  endIcon,
  asChild = false,
  children,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot.Root : "span";
  const presetValues = preset ? badgePresets[preset] : undefined;
  const resolvedAppearance =
    presetValues?.appearance ?? appearance ?? badgeDefaults.appearance;
  const resolvedTone = presetValues?.tone ?? tone ?? badgeDefaults.tone;
  const resolvedSize = size ?? presetValues?.size ?? badgeDefaults.size;
  const resolvedShape = shape ?? presetValues?.shape ?? badgeDefaults.shape;
  const palette = GetPalette(resolvedAppearance, resolvedTone);
  const hasValue =
    children !== undefined && children !== null && children !== "";

  return (
    <Comp
      data-slot="badge"
      data-preset={preset}
      data-appearance={resolvedAppearance}
      data-tone={resolvedTone}
      data-size={resolvedSize}
      data-shape={resolvedShape}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      className={cn(
        badgeVariants({
          appearance: resolvedAppearance,
          tone: resolvedTone,
          size: resolvedSize,
          shape: resolvedShape,
        }),
        className,
        "",
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
      {resolvedAppearance === "ghost" && (
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-current animate-pulse"
        />
      )}

      {startIcon && <span data-slot="badge-start-icon">{startIcon}</span>}

      {hasValue && <span data-slot="badge-label">{children}</span>}

      {endIcon && <span data-slot="badge-end-icon">{endIcon}</span>}
    </Comp>
  );
}

export {
  Badge,
  badgeVariants,
  OverlayBadge,
  badgePresets,
  badgeShapes,
  badgeSizes,
};

type OverlayBadgeProps = React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    children: React.ReactNode;
    value?: React.ReactNode;
    className?: string;
  };

function OverlayBadge({
  children,
  value,
  tone = "danger",
  appearance = "solid",
  size = "sm",
  shape = "pill",
  className,
}: OverlayBadgeProps) {
  return (
    <span className={cn("relative inline-flex", className)}>
      {children}

      <Badge
        appearance={appearance}
        tone={tone}
        size={size}
        shape={shape}
        className={cn(
          value == null
            ? "absolute -top-0.5 -inset-e-0.5 z-10 size-2.5 rounded-full p-0 border border-surface animate-pulse"
            : "absolute -top-2 -inset-e-2 z-10 min-h-5 min-w-5 text-xs border border-surface",
        )}
      >
        {value}
      </Badge>
    </span>
  );
}

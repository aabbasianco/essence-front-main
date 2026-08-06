import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

import { Spinner } from "./spinner";
import { Badge } from "./badge";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";
import {
  GetPalette,
  type Appearance,
  type Tone,
  appearances,
  tones,
} from "@/lib/design-system/palette";
import { RenderIcon ,IconDefinition } from "./icon";

const buttonDefaults = {
  appearance: "solid",
  tone: "primary",
  shape: "rounded",
  size: "lg",
  startIcon: undefined,
  endIcon: undefined,
} satisfies {
  appearance: Appearance;
  tone: Tone;
  shape: ButtonShape;
  size: ButtonSize;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
};

const buttonPresets = {
  primary: {
    appearance: "solid",
    tone: "primary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  secondary: {
    appearance: "ghost-outline",
    tone: "primary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  tertiary: {
    appearance: "ghost-outline",
    tone: "secondary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  ghost: {
    appearance: "ghost",
    tone: "secondary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  link: {
    appearance: "text",
    tone: "secondary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  warning: {
    appearance: "soft",
    tone: "warning",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: "alert-triangle",
    endIcon: buttonDefaults.endIcon,
  },

  destructive: {
    appearance: "soft",
    tone: "danger",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: "alert-circle",
    endIcon: buttonDefaults.endIcon,
  },

  inputSoft: {
    appearance: "soft",
    tone: "secondary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },

  inputGhost: {
    appearance: "ghost",
    tone: "secondary",
    shape: buttonDefaults.shape,
    size: buttonDefaults.size,
    startIcon: buttonDefaults.startIcon,
    endIcon: buttonDefaults.endIcon,
  },
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    shape: ButtonShape;
    size: ButtonSize;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
  }
>;
type ButtonPreset = keyof typeof buttonPresets;

const buttonShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--button-radius)]",
});
type ButtonShape = keyof typeof buttonShapes;

const buttonSizes = {
  md: "h-9 gap-1.5 px-4 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5 data-[has-badge=true]:pe-2.5",
  xs: "h-6 gap-1 px-2.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "h-8 gap-1 px-3 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
  lg: "h-10 gap-1.5 px-5 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
  xl: "h-11 gap-1.5 px-6.5 data-[has-end-icon=true]:pe-5 data-[has-start-icon=true]:ps-5 data-[has-badge=true]:pe-5",
  "icon-md": "size-10 px-2 rounded-lg [&_svg]:size-6!",
  "icon-xs": "size-6 px-1 [&_svg:not([class*='size-'])]:size-3.5!",
  "icon-sm": "size-8 px-1.5 [&_svg:not([class*='size-'])]:size-4.5!",
  "icon-lg": "size-12 px-2.5 rounded-lg [&_svg]:size-7!",
};
type ButtonSize = keyof typeof buttonSizes;

const buttonVariants = cva(
  "group/button inline-flex bg-(--button-background) text-(--button-foreground) border-[var(--button-border)] hover:bg-(--button-background-hover) hover:text-(--button-foreground-hover) hover:border-[var(--button-border-hover)] border-2 shrink-0 items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: buttonShapes,
      size: buttonSizes,
    },
    defaultVariants: {
      appearance: buttonDefaults.appearance,
      tone: buttonDefaults.tone,
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    preset?: ButtonPreset;
    badge?: React.ReactNode;
    asChild?: boolean;
    loading?: boolean;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
    fluid?: boolean;
  };

function Button({
  className,
  preset,
  tone,
  appearance,
  size,
  shape,
  fluid = false,
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
  const presetValues = preset ? buttonPresets[preset] : undefined;
  const resolvedAppearance =
    presetValues?.appearance ?? appearance ?? buttonDefaults.appearance;
  const resolvedTone = presetValues?.tone ?? tone ?? buttonDefaults.tone;
  const resolvedShape = shape ?? presetValues?.shape ?? buttonDefaults.shape;
  const resolvedSize = size ?? presetValues?.size ?? buttonDefaults.size;
  const resolvedStartIcon = presetValues?.startIcon ?? startIcon ?? buttonDefaults.startIcon;
  const resolvedEndIcon = presetValues?.endIcon ?? endIcon ?? buttonDefaults.endIcon;
  const palette = GetPalette(resolvedAppearance, resolvedTone);
  return (
    <Comp
      data-slot="button"
      data-preset={preset}
      data-appearance={resolvedAppearance}
      data-tone={resolvedTone}
      data-shape={resolvedShape}
      data-size={resolvedSize}
      data-fluid={fluid}
      data-has-badge={!!badge || undefined}
      data-loading={loading || undefined}
      data-has-start-icon={!!resolvedStartIcon || undefined}
      data-has-end-icon={!!resolvedEndIcon || undefined}
      disabled={disabled || loading}
      className={cn(
        buttonVariants({
          appearance: resolvedAppearance,
          tone: resolvedTone,
          shape: resolvedShape,
          size: resolvedSize,
        }),
        fluid && "w-full",
        className,
      )}
      style={
        {
          "--button-background": palette.background,
          "--button-foreground": palette.foreground,
          "--button-border": palette.border,

          "--button-background-hover": palette.hover?.background,

          "--button-foreground-hover": palette.hover?.foreground,

          "--button-border-hover": palette.hover?.border,

          "--button-effective-background": palette.effectiveBackground,
        } as React.CSSProperties
      }
      {...props}
    >
      {loading ? (
        <Spinner data-icon="inline-start" />
      ) : (
        resolvedStartIcon && (
          <span data-slot="button-start-icon">{RenderIcon(resolvedStartIcon)}</span>
        )
      )}

      {!isIconButton && <span data-slot="button-label">{children}</span>}

      {resolvedEndIcon && !loading && (
        <span className="" data-slot="button-end-icon">
          {RenderIcon(resolvedEndIcon)}
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

export { Button, buttonVariants, buttonPresets, buttonShapes, buttonSizes };

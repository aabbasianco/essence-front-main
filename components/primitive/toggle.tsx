"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";
import {
  GetPalette,
  type Appearance,
  type Tone,
  appearances,
  tones,
} from "@/lib/design-system/palette";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";

const toggleDefaults = {
  appearance: "solid",
  tone: "primary",
  shape: "rounded",
  size: "md",
} satisfies {
  appearance: Appearance;
  tone: Tone;
  shape: ToggleShape;
  size: ToggleSize;
};

const togglePresets = {
  default: {
    appearance: toggleDefaults.appearance,
    tone: toggleDefaults.tone,
    shape: toggleDefaults.shape,
    size: toggleDefaults.size,
  },
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    shape: ToggleShape;
    size: ToggleSize;
  }
>;

type TogglePreset = keyof typeof togglePresets;

const toggleShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--toggle-radius)]",
});

type ToggleShape = keyof typeof toggleShapes;

const toggleSizes = {
  xs: "gap-1 px-1 py-0.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "gap-1 px-1 py-0.5 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
  md: "gap-1.5 px-1 py-1 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5 data-[has-badge=true]:pe-2.5",
  lg: "gap-1.5 px-1 py-1 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
  xl: "gap-1.5 px-1 py-1 data-[has-end-icon=true]:pe-5 data-[has-start-icon=true]:ps-5 data-[has-badge=true]:pe-5",
  "icon-md": "p-0! rounded-lg [&_svg]:size-6!",
  "icon-xs": "p-0! [&_svg:not([class*='size-'])]:size-3.5!",
  "icon-sm": "p-0! [&_svg:not([class*='size-'])]:size-4.5!",
  "icon-lg": "p-0! rounded-lg [&_svg]:size-7!",
};
type ToggleSize = keyof typeof toggleSizes;

const toggleThumbSizes = {
  xs: "gap-1 px-2.5 py-0.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2 [&_svg:not([class*='size-'])]:size-3",
  sm: "gap-1 px-3 py-0.5 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
  md: "gap-1.5 px-4 py-0.5 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5 data-[has-badge=true]:pe-2.5",
  lg: "gap-1.5 px-5 py-0.5 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
  xl: "gap-1.5 px-6.5 py-0.5 data-[has-end-icon=true]:pe-5 data-[has-start-icon=true]:ps-5 data-[has-badge=true]:pe-5",
  "icon-md": "size-10 px-2 rounded-lg [&_svg]:size-6!",
  "icon-xs": "size-6 px-1 [&_svg:not([class*='size-'])]:size-3.5!",
  "icon-sm": "size-8 px-1.5 [&_svg:not([class*='size-'])]:size-4.5!",
  "icon-lg": "size-12 px-2.5 rounded-lg [&_svg]:size-7!",
};
type ToggleThumbSize = keyof typeof toggleThumbSizes;

const toggleVariants = cva(
  `
  group/toggle
  inline-flex
  items-center
  justify-center
  text-sm
  font-medium
  whitespace-nowrap
  transition-all
  outline-none 
  border-2
  h-min
  w-min

  bg-surface-subtle
  text-surface-foreground/60

  border-[var(--toggle-border)]

  hover:text-surface-foreground/80

  aria-pressed:[&>[data-slot=toggle-thumb]]:bg-[var(--toggle-pressed-background)]
  aria-pressed:[&>[data-slot=toggle-thumb]]:text-[var(--toggle-pressed-foreground)]
  aria-pressed:border-[var(--toggle-pressed-border)]

  focus-visible:border-ring
  focus-visible:ring-[3px]
  focus-visible:ring-ring/50

  disabled:pointer-events-none
  disabled:opacity-50

  [&_svg]:pointer-events-none
  [&_svg]:shrink-0
  [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: toggleShapes,
      size: toggleSizes,
    },

    defaultVariants: {
      appearance: toggleDefaults.appearance,
      tone: toggleDefaults.tone,
      shape: toggleDefaults.shape,
      size: toggleDefaults.size,
    },
  },
);
const toggleThumbVariants = cva(
  `
  group/toggle
  inline-flex
  items-center
  justify-center
  text-sm
  font-medium
  whitespace-nowrap
  transition-all
  outline-none 
  border-2

  bg-surface-subtle
  text-surface-foreground/60

  border-[var(--toggle-border)]

  hover:text-surface-foreground/80

  aria-pressed:[&>[data-slot=toggle-thumb]]:bg-[var(--toggle-pressed-background)]
  aria-pressed:[&>[data-slot=toggle-thumb]]:text-[var(--toggle-pressed-foreground)]
  aria-pressed:border-[var(--toggle-pressed-border)]

  focus-visible:border-ring
  focus-visible:ring-[3px]
  focus-visible:ring-ring/50

  disabled:pointer-events-none
  disabled:opacity-50

  [&_svg]:pointer-events-none
  [&_svg]:shrink-0
  [&_svg:not([class*='size-'])]:size-4
  `,
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: toggleShapes,
      size: toggleThumbSizes,
    },

    defaultVariants: {
      appearance: toggleDefaults.appearance,
      tone: toggleDefaults.tone,
      shape: toggleDefaults.shape,
      size: toggleDefaults.size,
    },
  },
);

type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    preset?: TogglePreset;
    fluid?: boolean;
    onStartIcon?: React.ReactElement;
    onEndIcon?: React.ReactElement;
    offStartIcon?: React.ReactElement;
    offEndIcon?: React.ReactElement;
  };

function Toggle({
  className,
  preset,
  appearance,
  tone,
  shape,
  size,
  onStartIcon,
  onEndIcon,
  offStartIcon,
  offEndIcon,
  fluid = false,
  children = "tag",
  ...props
}: ToggleProps) {
  const presetValues = preset ? togglePresets[preset] : undefined;
  const resolvedAppearance =
    presetValues?.appearance ?? appearance ?? toggleDefaults.appearance;
  const resolvedTone = presetValues?.tone ?? tone ?? toggleDefaults.tone;
  const resolvedShape = shape ?? presetValues?.shape ?? toggleDefaults.shape;
  const resolvedSize = size ?? presetValues?.size ?? toggleDefaults.size;
  // const resolvedOnStartIcon = presetValues?.onStartIcon ?? onStartIcon ?? undefined;
  // const resolvedOnEndIcon = presetValues?.onEndIcon ?? onEndIcon ?? undefined;
  // const resolvedOffStartIcon = presetValues?.offStartIcon ?? offStartIcon ?? undefined;
  // const resolvedOffEndIcon = presetValues?.offEndIcon ?? offEndIcon ?? undefined;
  const palette = GetPalette(resolvedAppearance, resolvedTone);

  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      data-preset={preset}
      data-appearance={resolvedAppearance}
      data-tone={resolvedTone}
      data-shape={resolvedShape}
      data-size={resolvedSize}
      data-fluid={fluid}
      className={cn(
        toggleVariants({
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
          "--toggle-pressed-border": palette.pressed?.border,
        } as React.CSSProperties
      }
      {...props}
    >
      <span
        data-slot="toggle-thumb"
        className={cn(
          toggleThumbVariants({
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
            "--toggle-pressed-background": palette.pressed?.background,
            "--toggle-pressed-foreground": palette.pressed?.foreground,
          } as React.CSSProperties
        }
      >
        {children}
      </span>
    </TogglePrimitive.Root>
  );
}

export {
  Toggle,
  toggleVariants,
  togglePresets,
  toggleShapes,
  toggleSizes,
  type TogglePreset,
  type ToggleShape,
  type ToggleSize,
};

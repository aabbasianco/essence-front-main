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
} from "@/lib/design-system/resolver/resolver";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";
import { IconDefinition, IconPropsSet, RenderIcon } from "./icon";

const toggleDefaults = {
  appearance: "solid",
  tone: "primary",
  shape: "rounded",
  size: "md",
  startIcon: undefined,
  endIcon: undefined,
} satisfies {
  appearance: Appearance;
  tone: Tone;
  shape: ToggleShape;
  size: ToggleSize;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
};

const togglePresets = {
  default: {
    appearance: toggleDefaults.appearance,
    tone: toggleDefaults.tone,
    shape: toggleDefaults.shape,
    size: toggleDefaults.size,
    startIcon: toggleDefaults.startIcon,
    endIcon: toggleDefaults.endIcon,
  },
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    shape: ToggleShape;
    size: ToggleSize;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
  }
>;

type TogglePreset = keyof typeof togglePresets;

const toggleShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--toggle-radius)]",
});

type ToggleShape = keyof typeof toggleShapes;

const toggleSizeRecipe = {
  xs: {
    label: {
      component:
        "size-min-7 overflow-hidden  p-1 [&>[data-slot=toggle-thumb]]:gap-1.5  [&>[data-slot=toggle-thumb]]:py-0.5 [&>[data-slot=toggle-thumb]]:px-2.5 text-xs data-[has-end-icon=true]:[&>[data-slot=toggle-thumb]]:pe-2 data-[has-start-icon=true]:[&>[data-slot=toggle-thumb]]:ps-2 data-[has-badge=true]:pe-2",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
    icon: {
      component: "p-0! size-min",
      icon: {
        size: "xs",
        purpose: "standalone",
      },
    },
  },
  sm: {
    label: {
      component:
        "p-1 [&>[data-slot=toggle-thumb]]:gap-1.5 [&>[data-slot=toggle-thumb]]:py-0.5 [&>[data-slot=toggle-thumb]]:px-3 data-[has-end-icon=true]:[&>[data-slot=toggle-thumb]]:pe-2 data-[has-start-icon=true]:[&>[data-slot=toggle-thumb]]:ps-2 data-[has-badge=true]:pe-2",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
    icon: {
      component: "p-0! size-min",
      icon: {
        size: "sm",
        purpose: "standalone",
      },
    },
  },
  md: {
    label: {
      component:
        "p-1 [&>[data-slot=toggle-thumb]]:gap-1.5 [&>[data-slot=toggle-thumb]]:py-0.5 [&>[data-slot=toggle-thumb]]:px-3.5 data-[has-end-icon=true]:[&>[data-slot=toggle-thumb]]:pe-2.5 data-[has-start-icon=true]:[&>[data-slot=toggle-thumb]]:ps-2.5 data-[has-badge=true]:pe-2.5",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
    icon: {
      component: "p-0! size-min",
      icon: {
        size: "md",
        purpose: "standalone",
      },
    },
  },
  lg: {
    label: {
      component:
        "p-1 [&>[data-slot=toggle-thumb]]:gap-1.5 [&>[data-slot=toggle-thumb]]:py-0.5 [&>[data-slot=toggle-thumb]]:px-5 data-[has-end-icon=true]:[&>[data-slot=toggle-thumb]]:pe-3 data-[has-start-icon=true]:[&>[data-slot=toggle-thumb]]:ps-3 data-[has-badge=true]:pe-3",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
    icon: {
      component: "p-0! size-min",
      icon: {
        size: "lg",
        purpose: "standalone",
      },
    },
  },
  xl: {
    label: {
      component:
        "p-1 [&>[data-slot=toggle-thumb]]:gap-1.5 [&>[data-slot=toggle-thumb]]:py-0.5 [&>[data-slot=toggle-thumb]]:px-6.5 data-[has-end-icon=true]:[&>[data-slot=toggle-thumb]]:pe-5 data-[has-start-icon=true]:[&>[data-slot=toggle-thumb]]:ps-5 data-[has-badge=true]:pe-5",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
    icon: {
      component: "p-0! size-min",
      icon: {
        size: "xl",
        purpose: "standalone",
      },
    },
  },
} satisfies Record<
  string,
  {
    label: {
      component: string;
      icon?: IconPropsSet;
    };
    icon?: {
      component: string;
      icon?: IconPropsSet;
    };
  }
>;
type ToggleSize = keyof typeof toggleSizeRecipe;

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
  `,
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: toggleShapes,
      size: toggleSizeRecipe,
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
  `,
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: toggleShapes,
    },

    defaultVariants: {
      appearance: toggleDefaults.appearance,
      tone: toggleDefaults.tone,
      shape: toggleDefaults.shape,
    },
  },
);

type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants> & {
    preset?: TogglePreset;
    fluid?: boolean;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
    isIcon?: boolean;
  };

function Toggle({
  className,
  preset,
  appearance,
  tone,
  shape,
  size,
  fluid = false,
  startIcon,
  endIcon,
  isIcon = false,
  children = "toggle",
  ...props
}: ToggleProps) {
  const presetValues = preset ? togglePresets[preset] : undefined;
  const resolvedAppearance =
    presetValues?.appearance ?? appearance ?? toggleDefaults.appearance;
  const resolvedTone = presetValues?.tone ?? tone ?? toggleDefaults.tone;
  const resolvedShape = shape ?? presetValues?.shape ?? toggleDefaults.shape;
  const resolvedSize = size ?? presetValues?.size ?? toggleDefaults.size;
  const resolvedToggleSize = isIcon
    ? toggleSizeRecipe[resolvedSize].icon?.component
    : toggleSizeRecipe[resolvedSize].label.component;
  const resolvedStartIcon =
    presetValues?.startIcon ?? startIcon ?? toggleDefaults.startIcon;
  const resolvedEndIcon =
    presetValues?.endIcon ?? endIcon ?? toggleDefaults.endIcon;
  const resolvedIconProps = isIcon
    ? toggleSizeRecipe[resolvedSize].icon?.icon
    : toggleSizeRecipe[resolvedSize].label.icon;
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
      data-has-start-icon={!!resolvedStartIcon || undefined}
      data-has-end-icon={!!resolvedEndIcon || undefined}
      className={cn(
        toggleVariants({
          appearance: resolvedAppearance,
          tone: resolvedTone,
          shape: resolvedShape,
        }),
        resolvedToggleSize,
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
          }),
          fluid && "w-full",
          className,
        )}
        style={
          {
            "--toggle-pressed-background": palette.default?.background,
            "--toggle-pressed-foreground": palette.default?.foreground,
          } as React.CSSProperties
        }
      >
        {resolvedStartIcon && (
          <span data-slot="toggle-start-icon">
            {RenderIcon(resolvedStartIcon, resolvedIconProps)}
          </span>
        )}

      {!isIcon && <span data-slot="toggle-label">{children}</span>}

        {!isIcon && resolvedEndIcon && (
          <span data-slot="toggle-start-icon">
            {RenderIcon(resolvedEndIcon)}
          </span>
        )}
      </span>
    </TogglePrimitive.Root>
  );
}

export {
  Toggle,
  toggleVariants,
  togglePresets,
  toggleShapes,
  toggleSizeRecipe,
  type TogglePreset,
  type ToggleShape,
  type ToggleSize,
};

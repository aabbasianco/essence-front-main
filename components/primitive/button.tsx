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
} from "@/lib/design-system/resolver/resolver";
import {
  RenderIcon,
  IconDefinition,
  iconSizes,
  IconSize,
  IconPurpose,
  IconPropsSet,
  SizeRecipe,
} from "./icon";

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

const buttonSizeRecipe = {
  xs: {
    label: {
      component:
        "h-6 gap-1.5 px-2.5 text-xs data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
      icon: {
        size: "xs",
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
        "h-8 gap-1.5 px-3 data-[has-end-icon=true]:pe-2 data-[has-start-icon=true]:ps-2 data-[has-badge=true]:pe-2",
      icon: {
        size: "sm",
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
        "h-9 gap-1.5 px-4 data-[has-end-icon=true]:pe-2.5 data-[has-start-icon=true]:ps-2.5 data-[has-badge=true]:pe-2.5",
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
        "h-10 gap-1.5 px-5 data-[has-end-icon=true]:pe-3 data-[has-start-icon=true]:ps-3 data-[has-badge=true]:pe-3",
      icon: {
        size: "lg",
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
        "h-11 gap-2 px-6.5 data-[has-end-icon=true]:pe-5 data-[has-start-icon=true]:ps-5 data-[has-badge=true]:pe-5",
      icon: {
        size: "xl",
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
} satisfies SizeRecipe;
// type ButtonLabelSize = keyof typeof buttonSizeRecipe;
// type ButtonSize = ButtonLabelSize | `icon-${ButtonLabelSize}`;
type ButtonSize = keyof typeof buttonSizeRecipe;

const buttonVariants = cva(
  "group/button inline-flex bg-(--button-background) text-(--button-foreground) border-[var(--button-border)] hover:bg-(--button-background-hover) hover:text-(--button-foreground-hover) hover:border-[var(--button-border-hover)] border-2 shrink-0 items-center justify-center bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none hover:cursor-pointer focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-danger aria-invalid:ring-[3px] aria-invalid:ring-danger/20 dark:aria-invalid:border-danger/50 dark:aria-invalid:ring-danger/40",
  {
    variants: {
      appearance: appearances,
      tone: tones,
      shape: buttonShapes,
      size: buttonSizeRecipe,
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
    isIcon?: boolean;
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
  isIcon = false,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot.Root : "button";
  const presetValues = preset ? buttonPresets[preset] : undefined;
  const resolvedAppearance =
    appearance ?? presetValues?.appearance ?? buttonDefaults.appearance;
  const resolvedTone = tone ?? presetValues?.tone ?? buttonDefaults.tone;
  const resolvedShape = shape ?? presetValues?.shape ?? buttonDefaults.shape;
  const resolvedSize = size ?? presetValues?.size ?? buttonDefaults.size;
  const resolvedButtonSize = isIcon
    ? buttonSizeRecipe[resolvedSize].icon.component
    : buttonSizeRecipe[resolvedSize].label.component;
  const resolvedStartIcon =
    presetValues?.startIcon ?? startIcon ?? buttonDefaults.startIcon;
  const resolvedEndIcon =
    presetValues?.endIcon ?? endIcon ?? buttonDefaults.endIcon;
  const resolvedIconProps = isIcon
    ? buttonSizeRecipe[resolvedSize].icon.icon
    : buttonSizeRecipe[resolvedSize].label.icon;
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
        }),
        resolvedButtonSize,
        fluid && "w-full",
        className,
      )}
      style={
        {
          "--button-background": palette.default.background,
          "--button-foreground": palette.default.foreground,
          "--button-border": palette.default.border,

          "--button-background-hover": palette.hover?.background,

          "--button-foreground-hover": palette.hover?.foreground,

          "--button-border-hover": palette.hover?.border,

          "--button-effective-background": palette.default.contrastBackground,
        } as React.CSSProperties
      }
      {...props}
    >
      {loading ? (
        <Spinner data-icon="inline-start" />
      ) : (
        resolvedStartIcon && (
          <span data-slot="button-start-icon">
            {RenderIcon(resolvedStartIcon, resolvedIconProps)}
          </span>
        )
      )}

      {!isIcon && <span data-slot="button-label">{children}</span>}

      {!isIcon && resolvedEndIcon && !loading && (
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

export {
  Button,
  buttonVariants,
  buttonPresets,
  buttonShapes,
  buttonSizeRecipe,
};

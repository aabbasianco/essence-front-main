import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";

import { Spinner } from "./spinner";
import { Badge } from "./badge";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";
import {
  GetPalette,
  appearances,
  tones,
  StatesRecipe,
  ComponentPresetsRecipe,
  StateResolver,
  State,
  ApiPropValue,
} from "@/lib/design-system/resolver/resolver";
import { RenderIcon, IconDefinition, SizeRecipe } from "./icon";

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
      appearance: "solid",
      tone: "primary",
      shape: "rounded",
      size: "lg",
    },
  },
);
type ButtonVariantProps = VariantProps<typeof buttonVariants>;
type ButtonOwnProps = {
  badge?: ApiPropValue<React.ReactNode>;
  loading?: ApiPropValue<boolean>;
  startIcon?: ApiPropValue<IconDefinition>;
  endIcon?: ApiPropValue<IconDefinition>;
  fluid?: ApiPropValue<boolean>;
  isIcon?: ApiPropValue<boolean>;
  asChild?: boolean;
};
type ButtonApiProps = React.ComponentProps<"button"> &
  ButtonOwnProps &
  // Variants
  {
    appearance?: ApiPropValue<NonNullable<ButtonVariantProps["appearance"]>>;
    tone?: ApiPropValue<NonNullable<ButtonVariantProps["tone"]>>;
    shape?: ApiPropValue<NonNullable<ButtonVariantProps["shape"]>>;
    size?: ApiPropValue<NonNullable<ButtonVariantProps["size"]>>;
  };

type ButtonResolvedApiProps = Omit<
  ButtonApiProps,
  "appearance" | "tone" | "shape" | "size"
> & {
  appearance: NonNullable<ButtonApiProps["appearance"]>;
  tone: NonNullable<ButtonApiProps["tone"]>;
  shape: NonNullable<ButtonApiProps["shape"]>;
  size: NonNullable<ButtonApiProps["size"]>;
};

const buttonDefaults: ButtonResolvedApiProps = {
  appearance: "solid",
  tone: "primary",
  shape: "rounded",
  size: "lg",
  startIcon: undefined,
  endIcon: undefined,
  isIcon: undefined,
  loading: undefined,
  disabled: undefined,
  children: "button default value",
  fluid: undefined,
  badge: undefined,
};

const buttonPresetRecipe: ComponentPresetsRecipe<ButtonResolvedApiProps> = {
  primary: {
    default: {
      appearance: "solid",
      tone: "primary",
      shape: "rounded",
      size: "lg",
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
      loading: undefined,
      disabled: undefined,
      children: "preset default value",
      fluid: undefined,
      badge: undefined,
    },
    hover: {},
    pressed: {},
  },

  secondary: {
    default: {
      appearance: "ghost-outline",
      tone: "primary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  tertiary: {
    default: {
      appearance: "ghost-outline",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
    hover: {
      appearance: "ghost-outline",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  ghost: {
    default: {
      appearance: "ghost",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  link: {
    default: {
      appearance: "text",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  warning: {
    default: {
      appearance: "soft",
      tone: "warning",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: "alert-triangle",
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  destructive: {
    default: {
      appearance: "soft",
      tone: "danger",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: "alert-circle",
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  inputSoft: {
    default: {
      appearance: "soft",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },

  inputGhost: {
    default: {
      appearance: "ghost",
      tone: "secondary",
      shape: buttonDefaults.shape,
      size: buttonDefaults.size,
      startIcon: buttonDefaults.startIcon,
      endIcon: buttonDefaults.endIcon,
      isIcon: buttonDefaults.isIcon,
    },
  },
};
type ButtonPresetRecipe = keyof typeof buttonPresetRecipe;

type ButtonProps = ButtonApiProps & {
  preset?: ButtonPresetRecipe;
};

function Button({
  className,
  preset,
  tone,
  appearance,
  size,
  shape,
  fluid,
  badge,
  asChild,
  loading,
  startIcon,
  endIcon,
  isIcon,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const [state, setState] = React.useState<State>("default");
  const Comp = asChild ? Slot.Root : "button";
  const presetRecipe = preset ? buttonPresetRecipe[preset] : undefined;
  const overrides = {
    ...(appearance != null && { appearance }),
    ...(tone != null && { tone }),
    ...(shape != null && { shape }),
    ...(size != null && { size }),
    ...(startIcon != null && { startIcon }),
    ...(endIcon != null && { endIcon }),
    ...(isIcon != null && { isIcon }),
    ...(loading != null && { loading }),
    ...(disabled != null && { disabled }),
    ...(children != null && { children }),
    ...(fluid != null && { fluid }),
    ...(badge != null && { badge }),
  };
  // type ButtonDefault = typeof buttonDefaults;
  const resolvedStateProps = StateResolver<ButtonResolvedApiProps>(
    buttonDefaults,
    presetRecipe ?? {},
    state,
    overrides,
  );
  const resolvedButtonSize = resolvedStateProps.isIcon
    ? buttonSizeRecipe[resolvedStateProps.size].icon.component
    : buttonSizeRecipe[resolvedStateProps.size].label.component;
  const resolvedIconProps = resolvedStateProps.isIcon
    ? buttonSizeRecipe[resolvedStateProps.size].icon.icon
    : buttonSizeRecipe[resolvedStateProps.size].label.icon;
  const palette = GetPalette(
    resolvedStateProps.appearance,
    resolvedStateProps.tone,
  );
  return (
    <Comp
      data-slot="button"
      data-preset={preset}
      data-appearance={resolvedStateProps.appearance}
      data-tone={resolvedStateProps.tone}
      data-shape={resolvedStateProps.shape}
      data-size={resolvedStateProps.size}
      data-fluid={resolvedStateProps.fluid}
      data-has-badge={!!resolvedStateProps.badge || undefined}
      data-loading={resolvedStateProps.loading || undefined}
      data-has-start-icon={!!resolvedStateProps.startIcon || undefined}
      data-has-end-icon={!!resolvedStateProps.endIcon || undefined}
      disabled={resolvedStateProps.disabled || resolvedStateProps.loading}
      className={cn(
        buttonVariants({
          appearance: resolvedStateProps.appearance,
          tone: resolvedStateProps.tone,
          shape: resolvedStateProps.shape,
        }),
        resolvedButtonSize,
        resolvedStateProps.fluid && "w-full",
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
      onMouseEnter={() => setState("hover")}
      onMouseLeave={() => setState("default")}
      onMouseDown={() => setState("pressed")}
    >
      {resolvedStateProps.loading ? (
        <Spinner data-icon="inline-start" />
      ) : (
        resolvedStateProps.startIcon && (
          <span data-slot="button-start-icon">
            {RenderIcon(resolvedStateProps.startIcon, resolvedIconProps)}
          </span>
        )
      )}

      {!resolvedStateProps.isIcon && (
        <span data-slot="button-label">{resolvedStateProps.children}</span>
      )}

      {!resolvedStateProps.isIcon &&
        resolvedStateProps.endIcon &&
        !resolvedStateProps.loading && (
          <span className="" data-slot="button-end-icon">
            {RenderIcon(resolvedStateProps.endIcon)}
          </span>
        )}

      {resolvedStateProps.badge != null &&
        resolvedStateProps.badge !== null &&
        resolvedStateProps.badge !== true && (
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
            {resolvedStateProps.badge}
          </Badge>
        )}
    </Comp>
  );
}

export {
  Button,
  buttonVariants,
  buttonPresetRecipe,
  buttonShapes,
  buttonSizeRecipe,
};

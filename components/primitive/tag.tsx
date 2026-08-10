import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import {
  GetPalette,
  type Appearance,
  type Tone,
  type Palette,
  tones,
  appearances,
} from "@/lib/design-system/resolver/resolver";
import { RenderIcon, IconDefinition, IconPropsSet, SizeRecipe } from "./icon";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";

const tagSizeRecipe = {
  sm: {
    label: {
      component:
        "px-1 py-0 text-[length:var(--description-font-size)] data-[has-end-icon=true]:pe-0.5 data-[has-start-icon=true]:ps-0.5",
      icon: {
        size: "xs",
        purpose: "inline",
      },
    },
  },
  md: {
    label: {
      component:
        "px-2 py-0.5 text-[length:var(--font-size-sm)] data-[has-end-icon=true]:pe-1 data-[has-start-icon=true]:ps-1",
      icon: {
        size: "md",
        purpose: "inline",
      },
    },
  },
} satisfies SizeRecipe;

// const tagSizes = Object.fromEntries(
//   Object.entries(tagSizeRecipe).map(([size, recipe]) => [size, recipe.label.component]),
// ) as Record<keyof typeof tagSizeRecipe, string>;
type TagSize = keyof typeof tagSizeRecipe;

const tagShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--badge-radius)]",
});
type TagShape = keyof typeof tagShapes;

const tagDefaults = {
  appearance: "soft",
  tone: "primary",
  shape: "rounded",
  size: "md",
  startIcon: undefined,
  endIcon: undefined,
} satisfies {
  appearance: Appearance;
  tone: Tone;
  shape: TagShape;
  size: TagSize;
  startIcon?: IconDefinition;
  endIcon?: IconDefinition;
};

const tagPresets = {
  "gender-men": {
    appearance: tagDefaults.appearance,
    tone: "primary",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "mars",
    endIcon: tagDefaults.endIcon,
  },
  "gender-women": {
    appearance: tagDefaults.appearance,
    tone: "primary",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "venus",
    endIcon: tagDefaults.endIcon,
  },
  "gender-unisex": {
    appearance: tagDefaults.appearance,
    tone: "primary",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "venus-and-mars",
    endIcon: tagDefaults.endIcon,
  },

  brandType: {
    appearance: tagDefaults.appearance,
    tone: "violet",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: tagDefaults.startIcon,
    endIcon: tagDefaults.endIcon,
  },

  origin: {
    appearance: tagDefaults.appearance,
    tone: "indigo",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "earth",
    endIcon: tagDefaults.endIcon,
  },

  concentration: {
    appearance: tagDefaults.appearance,
    tone: "sky",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: tagDefaults.startIcon,
    endIcon: tagDefaults.endIcon,
  },

  "performance-longevity": {
    appearance: tagDefaults.appearance,
    tone: "teal",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "clock-3",
    endIcon: tagDefaults.endIcon,
  },
  "performance-projection": {
    appearance: tagDefaults.appearance,
    tone: "teal",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "radio",
    endIcon: tagDefaults.endIcon,
  },
  "performance-sillage": {
    appearance: tagDefaults.appearance,
    tone: "teal",
    shape: "rounded",
    size: tagDefaults.size,
    startIcon: "wind",
    endIcon: tagDefaults.endIcon,
  },
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    shape: TagShape;
    size: TagSize;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
  }
>;
type TagPreset = keyof typeof tagPresets;

const tagVariants = cva(
  "bg-[var(--tag-background)] text-[var(--tag-foreground)] border-[var(--tag-border)] font-[var(--badge-font-weight)] hover:cursor-pointer border-2 group/tag inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      tone: tones,
      appearance: appearances,
      size: tagSizeRecipe,
      shape: tagShapes,
    },
    defaultVariants: {
      tone: tagDefaults.tone,
      appearance: tagDefaults.appearance,
      size: tagDefaults.size,
      shape: tagDefaults.shape,
    },
  },
);

type TagProps = React.ComponentProps<"span"> &
  VariantProps<typeof tagVariants> & {
    preset?: TagPreset;
    asChild?: boolean;
    startIcon?: IconDefinition;
    endIcon?: IconDefinition;
  };

function Tag({
  className,
  preset,
  tone,
  appearance,
  size,
  shape,
  startIcon,
  endIcon,
  asChild = false,
  children,
  ...props
}: TagProps) {
  const Comp = asChild ? Slot.Root : "span";
  const presetValues = preset ? tagPresets[preset] : undefined;
  const resolvedTone = tone ?? presetValues?.tone ?? tagDefaults.tone;
  const resolvedAppearance =
    appearance ?? presetValues?.appearance ?? tagDefaults.appearance;
  const resolvedSize = size ?? presetValues?.size ?? tagDefaults.size;
  const resolvedTagSize =  tagSizeRecipe[resolvedSize].label.component;
  const resolvedShape = shape ?? presetValues?.shape ?? tagDefaults.shape;
  const resolvedStartIcon =
    presetValues?.startIcon ?? startIcon ?? tagDefaults.startIcon;
  const resolvedEndIcon =
    presetValues?.endIcon ?? endIcon ?? tagDefaults.endIcon;
  const resolvedIconProps = tagSizeRecipe[resolvedSize].label.icon;
  const palette = GetPalette(resolvedAppearance, resolvedTone);

  return (
    <Comp
      data-slot="tag"
      data-preset={preset}
      data-tone={resolvedTone}
      data-appearance={resolvedAppearance}
      data-size={resolvedSize}
      data-shape={resolvedShape}
      data-has-start-icon={!!resolvedStartIcon || undefined}
      data-has-end-icon={!!resolvedEndIcon || undefined}
      className={cn(
        tagVariants({
          tone: resolvedTone,
          appearance: resolvedAppearance,
          shape: resolvedShape,
        }),
        resolvedTagSize,
        className,
      )}
      style={
        {
          "--tag-background": palette.default.background,
          "--tag-foreground": palette.default.foreground,
          "--tag-border": palette.default.border,
        } as React.CSSProperties
      }
      {...props}
    >
      {resolvedStartIcon && (
        <span data-slot="tag-start-icon">
          {RenderIcon(resolvedStartIcon, resolvedIconProps)}
        </span>
      )}
      <span data-slot="tag-label">{children}</span>
      {resolvedEndIcon && (
        <span data-slot="tag-end-icon">
          {RenderIcon(resolvedEndIcon, resolvedIconProps)}
        </span>
      )}
    </Comp>
  );
}

export { Tag, tagVariants, tagPresets, tagShapes, tagSizeRecipe, type TagSize };

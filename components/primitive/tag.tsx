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
} from "@/lib/design-system/palette";
import { defaultShapes, ExtendVariants } from "@/lib/design-system/variants";

const tagSizes = {
  // sm: "px-2.5 py-0.5 text-[length:var(--font-size-xs)] ",
  sm: "px-1 py-0 text-[length:var(--description-font-size)] font-[var(--badge-font-weight)] data-[has-end-icon=true]:pe-0 data-[has-start-icon=true]:ps-0 [&_svg:not([class*='size-'])]:size-4",
  md: "px-2 py-0.5 text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)] data-[has-end-icon=true]:pe-1 data-[has-start-icon=true]:ps-1 [&_svg:not([class*='size-'])]:size-5",
};
type TagSize = keyof typeof tagSizes;

const tagShapes = ExtendVariants(defaultShapes, {
  rounded: "rounded-[var(--badge-radius)]",
});
type TagShape = keyof typeof tagShapes;

const tagDefaults = {
  appearance: "soft",
  tone: "primary",
  shape: "rounded",
  size: "md",
} satisfies {
  appearance: Appearance;
  tone: Tone;
  shape: TagShape;
  size: TagSize;
};

const tagPresets = {
  gender: {
    appearance: tagDefaults.appearance,
    tone: "primary",
    shape: "rounded",
    size: tagDefaults.size,
  },

  brandType: {
    appearance: tagDefaults.appearance,
    tone: "violet",
    shape: "rounded",
    size: tagDefaults.size,
  },

  origin: {
    appearance: tagDefaults.appearance,
    tone: "indigo",
    shape: "rounded",
    size: tagDefaults.size,
  },

  concentration: {
    appearance: tagDefaults.appearance,
    tone: "sky",
    shape: "rounded",
    size: tagDefaults.size,
  },

  performance: {
    appearance: tagDefaults.appearance,
    tone: "teal",
    shape: "rounded",
    size: tagDefaults.size,
  },
} satisfies Record<
  string,
  {
    appearance: Appearance;
    tone: Tone;
    shape: TagShape;
    size: TagSize;
  }
>;
type TagPreset = keyof typeof tagPresets;

const tagVariants = cva(
  "bg-[var(--tag-background)] text-[var(--tag-foreground)] border-[var(--tag-border)] hover:cursor-pointer border-2 group/tag inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      tone: tones,
      appearance: appearances,
      size: tagSizes,
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
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
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
  const resolvedTone = presetValues?.tone ?? tone ?? tagDefaults.tone;
  const resolvedAppearance =
    presetValues?.appearance ?? appearance ?? tagDefaults.appearance;
  const resolvedSize = presetValues?.size ?? size ?? tagDefaults.size;
  const resolvedShape = presetValues?.shape ?? shape ?? tagDefaults.shape;
  const palette = GetPalette(resolvedAppearance, resolvedTone);

  return (
    <Comp
      data-slot="tag"
      data-preset={preset}
      data-tone={resolvedTone}
      data-appearance={resolvedAppearance}
      data-size={resolvedSize}
      data-shape={resolvedShape}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      className={cn(
        tagVariants({
          tone: resolvedTone,
          appearance: resolvedAppearance,
          size: resolvedSize,
          shape: resolvedShape,
        }),
        className,
      )}
      style={
        {
          "--tag-background": palette.background,
          "--tag-foreground": palette.foreground,
          "--tag-border": palette.border,
        } as React.CSSProperties
      }
      {...props}
    >
      {startIcon && <span data-slot="tag-start-icon">{startIcon}</span>}
      <span data-slot="tag-label">{children}</span>
      {endIcon && <span data-slot="tag-end-icon">{endIcon}</span>}
    </Comp>
  );
}

export { Tag, tagVariants, tagPresets, tagShapes, tagSizes };

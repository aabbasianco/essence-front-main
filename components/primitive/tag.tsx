import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { cn } from "@/lib/utils";
import {
  GetTonePalette,
  type Appearance,
  type Tone,
  type Palette,
  tones,
  appearances,
} from "@/lib/theme/palette";

const tagVariants = cva(
  "bg-[var(--tag-background)] text-[var(--tag-foreground)] border-[var(--tag-border)] hover:cursor-pointer border-1 group/tag inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      category: {
        gender: "",
        brandType: "",
        origin: "",
        concentration: "",
        performance: "",
      },
      tone: tones,
      appearance: appearances,
      size: {
        // sm: "px-2.5 py-0.5 text-[length:var(--font-size-xs)] ",
        sm: "px-1 py-0 text-[length:var(--description-font-size)] font-[var(--badge-font-weight)] data-[has-end-icon=true]:pe-0 data-[has-start-icon=true]:ps-0 [&_svg:not([class*='size-'])]:size-4",
        md: "px-2 py-0.5 text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)] data-[has-end-icon=true]:pe-1 data-[has-start-icon=true]:ps-1 [&_svg:not([class*='size-'])]:size-5",
      },
      shape: {
        rounded: "rounded-[var(--badge-radius)]",
        pill: "rounded-full",
        square: "",
      },
    },
    defaultVariants: {
      tone: "primary",
      appearance: "soft",
      size: "md",
      shape: "rounded",
    },
  },
);

type TagVariants = VariantProps<typeof tagVariants>;
type CommonTagProps = React.ComponentProps<"span"> &
  Omit<VariantProps<typeof tagVariants>, "category" | "tone" | "appearance"> & {
    asChild?: boolean;
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
  };
type TagProps =
  | (CommonTagProps & {
      category: TagCategory;
      tone?: never;
      appearance?: never;
    })
  | (CommonTagProps & {
      category?: never;
      tone?: Tone;
      appearance?: Appearance;
    });
export const tagCategories = {
  gender: "",
  brandType: "",
  origin: "",
  concentration: "",
  performance: "",
} as const;
export type TagCategory = keyof typeof tagCategories;

const categoryPalettes: Record<TagCategory, Palette> = {
  gender: {
    background: "var(--tag-gender-background)",
    foreground: "var(--tag-gender-foreground)",
    border: "transparent",
  },
  brandType: {
    background: "var(--tag-brand-type-background)",
    foreground: "var(--tag-brand-type-foreground)",
    border: "transparent",
  },
  origin: {
    background: "var(--tag-origin-background)",
    foreground: "var(--tag-origin-foreground)",
    border: "transparent",
  },
  concentration: {
    background: "var(--tag-concentration-background)",
    foreground: "var(--tag-concentration-foreground)",
    border: "transparent",
  },
  performance: {
    background: "var(--tag-performance-background)",
    foreground: "var(--tag-performance-foreground)",
    border: "transparent",
  },
};

function Tag({
  className,
  category,
  tone,
  appearance,
  size = "md",
  shape = "rounded",
  startIcon,
  endIcon,
  asChild = false,
  children,
  ...props
}: TagProps) {
  const Comp = asChild ? Slot.Root : "span";
  const resolvedAppearance: Appearance = appearance ?? "soft";
  const resolvedTone: Tone = tone ?? "primary";
  const palette =
    category != null
      ? categoryPalettes[category]
      : GetTonePalette(resolvedAppearance, resolvedTone);

  return (
    <Comp
      data-slot="tag"
      data-appearance={appearance}
      data-category={category}
      data-tone={tone}
      data-size={size}
      data-shape={shape}
      data-has-start-icon={!!startIcon || undefined}
      data-has-end-icon={!!endIcon || undefined}
      className={cn(
        tagVariants({
          category,
          tone: category ? undefined : tone,
          appearance: category ? undefined : appearance,
          size,
          shape,
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

export { Tag, tagVariants };

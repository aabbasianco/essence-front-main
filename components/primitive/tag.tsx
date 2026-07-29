import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import { Disc } from "lucide-react";
import { cn } from "@/lib/utils";

const tagVariants = cva(
  "bg-[var(--tag-background)] text-[var(--tag-foreground)] border-[var(--tag-border)] hover:cursor-pointer border-2 group/tag inline-flex w-fit shrink-0 items-center justify-center gap-1 overflow-hidden whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pe-1.5 has-data-[icon=inline-start]:ps-1.5 aria-invalid:border-danger aria-invalid:ring-danger/20 dark:aria-invalid:ring-danger/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
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
        // sm: "px-2.5 py-0.5 text-[length:var(--font-size-xs)] ",
        sm: "px-1 py-0 text-[length:var(--description-font-size)] font-[var(--badge-font-weight)]",
        md: "px-2 py-0.5 text-[length:var(--font-size-sm)] font-[var(--font-weight-semibold)]",
      },
      shape: {
        rounded: "rounded-[var(--badge-radius)]",
        pill: "rounded-full",
        square: "",
      },
    },
    defaultVariants: {
      appearance: "soft",
      color: "primary",
      size: "md",
      shape: "rounded",
    },
  },
);

type TagProps = React.ComponentProps<"span"> &
  VariantProps<typeof tagVariants> & { asChild?: boolean };

type TagVariants = VariantProps<typeof tagVariants>;

type TagAppearance = NonNullable<TagVariants["appearance"]>;
type TagColor = NonNullable<TagVariants["color"]>;

function Tag({
  className,
  appearance = "solid",
  color = "primary",
  size = "md",
  shape = "rounded",
  asChild = false,
  children,
  ...props
}: TagProps) {
  const Comp = asChild ? Slot.Root : "span";
  const appearanceValue = appearance ?? "solid";
  const colorValue = color ?? "primary";
  const palette = GetTagPalette(appearanceValue, colorValue);

  return (
    <Comp
      data-slot="tag"
      data-appearance={appearance}
      data-color={color}
      data-size={size}
      data-shape={shape}
      className={cn(tagVariants({ appearance, color, size, shape }), className)}
      style={
        {
          "--tag-background": palette.background,
          "--tag-foreground": palette.foreground,
          "--tag-border": palette.border,
        } as React.CSSProperties
      }
      {...props}
    >
      {appearance == "ghost" && (
        <span
          aria-hidden
          className="size-1.5 rounded-full bg-current animate-pulse"
        />
      )}
      <span data-slot="tag-label">{children}</span>
    </Comp>
  );
}

export { Tag, tagVariants };

function GetTagPalette(appearance: TagAppearance, color: TagColor) {
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

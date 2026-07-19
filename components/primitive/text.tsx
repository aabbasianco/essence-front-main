import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    tone: {
      backgroundForeground: "text-background-foreground text-[length:var(--body-font-size)] font-[length:var(--body-font-weight)]",
      surfaceForeground: "text-surface-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      surfaceSubtleForeground: "text-surface-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      primaryForeground: "text-primary-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      primarySubtleForeground: "text-primary-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      secondaryForeground: "text-secondary-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      secondarySubtleForeground: "text-secondary-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      tertiaryForeground: "text-tertiary-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      tertiarySubtleForeground: "text-tertiary-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      brandForeground: "text-brand-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      brandSubtleForeground: "text-brand-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      successForeground: "text-success-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      successSubtleForeground: "text-success-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      dangerForeground: "text-danger-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      dangerSubtleForeground: "text-danger-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      warningForeground: "text-warning-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      warningSubtleForeground: "text-warning-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      infoForeground: "text-info-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      infoSubtleForeground: "text-info-subtle-foreground text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      caption: "text-caption text-[length:var(--caption-font-size)] font-[var(--caption-font-weight)]",
    },
    size: {
      heroTitle:
        "text-[length:var(--hero-title-font-size)] font-[var(--hero-title-font-weight)]",
      pageTitle:
        "text-[length:var(--page-title-font-size)] font-[var(--page-title-font-weight)]",
      sectionTitle:
        "text-[length:var(--section-title-font-size)] font-[var(--section-title-font-weight)]",
      cardTitle:
        "text-[length:var(--card-title-font-size)] font-[var(--card-title-font-weight)]",
      body: "text-[length:var(--body-font-size)] font-[var(--body-font-weight)]",
      caption:
        "text-[length:var(--caption-font-size)] font-[var(--caption-font-weight)]",
      inherit:"",
    },
    weight: {
      light: "font-[var(--font-weight-light)]",
      regular: "font-[var(--font-weight-regular)]",
      medium: "font-[var(--font-weight-medium)]",
      semibold: "font-[var(--font-weight-semibold)]",
      bold: "font-[var(--font-weight-bold)]",
      inherit:"",
    },
  },
  defaultVariants: {
    tone: "backgroundForeground",
    size: "inherit",
    weight: "inherit",
  },
});

type TextProps = VariantProps<typeof textVariants> & {
  as?: React.ElementType;
  truncate?: 1 | 2 | 3;
  children?: string;
};

const truncateMap = {
  1: "truncate",
  2: "line-clamp-2",
  3: "line-clamp-3",
} as const;

function Text({
  as = "p",
  tone = "backgroundForeground",
  size = "inherit",
  weight = "inherit",
  truncate = 1,
  children = "I'm a customizable text component. You can use me to display text.",
  ...props
}: TextProps) {
  const Comp = as;

  return (
    <Comp
      data-slot="button"
      data-as={!!as || undefined}
      data-tone={tone}
      data-size={size}
      data-weight={weight}
      data-truncate={truncate || undefined}
      className={cn(
        textVariants({ tone, size, weight }),
        truncate ? truncateMap[truncate] : undefined,
        "w-100",
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export { Text, textVariants };

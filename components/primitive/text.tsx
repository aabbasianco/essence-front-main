import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    tone: {
      backgroundForeground: "text-background-foreground",
      surfaceForeground: "text-surface-foreground",
      surfaceSubtleForeground: "text-surface-subtle-foreground",
      primaryForeground: "text-primary-foreground",
      primarySubtleForeground: "text-primary-subtle-foreground",
      secondaryForeground: "text-secondary-foreground",
      secondarySubtleForeground: "text-secondary-subtle-foreground",
      tertiaryForeground: "text-tertiary-foreground",
      tertiarySubtleForeground: "text-tertiary-subtle-foreground",
      brandForeground: "text-brand-foreground",
      brandSubtleForeground: "text-brand-subtle-foreground",
      successForeground: "text-success-foreground",
      successSubtleForeground: "text-success-subtle-foreground",
      dangerForeground: "text-danger-foreground",
      dangerSubtleForeground: "text-danger-subtle-foreground",
      warningForeground: "text-warning-foreground",
      warningSubtleForeground: "text-warning-subtle-foreground",
      infoForeground: "text-info-foreground",
      infoSubtleForeground: "text-info-subtle-foreground",
      caption: "text-caption text-[length:var(--caption-font-size)] font-[length:var(--caption-font-weight)]",
    },
    size: {
      heroTitle:
        "text-[length:var(--hero-title-font-size)] font-[length:var(--hero-title-font-weight)]",
      pageTitle:
        "text-[length:var(--page-title-font-size)] font-[length:var(--page-title-font-weight)]",
      sectionTitle:
        "text-[length:var(--section-title-font-size)] font-[length:var(--section-title-font-weight)]",
      cardTitle:
        "text-[length:var(--card-title-font-size)] font-[length:var(--card-title-font-weight)]",
      body: "text-[length:var(--body-font-size)] font-[length:var(--body-font-weight)]",
      caption:
        "text-[length:var(--caption-font-size)] font-[length:var(--caption-font-weight)]",
      inherit:"",
    },
    weight: {
      regular: "font-[length:var(--font-weight-regular)]",
      medium: "font-[length:var(--font-weight-medium)]",
      semibold: "font-[length:var(--font-weight-semibold)]",
      bold: "font-[length:var(--font-weight-bold)]",
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

"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Toggle as TogglePrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

export const togglePresets = {
  default:
    "bg-secondary-subtle [&>[data-slot=toggle-thumb]]:size-full aria-pressed:[&>[data-slot=toggle-thumb]]:bg-background p-1! w-60! text-surface-foreground/60 hover:text-surface-foreground/80 aria-pressed:text-surface-foreground",
  icon: "border border-border bg-background hover:bg-muted-subtle",
};
export type TogglePreset = keyof typeof togglePresets;

export const toggleShapes = {
  rounded: "rounded-[var(--radius)]",
  pill: "rounded-full",
  square: "",
};
export type ToggleShape = keyof typeof toggleShapes;

const toggleVariants = cva(
  "group/toggle inline-flex items-center justify-center gap-1 text-sm font-medium whitespace-nowrap transition-colors outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      preset: togglePresets,
      shape: toggleShapes,
      size: {
        md: "h-9 min-w-9 px-3 has-data-[icon=inline-end]:pe-2.5 has-data-[icon=inline-start]:ps-2.5",
        sm: "h-8 min-w-8 px-3 has-data-[icon=inline-end]:pe-2 has-data-[icon=inline-start]:ps-2",
        lg: "h-10 min-w-10 px-4 has-data-[icon=inline-end]:pe-3 has-data-[icon=inline-start]:ps-3",
      },
    },
    defaultVariants: {
      preset: "default",
      shape: "rounded",
      size: "md",
    },
  },
);

type ToggleProps = React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>;

function Toggle({
  className,
  preset = "default",
  shape = "rounded",
  size = "md",
  children = "tag",
  ...props
}: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ preset, shape, size, className }))}
      {...props}
    >
      <span data-slot="toggle-thumb" className={cn(toggleVariants({ shape}))}>{children}</span>
    </TogglePrimitive.Root>
  );
}

export { Toggle, toggleVariants };

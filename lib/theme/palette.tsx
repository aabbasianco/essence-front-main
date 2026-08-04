export const appearances = {
  solid: "",
  soft: "",
  "soft-outline": "",
  ghost: "",
  "ghost-outline": "",
} as const;
export type Appearance = keyof typeof appearances;

export const tones = {
  primary: "",
  secondary: "",
  tertiary: "",
  brand: "",
  orange: "",
  yellow: "",
  amber: "",
  green: "",
  emerald: "",
  teal: "",
  sky: "",
  indigo: "",
  violet: "",
  purple: "",
  fuchsia: "",
  rose: "",
} as const;
export type Tone = keyof typeof tones;

export const severities = {
  primary: "",
  secondary: "",
  tertiary: "",
  brand: "",
  success: "",
  warning: "",
  danger: "",
  info: "",
};
export type Severity = keyof typeof severities;

export type Palette = {
  background: string;
  foreground: string;
  border: string;
};

export function GetPalette(
  appearance: Appearance,
  palette: Tone | Severity,
): Palette {
  switch (appearance) {
    case "solid":
      return {
        background: `var(--color-${palette})`,
        foreground: `var(--color-${palette}-foreground)`,
        border: "transparent",
      };
    case "soft":
      return {
        background: `var(--color-${palette}-subtle)`,
        foreground: `var(--color-${palette}-subtle-foreground)`,
        border: `transparent`,
      };
    case "soft-outline":
      return {
        background: `var(--color-${palette}-subtle)`,
        foreground: `var(--color-${palette}-subtle-foreground)`,
        border: `rgba(var(--color-${palette}-subtle-foreground-rgb), 0.3)`,
      };
    case "ghost":
      return {
        background: `transparent`,
        foreground: `var(--color-${palette})`,
        border: `transparent`,
      };
    case "ghost-outline":
      return {
        background: `transparent`,
        foreground: `var(--color-${palette})`,
        border: `rgba(var(--color-${palette}-rgb), 0.3)`,
      };
  }
}

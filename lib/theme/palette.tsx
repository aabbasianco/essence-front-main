export const appearances = {
  solid: "",
  soft: "",
  "soft-outline": "",
  ghost: "",
  "ghost-outline": "",
  text:"",
} as const;
export type Appearance = keyof typeof appearances;

export const tones = {
  // Semantic Tones
  primary: "",
  secondary: "",
  tertiary: "",
  brand: "",

  // Support Tones
  success: "",
  warning: "",
  danger: "",
  info: "",

  // Color Tones
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

export type Palette = {
  background: string;
  foreground: string;
  border: string;
};

export function GetPalette(
  appearance: Appearance,
  palette: Tone,
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
    case "text":
      return {
        background: `transparent`,
        foreground: `var(--color-${palette})`,
        border: `transparent`,
      };
  }
}

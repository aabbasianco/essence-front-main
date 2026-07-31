export const appearances = {
  solid: "",
  soft: "",
  outline: "",
  ghost: "",
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

export type Palette = {
  background: string;
  foreground: string;
  border: string;
};

export function GetTonePalette(appearance: Appearance, tone: Tone): Palette {
  switch (appearance) {
    case "solid":
      return {
        background: `var(--color-${tone})`,
        foreground: `var(--color-${tone}-foreground)`,
        border: "transparent",
      };
    case "soft":
      return {
        background: `var(--color-${tone}-subtle)`,
        foreground: `var(--color-${tone}-subtle-foreground)`,
        border: `transparent`,
      };
    case "outline":
      return {
        background: `var(--color-${tone}-subtle)`,
        foreground: `var(--color-${tone}-subtle-foreground)`,
        border: `var(--${tone})`,
      };
    case "ghost":
      return {
        background: `transparent`,
        foreground: `var(--color-${tone})`,
        border: `transparent`,
      };
  }
}

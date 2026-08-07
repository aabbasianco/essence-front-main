export const appearances = {
  solid: "",
  soft: "",
  "soft-outline": "",
  ghost: "",
  "ghost-outline": "",
  text: "",
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

export type ComponentState = {
  background?: string;
  foreground?: string;
  border?: string;
  opacity?: string;
  contrastBackground?: string;
};

export type Palette = {
  default: ComponentState;
  hover?: ComponentState;
  pressed?: ComponentState;
  focus?: ComponentState;
  selected?: ComponentState;
};

export function GetPalette(appearance: Appearance, palette: Tone): Palette {
  switch (appearance) {
    case "solid":
      return {
        default: {
          background: `var(--color-${palette})`,
          foreground: `var(--color-${palette}-foreground)`,
          border: "transparent",
          contrastBackground: `var(--color-${palette})`,
        },

        hover: {
          background: `rgba(var(--color-${palette}-rgb), 0.8)`,
          foreground: `var(--color-${palette}-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${palette})`,
          foreground: `var(--color-${palette}-foreground)`,
          border: "transparent",
        },
      };
    case "soft":
      return {
        default: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `transparent`,
          contrastBackground: `var(--color-${palette}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${palette}-rgb), 0.2)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "soft-outline":
      return {
        default: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
          contrastBackground: `var(--color-${palette}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${palette}-rgb), 0.2)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
        },

        pressed: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
        },
      };
    case "ghost":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${palette})`,
          border: `transparent`,
          contrastBackground: `var(--color-${palette}-foreground)`,
        },

        hover: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette})`,
          border: "transparent",
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "ghost-outline":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${palette})`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
          contrastBackground: `var(--color-${palette}-foreground)`,
        },

        hover: {
          background: `var(--color-${palette}-subtle)`,
          foreground: `var(--color-${palette})`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `rgba(var(--color-${palette}-rgb), 0.3)`,
        },
      };
    case "text":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${palette})`,
          border: `transparent`,
          contrastBackground: `var(--color-${palette}-foreground)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${palette}-subtle-foreground)`,
          border: `transparent`,
        },
      };
  }
}

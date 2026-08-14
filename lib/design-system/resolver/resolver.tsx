const appearances = {
  solid: "",
  soft: "",
  "soft-outline": "",
  ghost: "",
  "ghost-outline": "",
  text: "",
} as const;
type Appearance = keyof typeof appearances;

const tones = {
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
type Tone = keyof typeof tones;

type ComponentState = {
  background?: string;
  foreground?: string;
  border?: string;
  opacity?: string;
  contrastBackground?: string;
};

type Palette = {
  default: ComponentState;
  hover?: ComponentState;
  pressed?: ComponentState;
  focus?: ComponentState;
  selected?: ComponentState;
};

const states = {
  default: "",
  hover: "",
  pressed: "",
  focus: "",
  selected: "",
} as const;

type State = keyof typeof states;

const statesArr = Object.keys(states);

function GetPalette(appearance: Appearance, tone: Tone): Palette {
  switch (appearance) {
    case "solid":
      return {
        default: {
          background: `var(--color-${tone})`,
          foreground: `var(--color-${tone}-foreground)`,
          border: "transparent",
          contrastBackground: `var(--color-${tone})`,
        },

        hover: {
          background: `rgba(var(--color-${tone}-rgb), 0.8)`,
          foreground: `var(--color-${tone}-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${tone})`,
          foreground: `var(--color-${tone}-foreground)`,
          border: "transparent",
        },
      };
    case "soft":
      return {
        default: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `transparent`,
          contrastBackground: `var(--color-${tone}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${tone}-rgb), 0.2)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "soft-outline":
      return {
        default: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
          contrastBackground: `var(--color-${tone}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${tone}-rgb), 0.2)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
        },

        pressed: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
        },
      };
    case "ghost":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${tone})`,
          border: `transparent`,
          contrastBackground: `var(--color-${tone}-foreground)`,
        },

        hover: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone})`,
          border: "transparent",
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "ghost-outline":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${tone})`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
          contrastBackground: `var(--color-${tone}-foreground)`,
        },

        hover: {
          background: `var(--color-${tone}-subtle)`,
          foreground: `var(--color-${tone})`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `rgba(var(--color-${tone}-rgb), 0.3)`,
        },
      };
    case "text":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${tone})`,
          border: `transparent`,
          contrastBackground: `var(--color-${tone}-foreground)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${tone}-subtle-foreground)`,
          border: `transparent`,
        },
      };
  }
}

type ApiPropObjValue<T> = Partial<Record<State, T>>;
type ApiPropValue<T> = T | ApiPropObjValue<T>;
type StatesRecipe<T extends object> = Partial<Record<State, Partial<T>>>;
type ComponentPresetsRecipe<T extends object> = Record<string, StatesRecipe<T>>;

function isStateValue<T>(value: ApiPropValue<T>): value is ApiPropObjValue<T> {
  if (value === null || typeof value !== "object" || Array.isArray(value)) {
    return false;
  }

  return Object.keys(value).every((key) => statesArr.includes(key as State));
}

type StateOverrides<T extends object> = {
  [K in keyof T]?: ApiPropValue<T[K]>;
};
function StateResolver<T extends object>(
  values: T,
  statesRecipe: StatesRecipe<T>,
  state: State,
  overrides?: StateOverrides<T>,
): T {
  const resolvedOverrides = Object.fromEntries(
    Object.entries(overrides ?? {}).flatMap(([key, value]) => {
      if (value === undefined || value === null) {
        return [];
      }

      if (isStateValue(value)) {
        return [[key, value[state]]];
      }

      return [[key, value]];
    }),
  ) as Partial<T>;

  return {
    ...values,
    ...(statesRecipe.default ?? {}),
    ...(statesRecipe[state] ?? {}),
    ...resolvedOverrides,
  };
}

export {
  StateResolver,
  GetPalette,
  states,
  type State,
  type ApiPropValue,
  type StatesRecipe,
  type ComponentPresetsRecipe,
  tones,
  type Tone,
  appearances,
  type Appearance,
};

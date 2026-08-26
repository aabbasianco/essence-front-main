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
  red: "",
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

const states = {
  default: "",
  hover: "",
  pressed: "",
  focus: "",
  selected: "",
} as const;
type State = keyof typeof states;

type ComponentState = {
  background?: string;
  foreground?: string;
  border?: string;
  contrastBackground?: string;
};

type Palette = {
  default: ComponentState;
  hover?: ComponentState;
  pressed?: ComponentState;
  focus?: ComponentState;
  selected?: ComponentState;
};

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

type ComponentPresetsRecipe<
  Props extends object,
  StructuredKeys extends keyof Props = never,
> = Record<string, StatesRecipe<Props, StructuredKeys>>;

// -- New Resolver --

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends Record<string, unknown>
    ? DeepPartial<T[K]>
    : T[K];
};

// What can one state override?
type StateProps<
  Props extends object,
  StructuredKeys extends keyof Props = never,
> = Partial<Omit<Props, StructuredKeys>> & {
  [K in StructuredKeys]?: Props[K] extends object
    ? DeepPartial<Props[K]>
    : Props[K];
};

// What states can the component define?
type StatesRecipe<
  Props extends object,
  StructuredKeys extends keyof Props = never,
> = Partial<Record<State, StateProps<Props, StructuredKeys>>>;

// Is this value safe to recursively merge?
function IsPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Merge these two structured objects recursively.
function MergeStructuredProps(
  baseProps: Record<string, unknown>,
  overrideProps: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ...baseProps };

  for (const key of Object.keys(overrideProps)) {
    const basePropsValue = result[key];
    const overrideValue = overrideProps[key];

    if (IsPlainObject(basePropsValue) && IsPlainObject(overrideValue)) {
      result[key] = MergeStructuredProps(basePropsValue, overrideValue);
    } else {
      result[key] = overrideValue;
    }
  }

  return result;
}

// Apply this state's values to the current resolved props.
function MergeStateProps<
  Props extends object,
  StructuredKeys extends keyof Props,
>(
  currentProps: Props,
  overrideProps: StateProps<Props, StructuredKeys> | undefined,
  structuredKeys: readonly StructuredKeys[],
): Props {
  if (!overrideProps) return currentProps;

  const nextProps = { ...currentProps };

  for (const key of Object.keys(overrideProps) as Array<keyof Props>) {
    const value = (overrideProps as Partial<Props>)[key];

    if (value === undefined) continue;

    if (
      structuredKeys.includes(key as StructuredKeys) &&
      IsPlainObject(nextProps[key]) &&
      IsPlainObject(value)
    ) {
      nextProps[key] = MergeStructuredProps(
        nextProps[key] as Record<string, unknown>,
        value as Record<string, unknown>,
      ) as Props[typeof key];
    } else {
      nextProps[key] = value as Props[typeof key];
    }
  }

  return nextProps;
}

// Given defaults, preset, user API, user state overrides, and the current state, what are the final props?
function ResolveStateProps<
  Props extends object,
  StructuredKeys extends keyof Props = never,
>(
  defaults: Props,
  presetStates: StatesRecipe<Props, StructuredKeys>,
  userProps: Partial<Props>,
  userStates: StatesRecipe<Props, StructuredKeys> | undefined,
  state: State,
  structuredKeys: readonly StructuredKeys[],
): Props {
  let result = { ...defaults };

  // 1. Preset default
  result = MergeStateProps(result, presetStates.default, structuredKeys);

  // 2. Preset current state
  if (state !== "default") {
    result = MergeStateProps(result, presetStates[state], structuredKeys);
  }

  // 3. Ordinary user props → default state
  result = MergeStateProps(result, userProps, structuredKeys);

  // 4. Explicit user default state
  result = MergeStateProps(result, userStates?.default, structuredKeys);

  // 5. Explicit user current state
  if (state !== "default") {
    result = MergeStateProps(result, userStates?.[state], structuredKeys);
  }

  return result;
}

export {
  ResolveStateProps,
  GetPalette,
  states,
  type State,
  type StatesRecipe,
  type ComponentPresetsRecipe,
  tones,
  type Tone,
  appearances,
  type Appearance,
};

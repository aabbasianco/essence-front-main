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

function GetPalette(_appearance: Appearance, _tone: Tone): Palette {
  switch (_appearance) {
    case "solid":
      return {
        default: {
          background: `var(--color-${_tone})`,
          foreground: `var(--color-${_tone}-foreground)`,
          border: "transparent",
          contrastBackground: `var(--color-${_tone})`,
        },

        hover: {
          background: `rgba(var(--color-${_tone}-rgb), 0.8)`,
          foreground: `var(--color-${_tone}-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${_tone})`,
          foreground: `var(--color-${_tone}-foreground)`,
          border: "transparent",
        },
      };
    case "soft":
      return {
        default: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `transparent`,
          contrastBackground: `var(--color-${_tone}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${_tone}-rgb), 0.2)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: "transparent",
        },

        pressed: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "soft-outline":
      return {
        default: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
          contrastBackground: `var(--color-${_tone}-foreground)`,
        },

        hover: {
          background: `rgba(var(--color-${_tone}-rgb), 0.2)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
        },

        pressed: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
        },
      };
    case "ghost":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${_tone})`,
          border: `transparent`,
          contrastBackground: `var(--color-${_tone}-foreground)`,
        },

        hover: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone})`,
          border: "transparent",
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `transparent`,
        },
      };
    case "ghost-outline":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${_tone})`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
          contrastBackground: `var(--color-${_tone}-foreground)`,
        },

        hover: {
          background: `var(--color-${_tone}-subtle)`,
          foreground: `var(--color-${_tone})`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
          border: `rgba(var(--color-${_tone}-rgb), 0.3)`,
        },
      };
    case "text":
      return {
        default: {
          background: `transparent`,
          foreground: `var(--color-${_tone})`,
          border: `transparent`,
          contrastBackground: `var(--color-${_tone}-foreground)`,
        },

        pressed: {
          background: `transparent`,
          foreground: `var(--color-${_tone}-subtle-foreground)`,
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
function IsPlainObject(_value: unknown): _value is Record<string, unknown> {
  return typeof _value === "object" && _value !== null && !Array.isArray(_value);
}

// Merge these two structured objects recursively.
function MergeStructuredProps(
  _baseProps: Record<string, unknown>,
  _overrideProps: Record<string, unknown>,
): Record<string, unknown> {
  const result = { ..._baseProps };

  for (const key of Object.keys(_overrideProps)) {
    const basePropsValue = result[key];
    const overrideValue = _overrideProps[key];

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
  _currentProps: Props,
  _overrideProps: StateProps<Props, StructuredKeys> | undefined,
  _structuredKeys: readonly StructuredKeys[],
): Props {
  if (!_overrideProps) return _currentProps;

  const nextProps = { ..._currentProps };

  for (const key of Object.keys(_overrideProps) as Array<keyof Props>) {
    const overridePropValue = (_overrideProps as Partial<Props>)[key];

    if (overridePropValue === undefined) continue;

    if (
      _structuredKeys.includes(key as StructuredKeys) &&
      IsPlainObject(nextProps[key]) &&
      IsPlainObject(overridePropValue)
    ) {
      nextProps[key] = MergeStructuredProps(
        nextProps[key] as Record<string, unknown>,
        overridePropValue as Record<string, unknown>,
      ) as Props[typeof key];
    } else {
      nextProps[key] = overridePropValue as Props[typeof key];
    }
  }

  return nextProps;
}

// Given defaults, preset, user API, user state overrides, and the current state, what are the final props?
function ResolveStateProps<
  Props extends object,
  StructuredKeys extends keyof Props = never,
>(
  _defaults: Props,
  _presetStates: StatesRecipe<Props, StructuredKeys>,
  _userProps: Partial<Props>,
  _userStates: StatesRecipe<Props, StructuredKeys> | undefined,
  _state: State,
  _structuredKeys: readonly StructuredKeys[],
): Props {
  let result = { ..._defaults };

  // 1. Preset default
  result = MergeStateProps(result, _presetStates.default, _structuredKeys);

  // 2. Preset current state
  if (_state !== "default") {
    result = MergeStateProps(result, _presetStates[_state], _structuredKeys);
  }

  // 3. Ordinary user props → default state
  result = MergeStateProps(result, _userProps, _structuredKeys);

  // 4. Explicit user default state
  result = MergeStateProps(result, _userStates?.default, _structuredKeys);

  // 5. Explicit user current state
  if (_state !== "default") {
    result = MergeStateProps(result, _userStates?.[_state], _structuredKeys);
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

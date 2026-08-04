export function ExtendVariants<
  T extends Record<string, string>,
  U extends Record<string, string>,
>(
  defaults: T,
  overrides: U,
) {
  return {
    ...defaults,
    ...overrides,
  } as T & U;
}

export const defaultShapes = {
    rounded: "rounded-(--radius)",
    pill: "rounded-full",
    square: "",
} as const;
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
    pill: "rounded-[20px]",
    square: "",
} as const;
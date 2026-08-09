import type { State } from "../entities/entities";

export const states = [
  { id: 1, name: "default" },
  { id: 2, name: "hover" },
  { id: 3, name: "pressed" },
  { id: 4, name: "focus" },
  { id: 5, name: "selected" },
] satisfies State[];

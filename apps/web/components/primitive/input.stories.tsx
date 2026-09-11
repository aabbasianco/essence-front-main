import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input, inputPresets, inputShapes } from "./input";

const meta = {
  component: Input,
  argTypes: {
    preset: {
      control: "radio",
      options: Object.keys(inputPresets),
    },
    shape: {
      control: "radio",
      options: Object.keys(inputShapes),
    },
    placeholder: {
      control: "text",
    },
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search...",
    "aria-invalid": false,
    preset: "default",
    shape: "rounded",
  },
};

export const SearchBox: Story = {
  args: {
    placeholder: "Search...",
    "aria-invalid": false,
    preset: "searchBox",
    shape: "pill",
  },
};

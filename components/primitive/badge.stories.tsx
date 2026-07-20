import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";

const meta = {
  component: Badge,
  argTypes: {
    appearance: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "danger",
        "info",
      ],
    },
    size: {
      control: "radio",
      options: ["md", "lg"],
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill", "square"],
    },
    asChild: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    appearance: "solid",
    color: "primary",
    children: "sample",
    shape: "rounded",
  },
};

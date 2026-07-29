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
      options: ["sm", "md"],
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
  args: {
    appearance: "solid",
    children: "33% off",
    shape: "rounded",
    size: "sm",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Danger: Story = {
  args: {
    color: "danger",
  },
  render: (args) => <Badge {...args} dir="auto" />,
};

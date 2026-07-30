import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tag } from "./tag";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import { Flame } from "lucide-react";
import { Astroid } from "lucide-react";

const meta = {
  component: Tag,
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
    appearance: "soft",
    shape: "rounded",
    children: "Tag Text",
    size: "md",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    startIcon: <X />,
  },
  render: (args) => <Tag {...args} dir="auto" />,
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-4 justify-center">
      <Tag {...args} appearance="outline" startIcon={<Check/>} color="primary" />
      <Tag {...args} appearance="outline" startIcon={<X/>} color="secondary" />
      <Tag {...args} appearance="outline" startIcon={<Flame/>} color="tertiary" />
      <Tag {...args} appearance="outline" startIcon={<Check/>} color="brand" />
      <Tag {...args} appearance="outline" startIcon={<Astroid/>} color="purple" />
      <Tag {...args} appearance="outline" startIcon={<Astroid/>} color="violet" />
      <Tag {...args} appearance="outline" startIcon={<Check/>} color="green" />
    </div>
  ),
};

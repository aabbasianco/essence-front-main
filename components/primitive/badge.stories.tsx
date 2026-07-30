import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge } from "./badge";
import { ArrowUp, Clock, Flame, Package } from "lucide-react";

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
        "brand",
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
    startIcon: <Clock />,
  },
  render: (args) => <Badge {...args} dir="auto" />,
};

export const Variants: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center">
      <Badge {...args} color="secondary">
        Featured
      </Badge>
      <Badge {...args} color="primary">
        New
      </Badge>
      <Badge {...args} color="primary">
        Best Seller
      </Badge>
      <Badge {...args} color="danger" startIcon={<Flame />}>
        Trending
      </Badge>
      <Badge {...args} color="danger">
        Limited
      </Badge>
      <Badge {...args} color="danger" startIcon={<Clock />}>
        10% off
      </Badge>
      <Badge {...args} color="warning">
        Pending
      </Badge>
      <Badge {...args} color="success">
        Delivered
      </Badge>
      <Badge {...args} color="success" startIcon={<Package />} appearance="ghost">
        In Stock
      </Badge>
      <Badge {...args} color="warning" startIcon={<Package />} appearance="ghost">
        Low Stock
      </Badge>
      <Badge {...args} color="danger" startIcon={<Package />} appearance="ghost">
        Out of Stock
      </Badge>
    </div>
  ),
};

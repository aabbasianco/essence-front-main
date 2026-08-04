import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge, OverlayBadge } from "./badge";
import { Button } from "./button";
import { Check, Clock, Flame, Package, ShoppingBag, Mail, Calendar, Bell, BellRing } from "lucide-react";
import { severities, appearances } from "@/lib/theme/palette";

const meta = {
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: 'Highlights why the user should notice this Component right now.',
      },
    },
  },
  argTypes: {
    appearance: {
      control: "select",
      options: Object.keys(appearances),
    },
    severity: {
      control: "select",
      options: Object.keys(severities),
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
    severity: "danger",
    startIcon: <Clock />,
  },
  render: (args) => <Badge {...args} dir="auto" />,
};

export const Application: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge severity="secondary" {...args}>
        Featured
      </Badge>
      <Badge severity="primary" {...args}>
        New
      </Badge>
      <Badge severity="primary" {...args}>
        Best Seller
      </Badge>
      <Badge severity="danger" startIcon={<Flame />} {...args}>
        Trending
      </Badge>
      <Badge severity="danger" {...args}>
        Limited
      </Badge>
      <Badge severity="danger" startIcon={<Clock />} {...args}>
        10% off
      </Badge>
      <Badge severity="warning" {...args}>
        Pending
      </Badge>
      <Badge severity="success" startIcon={<Check />} {...args}>
        Delivered
      </Badge>
      <Badge
        severity="success"
        startIcon={<Package />}
        appearance="ghost"
        {...args}
      >
        In Stock
      </Badge>
      <Badge
        severity="warning"
        startIcon={<Package />}
        appearance="ghost"
        {...args}
      >
        Low Stock
      </Badge>
      <Badge
        severity="danger"
        startIcon={<Package />}
        appearance="ghost"
        {...args}
      >
        Out of Stock
      </Badge>
    </div>
  ),
};

export const Notification: Story = {
  render: ()=> (
    <div className="inline-flex gap-4 justify-center flex-wrap">
      <OverlayBadge>
        <Button preset="tertiary" size="icon-md" startIcon={<ShoppingBag/>}></Button>
      </OverlayBadge>
      <OverlayBadge value={99}>
        <Button preset="tertiary" size="icon-md" startIcon={<Mail/>}></Button>
      </OverlayBadge>
      <OverlayBadge>
        <Button preset="tertiary" size="icon-md" startIcon={<Calendar/>}></Button>
      </OverlayBadge>
      <OverlayBadge value="5">
        <Button preset="tertiary" size="icon-md" startIcon={<BellRing/>}></Button>
      </OverlayBadge>
      </div>
  )
}

export const Severities: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge severity="primary" {...args}>
        Primary
      </Badge>
      <Badge severity="secondary" {...args}>
        Secondary
      </Badge>
      <Badge severity="tertiary" {...args}>
        Tertiary
      </Badge>
      <Badge severity="success" {...args}>
        Success
      </Badge>
      <Badge severity="warning" {...args}>
        Warning
      </Badge>
      <Badge severity="danger" {...args}>
        Danger
      </Badge>
      <Badge severity="info" {...args}>
        Info
      </Badge>
    </div>
  ),
};

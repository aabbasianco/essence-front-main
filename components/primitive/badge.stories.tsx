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
      <Badge {...args} severity="secondary">
        Featured
      </Badge>
      <Badge {...args} severity="primary">
        New
      </Badge>
      <Badge {...args} severity="primary">
        Best Seller
      </Badge>
      <Badge {...args} severity="danger" startIcon={<Flame />}>
        Trending
      </Badge>
      <Badge {...args} severity="danger">
        Limited
      </Badge>
      <Badge {...args} severity="danger" startIcon={<Clock />}>
        10% off
      </Badge>
      <Badge {...args} severity="warning">
        Pending
      </Badge>
      <Badge {...args} severity="success" startIcon={<Check />}>
        Delivered
      </Badge>
      <Badge
        {...args}
        severity="success"
        startIcon={<Package />}
        appearance="ghost"
      >
        In Stock
      </Badge>
      <Badge
        {...args}
        severity="warning"
        startIcon={<Package />}
        appearance="ghost"
      >
        Low Stock
      </Badge>
      <Badge
        {...args}
        severity="danger"
        startIcon={<Package />}
        appearance="ghost"
      >
        Out of Stock
      </Badge>
    </div>
  ),
};

export const Notification: Story = {
  render: (args)=> (
    <div className="inline-flex gap-4 justify-center flex-wrap">
      <OverlayBadge>
        <Button variant="tertiary" size="icon-md" startIcon={<ShoppingBag/>}></Button>
      </OverlayBadge>
      <OverlayBadge value={99}>
        <Button variant="tertiary" size="icon-md" startIcon={<Mail/>}></Button>
      </OverlayBadge>
      <OverlayBadge>
        <Button variant="tertiary" size="icon-md" startIcon={<Calendar/>}></Button>
      </OverlayBadge>
      <OverlayBadge value="5">
        <Button variant="tertiary" size="icon-md" startIcon={<BellRing/>}></Button>
      </OverlayBadge>
      </div>
  )
}

export const Severities: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge {...args} severity="primary">
        Primary
      </Badge>
      <Badge {...args} severity="secondary">
        Secondary
      </Badge>
      <Badge {...args} severity="tertiary">
        Tertiary
      </Badge>
      <Badge {...args} severity="success">
        Success
      </Badge>
      <Badge {...args} severity="warning">
        Warning
      </Badge>
      <Badge {...args} severity="danger">
        Danger
      </Badge>
      <Badge {...args} severity="info">
        Info
      </Badge>
    </div>
  ),
};

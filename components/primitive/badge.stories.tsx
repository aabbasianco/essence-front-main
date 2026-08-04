import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Badge, OverlayBadge } from "./badge";
import { Button } from "./button";
import { Check, Clock, Flame, Package, ShoppingBag, Mail, Calendar, Bell, BellRing } from "lucide-react";
import { tones, appearances } from "@/lib/theme/palette";

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
    tone: {
      control: "select",
      options: Object.keys(tones),
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
    tone: "danger",
    startIcon: <Clock />,
  },
  render: (args) => <Badge {...args} dir="auto" />,
};

export const Application: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge tone="secondary" {...args}>
        Featured
      </Badge>
      <Badge tone="primary" {...args}>
        New
      </Badge>
      <Badge tone="primary" {...args}>
        Best Seller
      </Badge>
      <Badge tone="danger" startIcon={<Flame />} {...args}>
        Trending
      </Badge>
      <Badge tone="danger" {...args}>
        Limited
      </Badge>
      <Badge tone="danger" startIcon={<Clock />} {...args}>
        10% off
      </Badge>
      <Badge tone="warning" {...args}>
        Pending
      </Badge>
      <Badge tone="success" startIcon={<Check />} {...args}>
        Delivered
      </Badge>
      <Badge
        tone="success"
        startIcon={<Package />}
        appearance="ghost"
        {...args}
      >
        In Stock
      </Badge>
      <Badge
        tone="warning"
        startIcon={<Package />}
        appearance="ghost"
        {...args}
      >
        Low Stock
      </Badge>
      <Badge
        tone="danger"
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

export const Tones: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge tone="primary" {...args}>
        Primary
      </Badge>
      <Badge tone="secondary" {...args}>
        Secondary
      </Badge>
      <Badge tone="tertiary" {...args}>
        Tertiary
      </Badge>
      <Badge tone="success" {...args}>
        Success
      </Badge>
      <Badge tone="warning" {...args}>
        Warning
      </Badge>
      <Badge tone="danger" {...args}>
        Danger
      </Badge>
      <Badge tone="info" {...args}>
        Info
      </Badge>
    </div>
  ),
};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Badge,
  OverlayBadge,
  badgePresets,
  badgeShapes,
  badgeSizes,
} from "./badge";
import { Button } from "./button";
import { tones, appearances } from "@/lib/design-system/resolver/palette";
import { DsIcons } from "./icon";

const meta = {
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "Highlights why the user should notice this Component right now.",
      },
    },
  },
  argTypes: {
    preset: {
      control: "select",
      options: Object.keys(badgePresets),
    },
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
      options: Object.keys(badgeSizes),
    },
    shape: {
      control: "radio",
      options: Object.keys(badgeShapes),
    },
    startIcon:{
      control:"select",
      options: Object.keys(DsIcons),
    },
    endIcon:{
      control:"select",
      options: Object.keys(DsIcons),
    },
    asChild: {
      control: "boolean",
    },
    children: {
      control: "text",
    },
  },
  args: {
    // appearance: "solid",
    children: "33% off",
    // shape: "rounded",
    // size: "sm",
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Application: Story = {
  render: (args) => (
    <div className="inline-flex gap-4 justify-center flex-wrap overflow-hidden">
      <Badge preset="featured" {...args}>
        Featured
      </Badge>
      <Badge preset="new" {...args}>
        New
      </Badge>
      <Badge preset="best-seller" {...args}>
        Best Seller
      </Badge>
      <Badge preset="trending" {...args}>
        Trending
      </Badge>
      <Badge preset="limited" {...args}>
        Limited
      </Badge>
      <Badge preset="limited" {...args}>
        10%
      </Badge>
      <Badge preset="discount" {...args}>
        10%
      </Badge>
      <Badge preset="in-stock" startIcon="package" {...args}>
        In Stock
      </Badge>
      <Badge preset="low-stock" startIcon="package" {...args}>
        Low Stock
      </Badge>
      <Badge preset="out-of-stock" startIcon="package" {...args}>
        Out of Stock
      </Badge>
      <Badge preset="pre-order" startIcon="package" {...args}>
        Pre-Order
      </Badge>
    </div>
  ),
};

export const Notification: Story = {
  render: () => (
    <div className="inline-flex gap-4 justify-center flex-wrap">
      <OverlayBadge>
        <Button
          preset="tertiary"
          size="icon-md"
          startIcon="shopping-bag"
        ></Button>
      </OverlayBadge>
      <OverlayBadge value={99}>
        <Button preset="tertiary" size="icon-md" startIcon="mail"></Button>
      </OverlayBadge>
      <OverlayBadge>
        <Button
          preset="tertiary"
          size="icon-md"
          startIcon="calendar"
        ></Button>
      </OverlayBadge>
      <OverlayBadge value="5">
        <Button
          preset="tertiary"
          size="icon-md"
          startIcon="bell-ring"
        ></Button>
      </OverlayBadge>
    </div>
  ),
};

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

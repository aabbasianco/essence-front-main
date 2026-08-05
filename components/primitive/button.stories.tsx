import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Button,
  buttonPresets,
  buttonShapes,
  buttonSizes,
} from "@/components/primitive/button";
import { OverlayBadge } from "./badge";
import { appearances, tones } from "@/lib/design-system/palette";
import { ArrowRight, Search, Heart, ShoppingBag } from "lucide-react";

const meta = {
  component: Button,
  argTypes: {
    preset: {
      control: "select",
      options: Object.keys(buttonPresets),
      description: "Preset styles of the button",
    },
    shape: {
      control: "select",
      options: Object.keys(buttonShapes),
      description: "Shape of the button",
    },
    size: {
      control: "select",
      options: Object.keys(buttonSizes),
      description: "Sizes of the Button",
    },
    fluid: {
      control: "boolean",
      description: "Layout of the button",
    },
    children: {
      control: "text",
      description: "Content of the button",
    },
    loading: {
      controll: "boolean",
    },
    disabled: {
      control: "boolean",
      description: "Disables the button",
    },
  },
  tags: [""],
  args: {
    size: "lg",
  },
  parameters: {
    docs: {
      description: {
        component: "Buttons are here.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-100 text-center">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    preset: "primary",
    children: "Primary",
    startIcon: <ShoppingBag />,
  },
};

export const Variations: Story = {
  args: {
    // size: "lg",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center">
      <Button preset="primary" startIcon={<Search />} {...args}>
        Primary
      </Button>
      <Button preset="secondary" startIcon={<Heart />} {...args}>
        Secondary
      </Button>
      <Button preset="tertiary" startIcon={<ArrowRight />} {...args}>
        Tertiary
      </Button>
      <Button preset="ghost" {...args}>
        Ghost
      </Button>
      <Button preset="destructive" {...args}>
        Destructive
      </Button>
      <Button preset="link" {...args}>
        Link
      </Button>
    </div>
  ),
};

export const ButtonSizes: Story = {
  args: {
    // size: "md",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center items-center">
      <Button preset="tertiary" size="xs" startIcon={<ShoppingBag />} {...args}>
        xs
      </Button>
      <Button preset="tertiary" size="sm" startIcon={<ShoppingBag />} {...args}>
        sm
      </Button>
      <Button preset="tertiary" size="md" startIcon={<ShoppingBag />} {...args}>
        md
      </Button>
      <Button preset="tertiary" size="lg" startIcon={<ShoppingBag />} {...args}>
        lg
      </Button>
      <Button preset="tertiary" size="xl" startIcon={<ShoppingBag />} {...args}>
        xl
      </Button>
    </div>
  ),
};

export const IconSizes: Story = {
  args: {
    // size: "md",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center items-center">
      <Button
        preset="tertiary"
        startIcon={<ShoppingBag />}
        {...args}
        size="icon-xs"
      />
      <Button
        preset="tertiary"
        startIcon={<ShoppingBag />}
        {...args}
        size="icon-sm"
      />
      <Button
        preset="tertiary"
        startIcon={<ShoppingBag />}
        {...args}
        size="icon-md"
      />
      <Button
        preset="tertiary"
        startIcon={<ShoppingBag />}
        {...args}
        size="icon-lg"
      />
    </div>
  ),
};

export const BuiltInNotification: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center flex-wrap overflow-hidden">
      <Button preset="primary" badge={2}>
        Notification
      </Button>
      <Button preset="secondary" badge={2}>
        اعلان ها
      </Button>
      <Button preset="tertiary" badge={2}>
        Notification
      </Button>
      <Button preset="ghost" badge={2}>
        Notification
      </Button>
      <Button preset="destructive" badge={2}>
        Notification
      </Button>
      <Button preset="link" badge={2}>
        Notification
      </Button>
    </div>
  ),
};

export const OveralyBadgeNotification: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <OverlayBadge>
        <Button preset="tertiary">Notification</Button>
      </OverlayBadge>
      <OverlayBadge tone="primary" value={3}>
        <Button preset="ghost" size="icon-md" startIcon={<ShoppingBag />} />
      </OverlayBadge>
    </div>
  ),
};

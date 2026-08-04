import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button, buttonPresets } from "@/components/primitive/button";
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
    tone: {
      control: "select",
      options: Object.keys(tones),
      description: "Tones of the button",
    },
    appearance: {
      control: "select",
      options: Object.keys(appearances),
      description: "Appeanaces of the button",
    },
    size: {
      control: "select",
      options: [
        "xs",
        "sm",
        "md",
        "lg",
        "xl",
        "icon-md",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
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
  render: (args) => <Button {...args} />,
};

export const Variations: Story = {
  args: {
    // size: "lg",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center">
      <Button {...args} preset="primary" startIcon={<Search />}>
        Primary
      </Button>
      <Button {...args} preset="secondary" startIcon={<Heart />}>
        Secondary
      </Button>
      <Button {...args} preset="tertiary" startIcon={<ArrowRight />}>
        Tertiary
      </Button>
      <Button {...args} preset="ghost">
        Ghost
      </Button>
      <Button {...args} preset="destructive">
        Destructive
      </Button>
      <Button {...args} preset="link">
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
      <Button
        {...args}
        preset="tertiary"
        size="xs"
        startIcon={<ShoppingBag />}
      >
        xs
      </Button>
      <Button
        {...args}
        preset="tertiary"
        size="sm"
        startIcon={<ShoppingBag />}
      >
        sm
      </Button>
      <Button
        {...args}
        preset="tertiary"
        size="md"
        startIcon={<ShoppingBag />}
      >
        md
      </Button>
      <Button
        {...args}
        preset="tertiary"
        size="lg"
        startIcon={<ShoppingBag />}
      >
        lg
      </Button>
      <Button
        {...args}
        preset="tertiary"
        size="xl"
        startIcon={<ShoppingBag />}
      >
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
        {...args}
        preset="tertiary"
        size="icon-xs"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        preset="tertiary"
        size="icon-sm"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        preset="tertiary"
        size="icon-md"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        preset="tertiary"
        size="icon-lg"
        startIcon={<ShoppingBag />}
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
      <OverlayBadge severity="primary" value={3}>
        <Button preset="ghost" size="icon-md" startIcon={<ShoppingBag />} />
      </OverlayBadge>
    </div>
  ),
};

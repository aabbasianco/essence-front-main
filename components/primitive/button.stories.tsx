import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Button } from "@/components/primitive/button";
import { OverlayBadge } from "./badge";

import { ArrowRight, Search, Heart, ShoppingBag } from "lucide-react";

const meta = {
  component: Button,
  argTypes: {
    variant: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "ghost",
        "destructive",
        "link",
      ],
      description: "Variant of the button",
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
    variant: "primary",
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
      <Button {...args} variant="primary" startIcon={<Search />}>
        Primary
      </Button>
      <Button {...args} variant="secondary" startIcon={<Heart />}>
        Secondary
      </Button>
      <Button {...args} variant="tertiary" startIcon={<ArrowRight />}>
        Tertiary
      </Button>
      <Button {...args} variant="ghost">
        Ghost
      </Button>
      <Button {...args} variant="destructive">
        Destructive
      </Button>
      <Button {...args} variant="link">
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
        variant="tertiary"
        size="xs"
        startIcon={<ShoppingBag />}
      >
        xs
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="sm"
        startIcon={<ShoppingBag />}
      >
        sm
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="md"
        startIcon={<ShoppingBag />}
      >
        md
      </Button>
      <Button
        {...args}
        variant="tertiary"
        size="lg"
        startIcon={<ShoppingBag />}
      >
        lg
      </Button>
      <Button
        {...args}
        variant="tertiary"
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
        variant="tertiary"
        size="icon-xs"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        variant="tertiary"
        size="icon-sm"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        variant="tertiary"
        size="icon-md"
        startIcon={<ShoppingBag />}
      />
      <Button
        {...args}
        variant="tertiary"
        size="icon-lg"
        startIcon={<ShoppingBag />}
      />
    </div>
  ),
};

export const BuiltInNotification: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center flex-wrap overflow-hidden">
      <Button variant="primary" badge={2}>
        Notification
      </Button>
      <Button variant="secondary" badge={2}>
        اعلان ها
      </Button>
      <Button variant="tertiary" badge={2}>
        Notification
      </Button>
      <Button variant="ghost" badge={2}>
        Notification
      </Button>
      <Button variant="destructive" badge={2}>
        Notification
      </Button>
      <Button variant="link" badge={2}>
        Notification
      </Button>
    </div>
  ),
};

export const OveralyBadgeNotification: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <OverlayBadge>
        <Button variant="tertiary">Notification</Button>
      </OverlayBadge>
      <OverlayBadge severity="primary" value={3}>
        <Button variant="ghost" size="icon-md" startIcon={<ShoppingBag />} />
      </OverlayBadge>
    </div>
  ),
};

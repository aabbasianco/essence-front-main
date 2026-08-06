import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Button,
  buttonPresets,
  buttonShapes,
  buttonSizes,
} from "@/components/primitive/button";
import { OverlayBadge } from "./badge";
import { appearances, tones } from "@/lib/design-system/palette";

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
    },
    appearance: {
      control: "select",
      options: Object.keys(appearances),
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
    // size: "lg",
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
    tone: "primary",
    children: "Primary",
    startIcon: "shopping-bag",
  },
};

export const Presets: Story = {
  args: {
    // size: "lg",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center flex-wrap">
      <Button preset="primary" {...args}>
        Primary
      </Button>
      <Button preset="secondary" {...args}>
        Secondary
      </Button>
      <Button preset="tertiary" {...args}>
        Tertiary
      </Button>
      <Button preset="ghost" {...args}>
        Ghost
      </Button>
      <Button preset="warning" {...args}>
        Destructive
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
      <Button preset="tertiary" size="xs" startIcon="shopping-bag" {...args}>
        xs
      </Button>
      <Button preset="tertiary" size="sm" startIcon="shopping-bag" {...args}>
        sm
      </Button>
      <Button preset="tertiary" size="md" startIcon="shopping-bag" {...args}>
        md
      </Button>
      <Button preset="tertiary" size="lg" startIcon="shopping-bag" {...args}>
        lg
      </Button>
      <Button preset="tertiary" size="xl" startIcon="shopping-bag" {...args}>
        xl
      </Button>
    </div>
  ),
};

export const IconSizes: Story = {
  args: {
    tone:"secondary",
    appearance:"ghost-outline",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center items-center">
      <Button
        startIcon="shopping-bag"
        size="icon-xs"
        {...args}
      />
      <Button
        startIcon="shopping-bag"
        size="icon-sm"
        {...args}
      />
      <Button
        startIcon="shopping-bag"
        size="icon-md"
        {...args}
      />
      <Button
        startIcon="shopping-bag"
        size="icon-lg"
        {...args}
      />
    </div>
  ),
};

export const BuiltInNotification: Story = {
  render: () => (
    <div className="flex gap-4 justify-center items-center flex-wrap overflow-hidden">
      <Button preset="primary" badge={2}>
        Primary
      </Button>
      <Button preset="secondary" badge={2}>
        Secondary
      </Button>
      <Button preset="tertiary" badge={2}>
        Tertiary
      </Button>
      <Button preset="ghost" badge={2}>
        Ghost
      </Button>
      <Button preset="destructive" badge={2}>
        destrictive
      </Button>
      <Button preset="link" badge={2}>
        Link
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
        <Button tone="secondary" appearance="ghost-outline" size="icon-md" startIcon="shopping-bag" />
      </OverlayBadge>
    </div>
  ),
};

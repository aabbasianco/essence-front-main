import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Button,
  buttonPresetRecipe,
  buttonShapes,
  buttonSizeRecipe,
} from "@/components/primitive/button";
import { OverlayBadge } from "./badge";
import { appearances, tones } from "@/lib/design-system/resolver/resolver";
import { DsIcons } from "./icon";

const meta = {
  component: Button,
  argTypes: {
    preset: {
      control: "select",
      options: Object.keys(buttonPresetRecipe),
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
      options: Object.keys(buttonSizeRecipe),
      description: "Sizes of the Button",
    },
    startIcon: {
      control: "select",
      options: Object.keys(DsIcons),
    },
    endIcon: {
      control: "select",
      options: Object.keys(DsIcons),
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
    children: "Primary",
    preset: "primary",
    tone: {
      default: "yellow",
      hover: "amber",
      pressed: "orange",
    },
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
    <div className="flex gap-4 justify-center items-center flex-wrap">
      <Button preset="tertiary" size="xs" startIcon="shopping-bag" {...args}>
        Add to Cart
      </Button>
      <Button preset="tertiary" size="sm" startIcon="shopping-bag" {...args}>
        Add to Cart
      </Button>
      <Button preset="tertiary" size="md" startIcon="shopping-bag" {...args}>
        Add to Cart
      </Button>
      <Button preset="tertiary" size="lg" startIcon="shopping-bag" {...args}>
        Add to Cart
      </Button>
      <Button preset="tertiary" size="xl" startIcon="shopping-bag" {...args}>
        Add to Cart
      </Button>
    </div>
  ),
};

export const ButtonIconSizes: Story = {
  args: {
    preset: "tertiary",
    isIcon: true,
  },
  render: (args) => (
    <div className="flex gap-4 justify-center items-center">
      <Button startIcon="shopping-bag" size="xs" {...args} />
      <Button startIcon="shopping-bag" size="sm" {...args} />
      <Button startIcon="shopping-bag" size="md" {...args} />
      <Button startIcon="shopping-bag" size="lg" {...args} />
      <Button startIcon="shopping-bag" size="xl" {...args} />
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
        <Button
          tone="secondary"
          appearance="ghost-outline"
          size="md"
          startIcon="shopping-bag"
          isIcon
        />
      </OverlayBadge>
    </div>
  ),
};

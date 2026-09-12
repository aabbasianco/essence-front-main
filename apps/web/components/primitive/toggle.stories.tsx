import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  Toggle,
  togglePresets,
  toggleShapes,
  toggleSizeRecipe,
} from "./toggle";
import { appearances, tones } from "@/lib/design-system/resolver/resolver";
import { Text } from "./text";
import { DsIcons } from "./icon";

const meta = {
  component: Toggle,
  argTypes: {
    preset: {
      control: "select",
      options: Object.keys(togglePresets),
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
      options: Object.keys(toggleShapes),
      description: "Shape of the button",
    },
    size: {
      control: "select",
      options: Object.keys(toggleSizeRecipe),
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
    "aria-pressed": {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Appearances: Story = {
  args: {
    tone: "primary",
    // "aria-pressed": "true",
  },
  render: (args) => (
    <div className="flex-col gap-4 justify-center flex-wrap">
      <Text tone="backgroundForeground" size="pageTitle">
        Click to see!
      </Text>
      <div className="flex gap-4 justify-center flex-wrap mt-3">
        <Toggle appearance="solid" {...args}>
          Solid
        </Toggle>
        <Toggle appearance="soft" {...args}>
          Soft
        </Toggle>
        <Toggle appearance="soft-outline" {...args}>
          Soft Outline
        </Toggle>
        <Toggle appearance="ghost" {...args}>
          Ghost
        </Toggle>
        <Toggle appearance="ghost-outline" {...args}>
          Ghost Outline
        </Toggle>
        <Toggle appearance="text" {...args}>
          Text
        </Toggle>
      </div>
    </div>
  ),
};

export const ToggleSizses: Story = {
  args: {
    tone: "primary",
    // "aria-pressed": "true",
  },
  render: (args) => (
    <div className="flex gap-4 justify-center flex-wrap items-center">
      <Toggle size="xs" {...args}>
        xs
      </Toggle>
      <Toggle size="sm" {...args}>
        sm
      </Toggle>
      <Toggle size="md" {...args}>
        md
      </Toggle>
      <Toggle size="lg" {...args}>
        lg
      </Toggle>
      <Toggle size="xl" {...args}>
        xl
      </Toggle>
    </div>
  ),
};

export const ToggleIconSizes: Story = {
  args: {
    tone: "danger",
    startIcon: "heart",
    children: "",
    isIcon: true,
  },
  render: (args) => (
    <div className="flex gap-4 justify-center flex-wrap items-center">
      <Toggle size="xs" {...args} />
      <Toggle size="sm" {...args} />
      <Toggle size="md" {...args} />
      <Toggle size="lg" {...args} />
      <Toggle size="xl" {...args} />
    </div>
  ),
};

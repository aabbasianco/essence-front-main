import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./tag";
import {
  tones,
  appearances,
  Tone,
} from "@/lib/design-system/resolver/resolver";
import {
  tagPresets,
  tagShapes,
  tagSizeRecipe,
} from "@/components/primitive/tag";
import { DsIcons } from "./icon";

const meta = {
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: "Describes what the perfume is.",
      },
    },
  },
  argTypes: {
    preset: {
      control: "select",
      options: Object.keys(tagPresets),
    },
    tone: {
      control: "select",
      options: Object.keys(tones),
    },
    appearance: {
      control: "select",
      options: Object.keys(appearances),
    },
    size: {
      control: "radio",
      options: Object.keys(tagSizeRecipe),
    },
    shape: {
      control: "radio",
      options: Object.keys(tagShapes),
    },
    startIcon: {
      control: "select",
      options: Object.keys(DsIcons),
    },
    endIcon: {
      control: "select",
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
    children: "Tag",
    size: "md",
    shape: "rounded",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    tone: "primary",
    startIcon: {
      name: "heart",
      // tone:"danger"
    },
  },
  render: (args) => <Tag {...args} dir="auto" />,
};

export const Application: Story = {
  render: (args) => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag preset="gender-men" {...args}>
        Men
      </Tag>
      <Tag preset="gender-women" {...args}>
        Women
      </Tag>
      <Tag preset="gender-unisex" {...args}>
        Unisex
      </Tag>
      <Tag preset="brandType" {...args}>
        Niche
      </Tag>
      <Tag preset="brandType" {...args}>
        Designer
      </Tag>
      <Tag preset="brandType" {...args}>
        Arabian
      </Tag>
      <Tag preset="origin" {...args}>
        France
      </Tag>
      <Tag preset="origin" {...args}>
        Italy
      </Tag>
      <Tag preset="concentration" {...args}>
        Concentration
      </Tag>
      <Tag preset="performance-longevity" {...args}>
        Longevity
      </Tag>
      <Tag preset="performance-projection" {...args}>
        Projection
      </Tag>
      <Tag preset="performance-sillage" {...args}>
        Sillage
      </Tag>
    </div>
  ),
};

export const Tones: Story = {
  args:{
    // startIcon:"astroid"
  },
  render: (args) => (
    <div className="flex flex-wrap gap-3">
      {Object.keys(tones).map((tone) => (
        <Tag key={tone} {...args} tone={tone as Tone}>{tone}</Tag>
      ))}
    </div>
  ),
};

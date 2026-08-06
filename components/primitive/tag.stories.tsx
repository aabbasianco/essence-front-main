import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Tag } from "./tag";
import { tones, appearances } from "@/lib/design-system/palette";
import { tagPresets, tagShapes, tagSizes } from "@/components/primitive/tag";
import { DsIcons } from "./icon";

const meta = {
  component: Tag,
  parameters: {
    docs: {
      description: {
        component: 'Describes what the perfume is.',
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
      options: Object.keys(tagSizes),
    },
    shape: {
      control: "radio",
      options: Object.keys(tagShapes),
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
      name:"heart",
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
      <Tag preset="brandType" {...args}>Niche</Tag>
      <Tag preset="brandType" {...args}>Designer</Tag>
      <Tag preset="brandType" {...args}>Arabian</Tag>
      <Tag preset="origin" {...args}>
        France
      </Tag>
      <Tag preset="origin" {...args}>
        Italy
      </Tag>
      <Tag preset="concentration" {...args}>Concentration</Tag>
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
  render: (args) => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag startIcon="astroid" tone="brand" {...args}>
        Brand
      </Tag>
      <Tag startIcon="astroid" tone="orange" {...args}>
        Orange
      </Tag>
      <Tag startIcon="astroid" tone="yellow" {...args}>
        Yellow
      </Tag>
      <Tag startIcon="astroid" tone="amber" {...args}>
        Amber
      </Tag>
      <Tag startIcon="astroid" tone="emerald" {...args}>
        Emerald
      </Tag>
      <Tag startIcon="astroid" tone="teal" {...args}>
        Teal
      </Tag>
      <Tag startIcon="astroid" tone="sky" {...args}>
        Sky
      </Tag>
      <Tag startIcon="astroid" tone="indigo" {...args}>
        Indigo
      </Tag>
      <Tag startIcon="astroid" tone="violet" {...args}>
        Violet
      </Tag>
      <Tag startIcon="astroid" tone="purple" {...args}>
        Purple
      </Tag>
      <Tag startIcon="astroid" tone="fuchsia" {...args}>
        Fuchsia
      </Tag>
      <Tag startIcon="astroid" tone="rose" {...args}>
        Rose
      </Tag>
    </div>
  ),
};

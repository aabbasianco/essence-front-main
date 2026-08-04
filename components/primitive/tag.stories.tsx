import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tag } from "./tag";
import {
  Clock3,
  Earth,
  Mars,
  Radio,
  Venus,
  VenusAndMars,
  Wind,
  X,
} from "lucide-react";
import { Astroid } from "lucide-react";
import { tones, appearances } from "@/lib/design-system/palette";
import { tagPresets, tagShapes, tagSizes } from "@/components/primitive/tag";

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
    startIcon: <Astroid />,
  },
  render: (args) => <Tag {...args} dir="auto" />,
};

export const Application: Story = {
  render: (args) => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag startIcon={<Mars />} preset="gender" {...args}>
        Men
      </Tag>
      <Tag startIcon={<Venus />} preset="gender" {...args}>
        Women
      </Tag>
      <Tag startIcon={<VenusAndMars />} preset="gender" {...args}>
        Unisex
      </Tag>
      <Tag preset="brandType" {...args}>Niche</Tag>
      <Tag preset="brandType" {...args}>Designer</Tag>
      <Tag preset="brandType" {...args}>Arabian</Tag>
      <Tag startIcon={<Earth />} preset="origin" {...args}>
        France
      </Tag>
      <Tag startIcon={<Earth />} preset="origin" {...args}>
        Italy
      </Tag>
      <Tag preset="concentration" {...args}>Concentration</Tag>
      <Tag startIcon={<Clock3 />} preset="performance" {...args}>
        Longevity
      </Tag>
      <Tag startIcon={<Radio />} preset="performance" {...args}>
        Projection
      </Tag>
      <Tag startIcon={<Wind />} preset="performance" {...args}>
        Sillage
      </Tag>
    </div>
  ),
};

export const Tones: Story = {
  render: (args) => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag startIcon={<Astroid />} tone="brand" {...args}>
        Brand
      </Tag>
      <Tag startIcon={<Astroid />} tone="orange" {...args}>
        Orange
      </Tag>
      <Tag startIcon={<Astroid />} tone="yellow" {...args}>
        Yellow
      </Tag>
      <Tag startIcon={<Astroid />} tone="amber" {...args}>
        Amber
      </Tag>
      <Tag startIcon={<Astroid />} tone="emerald" {...args}>
        Emerald
      </Tag>
      <Tag startIcon={<Astroid />} tone="teal" {...args}>
        Teal
      </Tag>
      <Tag startIcon={<Astroid />} tone="sky" {...args}>
        Sky
      </Tag>
      <Tag startIcon={<Astroid />} tone="indigo" {...args}>
        Indigo
      </Tag>
      <Tag startIcon={<Astroid />} tone="violet" {...args}>
        Violet
      </Tag>
      <Tag startIcon={<Astroid />} tone="purple" {...args}>
        Purple
      </Tag>
      <Tag startIcon={<Astroid />} tone="fuchsia" {...args}>
        Fuchsia
      </Tag>
      <Tag startIcon={<Astroid />} tone="rose" {...args}>
        Rose
      </Tag>
    </div>
  ),
};

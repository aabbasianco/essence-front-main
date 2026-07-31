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
import { tones, appearances } from "@/lib/theme/palette";
import { tagCategories } from "@/components/primitive/tag";

const meta = {
  component: Tag,
  argTypes: {
    category: {
      control: "select",
      options: Object.keys(tagCategories),
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
      options: ["sm", "md"],
    },
    shape: {
      control: "radio",
      options: ["rounded", "pill", "square"],
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
  render: () => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag startIcon={<Mars />} category="gender">
        Men
      </Tag>
      <Tag startIcon={<Venus />} category="gender">
        Women
      </Tag>
      <Tag startIcon={<VenusAndMars />} category="gender">
        Unisex
      </Tag>
      <Tag category="brandType">Niche</Tag>
      <Tag category="brandType">Designer</Tag>
      <Tag category="brandType">Arabian</Tag>
      <Tag startIcon={<Earth />} category="origin">
        France
      </Tag>
      <Tag startIcon={<Earth />} category="origin">
        Italy
      </Tag>
      <Tag category="concentration">Concentration</Tag>
      <Tag startIcon={<Clock3 />} category="performance">
        Longevity
      </Tag>
      <Tag startIcon={<Radio />} category="performance">
        Projection
      </Tag>
      <Tag startIcon={<Wind />} category="performance">
        Sillage
      </Tag>
      {/* <Tag tone="amber" appearance="outline">
        Admin
      </Tag>
      <Tag tone="teal" appearance="outline">
        Content Creator
      </Tag>
      <Tag tone="primary" appearance="outline">
        Customer
      </Tag>
      <Tag tone="secondary" appearance="outline">
        Guest
      </Tag> */}
    </div>
  ),
};

export const Tones: Story = {
  render: () => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag startIcon={<Astroid />} tone="brand">
        Brand
      </Tag>
      <Tag startIcon={<Astroid />} tone="orange">
        Orange
      </Tag>
      <Tag startIcon={<Astroid />} tone="yellow">
        Yellow
      </Tag>
      <Tag startIcon={<Astroid />} tone="amber">
        Amber
      </Tag>
      <Tag startIcon={<Astroid />} tone="emerald">
        Emerald
      </Tag>
      <Tag startIcon={<Astroid />} tone="teal">
        Teal
      </Tag>
      <Tag startIcon={<Astroid />} tone="sky">
        Sky
      </Tag>
      <Tag startIcon={<Astroid />} tone="indigo">
        Indigo
      </Tag>
      <Tag startIcon={<Astroid />} tone="violet">
        Violet
      </Tag>
      <Tag startIcon={<Astroid />} tone="purple">
        Purple
      </Tag>
      <Tag startIcon={<Astroid />} tone="fuchsia">
        Fuchsia
      </Tag>
      <Tag startIcon={<Astroid />} tone="rose">
        Rose
      </Tag>
    </div>
  ),
};

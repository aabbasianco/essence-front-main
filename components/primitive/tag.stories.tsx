import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Tag } from "./tag";
import { Clock, Clock3, Earth, Mars, Radio, Venus, VenusAndMars, Wind, X } from "lucide-react";
import { Check } from "lucide-react";
import { Flame } from "lucide-react";
import { Astroid } from "lucide-react";

const meta = {
  component: Tag,
  argTypes: {
    appearance: {
      control: "select",
      options: ["solid", "soft", "outline", "ghost"],
    },
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "tertiary",
        "success",
        "warning",
        "danger",
        "info",
      ],
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
    appearance: "soft",
    shape: "rounded",
    children: "Tag Text",
    size: "md",
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: "primary",
    startIcon: <X />,
  },
  render: (args) => <Tag {...args} dir="auto" />,
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex gap-4 justify-center overflow-hidden flex-wrap">
      <Tag {...args} startIcon={<Mars />} color="primary" >Men</Tag>
      <Tag {...args} startIcon={<Venus />} color="primary" >Women</Tag>
      <Tag {...args} startIcon={<VenusAndMars />} color="primary" >Unisex</Tag>
      <Tag {...args} color="violet" >Niche</Tag>
      <Tag {...args} color="violet" >Designer</Tag>
      <Tag {...args} color="violet" >Arabian</Tag>
      <Tag {...args} startIcon={<Earth />} color="indigo" >France</Tag>
      <Tag {...args} startIcon={<Earth />} color="indigo" >Italy</Tag>
      <Tag {...args} color="sky" >Concentration</Tag>
      <Tag {...args} startIcon={<Clock3 />} color="teal" >Longevity</Tag>
      <Tag {...args} startIcon={<Radio />} color="teal" >Projection</Tag>
      <Tag {...args} startIcon={<Wind />} color="teal" >Sillage</Tag>
      <Tag {...args} color="brand" >User Roles</Tag>

      <Tag {...args} startIcon={<Astroid />} color="brand" >Brand</Tag>
      <Tag {...args} startIcon={<Astroid />} color="amber" >Amber</Tag>
      <Tag {...args} startIcon={<Astroid />} color="emerald" >Emerald</Tag>
      <Tag {...args} startIcon={<Astroid />} color="teal" >Teal</Tag>
      <Tag {...args} startIcon={<Astroid />} color="sky" >Sky</Tag>
      <Tag {...args} startIcon={<Astroid />} color="indigo" >Indigo</Tag>
      <Tag {...args} startIcon={<Astroid />} color="violet" >Violet</Tag>
      <Tag {...args} startIcon={<Astroid />} color="purple" >Purple</Tag>
      <Tag {...args} startIcon={<Astroid />} color="fuchsia" >Fuchsia</Tag>
      <Tag {...args} startIcon={<Astroid />} color="rose" >Rose</Tag>
    </div>
  ),
};

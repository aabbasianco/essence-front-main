import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/primitive/input-group";
import { Search } from "lucide-react";
import { inputPresets, inputShapes } from "./input";
import { RenderIcon } from "./icon";

const meta = {
  component: InputGroup,
  argTypes: {
    preset: {
      control: "radio",
      options: Object.keys(inputPresets),
    },
    shape: {
      control: "radio",
      options: Object.keys(inputShapes),
    },
  },
  args: {
    preset: "searchBox",
    shape: "pill",
  },
} satisfies Meta<typeof InputGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
  render: (args) => (
    <div className="grid w-full max-w-sm gap-6">
      <InputGroup {...args}>
        <InputGroupInput placeholder="Type to search..."/>
        <InputGroupAddon align="inline-end">
          <InputGroupButton>
            {RenderIcon("search")}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Input } from './input';

const meta = {
  component: Input,
  argTypes:{
    variant: {
      control:"radio",
      options:["primary","secondary"]
    },
    placeholder: {
      control:"text"
    },
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args:{
    placeholder:"placeholder",
    "aria-invalid":false
  }
};
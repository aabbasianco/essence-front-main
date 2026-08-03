import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Toggle } from './toggle';

const meta = {
  component: Toggle,
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Outline: Story = {
  args:{
    // children:"test",
    preset:"default"
  }
};
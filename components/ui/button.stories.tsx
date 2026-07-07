import type { Meta, StoryObj} from '@storybook/nextjs-vite'

import { Button } from '@/components/ui/button'

const meta = {
    title:'UI/Button',
    component: Button,
    tags:['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default : Story = {
    args: {
        variant: 'default',
        size: 'default',
        children: 'افزودن',
    }
}

export const Outline : Story = {
    args : {
        variant: 'outline',
        size: 'default',
        children: 'افزودن',
    }
}

export const Secondary : Story ={
    args: {
        variant: 'secondary',
        size: 'default',
        children: 'افزودن'
    }
}

export const Ghost : Story = {
    args: {
        variant: 'ghost',
        size: 'default',
        children: 'افزودن',
    }
}

export const Destructive : Story = {
    args : {
        variant: 'destructive',
        size: 'default',
        children: 'افزودن',
    }
}

export const Link : Story = {
    args : {
        variant: 'link',
        size: 'default',
        children: 'افزودن',
    }
}
import type { Meta, StoryObj} from '@storybook/nextjs-vite'

import { Button } from '@/components/ui/button'

const meta = {
    title:'UI/Atoms/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary',  'secondary', 'tertiary', 'ghost', 'destructive', 'link'],
            description: 'Variant of the button',
        },
        size: {
            control: 'select',
            options: ['md', 'xs', 'sm', 'lg', 'xl', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
            description: 'Sizes of the Button',
        },
        children: {
            control: 'text',
            description: 'Content of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
        }
    },
    tags: ['experimental'],
    args: {
        size: 'md',
    }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    tags: ['autodocs'],
    args: {
        variant: 'primary',
        size: 'md',
        children: 'Primary',
    },
}

export const Variations : Story = {
    tags: ['autodocs'],
    args: {
        size: 'md',
    },
    render: (args) => (
        <div className="flex gap-4 justify-center">
            <Button {...args} variant="primary">Primary</Button>
            <Button {...args} variant="secondary">Secondary</Button>
            <Button {...args} variant="tertiary">Tertiary</Button>
            <Button {...args} variant="ghost">Ghost</Button>
            <Button {...args} variant="destructive">Destructive</Button>
            <Button {...args} variant="link">Link</Button>
        </div>
    )
}

export const Secondary : Story ={
    args: {
        variant: 'secondary',
        children: 'Secondary',
    }
}

export const Tertiary : Story = {
    args : {
        variant: 'tertiary',
        children: 'Tertiary',
    }
}

export const Ghost : Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    }
}

export const Destructive : Story = {
    args : {
        variant: 'destructive',
        children: 'Destructive',
    }
}

export const Link : Story = {
    args : {
        variant: 'link',
        children: 'Link',
    }
}
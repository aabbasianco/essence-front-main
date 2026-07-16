import type { Meta, StoryObj} from '@storybook/nextjs-vite'

import { Button } from '@/components/primitive/button'

const meta = {
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary',  'secondary', 'tertiary', 'ghost', 'destructive', 'link'],
            description: 'Variant of the button',
        },
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', 'icon', 'icon-xs', 'icon-sm', 'icon-lg'],
            description: 'Sizes of the Button',
        },
        layout: {
            control: 'select',
            options: ['fit', 'full'],
            description: 'Layout of the button',
        },
        children: {
            control: 'text',
            description: 'Content of the button',
        },
        loading: {
            controll: 'boolean',
        },
        disabled: {
            control: 'boolean',
            description: 'Disables the button',
        },
    },
    tags: ['experimental'],
    args: {
        size: 'lg',
        layout: 'fit'
    },
    decorators: [
        (Story) => (
            <div className="w-100 text-center">
                <Story/>
            </div>
        ),
    ],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary : Story = {
    tags: ['autodocs'],
    args: {
        variant: 'primary',
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
import type { Meta, StoryObj } from "@storybook/react-vite";

import {
  Icon,
  DsIcons,
  type IconName,
  type IconPurpose,
  type IconSize,
} from "@/components/primitive/icon";

import {
  appearances,
  tones,
  type Appearance,
  type Tone,
} from "@/lib/design-system/resolver/resolver";
import { Button } from "./button";

const iconNames = Object.keys(DsIcons) as IconName[];

const meta = {
  title: "Primitive/Icon",
  component: Icon,

  parameters: {
    layout: "centered",

    docs: {
      description: {
        component:
          "A unified icon component for the design system. Icons can be configured by name, appearance, tone, size, purpose, and stroke width.",
      },
    },
  },

  argTypes: {
    name: {
      control: "select",
      options: iconNames,
      description: "The icon to render.",
      table: {
        type: {
          summary: "IconName",
        },
        defaultValue: {
          summary: "heart",
        },
      },
    },

    appearance: {
      control: "select",
      options: Object.keys(appearances) as Appearance[],
      description: "Controls the visual appearance of the icon.",
      table: {
        type: {
          summary: "Appearance",
        },
        defaultValue: {
          summary: "text",
        },
      },
    },

    tone: {
      control: "select",
      options: [undefined, ...Object.keys(tones)] as (
        | Tone
        | undefined
      )[],
      description:
        "Controls the semantic color tone. Leave empty to inherit the current text color.",
      table: {
        type: {
          summary: "Tone",
        },
        defaultValue: {
          summary: "undefined",
        },
      },
    },

    size: {
      control: "select",
      options: ["auto", "xs", "sm", "md", "lg", "xl"] satisfies IconSize[],
      description: "Controls the icon size recipe.",
      table: {
        type: {
          summary: "IconSize",
        },
        defaultValue: {
          summary: "auto",
        },
      },
    },

    purpose: {
      control: "select",
      options: ["inline", "standalone", "display"] satisfies IconPurpose[],
      description:
        "Controls how the icon is sized and positioned according to its intended usage.",
      table: {
        type: {
          summary: "IconPurpose",
        },
        defaultValue: {
          summary: "inline",
        },
      },
    },

    strokeWidth: {
      control: {
        type: "number",
        min: 0.5,
        max: 4,
        step: 0.25,
      },
      description: "Controls the SVG stroke width.",
      table: {
        type: {
          summary: "number",
        },
        defaultValue: {
          summary: "2",
        },
      },
    },

    className: {
      control: "text",
      description: "Additional CSS classes.",
      table: {
        type: {
          summary: "string",
        },
      },
    },

    style: {
      control: false,
      table: {
        disable: true,
      },
    },
  },

  args: {
    name: "heart",
    appearance: "text",
    tone: undefined,
    size: "auto",
    purpose: "inline",
    strokeWidth: 2,
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Basic interactive icon.
 */
export const Default: Story = {};

/**
 * Demonstrates the three icon purposes.
 */
export const Purposes: Story = {
  render: (args) => (
    <div className="flex items-end gap-8">
      {(["inline", "standalone", "display"] as IconPurpose[]).map(
        (purpose) => (
          <div
            key={purpose}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              {...args}
              name="heart"
              size="md"
              purpose={purpose}
            />

            <span className="text-xs text-muted-foreground">
              {purpose}
            </span>
          </div>
        ),
      )}
    </div>
  ),
};

/**
 * Demonstrates all available icon sizes for "purpose: inline".
 */
export const InlineSizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-8">
      {(["auto", "xs", "sm", "md", "lg", "xl"] as IconSize[]).map(
        (size) => (
          <div
            key={size}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              {...args}
              name="heart"
              size={size}
              purpose="inline"
            />

            <span className="text-xs text-muted-foreground">
              {size}
            </span>
          </div>
        ),
      )}
    </div>
  ),
  args: {
    purpose: "inline",
  },
};

/**
 * Demonstrates all available icon sizes for "purpose: standalone".
 */
export const StandaloneSizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-8">
      {(["auto", "xs", "sm", "md", "lg", "xl"] as IconSize[]).map(
        (size) => (
          <div
            key={size}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              {...args}
              name="heart"
              size={size}
              purpose="standalone"
            />

            <span className="text-xs text-muted-foreground">
              {size}
            </span>
          </div>
        ),
      )}
    </div>
  ),
  args: {
    purpose: "standalone",
  },
};

/**
 * Demonstrates all available icon sizes for "purpose: display".
 */
export const DisplaySizes: Story = {
  render: (args) => (
    <div className="flex items-end gap-8">
      {(["auto", "xs", "sm", "md", "lg", "xl"] as IconSize[]).map(
        (size) => (
          <div
            key={size}
            className="flex flex-col items-center gap-2"
          >
            <Icon
              {...args}
              name="heart"
              size={size}
              purpose="display"
            />

            <span className="text-xs text-muted-foreground">
              {size}
            </span>
          </div>
        ),
      )}
    </div>
  ),
  args: {
    purpose: "display",
  },
};

/**
 * Demonstrates the semantic tones available through the design system.
 */
export const Tones: Story = {
  render: (args) => (
    <div className="flex items-center gap-5 flex-wrap">
      {Object.keys(tones).map((tone) => (
        <div
          key={tone}
          className="flex flex-col items-center gap-2"
        >
          <Icon
            {...args}
            name="heart"
            tone={tone as Tone}
            size="md"
            purpose="standalone"
          />

          <span className="text-xs text-muted-foreground">
            {tone}
          </span>
        </div>
      ))}
    </div>
  ),
};

/**
 * Demonstrates the available appearance recipes.
 */
export const Appearances: Story = {
  render: (args) => (
    <div className="flex items-center gap-6">
      {Object.keys(appearances).map((appearance) => (
        <div
          key={appearance}
          className="flex flex-col items-center gap-2"
        >
          <Icon
            {...args}
            name="heart"
            appearance={appearance as Appearance}
            tone="violet"
            size="md"
            purpose="standalone"
          />

          <span className="text-xs text-muted-foreground">
            {appearance}
          </span>
        </div>
      ))}
    </div>
  ),
};

/**
 * Useful for visually inspecting the complete icon library.
 */
export const IconGallery: Story = {
  render: (args) => (
    <div className="grid grid-cols-4 gap-6 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10">
      {iconNames.map((name) => (
        <div
          key={name}
          className="flex min-w-20 flex-col items-center gap-2"
        >
          <Icon
            {...args}
            name={name}
            size="md"
            purpose="standalone"
          />

          <span className="max-w-20 text-center text-xs text-muted-foreground">
            {name}
          </span>
        </div>
      ))}
    </div>
  ),
  parameters: {
    layout: "padded",
    controls: {
      exclude: [
        "name",
        "size",
        "purpose",
      ],
    },
  },
};

/**
 * Example of icons used as semantic UI indicators.
 */
export const SemanticExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Icon
          name="check-circle"
          appearance="text"
          tone="success"
          size="md"
        />

        <span>Successfully completed</span>
      </div>

      <div className="flex items-center gap-3">
        <Icon
          name="alert-triangle"
          appearance="text"
          tone="warning"
          size="md"
        />

        <span>Something requires attention</span>
      </div>

      <div className="flex items-center gap-3">
        <Icon
          name="alert-circle"
          appearance="text"
          tone="danger"
          size="md"
        />

        <span>Something went wrong</span>
      </div>

      <div className="flex items-center gap-3">
        <Icon
          name="sparkles"
          appearance="text"
          tone="primary"
          size="md"
        />

        <span>Featured content</span>
      </div>

      <div className="flex items-center gap-3">
        <Icon
          name="truck"
          appearance="text"
          tone="info"
          size="md"
        />

        <span>Shipping information</span>
      </div>
    </div>
  ),
};

/**
 * Example of icons used inside common UI controls.
 */
export const UIExamples: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        startIcon="search"
        size="sm"
      >
        Search
      </Button>

      <Button
        startIcon="plus"
        size="md"
      >
        Add item
      </Button>

      <Button
        endIcon="arrow-right"
        size="md"
      >
        Continue
      </Button>

      <Button
        startIcon="shopping-bag"
        endIcon="arrow-right"
        size="lg"
      >
        View products
      </Button>

      <Button
        startIcon="heart"
        isIcon
        size="md"
        aria-label="Favorite"
      />

      <Button
        startIcon="trash"
        tone="danger"
        appearance="soft"
        size="md"
      >
        Delete
      </Button>
    </div>
  ),
};
import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Text } from "./text";

const meta = {
  component: Text,
  argTypes: {
    tone: {
      control: "select",
      options: [
        "backgroundForeground",
        "surfaceForeground",
        "surfaceSubtleForeground",
        "primaryForeground",
        "primarySubtleForeground",
        "secondaryForeground",
        "secondarySubtleForeground",
        "tertiaryForeground",
        "tertiarySubtleForeground",
        "brandForeground",
        "brandSubtleForeground",
        "successForeground",
        "successSubtleForeground",
        "dangerForeground",
        "dangerSubtleForeground",
        "warningForeground",
        "warningSubtleForeground",
        "infoForeground",
        "infoSubtleForeground",
        "caption",
      ],
    },
    size: {
      control: "select",
      options: [
        "heroTitle",
        "pageTitle",
        "sectionTitle",
        "cardTitle",
        "body",
        "caption",
        "inherit",
      ],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold", "inherit"],
    },
    children: {
      control: "text",
    },
    truncate: {
      control: "radio",
      options: [1, 2, 3],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackgroundForeground: Story = {};

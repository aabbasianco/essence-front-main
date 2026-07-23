import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./card";
import { CardHeader } from "./card";
import { CardTitle } from "./card";
import { CardDescription } from "./card";
import { CardContent } from "./card";
import { CardFooter } from "./card";
import { CardAction } from "./card";
import { Button } from "@/components/primitive/button";
import Image from "next/image";

const meta = {
  component: Card,
  argTypes: {
    variant: {
      control: "radio",
      options: ["surface", "subtle"],
    },
    size: {
      control: "radio",
      options: ["md", "sm"],
    },
  },
  args: {
    variant: "surface",
    size: "md",
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args} className="relative mx-auto w-full max-w-sm pt-0">
      <Image src="public\images\product_placeholder.webp" alt="Card Image" className="" width={200} height={200} />
      <CardHeader>
        <CardTitle>Bleu de Chanel</CardTitle>
        <CardDescription>Some Description</CardDescription>
      </CardHeader>
      <CardContent>(stars)</CardContent>
      <CardFooter className="flex-row flex-wrap gap-5">
        <CardAction className="w-full">
          <Button layout="full">Some Action</Button>
        </CardAction>
      </CardFooter>
    </Card>
  ),
};

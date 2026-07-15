import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Card } from "./card";
import { CardHeader } from "./card";
import { CardTitle } from "./card";
import { CardDescription } from "./card";
import { CardContent } from "./card";
import { CardFooter } from "./card";
import { CardAction } from "./card";
import {Button} from "@/components/primitive/button";

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Some Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Some random content about some random events on some random universe
          on some random dimention.
        </p>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button>Some Action</Button>
        </CardAction>
        <CardDescription>&quot; Some description</CardDescription>
      </CardFooter>
    </Card>
  ),
};

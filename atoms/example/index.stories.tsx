import type { Meta, StoryObj } from "@storybook/react";
import Example from ".";

const meta = {
  title: "Atom/Example",
  component: Example,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Example>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {},
};

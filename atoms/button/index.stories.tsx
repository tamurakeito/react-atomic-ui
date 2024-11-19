import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button_: Story = {
  args: {
    children: "サインイン",
    onClick: () => {},
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { MoneyInput } from "./money-input";

const meta = {
  title: "Components/MoneyInput",
  component: MoneyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MoneyInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    value: "0,00",
    onChange: () => {
      console.log("Money value changed!");
    },
  },
};

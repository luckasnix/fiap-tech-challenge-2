import type { Meta, StoryObj } from "@storybook/react";

import { TransactionModal } from "./transaction-modal";

const meta = {
  title: "Components/TransactionModal",
  component: TransactionModal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TransactionModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    open: true,
    onClose: () => {
      console.log("Modal closed!");
    },
  },
};

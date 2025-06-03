import type { Meta, StoryObj } from "@storybook/react";

import { FinancialSummary } from "./financial-summary";

const meta = {
  title: "Components/FinancialSummary",
  component: FinancialSummary,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FinancialSummary>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    userName: "Joana",
    date: Date.now(),
    checkingAccountValue: 1000,
    onNewTransactionButtonClick: () => {
      console.log("New transation button clicked!");
    },
  },
};

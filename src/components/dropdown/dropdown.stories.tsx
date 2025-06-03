import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from "./dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    label: "Selecione o tipo de transação",
    options: [
      { label: "Câmbio de Moeda", value: "cambio", selected: false },
      { label: "DOC/TED", value: "doc_ted", selected: false },
      {
        label: "Empréstimo e Financiamento",
        value: "emprestimo",
        selected: false,
      },
    ],
    onSelect: () => {
      console.log("Option selected!");
    },
  },
};

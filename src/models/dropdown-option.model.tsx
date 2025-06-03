import type { TransactionType } from "~/components/statement/transaction-item";

export interface DropdownOption {
  label: string;
  value: TransactionType;
  selected?: boolean;
}

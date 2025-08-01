import { TransactionType } from "~/types/services";

export interface DropdownOption {
  label: string;
  value: TransactionType;
  selected?: boolean;
}

import { create } from "zustand";

import {
  positiveTransactionTypes,
  negativeTransactionTypes,
  type TransactionProps,
} from "~/components/statement/transaction-item";

type Store = {
  transactions: Array<TransactionProps>;
  addTransaction: (transaction: TransactionProps) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (
    id: string,
    updatedData: Partial<TransactionProps>,
  ) => void;
  getTotal: () => number;
};

const useStatementStore = create<Store>((set, get) => ({
  transactions: [],
  addTransaction: (transaction: TransactionProps) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),
  removeTransaction: (id: string) =>
    set((state) => ({
      transactions: state.transactions.filter((item) => item.id !== id),
    })),
  updateTransaction: (id: string, updatedData: Partial<TransactionProps>) =>
    set((state) => ({
      transactions: state.transactions.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      ),
    })),
  getTotal: () => {
    const { transactions } = get();
    return transactions.reduce((accum, { value, transactionType }) => {
      if (positiveTransactionTypes.includes(transactionType)) {
        return accum + value;
      }
      if (negativeTransactionTypes.includes(transactionType)) {
        return accum - value;
      }
      return accum;
    }, 0);
  },
}));

export default useStatementStore;

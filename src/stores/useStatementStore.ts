import { create } from "zustand";

import {
  positiveTransactionTypes,
  negativeTransactionTypes,
  type TransactionProps,
} from "~/components/statement/transaction-item";

const calculateTotal = (transactions: TransactionProps[]) =>
  transactions.reduce((accum, { value, transactionType }) => {
    if (positiveTransactionTypes.includes(transactionType)) {
      return accum + value;
    }
    if (negativeTransactionTypes.includes(transactionType)) {
      return accum - value;
    }
    return accum;
  }, 0);

type Store = {
  transactions: Array<TransactionProps>;
  total: number;
  addTransaction: (transaction: TransactionProps) => void;
  removeTransaction: (id: string) => void;
  updateTransaction: (
    id: string,
    updatedData: Partial<TransactionProps>,
  ) => void;
};

const useStatementStore = create<Store>((set) => ({
  transactions: [],
  total: 0,
  addTransaction: (transaction) =>
    set((state) => {
      const newTransactions = [...state.transactions, transaction];
      return {
        transactions: newTransactions,
        total: calculateTotal(newTransactions),
      };
    }),
  removeTransaction: (id) =>
    set((state) => {
      const newTransactions = state.transactions.filter((t) => t.id !== id);
      return {
        transactions: newTransactions,
        total: calculateTotal(newTransactions),
      };
    }),
  updateTransaction: (id, updatedData) =>
    set((state) => {
      const newTransactions = state.transactions.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      );
      return {
        transactions: newTransactions,
        total: calculateTotal(newTransactions),
      };
    }),
}));

export default useStatementStore;

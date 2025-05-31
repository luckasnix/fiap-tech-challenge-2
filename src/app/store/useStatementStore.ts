import { create } from "zustand";
import { TransactionProps } from "~/components/statement/transaction-item";

type Store = {
  transactions: Array<TransactionProps>;
  addTransaction: (transaction: TransactionProps) => void;
  removeTransaction: (id: number) => void;
  updateTransaction: (
    id: number,
    updatedData: Partial<TransactionProps>,
  ) => void;
  getTotal: () => void;
};

const useStatementStore = create<Store>((set, get) => ({
  transactions: [],
  addTransaction: (transaction: TransactionProps) =>
    set((state) => ({ transactions: [...state.transactions, transaction] })),
  removeTransaction: (id: number) =>
    set((state) => ({
      transactions: state.transactions.filter((item) => item.id !== id),
    })),
  updateTransaction: (id: number, updatedData: Partial<TransactionProps>) =>
    set((state) => ({
      transactions: state.transactions.map((item) =>
        item.id === id ? { ...item, ...updatedData } : item,
      ),
    })),
  getTotal: () => {
    const { transactions } = get();
    return transactions.reduce((sum, item) => sum + (item.value || 0), 0);
  },
}));

export default useStatementStore;

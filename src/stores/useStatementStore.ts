import { create } from "zustand";

import { type TransactionProps } from "~/components/statement/transaction-item";
import { createTransaction, getStatement } from "~/services/account";
import type { TransactionType, Type } from "~/types/services";

const transactionTypeToApiType: Record<TransactionType, Type> = {
  deposito: "Credit",
  saque: "Debit",
};

const apiTypeToTransactionType: Record<Type, TransactionType> = {
  Credit: "deposito",
  Debit: "saque",
};

const calculateTotal = (transactions: TransactionProps[]) =>
  transactions.reduce((accum, { value }) => {
    return accum + value;
  }, 0);

type AddTransactionParams = Readonly<{
  token: string;
  transactionType: TransactionType;
  value: number; // em centavos
}>;

type Store = {
  transactions: Array<TransactionProps>;
  total: number;
  getTransactions: (token: string) => Promise<void>;
  addTransaction: (params: AddTransactionParams) => Promise<void>;
  removeTransaction: (id: string) => void;
  updateTransaction: (
    id: string,
    updatedData: Partial<TransactionProps>,
  ) => void;
};

const useStatementStore = create<Store>((set) => ({
  transactions: [],
  total: 0,
  getTransactions: async (token) => {
    try {
      const response = await getStatement({ token });

      const formattedTransactions: TransactionProps[] =
        response.result.transactions.map((transaction) => ({
          id: transaction.id,
          date: transaction.date,
          transactionType: apiTypeToTransactionType[transaction.type],
          value: transaction.value,
          accountId: transaction.accountId,
        }));

      set({
        transactions: formattedTransactions,
        total: calculateTotal(formattedTransactions),
      });
    } catch (error) {
      console.error("Falha ao buscar transações:", error);
    }
  },
  addTransaction: async ({ token, transactionType, value }) => {
    try {
      const type = transactionTypeToApiType[transactionType];

      const response = await createTransaction({
        token,
        type,
        value,
      });

      const newTransaction: TransactionProps = {
        id: response.result.id,
        date: response.result.date,
        transactionType: apiTypeToTransactionType[response.result.type],
        value: response.result.value,
      };

      set((state) => {
        const newTransactions = [...state.transactions, newTransaction];
        return {
          transactions: newTransactions,
          total: calculateTotal(newTransactions),
        };
      });
    } catch (error) {
      console.error("Falha ao adicionar transação:", error);
    }
  },
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

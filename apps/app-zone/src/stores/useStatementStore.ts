import { create } from "zustand";
import { TransactionProps } from "~/components/statement/transaction-item";
import { createTransaction, getStatement } from "~/services/account";
import type {
  CreateTransactionResponse,
  GetStatementParams,
  GetStatementResponse,
  TransactionType,
  Type,
} from "~/types/services";

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
  transactionType: TransactionType;
  value: number; // em centavos
}>;

type Store = {
  transactions: Array<TransactionProps>;
  total: number;
  getTransactions: () => Promise<void>;
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
  getTransactions: async () => {
    try {
      // Chama a nova API Route local
      const response = await fetch("/api/statement");

      if (!response.ok) {
        throw new Error("Falha ao buscar transações via API Route");
      }

      const data: GetStatementResponse = await response.json();
      data.result = data.result || { transactions: [] };

      const formattedTransactions: TransactionProps[] =
        data.result.transactions.map((transaction) => ({
          id: transaction.id,
          date: transaction.date,
          transactionType: apiTypeToTransactionType[transaction.type],
          value: transaction.value,
          accountId: transaction.accountId,
        }));

      set({
        transactions: formattedTransactions,
        total: calculateTotal(formattedTransactions), // Calcula o total com base nos dados brutos
      });
    } catch (error) {
      console.error("Falha ao buscar transações:", error);
    }
  },
  addTransaction: async ({ transactionType, value }) => {
    try {
      const type = transactionTypeToApiType[transactionType];
      const response = await fetch("/api/transactions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, value }),
      });

      if (!response.ok) throw new Error("Falha ao criar transação");

      const data: CreateTransactionResponse = await response.json();

      if (!data || !data.result) {
        throw new Error("Resposta inválida do backend");
      }

      const newTransaction: TransactionProps = {
        id: data.result.id,
        date: data.result.date,
        transactionType: apiTypeToTransactionType[data.result.type],
        value: data.result.value,
      };

      set((state) => {
        const newTransactions = [...state.transactions, newTransaction];
        // Recalcula o total com base nos dados brutos para precisão
        const rawTransactions = newTransactions.map((t) => ({
          ...t,
          type: transactionTypeToApiType[t.transactionType],
        }));
        return {
          transactions: newTransactions,
          total: calculateTotal(rawTransactions),
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

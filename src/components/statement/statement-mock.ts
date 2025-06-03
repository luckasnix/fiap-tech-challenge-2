import { TransactionProps } from "./transaction-item";

export const statement: TransactionProps[] = [
  {
    id: "1",
    month: "Novembro",
    transactionType: "deposito",
    date: "21/10/2024",
    value: 15000,
  },
  {
    id: "2",
    month: "Novembro",
    transactionType: "transferencia",
    date: "28/10/2024",
    value: 10000,
  },
  {
    id: "3",
    month: "Dezembro",
    transactionType: "deposito",
    date: "01/12/2024",
    value: 35000,
  },
  {
    id: "4",
    month: "Janeiro",
    transactionType: "saque",
    date: "05/01/2025",
    value: 20000,
  },
];

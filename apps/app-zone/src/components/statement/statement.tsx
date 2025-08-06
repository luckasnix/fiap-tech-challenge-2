import { useEffect, useState } from "react";
import useStatementStore from "~/stores/useStatementStore";
import styles from "./statement.module.css";
import { TransactionItem, TransactionProps } from "./transaction-item";
import { useUserStore } from "~/stores/useUserStore";

export const Statement = () => {
  const transactions = useStatementStore((state) => state.transactions);
  const getTransactions = useStatementStore((state) => state.getTransactions);
  const token = useUserStore((state) => state.token);

  useEffect(() => {
    if (token) {
      getTransactions();
    }
  }, [token, getTransactions]);

  const groupTransactionsByMonth = (transactions: TransactionProps[]) => {
    return transactions.reduce(
      (acc, transaction) => {
        const month = new Date(transaction.date).toLocaleString("pt-BR", {
          month: "long",
          year: "numeric",
        });

        if (!acc[month]) {
          acc[month] = [];
        }
        acc[month].push(transaction);

        return acc;
      },
      {} as Record<string, TransactionProps[]>,
    );
  };

  const groupedTransactions = groupTransactionsByMonth(transactions);

  return (
    <div className={styles.statement}>
      <div className={styles.statementWrapper}>
        <header className={styles.header}>
          <span>Extrato</span>
        </header>

        <div>
          {Object.entries(groupedTransactions).map(([month, transactions]) => (
            <div key={month}>
              <h3 className={styles.month}>{month}</h3>
              <div>
                {transactions.map((transaction) => (
                  <TransactionItem key={transaction.id} {...transaction} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

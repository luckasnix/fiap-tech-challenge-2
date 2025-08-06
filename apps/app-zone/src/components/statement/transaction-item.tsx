import { TransactionType } from "~/types/services";
import { formatCurrencyBRL } from "~/utils/currency";
import styles from "./transaction-item.module.css";

export type TransactionProps = Readonly<{
  id: string;
  transactionType: TransactionType;
  value: number; // em centavos
  date: string;
  accountId?: string;
  from?: string;
  to?: string;
  anexo?: string;
}>;

const transactionTypeToWrapper: Record<TransactionType, string> = {
  deposito: "Depósito",
  saque: "Saque",
};

export const TransactionItem = ({
  transactionType,
  value,
  date,
}: TransactionProps) => {
  return (
    <div className={styles.transactionItem}>
      <div className={styles.wrapperTypeDate}>
        <span className={styles.type}>
          {transactionTypeToWrapper[transactionType]}
        </span>
        <span className={styles.date}>
          {new Date(date).toLocaleDateString("pt-BR")}
        </span>
      </div>
      <div className={styles.bottomWrapper}>
        <p className={styles.value}>{formatCurrencyBRL(value)}</p>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

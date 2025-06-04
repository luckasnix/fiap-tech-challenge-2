"use client";
import { Button } from "~/components/button/button";
import { VectorImage } from "~/components/vector-image/vector-image";
import useStatementStore from "~/stores/useStatementStore";
import { formatDateLong } from "~/utils/date";
import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./financial-summary.module.css";

export type FinancialSummaryProps = Readonly<{
  userName?: string;
  date: number;
  onNewTransactionButtonClick: () => void;
}>;

export const FinancialSummary = ({
  userName,
  date,
  onNewTransactionButtonClick,
}: FinancialSummaryProps) => {
  const total = useStatementStore(({ total }) => total);

  return (
    <div className={styles.financialSummary}>
      {userName ? (
        <h2 className={styles.greetingText}>{`Olá, ${userName}! :)`}</h2>
      ) : (
        <h2 className={styles.greetingText}>{`Olá! :)`}</h2>
      )}
      <span className={styles.dateLong}>{formatDateLong(date)}</span>
      <div className={styles.financialBalance}>
        <div className={styles.balanceBox}>
          <div className={styles.headingBox}>
            <h3>Saldo</h3>
            <VectorImage name="icon-eye" />
          </div>
          <div className={styles.divider} />
          <div className={styles.checkingAccount}>
            <h4>Conta Corrente</h4>
            <span>{formatCurrencyBRL(total)}</span>
          </div>
          <Button
            variant="dashPrimary"
            size="large"
            onClick={onNewTransactionButtonClick}
          >
            Nova transação
          </Button>
        </div>
      </div>
    </div>
  );
};

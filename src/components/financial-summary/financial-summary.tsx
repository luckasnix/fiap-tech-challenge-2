"use client";
import { Button } from "~/components/button/button";
import { VectorImage } from "~/components/vector-image/vector-image";
import useStatementStore from "~/stores/useStatementStore";
import { formatDateLong } from "~/utils/date";
import { formatCurrencyBRL } from "~/utils/currency";

import styles from "./financial-summary.module.css";

export type FinancialSummaryProps = {
  username: string | null;
  date: number;
  onNewTransactionButtonClick?: () => void;
};

export const FinancialSummary = ({
  username,
  date,
  onNewTransactionButtonClick,
}: FinancialSummaryProps) => {
  const total = useStatementStore(({ total }) => total);

  return (
    <div className={styles.financialSummary}>
      {username ? (
        <h2 className={styles.greetingText}>{`Olá, ${username}! :)`}</h2>
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
          {onNewTransactionButtonClick && (
            <Button
              variant="dashPrimary"
              size="large"
              onClick={onNewTransactionButtonClick}
            >
              Nova transação
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

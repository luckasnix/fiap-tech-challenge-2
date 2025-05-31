import { Button } from "../button/button";
import { VectorImage } from "../vector-image/vector-image";
import { TransactionItem } from "./transaction-item";
import styles from "./statement.module.css";
import { statement } from "./statement-mock";

export const Statement = () => {
  return (
    <div className={styles.statement}>
      <div className={styles.statementWrapper}>
        <header className={styles.header}>
          <span>Extrato</span>
          <div className={styles.iconWrapper}>
            <Button variant="ghost">
              <VectorImage name="icon-edit-filled" />
            </Button>
            <Button variant="ghost">
              <VectorImage name="icon-delete-filled" />
            </Button>
          </div>
        </header>
        <div className={styles.statementListWrapper}>
          {statement.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              {...transaction}
            ></TransactionItem>
          ))}
        </div>
      </div>
    </div>
  );
};

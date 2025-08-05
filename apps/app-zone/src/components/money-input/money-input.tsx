import type { ChangeEvent } from "react";

import styles from "./money-input.module.css";

export type MoneyInputProps = Readonly<{
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}>;

export const MoneyInput = ({ value, onChange }: MoneyInputProps) => (
  <div className={styles.moneyInput}>
    <label className={styles.labelText} htmlFor="money-input">
      Valor
    </label>
    <input
      id="money-input"
      className={styles.valueInput}
      type="text"
      inputMode="numeric"
      value={value}
      onChange={onChange}
    />
  </div>
);

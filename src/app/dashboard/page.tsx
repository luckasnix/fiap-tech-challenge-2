import { FinancialSummary } from "~/components/financial-summary/financial-summary";

export default function Dashboard() {
  return (
    <div>
      <FinancialSummary
        userName="Joana"
        date={Date.now()}
        checkingAccountValue={250000}
      />
    </div>
  );
}

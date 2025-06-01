"use client";
import { Dropdown } from "~/components/dropdown/dropdown";
import { FinancialSummary } from "~/components/financial-summary/financial-summary";
import { SideMenu } from "~/components/side-menu/side-menu";
import { DropdownOption } from "~/models/dropdown-option.model";

const dropdownOptions: DropdownOption[] = [
  { label: "Câmbio de Moeda", value: "cambio", selected: false },
  { label: "DOC/TED", value: "doc_ted", selected: false },
  { label: "Empréstimo e Financiamento", value: "emprestimo", selected: false },
];

export default function Dashboard() {
  return (
    <div>
      <FinancialSummary
        userName="Joana"
        date={Date.now()}
        checkingAccountValue={250000}
      />

      <SideMenu />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: "20px",
        }}
      >
        <Dropdown
          label="Selecione o tipo de transação"
          options={dropdownOptions}
          onSelect={(option) => console.log(option)}
        />
      </div>
    </div>
  );
}

import type {
  CreateTransactionParams,
  CreateTransactionResponse,
  GetAccountParams,
  GetAccountResponse,
  GetStatementParams,
  GetStatementResponse,
} from "~/types/services";

export const getAccount = async ({ token }: GetAccountParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/account`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar conta");
  }

  const data: GetAccountResponse = await response.json();

  return data;
};

export const createTransaction = async ({
  token,
  ...params
}: CreateTransactionParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/transaction`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(params),
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao criar transação");
  }

  const data: CreateTransactionResponse = await response.json();

  return data;
};

export const getStatement = async ({ token }: GetStatementParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/account/statement`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao buscar extrato");
  }

  const data: GetStatementResponse = await response.json();

  return data;
};

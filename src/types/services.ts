export type ServiceResponse<T> = {
  message: string;
  result: T;
};

export type TransactionType = "Credit" | "Debit";

// User service

export type CreateUserParams = {
  username: string;
  email: string;
  password: string;
};

export type CreateUserResponse = ServiceResponse<{
  id: string;
  username: string;
  email: string;
  password: string;
}>;

export type AuthUserParams = {
  email: string;
  password: string;
};

export type AuthUserResponse = ServiceResponse<{
  token: string;
}>;

// Account service

export type GetAccountParams = {
  token: string;
};

// TODO: Implementar os tipos "unknown" com os tipos corretos
export type GetAccountResponse = ServiceResponse<{
  account: unknown[];
  cards: unknown[];
  transactions: unknown[];
}>;

export type CreateTransactionParams = {
  token: string;
  accountId: string;
  type: TransactionType;
  value: number;
  from?: string;
  to?: string;
  anexo?: string;
};

export type CreateTransactionResponse = ServiceResponse<{
  id: string;
  accountId: string;
  type: TransactionType;
  value: number;
  date: string;
  from: string;
  to: string;
  anexo: string;
}>;

export type GetStatementParams = {
  token: string;
  accountId: string;
};

// TODO: Implementar os tipos "unknown" com os tipos corretos
export type GetStatementResponse = ServiceResponse<{
  transactions: unknown[];
}>;

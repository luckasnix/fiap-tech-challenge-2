import type {
  CreateUserParams,
  CreateUserResponse,
  AuthUserParams,
  AuthUserResponse,
} from "~/types/services";
import { serialize } from "cookie"; 

export const createUser = async ({
  username,
  email,
  password,
}: CreateUserParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Falha ao criar usuário");
  }

  const data: CreateUserResponse = await response.json();

  return data;
};

export const authUser = async ({ email, password }: AuthUserParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/auth`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    },
  );

  if (!response.ok) {
    throw new Error("Falha ao autenticar usuário");
  }

  const data: AuthUserResponse = await response.json();
  
  return data;
};

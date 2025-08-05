import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createTransaction } from "~/services/account";
import type { CreateTransactionParams } from "~/types/services";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    return new NextResponse(JSON.stringify({ message: "Não autorizado" }), {
      status: 401,
    });
  }

  try {
    // Pega os dados da transação enviados pelo cliente
    const body: Omit<CreateTransactionParams, "token"> = await request.json();

    // Chama o serviço do backend real, agora com o token obtido do cookie
    const data = await createTransaction({
      token,
      type: body.type,
      value: body.value,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("[API /api/transactions] Erro ao criar transação:", error);
    return new NextResponse(
      JSON.stringify({ message: "Erro interno ao criar transação" }),
      { status: 500 },
    );
  }
}

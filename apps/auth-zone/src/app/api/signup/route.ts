import { NextResponse } from "next/server";
import { createUser } from "~/services/user";
import type { CreateUserParams } from "~/types/services";

/**
 * Route Handler para criar um novo usuário.
 * Atua como um proxy para o endpoint de criação de usuário no backend.
 */
export async function POST(request: Request) {
  try {
    // 1. Extrai os dados de cadastro do corpo da requisição enviada pelo frontend.
    const body: CreateUserParams = await request.json();
    const { username, email, password } = body;

    // 2. Validação simples para garantir que os dados necessários foram enviados.
    if (!username || !email || !password) {
      return new NextResponse(
        JSON.stringify({ message: "Dados de cadastro incompletos." }),
        { status: 400 },
      );
    }

    // 3. Chama o serviço que se comunica com o backend real.
    //    Esta chamada não precisa de token, pois é uma rota pública.
    const backendResponse = await createUser({ username, email, password });

    // 4. Retorna a resposta do backend diretamente para o frontend.
    return NextResponse.json(backendResponse, { status: 201 }); // 201 Created é um status apropriado aqui.
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "Erro interno do servidor ao processar o cadastro.",
      }),
      { status: 500 },
    );
  }
}

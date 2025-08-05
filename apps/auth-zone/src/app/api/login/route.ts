import { serialize } from "cookie";
import { authUser } from "~/services/user";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Chama o serviço de autenticação do backend real
    const response = await authUser({ email, password });
    const { token } = response.result;

    // Define o cookie com o token
    const serializedCookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    return new Response(JSON.stringify({ message: "Login bem-sucedido" }), {
      status: 200,
      headers: { "Set-Cookie": serializedCookie },
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: "Falha na autenticação" }), {
      status: 401,
    });
  }
}

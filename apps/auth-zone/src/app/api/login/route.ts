import { serialize } from "cookie";
import { NextResponse } from "next/server";
import { authUser } from "~/services/user";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Esta função (authUser) faz a chamada para http://backend:8000
    const backendResponse = await authUser({ email, password });
    const { token, username } = backendResponse.result;

    const serializedCookie = serialize("authToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    const serializedUsername = serialize("username", username, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    const serializedEmail = serialize("email", email, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 dias
    });

    return NextResponse.json(
      { message: "Login bem-sucedido!" },
      { status: 200, headers: { "Set-Cookie": `${serializedCookie}, ${serializedUsername}, ${serializedEmail}` } },
    );
  } catch (error) {
    console.error("Erro na API Route /api/login:", error);
    return NextResponse.json(
      { message: "Falha na autenticação" },
      { status: 401 },
    );
  }
}

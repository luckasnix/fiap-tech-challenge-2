import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { getStatement } from "~/services/account";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("authToken")?.value;

  if (!token) {
    return new NextResponse(JSON.stringify({ message: "Não autorizado" }), {
      status: 401,
    });
  }

  try {
    const data = await getStatement({ token });

    return NextResponse.json(data);
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Erro interno do servidor" }),
      { status: 500 },
    );
  }
}

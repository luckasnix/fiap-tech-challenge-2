import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;

  if (!token) {
    // Se não há token, redireciona para a página de login da auth-zone
    const loginUrl = new URL(
      "/",
      process.env.NEXT_PUBLIC_AUTH_ZONE_URL || "http://localhost:3000",
    );
    return NextResponse.redirect(loginUrl);
  }

  // Se o token existir, permite que a requisição continue
  return NextResponse.next();
}

// Configura o middleware para rodar em todas as páginas da app-zone
export const config = {
  matcher: ["/dashboard/:path*", "/investimentos/:path*"],
};

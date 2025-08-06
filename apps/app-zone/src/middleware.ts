import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("authToken")?.value;
  const authZoneUrl =
    process.env.NEXT_PUBLIC_AUTH_ZONE_URL || "http://localhost:3000";

  if (!token) {
    return NextResponse.redirect(new URL("/", authZoneUrl));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/investimentos/:path*"],
};

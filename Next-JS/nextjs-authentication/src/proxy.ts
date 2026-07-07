import { NextRequest, NextResponse } from "next/server";
import { privateRoutes, publicRoutes } from "./utils/routes";

export function proxy(req: NextRequest) {
  const cookieVal = req.cookies.get("token")?.value;

  const path = req.nextUrl.pathname;

  if (cookieVal && publicRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!cookieVal && privateRoutes.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // IMPORTANT
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";


const publicRoutes = [
  "/signup",
  "/signin",
];


export async function proxy(req: NextRequest) {

  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });


  const { pathname } = req.nextUrl;

  const isPublicRoute = publicRoutes.some((route) =>
    pathname.startsWith(route)
  );


  // Not logged in + private route
  if (!token && !isPublicRoute) {
    return NextResponse.redirect(
      new URL("/signin", req.url)
    );
  }


  // Logged in + auth pages
  if (token && isPublicRoute) {
    return NextResponse.redirect(
      new URL("/", req.url)
    );
  }


  return NextResponse.next();
}



export const config = {
  matcher: [
    "/((?!api/auth|_next/static|_next/image|favicon.ico).*)",
  ],
};
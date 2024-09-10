import { NextRequest, NextResponse } from "next/server";

export function mobileDetectionMiddleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  const isMobile = /mobi|android|iphone|ipad|ipod/.test(userAgent);

  if (!isMobile && request.nextUrl.pathname === "/") {
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

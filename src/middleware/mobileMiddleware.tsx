import { NextRequest, NextResponse } from "next/server";

export function mobileDetectionMiddleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent")?.toLowerCase() || "";
  const isMobile = /mobi|android|iphone|ipad|ipod/.test(userAgent);
  console.log("isMobile", isMobile, request.nextUrl.pathname);
  if (!isMobile && request.nextUrl.pathname === "/") {
    console.log("들어오니???");
    return NextResponse.redirect(new URL("/home", request.url));
  }

  return NextResponse.next();
}

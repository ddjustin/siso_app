// middleware.ts

import { NextRequest, NextResponse } from "next/server";
import { mobileDetectionMiddleware } from "./middleware/mobileMiddleware";

export function middleware(request: NextRequest) {
  console.log("Main middleware running...");

  const mobileCheckResult = mobileDetectionMiddleware(request);
  console.log("mobileCheckResult", mobileCheckResult);
  if (mobileCheckResult?.redirected) {
    return mobileCheckResult;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/home", "/protected/:path*"],
};

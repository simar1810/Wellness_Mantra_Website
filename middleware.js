import { NextResponse } from "next/server";

const IOS_REGEX = /iPhone|iPad|iPod/i;
const ANDROID_REGEX = /Android/i;

const IOS_APP_URL = "https://apps.apple.com/dm/app/wellness-mantra/id6754878486";
const ANDROID_APP_URL = "https://play.google.com/store/apps/details?id=com.wellnessz.mantra";

export function middleware(request) {
  const userAgent = request.headers.get("user-agent") || "";

  if (IOS_REGEX.test(userAgent)) {
    return NextResponse.redirect(IOS_APP_URL, { status: 302 });
  }

  if (ANDROID_REGEX.test(userAgent)) {
    return NextResponse.redirect(ANDROID_APP_URL, { status: 302 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/app/:path*"],
};


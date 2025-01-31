import { NextResponse } from "next/server";

export function middleware(request: { headers: HeadersInit | undefined }) {
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const cspHeader = `
  object-src 'none';
  block-all-mixed-content;
  script-src 'self' 'nonce-${nonce}' https://*.groww.in/ https://*.growwinfra.in/ wss://*.groww.in/ wss://groww.in/ https://*.freshchat.com/  https://*.webengage.com/ http://cdn.widgets.webengage.com/ https://connect.facebook.net/ https://*.razorpay.com/ https://d2yyd1h5u9mauk.cloudfront.net/integrations/web/v1/library/ https://storage.googleapis.com/ https://www.googletagmanager.com/ https://tagmanager.google.com https://www.google-analytics.com/ https://ssl.google-analytics.com https://stats.g.doubleclick.net/ https://googleads.g.doubleclick.net/ https://www.googleadservices.com/ https://*.google.com/ https://www.google.co.in/ https://fonts.googleapis.com/ https://www.youtube.com/ https://www.youtube.com/iframe_api https://www.youtube-nocookie.com/ https://*.ingest.sentry.io https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/ https://hv-central-config.s3.ap-south-1.amazonaws.com/ https://hypersnapweb.hyperverge.co/ https://microapps.onemoney.in/ https://*.customfit.ai/ https://webrd.onemoney.in/ https://unpkg.com/ https://cdnjs.cloudflare.com/ https://www.gstatic.com/ https://bat.bing.com/ https://*.appsflyer.com/ https://www.clarity.ms/ https://*.ampproject.org/;
  img-src 'self' data: blob: https://groww.in/ https://*.groww.in/ https://img.youtube.com/ https://*.webengage.com/ https://i.ytimg.com https://i3.ytimg.com https://s3.amazonaws.com/cdn.freshdesk.com/ https://viewlogo.s3.amazonaws.com/ https://wchat.freshchat.com/  https://www.google-analytics.com/ https://*.googleapis.com/ https://*.googleusercontent.com/ https://www.google.com/ https://www.google-analytics.com https://www.google.com/ads/ga-audiences https://www.googletagmanager.com https://ssl.gstatic.com https://www.gstatic.com https://stats.g.doubleclick.net/r/ https://stats.g.doubleclick.net/r/collect https://www.google.co.in/ads/ga-audiences https://*.ingest.sentry.io https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/ https://hv-central-config.s3.ap-south-1.amazonaws.com/ https://hypersnapweb.hyperverge.co/ https://microapps.onemoney.in/ https://*.customfit.ai/ https://webrd.onemoney.in/ https://*.freshdesk.com/ https://bat.bing.com/ https://www.google.co.in/pagead/ https://*.ignosis.ai/ https://*.ampproject.org/;
  style-src 'self' https://*.groww.in/ 'unsafe-inline' https://accounts.google.com https://wchat.freshchat.com/ https://fonts.googleapis.com https://*.ampproject.org/;
  font-src 'self' https://*.groww.in/ data: https://fonts.gstatic.com;
  connect-src 'self' data: https://*.groww.in/ https://*.growwinfra.in/ wss://*.groww.in/ wss://groww.in/ https://*.webengage.com/ https://*.razorpay.com/ https://*.delighted.com/ https://accounts.google.com https://www.google-analytics.com/ https://stats.g.doubleclick.net/j/collect https://*.googleapis.com/ https://*.ingest.sentry.io https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/ https://hv-central-config.s3.ap-south-1.amazonaws.com/ https://hypersnapweb.hyperverge.co/ https://microapps.onemoney.in/ https://*.customfit.ai/ https://webrd.onemoney.in/ https://*.ampproject.org/;
  frame-src 'self' https://*.webengage.co https://storage.googleapis.com/ https://*.google.com/ https://www.youtube.com/ https://www.facebook.com https://*.groww.in/ wss://*.groww.in/ wss://groww.in/ https://wchat.freshchat.com/ https://growwapi.firebaseapp.com/ https://www.youtube.com/embed/ https://www.youtube.com/ https://www.youtube-nocookie.com/ https://*.ingest.sentry.io https://hv-camera-web-sg.s3-ap-southeast-1.amazonaws.com/ https://hv-central-config.s3.ap-south-1.amazonaws.com/ https://hypersnapweb.hyperverge.co/ https://microapps.onemoney.in/ https://*.customfit.ai/ https://webrd.onemoney.in/ https://*.ignosis.ai/ https://*.doubleclick.net/ https://*.ampproject.org/;
  media-src https://*.groww.in/ blob: https://storage.googleapis.com/ https://*.ampproject.org/;

`;
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue,
  );

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};

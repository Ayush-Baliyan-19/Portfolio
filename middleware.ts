import { NextRequest, NextResponse } from 'next/server'
 
export function middleware(request: NextRequest) {
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  const cspHeader = `
    default-src 'self';
  object-src 'none';
  block-all-mixed-content;
  script-src 'self' 'nonce-${nonce}' https://*.webengage.com/ https://ayush-baliyan.tech/;
  img-src 'self' data: blob: https://*.webengage.com/ https://ayush-baliyan.tech/;
  style-src 'self' 'unsafe-inline' https://*.webengage.com/ https://ayush-baliyan.tech/;
  font-src 'self' data: https://ayush-baliyan.tech/;
  connect-src 'self' data: https://*.webengage.com/ https://ayush-baliyan.tech/;
  frame-src 'self' https://*.webengage.com/ https://ayush-baliyan.tech/;
  media-src blob: https://ayush-baliyan.tech/;
`
  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()
 
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)
 
  requestHeaders.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
  response.headers.set(
    'Content-Security-Policy',
    contentSecurityPolicyHeaderValue
  )
 
  return response
}
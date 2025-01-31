export const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
export default function generateCsp(nonce: string) {
  const csp = `
  default-src 'self';
  object-src 'none';
  block-all-mixed-content;
  script-src 'self' 'nonce-${nonce}' https://*.ayush-baliyan.tech/ https://*.webengage.com/;
  img-src 'self' data: blob: https://*.ayush-baliyan.tech/ https://*.webengage.com/;
  style-src 'self' https://*.ayush-baliyan.tech/ 'unsafe-inline' https://*.webengage.com/;
  font-src 'self' https://*.ayush-baliyan.tech/ data:;
  connect-src 'self' data: https://*.ayush-baliyan.tech/ https://*.webengage.com/;
  frame-src 'self' https://*.ayush-baliyan.tech/ https://*.webengage.com/;
  media-src https://*.ayush-baliyan.tech/ blob:;
`;

  return csp.replace(/\s{2,}/g, " ").trim();
}

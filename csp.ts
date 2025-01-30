export const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
export const cspHeader = `
  default-src 'self';
  object-src 'none';
  block-all-mixed-content;
  script-src 'self' 'nonce-${nonce}' https://ssl.widgets.webengage.com/ https://*.webengage.com/ https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  img-src 'self' data: blob: https://*.webengage.com/ https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  style-src 'self' 'unsafe-inline' https://*.webengage.com/ https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  font-src 'self' data: https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  connect-src 'self' data: https://*.webengage.com/ https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  frame-src 'self' https://*.webengage.com/ https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
  media-src blob: https://ayush-baliyan.tech/ https://www.ayush-baliyan.tech/;
`;

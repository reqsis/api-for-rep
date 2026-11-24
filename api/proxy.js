export const config = { runtime: 'edge' };

export default async function handler(req) {
  const url = new URL(req.url);
  url.hostname = '://groq.com';
  url.protocol = 'https:';
  url.port = '';
  return fetch(new Request(url, req));
}

export const config = { runtime: "edge", regions: ["sin1"] };

export default async function handler(req) {
  const url = new URL(req.url);
  const target = `https://api.bybit.com${url.pathname.replace(/^\/api/, "")}${url.search}`;
  const resp = await fetch(target, {
    method: "GET",
    headers: { "User-Agent": "MarketTerminal/1.0" },
  });
  return new Response(resp.body, {
    status: resp.status,
    headers: { "Content-Type": "application/json" },
  });
}
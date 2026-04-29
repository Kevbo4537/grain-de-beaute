import type { APIRoute } from 'astro';
export const GET: APIRoute = () => new Response(`User-agent: *\nAllow: /\nSitemap: https://kevbo4537.github.io/grain-de-beaute/sitemap.xml\n`, { headers: { 'Content-Type': 'text/plain' } });

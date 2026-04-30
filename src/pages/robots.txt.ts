import type { APIRoute } from 'astro';
import { url } from '../data';

export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || 'https://graindebeaute37.fr';
  const sitemap = new URL(url('sitemap.xml'), origin).toString();
  return new Response(`User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`, { headers: { 'Content-Type': 'text/plain' } });
};

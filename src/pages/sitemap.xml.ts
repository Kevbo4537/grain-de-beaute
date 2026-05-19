import type { APIRoute } from 'astro';
import { url } from '../data';
const pages = ['', 'technique-mixte-sourcils/', 'maquillage-semi-permanent-sourcils-tours/', 'difference-microblading-microshading-technique-mixte/', 'prix-microblading-tours/', 'cicatrisation-microblading-conseils/', 'retouche-fixatrice-sourcils/', 'deroulement-seance/', 'cicatrisation-conseils/', 'tarifs/', 'galerie/', 'demande-avis-sourcils/', 'sophie-bodin/', 'hygiene-securite/', 'technique-mixte-sourcils-pres-de-tours/', 'contact/', 'mentions-legales/', 'confidentialite/'];
export const GET: APIRoute = ({ site }) => {
  const origin = site?.toString().replace(/\/$/, '') || 'https://graindebeaute37.fr';
  const urls = pages.map(p => `<url><loc>${new URL(url(p), origin).toString()}</loc></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};

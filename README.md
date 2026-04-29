# Grain de Beauté

Site vitrine premium pour Grain de Beauté, maquillage semi-permanent des sourcils à Monnaie près de Tours.

## Offre commerciale de référence

- Technique mixte sourcils : microblading + microshading — 210 €
- Retouche dans le mois suivant — 70 €
- Retouche annuelle — 90 €

Ne pas présenter microblading et microshading comme deux prestations principales séparées.

## Développement

```bash
npm install
npm run dev
npm run build
```

## Ajout de photos avant/après

1. Vérifier le consentement explicite de publication.
2. Supprimer les métadonnées EXIF.
3. Recadrer proprement si nécessaire.
4. Exporter en WebP ou AVIF.
5. Nommer sans prénom/nom client, exemple : `technique-mixte-sourcils-monnaie-tours-avant-apres-01.webp`.
6. Ajouter une légende sobre et un alt text descriptif.
7. Vérifier l’affichage mobile et la vitesse.
8. Commit Git clair.

## Production

Ne pas déployer sur graindebeaute37.fr sans validation de Kevin, sauvegarde de l’existant, vérification HTTPS, formulaire, robots.txt, sitemap.xml et données structurées.

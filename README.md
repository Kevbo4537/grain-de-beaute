# Grain de Beauté

Site vitrine premium pour Grain de Beauté, maquillage semi-permanent des sourcils à Monnaie près de Tours.

## Offre commerciale de référence

- Technique mixte sourcils : microblading + microshading — 210 €
- Retouche fixatrice dans le mois suivant la première pose — 70 €
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

### Déploiement OVH

Le domaine `graindebeaute37.fr` pointe vers le dossier OVH `www-gdb`.

Règles importantes :

1. Ne jamais toucher au dossier `www`.
2. Sauvegarder le contenu de `www-gdb` avant remplacement.
3. Construire la version production avec :

```bash
DEPLOY_TARGET=production npm run build
```

4. Envoyer uniquement le contenu du dossier `dist/` dans `www-gdb`.
5. Après déploiement, vérifier :
   - `https://graindebeaute37.fr/`
   - `https://graindebeaute37.fr/robots.txt`
   - `https://graindebeaute37.fr/sitemap.xml`
   - redirection `http` vers `https`
   - redirection `www` vers le domaine sans `www`
   - boutons appel, SMS et WhatsApp
   - affichage mobile

### Maintenance

- Toute modification doit être testée avec `npm run build` avant déploiement.
- Les changements doivent être committés dans Git avec un message clair.
- Les photos clientes ne doivent être publiées qu’avec consentement explicite.
- Les tarifs officiels sont ceux indiqués dans la section “Offre commerciale de référence”.

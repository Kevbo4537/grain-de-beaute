export const galleryPairs = [
  {
    title: 'Technique mixte sourcils - résultat naturel',
    category: 'Technique mixte',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-01.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-01.webp',
    beforeAlt: 'Avant technique mixte sourcils à Monnaie près de Tours - sourcil naturel avant prestation',
    afterAlt: 'Après technique mixte sourcils à Monnaie près de Tours - sourcil restructuré après prestation',
    caption: 'Ligne plus structurée, sourcil plus présent et regard mieux encadré.'
  },
  {
    title: 'Sourcil plus défini',
    category: 'Microblading + microshading',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-02.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-02.webp',
    beforeAlt: 'Avant microblading microshading sourcils près de Tours - sourcil clairsemé avant',
    afterAlt: 'Après microblading microshading sourcils près de Tours - sourcil plus défini',
    caption: 'Comparaison avant/après avec une ligne plus nette et plus régulière.'
  },
  {
    title: 'Effet structuré et naturel',
    category: 'Effet naturel',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-03.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-03.webp',
    beforeAlt: 'Avant maquillage semi-permanent sourcils Tours - ligne naturelle avant prestation',
    afterAlt: 'Après maquillage semi-permanent sourcils Tours - sourcil plus structuré',
    caption: 'Travail de restructuration avec intensité adaptée au visage.'
  },
  {
    title: 'Ligne redessinée',
    category: 'Restructuration',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-04.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-04.webp',
    beforeAlt: 'Avant technique mixte sourcils Monnaie - sourcil avant restructuration',
    afterAlt: 'Après technique mixte sourcils Monnaie - sourcil foncé et redessiné',
    caption: 'Sourcil plus présent, ligne plus nette et regard harmonisé.'
  },
  {
    title: 'Sourcils clairsemés',
    category: 'Restructuration',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-05.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-05.webp',
    beforeAlt: 'Avant microshading sourcils près de Tours - sourcil clairsemé',
    afterAlt: 'Après microshading sourcils près de Tours - sourcil restructuré',
    caption: 'Effet plus fourni et ligne plus régulière.'
  },
  {
    title: 'Avant/après sourcils',
    category: 'Technique mixte',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-06.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-06.webp',
    beforeAlt: 'Avant sourcils semi-permanent à Monnaie près de Tours',
    afterAlt: 'Après sourcils semi-permanent à Monnaie près de Tours',
    caption: 'Comparaison visuelle de la ligne avant et après prestation.'
  },
  {
    title: 'Résultat plus structuré',
    category: 'Technique mixte',
    before: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-avant-07.webp',
    after: 'images/galerie/split/technique-mixte-sourcils-monnaie-tours-apres-07.webp',
    beforeAlt: 'Avant maquillage permanent sourcils Tours - sourcil avant prestation',
    afterAlt: 'Après maquillage permanent sourcils Tours - sourcil plus plein et structuré',
    caption: 'Sourcil plus dense et forme plus lisible.'
  }
];

export const galleryItems = galleryPairs.map((pair, index) => ({
  src: pair.after,
  alt: pair.afterAlt,
  title: pair.title,
  caption: pair.caption,
  category: pair.category,
  index
}));

export const business = {
  name: 'Grain de Beauté',
  practitioner: 'Sophie Bodin',
  phone: '06 75 19 21 47',
  phoneHref: '+33675192147',
  email: 'graindebeaute37380@gmail.com',
  address: '364 route de la Sinsonnière, 37380 Monnaie',
  area: 'Monnaie, Parçay-Meslay, Tours et communes alentours',
  hours: 'Sur rendez-vous uniquement, du lundi au vendredi de 9h à 18h',
  siret: '75379960000055',
  mainOffer: 'Technique mixte sourcils',
  price: '210 €',
  retouch: '70 €',
  annualRetouch: '90 €',
  whatsappText: 'Bonjour Sophie, je souhaite avoir un avis pour mes sourcils. Je vais vous envoyer quelques photos : visage de face, sourcil gauche et sourcil droit.'
};

export const nav = [
  ['Accueil', '/'],
  ['Technique mixte', '/technique-mixte-sourcils/'],
  ['Cicatrisation', '/cicatrisation-conseils/'],
  ['Près de Tours', '/maquillage-semi-permanent-sourcils-tours/'],
  ['Tarifs', '/tarifs/'],
  ['Galerie', '/galerie/'],
  ['Contact', '/contact/']
];

export const siteBase = import.meta.env.BASE_URL || '/';
export const url = (path = '') => `${siteBase}${path.replace(/^\//, '')}`;
export const tel = `tel:${business.phoneHref}`;
export const sms = `sms:${business.phoneHref}?body=${encodeURIComponent(business.whatsappText)}`;
export const whatsapp = `https://wa.me/${business.phoneHref.replace('+', '')}?text=${encodeURIComponent(business.whatsappText)}`;

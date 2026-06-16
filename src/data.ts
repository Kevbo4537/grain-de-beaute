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
  whatsappText: 'Bonjour Sophie, je souhaite avoir un avis pour mes sourcils. Je vais vous envoyer quelques photos : visage de face, sourcil gauche et sourcil droit.',
  googleBusinessUrl: 'https://www.google.com/maps/place/Grain+de+beaut%C3%A9:+Micropigmentation,+Microblading,+Microshading/@47.4705629,0.7788172,17z/data=!3m1!4b1!4m6!3m5!1s0x47e32d41ad32aa9b:0x23c02dfe8cd1321d!8m2!3d47.4705629!4d0.7788172!16s%2Fg%2F11r1c0h2c5'
};

export const mainNav = [
  ['Accueil', '/'],
  ['Technique mixte', '/technique-mixte-sourcils/'],
  ['Tarifs', '/tarifs/'],
  ['Galerie', '/galerie/'],
  ['Contact', '/contact/']
];

export const infoNav = [
  ['Cicatrisation et conseils', '/cicatrisation-conseils/'],
  ['Près de Tours', '/maquillage-semi-permanent-sourcils-tours/'],
  ['Esthéticienne Monnaie', '/estheticienne-monnaie/'],
  ['Déroulement d’une séance', '/deroulement-seance/'],
  ['Hygiène et sécurité', '/hygiene-securite/'],
  ['À propos de Sophie', '/sophie-bodin/']
];

export const nav = [...mainNav, ...infoNav];

export const siteBase = import.meta.env.BASE_URL || '/';
export const url = (path = '') => `${siteBase}${path.replace(/^\//, '')}`;
export const tel = `tel:${business.phoneHref}`;
export const sms = `sms:${business.phoneHref}?body=${encodeURIComponent(business.whatsappText)}`;
export const whatsapp = `https://wa.me/${business.phoneHref.replace('+', '')}?text=${encodeURIComponent(business.whatsappText)}`;

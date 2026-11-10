export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  source: 'Google Maps' | 'Invitado Verificado';
  tag: 'Pareja' | 'Familia' | 'Tranquilidad' | 'Naturaleza';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'park' | 'interior' | 'parrilla' | 'rio' | 'tarifa';
  src: string;
  alt: string;
  caption: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const CONTACT_INFO = {
  phone: '0221-6191175',
  whatsappRaw: '5492216191175',
  whatsappDisplay: '221-6191175',
  email: 'casaspardo@gmail.com',
  instagram: '@casaspardopuntaindio',
  instagramUrl: 'https://instagram.com/casaspardopuntaindio',
  location: 'Calfucura y Ruta 11, Punta Indio, Provincia de Buenos Aires',
  googleMapsUrl: 'https://maps.app.goo.gl/uddBr6rwCv3zxyo26',
  checkIn: '14:00 hs',
  checkOut: '11:00 hs',
  lateCheckOut: '18:00 hs',
  lateCheckOutCost: 40000,
};

export const RATES_2026 = {
  season: 'Primavera 2026',
  standard: {
    1: { twoGuests: 100000, multiGuests: 120000 },
    2: { twoGuests: 180000, multiGuests: 210000 },
    3: { twoGuests: 250000, multiGuests: 300000 },
  },
  longWeekend: {
    2: { twoGuests: 250000, multiGuests: 280000 },
    3: { twoGuests: 320000, multiGuests: 370000 },
    4: { twoGuests: 400000, multiGuests: 450000 },
  },
};

export const CABIN_INCLUSIONS = [
  {
    title: 'Ambiente principal',
    desc: 'Cocina comedor equipada y cómodo sillón cama.',
  },
  {
    title: 'Dormitorio matrimonial',
    desc: 'Habitación privada con colchón de alta densidad para un descanso reparador.',
  },
  {
    title: 'Altillo rústico',
    desc: 'Espacio acogedor con dos camas en planta alta, ideal para jóvenes y adolescentes.',
  },
  {
    title: 'Baño completo',
    desc: 'Con ducha confort, agua caliente continua y excelente ventilación.',
  },
  {
    title: 'Parrilla individual',
    desc: 'Cada cabaña cuenta con su propia parrilla en el deck exterior.',
  },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    icon: 'BedDouble',
    title: 'Ropa de cama y toallas',
    description: 'Blanquería completa incluida para todos los huéspedes sin costo extra.',
  },
  {
    icon: 'Flame',
    title: 'Salamandra + Estufa eléctrica',
    description: 'Calidez única a leña para días frescos y calefacción auxiliar rápida.',
  },
  {
    icon: 'Wind',
    title: 'Ventilador',
    description: 'Ambientes frescos y bien ventilados durante los días cálidos.',
  },
  {
    icon: 'Tv',
    title: 'Smart TV',
    description: 'Apto para conectarte a tus plataformas de streaming preferidas.',
  },
  {
    icon: 'Wifi',
    title: 'Wifi Satelital',
    description: 'Conexión estable en medio de la Reserva de Biosfera natural.',
  },
  {
    icon: 'Car',
    title: 'Estacionamiento privado',
    description: 'Espacio seguro y cómodo dentro del predio cercado.',
  },
  {
    icon: 'UtensilsCrossed',
    title: 'Cocina super equipada',
    description: 'Horno eléctrico, microondas, anafe, pava eléctrica, heladera con freezer y vajilla completa.',
  },
  {
    icon: 'Trees',
    title: 'Parque & Cercanía al Río',
    description: 'Amplias hectáreas verdes con privacidad total y el río a pocos minutos.',
  },
];

export const REVIEWS_DATA: Review[] = [
  {
    id: '1',
    author: 'Mariana & Gonzalo',
    rating: 5,
    date: 'Hace 2 semanas',
    comment: 'Un lugar mágico en Punta Indio. La paz que se respira en el parque de Casas Pardo no tiene precio. La cabaña súper limpia, equipada con todo lo necesario y la atención impecable. Volveremos sin dudas.',
    source: 'Google Maps',
    tag: 'Pareja',
  },
  {
    id: '2',
    author: 'Carlos Alberto V.',
    rating: 5,
    date: 'Hace 1 mes',
    comment: 'Excelente atención de sus dueños. Las 3 cabañas tienen mucha privacidad entre sí y la salamandra prendida a la noche le da un toque único. La caminata hacia el río por la reserva es hermosa.',
    source: 'Google Maps',
    tag: 'Tranquilidad',
  },
  {
    id: '3',
    author: 'Lucía Fernández',
    rating: 5,
    date: 'Hace 2 meses',
    comment: 'Fuimos en familia con los chicos. Les encantó el altillo y el espacio verde gigante para jugar al aire libre. La parrilla individual impecable. Súper recomendable para desenchufar de la ciudad.',
    source: 'Google Maps',
    tag: 'Familia',
  },
  {
    id: '4',
    author: 'Esteban R.',
    rating: 5,
    date: 'Hace 3 meses',
    comment: 'Impecables instalaciones, el wifi satelital anda muy bien para lo apartado que está de la ciudad. El verde del parque y el trinar de los pájaros en la reserva de biosfera te desconectan por completo.',
    source: 'Google Maps',
    tag: 'Naturaleza',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g0',
    title: 'Detalle del Jardín & Cerco Rústico',
    category: 'park',
    src: '/src/assets/images/general/pardo0.jpeg',
    alt: 'Plantas silvestres y cerco rústico de varillas de madera en el parque de Casas Pardo',
    caption: 'Plantas silvestres de cortadera y cerco rústico de madera en el predio.',
  },
  {
    id: 'g1',
    title: 'Cabaña de Madera & Eucalipto Gigante',
    category: 'park',
    src: '/src/assets/images/general/pardo1.jpeg',
    alt: 'Cabaña de madera rodeada por un gran eucalipto bajo el cielo azul',
    caption: 'Fachada principal de la cabaña con chimenea, rodeada de frondosos eucaliptos.',
  },
  {
    id: 'g2',
    title: 'Deck de Madera & Escalones de Acceso',
    category: 'park',
    src: '/src/assets/images/general/pardo2.jpeg',
    alt: 'Porche exterior y deck de madera con cenefa decorativa',
    caption: 'Galería y deck de entrada con cenefas rústicas caladas y sombra natural.',
  },
  {
    id: 'g3',
    title: 'Vista Panorámica de las Cabañas & Parque',
    category: 'park',
    src: '/src/assets/images/general/pardo3.jpeg',
    alt: 'Vista de las cabañas en el parque verde con troncos decorativos',
    caption: 'Amplio predio de césped verde con troncos decorativos y cabañas independientes.',
  },
  {
    id: 'g4',
    title: 'Porche Soleado & Leña para Salamandra',
    category: 'park',
    src: '/src/assets/images/general/pardo4.jpeg',
    alt: 'Galería de entrada soleada con leña apilada y troncos decorativos',
    caption: 'Porche de madera soleado con leña lista para encender la salamandra.',
  },
  {
    id: 'g5',
    title: 'Parrilla Individual de Ladrillos',
    category: 'parrilla',
    src: '/src/assets/images/general/pardo5.jpeg',
    alt: 'Parrilla rústica de ladrillo a la vista entre la frondosa vegetación',
    caption: 'Parrilla individual de ladrillos rodeada de exuberante vegetación autóctona.',
  },
  {
    id: 'g6',
    title: 'Mates al Aire Libre en la Galería',
    category: 'park',
    src: '/src/assets/images/general/pardo6.jpeg',
    alt: 'Mate en calabaza, termo de acero y jugo en la mesa exterior de la cabaña',
    caption: 'Disfrutando de unos mates en la mesa de madera con vista al parque verde.',
  },
  {
    id: 'g7',
    title: 'Cálida Vista desde la Ventana Interior',
    category: 'interior',
    src: '/src/assets/images/general/pardo7.jpeg',
    alt: 'Vista hacia el jardín exterior desde el marco de la ventana con tejido cálido',
    caption: 'Mirador desde la ventana interior con mantas tejidas y vista al parque.',
  },
  {
    id: 'g8',
    title: 'Vegetación Autóctona & Cabaña',
    category: 'park',
    src: '/src/assets/images/general/pardo8.jpeg',
    alt: 'Hojas verdes de laurel nativo en primer plano con la cabaña al fondo',
    caption: 'La vegetación nativa de la Reserva de Biosfera rodeando las instalaciones.',
  },
];

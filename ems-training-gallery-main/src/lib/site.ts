/**
 * Central content for the GOLDEN GYM CENTRAL website.
 * Edit texts, contacts, trainers and prices here — every page reads from this file.
 */
const gymmainhall = { url: "/photos/gymmainhall.jpg" };
const gymfreeweights = { url: "/photos/gymfreeweights.jpg" };
const gymcardiozone = { url: "/photos/gymcardiozone.jpg" };
const emsstudiowings = { url: "/photos/emsstudiowings.png" };
const emsstudiohall = { url: "/photos/emsstudiohalll.jpg" };
const emsstudioroom = { url: "/photos/emsstudioroom.jpg" };
const emssuitslounge = { url: "/photos/emssuitslounge.jpg" };
const trainer1 = { url: "/photos/trainer1.png" };
const trainer2 = { url: "/photos/trainer2.png" };
const trainer3 = { url: "/photos/trainer3.jpg" };

export type Photo = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const photos = {
  gymMainHall: {
    id: "gymmainhall",
    src: "/photos/gymfreeweights.jpg",
    alt: "Основната зала на Golden Gym Central с уреди в оранжево и черно",
    width: 882,
    height: 653,
  },
  gymFreeWeights: {
    id: "gymfreeweights",
    src: "/photos/gymfreeweights2.jpg",
    alt: "Зона за свободни тежести с силови рамки и пейки",
    width: 878,
    height: 654,
  },
  gymCardioZone: {
    id: "gymcardiozone",
    src: "/photos/gymcardiozone.jpg",
    alt: "Кардио зона и машини в Golden Gym Central",
    width: 869,
    height: 657,
  },
  emsStudioWings: {
    id: "emsstudiowings",
    src: "/photos/emsstudiowings.png",
    alt: "Светлото студио за EMS тренировки със златните криле на стената",
    width: 876,
    height: 657,
  },
  emsStudioHall: {
    id: "emsstudioroom",
    src: "/photos/emsstudioroom.jpg",
    alt: "Просторното EMS студио с огледала и светъл под",
    width: 876,
    height: 648,
  },
  emsStudioRoom: {
    id: "emsstudioroom",
    src: "/photos/emsstudiohalll.jpg",
    alt: "EMS костюми и зона за отдих в студиото",
    width: 876,
    height: 653,
  },
  emssuitslounge: {
  id: "emssuitslounge",
  src: "/photos/emssuitslounge.jpg",
  alt: "Стая с EMS костюми",
  width: 876,
  height: 657,
},
  
  
} satisfies Record<string, Photo>;

/** Regular gym gallery — gym floor photos only (EMS studio photos live on the EMS page). */
export const gymGallery: Photo[] = [photos.gymMainHall, photos.gymFreeWeights, photos.gymCardioZone];

/** EMS training section — the wings / white-floor studio photos and the EMS suits. */
export const emsGallery: Photo[] = [
  photos.emsStudioWings,
  photos.emsStudioHall,
  photos.emsStudioRoom,

];

export const contact = {
  address: "пл. „Георги Измирлиев – Македончето“ №1, ет. -1 (подлез)",
  city: "2700 Благоевград, България",
  phoneDisplay: "0889 017 988",
  phoneHref: "tel:+359889017988",
  instagram: "https://www.instagram.com/goldengym_central/",
  instagramHandle: "@goldengym_central",
  // TODO: попълнете реалното работно време
  hours: [
  { days: "Всеки ден", time: "Единственият денонощен фитнес в Благоевград – 24/7" },
  ],
  mapQuery: "пл. Георги Измирлиев 1, 2700 Благоевград, България",
};

export const nav = [
  { to: "/", label: "Начало" },
  { to: "/za-nas", label: "За нас" },
  { to: "/uslugi", label: "Услуги" },
  { to: "/boks-zala", label: "Боксова зала" },
  { to: "/ems-trenirovki", label: "EMS" },
  { to: "/ekip", label: "Екип" },
  { to: "/galeriya", label: "Галерия" },
  { to: "/tseni", label: "Цени" },
  { to: "/kontakti", label: "Контакти" },
] as const;

export type ServiceIcon = "dumbbell" | "user" | "users" | "zap";

export const services: {
  number: string;
  title: string;
  icon: ServiceIcon;
  text: string;
  to: "/uslugi" | "/ems-trenirovki";
}[] = [
  {
    number: "01",
    title: "Фитнес тренировки",
    icon: "dumbbell",
    text: "Свободни тежести, силови рамки, машини и кардио зона — всичко необходимо, за да тренираш в собствен ритъм.",
    to: "/uslugi",
  },
  {
    number: "02",
    title: "Персонални тренировки",
    icon: "user",
    text: "Индивидуален подход и програма, съобразена с твоите цели, ниво и темпо, под наблюдението на треньор.",
    to: "/uslugi",
  },
  {
    number: "03",
    title: "Групови занимания",
    icon: "users",
    text: "Енергията на групата и мотивацията на съвместната тренировка — заедно е по-лесно да не спреш.",
    to: "/uslugi",
  },
  {
    number: "04",
    title: "EMS тренировки",
    icon: "zap",
    text: "Тренировка с електрическа мускулна стимулация в специален костюм, водена от треньор в обособено студио.",
    to: "/ems-trenirovki",
  },
];

/** Trainers. Photo-to-name mapping: trainer-1 (black shirt) = Кирил, trainer-2 (white jersey) = Слави. */
export const team = [
  {
    id: "kiril-dimitrov",
    name: "Кирчо Димитров",
    role: "Фитнес треньор",
    specialties: [
      "Индивидуални и групови тренировки",
      "Изготвяне на персонални тренировъчни програми",
      "Съвети за хранене и здравословен начин на живот",
    ],
    photo: { src: trainer1. url, alt: "Кирил Димитров — фитнес треньор", width: 494, height: 660 },
  },
  {
    id: "slavi",
    name: "Слави Димов",
    role: "EMS треньор",
    specialties: [
      "EMS тренировки",
      "Кондиционни тренировки и подобряване на издръжливостта",
      "Повишаване на силата, физическата форма и тонуса",
    ],
    photo: { src: trainer2. url, alt: "Слави — треньор, специализиран в EMS тренировки", width: 479, height: 649 },
  },
  {
  id: "yoana-vaglenova",
  name: "ЙОАНА ВЪГЛЕНОВА",
  role: "EMS ТРЕНЬОР",
  specialties: [
    "Индивидуални EMS тренировки",
    "Изготвяне на персонални EMS програми",
    "Съвети за хранене и здравословен начин на живот",
  ],
  photo: { src: trainer3.url, alt: "Йоана Въгленова - EMS треньор", width: 494, height: 660 },
},
];

/** TODO: попълнете реалните цени и условия. Не публикувайте измислени цени. */
export const pricing = [
  {
    name: "Фитнес",
    tagline: "Абонамент за фитнес зала",
    price: "39.60",
    period: "€ / месец",
    features: ["Неограничена карта", "24/7 Достъп "],
    featured: false,
  },
  {
    name: "Персонални тренировки",
    tagline: "Индивидуална програма с треньор",
    price: "15",
    period: "€ / пакет",
    features: ["Индивидуална програма", "Изготвяне на персонални тренировъчни програми", "Съвети за хранене и здравословен начин на живот"],
    featured: true,
  },
  {
    name: "EMS тренировки",
    tagline: "Тренировка с електрическа мускулна стимулация",
  price: "24 /",
  period: "€ / тренировка",
  badge: "🔥 BLACK FRIDAY ПРОМОЦИЯ",
  features: ["Карта 4 посещения 82 €", "Карта 8 посещения 80 € - Black Friday 🔥", "Карта 12 посещения 175 €"],
  featured: true,
  },
];
export type BoxingIcon = "fist" | "target" | "shield" | "flame" | "heart" | "brain" | "timer" | "biceps";
export const boxing = {
  trainerId: "kiril-dimitrov",
  intro: {
    title: "Тренирай като боксьор",
    text: "Бокс залата в Golden Gym Central е място за сила, техника и дисциплина. Тренировките са подходящи и за начинаещи, и за напреднали.",
    note: "Не ти трябва опит, за да започнеш. Трябва ти само желание - останалото ще го изградим заедно на ринга.",
  },
    benefits: [
    { icon: "fist", title: "ТЕХНИКА", text: "Правилна стойка, удар и защита - от нулата до напреднали." },
    { icon: "flame", title: "КОНДИЦИЯ", text: "Взривна сила, издръжливост и бързина с всяка тренировка." },
    { icon: "shield", title: "ЗАЩИТА", text: "Учиш се как да се пазиш, да се движиш и да четеш противника." },
    { icon: "heart", title: "ЗДРАВЕ", text: "Сваляш килограми, стягаш тялото и подобряваш сърдечно-съдовата система." },
    { icon: "brain", title: "ФОКУС", text: "Боксът тренира главата колкото и тялото - дисциплина и концентрация." },
    { icon: "timer", title: "РУНДОВЕ", text: "Тренировки по рундове, точно както в истински мач." },
    ],
        topics: [
    {
      icon: "fist",
      title: "ОСНОВИ НА БОКСА",
      number: "01",
      text: "Започваш от нулата - стойка, гард и основни удари.",
      points: ["Правилна стойка и гард", "Основни удари - прав, кроше, ъперкът", "Движение и работа с крака"],
    },
    {
      icon: "target",
      title: "ТЕХНИКА И КОМБИНАЦИИ",
      number: "02",
      text: "Учиш комбинации и точност, не просто да махаш с ръце.",
      points: ["Комбинации от удари", "Работа на чувал и лапи", "Точност и скорост"],
    },
    {
      icon: "shield",
      title: "ЗАЩИТА И ТАКТИКА",
      number: "03",
      text: "Боксът не е само атака - учиш се да се пазиш и да мислиш.",
      points: ["Блокиране и избягване", "Контраатака", "Четене на противника"],
    },
    {
      icon: "flame",
      title: "КОНДИЦИЯ",
      number: "04",
      text: "Взривна сила и издръжливост като в истински мач.",
      points: ["Рундове по 3 минути", "Скачане на въже и кръгова тренировка", "Издръжливост и експлозивност"],
    },
  ],
};

export const boxingGallery = [
  {
    id: "boxing-1",
    src: "/photos/bokszala.jpg",
    alt: "Бокс залата",
    width: 882,
    height: 653,
  },
  {
    id: "boxing-2",
    src: "/photos/boksovazala2.jpg",
    alt: "Тренировка по бокс",
    width: 882,
    height: 653,
  },
  {
    id: "boxing-3",
    src: "/photos/boksovakrusha.jpg",
    alt: "Боксова круша",
    width: 882,
    height: 653,
  },
];

export const boxingGallerySlots = ["Бокс 1", "Бокс 2", "Бокс 3", "Бокс 4", "Бокс 5", "Бокс 6"];
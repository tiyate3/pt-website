/**
 * Site-wide settings. Everything Mustafa may need to change later lives here.
 */

export const BRAND = 'Mustafa the Athlete';
export const TRAINER = 'Mustafa';
/** The area Mustafa's gym sessions are in. The gym itself is never named on the site. */
export const BASE_AREA = 'Marylebone';
export const GYM_ADDRESS = 'Cavendish Mews N, London W1W 6LA';

/** Nearest stations to the gym, with walking times. Times are approximate: check them in Google Maps. */
export const STATIONS: { name: string; walk: string }[] = [
  { name: 'Great Portland Street', walk: '5 min walk' },
  { name: "Regent's Park", walk: '6 min walk' },
  { name: 'Oxford Circus', walk: '8 min walk' },
];

/**
 * Link to Mustafa's reviews on his Google Business Profile (in Google Maps: his profile, then
 * Share). When set, "See all reviews on Google" shows under the reviews on the home page.
 */
export const GOOGLE_REVIEWS_URL = '';

/** Where enquiry form messages are delivered. */
export const CONTACT_EMAIL = 'mustafatheathlete@gmail.com';
/**
 * Web3Forms access key for the home page enquiry form. Free: sign up at web3forms.com with
 * CONTACT_EMAIL and paste the key here. Until it's set, "Send enquiry" opens the visitor's
 * email app with the message filled in instead.
 */
export const WEB3FORMS_KEY = '';

/** WhatsApp number in international format, digits only (no +, spaces or leading 0). */
export const WHATSAPP_NUMBER = '447867871618';
export const WHATSAPP_MESSAGE =
  "Hi Mustafa, I found you on your website and I'd like to book a session.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/**
 * Social profiles. TODO: paste the full profile URLs when ready.
 * While a URL is empty, the icon still shows but is marked "coming soon".
 */
export const SOCIALS = {
  instagram: 'https://www.instagram.com/mustafatheathlete/',
  tiktok: 'https://www.tiktok.com/@mustafa__suarez',
};

export const NAV = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/testimonials/', label: 'Results' },
  { href: '/faq/', label: 'FAQs' },
];

export const SERVICES = [
  {
    slug: 'strength-and-conditioning',
    name: 'Strength & conditioning',
    short: 'Build practical strength, fitness and movement with bodyweight and weights.',
    body: [
      'Progressive sessions combine resistance work and conditioning around your ability and goals.',
      'Build a stronger, more capable body for sport and everyday life.',
    ],
  },
  {
    slug: 'sport-specific',
    name: 'Sport-specific training',
    short: 'Build speed, power and fitness around the demands of your sport.',
    body: [
      'Training is shaped around your sport, your current level and what you want to improve.',
      'Develop athletic movement and conditioning that carries over to training and competition.',
    ],
  },
  {
    slug: 'calisthenics',
    name: 'Calisthenics',
    short: 'Develop bodyweight strength and skills, from the basics to your next milestone.',
    body: [
      'Build control and strength with clear progressions for skills such as your first pull-up.',
      'Every step is matched to your ability, with technique and consistent practice at the centre.',
    ],
  },
  {
    slug: 'body-recomposition',
    name: 'Body recomposition',
    short: 'Build muscle and work towards a leaner physique with a realistic plan.',
    body: [
      'Progressive strength training and realistic nutrition habits support steady change without crash diets.',
      'Your plan fits your schedule, making it easier to stay consistent over time.',
    ],
  },
  {
    slug: 'mobility-and-flexibility',
    name: 'Mobility & flexibility',
    short: 'Move with more control, comfort and confidence in your training.',
    body: [
      'Targeted mobility work helps you develop useful range and stronger positions.',
      'Build movement habits that support your training and help keep you active for the long term.',
    ],
  },
  {
    slug: 'rehabilitation',
    name: 'Rehabilitation',
    short: 'Build confidence returning to exercise with training adapted to your needs.',
    body: [
      'Gradual strength and movement work is adjusted to your ability and progress.',
      'Sessions can work alongside guidance from your healthcare professional as you return to training.',
    ],
  },
] as const;

/**
 * Home page rotating media. Put files in /public/media and set `src`,
 * e.g. { type: 'video', src: '/media/deadlift.mp4', alt: 'Mustafa deadlifting' }.
 * Items without a `src` show as empty placeholders.
 */
// Background of the About page "Why I do it" section. One clip plays on a loop; add more and they cross-fade.
// Files live in /public/media. Keep each under ~10 MB so phones can load it.
export const ABOUT_CLIPS: { src?: string; alt: string }[] = [
  { src: '/media/about_me_montage.mp4', alt: 'Montage of Mustafa training' },
];

export const HOME_MEDIA: { type: 'image' | 'video'; src?: string; alt: string }[] = [
  { type: 'video', alt: 'Mustafa training video 1' },
  { type: 'image', alt: 'Mustafa training photo 1' },
  { type: 'video', alt: 'Mustafa training video 2' },
  { type: 'image', alt: 'Mustafa training photo 2' },
];

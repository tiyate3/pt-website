/**
 * Mustafa's Google reviews, used on the home page (Testimonials) and the Results page.
 * Copy each one across exactly as it appears on his Google Business Profile: name, star rating,
 * date and text. Don't edit or shorten the wording. Newest first.
 */
export interface Review {
  /** Reviewer's name as shown on Google, e.g. 'Sarah K.' */
  author: string;
  /** Star rating, 1 to 5 */
  rating: number;
  /** When it was posted. Use the month and year (e.g. 'March 2026'): Google's "2 weeks ago" goes out of date. */
  date: string;
  /** The review text, word for word */
  text: string;
  /** Optional: the reviewer's profile photo saved in /public/images. Without it, their initial shows. */
  photo?: string;
}

export const REVIEWS: Review[] = [];

/* Until there are real reviews, Lorem ipsum placeholders in the same layout hold the space. */
const LOREM = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.',
  'Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor.',
  'Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi.',
  'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.',
];

/** True once at least one real review has been added. */
export const HAS_REVIEWS = REVIEWS.length > 0;

/** The reviews to show: the real ones, or the placeholders until there are any. */
export const SHOWN_REVIEWS: Review[] = HAS_REVIEWS
  ? REVIEWS
  : LOREM.map((text) => ({ author: 'Reviewer name', rating: 5, date: 'Month 2026', text }));

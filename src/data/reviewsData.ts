import { ReviewItem } from '../types';

export const REVIEWS_SUMMARY = {
  averageRating: 4.3,
  totalReviews: 58,
  verifiedGoogleReviews: true,
};

// Short review cards strictly following the requested sentiments:
// "Best experience", "Best ❤️", "Nice", "Just ok"
export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Aman V.',
    rating: 5,
    sentiment: 'Best experience',
    tag: 'Local Guide',
    date: 'Verified Patron',
  },
  {
    id: 'rev-2',
    author: 'Shreya P.',
    rating: 5,
    sentiment: 'Best ❤️',
    tag: 'Birthday Party',
    date: 'Verified Patron',
  },
  {
    id: 'rev-3',
    author: 'Mohd. Faizan',
    rating: 4,
    sentiment: 'Nice',
    tag: 'Family Dine-in',
    date: 'Verified Patron',
  },
  {
    id: 'rev-4',
    author: 'Rishi Tiwari',
    rating: 5,
    sentiment: 'Best experience',
    tag: 'Regular Customer',
    date: 'Verified Patron',
  },
  {
    id: 'rev-5',
    author: 'Pooja Shukla',
    rating: 5,
    sentiment: 'Best ❤️',
    tag: 'Pizza Lover',
    date: 'Verified Patron',
  },
  {
    id: 'rev-6',
    author: 'Abhishek K.',
    rating: 4,
    sentiment: 'Nice',
    tag: 'Student Group',
    date: 'Verified Patron',
  },
  {
    id: 'rev-7',
    author: 'Satyam S.',
    rating: 3,
    sentiment: 'Just ok',
    tag: 'Takeaway',
    date: 'Verified Patron',
  },
  {
    id: 'rev-8',
    author: 'Kavita M.',
    rating: 5,
    sentiment: 'Best ❤️',
    tag: 'Family Dining',
    date: 'Verified Patron',
  },
];

/**
 * ==============================================================================
 * DEALS & OFFERS SAMPLE DATA
 * Project: GrandStay - Multi-Hotel Booking Platform
 * Stage 2: Homepage Implementation
 * ==============================================================================
 * 
 * Demonstration promotion coupons for hotel reservations and tour packages.
 * Clearly labeled as academic demonstration data for project evaluation.
 */

export const SAMPLE_OFFERS = [
  {
    id: 'offer-001',
    code: 'EARLYBIRD20',
    title: 'Early Bird Vacation Savings',
    discount: '20% OFF',
    description: 'Book your stay at least 30 days prior to check-in and receive a flat 20% discount on premier rooms.',
    validity: 'Valid for bookings 30+ days in advance',
    minStay: 'Min stay: 2 nights',
    badge: 'Popular Deal',
    category: 'Hotel Stay'
  },
  {
    id: 'offer-002',
    code: 'ROYALSTAY',
    title: 'Royal Luxury & Spa Package',
    discount: 'Complimentary Spa & Breakfast',
    description: 'Book 3 or more consecutive nights at any Heritage or Luxury resort to unlock daily chef buffet and 60-min spa voucher.',
    validity: 'Valid across Udaipur & Jaipur resorts',
    minStay: 'Min stay: 3 nights',
    badge: 'Luxury Perk',
    category: 'Resort Perks'
  },
  {
    id: 'offer-003',
    code: 'MONSOON15',
    title: 'Scenic Getaways Promotion',
    discount: 'Flat ₹1,500 OFF',
    description: 'Enjoy instant savings on serene nature and hill resort bookings in Manali and Kerala backwaters.',
    validity: 'Applicable on bookings above ₹7,000',
    minStay: 'Min stay: 1 night',
    badge: 'Instant Savings',
    category: 'Nature Escapes'
  }
];

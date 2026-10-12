/**
 * ==============================================================================
 * SIGHTSEEING TOUR PACKAGES DATA
 * Project: GrandStay - Multi-Hotel Booking Platform
 * Stage 2: Homepage Implementation
 * ==============================================================================
 * 
 * Demonstrates optional sightseeing tour add-ons that guests can purchase
 * alongside their hotel reservation.
 * 
 * IMPORTANT: In our system architecture, tour packages are 100% optional add-ons,
 * not mandatory requirements for booking a room.
 */

export const SAMPLE_TOURS = [
  {
    id: 'tour-001',
    title: 'Old Goa Heritage & Spice Plantation Trail',
    destination: 'Goa',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80',
    duration: 'Full Day (8 Hours)',
    price: 1899,
    priceType: 'per person',
    currency: '₹',
    badge: 'Popular Add-on',
    transport: 'Private AC Sedan / SUV',
    guide: 'Certified English/Hindi Historian',
    meals: 'Traditional Goan Buffet Lunch included',
    itinerary: [
      'Basilica of Bom Jesus & Sé Cathedral guided walk',
      'Scenic drive through Sahyadri foothills',
      'Guided aromatic spice plantation walk with fresh welcome drink',
      'Traditional buffet lunch served on banana leaves'
    ],
    highlights: ['UNESCO World Heritage', 'Spice Tasting', 'Private Hotel Pickup']
  },
  {
    id: 'tour-002',
    title: 'Udaipur Royal Lakes & Sunset Boat Cruise',
    destination: 'Udaipur',
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80',
    duration: 'Half Day (4.5 Hours)',
    price: 2499,
    priceType: 'per person',
    currency: '₹',
    badge: 'Romantic Sunset',
    transport: 'Exclusive Royal Motorboat',
    guide: 'Heritage Palace Guide',
    meals: 'Royal High Tea & Savory Snacks included',
    itinerary: [
      'City Palace waterfront jetty private boarding',
      'Cruise past Jag Mandir Island and Lake Palace',
      'Sunset photography halt with panoramic Aravalli views',
      'Royal courtyard high-tea service'
    ],
    highlights: ['Sunset Lake Cruise', 'Jag Mandir Stop', 'High Tea']
  },
  {
    id: 'tour-003',
    title: 'Solang Valley Snow Point & Adventure Excursion',
    destination: 'Manali',
    image: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=80',
    duration: 'Full Day (7 Hours)',
    price: 3600,
    priceType: 'per group (up to 4 guests)',
    currency: '₹',
    badge: 'Family Adventure',
    transport: 'Dedicated 4x4 Mountain SUV',
    guide: 'Local Mountain Driver & Activity Assistant',
    meals: 'Hot Mountain Tea & Snack Box',
    itinerary: [
      'Morning pickup from hotel through scenic Beas River canyon',
      'Solang Valley arrival with snow activity assistance',
      'Optional ropeway cable-car to Mount Phatru (panoramic view)',
      'Scenic pine forest picnic stop'
    ],
    highlights: ['4x4 Mountain Drive', 'Snow Activities', 'Per-Group Rate']
  },
  {
    id: 'tour-004',
    title: 'Alleppey Backwaters Private Houseboat Cruise',
    destination: 'Kerala',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80',
    duration: 'Day Cruise (6 Hours)',
    price: 4800,
    priceType: 'per group (up to 3 guests)',
    currency: '₹',
    badge: 'Must Experience',
    transport: 'Traditional Kerala Kettuvallam (Private Houseboat)',
    guide: 'Personal Captain & Naturalist',
    meals: 'Authentic Kerala Karimeen Fish / Veg Lunch',
    itinerary: [
      'Private boarding at Punnamada Lake jetty',
      'Cruising narrow palm-fringed village canals & paddy fields',
      'Live onboard meal preparation by private chef',
      'Village coir-making demonstration stop'
    ],
    highlights: ['Private Houseboat', 'Live Kerala Chef', 'Canal Serenity']
  }
];

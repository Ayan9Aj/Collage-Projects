import { useState, useRef } from 'react';
import Header from '../../components/layout/Header/Header';
import Footer from '../../components/layout/Footer/Footer';
import HeroSection from '../../components/home/HeroSection/HeroSection';
import DestinationsSection from '../../components/home/DestinationsSection/DestinationsSection';
import FeaturedHotelsSection from '../../components/home/FeaturedHotelsSection/FeaturedHotelsSection';
import ToursSection from '../../components/home/ToursSection/ToursSection';
import OffersSection from '../../components/home/OffersSection/OffersSection';
import TrustSection from '../../components/home/TrustSection/TrustSection';
import HotelDetailsModal from '../../components/home/HotelDetailsModal/HotelDetailsModal';
import SignInModal from '../../components/home/SignInModal/SignInModal';
import { CheckCircleIcon } from '../../components/common/Icons';
import './HomePage.css';

/**
 * ==============================================================================
 * HOMEPAGE COMPONENT
 * Project: GrandStay - Multi-Hotel Booking Platform
 * Stage 2: Homepage Implementation
 * ==============================================================================
 * 
 * Assembles all customer-facing homepage sections:
 * 1. Global Navigation with smooth section anchor jumping
 * 2. Hero Search Section with date & destination validation
 * 3. Popular Indian Destinations with interactive search filtering
 * 4. Featured Luxury Hotels with full details modal preview
 * 5. Optional Sightseeing Tour Packages preview
 * 6. Deals, Coupons & Special Offers
 * 7. Platform Trust & Hospitality Highlight Pillars
 * 8. Comprehensive Academic Footer
 */
export default function HomePage() {
  // Search and filter state
  const [searchFilter, setSearchFilter] = useState(null);
  const [activeDestination, setActiveDestination] = useState('All');

  // Modal states
  const [selectedHotelForDetails, setSelectedHotelForDetails] = useState(null);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Global toast feedback
  const [toastMessage, setToastMessage] = useState(null);
  const toastTimeoutRef = useRef(null);

  const showToast = (message) => {
    if (toastTimeoutRef.current) {
      clearTimeout(toastTimeoutRef.current);
    }
    setToastMessage(message);
    toastTimeoutRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // 1. Handle search form submission
  const handleSearch = (formData) => {
    setSearchFilter(formData);
    setActiveDestination(formData.destination);

    showToast(
      `Filtered stays for ${formData.destination === 'All' ? 'all destinations' : formData.destination} (${formData.guests} guest${formData.guests > 1 ? 's' : ''})`
    );

    // Scroll smoothly to hotel results
    const hotelsElement = document.getElementById('hotels');
    if (hotelsElement) {
      hotelsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 2. Handle clicking a destination card
  const handleDestinationSelect = (destinationName) => {
    setActiveDestination(destinationName);
    setSearchFilter({
      destination: destinationName,
      checkIn: '',
      checkOut: '',
      guests: '2'
    });

    showToast(`Showing accommodations in ${destinationName}`);

    const hotelsElement = document.getElementById('hotels');
    if (hotelsElement) {
      hotelsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 3. Clear active search filter
  const handleResetSearch = () => {
    setSearchFilter(null);
    setActiveDestination('All');
    showToast('Showing all featured hotels across India');
  };

  // 4. Booking simulation from Hotel Details Modal
  const handleBookNow = (hotel, room) => {
    setSelectedHotelForDetails(null);
    const roomTitle = room ? room.type : 'Selected Room';
    showToast(
      `Selected "${roomTitle}" at "${hotel.name}" for checkout (Stage 4 Reservation Preview)`
    );
  };

  // 5. Wishlist toggle
  const handleFavoriteToggle = (hotel, isFav) => {
    showToast(
      `${isFav ? 'Saved' : 'Removed'} "${hotel.name}" ${isFav ? 'to' : 'from'} your Wishlist`
    );
  };

  // 6. Offer code copied
  const handleCopyOffer = (code) => {
    showToast(`Coupon code "${code}" copied to clipboard!`);
  };

  // 7. Sign in prototype
  const handleLoginSuccess = (name) => {
    setCurrentUser(name);
    showToast(`Welcome to GrandStay, ${name}!`);
  };

  return (
    <div className="homepage-wrapper">
      {/* 1. Global Navigation Header */}
      <Header
        onOpenSignIn={() => setIsSignInOpen(true)}
        onBookStayClick={() => {
          const heroEl = document.getElementById('hero');
          if (heroEl) heroEl.scrollIntoView({ behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onSignOut={() => {
          setCurrentUser(null);
          showToast('Signed out of guest session.');
        }}
      />

      <main id="main-content">
        {/* 2. Hero Section with Search Form */}
        <HeroSection
          onSearch={handleSearch}
          selectedDestination={activeDestination}
          onQuickDestinationSelect={handleDestinationSelect}
        />

        {/* 3. Popular Indian Destinations */}
        <DestinationsSection
          onSelectDestination={handleDestinationSelect}
          activeDestination={activeDestination}
        />

        {/* 4. Featured Hotels & Resorts */}
        <FeaturedHotelsSection
          searchFilter={searchFilter}
          onResetSearchFilter={handleResetSearch}
          onViewHotelDetails={(hotel) => setSelectedHotelForDetails(hotel)}
          onFavoriteToggle={handleFavoriteToggle}
        />

        {/* 5. Optional Sightseeing Tour Packages Preview */}
        <ToursSection
          onSelectTour={(tour) => {
            showToast(`Previewing optional tour add-on: "${tour.title}"`);
          }}
        />

        {/* 6. Deals & Offers */}
        <OffersSection onCopyOffer={handleCopyOffer} />

        {/* 7. Platform Trust & Service Highlights */}
        <TrustSection />
      </main>

      {/* 8. Global Footer */}
      <Footer />

      {/* Hotel Details Preview Modal */}
      {selectedHotelForDetails && (
        <HotelDetailsModal
          hotel={selectedHotelForDetails}
          onClose={() => setSelectedHotelForDetails(null)}
          onBookNow={handleBookNow}
        />
      )}

      {/* Sign In & Account Portal Prototype Modal */}
      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Feedback Toast Notification */}
      {toastMessage && (
        <div className="homepage-toast" role="status" aria-live="polite">
          <CheckCircleIcon size={18} className="homepage-toast__icon" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

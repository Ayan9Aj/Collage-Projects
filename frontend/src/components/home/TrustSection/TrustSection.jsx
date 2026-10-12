import Container from '../../layout/Container/Container';
import {
  ShieldCheckIcon,
  CreditCardIcon,
  HeadphonesIcon,
  SparklesIcon
} from '../../common/Icons';
import './TrustSection.css';

/**
 * ==============================================================================
 * TRUST & SERVICE HIGHLIGHTS SECTION
 * Project: GrandStay - Multi-Hotel Booking Platform
 * Stage 2: Homepage Implementation
 * ==============================================================================
 * 
 * Outlines platform value propositions and planned service architectures:
 * - Quality-checked properties
 * - Flexible payment gateways planned for backend integration
 * - Dedicated customer support
 * - Curated local sightseeing experiences
 */
export default function TrustSection() {
  const highlights = [
    {
      icon: <ShieldCheckIcon size={26} />,
      title: 'Handpicked Verified Properties',
      description: 'Each resort, heritage haveli, and beachfront suite is vetted for guest hygiene, essential amenities, and hospitality standards.'
    },
    {
      icon: <CreditCardIcon size={26} />,
      title: 'Flexible Payment Architecture',
      description: 'Engineered for seamless UPI, credit/debit card, and Pay-at-Hotel options once the Django payment gateway is activated in later stages.'
    },
    {
      icon: <HeadphonesIcon size={26} />,
      title: 'Dedicated Guest Assistance',
      description: 'Planned 24/7 customer care desk providing instant help with date modifications, special requests, and room inquiries.'
    },
    {
      icon: <SparklesIcon size={26} />,
      title: 'Curated Local Experiences',
      description: 'Optional private sightseeing tours, heritage walks, and backwater cruises led by verified local guides and certified captains.'
    }
  ];

  return (
    <section className="trust-section">
      <Container size="lg">
        {/* Section Header */}
        <div className="trust-section__header">
          <span className="trust-section__eyebrow">The GrandStay Promise</span>
          <h2 className="trust-section__title">Hospitality Built on Confidence &amp; Ease</h2>
          <p className="trust-section__subtitle">
            Designed to bridge modern web convenience with traditional luxury hospitality.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="trust-grid">
          {highlights.map((item, index) => (
            <div key={index} className="trust-card">
              <div className="trust-card__icon-box" aria-hidden="true">
                {item.icon}
              </div>
              <h3 className="trust-card__title">{item.title}</h3>
              <p className="trust-card__description">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Academic Note */}
        <div className="trust-section__footnote">
          <span>
            * <strong>System Readiness Note:</strong> Payment processing and customer chat channels are architectural blueprints designed for this BCA project and will be connected in future backend development stages.
          </span>
        </div>
      </Container>
    </section>
  );
}

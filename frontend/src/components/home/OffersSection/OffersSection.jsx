import { useState } from 'react';
import Container from '../../layout/Container/Container';
import Badge from '../../common/Badge/Badge';
import { SAMPLE_OFFERS } from '../../../data/sampleOffers';
import { TagIcon, CopyIcon, CheckCircleIcon } from '../../common/Icons';
import './OffersSection.css';

/**
 * ==============================================================================
 * DEALS & OFFERS HOMEPAGE SECTION
 * Project: GrandStay - Multi-Hotel Booking Platform
 * Stage 2: Homepage Implementation
 * ==============================================================================
 * 
 * Showcases demonstration discount coupons and promotional offers.
 * Includes interactive "Copy Code" button with instant feedback.
 */
export default function OffersSection({ onCopyOffer }) {
  const [copiedCode, setCopiedCode] = useState(null);

  const handleCopy = (code) => {
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopiedCode(code);
    if (onCopyOffer) onCopyOffer(code);

    setTimeout(() => {
      setCopiedCode(null);
    }, 3000);
  };

  return (
    <section className="offers-section" id="offers">
      <Container size="lg">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-header__text">
            <span className="section-header__eyebrow">Exclusive Savings</span>
            <h2 className="section-header__title">Seasonal Offers &amp; Member Deals</h2>
            <p className="section-header__subtitle">
              Take advantage of limited-time vacation promotions for advance reservations and luxury resort stays.
            </p>
          </div>
          <Badge variant="accent" size="md">
            Demo Promo Codes
          </Badge>
        </div>

        {/* Offers Grid */}
        <div className="offers-grid">
          {SAMPLE_OFFERS.map((offer) => {
            const isCopied = copiedCode === offer.code;

            return (
              <div key={offer.id} className="offer-card">
                <div className="offer-card__badge-row">
                  <Badge variant="accent" size="sm">
                    {offer.badge}
                  </Badge>
                  <span className="offer-category">{offer.category}</span>
                </div>

                <div className="offer-card__discount-box">
                  <TagIcon size={20} className="offer-tag-icon" />
                  <span className="offer-discount">{offer.discount}</span>
                </div>

                <h3 className="offer-card__title">{offer.title}</h3>
                <p className="offer-card__desc">{offer.description}</p>

                <div className="offer-card__terms">
                  <span>&bull; {offer.validity}</span>
                  <span>&bull; {offer.minStay}</span>
                </div>

                {/* Promo Code Box */}
                <div className="offer-card__code-container">
                  <div className="code-box">
                    <span className="code-label">PROMO CODE:</span>
                    <strong className="code-text">{offer.code}</strong>
                  </div>

                  <button
                    type="button"
                    className={`copy-code-btn ${isCopied ? 'copied' : ''}`}
                    onClick={() => handleCopy(offer.code)}
                    aria-label={`Copy coupon code ${offer.code}`}
                  >
                    {isCopied ? (
                      <>
                        <CheckCircleIcon size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <CopyIcon size={14} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Demonstration Disclaimer */}
        <div className="offers-disclaimer">
          <span className="offers-disclaimer__text">
            * <strong>Academic Demonstration Note:</strong> Coupons and promotional vouchers displayed here are mock values intended to showcase promotion engine UI integration. No real discounts are processed in this stage.
          </span>
        </div>
      </Container>
    </section>
  );
}

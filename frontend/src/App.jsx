import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Container from './components/layout/Container/Container';
import Button from './components/common/Button/Button';
import Input from './components/common/Input/Input';
import Card from './components/common/Card/Card';
import Badge from './components/common/Badge/Badge';
import HotelCard from './components/common/HotelCard/HotelCard';
import LoadingState from './components/common/LoadingState/LoadingState';
import EmptyState from './components/common/EmptyState/EmptyState';
import ErrorMessage from './components/common/ErrorMessage/ErrorMessage';
import {
  StarIcon,
  MapPinIcon,
  CalendarIcon,
  UsersIcon,
  ArrowRightIcon,
  SparklesIcon
} from './components/common/Icons';
import { SAMPLE_HOTELS, DESIGN_TOKENS_INFO } from './data/sampleHotels';
import './App.css';

/**
 * ==============================================================================
 * APP.JSX - GRANDSTAY MULTI-HOTEL BOOKING PLATFORM
 * Stage 2: Customer Homepage Implementation
 * ==============================================================================
 * 
 * Default View: Renders the complete, customer-facing GrandStay Homepage.
 * Also includes a switcher allowing college evaluators to inspect the underlying
 * Stage 1 Design System Tokens & Component library in isolation.
 */
export default function App() {
  // Current view mode: 'homepage' (default Stage 2) or 'design-system' (Stage 1 preview)
  const [currentView, setCurrentView] = useState('homepage');

  // Stage 1 Design System Showcase state (preserved for academic evaluation)
  const [activeTab, setActiveTab] = useState('hotel-cards');
  const [demoState, setDemoState] = useState('live');
  const [stage1Toast, setStage1Toast] = useState(null);
  const [formState, setFormState] = useState({
    destination: 'Goa, India',
    checkIn: '2026-11-15',
    guests: '2',
    email: '',
    emailError: ''
  });

  const showStage1Toast = (msg) => {
    setStage1Toast(msg);
    setTimeout(() => setStage1Toast(null), 3000);
  };

  const handleInputChange = (field, value) => {
    setFormState((prev) => {
      const updated = { ...prev, [field]: value };
      if (field === 'email') {
        updated.emailError = value.includes('@') ? '' : 'Please enter a valid email address';
      }
      return updated;
    });
  };

  return (
    <div className="app-root">
      {/* Top Academic Navigation Bar */}
      <div className="academic-evaluation-bar" role="banner">
        <div className="academic-bar__content">
          <div className="academic-bar__label">
            <span className="academic-dot" />
            <span><strong>GrandStay:</strong> BCA Capstone Project</span>
            <Badge variant="accent" size="sm">Stage 2 Active</Badge>
          </div>

          <div className="academic-bar__actions">
            <button
              type="button"
              className={`academic-toggle-btn ${currentView === 'homepage' ? 'active' : ''}`}
              onClick={() => setCurrentView('homepage')}
            >
              <SparklesIcon size={14} />
              <span>Customer Homepage (Stage 2)</span>
            </button>
            <button
              type="button"
              className={`academic-toggle-btn ${currentView === 'design-system' ? 'active' : ''}`}
              onClick={() => setCurrentView('design-system')}
            >
              <span>Design System Tokens (Stage 1)</span>
            </button>
          </div>
        </div>
      </div>

      {/* VIEW 1: CUSTOMER HOMEPAGE (STAGE 2) */}
      {currentView === 'homepage' && <HomePage />}

      {/* VIEW 2: STAGE 1 DESIGN SYSTEM SHOWCASE (PRESERVED) */}
      {currentView === 'design-system' && (
        <div className="app-layout">
          <Header />

          <section className="stage-hero">
            <Container size="lg">
              <div className="stage-hero__badge">
                <Badge variant="accent" size="sm">
                  Stage 1 Reference
                </Badge>
                <span className="stage-hero__bca-tag">BCA Final Project Foundation</span>
              </div>

              <h1 className="stage-hero__title">
                GrandStay Design System &amp; Project Foundation
              </h1>
              <p className="stage-hero__description">
                Centralized CSS custom properties, button hierarchies, form validation,
                and resilient UI states (loading skeletons, empty states, and error alerts).
              </p>

              <nav className="stage-tabs" aria-label="Component Showcase Categories">
                <button
                  type="button"
                  className={`stage-tab ${activeTab === 'hotel-cards' ? 'stage-tab--active' : ''}`}
                  onClick={() => setActiveTab('hotel-cards')}
                >
                  Hotel Cards Preview
                </button>
                <button
                  type="button"
                  className={`stage-tab ${activeTab === 'buttons-inputs' ? 'stage-tab--active' : ''}`}
                  onClick={() => setActiveTab('buttons-inputs')}
                >
                  Buttons &amp; Form Fields
                </button>
                <button
                  type="button"
                  className={`stage-tab ${activeTab === 'states' ? 'stage-tab--active' : ''}`}
                  onClick={() => setActiveTab('states')}
                >
                  UI States (Loading, Empty, Error)
                </button>
                <button
                  type="button"
                  className={`stage-tab ${activeTab === 'tokens' ? 'stage-tab--active' : ''}`}
                  onClick={() => setActiveTab('tokens')}
                >
                  Design Tokens &amp; Colors
                </button>
              </nav>
            </Container>
          </section>

          <main className="stage-content">
            <Container size="lg">
              {activeTab === 'hotel-cards' && (
                <div className="section-block">
                  <div className="section-block__header">
                    <div>
                      <h2 className="section-block__title">Commercial Hotel Card Component</h2>
                      <p className="section-block__subtitle">
                        Reused in the homepage with responsive layout and wishlist interaction.
                      </p>
                    </div>
                  </div>
                  <div className="hotel-grid">
                    {SAMPLE_HOTELS.slice(0, 3).map((hotel) => (
                      <HotelCard
                        key={hotel.id}
                        hotel={hotel}
                        onBook={(item) => showStage1Toast(`Selected ${item.name}`)}
                        onFavoriteToggle={(item, fav) =>
                          showStage1Toast(`${fav ? 'Added' : 'Removed'} ${item.name}`)
                        }
                      />
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'buttons-inputs' && (
                <div className="section-block">
                  <Card padding="lg" className="demo-box">
                    <h3 className="demo-box__title">1. Button Hierarchy &amp; Variants</h3>
                    <div className="button-group-demo">
                      <Button variant="primary" size="md">Primary Button</Button>
                      <Button variant="accent" size="md" icon={<StarIcon size={16} fill="white" />}>Accent Button</Button>
                      <Button variant="secondary" size="md">Secondary Button</Button>
                      <Button variant="outline" size="md">Outline Button</Button>
                      <Button variant="text" size="md" icon={<ArrowRightIcon size={14} />} iconPosition="right">Text Link</Button>
                      <Button variant="primary" size="md" disabled>Disabled</Button>
                    </div>
                  </Card>

                  <Card padding="lg" className="demo-box">
                    <h3 className="demo-box__title">2. Accessible Form Inputs</h3>
                    <div className="form-grid-demo">
                      <Input
                        label="Destination / City"
                        id="dest-input"
                        name="destination"
                        value={formState.destination}
                        onChange={(e) => handleInputChange('destination', e.target.value)}
                        icon={<MapPinIcon size={16} />}
                        required
                      />
                      <Input
                        label="Check-in Date"
                        id="checkin-input"
                        name="checkIn"
                        type="date"
                        value={formState.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        icon={<CalendarIcon size={16} />}
                        required
                      />
                      <Input
                        label="Guests & Rooms"
                        id="guests-input"
                        name="guests"
                        type="select"
                        value={formState.guests}
                        onChange={(e) => handleInputChange('guests', e.target.value)}
                        icon={<UsersIcon size={16} />}
                        options={[
                          { value: '1', label: '1 Guest, 1 Room' },
                          { value: '2', label: '2 Guests, 1 Room' },
                          { value: '3', label: '3 Guests, 2 Rooms' }
                        ]}
                      />
                      <Input
                        label="Guest Email (Validation Test)"
                        id="email-input"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        error={formState.emailError}
                        helperText={!formState.emailError ? 'Try deleting "@" to see real-time error' : ''}
                      />
                    </div>
                  </Card>
                </div>
              )}

              {activeTab === 'states' && (
                <div className="section-block">
                  <div className="section-block__header">
                    <div>
                      <h2 className="section-block__title">Resilient UI State Management</h2>
                    </div>
                    <div className="state-switcher">
                      <div className="state-switcher__buttons">
                        <Button variant={demoState === 'live' ? 'primary' : 'outline'} size="sm" onClick={() => setDemoState('live')}>Live State</Button>
                        <Button variant={demoState === 'loading' ? 'primary' : 'outline'} size="sm" onClick={() => setDemoState('loading')}>Loading Skeleton</Button>
                        <Button variant={demoState === 'empty' ? 'primary' : 'outline'} size="sm" onClick={() => setDemoState('empty')}>Empty State</Button>
                        <Button variant={demoState === 'error' ? 'primary' : 'outline'} size="sm" onClick={() => setDemoState('error')}>Error Message</Button>
                      </div>
                    </div>
                  </div>

                  <div className="state-display-container">
                    {demoState === 'live' && (
                      <div className="hotel-grid">
                        {SAMPLE_HOTELS.slice(0, 2).map((h) => (
                          <HotelCard key={h.id} hotel={h} onBook={() => showStage1Toast(h.name)} />
                        ))}
                      </div>
                    )}
                    {demoState === 'loading' && <LoadingState type="card-skeleton" count={3} />}
                    {demoState === 'empty' && (
                      <EmptyState
                        title="No Hotels Found in This Location"
                        onAction={() => setDemoState('live')}
                      />
                    )}
                    {demoState === 'error' && (
                      <ErrorMessage
                        title="Failed to Retrieve Hotel Catalog"
                        onRetry={() => setDemoState('live')}
                      />
                    )}
                  </div>
                </div>
              )}

              {activeTab === 'tokens' && (
                <div className="section-block">
                  <Card padding="lg" className="demo-box">
                    <h3 className="demo-box__title">Design System Tokens</h3>
                    <div className="swatches-grid">
                      {DESIGN_TOKENS_INFO.colors.map((c) => (
                        <div key={c.var} className="swatch-item">
                          <div className="swatch-item__color" style={{ backgroundColor: `var(${c.var})` }} />
                          <div className="swatch-item__meta">
                            <strong className="swatch-item__name">{c.name}</strong>
                            <code className="swatch-item__var">{c.var}</code>
                            <span className="swatch-item__role">{c.role}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              )}
            </Container>
          </main>

          <Footer />

          {stage1Toast && (
            <div className="floating-toast" role="status">
              <span>{stage1Toast}</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

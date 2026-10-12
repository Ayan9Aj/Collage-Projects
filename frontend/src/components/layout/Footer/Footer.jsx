import Container from '../Container/Container';
import { BuildingIcon } from '../../common/Icons';
import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

/**
 * ==============================================================================
 * FOOTER COMPONENT
 * ==============================================================================
 * 
 * Provides site map links, technology stack notes, and project credits.
 */
export default function Footer() {

  return (
    <footer className="site-footer">
      <Container size="lg">
        <div className="site-footer__grid">
          {/* Brand Column */}
          <div className="site-footer__brand-col">
            <div className="site-footer__brand">
              <div className="site-footer__logo-icon">
                <BuildingIcon size={20} />
              </div>
              <span className="site-footer__brand-title">GrandStay</span>
            </div>
            <p className="site-footer__brand-desc">
              A modern multi-hotel reservation platform designed to discover luxury stays,
              compare room rates, book tour packages, and manage guest experiences.
            </p>
            <div className="site-footer__tag">
              <span>BCA Final Year Project</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="site-footer__col">
            <h4 className="site-footer__heading">Quick Explore</h4>
            <ul className="site-footer__links">
              <li><a href="#hotels">Browse Hotels</a></li>
              <li><a href="#destinations">Popular Destinations</a></li>
              <li><a href="#tours">Sightseeing Packages</a></li>
              <li><a href="#offers">Seasonal Promotions</a></li>
            </ul>
          </div>

          {/* System Architecture */}
          <div className="site-footer__col">
            <h4 className="site-footer__heading">Tech Architecture</h4>
            <ul className="site-footer__tech-list">
              <li><strong>Frontend:</strong> React.js, Vite &amp; Vanilla CSS</li>
              <li><strong>Design System:</strong> Custom Tokens &amp; BEM</li>
              <li><strong>Backend (Stage 2+):</strong> Python &amp; Django REST</li>
              <li><strong>Database:</strong> MySQL</li>
            </ul>
          </div>

          {/* Project Details */}
          <div className="site-footer__col">
            <h4 className="site-footer__heading">College Submission</h4>
            <p className="site-footer__academic-note">
              Developed as part of the Bachelor of Computer Applications (BCA) curriculum.
              Demonstrating component architecture and responsive design.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="site-footer__bottom">
          <p>&copy; {CURRENT_YEAR} GrandStay System. Developed for Academic Project Evaluation.</p>
          <div className="site-footer__bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <span>&bull;</span>
            <a href="#terms">Terms of Service</a>
            <span>&bull;</span>
            <a href="#support">Support</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

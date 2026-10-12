import './LoadingState.css';

/**
 * ==============================================================================
 * REUSABLE LOADING STATE COMPONENT
 * ==============================================================================
 * 
 * Provides both an animated luxury spinner and hotel card skeleton placeholders
 * to provide a smooth perceived performance while fetching hotel data.
 * 
 * Props:
 * - type: 'spinner' | 'card-skeleton' | 'text-skeleton' (default: 'spinner')
 * - text: Loading message text
 * - count: Number of skeleton cards to render (default: 1)
 */
export default function LoadingState({
  type = 'spinner',
  text = 'Loading hotel information...',
  count = 1
}) {
  if (type === 'card-skeleton') {
    return (
      <div className="skeleton-grid" aria-label="Loading hotel listings" aria-busy="true">
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="card-skeleton">
            <div className="skeleton skeleton--image" />
            <div className="card-skeleton__body">
              <div className="skeleton skeleton--badge" />
              <div className="skeleton skeleton--title" />
              <div className="skeleton skeleton--text" />
              <div className="card-skeleton__footer">
                <div className="skeleton skeleton--price" />
                <div className="skeleton skeleton--btn" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="loading-state" role="status" aria-live="polite">
      <div className="loading-spinner" />
      {text && <p className="loading-text">{text}</p>}
    </div>
  );
}

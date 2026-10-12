import { SearchIcon } from '../Icons';
import Button from '../Button/Button';
import './EmptyState.css';

/**
 * ==============================================================================
 * REUSABLE EMPTY STATE COMPONENT
 * ==============================================================================
 * 
 * Shown when search results, filter combinations, or booking lists are empty.
 * 
 * Props:
 * - title: Heading message (default: 'No results found')
 * - description: Helpful guidance on how to fix or reset
 * - icon: Optional custom icon element
 * - actionText: CTA button label
 * - onAction: CTA button click handler
 * - className: Optional custom CSS class
 */
export default function EmptyState({
  title = 'No hotels found',
  description = 'We could not find any accommodations matching your criteria. Try clearing some filters or searching a different destination.',
  icon = null,
  actionText = 'Reset Search Filters',
  onAction,
  className = ''
}) {
  return (
    <div className={`empty-state ${className}`.trim()}>
      <div className="empty-state__icon-box" aria-hidden="true">
        {icon || <SearchIcon size={32} />}
      </div>
      <h3 className="empty-state__title">{title}</h3>
      <p className="empty-state__description">{description}</p>
      {actionText && onAction && (
        <div className="empty-state__action">
          <Button variant="secondary" size="md" onClick={onAction}>
            {actionText}
          </Button>
        </div>
      )}
    </div>
  );
}

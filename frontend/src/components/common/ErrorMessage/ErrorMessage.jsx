import { AlertCircleIcon, RefreshIcon } from '../Icons';
import Button from '../Button/Button';
import './ErrorMessage.css';

/**
 * ==============================================================================
 * REUSABLE ERROR MESSAGE COMPONENT
 * ==============================================================================
 * 
 * Displays user-friendly, accessible error messages with optional retry action.
 * 
 * Props:
 * - title: Short error title (default: 'Unable to load content')
 * - message: Explanatory error details
 * - onRetry: Optional callback to retry the failed action
 * - retryText: Button label (default: 'Try Again')
 * - variant: 'card' | 'banner' (default: 'card')
 * - className: Optional custom CSS class
 */
export default function ErrorMessage({
  title = 'Unable to load hotel information',
  message = 'A problem occurred while retrieving data. Please check your connection and try again.',
  onRetry,
  retryText = 'Try Again',
  variant = 'card',
  className = ''
}) {
  const isBanner = variant === 'banner';

  const containerClasses = [
    'error-message',
    `error-message--${variant}`,
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses} role="alert" aria-live="assertive">
      <div className="error-message__icon" aria-hidden="true">
        <AlertCircleIcon size={isBanner ? 20 : 28} />
      </div>

      <div className="error-message__content">
        <h4 className="error-message__title">{title}</h4>
        {message && <p className="error-message__text">{message}</p>}
      </div>

      {onRetry && (
        <div className="error-message__action">
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            icon={<RefreshIcon size={14} />}
          >
            {retryText}
          </Button>
        </div>
      )}
    </div>
  );
}

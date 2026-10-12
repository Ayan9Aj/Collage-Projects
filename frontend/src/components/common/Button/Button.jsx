import './Button.css';

/**
 * ==============================================================================
 * REUSABLE BUTTON COMPONENT
 * ==============================================================================
 * 
 * Props:
 * - variant: 'primary' | 'secondary' | 'outline' | 'accent' | 'text' (default: 'primary')
 * - size: 'sm' | 'md' | 'lg' (default: 'md')
 * - children: Button label or React elements
 * - onClick: Click handler function
 * - type: 'button' | 'submit' | 'reset' (default: 'button')
 * - disabled: Boolean
 * - fullWidth: Boolean - stretches button across container
 * - icon: Optional icon element
 * - iconPosition: 'left' | 'right' (default: 'left')
 * - className: Additional custom CSS class names
 * - ariaLabel: Accessible label for screen readers
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  className = '',
  ariaLabel,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth ? 'btn--full-width' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...rest}
    >
      {icon && iconPosition === 'left' && (
        <span className="btn__icon btn__icon--left" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && (
        <span className="btn__icon btn__icon--right" aria-hidden="true">
          {icon}
        </span>
      )}
    </button>
  );
}

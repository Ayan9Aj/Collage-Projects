import './Card.css';

/**
 * ==============================================================================
 * REUSABLE CARD CONTAINER COMPONENT
 * ==============================================================================
 * 
 * Provides tasteful rounded corners, subtle borders, and restrained shadows.
 * 
 * Props:
 * - children: Content inside the card
 * - hoverable: Boolean - adds gentle hover lift and elevation
 * - padding: 'none' | 'sm' | 'md' | 'lg' (default: 'md')
 * - border: Boolean (default: true)
 * - onClick: Optional click handler
 * - className: Custom class name
 */
export default function Card({
  children,
  hoverable = false,
  padding = 'md',
  border = true,
  onClick,
  className = '',
  ...rest
}) {
  const classes = [
    'card',
    `card--pad-${padding}`,
    border ? 'card--bordered' : '',
    hoverable ? 'card--hoverable' : '',
    onClick ? 'card--interactive' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} onClick={onClick} {...rest}>
      {children}
    </div>
  );
}

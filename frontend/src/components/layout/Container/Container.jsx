import './Container.css';

/**
 * ==============================================================================
 * REUSABLE CONTAINER COMPONENT
 * ==============================================================================
 * 
 * Provides consistent maximum page width, automatic horizontal centering,
 * and responsive screen padding.
 * 
 * Props:
 * - children: Wrapped content
 * - size: 'sm' | 'md' | 'lg' | 'full' (default: 'lg')
 * - className: Additional CSS class
 */
export default function Container({
  children,
  size = 'lg',
  className = '',
  ...rest
}) {
  const classes = ['container', `container--${size}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
}

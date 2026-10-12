import './Input.css';

/**
 * ==============================================================================
 * REUSABLE FORM INPUT / SELECT COMPONENT
 * ==============================================================================
 * 
 * Accessible form field supporting standard text, email, dates, numbers,
 * select dropdowns, prefix icons, and real-time error states.
 * 
 * Props:
 * - label: Text label shown above input
 * - id: Unique ID linking label to input for accessibility
 * - name: Field name
 * - type: 'text' | 'email' | 'number' | 'date' | 'select' | 'password' (default: 'text')
 * - value: Controlled input value
 * - onChange: Change event handler
 * - placeholder: Placeholder text
 * - error: Error message string (turns border red and announces issue)
 * - helperText: Informational helper text below input
 * - required: Boolean
 * - disabled: Boolean
 * - icon: Optional prefix icon element
 * - options: Array of { value, label } for type='select'
 * - className: Additional container CSS class
 */
export default function Input({
  label,
  id,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  icon = null,
  options = [],
  className = '',
  ...rest
}) {
  const inputId = id || name;
  const isSelect = type === 'select';

  const containerClasses = [
    'form-field',
    error ? 'form-field--error' : '',
    disabled ? 'form-field--disabled' : '',
    className
  ]
    .filter(Boolean)
    .join(' ');

  const controlClasses = [
    'form-field__control',
    icon ? 'form-field__control--with-icon' : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className="form-field__label">
          {label}
          {required && <span className="form-field__required" aria-hidden="true">*</span>}
        </label>
      )}

      <div className="form-field__input-wrapper">
        {icon && (
          <span className="form-field__icon" aria-hidden="true">
            {icon}
          </span>
        )}

        {isSelect ? (
          <select
            id={inputId}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className={controlClasses}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined}
            {...rest}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            id={inputId}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            className={controlClasses}
            aria-invalid={Boolean(error)}
            aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-help` : undefined}
            {...rest}
          />
        )}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="form-field__message form-field__message--error" role="alert">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-help`} className="form-field__message form-field__message--helper">
          {helperText}
        </p>
      )}
    </div>
  );
}

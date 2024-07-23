import { NavLink } from 'react-router-dom';
import './Button.scss';

function Button({
  to,
  href,
  children,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  small = false,
  large = false,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps // extra attribute
}) {
  // Default component is button
  let Comp = 'button';

  // Object containing properties of the button.
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    // If there is a 'to' prop, the component is a NavLink element
    props.to = to;
    Comp = NavLink;
  } else if (href) {
    // If it's 'href', it's an 'a' element
    props.href = href;
    Comp = 'a';
  }

  // Add corresponding class based on the passed props
  let classes = '';

  // Class types
  if (className) {
    classes += className + ' ';
  }

  if (primary) {
    classes += 'btn--primary';
  }

  if (outline) {
    classes += 'btn--outline';
  }

  if (text) {
    classes += 'btn--text';
  }

  if (disabled) {
    // Remove event listener when btn is disabled
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
    classes += 'btn--disabled';
  }

  if (rounded) {
    classes += 'btn--rounded';
  }

  // Class sizes
  if (small) {
    classes += 'btn--small';
  }

  if (large) {
    classes += 'btn--large';
  }

  return (
    <Comp className={`btn ${classes + ''}`} {...props}>
      {leftIcon && <span className='btn--icon'>{leftIcon}</span>}
      <span className='btn--title'>{children}</span>
      {rightIcon && <span className='btn--icon'>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;

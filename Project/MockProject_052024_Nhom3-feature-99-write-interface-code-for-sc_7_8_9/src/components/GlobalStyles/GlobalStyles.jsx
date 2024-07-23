import './GlobalStyles.scss';

/**
 * This functional component takes children as a prop and returns them unchanged. It serves as a wrapper to ensure
 * global styles are applied.
 */
function GlobalStyles({ children }) {
  return children;
}

export default GlobalStyles;

import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

// A wrapper around the anchor tag that prevents full page reloads/navigations
// which can cause "refused to connect" errors in sandboxed iframe previews.
const Link: React.FC<LinkProps> = ({ href, children, onClick, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only intercept internal hash links to ensure they behave as SPA transitions
    if (href.startsWith('#')) {
      e.preventDefault();
      window.location.hash = href;
    }
    
    // Call original onClick if provided
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default Link;
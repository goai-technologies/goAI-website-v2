import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

interface ScrollToSectionProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

export function ScrollToSection({ to, className, children }: ScrollToSectionProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const [path, hash] = to.split('#');

    if (path === location.pathname && hash) {
      // Same page, scroll to section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Different page, navigate and scroll after navigation
      navigate(to);
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

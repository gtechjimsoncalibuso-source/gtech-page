import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // If there's a hash (e.g. /services#services) try to scroll to that element.
    if (location.hash) {
      const id = location.hash.replace('#', '');
      // small delay to allow page render
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          // fallback to top if element not found
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      }, 50);
      return;
    }

    // no hash — scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.hash]);

  return null;
}

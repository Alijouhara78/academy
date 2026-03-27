import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const location = useLocation();

  useEffect(() => {
    const handleHash = () => {
      const hash = location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    handleHash();
  }, [location]);
};

export default useSmoothScroll;

import { useEffect } from 'react';

// Component to initialize the intersection observer for animations
const AnimationObserver = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    document.querySelectorAll('.animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-scale')
      .forEach(el => {
        observer.observe(el);
      });
      
    return () => {
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
};

export default AnimationObserver;

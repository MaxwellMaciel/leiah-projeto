
import { useEffect } from 'react';

// Component to initialize ripple effect for buttons
const RippleEffect = () => {
  useEffect(() => {
    const handleButtonClick = (e) => {
      const button = e.currentTarget;
      const ripple = document.createElement('span');
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${e.clientX - rect.left}px`;
      ripple.style.top = `${e.clientY - rect.top}px`;
      ripple.classList.add('ripple');
      
      button.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };
    
    const buttons = document.querySelectorAll('button, .material-btn');
    buttons.forEach(button => {
      button.addEventListener('click', handleButtonClick);
    });
    
    return () => {
      buttons.forEach(button => {
        button.removeEventListener('click', handleButtonClick);
      });
    };
  }, []);

  return null; // This component doesn't render anything
};

export default RippleEffect;

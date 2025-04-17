
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: 'lift' | 'scale' | 'none' | 'rotate';
  animationDelay?: number;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = 'none',
  animationDelay = 0
}) => {
  const getHoverClass = () => {
    switch (hoverEffect) {
      case 'lift': return 'hover-lift';
      case 'scale': return 'hover-scale';
      case 'rotate': return 'hover-rotate';
      default: return '';
    }
  };

  const getDelayClass = () => {
    return animationDelay > 0 ? `delay-${animationDelay * 100}` : '';
  };

  return (
    <div className={cn(
      "material-card overflow-hidden group transition-all duration-300 h-full click-effect",
      getHoverClass(),
      animationDelay > 0 ? 'animate-slide-up' : '',
      getDelayClass(),
      className
    )}>
      {children}
    </div>
  );
};

export default Card;

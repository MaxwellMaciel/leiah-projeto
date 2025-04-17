
import React from 'react';
import { cn } from '@/lib/utils';

interface CardGridProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

const CardGrid: React.FC<CardGridProps> = ({
  children,
  columns = 3,
  gap = 8,
  className = ''
}) => {
  const getColumnClasses = () => {
    switch (columns) {
      case 1: return 'grid-cols-1';
      case 2: return 'grid-cols-1 md:grid-cols-2';
      case 3: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4';
      case 5: return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5';
      default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  const getGapClasses = () => `gap-${gap}`;

  return (
    <div className={cn(
      `grid ${getColumnClasses()} ${getGapClasses()}`,
      className
    )}>
      {children}
    </div>
  );
};

export default CardGrid;


import React from 'react';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  color?: 'light' | 'dark';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  decoratorClassName?: string;
  showDecorator?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title,
  subtitle,
  color = 'dark',
  alignment = 'center',
  className = '',
  decoratorClassName = '',
  showDecorator = true
}) => {
  const alignmentClasses = {
    'left': 'items-start text-left',
    'center': 'items-center text-center',
    'right': 'items-end text-right'
  };

  const textColorClasses = color === 'light' 
    ? { title: 'text-white', subtitle: 'text-white/80' }
    : { title: 'text-leiah-blue', subtitle: 'text-gray-600' };

  return (
    <div className={cn(
      `flex flex-col ${alignmentClasses[alignment]} mb-12`, 
      className
    )}>
      <h2 className={cn(
        `text-3xl md:text-4xl font-bold ${textColorClasses.title}`
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          `mt-2 text-lg ${textColorClasses.subtitle}`
        )}>
          {subtitle}
        </p>
      )}
      
      {showDecorator && (
        <div className={cn("relative mt-4 w-48 h-4", decoratorClassName)}>
          <div className="absolute left-0 right-0 h-0.5 bg-leiah-orange"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-5 h-5 border-r-2 border-b-2 border-leiah-orange"></div>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;


import React from 'react';
import Card from './Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
  animationDelay?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className = '',
  animationDelay = 0
}) => {
  return (
    <Card 
      className={`p-6 flex flex-col items-center text-center ${className}`}
      hoverEffect="scale"
      animationDelay={animationDelay}
    >
      <div className="w-16 h-16 flex items-center justify-center text-leiah-orange mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-leiah-blue mb-2">{title}</h3>
      {description && (
        <p className="text-leiah-gray">{description}</p>
      )}
    </Card>
  );
};

export default FeatureCard;

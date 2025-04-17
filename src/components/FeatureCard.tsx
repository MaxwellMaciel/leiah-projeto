
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className = '' 
}) => {
  return (
    <div className={`material-card p-6 flex flex-col items-center text-center transition-all duration-300 hover:translate-y-[-5px] ${className}`}>
      <div className="w-16 h-16 flex items-center justify-center text-leiah-orange mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-leiah-blue mb-2">{title}</h3>
      {description && (
        <p className="text-leiah-gray">{description}</p>
      )}
    </div>
  );
};

export default FeatureCard;

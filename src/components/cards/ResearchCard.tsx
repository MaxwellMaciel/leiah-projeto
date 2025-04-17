
import React from 'react';
import Card from './Card';

interface ResearchCardProps {
  image: string;
  title: string;
  description?: string;
  authors?: string[];
  year: string;
  className?: string;
  animationDelay?: number;
}

const ResearchCard: React.FC<ResearchCardProps> = ({
  image,
  title,
  description,
  authors,
  year,
  className = '',
  animationDelay = 0
}) => {
  return (
    <Card 
      className={className}
      animationDelay={animationDelay}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-leiah-blue mb-4 line-clamp-3">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}
        {authors && authors.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-4">
            {authors.map((author, index) => (
              <span key={index} className="text-sm text-leiah-blue-dark">
                {author}{index < authors.length - 1 ? ', ' : ''}
              </span>
            ))}
          </div>
        )}
        <div className="flex items-center text-leiah-gray">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>{year}</span>
        </div>
      </div>
    </Card>
  );
};

export default ResearchCard;

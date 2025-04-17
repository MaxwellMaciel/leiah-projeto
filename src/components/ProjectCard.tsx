
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  image: string;
  title: string;
  description?: string;
  category: string;
  status?: string;
  categoryColor?: string;
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  category,
  status,
  categoryColor = 'bg-green-500',
  link = '#',
  className = '',
}) => {
  return (
    <div className={`material-card overflow-hidden group transition-all duration-300 ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute top-4 left-4 ${categoryColor} text-white text-xs font-bold uppercase px-3 py-1 rounded-full`}>
          {category}
        </div>
        {status && (
          <div className="absolute top-4 right-4 bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full">
            {status}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-leiah-blue mb-4 line-clamp-2">{title}</h3>
        {description && (
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        )}
        <Link 
          to={link} 
          className="text-leiah-orange font-medium flex items-center hover:underline"
        >
          Ver detalhes
          <svg className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;

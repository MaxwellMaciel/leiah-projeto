
import React from 'react';
import SectionTitle from '../SectionTitle';

interface SectionContainerProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  color?: 'light' | 'dark';
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  subtitle,
  children,
  color = 'dark',
  alignment = 'center',
  className = '',
  id
}) => {
  return (
    <section id={id} className={`section-padding ${className}`}>
      <div className="container mx-auto px-4">
        <SectionTitle 
          title={title} 
          subtitle={subtitle} 
          color={color} 
          alignment={alignment} 
        />
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;

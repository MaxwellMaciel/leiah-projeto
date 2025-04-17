
import React, { useEffect } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

interface MainLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <NavBar />
      <main className={`${className}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

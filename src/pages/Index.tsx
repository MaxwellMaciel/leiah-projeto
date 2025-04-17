import MainLayout from '../components/layouts/MainLayout';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import AreasSection from '../components/sections/AreasSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ResearchSection from '../components/sections/ResearchSection';
import ContactSection from '../components/sections/ContactSection';
import AnimationObserver from '../components/AnimationObserver';
import RippleEffect from '../components/RippleEffect';

const Index = () => {
  return (
    <MainLayout className="min-h-screen">
      <HeroSection />
      
      <div id="quem-somos">
        <AboutSection />
      </div>
      
      <div className="blue-to-white-wavy-divider"></div>
      
      <AreasSection />
      
      <div className="inverted-blue-wavy-divider"></div>
      
      <ProjectsSection />
      
      <div className="white-to-red-wavy-divider"></div>
      
      <ResearchSection />
      
      <div className="white-to-red-wavy-divider"></div>
      
      <div id="contato">
        <ContactSection />
      </div>
      
      <div className="white-to-blue-wavy-divider"></div>
      
      {/* Components for animations and effects */}
      <AnimationObserver />
      <RippleEffect />
    </MainLayout>
  );
};

export default Index;

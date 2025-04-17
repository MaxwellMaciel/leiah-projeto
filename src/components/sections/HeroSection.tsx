
import { Link } from 'react-router-dom';
import MaterialButton from '../MaterialButton';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-leiah-blue text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            d="M0,0 L100,0 L100,100 L0,100 Z"
          />
          {[...Array(10)].map((_, i) => (
            <line
              key={i}
              x1="0"
              y1={i * 10}
              x2="100"
              y2={i * 10}
              stroke="white"
              strokeWidth="0.2"
            />
          ))}
          {[...Array(10)].map((_, i) => (
            <line
              key={i + 10}
              x1={i * 10}
              y1="0"
              x2={i * 10}
              y2="100"
              stroke="white"
              strokeWidth="0.2"
            />
          ))}
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-right">
            LEIAH
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-slide-right delay-200">
            Laboratório de Eletrônica, Informática Aplicada e Humanidades
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 animate-slide-right delay-400">
            <MaterialButton 
              color="primary"
              onClick={() => {
                document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Conheça mais
            </MaterialButton>
            <MaterialButton 
              variant="outlined" 
              color="primary"
              onClick={() => {
                window.location.href = '/contato';
              }}
            >
              Entre em contato
            </MaterialButton>
          </div>
        </div>
        
        <div className="md:w-1/2 flex justify-center md:justify-end animate-slide-left" style={{ animationDelay: '0.6s' }}>
          <div className="relative w-80 h-80 md:w-96 md:h-96 animate-float">
            <svg viewBox="0 0 200 200" className="w-full h-full animate-rotate" style={{ animationDuration: '20s' }}>
              <path
                fill="#ea384c"
                d="M45.7,-54.8C59,-47.3,69.7,-32.8,74.2,-16.2C78.7,0.4,77.1,19.2,69,33.9C60.8,48.6,46.1,59.2,30.3,65.2C14.5,71.2,-2.4,72.5,-19.1,68.4C-35.8,64.3,-52.3,54.7,-61.7,40.3C-71.1,25.9,-73.3,6.7,-69.1,-10C-64.9,-26.6,-54.3,-40.8,-41,-48.9C-27.6,-57,-13.8,-59.1,1.4,-60.8C16.6,-62.5,33.3,-63.8,45.7,-54.8Z"
                transform="translate(100 100)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 md:w-48 md:h-48 bg-white p-4 rounded-full">
                <img 
                  src="/lovable-uploads/ab237fc0-e28b-4d7e-a25b-fca2e6cb227f.png" 
                  alt="LEIAH Logo" 
                  className="w-full h-full object-contain animate-pulse-slow"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,149.3C1248,139,1344,85,1392,58.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

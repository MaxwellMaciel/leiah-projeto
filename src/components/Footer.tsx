
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ChevronUp } from 'lucide-react';
import Logo from './Logo';
import { Separator } from './ui/separator';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-leiah-orange text-white">
      <div className="container mx-auto py-4">
        <div className="flex flex-col items-center mb-4">
          {/* Centered logo */}
          <div className="mb-4">
            <Logo size="large" />
          </div>
          
          <Separator className="w-1/2 bg-white/20 mb-4" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 animate-slide-up">Links Rápidos</h3>
            <nav className="flex flex-col space-y-1 animate-slide-up delay-100">
              <Link to="/" className="hover:underline transition-all">Home</Link>
              <Link to="/quem-somos" className="hover:underline transition-all">Quem somos</Link>
              <Link to="/atuacao" className="hover:underline transition-all">Atuação</Link>
              <Link to="/projetos" className="hover:underline transition-all">Projetos</Link>
            </nav>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-2 animate-slide-up">Contato</h3>
            <p className="mb-1 animate-slide-up delay-100">contato@leiah.com.br</p>
            <p className="mb-2 animate-slide-up delay-200">+55 (85) 3333-4444</p>
            <div className="flex space-x-4 animate-slide-up delay-300">
              <a href="https://instagram.com" className="hover:opacity-80 transition-opacity hover:scale-110 transform" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://linkedin.com" className="hover:opacity-80 transition-opacity hover:scale-110 transform" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-4 pt-4 flex justify-between items-center">
          <p className="text-sm opacity-70 animate-fade-in">© 2025 LEIAH. Todos os direitos reservados.</p>
          <button 
            onClick={scrollToTop}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors animate-fade-in"
            aria-label="Voltar ao topo"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

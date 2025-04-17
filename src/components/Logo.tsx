
import { Link } from 'react-router-dom';

const Logo = ({ size = "normal" }) => {
  return (
    <Link to="/" className={`flex ${size === "large" ? "flex-col items-center" : "items-center space-x-2"}`}>
      <div className={`relative ${size === "large" ? "h-32 w-32 mb-4" : "h-12 w-12"}`}>
        <img 
          src="/lovable-uploads/c837248b-6a88-49ec-b0bf-bc95a9ab1cbf.png" 
          alt="LEIAH Logo" 
          className="w-full h-full object-contain animate-pulse-slow"
        />
      </div>
      <div className={`flex flex-col ${size === "large" ? "items-center" : ""}`}>
        <span className="text-white font-bold text-xl tracking-wide">LEIAH</span>
        <span className="text-white text-xs opacity-80">Laboratório de Eletrônica, Informática Aplicada e Humanidades</span>
      </div>
    </Link>
  );
};

export default Logo;

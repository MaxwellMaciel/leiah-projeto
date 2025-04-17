
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MaterialButton from "../components/MaterialButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-16">
          <div className="text-leiah-orange text-9xl font-bold mb-4">404</div>
          <h1 className="text-3xl md:text-4xl font-bold text-leiah-blue mb-6">Página não encontrada</h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto">
            Oops! A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <MaterialButton color="primary">
              Voltar para Home
            </MaterialButton>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;

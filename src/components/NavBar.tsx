import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Linkedin, Youtube, Menu, Users, UserRound, Lightbulb, FolderOpen, BookOpen, Mail } from 'lucide-react';
import Logo from './Logo';
import { cn } from '@/lib/utils';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';
import { scrollToSection } from '../utils/scrollUtils';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-leiah-blue/95 backdrop-blur-sm shadow-md py-2' : 'bg-leiah-blue py-4'}`}>
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center z-10">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="gap-2">
              <NavLinks location={location} mobile={false} />
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden lg:flex items-center space-x-5">
            <SocialLinks />
          </div>
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden text-white p-2 rounded-full hover:bg-leiah-blue-dark transition-colors" aria-label="Menu">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] max-w-[300px] bg-leiah-blue/95 backdrop-blur-md py-6 px-4">
            <div className="flex flex-col h-full">
              <nav className="flex flex-col pt-8">
                <div className="flex flex-col space-y-4">
                  <MobileNavLinks location={location} />
                </div>
                <div className="flex space-x-6 pt-6 mt-8 justify-center border-t border-white/10">
                  <SocialLinks size={24} />
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

const NavLinks = ({ mobile = false, onClick, location }: { mobile?: boolean; onClick?: () => void; location: any }) => {
  const links = [
    { name: 'Home', path: '/', icon: Lightbulb },
    { name: 'Quem Somos', path: '/', icon: Users, scrollTo: 'quem-somos' },
    { name: 'Conheça nossos integrantes', path: '/integrantes', icon: UserRound },
    { name: 'Projetos', path: '/projetos', icon: FolderOpen },
    { name: 'Pesquisas', path: '/pesquisas', icon: BookOpen },
    { name: 'Contato', path: '/', icon: Mail, scrollTo: 'contato' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.scrollTo) {
      scrollToSection(link.scrollTo);
    }
    onClick?.();
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.path + (link.scrollTo || '')}>
          <Link
            to={link.path}
            onClick={() => handleLinkClick(link)}
            className={cn(
              mobile ? 'mobile-nav-link' : 'desktop-nav-link',
              isActive(link.path) ? 'text-leiah-red font-semibold' : 'text-white',
              'flex items-center transition-all duration-200 hover:text-leiah-red'
            )}
          >
            {!mobile && isActive(link.path) && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-leiah-red rounded-full"></span>
            )}
            <span>{link.name}</span>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );
};

const MobileNavLinks = ({ location }: { location: any }) => {
  const links = [
    { name: 'Home', path: '/', icon: Lightbulb },
    { name: 'Quem Somos', path: '/', icon: Users, scrollTo: 'quem-somos' },
    { name: 'Conheça nossos integrantes', path: '/integrantes', icon: UserRound },
    { name: 'Projetos', path: '/projetos', icon: FolderOpen },
    { name: 'Pesquisas', path: '/pesquisas', icon: BookOpen },
    { name: 'Contato', path: '/', icon: Mail, scrollTo: 'contato' },
  ];

  const handleLinkClick = (link: any) => {
    if (link.scrollTo) {
      scrollToSection(link.scrollTo);
    }
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {links.map((link) => (
        <NavigationMenuItem key={link.path}>
          <SheetClose asChild>
            <Link
              to={link.path}
              onClick={() => handleLinkClick(link)}
              className={cn(
                'mobile-nav-link',
                isActive(link.path) ? 'text-leiah-red font-semibold' : 'text-white',
                'flex items-center gap-3 py-2'
              )}
            >
              <link.icon size={20} />
              {link.name}
            </Link>
          </SheetClose>
        </NavigationMenuItem>
      ))}
    </>
  );
};

const SocialLinks = ({ size = 20 }: { size?: number }) => {
  return (
    <>
      <a href="https://instagram.com" className="text-white hover:text-leiah-red transition-colors transform hover:scale-110" aria-label="Instagram">
        <Instagram size={size} />
      </a>
      <a href="https://linkedin.com" className="text-white hover:text-leiah-red transition-colors transform hover:scale-110" aria-label="LinkedIn">
        <Linkedin size={size} />
      </a>
      <a href="https://youtube.com" className="text-white hover:text-leiah-red transition-colors transform hover:scale-110" aria-label="YouTube">
        <Youtube size={size} />
      </a>
    </>
  );
};

export default NavBar;

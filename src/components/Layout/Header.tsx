
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useApp } from '@/contexts/AppContext';
import { Sun, Moon, User, Package, BadgeIndianRupee } from 'lucide-react';

const Header: React.FC = () => {
  const { cart, setIsCartOpen, theme, toggleTheme, isAuthenticated } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const categories = [
    { name: 'Layer Cakes', path: '/category/layer-cakes' },
    { name: 'Cupcakes', path: '/category/cupcakes' },
    { name: 'Cheesecakes', path: '/category/cheesecakes' },
    { name: 'Cookies & Macarons', path: '/category/cookies-macarons' },
    { name: 'Specialty Desserts', path: '/category/specialty-desserts' },
    { name: 'Dietary Options', path: '/category/dietary' },
  ];
  
  const infoLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Delivery Information', path: '/delivery' },
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 flex flex-col">
        {/* Top section with logo and actions */}
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ rotate: -5 }}
              animate={{ rotate: 5 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
              className="mr-2"
            >
              🍰
            </motion.div>
            <h1 className="text-2xl font-bold font-serif text-bakery-brown dark:text-bakery-cream">
              CrèmeCraft
            </h1>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>
            
            <Link to="/profile">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                aria-label="User profile"
              >
                <User size={18} />
              </Button>
            </Link>
            
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsCartOpen(true)}
              className="rounded-full relative"
              aria-label="Open cart"
            >
              <BadgeIndianRupee size={18} />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 text-[10px]">
                  {totalItems}
                </Badge>
              )}
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col space-y-1">
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
              </div>
            </Button>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className={`lg:flex mt-4 lg:mt-2 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-6 space-y-2 lg:space-y-0 w-full">
            {categories.map((category, index) => (
              <li key={category.name}>
                <Link
                  to={category.path}
                  className="block text-sm hover:text-bakery-dark-pink dark:hover:text-bakery-pink transition-colors duration-200"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Info Links */}
        <nav className={`lg:flex mt-2 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:justify-center lg:space-x-4 space-y-2 lg:space-y-0 w-full text-sm text-gray-500 dark:text-gray-400">
            {infoLinks.map((link, index) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block text-xs hover:text-bakery-dark-pink dark:hover:text-bakery-pink transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300 ease-in-out py-4",
        isScrolled ? "glass-nav" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold text-taxmagnet-darkblue flex items-center"
        >
          <span className="mr-2">TM</span> 
          <span className="hidden md:inline">TaxMagnet</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors">
            Home
          </Link>
          <Link to="/services" className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors">
            Services
          </Link>
          <Link to="/about" className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors">
            About
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="md:hidden text-taxmagnet-darkblue focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
            />
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-taxmagnet-darkblue hover:text-taxmagnet-blue transition-colors py-2 px-4"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

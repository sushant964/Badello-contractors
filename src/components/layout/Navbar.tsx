import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-brand-surface border-b border-white/10 py-4'
          : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://i.ibb.co/wZTZ7SQV/1781696641441.jpg"
              alt="Badello Contractors"
              className="h-12 w-auto object-contain"
            />
            <div className="font-sans font-bold text-xl lg:text-2xl tracking-tighter uppercase text-white transition-colors">
              <span className="text-brand-gold">BADELLO</span> CONTRACTORS
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-xs font-bold uppercase tracking-widest transition-colors hover:text-brand-gold',
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-400'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+18682388667" 
              className="flex items-center gap-2 text-xs font-mono tracking-tighter transition-colors text-white hover:text-brand-gold"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>+1 (868) 238-8667</span>
            </a>
            <Button href="/contact" variant="outline" size="sm" className="hidden lg:inline-flex">
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none text-white hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-surface shadow-xl border-t border-white/10">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'block px-3 py-4 text-xs uppercase tracking-widest font-bold border-b border-white/5',
                  location.pathname === link.path
                    ? 'text-brand-gold'
                    : 'text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 px-3 flex flex-col gap-4">
              <a 
                href="tel:+18682388667" 
                className="flex items-center gap-2 text-white font-mono hover:text-brand-gold"
              >
                <Phone className="w-5 h-5 text-brand-gold" />
                <span>+1 (868) 238-8667</span>
              </a>
              <Button href="/contact" variant="primary" className="w-full">
                Get A Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

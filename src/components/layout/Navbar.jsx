import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';
import Container from '../ui/Container';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Corporate', path: '/' },
    { name: 'SaaS', path: '/saas' },
    { name: 'Healthcare', path: '/healthcare' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md py-3 border-secondary-200 shadow-sm' 
          : 'bg-transparent py-5 border-transparent'
      )}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className={cn(
              "text-2xl font-display font-bold tracking-tight",
              isScrolled ? "text-secondary-900" : "text-secondary-900"
            )}>
              AVADA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors flex items-center space-x-1",
                    location.pathname === link.path ? "text-primary-600" : "text-secondary-600 hover:text-primary-600"
                  )}
                >
                  <span>{link.name}</span>
                  {link.dropdown && <ChevronDown size={14} />}
                </Link>
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-secondary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      <a href="#" className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">Finance</a>
                      <a href="#" className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">Education</a>
                      <a href="#" className="block px-4 py-2 text-sm text-secondary-600 hover:bg-primary-50 hover:text-primary-600 rounded-md">Agency</a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-secondary-600 hover:text-primary-600 transition-colors">
              <Search size={20} />
            </button>
            <div className="h-6 w-px bg-secondary-200 mx-2"></div>
            <Button variant="ghost" size="sm">Log In</Button>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary-900"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-secondary-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-4 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-secondary-50 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button variant="outline" fullWidth>Log In</Button>
                <Button fullWidth>Get Started</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Send, Camera, Briefcase, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { name: 'Features', path: '#' },
        { name: 'Solutions', path: '#' },
        { name: 'Pricing', path: '#' },
        { name: 'Updates', path: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '#' },
        { name: 'Careers', path: '#' },
        { name: 'Contact', path: '#' },
        { name: 'Blog', path: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { name: 'Help Center', path: '#' },
        { name: 'Documentation', path: '#' },
        { name: 'Community', path: '#' },
        { name: 'Status', path: '#' },
      ],
    },
  ];

  return (
    <footer className="w-full bg-secondary-950 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">AVADA</span>
            </Link>
            <p className="text-secondary-400 mb-8 max-w-sm">
              The ultimate multi-purpose React theme for modern businesses. Build professional websites with ease using our modular section builder.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Send size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Briefcase size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <MessageCircle size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Camera size={18} />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="font-display font-bold text-lg mb-6">{column.title}</h3>
              <ul className="space-y-4">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.path} className="text-secondary-400 hover:text-primary-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h3 className="font-display font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-secondary-400">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>123 Business Ave, Suite 100, Silicon Valley, CA</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-400">
                <Phone size={18} className="flex-shrink-0 text-primary-500" />
                <span>+1 (555) 000-0000</span>
              </li>
              <li className="flex items-center space-x-3 text-secondary-400">
                <Mail size={18} className="flex-shrink-0 text-primary-500" />
                <span>hello@avada-react.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-secondary-500 text-sm">
            © {currentYear} Avada React Theme. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-secondary-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

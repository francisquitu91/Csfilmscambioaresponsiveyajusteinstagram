import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="w-5 h-5 text-gray-600" />
            <a href="mailto:productoracsfilms@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              productoracsfilms@gmail.com
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="w-5 h-5 text-gray-600" />
            <a href="tel:+56944643005" className="text-gray-600 hover:text-gray-900 transition-colors">
              +56 9 4464 3005
            </a>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="w-5 h-5 text-gray-600" />
            <span className="text-gray-600">
              Valparaíso, Chile
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-2">
            <Instagram className="w-5 h-5 text-gray-600" />
            <a 
              href="https://www.instagram.com/csfilmsss/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              @csfilmsss
            </a>
          </div>
        </div>

        {/* Powered by */}
        <div className="flex items-center justify-center space-x-2 pt-4 border-t border-gray-200">
          <span className="text-gray-600">Powered by</span>
          <a 
            href="https://comerciandola.cl" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105"
          >
            <img 
              src="https://i.ibb.co/4S9kyFR/Whats-App-Image-2024-12-08-at-6-48-11-PM.jpg" 
              alt="Comerciándola Logo" 
              className="h-8 w-auto"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
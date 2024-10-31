import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-white mb-6">éra</h3>
            <p className="text-sm leading-relaxed">
              L'élégance intemporelle inspirée par l'héritage des années 1920. Chaque pièce raconte une histoire.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Collections</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Nouveautés</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors duration-300">À propos</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>contact@era-fashion.com</li>
              <li>+33 1 23 45 67 89</li>
              <li>15 Rue de la Mode<br />75001 Paris, France</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-white mb-6">Suivez-nous</h4>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors duration-300">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-light text-sm text-center">
          <p>© 2024 éra. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <span className="font-serif text-2xl tracking-wide text-primary">éra</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary hover:text-accent transition-colors duration-300">Collections</a>
            <a href="#" className="text-primary hover:text-accent transition-colors duration-300">Nouveautés</a>
            <a href="#" className="text-primary hover:text-accent transition-colors duration-300">Blog</a>
            <a href="#" className="text-primary hover:text-accent transition-colors duration-300">À propos</a>
          </div>

          <div className="flex items-center space-x-6">
            <button 
              className="p-2 text-primary hover:text-accent transition-colors duration-300 relative"
              onClick={() => dispatch({ type: 'TOGGLE_CART' })}
            >
              <ShoppingBag className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>
            <button 
              className="md:hidden p-2 text-primary hover:text-accent transition-colors duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 pt-2 pb-3 space-y-1 bg-white border-t border-stone-200">
          <a href="#" className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-300">Collections</a>
          <a href="#" className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-300">Nouveautés</a>
          <a href="#" className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-300">Blog</a>
          <a href="#" className="block px-3 py-2 text-primary hover:text-accent transition-colors duration-300">À propos</a>
        </div>
      </div>
    </nav>
  );
}
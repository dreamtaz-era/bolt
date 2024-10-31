import React from 'react';
import { useCart } from '../context/CartContext';

const collections = [
  {
    id: 1,
    name: 'Les Essentiels',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80',
    description: 'Les pièces intemporelles qui définissent le style éra',
    price: '195'
  },
  {
    id: 2,
    name: 'L\'Époque',
    image: 'https://images.unsplash.com/photo-1582274528667-1e8d95a0f486?auto=format&fit=crop&q=80',
    description: 'Une collection inspirée des années folles',
    price: '245'
  },
  {
    id: 3,
    name: 'Heritage',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80',
    description: 'L\'élégance britannique réinventée',
    price: '275'
  }
];

export default function Collections() {
  const { dispatch } = useCart();

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest font-medium mb-4 block">
            Nos Collections
          </span>
          <h2 className="section-title">Artisanat & Élégance</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Chaque pièce est confectionnée avec le plus grand soin, alliant tradition et modernité
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {collections.map((collection) => (
            <div key={collection.id} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={collection.image} 
                  alt={collection.name}
                  className="w-full h-128 object-cover card-hover"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl mb-2">{collection.name}</h3>
                <p className="text-stone-600 mb-4">{collection.description}</p>
                <span className="block text-lg font-medium text-accent mb-4">€{collection.price}</span>
                <button 
                  className="btn-primary w-full"
                  onClick={() => dispatch({
                    type: 'ADD_ITEM',
                    payload: {
                      id: collection.id,
                      name: collection.name,
                      price: `€${collection.price}`,
                      image: collection.image,
                      quantity: 1
                    }
                  })}
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
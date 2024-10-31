import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[90vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 craft-gradient"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="text-accent-dark uppercase tracking-widest font-medium mb-4 block">
              Collection Automne 2024
            </span>
            <h1 className="font-serif text-5xl md:text-7xl text-white mb-6 leading-tight">
              L'élégance intemporelle
            </h1>
            <p className="text-stone-200 text-lg md:text-xl mb-8 leading-relaxed">
              Découvrez notre collection inspirée par l'âge d'or de l'élégance masculine
            </p>
            <button className="btn-primary">
              Explorer la Collection
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent"></div>
    </div>
  );
}
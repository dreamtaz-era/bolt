import React from 'react';

const articles = [
  {
    id: 1,
    title: 'L\'Art du Sur-Mesure',
    excerpt: 'Découvrez les secrets de notre atelier et l\'expertise de nos artisans.',
    image: 'https://images.unsplash.com/photo-1558304970-abd589baebe5?auto=format&fit=crop&q=80',
    date: '15 Mars 2024',
    category: 'Savoir-faire'
  },
  {
    id: 2,
    title: 'Les Codes Vestimentaires des Années 20',
    excerpt: 'Un guide complet sur l\'élégance masculine de l\'entre-deux-guerres.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80',
    date: '10 Mars 2024',
    category: 'Histoire'
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-accent uppercase tracking-widest font-medium mb-4 block">
            Journal
          </span>
          <h2 className="section-title">L'Art de l'Élégance</h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Explorez notre univers à travers des articles sur l'artisanat, l'histoire et le style
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {articles.map((article) => (
            <article key={article.id} className="group">
              <div className="relative overflow-hidden mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-96 object-cover card-hover"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300"></div>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-accent uppercase tracking-wider text-sm">
                    {article.category}
                  </span>
                  <time className="text-stone-500 text-sm">{article.date}</time>
                </div>
                <h3 className="font-serif text-2xl mb-3 group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-stone-600 mb-4">{article.excerpt}</p>
                <button className="text-accent font-medium hover:text-accent-dark transition-colors duration-300">
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
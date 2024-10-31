import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Cart from './components/Cart';

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-gray-900">
      <Navbar />
      <Cart />
      <main>
        <Hero />
        <Collections />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
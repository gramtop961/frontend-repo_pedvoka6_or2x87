import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      <NavBar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

export default App;

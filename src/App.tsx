import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PoolComparison from './components/PoolComparison';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeadMagnetTrigger from './components/LeadMagnetTrigger';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PoolComparison />
      <Services />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
      <LeadMagnetTrigger />
    </div>
  );
}

export default App;
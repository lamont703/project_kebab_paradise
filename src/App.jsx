import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

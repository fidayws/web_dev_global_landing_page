import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" />
        ) : (
          <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-white">
            <Header />
            <main className="relative">
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent pointer-events-none" />
              
              {/* Content */}
              <div className="relative">
                <Hero />
                <Services />
                <Technologies />
                <Portfolio />
                <Process />
                <Testimonials />
                <FAQ />
                <Contact />
              </div>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
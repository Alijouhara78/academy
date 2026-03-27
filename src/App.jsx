import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './components/Header/Header';
import Activities from './components/Activities/Activities'; 
import Hero from './components/Hero/Hero';

import Courses from './components/Courses/Courses';
import Registration from './components/Registration/Registration';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import TourPage from './components/Tour/TourPage';
import Chatbot from './components/Chatbot/Chatbot'; 

import './App.css';

function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('cinematic-reveal-active');
        }
      });
    }, observerOptions);

    const targets = document.querySelectorAll('.cinematic-reveal');
    targets.forEach((el) => observer.observe(el));

    return () => targets.forEach((el) => observer.unobserve(el));
  }, [currentView]);

  return (
    <div className="app-cinematic-container" dir="rtl">
      <div className="cinematic-space-bg">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
        <div className="stars-layer"></div>
      </div>

      <Chatbot />

      <AnimatePresence mode="wait">
        {currentView === 'tour' ? (
          <motion.div
            key="tour-view"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="tour-wrapper"
          >
            <TourPage onBack={() => setCurrentView('home')} />
          </motion.div>
        ) : (
          <motion.div
            key="home-view"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.6 }}
            className="home-wrapper"
          >
            <Header onOpenTour={() => setCurrentView('tour')} />
            <main>
              <Hero onOpenTour={() => setCurrentView('tour')} />
              <div className="cinematic-reveal">
                <Activities />
              </div>
              <div className="cinematic-reveal">
                <Courses />
              </div>
              <div className="cinematic-reveal">
                <Registration />
              </div>
              <div className="cinematic-reveal">
                <Map />
              </div>
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
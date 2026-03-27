import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PlayCircle, MapPin } from 'lucide-react';
import './Header.css';
import logo from '../../logo.png';

const navLinks = [
  { label: 'الرئيسية', href: '#home' },
  { label: 'البرامج الأكاديمية', href: '#courses' },
  { label: 'التسجيل', href: '#register' },
];

const Header = ({ onOpenTour }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // تغيير مظهر الهيدر عند التمرير (Glassmorphism Effect)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`glass-header ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="header-container">
        <a className="brand-cinematic" href="#home">
          <div className="logo-glow-wrap">
            <img src={logo} alt="مدرسة الأكاديمية الخاصة" className="nav-logo" />
          </div>
          <div className="brand-text-stack">
            <span className="brand-title">مدرسة الأكاديمية الخاصة</span>
            <span className="brand-subtitle">نصنع المستقبل</span>
          </div>
        </a>

        <nav className="desktop-nav-glass">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className="nav-item-glass">
              {item.label}
              <span className="hover-line"></span>
            </a>
          ))}
        </nav>

        <div className="header-actions">
          {/* زر الجولة الافتراضية المضاف حديثاً */}
          <button className="tour-trigger-btn" onClick={onOpenTour}>
            <PlayCircle size={18} className="pulse-icon" />
            <span>جولة في المدرسة</span>
          </button>

          <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* قائمة الموبايل السينمائية */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-glass-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="mobile-menu-inner">
              {navLinks.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <button className="mobile-tour-btn" onClick={() => { onOpenTour(); setOpen(false); }}>
                <PlayCircle size={18} /> بدء الجولة الافتراضية
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
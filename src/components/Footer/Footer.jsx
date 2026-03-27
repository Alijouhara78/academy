import React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-top-line"></div>
      
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p className="copyright-text">
              © {currentYear} <span className="gold-text">الأكاديمية الخاصة</span> — نصنع المستقبل بمنهجية عالمية.
            </p>
          </div>

          <nav className="footer-nav">
            <a href="#home" className="footer-link">الرئيسية</a>
            <a href="#courses" className="footer-link">البرامج</a>
            <a href="#register" className="footer-link">التسجيل</a>
            <a href="#location" className="footer-link">موقعنا</a>
          </nav>

          <div className="footer-socials">
            <a href="#" className="social-icon"><Instagram size={18} /></a>
            <a href="#" className="social-icon"><Twitter size={18} /></a>
            <a href="#" className="social-icon"><Linkedin size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
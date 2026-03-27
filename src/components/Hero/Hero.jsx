import React from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Sparkles,
  ArrowLeft,
  ShieldCheck,
  GraduationCap,
  BookOpen,
  Users,
  Star,
} from 'lucide-react';
import './Hero.css';

const Hero = ({ onOpenTour }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section className="hero-cinematic" id="home">
      <div className="hero-bg-blobs" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      <div className="hero-container">
        <motion.div
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="hero-copy">
            <motion.div variants={itemVariants} className="hero-badge-glass">
              <div className="badge-shimmer" />
              <Sparkles size={16} className="gold-icon pulse" />
              <span>المكان الأفضل لبناء المستقبل</span>
            </motion.div>

            <motion.h2 variants={itemVariants} className="hero-title">
              نؤمن بأن كل طالب
              <br />
              هو قصة <span className="text-glow-gold">نجاح</span>
            </motion.h2>

       
         
          
          </div>

          <motion.div variants={itemVariants} className="hero-visual">
            <div className="school-card">
              <div className="school-card-top">
                <div className="school-card-rings" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>

                <div className="school-card-badge">
                  <BookOpen size={16} />
                  <span>نبذة عن المدرسة</span>
                </div>
              </div>

              <h2>مدرسة الأكاديمية الخاصة – قرى الشام</h2>

              <p>
                مؤسسة تعليمية خاصة تقدم برنامجًا أكاديميًا متوازنًا، يركز على بناء شخصية
                الطالب، وتنمية مهاراته العلمية والعملية ضمن بيئة حديثة ومنظمة.
              </p>

              <div className="school-points">
                <div className="school-point">
                  <Users size={18} />
                  <span>كادر تدريسي مؤهل</span>
                </div>
                <div className="school-point">
                  <ShieldCheck size={18} />
                  <span>تنظيم وانضباط</span>
                </div>
                <div className="school-point">
                  <Star size={18} />
                  <span>اهتمام بالتفوق والتميز</span>
                </div>
              </div>

              <div className="school-card-footer">
                <span>قرى الشام – ريف دمشق</span>
                <span>المكان الأفضل لبناء المستقبل</span>
              </div>
            </div>

          </motion.div>
            <motion.div variants={itemVariants} className="hero-stats-glass">
              <div className="stat-card">
                <div className="stat-icon-bg">
                  <ShieldCheck size={20} className="gold-icon" />
                </div>
                <div className="stat-text">
                  <strong>بيئة آمنة</strong>
                  <span>أجواء تربوية مستقرة</span>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon-bg">
                  <GraduationCap size={20} className="gold-icon" />
                </div>
                <div className="stat-text">
                  <strong>تعليم متكامل</strong>
                  <span>من الروضة حتى الثانوية</span>
                </div>
              </div>
               <button type="button" className="secondary-btn-glass" onClick={onOpenTour}>
                <div className="play-icon-wrap">
                  <Play size={18} fill="currentColor" />
                </div>
                <span>جولة افتراضية</span>
              </button>
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
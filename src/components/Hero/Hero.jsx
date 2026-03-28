import React from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Sparkles,
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
              {/* تعديل النص ليشمل سوريا */}
              <span>أفضل نظام تعليمي خاص في سوريا</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="hero-title">
              مدرسة الأكاديمية الخاصة
              <br />
              <span className="text-glow-gold">بوابة التفوق في دمشق</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="hero-description">
               نقدم بيئة تعليمية متطورة تدمج بين التكنولوجيا والقيم التربوية، لتكون مدرستنا الخيار الأول للأهالي الباحثين عن التميز في دمشق وريفها.
            </motion.p>
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
                  <span>عن مدرسة الأكاديمية</span>
                </div>
              </div>

              {/* استخدام H2 هنا ممتاز للسيو الهيكلي */}
              <h2>التميز التعليمي في قرى الشام – دمشق</h2>

              <p>
                نعد طلابنا ليكونوا قادة المستقبل عبر برامج أكاديمية معتمدة في سوريا، 
                تركز على الابتكار والانضباط ضمن حرم مدرسي متطور بضواحي دمشق.
              </p>

              <div className="school-points">
                <div className="school-point">
                  <Users size={18} />
                  <span>أكفأ مدرسي دمشق</span>
                </div>
                <div className="school-point">
                  <ShieldCheck size={18} />
                  <span>انضباط وأمان تام</span>
                </div>
                <div className="school-point">
                  <Star size={18} />
                  <span>أعلى معدلات التفوق</span>
                </div>
              </div>

              <div className="school-card-footer">
                <span>قرى الشام – ريف دمشق – سوريا</span>
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
                <strong>من الروضة للثانوية</strong>
                <span>تعليم شامل بدمشق</span>
              </div>
            </div>

            <button type="button" className="secondary-btn-glass" onClick={onOpenTour}>
              <div className="play-icon-wrap">
                <Play size={18} fill="currentColor" />
              </div>
              <span>جولة افتراضية في المدرسة</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

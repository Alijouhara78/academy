import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FlaskConical, GraduationCap, ChevronLeft } from 'lucide-react';
import './Courses.css';

const courses = [
  { 
    icon: <Globe size={32} />, 
    title: 'المنهج الدولي', 
    desc: 'برنامج مبني على معايير حديثة لتطوير مهارات التفكير النقدي والبحث العلمي لدى الطلاب.' 
  },
  { 
    icon: <FlaskConical size={32} />, 
    title: 'المختبرات الذكية', 
    desc: 'تجارب عملية مدعومة بأدوات واقع افتراضي وتقنيات حديثة لتثبيت المفاهيم العلمية.' 
  },
  { 
    icon: <GraduationCap size={32} />, 
    title: 'الدعم الأكاديمي', 
    desc: 'متابعة فردية دقيقة وخطط تحسين مخصصة لكل طالب لضمان التقدم المستمر.' 
  }
];

const Courses = () => {
  return (
    <section className="courses-section" id="courses">
      <div className="section-header">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="section-tag"
        >
          برامج متميزة
        </motion.span>
        <h2 className="section-title">محاورنا التعليمية</h2>
        <div className="section-underline"></div>
      </div>

      <div className="courses-grid">
        {courses.map((course, index) => (
          <motion.article
            key={index}
            className="course-card-glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <div className="card-inner">
              <div className="course-icon-wrap">
                <div className="icon-glow"></div>
                {course.icon}
              </div>
              
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-desc">{course.desc}</p>
              
              <div className="card-footer">
                <span>اكتشف المزيد</span>
                <ChevronLeft size={16} />
              </div>
            </div>
            {/* لمعة زجاجية خفية تظهر عند التحويم */}
            <div className="card-border-gradient"></div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Courses;
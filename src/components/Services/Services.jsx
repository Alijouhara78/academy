// src/components/Services/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Globe, FlaskConical, GraduationCap } from 'lucide-react';
import './Services.css';

// فصل البيانات خارج المكون (Best Practice)
const SERVICES_DATA = [
  { id: 1, title: "المنهج الدولي", icon: <Globe />, desc: "تعليم بمعايير عالمية تفتح آفاق المستقبل." },
  { id: 2, title: "المختبرات الذكية", icon: <FlaskConical />, desc: "تطبيق عملي بأحدث التقنيات العلمية." },
  { id: 3, title: "الدعم الأكاديمي", icon: <GraduationCap />, desc: "متابعة فردية لضمان تفوق كل طالب." }
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <h2 className="section-title">خدماتنا <span className="red-text">الاحترافية</span></h2>
      <div className="services-grid">
        {SERVICES_DATA.map((item, index) => (
          <motion.div 
            key={item.id} // استخدام ID فريد بدلاً من index متى ما أمكن
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // تحسين الأداء: تشغيل الحركة مرة واحدة فقط عند الظهور
            transition={{ delay: index * 0.2 }}
            className="service-card"
          >
            <div className="icon-box">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
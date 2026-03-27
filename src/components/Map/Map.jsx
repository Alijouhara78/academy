import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Map.css';

const Map = () => {
  return (
    <section className="map-section" id="location">
      <div className="section-header-map">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          موقعنا <span className="gold-text">الاستراتيجي</span>
        </motion.h2>
        <p className="section-subtitle">نحن بانتظار زيارتك في قلب العاصمة لنرسم معاً مستقبل أبنائك.</p>
      </div>

      <div className="map-container-wrap">
        <div className="map-grid-cinematic">
          {/* كرت المعلومات الزجاجي */}
          <motion.div
            className="contact-card-glass"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="card-heading">معلومات التواصل</h3>
            
            <div className="contact-info-list">
              <div className="contact-item-glass">
                <div className="icon-box"><MapPin size={20} /></div>
                <div className="text-box">
                  <strong>العنوان الرئيسي</strong>
                  <span>دمشق - تنظيم كفرسوسة - شارع الأكاديميات</span>
                </div>
              </div>

              <div className="contact-item-glass">
                <div className="icon-box"><Phone size={20} /></div>
                <div className="text-box">
                  <strong>هاتف الاستعلامات</strong>
                  <span dir="ltr">+963 11 000 0000</span>
                </div>
              </div>

              <div className="contact-item-glass">
                <div className="icon-box"><Mail size={20} /></div>
                <div className="text-box">
                  <strong>البريد الأكاديمي</strong>
                  <span>admissions@academy.edu.sy</span>
                </div>
              </div>

              <div className="contact-item-glass">
                <div className="icon-box"><Clock size={20} /></div>
                <div className="text-box">
                  <strong>ساعات الدوام</strong>
                  <span>الأحد - الخميس (08:00 AM - 03:00 PM)</span>
                </div>
              </div>
            </div>

            <button className="directions-btn">
              احصل على الاتجاهات
            </button>
          </motion.div>

          {/* إطار الخريطة السينمائي */}
          <motion.div
            className="map-frame-wrapper"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="map-overlay-glow"></div>
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3326.6576!2d36.2765!3d33.5138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMwJzQ5LjciTiAzNsKwMTYnMzUuNCJF!5e0!3m2!1sar!2ssy!4v1620000000000!5m2!1sar!2ssy"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Map;
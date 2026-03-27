import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, User, Mail, GraduationCap, CheckCircle } from 'lucide-react';
import './Registration.css';

const Registration = () => {
  const [form, setForm] = useState({ studentName: '', email: '', stage: '' });
  const [status, setStatus] = useState({ loading: false, message: '', success: false });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', success: false });

    // محاكاة إرسال البيانات (API Simulation)
    setTimeout(() => {
      setStatus({ 
        loading: false, 
        message: 'تم استلام طلبك بنجاح. سنتواصل معك قريباً.',
        success: true 
      });
      setForm({ studentName: '', email: '', stage: '' });
    }, 2000);
  };

  return (
    <section className="registration-section" id="register">
      <div className="registration-container">
        <motion.div 
          className="registration-glass-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* الجانب الأيسر: المعلومات */}
          <div className="registration-info-side">
            <div className="reg-badge">متاح الآن - العام الدراسي 2026</div>
            <h2 className="reg-title">ابدأ رحلتك <br/> <span className="gold-gradient-text">نحو التميز</span></h2>
            <p className="reg-desc">
              انضم إلى بيئة تعليمية تتبنى أحدث التقنيات العالمية. املأ البيانات وسيتواصل معك مستشارنا الأكاديمي خلال 24 ساعة.
            </p>
            
            <ul className="reg-features">
              <li><CheckCircle size={18} className="gold-icon" /> تقييم مستوى مجاني</li>
              <li><CheckCircle size={18} className="gold-icon" /> جولة ميدانية في الحرم التعليمي</li>
              <li><CheckCircle size={18} className="gold-icon" /> خصومات للتسجيل المبكر</li>
            </ul>
          </div>

          {/* الجانب الأيمن: النموذج */}
          <div className="registration-form-side">
            <form onSubmit={handleSubmit} className="reg-form">
              <div className="input-group">
                <User className="input-icon" size={20} />
                <input 
                  type="text" name="studentName" 
                  value={form.studentName} onChange={handleChange} 
                  placeholder="اسم الطالب الثلاثي" required 
                />
              </div>

              <div className="input-group">
                <Mail className="input-icon" size={20} />
                <input 
                  type="email" name="email" 
                  value={form.email} onChange={handleChange} 
                  placeholder="البريد الإلكتروني لولي الأمر" required 
                />
              </div>

              <div className="input-group">
                <GraduationCap className="input-icon" size={20} />
                <select name="stage" value={form.stage} onChange={handleChange} required>
                  <option value="" disabled>اختر المرحلة الدراسية</option>
                  <option value="kindergarten">الروضة</option>
                  <option value="primary">الابتدائية</option>
                  <option value="preparatory">الإعدادية</option>
                  <option value="secondary">الثانوية</option>
                </select>
              </div>

              <button type="submit" className="reg-submit-btn" disabled={status.loading}>
                {status.loading ? (
                  <span className="loader"></span>
                ) : (
                  <>إرسال طلب الانضمام <Send size={18} /></>
                )}
              </button>

              <AnimatePresence>
                {status.message && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className={`status-msg ${status.success ? 'success' : 'error'}`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
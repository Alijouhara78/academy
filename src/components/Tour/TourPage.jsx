import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
// استيراد مكونات Swiper React
import { Swiper, SwiperSlide } from "swiper/react";
// استيراد موديلات Swiper (Navigation للاسهم)
import { Navigation, EffectFade, Keyboard } from "swiper/modules";
// استيراد ستايلات Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // لتأثير التلاشي الناعم

import "./TourPage.css";

// استيراد الصور (تأكد من صحة المسارات)
import bgKinder from "../../assets/kindergarten.jpg";
import bgPrimary from "../../assets/primary.jpg";
import bgPrep from "../../assets/preparatory.jpg";
import bgSec from "../../assets/secondary.jpg";

const stages = [
  {
    id: 1,
    title: "قسم الروضة",
    description: "بداية الرحلة.. بيئة آمنة ومحفزة تركز على تنمية مهارات الطفل.",
    image: bgKinder,
    avatarScale: 0.7, 
  },
  {
    id: 2,
    title: "المرحلة الابتدائية",
    description: "بناء الأساس المتين غرس القيم وتطوير المهارات الأساسية بأساليب حديثة.",
    image: bgPrimary,
    avatarScale: 1.0, 
  },
  {
    id: 3,
    title: "المرحلة الإعدادية",
    description: "مرحلة الاكتشاف.. تعزيز استقلالية الطالب وتوجيه شغفه نحو مجالات المعرفة.",
    image: bgPrep,
    avatarScale: 1.2, 
  },
  {
    id: 4,
    title: "المرحلة الثانوية",
    description: "الانطلاق نحو المستقبل.. إعداد أكاديمي مكثف وتوجيه مهني يضمن التفوق.",
    image: bgSec,
    avatarScale: 1.4, 
  }
];

const TourPage = ({ onBack }) => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const swiperRef = useRef(null);

  // تحديث حالة المؤشر عند تغيير السلايد
  const handleSlideChange = (swiper) => {
    setCurrentStageIndex(swiper.activeIndex);
  };

  return (
    <div className="tour-cinematic-container" dir="rtl">
      {/* زر العودة (ثابت فوق كل شيء) */}
      <button className="back-btn-cinematic" onClick={onBack}>
        العودة الرئيسية
      </button>

      {/* سلايدر الصور ملء الشاشة (Swiper) */}
      <Swiper
        modules={[Navigation, EffectFade, Keyboard]}
        effect={"fade"} // تأثير انتقالي سينمائي (تلاشي)
        speed={1000} // سرعة الانتقال (ثانية واحدة)
        navigation={true} // تفعيل الأسهم الافتراضية
        keyboard={{ enabled: true }} // تفعيل الانتقال بالأسهم في الكيبورد
        onSlideChange={handleSlideChange}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="fullscreen-swiper"
      >
        {stages.map((stage) => (
          <SwiperSlide key={stage.id}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `url(${stage.image})` }}
            >
              <div className="cinematic-overlay"></div>
              
              {/* المحتوى النصي (يظهر بأنيميشن داخل كل سلايد) */}
              <motion.div 
                className="stage-text-content"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <h2 className="cinematic-title">{stage.title}</h2>
                <p className="cinematic-desc">{stage.description}</p>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* تأثير الطالب الذي يكبر (طبقة فوق السلايدر) */}
      <div className="avatar-fixed-overlay">
        <motion.div
          className="student-avatar-cinematic"
          animate={{
            scale: stages[currentStageIndex].avatarScale,
          }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          {/* يمكنك استبدال الدائرة الذهبية بموديل 3D أو صورة شفافة لطالب */}
          <div className="avatar-circle">
            <GraduationCap size={40} color="#1A1B4B" />
          </div>
        </motion.div>
      </div>

      {/* شريط تقدم سفلي بسيط (اختياري) */}
      <div className="bottom-progress">
        {currentStageIndex + 1} / {stages.length}
      </div>
    </div>
  );
};

// أيقونة توضيحية (تأكد من تثبيت lucide-react)
import { GraduationCap } from "lucide-react";

export default TourPage;
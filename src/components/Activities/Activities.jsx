import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Image as ImageIcon } from "lucide-react";
import "./Activities.css";

const activitiesData = [
  {
    id: 1,
    title: "رحلة علمية إلى المتحف",
    date: "15 مارس 2026",
    image: "/images/activity1.jpg",
  },
  {
    id: 2,
    title: "فعالية يوم العلوم",
    date: "10 مارس 2026",
    image: "/images/activity2.jpg",
  },
  {
    id: 3,
    title: "مسابقة الرسم",
    date: "5 مارس 2026",
    image: "/images/activity3.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Activities = () => {
  return (
    <section className="activities-section" id="activities">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2>آخر الأنشطة</h2>
          <p>تابع أحدث الفعاليات والأنشطة في مدرستنا</p>
        </motion.div>

        <motion.div
          className="activities-grid"
          variants={container}
          initial="hidden"
          whileInView="visible"
        >
          {activitiesData.map((activity) => (
            <motion.div key={activity.id} variants={item} className="activity-card">
              
              <div className="activity-image">
                <img src={activity.image} alt={activity.title} />
                <div className="image-overlay">
                  <ImageIcon size={22} />
                </div>
              </div>

              <div className="activity-content">
                <h3>{activity.title}</h3>

                <div className="activity-date">
                  <CalendarDays size={16} />
                  <span>{activity.date}</span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
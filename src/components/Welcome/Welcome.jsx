import React, { useState, useEffect } from "react";
import { 
  BookOpen, 
  Microscope, 
  Baby, 
  PenTool, 
  Bus, 
  Utensils, 
  Laptop, 
  Stethoscope, 
  ChevronLeft 
} from "lucide-react"; // تأكد من تثبيت المكتبة: npm install lucide-react
import "./welcome.css";
import logo from "../../logo.png";

// --- 1. قسم البيانات (Data Arrays) لمنع التكرار ---

const navLinks = ["الرئيسية", "عن المدرسة", "الأقسام", "الأخبار", "التسجيل"];

const quickStats = [
  { id: 1, value: "+600", label: "طالباً" },
  { id: 2, value: "15+", label: "مختبراً" },
  { id: 3, value: "%100", label: "تميز" },
];

const departments = [
  { 
    id: 1, 
    title: "رياض الأطفال", 
    desc: "تأسيس قائم على الاستكشاف والتعلم الحسي", 
    icon: <Baby size={40} strokeWidth={1.5} />,
    active: false
  },
  { 
    id: 2, 
    title: "المرحلة الابتدائية", 
    desc: "بناء المهارات الأساسية بأساليب تفاعلية حديثة", 
    icon: <BookOpen size={40} strokeWidth={1.5} />,
    active: true // القسم البارز
  },
  { 
    id: 3, 
    title: "المرحلة الثانوية", 
    desc: "إعداد جامعي مكثف ومسارات مهنية متقدمة", 
    icon: <Microscope size={40} strokeWidth={1.5} />,
    active: false
  },
];

const services = [
  { id: 1, title: "نقل آمن", icon: <Bus size={32} /> },
  { id: 2, title: "تغذية صحية", icon: <Utensils size={32} /> },
  { id: 3, title: "منصة إلكترونية", icon: <Laptop size={32} /> },
  { id: 4, title: "رعاية صحية", icon: <Stethoscope size={32} /> },
];

const newsFeed = [
  { id: 1, date: "12 مارس 2024", title: "انطلاق فعاليات الأسبوع الرياضي السنوي" },
  { id: 2, date: "10 مارس 2024", title: "ورشة عمل حول الذكاء الاصطناعي في التعليم" },
];


// --- 2. المكون الرئيسي (Main Component) ---

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="main-site-container content-wrapper" dir="rtl">
      
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? "nav-active" : ""}`}>
        <div className="nav-content">
          <div className="nav-logo">
            <img src={logo} alt="شعار الأكاديمية" />
            <span className="nav-name">الأكاديمية</span>
          </div>
          <ul className="nav-links">
            {navLinks.map((link, index) => (
              <li key={index}>{link}</li>
            ))}
          </ul>
          <button className="nav-cta">اتصل بنا</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title animate-pop">
            نصنعُ القادة.. <span className="gold-text">بمعايير عالمية</span>
          </h1>
          <p className="hero-subtitle">بيئة تعليمية ملهمة تجمع بين التكنولوجيا والقيم الراسخة</p>
          <div className="hero-btns">
            <button className="btn-primary">ابدأ الجولة الافتراضية</button>
            <button className="btn-secondary">طلب انتساب</button>
          </div>
        </div>
        
        <div className="quick-stats">
          {quickStats.map((stat) => (
            <div className="q-stat" key={stat.id}>
              <span>{stat.value}</span> {stat.label}
            </div>
          ))}
        </div>
      </header>

      {/* Principal Welcome */}
      <section className="principal-welcome">
        <div className="parchment-wrapper">
          <div className="parchment-card">
            <h2 className="section-title">رسالة المؤسسة</h2>
            <p>
              "في مدرستنا، لا نقوم فقط بنقل المعرفة، بل نزرع الشغف والابتكار. نحن نؤمن بأن كل طفل 
              هو مشروع قائد، ومهمتنا هي توفير الأدوات والبيئة التي تسمح لهذا النور بالسطوع."
            </p>
            <div className="signature">المدير العام</div>
            <PenTool className="feather" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="school-departments">
        <h2 className="title-glow">المراحل التعليمية</h2>
        <div className="dept-grid">
          {departments.map((dept) => (
            <div className={`dept-card ${dept.active ? "active" : ""}`} key={dept.id}>
              <div className="dept-icon">{dept.icon}</div>
              <h3>{dept.title}</h3>
              <p>{dept.desc}</p>
              <button className="btn-text">
                اكتشف المزيد <ChevronLeft size={16} style={{ verticalAlign: "middle" }} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="latest-news">
        <div className="section-header">
          <h2>أحدث الفعاليات</h2>
          <button className="view-all">كل الأخبار</button>
        </div>
        <div className="news-grid">
          {/* Main News Card */}
          <div className="news-item main-news">
            {/* ملاحظة: تم تغيير رابط unsplash لأنه توقف عن العمل مؤخراً، استخدمت رابطاً بديلاً للصور العشوائية */}
            <div className="news-img" style={{backgroundImage: 'url(https://picsum.photos/800/600?education)'}}></div>
            <div className="news-info">
              <span className="tag">إنجاز</span>
              <h4>المدرسة تحصد المركز الأول في مسابقة الروبوتات</h4>
            </div>
          </div>
          
          {/* Small News Column */}
          <div className="news-column news-scroll-box">
            {newsFeed.map((news) => (
              <div className="news-small news-card" key={news.id}>
                <span className="news-date">{news.date}</span>
                <h5>{news.title}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campus Gallery */}
      <section className="campus-section">
        <div className="campus-text">
          <h2 className="gold-text">حرم مدرسي متطور</h2>
          <p>مرافق صممت لتلبي طموحات الجيل الجديد: فصول ذكية، ملاعب أولمبية، ومختبرات علمية حديثة.</p>
          <div className="section-label">اكتشف مرافقنا</div>
        </div>
        <div className="campus-gallery">
          <div className="gallery-item g1"><span>المختبرات</span></div>
          <div className="gallery-item g2"><span>المسرح</span></div>
          <div className="gallery-item g3"><span>الملاعب</span></div>
        </div>
      </section>

      {/* Services */}
      <section className="services-section services-row">
        {services.map((service) => (
          <div className="service-item" key={service.id}>
            <div className="s-icon">{service.icon}</div>
            <h4>{service.title}</h4>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="footer-cols">
          <div className="f-col">
            <img src={logo} alt="Logo" className="f-logo" />
            <p>بوابتكم نحو مستقبل أكاديمي مشرق.</p>
          </div>
          <div className="f-col">
            <h4>روابط سريعة</h4>
            <ul>
              <li>سياسة القبول</li>
              <li>التقويم المدرسي</li>
              <li>بوابة ولي الأمر</li>
            </ul>
          </div>
          <div className="f-col">
            <h4>تواصل معنا</h4>
            <p>ريف دمشق - قرى الشام</p>
            <p dir="ltr" style={{textAlign: 'right'}}>0948 884 789</p>
          </div>
        </div>
        <div className="footer-bottom">
          جميع الحقوق محفوظة © {new Date().getFullYear()} - المدرسة الأكاديمية الخاصة
        </div>
      </footer>
      
    </div>
  );
};

export default Home;
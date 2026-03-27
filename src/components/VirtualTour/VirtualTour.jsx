import React from 'react';
import { useNavigate } from 'react-router-dom';

const VirtualTour = () => {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-primary)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem'
    }}>
      <h1>جولة افتراضية</h1>
      <p>سيتم إضافة المحتوى هنا في المرحلة التالية</p>
      <button
        onClick={() => navigate('/')}
        style={{
          marginTop: '2rem',
          padding: '0.8rem 1.5rem',
          background: 'var(--color-gold)',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        العودة إلى الرئيسية
      </button>
    </div>
  );
};

export default VirtualTour;
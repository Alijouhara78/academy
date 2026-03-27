import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSend, FiMessageCircle, FiX } from 'react-icons/fi';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 'bot-0', text: "أهلاً بك في الأكاديمية الخاصة! كيف يمكنني مساعدتك؟", sender: 'bot' }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userText = input;
    const botLoadingId = `bot-loading-${Date.now()}`;

    // 1. إظهار رسالة المستخدم وحالة "جاري التفكير"
    setMessages(prev => [...prev, { id: `user-${Date.now()}`, text: userText, sender: 'user' }]);
    setInput("");
    setIsLoading(true);
    setMessages(prev => [...prev, { id: botLoadingId, text: "جاري التفكير...", sender: 'bot' }]);

    try {
      // 2. الرابط الخاص بك على Vercel (تأكد من إضافة /api/chat في آخره)
const vrcelUrl = "https://academy-api-blond.vercel.app/api/chat";
      const response = await fetch(vrcelUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText }) 
      });

      const data = await response.json();

      if (data.error) throw new Error(data.error);

      // 3. عرض رد البوت الحقيقي القادم من Gemini عبر خادمك
      setMessages(prev => prev.map(msg => 
        msg.id === botLoadingId ? { ...msg, text: data.reply } : msg
      ));

    } catch (error) {
      console.error("Connection Error:", error);
      setMessages(prev => prev.map(msg => 
        msg.id === botLoadingId ? { ...msg, text: "عذراً، حدث خطأ في الاتصال بالخادم. حاول مجدداً." } : msg
      ));
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="chatbot-container" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
            style={{ width: '350px', height: '450px', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.15)', display: 'flex', flexDirection: 'column', overflow: 'hidden', marginBottom: '75px' }}
          >
            <div style={{ padding: '15px', background: '#1e3a8a', color: '#fff', display: 'flex', justifyContent: 'space-between' }}>
              <span>المساعد الذكي</span>
              <FiX onClick={() => setIsOpen(false)} style={{ cursor: 'pointer' }} />
            </div>
            <div style={{ flex: 1, padding: '15px', overflowY: 'auto', backgroundColor: '#f9fafb', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {messages.map(msg => (
                <div key={msg.id} style={{ alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', padding: '8px 12px', borderRadius: '12px', maxWidth: '80%', fontSize: '14px', backgroundColor: msg.sender === 'user' ? '#3b82f6' : '#e5e7eb', color: msg.sender === 'user' ? '#fff' : '#000' }}>
                  {msg.text}
                </div>
              ))}
              <div ref={scrollRef} />
            </div>
            <div style={{ padding: '10px', display: 'flex', gap: '5px', borderTop: '1px solid #eee' }}>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSend()} placeholder="اكتب هنا..." style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #ddd', outline: 'none' }} />
              <button onClick={handleSend} disabled={isLoading} style={{ background: '#1e3a8a', color: '#fff', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer' }}><FiSend /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button onClick={() => setIsOpen(!isOpen)} style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#1e3a8a', color: '#fff', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </button>
    </div>
  );
};

export default Chatbot;
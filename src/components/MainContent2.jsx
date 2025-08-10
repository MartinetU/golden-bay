import React, { useState, useEffect } from 'react';
import PopUp2 from './PopUp2.jsx';


export default function MainContent2(props) {
  const [showAll, setShowAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Получаем список фраз из props или создаём по умолчанию
  const data = props.items || Array.from({ length: 30 }, (_, i) => `Это пример текстового блока №${i + 1}`);

  const visibleData = showAll ? data : data.slice(0, 20);

useEffect(() => {
  if (showAll) {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);

    return () => clearTimeout(timer);
  }
}, [showAll]);


  return (
    <section className="main-content">
      <h2>Добро пожаловать в наш раздел!</h2>

      {visibleData.map((item, idx) => (
        <p key={idx} style={{ fontWeight: (idx + 1) % 10 === 0 ? 'bold' : 'normal' }}>
          {item}
        </p>
      ))}

      {!showAll && (
        <button className="toggle-button" onClick={() => setShowAll(true)}>
          Читать далее
        </button>
      )}

      {/* 👇 Вставка попапа */}
      {showPopup && <PopUp2 onClose={() => setShowPopup(false)} />}
    </section>
  );
}

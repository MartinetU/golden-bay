// components/PopUp2.jsx
import React from 'react';
//import './MainContent2.css'; // Подключаем стили, если popup описан там

import './PopUp2.css'; //собственный


export default function PopUp2({ onClose }) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Регистрация</h3>
        <p>Для получения дополнительной информации о товаре зарегистрируйтесь, пожалуйста.</p>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="E-Mail" required />
          <button type="submit">Отправить</button>
        </form>
        <button onClick={onClose} className="close-btn">×</button>
      </div>
    </div>
  );
}

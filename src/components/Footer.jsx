import React from 'react';

// 🔹 Вложенный компонент — колонка с меню
function FooterMenu() {
  return (
    <div className="footer-column">
      <h3>Меню</h3>
      <p><a href="#">Главная</a></p>
      <p><a href="policy.html" target="_blank">Политика конфиденциальности</a></p>
      <p><a href="about.html">О проекте</a></p>
    </div>
  );
}

// 🔹 Главный компонент футера
function Footer() {
  return (
    <footer className="footer" id="page-footer">
      <h2 className="footer-title">Контакты</h2>
      <hr className="footer-line" />
      
      <div className="footer-columns">
        {/* Колонка с названием проекта */}
        <div className="footer-column">
          <p className="footer-game">Golden Bay: Pirate Quest</p>
          <p>© 2025 Все права защищены</p>
        </div>

        {/* Вставка вложенного компонента меню */}
        <FooterMenu />

        {/* Колонка с контактами */}
        <div className="footer-column">
          <h3>Связаться с нами</h3>
          <p>Тел.: +994 51 491 30 26</p>
          <p>Email: support@piratequest.com</p>
        </div>
      </div>

      <div className="footer-space" />
      <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        Наверх
      </button>
    </footer>
  );
}

export default Footer;

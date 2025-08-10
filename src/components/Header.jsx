// Header.jsx — компонент верхнего меню SPA-проекта.
// Содержит логотип и горизонтальную навигацию. Часть ссылок пока отключена.
import './Header.css';

function Header() {
  return (
    <header>
      {/* Логотип сайта */}
      <div className="logo">Golden Bay: Pirate Quest 2.0</div>

      <nav className="desktop-menu">
        {/* Первый пункт меню — Главная страница */}
        <a href="#">Главная</a>
        <span>Обзор</span>
        <span>Политика конфиденциальности</span>
        {/* <a href="review.php">Обзор</a>*/}
        {/* <a href="policy.html" target="_blank">Политика конфиденциальности</a>*/}
        <a href="#page-footer">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;

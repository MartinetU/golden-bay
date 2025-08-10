// App.jsx
import React from 'react';
// import './App.css';
import './assets/style.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

// ↓ Подключение учебного блока (пока выключено)
// import MainContent2 from './components/MainContent2';

import Promotion from './components/Promotion'; // ← сюда импорт
import Fragments from './components/Fragments';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />

      {/* Учебный блок для теста хуков — пока выключен */}
      {/* <MainContent2 /> */}
	  
	  <Promotion /> {/* ← сюда рендер */}
	  <Fragments />

      <Footer />
    </div>
  );
}

export default App;

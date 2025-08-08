import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Sobre from './components/Sobre/Sobre';
import Portfolio from './components/Portfolio/Portfolio';
import Contato from './components/Contato/Contato';
import Footer from './components/Footer/Footer';
import ScrollReveal from 'scrollreveal';
import PaginaEmConstrucao from './components/PaginaEmConstrucao/PaginaEmConstrucao';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark-mode');

  useEffect(() => {
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);

    const sr = ScrollReveal({
      distance: '80px',
      duration: 2000,
      delay: 200,
    });

    sr.reveal('.home-content, .sobre-heading, .portfolio-heading, .contato-heading', { origin: 'top' });
    sr.reveal('.home-img, .portfolio, .portfolio-box, .contato form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .sobre-img', { origin: 'left' });
    sr.reveal('.home-content p, .sobre-content', { origin: 'right' });

    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
  };

  return (
    <Router>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        {/* <Route path="/projetos" element={<Portfolio />} /> */}
        <Route path="/projetos" element={<PaginaEmConstrucao />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
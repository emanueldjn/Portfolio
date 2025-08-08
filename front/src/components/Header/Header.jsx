import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './styles.css'; // Importação padrão do CSS

function Header({ theme, toggleTheme }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <NavLink to="/" className="header-logo">Portfólio</NavLink>
      <FontAwesomeIcon
        icon={isMenuOpen ? faXmark : faBars}
        className="header-menu-icon"
        onClick={toggleMenu}
      />
      <div className="header-theme-switch-wrapper">
        <label className="header-theme-switch" htmlFor="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            checked={theme === 'light-mode'}
            onChange={toggleTheme}
          />
          <div className="header-slider"></div>
        </label>
        <span className="header-theme-label">{theme === 'light-mode' ? '☀️' : '🌙'}</span>
      </div>
      <nav className={`header-navbar ${isMenuOpen ? 'active' : ''}`}>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>Sobre</NavLink>
        <NavLink to="/projetos" className={({ isActive }) => (isActive ? 'active' : '')}>Projetos</NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
      </nav>
    </header>
  );
}

export default Header;
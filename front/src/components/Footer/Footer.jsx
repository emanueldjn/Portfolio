import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './styles.css'; // Importação padrão do CSS

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icon-top">
        <Link to="/"><FontAwesomeIcon icon={faAnglesUp} /></Link>
      </div>
      <div className="footer-text">
        <p>Copyright &copy; 2024 by Emanuel Nascimento</p>
      </div>
    </footer>
  );
}

export default Footer;
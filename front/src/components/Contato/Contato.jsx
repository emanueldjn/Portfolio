import React from 'react';
import './styles.css'; // Importação padrão do CSS

function Contato() {
  return (
    <section className="contato">
      <h2 className="contato-heading">Entre em <span>contato</span></h2>
      <form action="#">
        <div className="contato-input-box">
          <input type="text" placeholder="Nome completo" required />
          <input type="email" placeholder="Email" required />
        </div>
        <div className="contato-input-box">
          <input type="tel" placeholder="Número para contato" required />
          <input type="text" placeholder="Assunto do Email" required />
        </div>
        <textarea rows="10" placeholder="Sua Mensagem" required></textarea>
        <input type="submit" value="Enviar Mensagem" className="contato-btn" />
      </form>
    </section>
  );
}

export default Contato;
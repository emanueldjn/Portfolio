import React from 'react';
import './styles.css';

function Sobre() {
  return (
    <section className="sobre">
      <div className="sobre-img">
        <img src="/imgs/emanuel.jpeg" alt="Emanuel Nascimento" />
      </div>
      <div className="sobre-content">
        <h2 className="sobre-heading">Sobre <span>mim</span></h2>
        <h3>Desenvolvedor Web em Formação</h3>
        <p>
          Meu nome é Emanuel, e sou um apaixonado por tecnologia que encontrou na programação uma maneira de transformar ideias em soluções práticas. Como estudante de Engenharia de Software e estagiário em desenvolvimento de software com foco em VTEX IO, estou vivendo uma jornada empolgante, onde cada desafio é uma chance de crescer e aprender. Minha paixão por desenvolvimento começou ao perceber como a tecnologia pode simplificar processos e criar experiências incríveis, seja em plataformas de e-commerce ou em aplicações interativas.
        </p>
        <p>
          No meu estágio, trabalho com equipes para construir e aprimorar soluções digitais, o que me ensinou a importância da colaboração e da atenção aos detalhes. Meus projetos pessoais e acadêmicos me desafiam a explorar novas ideias e a pensar de forma criativa, sempre buscando formas de melhorar minhas habilidades e entregar resultados de qualidade. Sou movido pela curiosidade e pela vontade de aprender, acreditando que o trabalho em equipe e a troca de conhecimentos são essenciais para criar algo realmente impactante.
        </p>
        <p>
          Fora do mundo do código, gosto de praticar esportes, assistir séries, ouvir músicas e sair com amigos, atividades que me recarregam e inspiram novas ideias. Meu objetivo é me consolidar como desenvolvedor, contribuindo para projetos inovadores e enfrentando desafios que me permitam evoluir. Estou animado para continuar aprendendo, colaborar com times apaixonados por tecnologia e deixar minha marca no universo do desenvolvimento.
        </p>
        <a
          href="https://www.linkedin.com/in/emanueldjn/"
          target="_blank"
          rel="noopener noreferrer"
          className="sobre-btn"
        >
          Ver mais no LinkedIn
        </a>
      </div>
    </section>
  );
}

export default Sobre;
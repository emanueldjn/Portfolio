import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function Portfolio() {
  const projects = [
    {
      img: '/img/previsao.png',
      title: 'Previsão do Tempo - React',
      description: 'Projeto pessoal usando a biblioteca React',
      link: 'https://clima-tempo-app-rho.vercel.app/',
    },
    {
      img: '/img/calc2.png',
      title: 'Calculadora',
      description: 'Projeto usando a biblioteca React.',
      link: 'https://react-chi-ten.vercel.app/',
    },
    {
      img: '/img/sistema-bancario.jpg',
      title: 'Sistema Bancário',
      description: 'Projeto usando Python.',
      link: 'https://github.com/emanueldjn/projetos_python/tree/main/sistema_bancario_V2.py',
    },
    {
      img: '/img/tic-tac-toe.png',
      title: 'Jogo da Velha',
      description: 'Projeto usando HTML, CSS, JavaScript e aplicando um pouco de Lógica de programação.',
      link: 'https://desenvolvimento-web-ashen.vercel.app',
    },
    {
      img: '/img/rick-and-morty.jpg',
      title: 'Rick and Morty - React',
      description: 'Projeto usando a API do Rick and Morty',
      link: 'https://rick-and-morty-alpha-puce.vercel.app/',
    },
    {
      img: '/img/churrascometro.jpg',
      title: 'Churrascômetro',
      description: 'Usando HTML, CSS e JavaScript.',
      link: 'https://desenvolvimento-web-ekzs.vercel.app',
    },
  ];

  return (
    <section className="portfolio">
      <h2 className="portfolio-heading">Últimos <span>Projetos</span></h2>
      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Typed from "typed.js";
import "./styles.css";

function Home() {
  useEffect(() => {
    const typed = new Typed(".multiple-text", {
      strings: ["Bacharel em Eng. de Software", "Front-end Developer"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <h3>Olá, meu nome é</h3>
        <h1>Emanuel</h1>
        <h3>
          e sou <span className="multiple-text"></span>
        </h3>
        <p>
          Engenheiro de Software em formação, com experiência prática em
          projetos web e mobile, atuando principalmente com React, TypeScript,
          Node.js e VTEX IO. Atualmente, colaboro com times de e-commerce na
          correção de bugs, desenvolvimento de novas funcionalidades e
          implementação de interfaces focadas na experiência do usuário. Já
          participei de projetos reais utilizando Angular + Ionic, sistemas com
          OCR em React e manipulação de dados via MasterData VTEX. Tenho
          familiaridade com backend, bancos de dados, e estou em constante
          evolução técnica por meio de cursos e da graduação em Engenharia de
          Software. Busco crescer profissionalmente como Desenvolvedor,
          contribuindo com times colaborativos e enfrentando desafios que me
          permitam expandir minhas habilidades e explorar ainda mais o universo
          da tecnologia.
        </p>
        <div className="home-social-media">
          <a
            href="https://www.linkedin.com/in/emanueldjn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/emanueldjn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <a
          href="/pdf/EmanuelNascimento_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="home-btn"
        >
          ABRIR CV
        </a>
      </div>
      <div className="home-img">
        <img src="/imgs/emanuel.jpeg" alt="Emanuel Nascimento" />
      </div>
    </section>
  );
}

export default Home;

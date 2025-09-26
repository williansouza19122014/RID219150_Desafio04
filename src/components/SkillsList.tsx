const SkillsList = () => {
  return (
    <section id="sobre" className="about">
      <h2 className="section-title left">Sobre mim</h2>
      <div className="about-container">
        <h3 className="about-name">Willian Ferreira de Souza</h3>
        <p className="about-description">
          Sou um apaixonado por Programação. Minha experiência com códigos e interfaces
          me torna um profissional diferenciado no mercado, atuando com React, Node, JS,
          TypeScript, HTML e CSS.
        <div className="about-links">
          <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">GITHUB</a>
          <a href="mailto:seuemail@dominio.com">EMAIL</a>
        </div>
        </p>
        <div className="experiences">
          <div className="experience">
            <h4>Tenho experiências com</h4>
            <ul>
              <li>Firebase Database</li>
              <li>MySQL Database</li>
              <li>Git, GitHub, Bitbucket</li>
              <li>PHP</li>
              <li>Figma, Adobe XD, Sketch</li>
              <li>Pré-processadores CSS</li>
              <li>Marketing Digital</li>
              <li>Python (Django)</li>
            </ul>
          </div>

          <div className="experience">
            <h4>Tenho anos de experiência com</h4>
            <ul>
              <li>HTML5 e CSS3</li>
              <li>WordPress</li>
              <li>JavaScript</li>
              <li>Elementor</li>
              <li>Pacote Adobe</li>
              <li>Criação de marcas e logos</li>
              <li>Criação de interfaces</li>
            </ul>
          </div>

          <div className="experience">
            <h4>Trabalho e estudo sobre</h4>
            <ul>
              <li>React.js</li>
              <li>CSS3 avançado</li>
              <li>JavaScript e TypeScript</li>
              <li>Node.js básico</li>
              <li>APIs RESTful</li>
              <li>UX &amp; UI</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsList;

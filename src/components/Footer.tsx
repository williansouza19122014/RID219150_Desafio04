const Footer = () => {

  return (
      <footer id="contato">
        <h2 className="contact-title">Contato</h2>
        <ul className="footer-icons">
          <li>
            <a href="https://www.figma.com" target="_blank" rel="noopener noreferrer">
              <img src="/figma.svg" alt="Figma" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/github.svg" alt="GitHub" />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src="/dribbble.svg" alt="Dribbble" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube" />
            </a>
          </li>
        </ul>
      </footer>
  );
};

export default Footer;
// src/sections/Footer.jsx
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copy">© {year} Martina Barrenechea</span>
      <div className="footer__links">
        <a href="https://linkedin.com/in/martina-barrenechea" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/TU-USUARIO" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
}

export default Footer;
import { useEffect, useState } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'posts', label: 'Posts' },
  { id: 'contact', label: 'Contacto' },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['home', ...NAV_LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, 'home')}>
        MB
      </a>

      <ul className="navbar__links">
        {NAV_LINKS.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="navbar__actions">
        <div className="navbar__lang">
          <button className="navbar__lang-btn navbar__lang-btn--active">ES</button>
          <button className="navbar__lang-btn">EN</button>
        </div>
        <a href="https://linkedin.com/in/TU-USUARIO" target="_blank" rel="noreferrer" className="navbar__social">
          LinkedIn
        </a>
        <a href="https://github.com/TU-USUARIO" target="_blank" rel="noreferrer" className="navbar__social">
          GitHub
        </a>
      </div>
    </nav >
  );
}

export default Navbar;
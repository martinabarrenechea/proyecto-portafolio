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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScrollEnd = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
      if (scrolledToBottom) setActiveSection('contact');
    };
    window.addEventListener('scroll', handleScrollEnd);
    return () => window.removeEventListener('scroll', handleScrollEnd);
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
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar-wrapper ${scrolled ? 'navbar-wrapper--scrolled' : ''}`}>
      <div className="navbar">
        <a href="#home" className="navbar__logo" onClick={(e) => handleNavClick(e, 'home')}>
          <span className="navbar__logo-box">MB</span>
          <span className="navbar__logo-name">Martina Barrenechea</span>
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

          <a href="https://linkedin.com/in/martina-barrenechea" target="_blank" rel="noreferrer" className="navbar__social" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
          </a>
          <a href="https://github.com/TU-USUARIO" target="_blank" rel="noreferrer" className="navbar__social" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.43 3.44 10.04 8.2 11.67.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.33-1.8-1.33-1.8-1.09-.77.08-.75.08-.75 1.2.09 1.83 1.26 1.83 1.26 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.47-2.46 1.24-3.32-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.3 11.3 0 0 1 6 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.86 1.24 1.97 1.24 3.32 0 4.76-2.8 5.81-5.48 6.12.43.38.81 1.13.81 2.28 0 1.65-.02 2.97-.02 3.38 0 .33.21.72.83.6C20.56 22.33 24 17.72 24 12.3 24 5.5 18.63 0 12 0z"/>
            </svg>
          </a>

          <button
            className="navbar__burger"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--open-1' : ''}`} />
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--open-2' : ''}`} />
            <span className={`navbar__burger-line ${menuOpen ? 'navbar__burger-line--open-3' : ''}`} />
          </button>
        </div>
      </div>

{menuOpen && (
  <div className="navbar__mobile-overlay">
    <button
      className="navbar__mobile-close"
      onClick={() => setMenuOpen(false)}
      aria-label="Cerrar menú"
    >
      ✕
    </button>

    <div className="navbar__mobile-links">
      {NAV_LINKS.map((link) => (
        <a
          key={link.id}
          href={`#${link.id}`}
          className={`navbar__mobile-link ${activeSection === link.id ? 'navbar__mobile-link--active' : ''}`}
          onClick={(e) => handleNavClick(e, link.id)}
        >
          {link.label}
        </a>
      ))}
    </div>

    <div className="navbar__mobile-socials">
      <a href="https://linkedin.com/in/martina-barrenechea" target="_blank" rel="noreferrer" className="navbar__social" aria-label="LinkedIn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
        </svg>
      </a>
      <a href="https://github.com/TU-USUARIO" target="_blank" rel="noreferrer" className="navbar__social" aria-label="GitHub">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.43 3.44 10.04 8.2 11.67.6.11.82-.27.82-.6 0-.29-.01-1.06-.02-2.08-3.34.75-4.04-1.65-4.04-1.65-.55-1.42-1.33-1.8-1.33-1.8-1.09-.77.08-.75.08-.75 1.2.09 1.83 1.26 1.83 1.26 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.47-2.46 1.24-3.32-.12-.31-.54-1.57.12-3.28 0 0 1.01-.33 3.3 1.27a11.3 11.3 0 0 1 6 0c2.29-1.6 3.3-1.27 3.3-1.27.66 1.71.24 2.97.12 3.28.77.86 1.24 1.97 1.24 3.32 0 4.76-2.8 5.81-5.48 6.12.43.38.81 1.13.81 2.28 0 1.65-.02 2.97-.02 3.38 0 .33.21.72.83.6C20.56 22.33 24 17.72 24 12.3 24 5.5 18.63 0 12 0z"/>
        </svg>
      </a>
    </div>
  </div>
)}
    </nav>
  );
}

export default Navbar;
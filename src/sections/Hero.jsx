import './Hero.css';

function Hero() {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero__gradient" aria-hidden="true" />

      <div className="hero__content">
        <span className="hero__badge">WELCOME TO MY PORTFOLIO</span>
        <h1 className="hero__name">Martina Barrenechea</h1>
        <p className="hero__role">Estudiante de Ingeniería en Sistemas de Información</p>
        <p className="hero__lead">
          Estudiante de 3° año en la UTN FRC, interesada en el desarrollo de software
          y el análisis funcional aplicado a problemas reales.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="button button--primary" onClick={handleScrollToProjects}>
            Ver proyectos
          </a>
          <a href="/cv-martina-barrenechea.pdf" className="button button--secondary" download>
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
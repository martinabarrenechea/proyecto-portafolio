import Reveal from '../components/Reveal';
import './Projects.css';

const PROJECTS = [
  {
    id: 'proj-1',
    name: 'Sistema de Reserva de Aulas',
    description: 'Plataforma full-stack para gestionar la reserva de aulas, con autenticación real mediante Keycloak.',
    image: '/projects/reserva-aulas.png',
    tech: ['React', 'Node.js', 'Express', 'Sequelize', 'SQLite', 'Keycloak'],
    github: 'https://github.com/martinabarrenechea/proyecto-reservaAulas-DDS.git', // reemplazar con tu link real
    demo: null,
  },
  {
    id: 'proj-2',
    name: 'Otro proyecto',
    description: 'Descripción breve de qué resuelve el proyecto y tu rol en él.',
    image: '/projects/proyecto-2.png',
    tech: ['Python'],
    github: 'https://github.com/TU-USUARIO/repo-2',
    demo: 'https://demo-link.com',
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__image-wrap">
        <img src={project.image} alt={project.name} className="project-card__image" />
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__description">{project.description}</p>

        <div className="project-card__tags">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>

        <div className="project-card__links">
          <a href={project.github} target="_blank" rel="noreferrer" className="project-card__link">
            GitHub
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer" className="project-card__link">
              Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <Reveal>
      <section id="projects" className="projects">
        <div className="projects__inner">
          <span className="projects__eyebrow">PROYECTOS</span>
          <h2 className="projects__title">Algunos de los proyectos en los que trabajé</h2>

          <div className="projects__grid">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default Projects;
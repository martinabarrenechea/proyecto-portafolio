import Reveal from '../components/Reveal';
import './About.css';

const STACK = [
  { category: 'Frontend', items: ['React'] },
  { category: 'Backend', items: ['Node.js', 'Python'] },
  { category: 'Bases de datos', items: ['SQL'] },
  { category: 'Herramientas', items: ['Git', 'GitLab', 'Linux'] },
];

function About() {
  return (
    <Reveal>
      <section id="about" className="about">
        <div className="about__inner">
          <span className="about__eyebrow">SOBRE MÍ</span>
          <h2 className="about__title">Cómo pienso el desarrollo</h2>

          <div className="about__grid">
            <div className="about__text">
              <p>
                Estudiante de Ingeniería en Sistemas de Información en la UTN, cursando
                3° año. Me interesan tanto el desarrollo de software como el análisis
                funcional — no me conformo con que algo funcione, quiero entender el
                problema que resuelve antes de construir la solución.
              </p>
              <p>
                Prefiero trabajar organizando ideas antes de escribir código: priorizar,
                dividir en pasos claros y avanzar de forma incremental. Esto lo llevo
                también fuera de la facultad — soy capitana de mi equipo de hockey, algo
                que me obligó a coordinar personas y tomar decisiones bajo presión.
              </p>

              <div className="about__block">
                <h3 className="about__block-title">Educación</h3>
                <p className="about__block-text">
                  Ingeniería en Sistemas de Información — UTN FRC (3° año en curso).
                  Inglés B2 (First Certificate, Cambridge).
                </p>
              </div>

              <div className="about__block">
                <h3 className="about__block-title">Habilidades</h3>
                <p className="about__block-text">
                  Liderazgo y coordinación de equipos, priorización bajo objetivos
                  definidos, comunicación clara y capacidad de estructurar ideas en
                  planes de acción concretos.
                </p>
              </div>
            </div>

            <div className="about__stack">
              <h3 className="about__block-title">Stack</h3>
              {STACK.map((group) => (
                <div key={group.category} className="about__stack-group">
                  <span className="about__stack-category">{group.category}</span>
                  <div className="about__stack-tags">
                    {group.items.map((item) => (
                      <span key={item} className="about__tag">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

export default About;
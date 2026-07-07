// src/sections/Contact.jsx
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <span className="contact__eyebrow">CONTACTO</span>
      <h2 className="contact__title">¿Charlamos?</h2>
      <p className="contact__text">
        Estoy buscando mi primera oportunidad profesional. Si tenés una propuesta,
        una consulta o simplemente querés conectar, escribime.
      </p>

      <div className="contact__links">
        <a href="mailto:marti.barrenechea@gmail.com" className="button button--primary">
          Enviar email
        </a>
        <a
          href="https://linkedin.com/in/martina-barrenechea"
          target="_blank"
          rel="noreferrer"
          className="button button--secondary"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/TU-USUARIO"
          target="_blank"
          rel="noreferrer"
          className="button button--secondary"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}

export default Contact;
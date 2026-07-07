import Reveal from '../components/Reveal';
import './Posts.css';

const POSTS = [
  // { id: 'post-1', title: 'Título del post', date: '2026-05-10', url: 'https://linkedin.com/...' },
];

function Posts() {
  return (
    <Reveal>
      <section id="posts" className="posts">
        <div className="posts__inner">
          <span className="posts__eyebrow">POSTS</span>
          <h2 className="posts__title">Lo que comparto</h2>

          {POSTS.length > 0 ? (
            <div className="posts__grid">
              {POSTS.map((post) => (
                <a key={post.id} href={post.url} target="_blank" rel="noreferrer" className="post-card">
                  <span className="post-card__date">{post.date}</span>
                  <h3 className="post-card__title">{post.title}</h3>
                </a>
              ))}
            </div>
          ) : (
            <div className="posts__empty">
              <p className="posts__empty-text">
                Todavía no publiqué en LinkedIn, pero esto va a ir llenándose con
                reflexiones sobre lo que voy aprendiendo.
              </p>
              <a
              href="https://linkedin.com/in/martina-barrenechea"
              target="_blank"
              rel="noreferrer"
              className="button button--secondary"
              >
              Seguime en LinkedIn
            </a>
            </div>
          )}
      </div>
    </section>
    </Reveal >
  );
}

export default Posts;
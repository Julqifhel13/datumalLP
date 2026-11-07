import { useEffect, useRef } from 'react';
import './Hero.css';
import photo from '../assets/mal-1.png';

export default function Hero() {
  const textRef  = useRef(null);
  const photoRef = useRef(null);

  useEffect(() => {
    const t1 = setTimeout(() => textRef.current?.classList.add('visible'),  100);
    const t2 = setTimeout(() => photoRef.current?.classList.add('visible'), 350);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="about">
      {/* Background decorations */}
      <div className="hero-deco-circle" aria-hidden="true" />
      <div className="hero-deco-dots"   aria-hidden="true" />

      <div className="hero-container">
        {/* ── Text ── */}
        <div className="hero-text reveal-left" ref={textRef}>
          <div className="hero-eyebrow">Hello, I'm</div>
          <h1 className="hero-name">
            Jul-jamaal<br />M. Cana
          </h1>

          <div className="hero-roles">
            <span className="hero-role">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Public Administration Student
            </span>
            <span className="hero-role hero-role--gold">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Academic Honors Graduate
            </span>
          </div>

          <p className="hero-bio">
            Aspiring public servant based in Quezon City, Philippines — dedicated to administrative governance, public ethics, and civil service.
          </p>

          <div className="hero-cta">
            <button className="btn-primary" onClick={() => scrollTo('experience')}>
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button className="btn-outline" onClick={() => scrollTo('contact')}>
              Contact Me
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">18</span>
              <span className="hero-stat-label">Years Old</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">3+</span>
              <span className="hero-stat-label">Experiences</span>
            </div>
            <div className="hero-stat-sep" />
            <div className="hero-stat">
              <span className="hero-stat-num">2×</span>
              <span className="hero-stat-label">Honors</span>
            </div>
          </div>
        </div>

        {/* ── Photo ── */}
        <div className="hero-visual reveal-right" ref={photoRef}>
          <div className="hero-frame">
            <img src={photo} alt="Jul-jamaal M. Cana" />
            <div className="hero-frame-border" aria-hidden="true" />
            <div className="hero-frame-gold"   aria-hidden="true" />
          </div>
          <div className="hero-location-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Quezon City, Philippines
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <button className="hero-scroll" onClick={() => scrollTo('skills')} aria-label="Scroll down">
        <span>Scroll to explore</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </button>
    </section>
  );
}

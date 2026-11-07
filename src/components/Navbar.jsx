import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'about',      label: 'About' },
  { id: 'skills',     label: 'Skills' },
  { id: 'education',  label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'references', label: 'References' },
  { id: 'contact',    label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [active,   setActive]     = useState('about');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );
    NAV_LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
      <div className="nav-inner">
        <button className="nav-logo" onClick={() => scrollTo('about')}>
          <div className="nav-monogram">JC</div>
          <div className="nav-id">
            <span className="nav-name">Jul-jamaal M. Cana</span>
            <span className="nav-sub">Public Administration</span>
          </div>
        </button>

        <ul className="nav-links">
          {NAV_LINKS.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-link${active === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
                {active === id && <span className="nav-link-dot" />}
              </button>
            </li>
          ))}
        </ul>

        <button className="btn-hire" onClick={() => scrollTo('contact')}>
          Hire Me
        </button>

        <button
          className={`nav-burger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        {NAV_LINKS.map(({ id, label }) => (
          <button key={id} className="nav-mobile-link" onClick={() => scrollTo(id)}>
            {label}
          </button>
        ))}
        <button className="nav-mobile-hire" onClick={() => scrollTo('contact')}>
          Hire Me
        </button>
      </div>
    </nav>
  );
}

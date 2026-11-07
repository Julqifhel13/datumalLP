import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './Skills.css';

const skills = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    name: 'Communication',
    desc: 'Articulate oral briefing, concise written correspondence, and stakeholder engagement.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
    name: 'Adaptability',
    desc: 'Calm and responsive adjustments to new environments, tasks, and group dynamics.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
    name: 'Computer Skills',
    desc: 'Office suites, documentation tabulation, spreadsheets, and file archiving.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <polygon points="23 7 16 12 23 17 23 7"/>
        <rect x="1" y="5" width="15" height="14" rx="2"/>
      </svg>
    ),
    name: 'Video & Photo',
    desc: 'Visual presentations, informational content design, and multimedia editing.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
    name: 'Willingness to Learn',
    desc: 'High receptivity to mentorship and continuous personal development.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    name: 'Civic Ethics',
    desc: 'Punctuality, accountability, principled conduct, and institutional reliability.',
  },
];

export default function Skills() {
  const headRef = useReveal(0);
  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          grid.querySelectorAll('.skill-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 90);
          });
          observer.unobserve(grid);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(grid);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="sec-eyebrow reveal" ref={headRef}>What I Bring</div>
        <h2 className="sec-heading">Skills &amp; Competencies</h2>

        <div className="skills-grid" ref={gridRef}>
          {skills.map(({ icon, name, desc }) => (
            <div className="skill-card reveal" key={name}>
              <div className="skill-card-icon">{icon}</div>
              <h3 className="skill-card-name">{name}</h3>
              <p className="skill-card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

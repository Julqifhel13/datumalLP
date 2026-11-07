import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './Experience.css';

const experiences = [
  {
    role: 'Work Immersion Trainee',
    type: 'Legal Affairs Immersion',
    org: 'Private Legal Practice & Law Office',
    color: '#022448',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    bullets: [
      'Drafted legal documents and prepared affidavits (Affidavit of Loss, Joint Affidavit, Undertaking).',
      'Handled front-office customer inquiries, document validation, and administrative records.',
    ],
  },
  {
    role: 'Student Teacher & Instructional Assistant',
    type: 'Teaching Practicum',
    org: 'Culiat High School — Department of Mathematics',
    color: '#1e3a5f',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    bullets: [
      'Facilitated Mathematics lesson modules and problem-solving exercises for Grade 7 classes.',
      'Assisted teacher with classroom management, remedial student coaching, and activity tracking.',
    ],
  },
  {
    role: 'Student Business Seller & Floor Manager',
    type: 'Entrepreneurship Fair',
    org: 'Culiat High School Entrepreneurship Week',
    color: '#2d486d',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    bullets: [
      'Handled retail customer transactions, cashiering, and cash balance reconciliations.',
      'Coordinated product inventories, merchandise displays, and promotional sales.',
    ],
  },
];

export default function Experience() {
  const headRef  = useReveal(0);
  const cardsRef = useRef(null);

  useEffect(() => {
    const c = cardsRef.current;
    if (!c) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          c.querySelectorAll('.exp-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 130);
          });
          observer.unobserve(c);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(c);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="sec-eyebrow reveal" ref={headRef}>What I've Done</div>
        <h2 className="sec-heading">Experience &amp; Practicum</h2>

        <div className="exp-cards" ref={cardsRef}>
          {experiences.map(({ role, type, org, color, icon, bullets }) => (
            <div className="exp-card reveal" key={role} style={{ '--accent': color }}>
              <div className="exp-card-side" aria-hidden="true">
                <div className="exp-card-icon">{icon}</div>
              </div>
              <div className="exp-card-body">
                <div className="exp-card-top">
                  <div>
                    <h3 className="exp-card-role">{role}</h3>
                    <p className="exp-card-org">{org}</p>
                  </div>
                  <span className="exp-card-type">{type}</span>
                </div>
                <ul className="exp-bullets">
                  {bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './References.css';

const refs = [
  { name: 'Janice Bautista',       role: 'Faculty Teacher',    org: 'Culiat High School', phone: '0968 790 7215' },
  { name: 'Glicerio C. Torre',     role: 'Faculty Teacher',    org: 'Culiat High School', phone: '0951 724 7287' },
  { name: 'Jerry Boy D. Andeza Jr.', role: 'SHS ABM Teacher II', org: 'Culiat High School', phone: '0968 790 8289' },
];

export default function References() {
  const headRef  = useReveal(0);
  const cardsRef = useRef(null);

  useEffect(() => {
    const c = cardsRef.current;
    if (!c) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          c.querySelectorAll('.ref-card').forEach((card, i) => {
            setTimeout(() => card.classList.add('visible'), i * 100);
          });
          observer.unobserve(c);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(c);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--alt" id="references">
      <div className="container">
        <div className="sec-eyebrow reveal" ref={headRef}>Endorsements</div>
        <h2 className="sec-heading">Character References</h2>

        <div className="ref-grid" ref={cardsRef}>
          {refs.map(({ name, role, org, phone }) => (
            <div className="ref-card reveal" key={name}>
              <div className="ref-avatar" aria-hidden="true">
                {name.split(' ').slice(0, 2).map(w => w[0]).join('')}
              </div>
              <div className="ref-name">{name}</div>
              <div className="ref-role">{role}</div>
              <div className="ref-org">{org}</div>
              <div className="ref-phone">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.64a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {phone}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

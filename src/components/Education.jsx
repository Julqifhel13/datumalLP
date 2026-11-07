import { useEffect, useRef } from 'react';
import useReveal from '../hooks/useReveal';
import './Education.css';
import gradPhoto from '../assets/mal-2.png';

const entries = [
  {
    org: 'Bachelor of Public Administration',
    level: 'Higher Education',
    year: '2026 – Present',
    badge: 'Ongoing',
    desc: 'Focusing on administrative governance, public ethics, policy analysis, and civil service operations.',
    honors: false,
  },
  {
    org: 'Culiat High School',
    level: 'Senior High School',
    year: '2024 – 2026',
    badge: null,
    desc: 'Graduated with Academic Honors. Active campus leadership, peer academic assistance, and community activities.',
    honors: true,
  },
  {
    org: 'New Era High School',
    level: 'Junior High School',
    year: '2020 – 2024',
    badge: null,
    desc: 'Completed with consistent honors distinction across all subjects.',
    honors: true,
  },
  {
    org: 'New Era Elementary School',
    level: 'Primary Education',
    year: '2014 – 2020',
    badge: null,
    desc: 'Conferred Elementary Diploma with well-rounded foundation in general education.',
    honors: false,
  },
];

export default function Education() {
  const headRef     = useReveal(0);
  const featRef     = useReveal(100);
  const timelineRef = useRef(null);

  useEffect(() => {
    const tl = timelineRef.current;
    if (!tl) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          tl.querySelectorAll('.edu-entry').forEach((el, i) => {
            setTimeout(() => el.classList.add('visible'), i * 120);
          });
          observer.unobserve(tl);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(tl);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section section--alt" id="education">
      <div className="container">

        <div className="sec-eyebrow reveal" ref={headRef}>Academic Journey</div>
        <h2 className="sec-heading">Education</h2>

        {/* Featured graduation card */}
        <div className="edu-featured reveal" ref={featRef}>
          <div className="edu-feat-photo">
            <img src={gradPhoto} alt="Graduation photo — Jul-jamaal M. Cana" />
          </div>
          <div className="edu-feat-body">
            <div className="edu-feat-badges">
              <span className="badge badge-gold">With Academic Honors</span>
              <span className="badge badge-navy">Culiat High School</span>
            </div>
            <h3 className="edu-feat-title">High School &amp; Arabic Diplomas</h3>
            <p className="edu-feat-desc">
              Completed Senior High School with Academic Honors. Concurrently awarded the official{' '}
              <strong>High School Diploma</strong> and specialized <strong>Arabic Diploma</strong>.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="edu-timeline" ref={timelineRef}>
          <div className="edu-timeline-line" aria-hidden="true" />
          {entries.map(({ org, level, year, badge, desc, honors }) => (
            <div className="edu-entry reveal-right" key={org}>
              <div className="edu-entry-node" aria-hidden="true">
                <div className={`edu-dot${honors ? ' edu-dot--gold' : ''}`} />
              </div>
              <div className="edu-entry-card">
                <div className="edu-entry-top">
                  <div>
                    <h3 className="edu-entry-org">{org}</h3>
                    <div className="edu-entry-level">
                      {level}
                      {honors && <span className="badge badge-gold">With Honors</span>}
                    </div>
                  </div>
                  <div className="edu-entry-year">
                    <span className="edu-year-plain">{year}</span>
                    {badge && <span className="edu-year-ongoing">{badge}</span>}
                  </div>
                </div>
                <p className="edu-entry-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import useReveal from '../hooks/useReveal';
import './About.css';

const facts = [
  { label: 'Date of Birth',   value: 'October 5, 2008' },
  { label: 'Place of Birth',  value: 'Brgy. Culiat, Quezon City' },
  { label: 'Gender',          value: 'Male' },
  { label: 'Civil Status',    value: 'Single' },
  { label: 'Citizenship',     value: 'Filipino' },
  { label: 'Height / Weight', value: "5'4\" (163 cm)  ·  68 kg" },
  { label: 'Father',          value: 'Muhammad H. Cana' },
  { label: 'Mother',          value: 'Sittie M. Cana' },
];

const highlights = [
  {
    label: 'Academic Honors',
    sub: 'Senior & Junior High School',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    label: 'Available Now',
    sub: 'Internship & Practicum',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
      </svg>
    ),
  },
  {
    label: 'Quezon City',
    sub: 'Metro Manila, Philippines',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'Public Admin',
    sub: 'Governance & Policy Focus',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
];

export default function About() {
  const quoteRef  = useReveal(0);
  const leftRef   = useReveal(80);
  const factsRef  = useReveal(150);

  return (
    <section className="section section--alt" id="about-me">
      <div className="container">
        <div className="sec-eyebrow reveal" ref={quoteRef}>About Me</div>
        <h2 className="sec-heading">Personal Profile</h2>

        <div className="about-layout">
          {/* left column */}
          <div className="reveal-left" ref={leftRef}>
            <div className="about-quote">
              <svg className="about-quote-mark" width="40" height="32" viewBox="0 0 40 32" fill="currentColor" aria-hidden="true">
                <path d="M0 32V19.2C0 8 6.4 2.133 19.2 0l2.4 4C15.467 5.333 12 8.267 12 12h8v20H0zm22 0V19.2C22 8 28.4 2.133 41.2 0l2.4 4C37.467 5.333 34 8.267 34 12h8v20H22z"/>
              </svg>
              <p className="about-quote-text">
                A dedicated and responsible Public Administration student seeking an opportunity to contribute to public service. Possesses good communication skills, adaptability, and a strong willingness to learn and grow in a dynamic environment.
              </p>
            </div>

            <div className="about-highlights">
              {highlights.map(({ label, sub, icon }) => (
                <div className="about-hl" key={label}>
                  <span className="about-hl-icon">{icon}</span>
                  <div>
                    <div className="about-hl-name">{label}</div>
                    <div className="about-hl-sub">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right column */}
          <div className="about-facts reveal-right" ref={factsRef}>
            {facts.map(({ label, value }) => (
              <div className="about-fact" key={label}>
                <span className="about-fact-label">{label}</span>
                <span className="about-fact-value">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

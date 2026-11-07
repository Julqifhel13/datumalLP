import './Footer.css';

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">JC</div>
          <div>
            <div className="footer-name">Jul-jamaal M. Cana</div>
            <div className="footer-sub">Bachelor of Public Administration · Quezon City</div>
          </div>
        </div>

        <div className="footer-copy">
          © 2024 Jul-jamaal M. Cana — All rights reserved
        </div>

        <button className="footer-top" onClick={scrollTop} aria-label="Back to top">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <polyline points="18 15 12 9 6 15"/>
          </svg>
          Back to top
        </button>
      </div>
    </footer>
  );
}

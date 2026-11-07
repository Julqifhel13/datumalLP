import { useState } from 'react';
import useReveal from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const [form,   setForm]   = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const headRef = useReveal(0);
  const formRef = useReveal(150);

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
  };

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="4" width="20" height="16" rx="2"/>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
        </svg>
      ),
      label: 'Email',
      value: 'juljamaal@gmail.com',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      label: 'Facebook',
      value: 'Jul-jamaal Cana',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
      ),
      label: 'Location',
      value: 'Barangay Culiat, Quezon City',
    },
  ];

  return (
    <section className="section section--dark" id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info side */}
          <div className="contact-info reveal-left" ref={headRef}>
            <div className="contact-eyebrow">Get in Touch</div>
            <h2 className="contact-heading">Let's Connect</h2>
            <p className="contact-desc">
              Available for academic internships, public sector practicum opportunities, and institutional verification.
            </p>
            <div className="contact-items">
              {contacts.map(({ icon, label, value }) => (
                <div className="contact-item" key={label}>
                  <div className="contact-item-icon">{icon}</div>
                  <div>
                    <div className="contact-item-label">{label}</div>
                    <div className="contact-item-value">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form side */}
          <div className="contact-form-wrap reveal-right" ref={formRef}>
            <form className="contact-form" onSubmit={onSubmit} noValidate>
              <h3 className="form-title">Send a Message</h3>
              <p className="form-note">I'll get back to you as soon as possible.</p>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input
                    className="form-input"
                    id="name" type="text"
                    placeholder="e.g. Director Maria Santos"
                    value={form.name} onChange={onChange} autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email Address</label>
                  <input
                    className="form-input"
                    id="email" type="email"
                    placeholder="name@agency.gov.ph"
                    value={form.email} onChange={onChange} autoComplete="email"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  className="form-textarea"
                  id="message"
                  placeholder="Write your message or inquiry here..."
                  value={form.message} onChange={onChange}
                />
              </div>

              {status === 'error' && (
                <p className="form-status form-status--error">Please fill in all fields.</p>
              )}
              {status === 'success' && (
                <p className="form-status form-status--success">
                  Message noted! Send it directly to <strong>juljamaal@gmail.com</strong>.
                </p>
              )}

              <button className="form-submit" type="submit">
                Send Message
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

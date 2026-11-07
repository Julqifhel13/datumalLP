import './Sidebar.css';

const rows = [
  { label: 'Age & Date of Birth', value: '18 yrs · Oct 5, 2008' },
  { label: 'Place of Birth',      value: 'Brgy. Culiat, Quezon City' },
  { label: 'Gender',              value: 'Male' },
  { label: 'Civil Status',        value: 'Single' },
  { label: 'Citizenship',         value: 'Filipino' },
  { label: 'Height & Weight',     value: "5'4\" (163 cm) · 68 kg" },
];

const parents = [
  { label: 'Father:', value: 'Muhammad H. Cana' },
  { label: 'Mother:', value: 'Sittie M. Cana' },
];

export default function PersonalInfo() {
  return (
    <div className="card">
      <div className="card-head">
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        <span className="card-title">Personal Information</span>
      </div>

      {rows.map(({ label, value }) => (
        <div className="pi-row" key={label}>
          <span className="pi-label">{label}</span>
          <span className="pi-val">{value}</span>
        </div>
      ))}

      <div className="pi-section-label">Parents</div>

      {parents.map(({ label, value }) => (
        <div className="pi-row" key={label}>
          <span className="pi-label">{label}</span>
          <span className="pi-val">{value}</span>
        </div>
      ))}
    </div>
  );
}

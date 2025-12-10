export default function Certifications() {
  return (
    <div id="certifications" className="section">
      <div className="section-header">
        <h2 className="section-title">Certifications</h2>
        <p className="section-desc">Credentials validating knowledge and practice.</p>
      </div>
      <ul className="cert-list" role="list">
        <li className="cert-item">
          <div className="cert-title">AWS Certified Cloud Practitioner</div>
          <div className="cert-meta">Amazon Web Services</div>
        </li>
        <li className="cert-item">
          <div className="cert-title">Professional Scrum Master I</div>
          <div className="cert-meta">Scrum.org</div>
        </li>
        <li className="cert-item">
          <div className="cert-title">Embedded Systems Specialization</div>
          <div className="cert-meta">Coursera</div>
        </li>
      </ul>
    </div>
  )
}

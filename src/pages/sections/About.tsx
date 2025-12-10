export default function About() {
  return (
    <div id="about" className="section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-desc">Developer exploring embedded systems and software, focused on building thoughtful, reliable products.</p>
      </div>
      <div className="about-grid">
        <div className="about-card">
          <div className="about-stat">
            <div className="stat-value">5+ yrs</div>
            <div className="stat-label">Experience</div>
          </div>
          <div className="about-stat">
            <div className="stat-value">20+</div>
            <div className="stat-label">Projects</div>
          </div>
          <div className="about-stat">
            <div className="stat-value">10</div>
            <div className="stat-label">Certs</div>
          </div>
        </div>
        <div className="about-media" aria-hidden>
          <div className="avatar-ring">
            <span className="avatar">GS</span>
          </div>
        </div>
      </div>
    </div>
  )
}

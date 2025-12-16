export default function Projects() {
  return (
    <div id="projects" className="section">
      <div className="section-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-desc">Selected work. Replace these with your provided cards unchanged; wrapper syncs theme.</p>
      </div>
      <div className="card-grid">
        <div className="section-card project-card">
          <div className="card-title">Portfolio Site</div>
          <div className="card-desc">React + Vite, responsive design, animated UI.</div>
          <a className="card-link" href="#">View</a>
        </div>
        <div className="section-card project-card">
          <div className="card-title">IoT Monitor</div>
          <div className="card-desc">MCU firmware, dashboard, real-time telemetry.</div>
          <a className="card-link" href="#">View</a>
        </div>
        <div className="section-card project-card">
          <div className="card-title">PCB Tooling</div>
          <div className="card-desc">Automations for layout checks and exports.</div>
          <a className="card-link" href="#">View</a>
        </div>
      </div>
    </div>
  )
}
export default function Papers() {
  return (
    <div id="papers" className="section">
      <div className="section-header">
        <h2 className="section-title">Papers</h2>
        <p className="section-desc">Publications and write-ups.</p>
      </div>
      <div className="card-grid">
        <div className="section-card paper-card">
          <div className="card-title">Low-power MCU Scheduling</div>
          <div className="card-desc">Approaches to timing and energy optimization.</div>
          <a className="card-link" href="#">Read</a>
        </div>
        <div className="section-card paper-card">
          <div className="card-title">Responsive UI Systems</div>
          <div className="card-desc">Designing fluid layouts across devices.</div>
          <a className="card-link" href="#">Read</a>
        </div>
      </div>
    </div>
  )
}

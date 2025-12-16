export default function Achievements() {
  return (
    <div id="achievements" className="section">
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-desc">Notable highlights across awards, publications, and contributions.</p>
      </div>
      <ol className="timeline">
        <li className="timeline-item">
          <div className="timeline-dot" aria-hidden />
          <div className="timeline-content">
            <div className="item-title">Best Innovation Award</div>
            <div className="item-meta">TechFest 2024</div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot" aria-hidden />
          <div className="timeline-content">
            <div className="item-title">Conference Speaker</div>
            <div className="item-meta">EmbeddedCon 2023</div>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot" aria-hidden />
          <div className="timeline-content">
            <div className="item-title">Open Source Contribution</div>
            <div className="item-meta">Firmware tooling</div>
          </div>
        </li>
      </ol>
    </div>
  )
}
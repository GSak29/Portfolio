import { achievements } from '../data/achievement';
import '../styles/achievements.css';

export default function Achievements() {
  return (
    <div id="achievements" className="section achievements-container">
      <div className="section-header">
        <h2 className="section-title">Achievements</h2>
        <p className="section-desc">Milestones and recognitions along the journey.</p>
      </div>
      
      <div className="achievements-grid">
        {achievements.map((item) => (
          <div key={item.id} className="achievement-card">
            <div className="achievement-content">
              <div>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
              </div>
              <a href={item.link || '#'} target="_blank"className="achievement-btn">
                Explore
              </a>
            </div>
            
            <div className="achievement-image-section">
              {item.image ? (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="achievement-img"
                  onError={(e) => {
                    // Fallback if image fails to load
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.style.backgroundColor = 'var(--site-accent)';
                  }}
                />
              ) : (
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--site-accent)' }} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
